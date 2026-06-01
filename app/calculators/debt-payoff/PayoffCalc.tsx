"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/utils";
import { monthlyPayment } from "@/lib/amounts";

/**
 * Compute months to pay off a revolving balance at a given APR with a fixed
 * monthly payment. Returns null if payment <= monthly interest (never pays off).
 */
function monthsToPayoff(balance: number, aprPct: number, monthly: number) {
  const r = aprPct / 100 / 12;
  const interest1 = balance * r;
  if (monthly <= interest1) return null;
  // n = -ln(1 - r*B/M) / ln(1+r)
  const n = -Math.log(1 - (r * balance) / monthly) / Math.log(1 + r);
  return Math.ceil(n);
}

export function PayoffCalc() {
  const [balance, setBalance] = useState(8000);
  const [cardApr, setCardApr] = useState(24);
  const [payment, setPayment] = useState(300);

  // Consolidation comparison
  const [loanApr, setLoanApr] = useState(14);
  const [loanTerm, setLoanTerm] = useState(36);

  const card = useMemo(() => {
    const months = monthsToPayoff(balance, cardApr, payment);
    if (months === null) {
      return { months: null, totalInterest: null, totalPaid: null };
    }
    const totalPaid = months * payment;
    return { months, totalPaid, totalInterest: totalPaid - balance };
  }, [balance, cardApr, payment]);

  const loan = useMemo(() => {
    const m = monthlyPayment(balance, loanApr, loanTerm);
    const totalPaid = m * loanTerm;
    return { monthly: m, totalPaid, totalInterest: totalPaid - balance };
  }, [balance, loanApr, loanTerm]);

  const savings = card.totalInterest !== null ? Math.max(0, card.totalInterest - loan.totalInterest) : null;

  return (
    <div className="space-y-10">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* CARD payoff */}
        <div className="rounded-[18px] border border-cream-300 p-6">
          <span className="eyebrow">If you keep paying the card</span>
          <h3 className="mt-2 text-[22px] tracking-tight text-ink-900">Credit card minimum trap</h3>
          <form className="mt-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <Field label="Current balance" value={`$${balance.toLocaleString()}`} min={500} max={50000} step={500} raw={balance} onChange={setBalance} />
            <Field label="Card APR" value={`${cardApr.toFixed(2)}%`} min={5} max={36} step={0.5} raw={cardApr} onChange={setCardApr} />
            <Field label="Monthly payment" value={`$${payment}`} min={50} max={2000} step={25} raw={payment} onChange={setPayment} />
          </form>

          <dl className="mt-6 space-y-3 border-t border-cream-300 pt-5">
            {card.months === null ? (
              <p className="text-[14px] text-ink-700">
                Your monthly payment is too small to cover the interest, the balance will grow rather than shrink. Increase the payment to pay it off.
              </p>
            ) : (
              <>
                <Row k="Months to payoff" v={`${card.months} mo`} />
                <Row k="Total interest" v={formatCurrency(Math.round(card.totalInterest ?? 0))} />
                <Row k="Total repaid" v={formatCurrency(Math.round(card.totalPaid ?? 0))} />
              </>
            )}
          </dl>
        </div>

        {/* LOAN consolidation */}
        <div className="rounded-[18px] border border-cream-300 bg-cream-50/40 p-6">
          <span className="eyebrow">If you consolidate</span>
          <h3 className="mt-2 text-[22px] tracking-tight text-ink-900">Personal loan payoff</h3>
          <form className="mt-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <Field label="Personal loan APR" value={`${loanApr.toFixed(2)}%`} min={5} max={36} step={0.25} raw={loanApr} onChange={setLoanApr} />
            <Field label="Loan term" value={`${loanTerm} months`} min={12} max={72} step={1} raw={loanTerm} onChange={setLoanTerm} />
          </form>

          <dl className="mt-6 space-y-3 border-t border-cream-300 pt-5">
            <Row k="Monthly payment" v={formatCurrency(Math.round(loan.monthly))} />
            <Row k="Months to payoff" v={`${loanTerm} mo`} />
            <Row k="Total interest" v={formatCurrency(Math.round(loan.totalInterest))} />
            <Row k="Total repaid" v={formatCurrency(Math.round(loan.totalPaid))} />
          </dl>
        </div>
      </div>

      {/* SAVINGS callout */}
      <div className="rounded-[14px] bg-forest-700 p-6 text-cream-100 lg:p-8">
        <span className="eyebrow !text-cream-200">Potential savings</span>
        {savings !== null && savings > 0 ? (
          <>
            <p className="mt-3 text-[26px] tracking-tight lg:text-[34px]">
              You could save <span className="tabular">{formatCurrency(Math.round(savings))}</span> in interest by consolidating.
            </p>
            <p className="mt-2 text-[14px] leading-relaxed opacity-90">
              Assumes you actually pay off the loan on schedule and don't run the card balance back up. The math only works if you stop adding to the card.
            </p>
          </>
        ) : (
          <p className="mt-3 text-[18px] opacity-90">
            At this APR and term, consolidation doesn't save you interest. Try a shorter loan term or a lower-rate offer.
          </p>
        )}
      </div>
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

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-cream-300 pb-2 last:border-0 last:pb-0">
      <dt className="text-[12px] uppercase tracking-[0.15em] text-ink-500">{k}</dt>
      <dd className="tabular text-right text-[15px] font-semibold text-ink-900">{v}</dd>
    </div>
  );
}
