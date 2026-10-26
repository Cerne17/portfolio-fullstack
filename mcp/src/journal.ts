// The weekly-interview journal lives OUTSIDE the repo (the repo is public):
// one markdown file per ISO week plus a JSON backlog of post ideas.

import fs from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { ROOT } from "./content.ts";

export const JOURNAL_DIR = process.env.CERNE_JOURNAL_DIR ?? path.resolve(ROOT, "../journal");
const ENTRIES_DIR = path.join(JOURNAL_DIR, "entries");
const BACKLOG_FILE = path.join(JOURNAL_DIR, "backlog.json");

export type IdeaKind = "post" | "now" | "project" | "other";
export type IdeaStatus = "open" | "drafted" | "published" | "dropped";

export interface Idea {
  id: string;
  title: string;
  kind: IdeaKind;
  status: IdeaStatus;
  notes: string;
  slug?: string;
  created: string;
  updated: string;
}

function ensureDirs() {
  fs.mkdirSync(ENTRIES_DIR, { recursive: true });
}

/** ISO-8601 week label, e.g. 2026-W44. */
export function isoWeek(date = new Date()): string {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

export function recentEntries(count: number): { week: string; text: string }[] {
  ensureDirs();
  return fs
    .readdirSync(ENTRIES_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .reverse()
    .slice(0, count)
    .map((f) => ({ week: f.replace(/\.md$/, ""), text: fs.readFileSync(path.join(ENTRIES_DIR, f), "utf8") }));
}

export function writeEntry(week: string, markdown: string): string {
  if (!/^\d{4}-W\d{2}$/.test(week)) throw new Error(`Invalid week "${week}" — use YYYY-Www`);
  ensureDirs();
  const file = path.join(ENTRIES_DIR, `${week}.md`);
  fs.writeFileSync(file, markdown.trim() + "\n");
  return file;
}

export function readBacklog(): Idea[] {
  ensureDirs();
  if (!fs.existsSync(BACKLOG_FILE)) return [];
  return JSON.parse(fs.readFileSync(BACKLOG_FILE, "utf8")) as Idea[];
}

export function upsertIdea(input: Partial<Idea> & { title?: string }): Idea {
  const backlog = readBacklog();
  const now = new Date().toISOString().slice(0, 10);
  const existing = input.id ? backlog.find((i) => i.id === input.id) : undefined;
  if (input.id && !existing) throw new Error(`No idea with id "${input.id}"`);

  let idea: Idea;
  if (existing) {
    idea = Object.assign(existing, Object.fromEntries(Object.entries(input).filter(([, v]) => v !== undefined)), {
      updated: now,
    });
  } else {
    if (!input.title) throw new Error("A new idea needs a title");
    idea = {
      id: randomUUID().slice(0, 8),
      title: input.title,
      kind: input.kind ?? "post",
      status: input.status ?? "open",
      notes: input.notes ?? "",
      slug: input.slug,
      created: now,
      updated: now,
    };
    backlog.push(idea);
  }
  fs.writeFileSync(BACKLOG_FILE, JSON.stringify(backlog, null, 2) + "\n");
  return idea;
}
