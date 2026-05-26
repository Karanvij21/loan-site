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
    <div className="bezel-outer w-full max-w-md">
      <div className="bezel-inner p-7 sm:p-9">
        <div className="flex items-baseline justify-between">
          <span className="eyebrow-pill">
            <span className="h-1 w-1 rounded-full bg-forest-700" />
            Estimate
          </span>
          <span className="text-[11px] text-ink-300 tabular">No credit impact</span>
        </div>

        <div className="mt-7">
          <div className="flex items-baseline justify-between">
            <label htmlFor="amount" className="text-[13px] text-ink-500">Amount</label>
            <output
              htmlFor="amount"
              className="tabular text-[28px] tracking-tight font-display text-ink-900"
              style={{ fontWeight: 400 }}
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
            <label htmlFor="term" className="text-[13px] text-ink-500">Term</label>
            <output
              htmlFor="term"
              className="tabular text-[28px] tracking-tight font-display text-ink-900"
              style={{ fontWeight: 400 }}
            >
              {termMonths} <span className="text-[18px] text-ink-500">months</span>
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

        {/* Inner forest panel — nested architecture */}
        <div className="mt-7 bezel-inner-forest p-5">
          <div className="flex items-baseline justify-between">
            <span className="text-[10px] uppercase tracking-[0.18em] text-paper-100/70">
              Estimated monthly
            </span>
            <span className="tabular text-[11px] text-paper-100/60">{apr}% APR</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span
              className="tabular text-[48px] leading-none tracking-tight text-paper-100 font-display"
              style={{ fontWeight: 380 }}
            >
              {formatCurrency(Math.round(monthly))}
            </span>
            <span className="text-[13px] text-paper-100/70">/ mo</span>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-paper-100/15 pt-3 text-[12px]">
            <span className="text-paper-100/60">Total over {termMonths} mo</span>
            <span className="tabular text-paper-100">{formatCurrency(Math.round(total))}</span>
          </div>
        </div>

        <Link
          href={`/apply?amount=${amount}&term=${termMonths}`}
          className="btn btn-primary group mt-6 w-full"
        >
          See real offers
          <span aria-hidden className="btn-icon">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>

        <p className="mt-4 text-center text-[11px] text-ink-300">
          Estimate is illustrative. Final terms depend on lender qualification.
        </p>
      </div>
    </div>
  );
}
