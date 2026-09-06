"use client";

import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Language } from "@/lib/types";
import { ContactBand } from "@/components/ContactBand";
import { Post } from "@/lib/content";

const referencesCopy = { en: "References", pt: "Referências" };

export function ArticlePageContent({ post, children }: { post: Post; children: React.ReactNode }) {
  const lang = useLocale() as Language;

  return (
    <>
      <article style={{ maxWidth: 720, margin: "0 auto", padding: "clamp(56px,9vw,96px) clamp(20px,5vw,48px) clamp(40px,6vw,56px)" }}>
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

      <ContactBand />
    </>
  );
}
