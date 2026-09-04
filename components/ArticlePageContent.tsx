"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { ContactBand } from "@/components/ContactBand";
import { Post } from "@/lib/content";

export function ArticlePageContent({ post }: { post: Post }) {
  const { language: lang } = useLanguage();

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

        <div style={{ height: 1, background: "var(--surface-2)", marginBottom: 40 }} />

        <div style={{ fontSize: "1.08rem", lineHeight: 1.75, color: "var(--text)", maxWidth: "66ch" }}>
          {post.body.map((para, i) => (
            <p key={i} style={{ margin: i === post.body.length - 1 ? 0 : "0 0 24px" }}>
              {para}
            </p>
          ))}
        </div>
      </article>

      <ContactBand />
    </>
  );
}
