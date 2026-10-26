// Content access for the cerne.pro repo. The schema is read from
// public/admin/config.yml (the Decap CMS config), so the MCP and the CMS
// can never disagree about what a valid writing/now/project entry is.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import YAML from "yaml";
import katex from "katex";

export const ROOT = process.env.CERNE_REPO ?? path.resolve(import.meta.dirname, "../..");

export const COLLECTIONS = ["writing", "now", "projects"] as const;
export type CollectionName = (typeof COLLECTIONS)[number];

interface Field {
  name: string;
  label?: string;
  widget: string;
  required?: boolean;
  default?: unknown;
  pattern?: [string, string];
  options?: string[];
  fields?: Field[];
}

interface Collection {
  name: string;
  folder: string;
  extension?: string;
  fields: Field[];
}

export interface Entry {
  slug: string;
  file: string;
  data: Record<string, unknown>;
  body: string;
}

export interface Issue {
  severity: "error" | "warning";
  where: string;
  message: string;
}

export const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function loadSchema(): Record<string, Collection> {
  const raw = fs.readFileSync(path.join(ROOT, "public/admin/config.yml"), "utf8");
  const config = YAML.parse(raw) as { collections: Collection[] };
  return Object.fromEntries(config.collections.map((c) => [c.name, c]));
}

function collection(name: CollectionName): Collection {
  const c = loadSchema()[name];
  if (!c) throw new Error(`Collection "${name}" not found in public/admin/config.yml`);
  return c;
}

// Only guards against path traversal: Decap derives slugs from titles and can
// produce non-kebab ones (e.g. with "—"), which must stay readable and editable.
// New entries get the stricter SLUG_RE check at the tool boundary.
function fileFor(name: CollectionName, slug: string): string {
  if (!slug || /[/\\]|^\.\.?$/.test(slug)) throw new Error(`Invalid slug "${slug}"`);
  const c = collection(name);
  return path.join(ROOT, c.folder, `${slug}.${c.extension ?? "md"}`);
}

export function listEntries(name: CollectionName): Entry[] {
  const c = collection(name);
  const dir = path.join(ROOT, c.folder);
  const ext = `.${c.extension ?? "md"}`;
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(ext))
    .map((f) => readEntry(name, f.slice(0, -ext.length)))
    .filter((e): e is Entry => e !== undefined);
}

export function readEntry(name: CollectionName, slug: string): Entry | undefined {
  const file = fileFor(name, slug);
  if (!fs.existsSync(file)) return undefined;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return { slug, file, data, body: content.replace(/^\n+/, "") };
}

export function entryExists(name: CollectionName, slug: string): boolean {
  return fs.existsSync(fileFor(name, slug));
}

/** Validates, then writes. Refuses on any error unless `force`; returns every issue found. */
export function writeEntry(
  name: CollectionName,
  slug: string,
  data: Record<string, unknown>,
  body: string,
  force = false,
): { written: boolean; file: string; issues: Issue[] } {
  const file = fileFor(name, slug);
  const issues = validate(name, data, body);
  if (!force && issues.some((i) => i.severity === "error")) return { written: false, file, issues };

  const text = `---\n${toFrontmatter(data)}---\n${body.trim() ? `\n${body.trim()}\n` : ""}`;
  fs.writeFileSync(file, text);
  return { written: true, file, issues };
}

/**
 * Serializes frontmatter in the repo's hand-written style: double-quoted
 * strings, multi-line text as `|` blocks, scalar lists inline, no line folding.
 */
function toFrontmatter(data: Record<string, unknown>): string {
  const doc = new YAML.Document(JSON.parse(JSON.stringify(data)));
  YAML.visit(doc, {
    Scalar(key, node) {
      if (key === "key" || typeof node.value !== "string") return;
      if (node.value.includes("\n")) node.type = YAML.Scalar.BLOCK_LITERAL;
      else if (node.value.includes('"') && !node.value.includes("'")) node.type = YAML.Scalar.QUOTE_SINGLE;
      else node.type = YAML.Scalar.QUOTE_DOUBLE;
    },
    Seq(_, node) {
      node.flow = node.items.every((item) => YAML.isScalar(item));
    },
  });
  return doc.toString({ lineWidth: 0, flowCollectionPadding: false });
}

export function validateEntry(name: CollectionName, entry: Entry): Issue[] {
  const issues = validate(name, entry.data, entry.body);
  // Decap names Now files after the date at creation; editing the date later leaves them out of sync.
  if (name === "now" && entry.data.date !== entry.slug)
    issues.push({ severity: "warning", where: "date", message: `file is named ${entry.slug} but date is ${entry.data.date}` });
  if (name !== "now" && !SLUG_RE.test(entry.slug))
    issues.push({ severity: "warning", where: "slug", message: "not kebab-case — the URL will carry encoded characters" });
  return issues.map((i) => ({ ...i, where: `${entry.slug}: ${i.where}` }));
}

function validate(name: CollectionName, data: Record<string, unknown>, body: string): Issue[] {
  const fields = collection(name).fields.filter((f) => f.name !== "body");
  const issues = validateFields(fields, data, "");
  if (name === "writing") issues.push(...validateBody(body));
  return issues;
}

function validateFields(fields: Field[], data: Record<string, unknown>, prefix: string): Issue[] {
  const issues: Issue[] = [];
  const known = new Set(fields.map((f) => f.name));

  for (const f of fields) {
    const where = `${prefix}${f.name}`;
    const value = data[f.name];
    const err = (message: string) => issues.push({ severity: "error", where, message });

    if (value === undefined || value === null || value === "") {
      if (f.required !== false && f.default === undefined) err("required field is missing");
      continue;
    }

    switch (f.widget) {
      case "string":
      case "text":
        if (typeof value !== "string") err(`expected text, got ${typeof value}`);
        else if (f.pattern && !new RegExp(f.pattern[0]).test(value)) err(f.pattern[1]);
        break;
      case "number":
        if (typeof value !== "number") err(`expected a number, got ${typeof value}`);
        break;
      case "boolean":
        if (typeof value !== "boolean") err(`expected true/false, got ${typeof value}`);
        break;
      case "select":
        if (!f.options?.includes(String(value))) err(`must be one of: ${f.options?.join(", ")}`);
        break;
      case "image": {
        const local = path.join(ROOT, "public", String(value));
        if (typeof value !== "string") err("expected an image path");
        else if (value.startsWith("/") && !fs.existsSync(local)) err(`image not found at public${value}`);
        break;
      }
      case "object":
        if (typeof value !== "object" || Array.isArray(value)) err("expected an object");
        else issues.push(...validateFields(f.fields ?? [], value as Record<string, unknown>, `${where}.`));
        break;
      case "list":
        if (!Array.isArray(value)) err("expected a list");
        else if (f.fields)
          value.forEach((item, i) =>
            issues.push(...validateFields(f.fields!, item as Record<string, unknown>, `${where}[${i}].`)),
          );
        break;
    }
  }

  for (const key of Object.keys(data)) {
    if (!known.has(key))
      issues.push({ severity: "warning", where: `${prefix}${key}`, message: "field is not in the CMS schema" });
  }
  return issues;
}

/**
 * Checks the markdown body for the failure modes this repo has actually hit:
 * unbalanced $$ fences (the "glued blocks" bug), Decap-escaped LaTeX (\_, \[, \])
 * and any expression KaTeX can't parse — the same thing that breaks on the live page.
 */
function validateBody(body: string): Issue[] {
  const issues: Issue[] = [];
  // Strip fenced and inline code so $ inside code isn't treated as math.
  const prose = body.replace(/^(```|~~~)[\s\S]*?^\1/gm, "").replace(/`[^`\n]*`/g, "");

  const fences = prose.match(/\$\$/g)?.length ?? 0;
  if (fences % 2 !== 0)
    issues.push({ severity: "error", where: "body", message: "unbalanced $$ — a display-math block is not closed" });

  const check = (tex: string, displayMode: boolean) => {
    const where = `body math ${displayMode ? "$$" : "$"}${tex.trim().slice(0, 40)}…`;
    if (/\\_|\\\[|\\\]/.test(tex))
      issues.push({ severity: "warning", where, message: "contains \\_ \\[ or \\] — likely Decap rich-text escaping, not LaTeX" });
    try {
      katex.renderToString(tex, { displayMode, throwOnError: true });
    } catch (e) {
      issues.push({ severity: "error", where, message: `KaTeX: ${(e as Error).message}` });
    }
  };

  const withoutDisplay = prose.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex: string) => {
    check(tex, true);
    return "";
  });
  for (const m of withoutDisplay.matchAll(/(?<![\\$])\$([^$\n]+?)\$(?!\$)/g)) check(m[1], false);

  if (/^#{1,6} .*\$\$\s*$/m.test(prose) || /\$\$[ \t]*#{1,6} /m.test(prose))
    issues.push({ severity: "error", where: "body", message: "a heading is on the same line as $$ — blocks are glued together" });

  return issues;
}

export function currentMonth(): string {
  return new Date().toISOString().slice(0, 7);
}
