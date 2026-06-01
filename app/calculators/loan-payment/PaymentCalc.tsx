"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/utils";
import { monthlyPayment } from "@/lib/amounts";

export function PaymentCalc() {
  const [amount, setAmount] = useState(10000);
  const [apr, setApr] = useState(15);
  const [term, setTerm] = useState(36);

  const { monthly, totalInterest, totalCost } = useMemo(() => {
    const m = monthlyPayment(amount, apr, term);
    const total = m * term;
    return { monthly: m, totalCost: total, totalInterest: total - amount };
  }, [amount, apr, term]);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
      <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
        <Field
          label="Loan amount"
          value={`$${amount.toLocaleString()}`}
          min={500}
          max={50000}
          step={500}
          raw={amount}
          onChange={setAmount}
        />
        <Field
          label="APR"
          value={`${apr.toFixed(2)}%`}
          min={2}
          max={35.99}
          step={0.25}
          raw={apr}
          onChange={setApr}
        />
        <Field
          label="Term"
          value={`${term} months`}
          min={3}
          max={84}
          step={1}
          raw={term}
          onChange={setTerm}
        />
      </form>

      <aside className="rounded-[14px] bg-cream-50 ring-1 ring-cream-300 p-6 self-start">
        <span className="eyebrow">Results</span>
        <dl className="mt-5 space-y-4">
          <Row k="Monthly payment" v={formatCurrency(Math.round(monthly))} highlight />
          <Row k="Total interest" v={formatCurrency(Math.round(totalInterest))} />
          <Row k="Total repaid" v={formatCurrency(Math.round(totalCost))} />
        </dl>
        <p className="mt-5 text-[12px] leading-relaxed text-ink-500">
          Standard amortisation formula. Doesn't include origination fees, which would raise effective APR. Use the APR calculator for fee-adjusted comparisons.
        </p>
      </aside>
    </div>
  );
}

function Field({
  label, value, min, max, step, raw, onChange,
}: {
  label: string; value: string; min: number; max: number; step: number; raw: number; onChange: (n: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-[12px] uppercase tracking-[0.15em] text-ink-500">{label}</label>
        <span className="tabular text-[16px] font-semibold text-ink-900">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={raw}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-forest-700"
        aria-label={label}
      />
    </div>
  );
}

function Row({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-cream-300 pb-3 last:border-0 last:pb-0">
      <dt className="text-[12px] uppercase tracking-[0.15em] text-ink-500">{k}</dt>
      <dd className={`tabular text-right ${highlight ? "text-[22px] text-forest-700 font-semibold" : "text-[15px] text-ink-900"}`}>{v}</dd>
    </div>
  );
}
