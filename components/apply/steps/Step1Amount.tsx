"use client";

import { Field, Select, TextInput } from "../Field";

export function Step1Amount() {
  return (
    <div className="space-y-7">
      <header>
        <h2 className="text-[32px] leading-[1.05] text-ink-900" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
          How much do you need?
        </h2>
        <p className="mt-2 text-[14px] text-ink-500">Between $100 and $50,000.</p>
      </header>

      <Field name="amount" label="Loan amount (USD)">
        <TextInput name="amount" type="number" inputMode="numeric" min={100} max={50000} step={100} className="tabular" />
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
