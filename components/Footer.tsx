"use client";

import { useLocale } from "next-intl";
import { Language } from "@/lib/types";
import { links, footerBio } from "@/lib/dictionary";

export function Footer() {
  const language = useLocale() as Language;

  return (
    <footer style={{ borderTop: "1px solid var(--surface-2)" }}>
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "32px clamp(20px,5vw,48px)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 16,
          alignItems: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>
          {footerBio[language]}
          {" · Rio de Janeiro · -22.9, -43.2"}
        </p>
        <div style={{ display: "flex", gap: 20, fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="cta-tertiary">
            LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noreferrer" className="cta-tertiary">
            GitHub
          </a>
          <a href={`mailto:${links.email}`} className="cta-tertiary">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
