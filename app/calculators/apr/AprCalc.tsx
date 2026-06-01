"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/utils";
import { monthlyPayment } from "@/lib/amounts";

/**
 * APR calculator: given the stated note rate, an origination fee, and term,
 * compute the *effective* APR the borrower actually pays.
 *
 * Method: the lender hands the borrower (principal − origination fee) but
 * the borrower repays principal at the note rate. We solve for the rate that
 * makes the present value of repayments equal the cash actually received.
 *
 * Newton-Raphson on the standard amortisation equation; converges in ~6 iters.
 */
function effectiveApr(principal: number, noteRatePct: number, originationFeePct: number, months: number) {
  const fee = principal * (originationFeePct / 100);
  const cashReceived = principal - fee;
  const monthly = monthlyPayment(principal, noteRatePct, months);
  if (monthly <= 0 || cashReceived <= 0) return 0;
  // Solve PV equation: cashReceived = monthly * (1 - (1+r)^-n) / r
  let r = noteRatePct / 100 / 12; // initial guess
  for (let i = 0; i < 60; i++) {
    const pow = Math.pow(1 + r, -months);
    const f = monthly * (1 - pow) / r - cashReceived;
    const fPrime =
      monthly * (months * pow / (1 + r) * r - (1 - pow)) / (r * r);
    const next = r - f / fPrime;
    if (!isFinite(next)) break;
    if (Math.abs(next - r) < 1e-9) {
      r = next;
      break;
    }
    r = next;
  }
  return r * 12 * 100;
}

export function AprCalc() {
  const [amount, setAmount] = useState(10000);
  const [noteRate, setNoteRate] = useState(12);
  const [fee, setFee] = useState(5);
  const [term, setTerm] = useState(36);

  const { effective, monthly, feeDollar, cashReceived } = useMemo(() => {
    const m = monthlyPayment(amount, noteRate, term);
    const f = amount * (fee / 100);
    return {
      effective: effectiveApr(amount, noteRate, fee, term),
      monthly: m,
      feeDollar: f,
      cashReceived: amount - f,
    };
  }, [amount, noteRate, fee, term]);

  const spread = effective - noteRate;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
      <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
        <Field label="Loan amount" value={`$${amount.toLocaleString()}`} min={500} max={50000} step={500} raw={amount} onChange={setAmount} />
        <Field label="Stated interest rate" value={`${noteRate.toFixed(2)}%`} min={2} max={35.99} step={0.25} raw={noteRate} onChange={setNoteRate} />
        <Field label="Origination fee" value={`${fee.toFixed(1)}%`} min={0} max={10} step={0.5} raw={fee} onChange={setFee} />
        <Field label="Term" value={`${term} months`} min={6} max={84} step={1} raw={term} onChange={setTerm} />
      </form>

      <aside className="rounded-[14px] bg-cream-50 ring-1 ring-cream-300 p-6 self-start">
        <span className="eyebrow">Results</span>
        <dl className="mt-5 space-y-4">
          <Row k="Effective APR" v={`${effective.toFixed(2)}%`} highlight />
          <Row k="Spread vs note rate" v={`+${spread.toFixed(2)}%`} />
          <Row k="Origination fee" v={formatCurrency(Math.round(feeDollar))} />
          <Row k="Cash you receive" v={formatCurrency(Math.round(cashReceived))} />
          <Row k="Monthly payment" v={formatCurrency(Math.round(monthly))} />
        </dl>
        <p className="mt-5 text-[12px] leading-relaxed text-ink-500">
          The effective APR captures the true cost of the loan once the origination fee is rolled in. Compare effective APRs (not stated rates) when shopping lenders.
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
