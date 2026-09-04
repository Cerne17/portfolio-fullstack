"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { EyebrowLabel } from "@/components/EyebrowLabel";
import { ContactBand } from "@/components/ContactBand";
import { posts } from "@/content/posts";

const copy = {
  eyebrow: { en: "// writing", pt: "// textos" },
  heading: { en: "Notes on systems, data, and finance.", pt: "Notas sobre sistemas, dados e finanças." },
  sub: {
    en: "Longer-form write-ups on the methodology and decisions behind the work. In English and Portuguese.",
    pt: "Textos mais longos sobre a metodologia e as decisões por trás do trabalho. Em inglês e português.",
  },
};

export default function WritingPage() {
  const { language: lang } = useLanguage();

  return (
    <>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "clamp(56px,9vw,96px) clamp(20px,5vw,48px) clamp(40px,6vw,56px)" }}>
        <EyebrowLabel style={{ marginBottom: 20 }}>{copy.eyebrow[lang]}</EyebrowLabel>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            fontSize: "clamp(2rem,3.6vw,2.8rem)",
            margin: "0 0 20px",
            color: "var(--text)",
          }}
        >
          {copy.heading[lang]}
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.65, color: "var(--text-muted)", margin: 0 }}>{copy.sub[lang]}</p>
      </section>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(20px,5vw,48px) clamp(56px,9vw,96px)" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {posts.map((post, i) => {
            const rowStyle: React.CSSProperties = {
              display: "block",
              padding: "28px 0",
              borderTop: "1px solid var(--surface-2)",
              borderBottom: i === posts.length - 1 ? "1px solid var(--surface-2)" : undefined,
              paddingLeft: 20,
            };
            const inner = (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  <span>{post.date}</span>
                  <span style={{ color: "var(--surface-2)" }}>·</span>
                  <span style={{ color: "var(--heartwood)", border: "1px solid var(--heartwood)", borderRadius: "var(--radius-sm)", padding: "2px 6px" }}>{post.lang}</span>
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.3rem", color: "var(--text)", marginBottom: 8 }}>{post.title}</div>
                <p style={{ margin: 0, fontSize: "0.98rem", lineHeight: 1.6, color: "var(--text-muted)", maxWidth: "64ch" }}>{post.dek}</p>
              </>
            );
            const isClickable = i === 0 && Boolean(post.slug);
            return isClickable ? (
              <Link key={post.title} href={`/writing/${post.slug}`} className="writing-row" style={{ ...rowStyle, cursor: "pointer" }}>
                {inner}
              </Link>
            ) : (
              <div key={post.title} style={rowStyle}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
