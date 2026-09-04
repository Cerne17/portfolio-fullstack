import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const RINGS = [
  { r: 260, opacity: 0.2 },
  { r: 205, opacity: 0.35 },
  { r: 150, opacity: 0.55 },
  { r: 95, opacity: 0.8 },
];

export function renderOg(title: string, subtitle?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#0C0D10",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 520,
            height: 520,
          }}
        >
          {RINGS.map((ring) => (
            <div
              key={ring.r}
              style={{
                position: "absolute",
                width: ring.r * 2,
                height: ring.r * 2,
                borderRadius: "50%",
                border: `2px solid rgba(232,154,60,${ring.opacity})`,
                display: "flex",
              }}
            />
          ))}
          <div
            style={{
              position: "absolute",
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#F6B65A",
              display: "flex",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#E89A3C",
            marginBottom: 28,
          }}
        >
          cerne.pro
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#E8E4DB",
            maxWidth: 820,
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.5,
              color: "#9A968C",
              marginTop: 24,
              maxWidth: 780,
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    ),
    { ...ogSize }
  );
}
