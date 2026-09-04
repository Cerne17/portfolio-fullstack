"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { Project } from "@/lib/content";
import { EyebrowLabel } from "@/components/EyebrowLabel";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { ContactBand } from "@/components/ContactBand";
import { ui } from "@/lib/dictionary";

export function ProjectPageContent({ project }: { project: Project }) {
  const { language: lang } = useLanguage();

  return (
    <>
      <article style={{ maxWidth: 720, margin: "0 auto", padding: "clamp(56px,9vw,96px) clamp(20px,5vw,48px) clamp(40px,6vw,56px)" }}>
        <Link href="/work" className="cta-tertiary" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32 }}>
          {lang === "en" ? "← Work" : "← Projetos"}
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
          <Tag tone="outline">{project.pillarLabel[lang]}</Tag>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)" }}>
            {project.year} · {project.role[lang]}
          </span>
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
          {project.title}
        </h1>

        <p style={{ fontSize: "1.2rem", lineHeight: 1.6, color: "var(--text-muted)", margin: "0 0 40px", maxWidth: "64ch" }}>
          {project.thesis[lang]}
        </p>

        <div style={{ height: 1, background: "var(--surface-2)", marginBottom: 40 }} />

        {project.lede ? (
          <div style={{ fontSize: "1.08rem", lineHeight: 1.75, color: "var(--text)", maxWidth: "66ch" }}>
            {project.lede[lang].map((para, i) => (
              <p key={i} style={{ margin: "0 0 24px" }}>
                {para}
              </p>
            ))}
          </div>
        ) : (
          <div
            style={{
              borderLeft: "2px solid var(--heartwood)",
              padding: "4px 0 4px 16px",
              marginBottom: 32,
            }}
          >
            <EyebrowLabel style={{ marginBottom: 6, fontSize: "0.7rem" }}>
              {lang === "en" ? "key decision" : "decisão-chave"}
            </EyebrowLabel>
            <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "var(--text)", margin: 0, maxWidth: "60ch" }}>
              {project.keyDecision[lang]}
            </p>
          </div>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "32px 0" }}>
          {project.stack.map((s) => (
            <Tag key={s} tone="muted">
              {s}
            </Tag>
          ))}
        </div>

        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <Button variant="secondary" href={project.repo} target="_blank" rel="noreferrer">
            {ui.ctaGithub[lang]}
          </Button>
          {project.demo && (
            <Button variant="tertiary" href={project.demo} target="_blank" rel="noreferrer" style={{ color: "var(--heartwood)", fontWeight: 600 }}>
              {lang === "en" ? "Live demo →" : "Demo ao vivo →"}
            </Button>
          )}
        </div>
      </article>

      <ContactBand />
    </>
  );
}
