const RINGS = [
  { r: 196, stroke: "var(--oxblood)", width: 1, opacity: 0.22, circ: 1231.5, delay: 630 },
  { r: 172, stroke: "var(--oxblood)", width: 1, opacity: 0.3, circ: 1080.7, delay: 540 },
  { r: 148, stroke: "var(--oxblood)", width: 1, opacity: 0.4, circ: 929.9, delay: 450 },
  { r: 124, stroke: "var(--heartwood)", width: 1.25, opacity: 0.5, circ: 779.1, delay: 360 },
  { r: 100, stroke: "var(--heartwood)", width: 1.25, opacity: 0.65, circ: 628.3, delay: 270 },
  { r: 76, stroke: "var(--heartwood)", width: 1.5, opacity: 0.8, circ: 477.5, delay: 180 },
  { r: 52, stroke: "var(--heartwood)", width: 1.5, opacity: 0.9, circ: 326.7, delay: 90 },
  { r: 28, stroke: "var(--heartwood-glow)", width: 2, opacity: 1, circ: 175.9, delay: 0 },
];

export function RingGraphic() {
  return (
    <div
      className="ring-graphic"
      style={{
        flex: "0 1 340px",
        minWidth: 220,
        position: "relative",
        aspectRatio: "1 / 1",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-10%",
          background:
            "radial-gradient(circle at 55% 45%, rgba(232,154,60,0.16), transparent 62%)",
          pointerEvents: "none",
        }}
      />
      <svg
        viewBox="0 0 440 440"
        width="100%"
        height="100%"
        style={{ maxWidth: 440, overflow: "visible" }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--heartwood-glow)" />
            <stop offset="60%" stopColor="var(--heartwood)" />
            <stop offset="100%" stopColor="var(--oxblood)" stopOpacity="0" />
          </radialGradient>
          <filter id="softBlur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <circle
          className="core-glow"
          cx="220"
          cy="220"
          r="46"
          fill="var(--heartwood)"
          opacity="0.3"
          filter="url(#softBlur)"
          style={{ animation: "coreFade 1s ease both" }}
        />
        {RINGS.map((ring, i) => (
          <circle
            key={i}
            className="ring-path"
            cx="220"
            cy="220"
            r={ring.r}
            fill="none"
            stroke={ring.stroke}
            strokeWidth={ring.width}
            opacity={ring.opacity}
            style={
              {
                "--circ": ring.circ,
                strokeDasharray: ring.circ,
                strokeDashoffset: ring.circ,
                animation: `ringDraw 900ms cubic-bezier(.4,0,.2,1) ${ring.delay}ms forwards`,
              } as React.CSSProperties
            }
          />
        ))}
        <circle cx="220" cy="220" r="9" fill="url(#coreGrad)" />
      </svg>
    </div>
  );
}
