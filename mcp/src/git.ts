// Git + build helpers. Publishing on cerne.pro is "push to main" (Vercel
// deploys it, and Decap commits there too), so shipping is: validate,
// build, commit only content paths, rebase onto origin, push.

import { execFileSync } from "node:child_process";
import { ROOT } from "./content.ts";

const CONTENT_PATHS = ["content", "public/uploads"];

function run(cmd: string, args: string[], timeout = 60_000): string {
  // trimEnd only: porcelain status lines start with a meaningful space.
  return execFileSync(cmd, args, { cwd: ROOT, encoding: "utf8", timeout, stdio: ["ignore", "pipe", "pipe"] }).trimEnd();
}

function tryRun(cmd: string, args: string[], timeout?: number): { ok: boolean; out: string } {
  try {
    return { ok: true, out: run(cmd, args, timeout) };
  } catch (e) {
    const err = e as { stdout?: string; stderr?: string; message: string };
    return { ok: false, out: [err.stdout, err.stderr].filter(Boolean).join("\n").trim() || err.message };
  }
}

export function branch(): string {
  return run("git", ["rev-parse", "--abbrev-ref", "HEAD"]);
}

/** Fetches, then reports how far local main is from origin. */
export function syncState(): { branch: string; behind: number; ahead: number; fetchError?: string } {
  const fetch = tryRun("git", ["fetch", "--quiet", "origin"]);
  const counts = tryRun("git", ["rev-list", "--left-right", "--count", "HEAD...@{u}"]);
  const [ahead, behind] = counts.ok ? counts.out.split(/\s+/).map(Number) : [0, 0];
  return { branch: branch(), ahead, behind, ...(fetch.ok ? {} : { fetchError: fetch.out }) };
}

export function pull(): { ok: boolean; out: string } {
  return tryRun("git", ["pull", "--rebase", "--autostash"]);
}

export function changedContent(): string[] {
  const out = run("git", ["status", "--porcelain", "--untracked-files=all", "--", ...CONTENT_PATHS]);
  return out ? out.split("\n").map((l) => l.slice(3)) : [];
}

export function otherChanges(): string[] {
  const out = run("git", ["status", "--porcelain"]);
  if (!out) return [];
  return out
    .split("\n")
    .map((l) => l.slice(3))
    .filter((f) => !CONTENT_PATHS.some((p) => f === p || f.startsWith(`${p}/`)));
}

export function diffStat(): string {
  return tryRun("git", ["diff", "--stat", "HEAD", "--", ...CONTENT_PATHS]).out;
}

export function build(): { ok: boolean; out: string } {
  const r = tryRun("npm", ["run", "build"], 600_000);
  return { ok: r.ok, out: r.out.split("\n").slice(-40).join("\n") };
}

export function commitAndPush(message: string, files: string[]): { ok: boolean; log: string[] } {
  const log: string[] = [];
  const step = (label: string, cmd: string, args: string[]) => {
    const r = tryRun(cmd, args, 120_000);
    log.push(`${r.ok ? "✓" : "✗"} ${label}${r.out ? `\n${r.out}` : ""}`);
    return r.ok;
  };

  if (!step("git add", "git", ["add", "--", ...files])) return { ok: false, log };
  if (!step("git commit", "git", ["commit", "-m", message, "--", ...files])) return { ok: false, log };
  if (!step("git pull --rebase", "git", ["pull", "--rebase", "--autostash"])) {
    tryRun("git", ["rebase", "--abort"]);
    log.push("Rebase aborted. Your commit is still local — resolve the conflict by hand, then push.");
    return { ok: false, log };
  }
  if (!step("git push", "git", ["push"])) return { ok: false, log };
  log.push(`Pushed ${run("git", ["rev-parse", "--short", "HEAD"])} — Vercel will deploy it.`);
  return { ok: true, log };
}

export function recentCommits(days: number): string {
  return tryRun("git", ["log", `--since=${days} days ago`, "--format=%h %ad %s", "--date=short"]).out;
}
