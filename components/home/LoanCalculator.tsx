"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";

export function LoanCalculator() {
  const [amount, setAmount] = useState(5000);
  const [termMonths, setTermMonths] = useState(36);
  const apr = 19.99;

  const monthly = useMemo(() => {
    const r = apr / 100 / 12;
    const n = termMonths;
    return (amount * r) / (1 - Math.pow(1 + r, -n));
  }, [amount, termMonths]);

  const total = monthly * termMonths;

  return (
    <div className="relative w-full max-w-md bg-cream-50 ring-1 ring-cream-300/80 rounded-[18px] p-7 sm:p-9 shadow-[0_30px_60px_-30px_rgba(14,59,46,0.18)]">
      {/* Corner accent */}
      <div className="absolute -top-px left-7 right-7 h-px bg-forest-700" />

      <div className="flex items-baseline justify-between">
        <span className="eyebrow">Estimate</span>
        <span className="text-[11px] text-ink-300 tabular">No credit impact</span>
      </div>

      <div className="mt-7">
        <div className="flex items-baseline justify-between">
          <label htmlFor="amount" className="text-[13px] text-ink-500">
            Amount
          </label>
          <output
            htmlFor="amount"
            className="tabular text-2xl text-ink-900"
          >
            {formatCurrency(amount)}
          </output>
        </div>
        <input
          id="amount"
          type="range"
          min={500}
          max={50000}
          step={500}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="range-refined mt-4"
        />
        <div className="mt-1.5 flex justify-between text-[11px] tabular text-ink-300">
          <span>$500</span>
          <span>$50,000</span>
        </div>
      </div>

      <hr className="rule my-6" />

      <div>
        <div className="flex items-baseline justify-between">
          <label htmlFor="term" className="text-[13px] text-ink-500">
            Term
          </label>
          <output
            htmlFor="term"
            className="tabular text-2xl text-ink-900"
          >
            {termMonths} <span className="text-base text-ink-500">months</span>
          </output>
        </div>
        <input
          id="term"
          type="range"
          min={6}
          max={72}
          step={6}
          value={termMonths}
          onChange={(e) => setTermMonths(Number(e.target.value))}
          className="range-refined mt-4"
        />
        <div className="mt-1.5 flex justify-between text-[11px] tabular text-ink-300">
          <span>6 mo</span>
          <span>72 mo</span>
        </div>
      </div>

      <div className="mt-7 rounded-[12px] bg-forest-700 p-5 text-cream-100">
        <div className="flex items-baseline justify-between">
          <span className="eyebrow !text-cream-100/70">Estimated monthly</span>
          <span className="tabular text-[11px] text-cream-100/60">{apr}% APR</span>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="tabular text-[44px] leading-none font-semibold tracking-tight text-cream-100">
            {formatCurrency(Math.round(monthly))}
          </span>
          <span className="text-[13px] text-cream-100/70">/ mo</span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-cream-100/15 pt-3 text-[12px]">
          <span className="text-cream-100/60">Total over {termMonths} mo</span>
          <span className="tabular text-cream-100">{formatCurrency(Math.round(total))}</span>
        </div>
      </div>

      <Link
        href={`/apply?amount=${amount}&term=${termMonths}`}
        className="btn btn-primary mt-6 w-full"
      >
        See real offers
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
          <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <p className="mt-4 text-center text-[11px] text-ink-300">
        Estimate is illustrative. Final terms depend on lender qualification.
      </p>
    </div>
  );
}
