export function ImagePlaceholder({ size = 60 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: "50%",
        background: "var(--surface-2)",
        border: "1px solid var(--surface-2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text-muted)",
        fontFamily: "var(--font-mono)",
        fontSize: size * 0.28,
      }}
    >
      MC
    </div>
  );
}
