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
const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

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

export interface Citation {
  label: string;
  url: string;
}

export interface Post {
  slug: string;
  iso: string;
  date: string;
  lang: PostLang;
  title: string;
  dek: string;
  draft: boolean;
  cover?: string;
  body: string;
  citations: Citation[];
}

function readAllPosts(): Post[] {
  const files = fs.readdirSync(WRITING_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(WRITING_DIR, file), "utf8");
      const { data, content } = matter(raw);

      return {
        slug: file.replace(/\.mdx$/, ""),
        iso: data.date as string,
        date: formatDate(data.date as string),
        lang: data.lang as PostLang,
        title: data.title as string,
        dek: data.dek as string,
        draft: Boolean(data.draft),
        cover: data.cover as string | undefined,
        body: content.trim(),
        citations: (data.citations as Citation[] | undefined) ?? [],
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

export type Pillar = "data-finance" | "system-design" | "full-stack" | "algorithms";

export interface Project {
  slug: string;
  title: string;
  pillar: Pillar;
  pillarLabel: Bilingual;
  year: string;
  role: Bilingual;
  stack: string[];
  hero: boolean;
  order: number;
  repo: string;
  demo?: string;
  thesis: Bilingual;
  keyDecision: Bilingual;
  lede?: { en: string[]; pt: string[] };
}

function splitParagraphs(text: string): string[] {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/** Reads content/projects/*.mdx — nested YAML frontmatter for bilingual fields, no body used. */
export function getProjects(): Project[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));

  const projects = files.map((file) => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf8");
    const { data } = matter(raw);

    return {
      slug: file.replace(/\.mdx$/, ""),
      title: data.title as string,
      pillar: data.pillar as Pillar,
      pillarLabel: data.pillarLabel as Bilingual,
      year: data.year as string,
      role: data.role as Bilingual,
      stack: data.stack as string[],
      hero: Boolean(data.hero),
      order: Number(data.order),
      repo: data.repo as string,
      demo: data.demo as string | undefined,
      thesis: data.thesis as Bilingual,
      keyDecision: data.keyDecision as Bilingual,
      lede: data.lede
        ? {
            en: splitParagraphs((data.lede as Bilingual).en),
            pt: splitParagraphs((data.lede as Bilingual).pt),
          }
        : undefined,
    };
  });

  return projects.sort((a, b) => a.order - b.order);
}

export function getHeroProjects(): Project[] {
  return getProjects().filter((p) => p.hero);
}

export function getSupportingProjects(): Project[] {
  return getProjects().filter((p) => !p.hero);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((p) => p.slug === slug);
}
