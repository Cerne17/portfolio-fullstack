"use client";

import { useLanguage } from "@/lib/language-context";
import { links, contactBand, ui } from "@/lib/dictionary";
import { Button } from "./Button";
import { EyebrowLabel } from "./EyebrowLabel";

export function ContactBand() {
  const { language } = useLanguage();

  return (
    <section style={{ borderTop: "1px solid var(--surface-2)", background: "var(--surface)" }}>
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "clamp(56px,9vw,112px) clamp(20px,5vw,48px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 32,
        }}
      >
        <EyebrowLabel>{contactBand.eyebrow[language]}</EyebrowLabel>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(1.9rem,3.6vw,2.8rem)",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
            margin: 0,
            color: "var(--text)",
            maxWidth: "22ch",
          }}
        >
          {contactBand.heading[language]}
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24 }}>
          <Button
            variant="primary"
            href={links.linkedin}
            style={{ padding: "16px 28px", fontSize: "1.05rem" }}
          >
            {ui.ctaLinkedin[language]}
          </Button>
          <Button
            variant="secondary"
            href={links.github}
            style={{ padding: "16px 28px", fontSize: "1.05rem" }}
          >
            GitHub
          </Button>
          <a
            href={`mailto:${links.email}`}
            className="cta-tertiary"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.95rem",
              borderBottom: "1px solid transparent",
            }}
          >
            {links.email}
          </a>
        </div>
      </div>
    </section>
  );
}
