export function Logomark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="12" fill="none" stroke="var(--heartwood)" strokeWidth="4" />
      <circle cx="50" cy="50" r="26" fill="none" stroke="var(--heartwood)" strokeWidth="3" opacity="0.7" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--heartwood)" strokeWidth="2" opacity="0.4" />
    </svg>
  );
}
