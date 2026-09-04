import { ReactNode } from "react";

export function Tag({
  children,
  tone = "outline",
}: {
  children: ReactNode;
  tone?: "outline" | "muted";
}) {
  const toneStyle =
    tone === "outline"
      ? {
          color: "var(--heartwood)",
          border: "1px solid var(--heartwood)",
          background: "transparent",
        }
      : {
          color: "var(--text-muted)",
          border: "1px solid var(--surface-2)",
          background: "transparent",
        };

  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        letterSpacing: "0.04em",
        borderRadius: "var(--radius-sm)",
        padding: "5px 9px",
        ...toneStyle,
      }}
    >
      {children}
    </span>
  );
}
