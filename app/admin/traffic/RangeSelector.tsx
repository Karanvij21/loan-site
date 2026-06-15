"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { DATE_RANGE_LABELS, type DateRangeKey } from "@/lib/ga4-types";

const ORDER: DateRangeKey[] = ["7d", "28d", "90d"];

export function RangeSelector({ current }: { current: DateRangeKey }) {
  const router = useRouter();
  const params = useSearchParams();

  function switchTo(range: DateRangeKey) {
    const sp = new URLSearchParams(params?.toString() ?? "");
    sp.set("range", range);
    router.push(`/admin/traffic?${sp.toString()}`);
  }

  return (
    <div className="inline-flex rounded-md border border-paper-300 bg-white text-[13px]">
      {ORDER.map((r, i) => {
        const active = r === current;
        return (
          <button
            key={r}
            type="button"
            onClick={() => switchTo(r)}
            className={`${
              active
                ? "bg-forest-700 text-paper-50"
                : "text-ink-700 hover:bg-paper-100"
            } px-3 py-1.5 ${i === 0 ? "rounded-l-md" : ""} ${
              i === ORDER.length - 1 ? "rounded-r-md" : ""
            }`}
            aria-pressed={active}
          >
            {DATE_RANGE_LABELS[r]}
          </button>
        );
      })}
    </div>
  );
}
