import { cn } from "@/lib/utils";

export function StepProgress({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between">
        <span className="eyebrow">
          Step {String(current + 1).padStart(2, "0")} <span className="text-ink-300">/ {String(steps.length).padStart(2, "0")}</span>
        </span>
        <span className="text-[13px] text-ink-700" style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>
          {steps[current]}
        </span>
      </div>
      <div className="flex gap-1.5" role="progressbar" aria-valuenow={current + 1} aria-valuemin={1} aria-valuemax={steps.length}>
        {steps.map((label, i) => (
          <div
            key={label}
            className={cn(
              "h-[3px] flex-1 rounded-full transition-colors duration-300",
              i < current && "bg-forest-700",
              i === current && "bg-ink-900",
              i > current && "bg-cream-300"
            )}
          />
        ))}
      </div>
    </div>
  );
}
