/**
 * Decorative SVG hero accent.
 *
 * Generates an abstract geometric pattern that pairs with the
 * editorial-minimalist palette. Inline SVG so there's zero network
 * cost; renders crisp at any resolution; recolours via currentColor.
 *
 * Three variants matched to landing-page intent:
 *   - "loan", concentric arcs suggesting movement / progress
 *   - "data", grid + bar elements suggesting quantitative content
 *   - "education", branching lines suggesting growth / learning
 *
 * Each variant comes with semantically appropriate alt text via
 * aria-label and an embedded <title> element so screen readers
 * describe it correctly and image-search bots can extract a label.
 */

type Variant = "loan" | "data" | "education";

const titles: Record<Variant, string> = {
  loan: "Abstract financial-progress illustration",
  data: "Abstract data-pattern illustration",
  education: "Abstract knowledge-growth illustration",
};

export function HeroPattern({
  variant = "loan",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const title = titles[variant];
  return (
    <svg
      viewBox="0 0 240 240"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={`hp-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.0" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {variant === "loan" && (
        <g fill="none" stroke="currentColor" strokeWidth="1.25" opacity="0.55">
          {/* Concentric arcs sweeping from top-right corner. */}
          {[40, 70, 100, 130, 160, 190, 220].map((r, i) => (
            <circle
              key={r}
              cx="240"
              cy="0"
              r={r}
              opacity={1 - i * 0.1}
            />
          ))}
          {/* Subtle filled accent. */}
          <circle cx="240" cy="0" r="240" fill={`url(#hp-grad-${variant})`} stroke="none" />
        </g>
      )}

      {variant === "data" && (
        <g fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.5">
          {/* Background grid. */}
          {[40, 80, 120, 160, 200].map((x) => (
            <line key={`v${x}`} x1={x} y1="20" x2={x} y2="220" />
          ))}
          {[40, 80, 120, 160, 200].map((y) => (
            <line key={`h${y}`} x1="20" y1={y} x2="220" y2={y} />
          ))}
          {/* Ascending bars representing growth. */}
          <g stroke="none" fill="currentColor" opacity="0.85">
            <rect x="44" y="160" width="28" height="56" rx="3" />
            <rect x="84" y="130" width="28" height="86" rx="3" />
            <rect x="124" y="95" width="28" height="121" rx="3" />
            <rect x="164" y="60" width="28" height="156" rx="3" />
          </g>
        </g>
      )}

      {variant === "education" && (
        <g fill="none" stroke="currentColor" strokeWidth="1.25" opacity="0.55">
          {/* Branching tree structure suggesting knowledge growth. */}
          <line x1="120" y1="220" x2="120" y2="140" />
          <line x1="120" y1="140" x2="70" y2="100" />
          <line x1="120" y1="140" x2="170" y2="100" />
          <line x1="70" y1="100" x2="40" y2="60" />
          <line x1="70" y1="100" x2="90" y2="50" />
          <line x1="170" y1="100" x2="150" y2="50" />
          <line x1="170" y1="100" x2="200" y2="60" />
          {/* End-of-branch dots. */}
          {[
            { cx: 40, cy: 60 },
            { cx: 90, cy: 50 },
            { cx: 150, cy: 50 },
            { cx: 200, cy: 60 },
          ].map((p) => (
            <circle key={`${p.cx}-${p.cy}`} {...p} r="4" fill="currentColor" stroke="none" />
          ))}
          <circle cx="120" cy="140" r="6" fill="currentColor" stroke="none" />
          <circle cx="120" cy="220" r="6" fill="currentColor" stroke="none" />
        </g>
      )}
    </svg>
  );
}
