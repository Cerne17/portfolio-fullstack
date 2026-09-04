"use client";

import { useLocale } from "next-intl";
import { Language } from "@/lib/types";
import { EyebrowLabel } from "@/components/EyebrowLabel";
import { links } from "@/lib/dictionary";

const copy = {
  eyebrow: { en: "// contact", pt: "// contato" },
  heading: { en: "Get in touch — LinkedIn is fastest.", pt: "Vamos falar — o LinkedIn é o mais rápido." },
  sub: {
    en: `I read every LinkedIn message. Prefer email? ${links.email}.`,
    pt: `Leio toda mensagem no LinkedIn. Prefere e-mail? ${links.email}.`,
  },
  name: { en: "Name", pt: "Nome" },
  email: { en: "Email", pt: "E-mail" },
  message: { en: "Message", pt: "Mensagem" },
  placeholder: { en: "What are you building?", pt: "O que você está construindo?" },
  submit: { en: "Send message", pt: "Enviar mensagem" },
};

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "https://formspree.io/f/YOUR_FORM_ID";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--surface-2)",
  background: "var(--surface)",
  color: "var(--text)",
  fontFamily: "var(--font-body)",
  fontSize: "1rem",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.78rem",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: 8,
  display: "block",
};

export default function ContactPage() {
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

      <form
        action={FORMSPREE_ENDPOINT}
        method="POST"
        style={{ display: "flex", flexDirection: "column", gap: 24 }}
      >
        <div>
          <label htmlFor="name" style={labelStyle}>{copy.name[lang]}</label>
          <input id="name" name="name" type="text" required style={inputStyle} />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>{copy.email[lang]}</label>
          <input id="email" name="email" type="email" required style={inputStyle} />
        </div>
        <div>
          <label htmlFor="message" style={labelStyle}>{copy.message[lang]}</label>
          <textarea id="message" name="message" rows={5} placeholder={copy.placeholder[lang]} required style={{ ...inputStyle, resize: "vertical" }} />
        </div>
        <button
          type="submit"
          className="cta-primary"
          style={{
            alignSelf: "flex-start",
            padding: "14px 28px",
            borderRadius: "var(--radius-md)",
            background: "var(--heartwood)",
            color: "var(--ink)",
            fontWeight: 600,
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          {copy.submit[lang]}
        </button>
      </form>
    </section>
  );
}
