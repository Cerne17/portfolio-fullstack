import Image from "next/image";

export function Headshot({ size = 60 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: "50%",
        overflow: "hidden",
        border: "1px solid var(--surface-2)",
        position: "relative",
      }}
    >
      <Image
        src="/headshot.jpeg"
        alt="Miguel Cerne"
        fill
        sizes={`${size}px`}
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
}
