import { CSSProperties, ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary";

const VARIANTS: Record<Variant, CSSProperties> = {
  primary: {
    background: "var(--heartwood)",
    color: "var(--ink)",
    border: "none",
  },
  secondary: {
    background: "transparent",
    color: "var(--heartwood)",
    border: "1px solid var(--heartwood)",
  },
  tertiary: {
    background: "transparent",
    color: "var(--text-muted)",
    border: "none",
    padding: 0,
    fontFamily: "var(--font-mono)",
  },
};

interface ButtonProps {
  variant?: Variant;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

export function Button({
  variant = "primary",
  children,
  href,
  target,
  rel,
  onClick,
  className,
  style,
}: ButtonProps) {
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: variant === "tertiary" ? 0 : "14px 24px",
    borderRadius: "var(--radius-md)",
    fontWeight: 600,
    fontSize: "1rem",
    fontFamily: "var(--font-body)",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background .2s ease, box-shadow .2s ease, color .2s ease",
    ...VARIANTS[variant],
    ...style,
  };

  const hoverClass =
    variant === "primary"
      ? "cta-primary"
      : variant === "secondary"
        ? "cta-secondary"
        : "cta-tertiary";

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={[hoverClass, className].filter(Boolean).join(" ")}
        style={base}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={[hoverClass, className].filter(Boolean).join(" ")}
      style={base}
    >
      {children}
    </button>
  );
}
