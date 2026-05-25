"use client";

import { useFormContext } from "react-hook-form";

export function Step4Bank() {
  const { register } = useFormContext();
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-slate-900">Banking</h2>
      <p className="text-sm text-slate-600">
        Most lenders require an active U.S. checking account to fund your loan via direct deposit.
      </p>

      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-4 has-checked:border-brand-600 has-checked:bg-brand-50">
        <input type="checkbox" {...register("hasBankAccount")} className="mt-1 h-4 w-4 accent-brand-600" />
        <span>
          <span className="block text-sm font-semibold text-slate-900">I have an active checking account</span>
          <span className="block text-xs text-slate-600">Required by most lenders for direct deposit.</span>
        </span>
      </label>

      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-4 has-checked:border-brand-600 has-checked:bg-brand-50">
        <input type="checkbox" {...register("directDeposit")} className="mt-1 h-4 w-4 accent-brand-600" />
        <span>
          <span className="block text-sm font-semibold text-slate-900">My income is via direct deposit</span>
          <span className="block text-xs text-slate-600">Helps lenders verify income faster.</span>
        </span>
      </label>
    </div>
  );
}
