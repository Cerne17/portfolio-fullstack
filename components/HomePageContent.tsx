"use client";

import { useLanguage } from "@/lib/language-context";
import { links, ui } from "@/lib/dictionary";
import { Project } from "@/lib/content";
import { EyebrowLabel } from "@/components/EyebrowLabel";
import { Button } from "@/components/Button";
import { RingGraphic } from "@/components/RingGraphic";
import { Headshot } from "@/components/Headshot";
import { ProjectCardHero, ProjectCardSupporting } from "@/components/ProjectCard";
import { ContactBand } from "@/components/ContactBand";

const copy = {
  hero: {
    eyebrow: { en: "// core", pt: "// núcleo" },
    headline: {
      en: "I build data systems for finance — the kind where being wrong is expensive.",
      pt: "Construo sistemas de dados para finanças — daqueles em que errar sai caro.",
    },
    sub: {
      en: "Software engineer working where software, data, and quantitative finance meet. Currently at JGP Crédito, on the infrastructure behind financial-markets data.",
      pt: "Engenheiro de software atuando onde software, dados e finanças quantitativas se encontram. Hoje na JGP Crédito, na infraestrutura por trás dos dados de mercado.",
    },
  },
  whatIDo: {
    eyebrow: { en: "// what i do", pt: "// o que eu faço" },
    line: {
      en: "Three disciplines, one thesis: use data to solve finance problems, and engineer the systems that make the solution dependable.",
      pt: "Três disciplinas, uma tese: usar dados para resolver problemas de finanças e engenheirar os sistemas que tornam a solução confiável.",
    },
    pillars: [
      {
        num: "01",
        title: { en: "Software Engineering", pt: "Engenharia de Software" },
        desc: {
          en: "Typed, tested systems — APIs, services, and the infrastructure that keeps them dependable in production.",
          pt: "Sistemas tipados e testados — APIs, serviços e a infraestrutura que os mantém confiáveis em produção.",
        },
      },
      {
        num: "02",
        title: { en: "Data Engineering", pt: "Engenharia de Dados" },
        desc: {
          en: "Pipelines and models built on data that spans years, with validation that catches leakage before production does.",
          pt: "Pipelines e modelos construídos sobre dados de vários anos, com validação que pega vazamentos antes da produção.",
        },
      },
      {
        num: "03",
        title: { en: "Quantitative Finance", pt: "Finanças Quantitativas" },
        desc: {
          en: "Financial-markets domain knowledge — the market structure and instruments the data and systems actually serve.",
          pt: "Conhecimento de domínio em mercados financeiros — a estrutura de mercado e os instrumentos que os dados e sistemas realmente servem.",
        },
      },
    ],
  },
  work: {
    eyebrow: { en: "// rings", pt: "// anéis" },
    heading: { en: "Selected work", pt: "Trabalhos selecionados" },
    moreLabel: { en: "// more work", pt: "// mais trabalhos" },
  },
  credibility: {
    eyebrow: { en: "// currently", pt: "// atualmente" },
    line: {
      en: "Software Engineering Intern at JGP Crédito — building infrastructure for financial-markets data.",
      pt: "Estagiário de Engenharia de Software na JGP Crédito — construindo infraestrutura para dados de mercado.",
    },
  },
};

const STACK = ["TypeScript", "Python", "Node/NestJS", "React", "PostgreSQL", "Docker"];

export function HomePageContent({
  heroProjects,
  supportingProjects,
}: {
  heroProjects: Project[];
  supportingProjects: Project[];
}) {
  const { language: lang } = useLanguage();

  return (
    <>
      {/* HERO */}
      <section
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "clamp(56px,9vw,112px) clamp(20px,5vw,48px) clamp(48px,7vw,88px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 32,
        }}
      >
        <div className="hero-anim" style={{ flex: "1 1 380px", minWidth: 280, animation: "heroUp .7s cubic-bezier(.16,1,.3,1) both" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
            <Headshot size={60} />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", color: "var(--text)" }}>
                Miguel Cerne
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                {lang === "en" ? "Software Engineer" : "Engenheiro de Software"}
              </div>
            </div>
          </div>
          <EyebrowLabel style={{ marginBottom: 20 }}>{copy.hero.eyebrow[lang]}</EyebrowLabel>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.06,
              fontSize: "clamp(2.3rem,4.6vw,4.1rem)",
              margin: "0 0 24px",
              color: "var(--text)",
              maxWidth: "16ch",
            }}
          >
            {copy.hero.headline[lang]}
          </h1>
          <p style={{ fontSize: "clamp(1.05rem,1.4vw,1.3rem)", lineHeight: 1.6, color: "var(--text-muted)", maxWidth: "46ch", margin: "0 0 36px" }}>
            {copy.hero.sub[lang]}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Button variant="primary" href={links.linkedin} target="_blank" rel="noreferrer">
              {ui.ctaLinkedin[lang]}
            </Button>
            <Button variant="secondary" href={links.github} target="_blank" rel="noreferrer">
              {ui.ctaGithub[lang]}
            </Button>
          </div>
        </div>

        <RingGraphic />
      </section>

      {/* WHAT I DO */}
      <section
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "clamp(48px,7vw,88px) clamp(20px,5vw,48px)",
          borderTop: "1px solid var(--surface-2)",
        }}
      >
        <EyebrowLabel style={{ marginBottom: 16 }}>{copy.whatIDo.eyebrow[lang]}</EyebrowLabel>
        <p style={{ fontSize: "clamp(1.1rem,1.6vw,1.35rem)", lineHeight: 1.55, color: "var(--text)", maxWidth: "60ch", margin: "0 0 48px" }}>
          {copy.whatIDo.line[lang]}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          {copy.whatIDo.pillars.map((p) => (
            <div key={p.num} style={{ flex: "1 1 280px", padding: "28px 24px", borderTop: "2px solid var(--heartwood)", background: "var(--surface)", borderRadius: "var(--radius-md)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: 14 }}>{p.num}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.3rem", color: "var(--text)", marginBottom: 10 }}>{p.title[lang]}</div>
              <p style={{ margin: 0, fontSize: "0.92rem", lineHeight: 1.55, color: "var(--text-muted)" }}>{p.desc[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        id="work"
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "clamp(48px,7vw,88px) clamp(20px,5vw,48px)",
          borderTop: "1px solid var(--surface-2)",
        }}
      >
        <EyebrowLabel style={{ marginBottom: 16 }}>{copy.work.eyebrow[lang]}</EyebrowLabel>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(1.7rem,2.6vw,2.2rem)",
            letterSpacing: "-0.01em",
            margin: "0 0 40px",
            color: "var(--text)",
          }}
        >
          {copy.work.heading[lang]}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {heroProjects.map((project) => (
            <ProjectCardHero key={project.slug} project={project} lang={lang} />
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <EyebrowLabel color="var(--text-muted)" style={{ marginBottom: 20 }}>
            {copy.work.moreLabel[lang]}
          </EyebrowLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {supportingProjects.map((project) => (
              <ProjectCardSupporting key={project.slug} project={project} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "clamp(48px,7vw,88px) clamp(20px,5vw,48px)",
          borderTop: "1px solid var(--surface-2)",
        }}
      >
        <EyebrowLabel style={{ marginBottom: 20 }}>{copy.credibility.eyebrow[lang]}</EyebrowLabel>
        <div
          style={{
            border: "1px solid var(--surface-2)",
            borderRadius: "var(--radius-md)",
            background: "var(--surface)",
            padding: "clamp(28px,4vw,44px)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16, maxWidth: "52ch" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--sapwood)", flexShrink: 0, marginTop: 8 }} />
            <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.2rem,1.8vw,1.5rem)", lineHeight: 1.4, color: "var(--text)" }}>
              {copy.credibility.line[lang]}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, maxWidth: 320 }}>
            {STACK.map((s) => (
              <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--heartwood)", border: "1px solid var(--heartwood)", borderRadius: "var(--radius-sm)", padding: "5px 9px" }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
