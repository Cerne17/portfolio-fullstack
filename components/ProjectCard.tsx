import Link from "next/link";
import { Project } from "@/content/projects";
import { Language } from "@/lib/language-context";
import { ui } from "@/lib/dictionary";
import { Tag } from "./Tag";
import { Button } from "./Button";

export function ProjectCardHero({
  project,
  lang,
}: {
  project: Project;
  lang: Language;
}) {
  return (
    <article
      className="project-card"
      style={{
        border: "var(--border-hairline)",
        borderRadius: "var(--radius-md)",
        background: "var(--surface)",
        padding: "clamp(24px, 4vw, 44px)",
        display: "flex",
        flexWrap: "wrap",
        gap: 32,
      }}
    >
      <div style={{ flex: "0 0 180px" }}>
        <Tag tone="outline">{project.pillarLabel[lang]}</Tag>
      </div>
      <div style={{ flex: "1 1 480px", minWidth: 260 }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(1.5rem,2.2vw,2rem)",
            margin: "0 0 14px",
            color: "var(--text)",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.6,
            color: "var(--text-muted)",
            margin: "0 0 20px",
            maxWidth: "60ch",
          }}
        >
          {project.thesis[lang]}
        </p>
        <div
          style={{
            borderLeft: "2px solid var(--heartwood)",
            padding: "4px 0 4px 16px",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--heartwood)",
              marginBottom: 6,
            }}
          >
            {lang === "en" ? "key decision" : "decisão-chave"}
          </div>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.55, color: "var(--text)", margin: 0, maxWidth: "56ch" }}>
            {project.keyDecision[lang]}
          </p>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <Link
            href={`/work/${project.slug}`}
            className="project-link cta-tertiary"
            style={{ color: "var(--heartwood)", fontWeight: 600, borderBottom: "1px solid transparent" }}
          >
            {ui.ctaProject[lang]} →
          </Link>
          <Button variant="tertiary" href={project.repo} target="_blank" rel="noreferrer">
            Code ↗
          </Button>
        </div>
      </div>
    </article>
  );
}

export function ProjectCardSupporting({
  project,
  lang,
}: {
  project: Project;
  lang: Language;
}) {
  return (
    <div
      style={{
        flex: "1 1 280px",
        border: "var(--border-hairline)",
        borderRadius: "var(--radius-md)",
        padding: "20px 22px",
      }}
    >
      <div style={{ fontWeight: 600, fontSize: "1.05rem", color: "var(--text)", marginBottom: 8 }}>
        {project.title}
      </div>
      <p style={{ margin: "0 0 14px", fontSize: "0.92rem", lineHeight: 1.55, color: "var(--text-muted)" }}>
        {project.thesis[lang]}
      </p>
      <Button variant="tertiary" href={project.repo} target="_blank" rel="noreferrer" style={{ fontSize: "0.85rem" }}>
        Code ↗
      </Button>
    </div>
  );
}
