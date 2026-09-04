"use client";

import { useActionState } from "react";
import { useLocale } from "next-intl";
import { Language } from "@/lib/types";
import { sendContactMessage, ContactState } from "@/lib/actions/contact";

const copy = {
  name: { en: "Name", pt: "Nome" },
  email: { en: "Email", pt: "E-mail" },
  message: { en: "Message", pt: "Mensagem" },
  placeholder: { en: "What are you building?", pt: "O que você está construindo?" },
  submit: { en: "Send message", pt: "Enviar mensagem" },
  success: { en: "Got it — I'll reply soon.", pt: "Recebido — respondo em breve." },
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

const submitButtonStyle: React.CSSProperties = {
  alignSelf: "flex-start",
  padding: "14px 28px",
  borderRadius: "var(--radius-md)",
  background: "var(--heartwood)",
  color: "var(--ink)",
  fontWeight: 600,
  fontSize: "1rem",
  border: "none",
  cursor: "pointer",
};

const initialState: ContactState = { status: "idle" };

export function ContactForm({ resendEnabled }: { resendEnabled: boolean }) {
  const lang = useLocale() as Language;
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  if (resendEnabled) {
    if (state.status === "success") {
      return (
        <p style={{ fontSize: "1.1rem", color: "var(--text)", fontFamily: "var(--font-mono)" }}>
          {copy.success[lang]}
        </p>
      );
    }

    return (
      <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {/* honeypot — hidden from real users, off-screen not display:none so simple bots still fill it */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        />
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
        {state.status === "error" && state.message && (
          <p style={{ margin: 0, color: "var(--heartwood)", fontSize: "0.9rem" }}>{state.message}</p>
        )}
        <button type="submit" className="cta-primary" disabled={pending} style={{ ...submitButtonStyle, opacity: pending ? 0.7 : 1 }}>
          {copy.submit[lang]}
        </button>
      </form>
    );
  }

  return (
    <form action={FORMSPREE_ENDPOINT} method="POST" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
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
      <button type="submit" className="cta-primary" style={submitButtonStyle}>
        {copy.submit[lang]}
      </button>
    </form>
  );
}
