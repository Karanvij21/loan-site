export function HeroMark() {
  return (
    <svg
      viewBox="0 0 240 240"
      className="h-full w-full"
      aria-hidden
      fill="none"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#0E3B2E" opacity="0.18" />
        </pattern>
      </defs>

      {/* Outer ring with dotted texture */}
      <circle cx="120" cy="120" r="118" stroke="#D4C8A8" strokeWidth="1" />
      <circle cx="120" cy="120" r="100" fill="url(#dots)" />

      {/* Inner forest disc */}
      <circle cx="120" cy="120" r="68" fill="#0E3B2E" />

      {/* Brand mark */}
      <text
        x="120"
        y="148"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, letterSpacing: -2 }}
        fontSize="68"
        fill="#FAF6EC"
      >
        GA
      </text>

      {/* Decorative orbit ticks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x1 = 120 + Math.cos(angle) * 110;
        const y1 = 120 + Math.sin(angle) * 110;
        const x2 = 120 + Math.cos(angle) * 116;
        const y2 = 120 + Math.sin(angle) * 116;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#0A0D0B"
            strokeWidth="1"
            opacity={i % 3 === 0 ? 0.9 : 0.3}
          />
        );
      })}

      {/* Top eyebrow text along arc */}
      <path id="arcTop" d="M 30 120 A 90 90 0 0 1 210 120" fill="none" />
      <text fontSize="9" fontFamily="var(--font-sans, sans-serif)" fill="#5A5F5B" letterSpacing="2.5">
        <textPath href="#arcTop" startOffset="50%" textAnchor="middle">
          · TRUSTED MARKETPLACE · EST. 2024 ·
        </textPath>
      </text>
    </svg>
  );
}
