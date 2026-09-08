"use client";

import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Language } from "@/lib/types";
import { ContactBand } from "@/components/ContactBand";
import { Post } from "@/lib/content";

const referencesCopy = { en: "References", pt: "Referências" };
const onThisPageCopy = { en: "On this page", pt: "Nesta página" };

interface TocHeading {
  id: string;
  level: number;
  html: string;
}

// Matches the .article-body heading scroll-margin-top in globals.css, so a
// TOC jump stops with the heading's title clear of the sticky nav instead
// of landing flush underneath it.
const TOC_SCROLL_OFFSET = 90;

function easeInCubic(t: number): number {
  return t * t * t;
}

function scrollToHeading(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.scrollIntoView();
    history.replaceState(null, "", `#${id}`);
    return;
  }

  const startY = window.scrollY;
  const targetY = el.getBoundingClientRect().top + window.scrollY - TOC_SCROLL_OFFSET;
  const distance = targetY - startY;
  const duration = 500;
  let startTime: number | null = null;

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeInCubic(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      history.replaceState(null, "", `#${id}`);
    }
  }
  requestAnimationFrame(step);
}

export function ArticlePageContent({
  post,
  children,
  headings,
}: {
  post: Post;
  children: React.ReactNode;
  headings: TocHeading[];
}) {
  const lang = useLocale() as Language;

  return (
    <>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "clamp(56px,9vw,96px) clamp(20px,5vw,48px) clamp(40px,6vw,56px)", display: "flex", gap: 48, alignItems: "flex-start" }}>
      <article style={{ maxWidth: 720, flex: "1 1 720px", minWidth: 0 }}>
        <Link href="/writing" className="cta-tertiary" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32 }}>
          {lang === "en" ? "← Writing" : "← Textos"}
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)" }}>
          <span>{post.date}</span>
          <span style={{ color: "var(--surface-2)" }}>·</span>
          <span style={{ color: "var(--heartwood)", border: "1px solid var(--heartwood)", borderRadius: "var(--radius-sm)", padding: "2px 6px" }}>{post.lang}</span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            fontSize: "clamp(1.9rem,3.4vw,2.6rem)",
            margin: "0 0 20px",
            color: "var(--text)",
          }}
        >
          {post.title}
        </h1>

        <p style={{ fontSize: "1.2rem", lineHeight: 1.6, color: "var(--text-muted)", margin: "0 0 40px", maxWidth: "64ch" }}>{post.dek}</p>

        {post.cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.cover}
            alt=""
            style={{ width: "100%", borderRadius: "var(--radius-md)", marginBottom: 40, display: "block" }}
          />
        )}

        <div style={{ height: 1, background: "var(--surface-2)", marginBottom: 40 }} />

        <div style={{ fontSize: "1.08rem", lineHeight: 1.75, color: "var(--text)", maxWidth: "66ch" }}>
          {children}
        </div>

        {post.citations.length > 0 && (
          <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid var(--surface-2)" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--heartwood)",
                marginBottom: 16,
              }}
            >
              {referencesCopy[lang]}
            </div>
            <ol style={{ margin: 0, paddingLeft: 20, color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.8 }}>
              {post.citations.map((c) => (
                <li key={c.url}>
                  <a href={c.url} target="_blank" rel="noreferrer" style={{ color: "var(--heartwood)" }}>
                    {c.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}
      </article>

      {headings.length > 0 && (
        <aside className="toc-rail" style={{ flex: "0 0 200px", position: "sticky", top: 96 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--heartwood)",
              marginBottom: 12,
            }}
          >
            {onThisPageCopy[lang]}
          </div>
          <nav>
            {headings.map((h) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                className={`toc-link${h.level === 3 ? " toc-link--h3" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHeading(h.id);
                }}
                dangerouslySetInnerHTML={{ __html: h.html }}
              />
            ))}
          </nav>
        </aside>
      )}
      </div>

      <ContactBand />
    </>
  );
}
