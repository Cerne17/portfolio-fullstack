"use client";

import { useLocale } from "next-intl";
import { Language } from "@/lib/types";
import { EyebrowLabel } from "@/components/EyebrowLabel";
import { ContactForm } from "@/components/ContactForm";
import { links } from "@/lib/dictionary";

const copy = {
  eyebrow: { en: "// contact", pt: "// contato" },
  heading: { en: "Get in touch — LinkedIn is fastest.", pt: "Vamos falar — o LinkedIn é o mais rápido." },
  sub: {
    en: `I read every LinkedIn message. Prefer email? ${links.email}.`,
    pt: `Leio toda mensagem no LinkedIn. Prefere e-mail? ${links.email}.`,
  },
};

export function ContactPageContent({ resendEnabled }: { resendEnabled: boolean }) {
  const lang = useLocale() as Language;

  return (
    <section style={{ maxWidth: 640, margin: "0 auto", padding: "clamp(56px,9vw,96px) clamp(20px,5vw,48px) clamp(56px,9vw,112px)" }}>
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
      <p style={{ fontSize: "1.1rem", lineHeight: 1.65, color: "var(--text-muted)", margin: "0 0 48px" }}>{copy.sub[lang]}</p>

      <ContactForm resendEnabled={resendEnabled} />
    </section>
  );
}
