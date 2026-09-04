"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { links, ui } from "@/lib/dictionary";
import { Language } from "@/lib/types";
import { Logomark } from "./Logomark";

const NAV_LINKS = [
  { href: "/work", key: "navWork" as const },
  { href: "/about", key: "navAbout" as const },
  { href: "/now", key: "navNow" as const },
  { href: "/writing", key: "navWriting" as const },
];

export function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  const language = useLocale() as Language;
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 900px)");
    const onMq = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      if (!e.matches) setMenuOpen(false);
    };
    setIsMobile(mq.matches);
    mq.addEventListener("change", onMq);

    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      mq.removeEventListener("change", onMq);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--ink)",
        borderBottom: "1px solid var(--surface-2)",
        boxShadow: scrolled ? "0 8px 24px -18px rgba(0,0,0,0.5)" : "none",
        transition: "box-shadow .2s ease",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "14px clamp(20px,5vw,48px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link href="/" aria-label="cerne.pro home" className="logomark" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Logomark />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--text)" }}>
            cerne
            <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>.pro</span>
          </span>
          <span className="easter-egg" style={{ opacity: 0, transition: "opacity .2s ease", fontFamily: "var(--font-mono)", color: "var(--heartwood)", fontSize: "0.85rem" }}>
            芯
          </span>
        </Link>

        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 32, fontSize: "0.95rem", color: "var(--text-muted)" }}>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {ui[l.key][language]}
              </Link>
            ))}
          </nav>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {!isMobile && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="cta-primary"
              style={{
                padding: "10px 18px",
                borderRadius: "var(--radius-md)",
                background: "var(--heartwood)",
                color: "var(--ink)",
                fontWeight: 600,
                fontSize: "0.92rem",
                whiteSpace: "nowrap",
              }}
            >
              {ui.ctaLinkedin[language]}
            </a>
          )}

          <button
            aria-label={ui.toggleTheme[language]}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="icon-toggle"
            style={{
              width: 32,
              height: 32,
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--surface-2)",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="none" stroke="var(--heartwood)" strokeWidth="2" />
              {isDark && <circle cx="12" cy="12" r="4" fill="var(--heartwood)" />}
            </svg>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
            <Link
              href={pathname}
              locale="en"
              style={{ padding: 4, color: language === "en" ? "var(--heartwood)" : "var(--text-muted)", fontWeight: language === "en" ? 600 : 400, fontFamily: "inherit" }}
            >
              EN
            </Link>
            <span style={{ color: "var(--surface-2)" }}>·</span>
            <Link
              href={pathname}
              locale="pt"
              style={{ padding: 4, color: language === "pt" ? "var(--heartwood)" : "var(--text-muted)", fontWeight: language === "pt" ? 600 : 400, fontFamily: "inherit" }}
            >
              PT
            </Link>
          </div>

          {isMobile && (
            <button
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                width: 32,
                height: 32,
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--surface-2)",
                background: "transparent",
                color: "var(--text)",
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </div>

      {isMobile && menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--surface-2)",
            background: "var(--surface)",
            padding: "16px clamp(20px,5vw,48px)",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            fontSize: "1rem",
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {ui[l.key][language]}
            </Link>
          ))}
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              marginTop: 6,
              padding: "12px 18px",
              borderRadius: "var(--radius-md)",
              background: "var(--heartwood)",
              color: "var(--ink)",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {ui.ctaLinkedin[language]}
          </a>
        </div>
      )}
    </header>
  );
}
