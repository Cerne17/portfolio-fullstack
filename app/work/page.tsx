"use client";

import { useLanguage } from "@/lib/language-context";
import { EyebrowLabel } from "@/components/EyebrowLabel";
import { ContactBand } from "@/components/ContactBand";
import { heroProjects, supportingProjects } from "@/content/projects";
import { ProjectCardHero, ProjectCardSupporting } from "@/components/ProjectCard";

const copy = {
  eyebrow: { en: "// rings", pt: "// anéis" },
  heading: { en: "All work", pt: "Todos os projetos" },
  intro: {
    en: "Everything from a rigor-first ML pipeline for market anomalies to an event-driven robotics architecture, plus a few smaller things built along the way.",
    pt: "Do pipeline de ML voltado ao rigor para anomalias de mercado a uma arquitetura de robótica orientada a eventos, além de projetos menores feitos pelo caminho.",
  },
  moreLabel: { en: "// more work", pt: "// mais trabalhos" },
};

export default function WorkPage() {
  const { language: lang } = useLanguage();

  return (
    <>
      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "clamp(56px,9vw,96px) clamp(20px,5vw,48px) clamp(40px,6vw,56px)" }}>
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
        <p style={{ fontSize: "1.1rem", lineHeight: 1.65, color: "var(--text-muted)", margin: 0, maxWidth: "60ch" }}>{copy.intro[lang]}</p>
      </section>

      <section style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 clamp(20px,5vw,48px) clamp(56px,9vw,96px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {heroProjects.map((project) => (
            <ProjectCardHero key={project.slug} project={project} lang={lang} />
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <EyebrowLabel color="var(--text-muted)" style={{ marginBottom: 20 }}>
            {copy.moreLabel[lang]}
          </EyebrowLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {supportingProjects.map((project) => (
              <ProjectCardSupporting key={project.slug} project={project} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
