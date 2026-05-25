"use client";

import { useFormContext } from "react-hook-form";
import { Field, Select } from "../Field";
import { cn } from "@/lib/utils";

export function Step1Amount() {
  const { setValue, watch, formState: { errors } } = useFormContext();
  const raw = watch("amount");
  const display = raw === undefined || raw === null || raw === "" ? "" : Number(raw).toLocaleString("en-US");

  return (
    <div className="space-y-7">
      <header>
        <h2 className="text-[32px] leading-[1.05] text-ink-900">
          How much do you need?
        </h2>
        <p className="mt-2 text-[14px] text-ink-500">Between $100 and $50,000.</p>
      </header>

      <Field name="amount" label="Loan amount (USD)">
        <div className="relative">
          <span
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[16px] text-ink-500"
          >
            $
          </span>
          <input
            id="amount"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            placeholder="5,000"
            value={display}
            aria-invalid={errors.amount ? "true" : undefined}
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, "");
              setValue("amount", digits ? Number(digits) : "", {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
            className={cn("input tabular pl-8")}
          />
        </div>
      </Field>

      <Field name="purpose" label="Loan purpose">
        <Select name="purpose" defaultValue="">
          <option value="" disabled>Select a purpose</option>
          <option value="debt_consolidation">Debt consolidation</option>
          <option value="credit_card_refi">Credit card refinance</option>
          <option value="home_improvement">Home improvement</option>
          <option value="auto">Auto</option>
          <option value="medical">Medical</option>
          <option value="major_purchase">Major purchase</option>
          <option value="moving">Moving</option>
          <option value="vacation">Vacation</option>
          <option value="wedding">Wedding</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </Select>
      </Field>

      <Field name="creditRating" label="How would you rate your credit?">
        <Select name="creditRating" defaultValue="">
          <option value="" disabled>Choose one</option>
          <option value="excellent">Excellent (720+)</option>
          <option value="good">Good (660–719)</option>
          <option value="fair">Fair (600–659)</option>
          <option value="poor">Poor (below 600)</option>
        </Select>
      </Field>
    </div>
  );
}
