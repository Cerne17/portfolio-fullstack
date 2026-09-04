"use client";

import { useLocale } from "next-intl";
import { Language } from "@/lib/types";
import { EyebrowLabel } from "@/components/EyebrowLabel";
import { Button } from "@/components/Button";

const RESUMES = {
  en: "/Miguel_Cerne_Software_Engineer_CV.pdf",
  pt: "/Miguel_Cerne_Engenheiro_de_Software_CV.pdf",
};

const copy = {
  eyebrow: { en: "// résumé", pt: "// currículo" },
  heading: { en: "Résumé", pt: "Currículo" },
  sub: {
    en: "The PDF opens in a new tab — pick the language you want.",
    pt: "O PDF abre em uma nova aba — escolha o idioma.",
  },
};

export default function ResumePage() {
  const lang = useLocale() as Language;

  return (
    <section style={{ maxWidth: 640, margin: "0 auto", padding: "clamp(56px,9vw,96px) clamp(20px,5vw,48px) clamp(56px,9vw,112px)" }}>
      <EyebrowLabel style={{ marginBottom: 20 }}>{copy.eyebrow[lang]}</EyebrowLabel>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          fontSize: "clamp(2rem,3.6vw,2.8rem)",
          margin: "0 0 20px",
          color: "var(--text)",
        }}
      >
        {copy.heading[lang]}
      </h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.65, color: "var(--text-muted)", margin: "0 0 40px" }}>{copy.sub[lang]}</p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <Button variant="primary" href={RESUMES.en} target="_blank" rel="noreferrer">
          Résumé (EN)
        </Button>
        <Button variant="secondary" href={RESUMES.pt} target="_blank" rel="noreferrer">
          Currículo (PT)
        </Button>
      </div>
    </section>
  );
}
