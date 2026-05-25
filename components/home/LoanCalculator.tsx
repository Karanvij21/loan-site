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
    const m = (amount * r) / (1 - Math.pow(1 + r, -n));
    return m;
  }, [amount, termMonths]);

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-semibold text-slate-900">See an estimate</h2>
        <span className="text-xs text-slate-500">Pre-qualification, no impact on credit</span>
      </div>

      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <label htmlFor="amount" className="text-sm font-medium text-slate-700">
            Loan amount
          </label>
          <span className="text-xl font-bold text-brand-700">{formatCurrency(amount)}</span>
        </div>
        <input
          id="amount"
          type="range"
          min={500}
          max={50000}
          step={500}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-2 w-full accent-brand-600"
          aria-valuemin={500}
          aria-valuemax={50000}
          aria-valuenow={amount}
        />
        <div className="mt-1 flex justify-between text-xs text-slate-500">
          <span>$500</span>
          <span>$50,000</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <label htmlFor="term" className="text-sm font-medium text-slate-700">
            Repayment term
          </label>
          <span className="text-xl font-bold text-brand-700">{termMonths} months</span>
        </div>
        <input
          id="term"
          type="range"
          min={6}
          max={72}
          step={6}
          value={termMonths}
          onChange={(e) => setTermMonths(Number(e.target.value))}
          className="mt-2 w-full accent-brand-600"
          aria-valuemin={6}
          aria-valuemax={72}
          aria-valuenow={termMonths}
        />
        <div className="mt-1 flex justify-between text-xs text-slate-500">
          <span>6 mo</span>
          <span>72 mo</span>
        </div>
      </div>

      <div className="mt-7 rounded-xl bg-brand-50 p-4">
        <p className="text-sm text-slate-600">Estimated monthly payment</p>
        <p className="mt-1 text-3xl font-bold text-brand-800">
          {formatCurrency(Math.round(monthly))}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Example based on {apr}% APR. Actual rates vary by lender and applicant.
        </p>
      </div>

      <Link
        href={`/apply?amount=${amount}&term=${termMonths}`}
        className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-brand-600 px-5 py-3 text-base font-semibold text-white hover:bg-brand-700"
      >
        Get my offers
      </Link>
    </div>
  );
}
