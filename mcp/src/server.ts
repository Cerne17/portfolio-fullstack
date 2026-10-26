#!/usr/bin/env node
// cerne-blog MCP server — maintains cerne.pro content (writing, now, projects)
// straight in the git repo, bypassing Decap's rich-text round-trip, plus the
// private journal/backlog used by the weekly content interview.

import fs from "node:fs";
import path from "node:path";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  COLLECTIONS,
  ROOT,
  SLUG_RE,
  currentMonth,
  entryExists,
  listEntries,
  readEntry,
  validateEntry,
  writeEntry,
  type CollectionName,
  type Issue,
} from "./content.ts";
import * as git from "./git.ts";
import * as journal from "./journal.ts";

const server = new McpServer({ name: "cerne-blog", version: "0.1.0" });

const reply = (value: unknown) => ({
  content: [{ type: "text" as const, text: typeof value === "string" ? value : JSON.stringify(value, null, 2) }],
});

const fail = (message: string) => ({ ...reply(message), isError: true });

const collectionArg = z.enum(COLLECTIONS);
const slugArg = z.string().regex(SLUG_RE, "kebab-case slug, e.g. walk-forward-validation");
const existingSlugArg = z.string().min(1).describe("Slug of an existing entry (file name without extension).");
const monthArg = z.string().regex(/^\d{4}-\d{2}$/, "YYYY-MM");
const bilingual = z.object({ en: z.string(), pt: z.string() });
const citation = z.object({ label: z.string(), url: z.string().url() });
const forceArg = z.boolean().default(false).describe("Write even if validation reports errors. Avoid.");

function writeResult(r: { written: boolean; file: string; issues: Issue[] }) {
  const file = path.relative(ROOT, r.file);
  if (!r.written) return fail(JSON.stringify({ written: false, file, issues: r.issues }, null, 2));
  return reply({ written: true, file, issues: r.issues });
}

function daysSince(month: string | undefined): number | null {
  if (!month) return null;
  return Math.floor((Date.now() - new Date(`${month}-01T00:00:00Z`).getTime()) / 86_400_000);
}

// ---------------------------------------------------------------- reading

server.registerTool(
  "content_status",
  {
    description:
      "Overview of the site's content: published vs draft posts, newest post and Now entry, projects, " +
      "uncommitted content changes and whether local main is behind origin (Decap commits there too). " +
      "Call this first in any maintenance session.",
    inputSchema: {},
  },
  async () => {
    const posts = listEntries("writing");
    const published = posts.filter((p) => !p.data.draft).sort((a, b) => String(b.data.date).localeCompare(String(a.data.date)));
    const drafts = posts.filter((p) => p.data.draft);
    const now = listEntries("now").sort((a, b) => b.slug.localeCompare(a.slug));
    const projects = listEntries("projects").sort((a, b) => Number(a.data.order) - Number(b.data.order));
    return reply({
      writing: {
        published: published.map((p) => ({ slug: p.slug, date: p.data.date, lang: p.data.lang, title: p.data.title })),
        drafts: drafts.map((p) => ({ slug: p.slug, date: p.data.date, title: p.data.title })),
        daysSinceLastPublished: daysSince(published[0]?.data.date as string | undefined),
      },
      now: { latest: now[0] ? { date: now[0].slug, en: now[0].data.en } : null, daysSinceLatest: daysSince(now[0]?.slug) },
      projects: projects.map((p) => ({ slug: p.slug, title: p.data.title, hero: p.data.hero, year: p.data.year })),
      git: { ...git.syncState(), uncommittedContent: git.changedContent(), otherUncommitted: git.otherChanges() },
      journal: { dir: journal.JOURNAL_DIR, openIdeas: journal.readBacklog().filter((i) => i.status === "open").length },
    });
  },
);

server.registerTool(
  "list_content",
  {
    description: "List entries of a collection (writing, now, projects) with their frontmatter, without bodies.",
    inputSchema: { collection: collectionArg },
  },
  async ({ collection }) => reply(listEntries(collection).map((e) => ({ slug: e.slug, ...e.data }))),
);

server.registerTool(
  "get_content",
  {
    description: "Read one entry: frontmatter plus full markdown body.",
    inputSchema: { collection: collectionArg, slug: existingSlugArg },
  },
  async ({ collection, slug }) => {
    const e = readEntry(collection, slug);
    return e ? reply({ slug, data: e.data, body: e.body }) : fail(`No ${collection} entry "${slug}"`);
  },
);

server.registerTool(
  "validate_content",
  {
    description:
      "Validate entries against the Decap schema (public/admin/config.yml) and check article math with KaTeX " +
      "(unbalanced $$, Decap-escaped \\_ \\[ \\], unparseable LaTeX). Omit slug to check a whole collection, " +
      "omit collection to check everything.",
    inputSchema: { collection: collectionArg.optional(), slug: existingSlugArg.optional() },
  },
  async ({ collection, slug }) => {
    const names: CollectionName[] = collection ? [collection] : [...COLLECTIONS];
    const issues: (Issue & { collection: string })[] = [];
    for (const name of names) {
      const entries = slug ? [readEntry(name, slug)].filter((e) => e !== undefined) : listEntries(name);
      for (const e of entries) issues.push(...validateEntry(name, e).map((i) => ({ ...i, collection: name })));
    }
    return reply({ ok: !issues.some((i) => i.severity === "error"), issues });
  },
);

// ---------------------------------------------------------------- writing

server.registerTool(
  "create_post",
  {
    description:
      "Create a new article in content/writing as a DRAFT (draft: true — reachable by direct link, hidden from " +
      "/writing). Body is markdown: KaTeX via $..$ / $$..$$ on their own lines, ```js blocks starting with // live " +
      "run as p5.js sketches. Publish later with set_post_draft.",
    inputSchema: {
      slug: slugArg,
      title: z.string(),
      dek: z.string().describe("One-line summary shown under the title and in the index."),
      lang: z.enum(["EN", "PT"]),
      date: monthArg.optional().describe("YYYY-MM, defaults to the current month."),
      body: z.string(),
      cover: z.string().optional().describe("Path under public/, e.g. /uploads/cover.jpeg (see add_upload)."),
      citations: z.array(citation).optional(),
      force: forceArg,
    },
  },
  async ({ slug, force, date, ...fields }) => {
    if (entryExists("writing", slug)) return fail(`content/writing/${slug}.mdx already exists — use update_post`);
    const { body, ...rest } = fields;
    return writeResult(writeEntry("writing", slug, { date: date ?? currentMonth(), ...rest, draft: true }, body, force));
  },
);

server.registerTool(
  "update_post",
  {
    description:
      "Edit an existing article. Only the fields you pass change. Pass `body` to replace the whole body. " +
      "Does not change draft status — use set_post_draft.",
    inputSchema: {
      slug: existingSlugArg,
      title: z.string().optional(),
      dek: z.string().optional(),
      lang: z.enum(["EN", "PT"]).optional(),
      date: monthArg.optional(),
      cover: z.string().nullable().optional().describe("null removes the cover."),
      citations: z.array(citation).optional(),
      body: z.string().optional(),
      force: forceArg,
    },
  },
  async ({ slug, force, body, cover, ...fields }) => {
    const e = readEntry("writing", slug);
    if (!e) return fail(`No article "${slug}"`);
    const patch = Object.fromEntries(Object.entries(fields).filter(([, v]) => v !== undefined));
    const data = { ...e.data, ...patch };
    if (cover === null) delete data.cover;
    else if (cover !== undefined) data.cover = cover;
    return writeResult(writeEntry("writing", slug, data, body ?? e.body, force));
  },
);

server.registerTool(
  "set_post_draft",
  {
    description:
      "Publish (draft: false) or unpublish (draft: true) an article. Only changes the file — nothing goes live " +
      "until ship pushes it.",
    inputSchema: { slug: existingSlugArg, draft: z.boolean() },
  },
  async ({ slug, draft }) => {
    const e = readEntry("writing", slug);
    if (!e) return fail(`No article "${slug}"`);
    return writeResult(writeEntry("writing", slug, { ...e.data, draft }, e.body));
  },
);

server.registerTool(
  "upsert_now_entry",
  {
    description:
      "Create or replace the /now entry for a month (one line, bilingual). The newest entry is what the /now page " +
      "leads with. Keep both languages saying the same thing.",
    inputSchema: { date: monthArg.optional().describe("YYYY-MM, defaults to the current month."), en: z.string(), pt: z.string() },
  },
  async ({ date, en, pt }) => {
    const month = date ?? currentMonth();
    // Match on the date field, not the file name — older Decap files are named after a different month.
    const existing = listEntries("now").find((e) => e.data.date === month);
    if (!existing && entryExists("now", month))
      return fail(`content/now/${month}.md exists but holds a different month — fix its date or rename it first`);
    return writeResult(writeEntry("now", existing?.slug ?? month, { date: month, en, pt }, ""));
  },
);

server.registerTool(
  "upsert_project",
  {
    description:
      "Create a project card or update one. Only the fields you pass change; bilingual objects merge per language. " +
      "Creating requires every schema field (title, pillar, pillarLabel, year, role, stack, hero, order, repo, thesis, keyDecision).",
    inputSchema: {
      slug: slugArg,
      title: z.string().optional(),
      pillar: z.enum(["data-finance", "system-design", "full-stack", "algorithms"]).optional(),
      pillarLabel: bilingual.partial().optional(),
      year: z.string().optional(),
      role: bilingual.partial().optional(),
      stack: z.array(z.string()).optional(),
      hero: z.boolean().optional(),
      order: z.number().optional(),
      repo: z.string().url().optional(),
      demo: z.string().url().nullable().optional().describe("null removes the demo link."),
      thesis: bilingual.partial().optional(),
      keyDecision: bilingual.partial().optional(),
      lede: bilingual.partial().optional().describe("Long write-up; blank line between paragraphs."),
      force: forceArg,
    },
  },
  async ({ slug, force, demo, ...fields }) => {
    const data: Record<string, unknown> = { ...(readEntry("projects", slug)?.data ?? {}) };
    for (const [key, value] of Object.entries(fields)) {
      if (value === undefined) continue;
      const isBilingual = typeof value === "object" && !Array.isArray(value);
      data[key] = isBilingual ? { ...(data[key] as object | undefined), ...value } : value;
    }
    if (demo === null) delete data.demo;
    else if (demo !== undefined) data.demo = demo;
    return writeResult(writeEntry("projects", slug, data, "", force));
  },
);

server.registerTool(
  "add_upload",
  {
    description: "Copy a local image/video into public/uploads so an article can use it. Returns the public path.",
    inputSchema: {
      source: z.string().describe("Absolute path of the file on this machine."),
      name: z
        .string()
        .regex(/^[a-z0-9_-]+\.(jpe?g|png|gif|webp|svg|mp4|webm)$/i, "e.g. markowitz_cover.jpeg")
        .optional()
        .describe("File name under public/uploads; defaults to the source file name."),
    },
  },
  async ({ source, name }) => {
    if (!fs.existsSync(source)) return fail(`Not found: ${source}`);
    const target = path.join(ROOT, "public/uploads", name ?? path.basename(source));
    if (fs.existsSync(target)) return fail(`${path.relative(ROOT, target)} already exists — pick another name`);
    fs.copyFileSync(source, target);
    return reply({ publicPath: `/uploads/${path.basename(target)}` });
  },
);

// ---------------------------------------------------------------- shipping

server.registerTool(
  "sync",
  {
    description: "git pull --rebase on the repo, to pick up commits Decap made on main before editing.",
    inputSchema: {},
  },
  async () => {
    const r = git.pull();
    return r.ok ? reply(r.out || "Up to date.") : fail(r.out);
  },
);

server.registerTool(
  "ship",
  {
    description:
      "Publish content changes: validate everything, run `npm run build`, commit ONLY content/ and public/uploads, " +
      "rebase onto origin/main and push (Vercel deploys main). Two-step: call with confirm=false to get the plan " +
      "(files + diff), show it to the user, and call again with confirm=true only after they explicitly approve.",
    inputSchema: {
      message: z.string().describe('Conventional commit, e.g. "content(writing): publish walk-forward-validation"'),
      confirm: z.boolean().default(false),
      build: z.boolean().default(true).describe("Run `npm run build` before committing (recommended)."),
    },
  },
  async ({ message, confirm, build }) => {
    const currentBranch = git.branch();
    if (currentBranch !== "main") return fail(`On branch "${currentBranch}" — ship only pushes from main.`);

    const files = git.changedContent();
    if (files.length === 0) return reply("No content changes to ship.");

    const issues: Issue[] = [];
    for (const name of COLLECTIONS) for (const e of listEntries(name)) issues.push(...validateEntry(name, e));
    const errors = issues.filter((i) => i.severity === "error");
    if (errors.length) return fail(JSON.stringify({ shipped: false, reason: "validation errors", errors }, null, 2));

    if (!confirm) {
      return reply({
        plan: "Commit these files, rebase onto origin/main, push. Show this to the user and ask before confirm=true.",
        message,
        files,
        diffStat: git.diffStat(),
        warnings: issues,
        notIncluded: git.otherChanges(),
        willBuild: build,
      });
    }

    if (build) {
      const b = git.build();
      if (!b.ok) return fail(`Build failed — nothing committed.\n\n${b.out}`);
    }
    const r = git.commitAndPush(message, files);
    return r.ok ? reply(r.log.join("\n\n")) : fail(r.log.join("\n\n"));
  },
);

// ---------------------------------------------------------------- journal

server.registerTool(
  "weekly_context",
  {
    description:
      "Everything the weekly interview needs before asking questions: this repo's recent commits, the last journal " +
      "entries, open backlog ideas and the current ISO week.",
    inputSchema: { days: z.number().int().min(1).max(60).default(7), entries: z.number().int().min(0).max(12).default(3) },
  },
  async ({ days, entries }) =>
    reply({
      week: journal.isoWeek(),
      portfolioCommits: git.recentCommits(days),
      recentJournal: journal.recentEntries(entries),
      backlog: journal.readBacklog().filter((i) => i.status === "open" || i.status === "drafted"),
    }),
);

server.registerTool(
  "journal_write",
  {
    description:
      "Save the weekly interview log (private, outside the repo). Overwrites that week's file. Include: what was done, " +
      "notable learnings, the decision (post / now / project / backlog / nothing) and why.",
    inputSchema: {
      markdown: z.string(),
      week: z.string().regex(/^\d{4}-W\d{2}$/).optional().describe("YYYY-Www, defaults to the current ISO week."),
    },
  },
  async ({ markdown, week }) => reply({ file: journal.writeEntry(week ?? journal.isoWeek(), markdown) }),
);

server.registerTool(
  "backlog_list",
  {
    description: "List post/content ideas from the private backlog.",
    inputSchema: { status: z.enum(["open", "drafted", "published", "dropped"]).optional() },
  },
  async ({ status }) => reply(journal.readBacklog().filter((i) => !status || i.status === status)),
);

server.registerTool(
  "backlog_upsert",
  {
    description: "Add an idea to the backlog (omit id) or update one (pass id) — e.g. mark it drafted with the post slug.",
    inputSchema: {
      id: z.string().optional(),
      title: z.string().optional(),
      kind: z.enum(["post", "now", "project", "other"]).optional(),
      status: z.enum(["open", "drafted", "published", "dropped"]).optional(),
      notes: z.string().optional(),
      slug: z.string().optional(),
    },
  },
  async (input) => {
    try {
      return reply(journal.upsertIdea(input));
    } catch (e) {
      return fail((e as Error).message);
    }
  },
);

await server.connect(new StdioServerTransport());
