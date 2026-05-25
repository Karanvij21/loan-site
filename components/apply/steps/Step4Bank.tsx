"use client";

import { useFormContext } from "react-hook-form";

export function Step4Bank() {
  const { register } = useFormContext();
  return (
    <div className="space-y-7">
      <header>
        <h2 className="text-[32px] leading-[1.05] text-ink-900">
          Banking.
        </h2>
        <p className="mt-2 text-[14px] text-ink-500">
          Most lenders require an active U.S. checking account to fund your loan via direct deposit.
        </p>
      </header>

      <label className="flex cursor-pointer items-start gap-4 rounded-md border border-cream-300 bg-cream-50/60 p-5 transition-colors has-checked:border-forest-700 has-checked:bg-forest-50">
        <input type="checkbox" {...register("hasBankAccount")} className="mt-1 h-4 w-4 accent-forest-700" />
        <span className="space-y-1">
          <span className="block text-[15px] text-ink-900" style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>I have an active checking account</span>
          <span className="block text-[13px] text-ink-500">Required by most lenders for direct deposit.</span>
        </span>
      </label>

      <label className="flex cursor-pointer items-start gap-4 rounded-md border border-cream-300 bg-cream-50/60 p-5 transition-colors has-checked:border-forest-700 has-checked:bg-forest-50">
        <input type="checkbox" {...register("directDeposit")} className="mt-1 h-4 w-4 accent-forest-700" />
        <span className="space-y-1">
          <span className="block text-[15px] text-ink-900" style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>My income is via direct deposit</span>
          <span className="block text-[13px] text-ink-500">Helps lenders verify income faster.</span>
        </span>
      </label>
    </div>
  );
}
