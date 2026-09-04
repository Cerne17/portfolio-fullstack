"use client";

import { useLanguage } from "@/lib/language-context";
import { EyebrowLabel } from "@/components/EyebrowLabel";
import { ContactBand } from "@/components/ContactBand";
import { nowEntries, nowIntro } from "@/content/now";

export default function NowPage() {
  const { language: lang } = useLanguage();

  return (
    <>
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "clamp(56px,9vw,96px) clamp(20px,5vw,48px) clamp(40px,6vw,56px)" }}>
        <EyebrowLabel style={{ marginBottom: 20 }}>{nowIntro.eyebrow[lang]}</EyebrowLabel>
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
          {nowIntro.heading[lang]}
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.65, color: "var(--text-muted)", margin: 0 }}>{nowIntro.sub[lang]}</p>
      </section>

      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 clamp(20px,5vw,48px) clamp(56px,9vw,96px)" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {nowEntries.map((entry, i) => (
            <div
              key={entry.date}
              style={{
                display: "flex",
                gap: 24,
                padding: "28px 0",
                borderTop: "1px solid var(--surface-2)",
                borderBottom: i === nowEntries.length - 1 ? "1px solid var(--surface-2)" : undefined,
              }}
            >
              <span style={{ flex: "0 0 100px", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--heartwood)", paddingTop: 2 }}>
                {entry.date}
              </span>
              <p style={{ margin: 0, fontSize: "1.02rem", lineHeight: 1.6, color: "var(--text)" }}>{entry.line[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
