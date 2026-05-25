import { cn } from "@/lib/utils";

export function StepProgress({ steps, current }: { steps: string[]; current: number }) {
  return (
    <ol className="flex items-center justify-between gap-2" aria-label="Application progress">
      {steps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <li key={label} className="flex-1">
            <div className="flex items-center gap-2">
              <span
                aria-current={active ? "step" : undefined}
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
                  done && "bg-brand-600 text-white",
                  active && "bg-brand-100 text-brand-800 ring-2 ring-brand-600",
                  !done && !active && "bg-slate-100 text-slate-500"
                )}
              >
                {done ? "✓" : i + 1}
              </span>
              <span
                className={cn(
                  "hidden text-xs font-medium sm:inline",
                  active ? "text-brand-800" : "text-slate-600"
                )}
              >
                {label}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
