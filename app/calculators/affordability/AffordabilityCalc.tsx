"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/utils";
import { monthlyPayment } from "@/lib/amounts";

/**
 * Solve for principal given a target monthly payment, APR, and term.
 * Invert the standard amortisation formula.
 */
function principalFromPayment(payment: number, aprPct: number, months: number) {
  const r = aprPct / 100 / 12;
  if (r === 0) return payment * months;
  const pow = Math.pow(1 + r, months);
  return (payment * (pow - 1)) / (r * pow);
}

export function AffordabilityCalc() {
  const [monthlyBudget, setMonthlyBudget] = useState(300);
  const [apr, setApr] = useState(15);
  const [term, setTerm] = useState(36);
  const [income, setIncome] = useState(5000);
  const [otherDebt, setOtherDebt] = useState(800);

  const { principal, totalInterest, totalCost, dti, dtiAfter } = useMemo(() => {
    const p = principalFromPayment(monthlyBudget, apr, term);
    const m = monthlyPayment(p, apr, term);
    const total = m * term;
    const dtiNow = income > 0 ? (otherDebt / income) * 100 : 0;
    const dtiNew = income > 0 ? ((otherDebt + monthlyBudget) / income) * 100 : 0;
    return {
      principal: p,
      totalInterest: total - p,
      totalCost: total,
      dti: dtiNow,
      dtiAfter: dtiNew,
    };
  }, [monthlyBudget, apr, term, income, otherDebt]);

  const dtiOk = dtiAfter <= 40;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
      <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
        <Field label="Monthly payment I can afford" value={`$${monthlyBudget}`} min={50} max={2500} step={25} raw={monthlyBudget} onChange={setMonthlyBudget} />
        <Field label="Likely APR" value={`${apr.toFixed(2)}%`} min={5} max={35.99} step={0.25} raw={apr} onChange={setApr} />
        <Field label="Loan term" value={`${term} months`} min={6} max={72} step={1} raw={term} onChange={setTerm} />

        <div className="border-t border-cream-300 pt-7">
          <p className="text-[13px] text-ink-500 mb-5">Optional DTI check</p>
          <div className="space-y-7">
            <Field label="Monthly gross income" value={`$${income.toLocaleString()}`} min={1000} max={25000} step={250} raw={income} onChange={setIncome} />
            <Field label="Existing monthly debt payments" value={`$${otherDebt}`} min={0} max={5000} step={50} raw={otherDebt} onChange={setOtherDebt} />
          </div>
        </div>
      </form>

      <aside className="rounded-[14px] bg-cream-50 ring-1 ring-cream-300 p-6 self-start">
        <span className="eyebrow">Results</span>
        <dl className="mt-5 space-y-4">
          <Row k="Max loan amount" v={formatCurrency(Math.round(principal))} highlight />
          <Row k="Total interest" v={formatCurrency(Math.round(totalInterest))} />
          <Row k="Total repaid" v={formatCurrency(Math.round(totalCost))} />
          <Row k="Current DTI" v={`${dti.toFixed(1)}%`} />
          <Row k="DTI after this loan" v={`${dtiAfter.toFixed(1)}%`} />
        </dl>
        <p className={`mt-4 rounded-md p-3 text-[12px] leading-relaxed ${dtiOk ? "bg-forest-50 text-forest-900 ring-1 ring-forest-100" : "bg-amber-300/15 text-amber-700 ring-1 ring-amber-300/30"}`}>
          {dtiOk
            ? `Your DTI after this loan would be ${dtiAfter.toFixed(1)}%. Most lenders prefer DTI under 40%, so this should be acceptable.`
            : `Your DTI after this loan would be ${dtiAfter.toFixed(1)}%. Most lenders prefer DTI under 40%. Consider a smaller loan, longer term, or paying down existing debt first.`}
        </p>
      </aside>
    </div>
  );
}

function Field({ label, value, min, max, step, raw, onChange }: { label: string; value: string; min: number; max: number; step: number; raw: number; onChange: (n: number) => void }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-[12px] uppercase tracking-[0.15em] text-ink-500">{label}</label>
        <span className="tabular text-[16px] font-semibold text-ink-900">{value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={raw} onChange={(e) => onChange(Number(e.target.value))} className="mt-3 w-full accent-forest-700" aria-label={label} />
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
