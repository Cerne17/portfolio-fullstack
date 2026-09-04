"use client";

import { useLocale } from "next-intl";
import { Language } from "@/lib/types";
import { EyebrowLabel } from "@/components/EyebrowLabel";
import { Headshot } from "@/components/Headshot";
import { ContactBand } from "@/components/ContactBand";

const copy = {
  eyebrow: { en: "// about", pt: "// sobre" },
  headline: {
    en: "A software engineer who thinks like a systems designer, in a domain that punishes sloppiness.",
    pt: "Um engenheiro de software que pensa como um projetista de sistemas, num domínio que pune o descuido.",
  },
  p1: {
    en: "I'm Miguel Cerne, based in Rio de Janeiro. I work at the intersection of software engineering, data engineering, and quantitative finance — three disciplines that, on their own, don't guarantee anything useful. Put together with discipline, they produce systems people can actually rely on.",
    pt: "Sou o Miguel Cerne, baseado no Rio de Janeiro. Atuo na interseção entre engenharia de software, engenharia de dados e finanças quantitativas — três disciplinas que, sozinhas, não garantem nada útil. Juntas, com disciplina, produzem sistemas em que as pessoas podem realmente confiar.",
  },
  p2: {
    en: "Currently a Software Engineering Intern at JGP Crédito, working on the infrastructure behind financial-markets data.",
    pt: "Atualmente estagiário de Engenharia de Software na JGP Crédito, atuando na infraestrutura por trás dos dados de mercado.",
  },
  howIWork: {
    eyebrow: { en: "// how i work", pt: "// como eu trabalho" },
    line: {
      en: "Being wrong is expensive in finance, so the process matters as much as the model.",
      pt: "Errar sai caro em finanças, então o processo importa tanto quanto o modelo.",
    },
    principles: [
      {
        num: "01",
        title: { en: "Log the decisions, not just the code", pt: "Registre as decisões, não só o código" },
        desc: {
          en: "Every non-obvious call — a threshold, a data cut, a model choice — gets written down with its reasoning. Six months later, nobody has to guess why.",
          pt: "Toda decisão não óbvia — um limiar, um corte de dados, uma escolha de modelo — é registrada com sua justificativa. Seis meses depois, ninguém precisa adivinhar o porquê.",
        },
      },
      {
        num: "02",
        title: { en: "Validate against time, not just holdout", pt: "Valide contra o tempo, não só contra holdout" },
        desc: {
          en: "Financial data leaks through time easily. Walk-forward validation and explicit leakage checks are non-negotiable, not an afterthought.",
          pt: "Dados financeiros vazam pelo tempo com facilidade. Validação walk-forward e checagens explícitas de vazamento não são negociáveis nem um detalhe posterior.",
        },
      },
      {
        num: "03",
        title: { en: "Decouple so behavior can change safely", pt: "Desacople para que o comportamento mude com segurança" },
        desc: {
          en: "Observer patterns, typed signals, clean boundaries — the goal is that adding a feature never means rewiring the core.",
          pt: "Observer patterns, sinais tipados, limites claros — o objetivo é que adicionar uma funcionalidade nunca signifique recablear o núcleo.",
        },
      },
    ],
  },
  stack: { en: "// stack", pt: "// stack" },
};

const STACK = ["TypeScript", "Python", "Node / NestJS", "React", "PostgreSQL", "Docker", "PyTorch", "Pandas"];

export default function AboutPage() {
  const lang = useLocale() as Language;

  return (
    <>
      <section
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "clamp(56px,9vw,96px) clamp(20px,5vw,48px) clamp(40px,6vw,64px)",
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          alignItems: "flex-start",
        }}
      >
        <Headshot size={140} />
        <div style={{ flex: "1 1 420px", minWidth: 280 }}>
          <EyebrowLabel style={{ marginBottom: 20 }}>{copy.eyebrow[lang]}</EyebrowLabel>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              fontSize: "clamp(2rem,3.6vw,3rem)",
              margin: "0 0 24px",
              color: "var(--text)",
              maxWidth: "18ch",
            }}
          >
            {copy.headline[lang]}
          </h1>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.65, color: "var(--text-muted)", maxWidth: "56ch", margin: "0 0 20px" }}>
            {copy.p1[lang]}
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.65, color: "var(--text-muted)", maxWidth: "56ch", margin: 0 }}>
            {copy.p2[lang]}
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "clamp(48px,7vw,80px) clamp(20px,5vw,48px)",
          borderTop: "1px solid var(--surface-2)",
        }}
      >
        <EyebrowLabel style={{ marginBottom: 16 }}>{copy.howIWork.eyebrow[lang]}</EyebrowLabel>
        <p style={{ fontSize: "clamp(1.1rem,1.6vw,1.35rem)", lineHeight: 1.55, color: "var(--text)", maxWidth: "60ch", margin: "0 0 48px" }}>
          {copy.howIWork.line[lang]}
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {copy.howIWork.principles.map((p, i) => (
            <div
              key={p.num}
              style={{
                display: "flex",
                gap: 24,
                padding: "24px 0",
                borderTop: "1px solid var(--surface-2)",
                borderBottom: i === copy.howIWork.principles.length - 1 ? "1px solid var(--surface-2)" : undefined,
              }}
            >
              <span style={{ flex: "0 0 48px", fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--heartwood)" }}>{p.num}</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: "1.1rem", color: "var(--text)", marginBottom: 6 }}>{p.title[lang]}</div>
                <p style={{ margin: 0, fontSize: "0.98rem", lineHeight: 1.6, color: "var(--text-muted)", maxWidth: "60ch" }}>{p.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "clamp(48px,7vw,80px) clamp(20px,5vw,48px)",
          borderTop: "1px solid var(--surface-2)",
        }}
      >
        <EyebrowLabel style={{ marginBottom: 24 }}>{copy.stack[lang]}</EyebrowLabel>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {STACK.map((s) => (
            <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-muted)", border: "1px solid var(--surface-2)", borderRadius: "var(--radius-sm)", padding: "6px 12px" }}>
              {s}
            </span>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
