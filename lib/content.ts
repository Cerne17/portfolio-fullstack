import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Bilingual } from "./types";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(iso: string) {
  const [year, month] = iso.split("-");
  return `${year} · ${MONTHS[Number(month) - 1]}`;
}

const NOW_DIR = path.join(process.cwd(), "content/now");
const WRITING_DIR = path.join(process.cwd(), "content/writing");

export interface NowEntry {
  iso: string;
  date: string;
  line: Bilingual;
}

/** Reads content/now/*.md — one file per entry, frontmatter only (date, en, pt). Newest first. */
export function getNowEntries(): NowEntry[] {
  const files = fs.readdirSync(NOW_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(NOW_DIR, file), "utf8");
      const { data } = matter(raw);
      return {
        iso: data.date as string,
        date: formatDate(data.date as string),
        line: { en: data.en as string, pt: data.pt as string },
      };
    })
    .sort((a, b) => b.iso.localeCompare(a.iso));
}

export type PostLang = "EN" | "PT";

export interface Post {
  slug: string;
  iso: string;
  date: string;
  lang: PostLang;
  title: string;
  dek: string;
  draft: boolean;
  body: string[];
}

function readAllPosts(): Post[] {
  const files = fs.readdirSync(WRITING_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(WRITING_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const body = content
        .trim()
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean);

      return {
        slug: file.replace(/\.mdx$/, ""),
        iso: data.date as string,
        date: formatDate(data.date as string),
        lang: data.lang as PostLang,
        title: data.title as string,
        dek: data.dek as string,
        draft: Boolean(data.draft),
        body,
      };
    })
    .sort((a, b) => b.iso.localeCompare(a.iso));
}

/** Published posts only, newest first — for the /writing index. */
export function getPosts(): Post[] {
  return readAllPosts().filter((p) => !p.draft);
}

/** Any post by slug, drafts included — direct-link preview still works. */
export function getPostBySlug(slug: string): Post | undefined {
  return readAllPosts().find((p) => p.slug === slug);
}
