/**
 * Loan-amount programmatic pages.
 *
 * Each entry powers `/loans/amount/[slug]` (e.g. `/loans/amount/5000`)
 * targeting high-intent queries like "5000 dollar personal loan".
 *
 * Slugs are bare numbers so URLs read naturally. Content is varied
 * per-tier (small / mid / large) to avoid duplicate-content signals.
 */

import { formatCurrency } from "@/lib/utils";

export type AmountTier = "small" | "mid" | "large";

export type AmountPage = {
  slug: string;
  amount: number;
  /** Tier drives intro / FAQ wording so pages don't look templated. */
  tier: AmountTier;
  /** APR range typically available at this loan size (illustrative; real rates depend on lender). */
  aprMin: number;
  aprMax: number;
  /** Typical term range for this amount. */
  termMin: number;
  termMax: number;
  /** A representative term used in the example calculation. */
  exampleTermMonths: number;
  /** APR used in the representative example. */
  exampleApr: number;
};

export const amounts: AmountPage[] = [
  { slug: "500", amount: 500, tier: "small", aprMin: 14.99, aprMax: 35.99, termMin: 3, termMax: 24, exampleTermMonths: 12, exampleApr: 29.99 },
  { slug: "1000", amount: 1000, tier: "small", aprMin: 12.99, aprMax: 35.99, termMin: 6, termMax: 36, exampleTermMonths: 24, exampleApr: 26.99 },
  { slug: "3000", amount: 3000, tier: "small", aprMin: 9.99, aprMax: 35.99, termMin: 12, termMax: 48, exampleTermMonths: 36, exampleApr: 22.99 },
  { slug: "5000", amount: 5000, tier: "mid", aprMin: 7.99, aprMax: 35.99, termMin: 12, termMax: 60, exampleTermMonths: 36, exampleApr: 19.99 },
  { slug: "10000", amount: 10000, tier: "mid", aprMin: 6.99, aprMax: 32.99, termMin: 24, termMax: 60, exampleTermMonths: 48, exampleApr: 17.99 },
  { slug: "15000", amount: 15000, tier: "mid", aprMin: 6.49, aprMax: 29.99, termMin: 24, termMax: 60, exampleTermMonths: 48, exampleApr: 15.99 },
  { slug: "20000", amount: 20000, tier: "large", aprMin: 5.99, aprMax: 29.99, termMin: 36, termMax: 72, exampleTermMonths: 60, exampleApr: 13.99 },
  { slug: "50000", amount: 50000, tier: "large", aprMin: 5.99, aprMax: 24.99, termMin: 36, termMax: 72, exampleTermMonths: 60, exampleApr: 11.99 },
];

export const amountBySlug = Object.fromEntries(amounts.map((a) => [a.slug, a])) as Record<string, AmountPage>;

/** Standard fixed-payment formula: M = P * r * (1+r)^n / ((1+r)^n - 1) */
export function monthlyPayment(principal: number, aprPct: number, months: number) {
  const r = aprPct / 100 / 12;
  if (r === 0) return principal / months;
  const pow = Math.pow(1 + r, months);
  return (principal * r * pow) / (pow - 1);
}

export function totalCost(principal: number, aprPct: number, months: number) {
  return monthlyPayment(principal, aprPct, months) * months;
}

export function tierIntro(p: AmountPage) {
  const amt = formatCurrency(p.amount);
  switch (p.tier) {
    case "small":
      return `A ${amt} personal loan is typically used to cover a short-term gap: an unexpected bill, car repair, or to consolidate a small balance off a high-APR credit card. Loans at this size usually run on shorter terms (${p.termMin}-${p.termMax} months), so the monthly payment stays manageable and you finish repayment quickly.`;
    case "mid":
      return `A ${amt} personal loan is one of the most common loan sizes in the U.S. consumer-credit market. Borrowers use loans in this range to consolidate credit-card debt, fund a home-improvement project, cover medical bills, or pay for a major life event. Term lengths of ${p.termMin} to ${p.termMax} months let you balance monthly affordability against total interest paid.`;
    case "large":
      return `A ${amt} personal loan sits at the upper end of the unsecured personal-loan market. Approval at this size generally requires strong credit (FICO 680+), stable verifiable income, and a low debt-to-income ratio. Borrowers typically use loans of this size for major debt consolidation, a kitchen or whole-home renovation, or to finance a substantial one-time cost. Longer terms (up to ${p.termMax} months) reduce monthly payment, but increase total interest paid.`;
  }
}

export function tierBullets(p: AmountPage): string[] {
  const amt = formatCurrency(p.amount);
  const monthly = Math.round(monthlyPayment(p.amount, p.exampleApr, p.exampleTermMonths));
  const total = Math.round(totalCost(p.amount, p.exampleApr, p.exampleTermMonths));
  const interest = total - p.amount;
  return [
    `${amt} loan amount`,
    `APR range typically ${p.aprMin}% to ${p.aprMax}%`,
    `Repayment terms from ${p.termMin} to ${p.termMax} months`,
    `Example: ${p.exampleApr}% APR over ${p.exampleTermMonths} months = ${formatCurrency(monthly)}/month`,
    `Total cost in that example: ${formatCurrency(total)} (${formatCurrency(interest)} interest)`,
    `Soft credit check at pre-qualification, no impact to your score to apply`,
  ];
}

export function tierFaq(p: AmountPage): { q: string; a: string }[] {
  const amt = formatCurrency(p.amount);
  const monthly = Math.round(monthlyPayment(p.amount, p.exampleApr, p.exampleTermMonths));
  return [
    {
      q: `What credit score do I need for a ${amt} personal loan?`,
      a:
        p.tier === "small"
          ? `Loans of ${amt} are available to a wide range of credit profiles. Lenders in our network consider FICO scores starting in the mid-500s, though strong income and bank-account history matter as much as the score at this loan size.`
          : p.tier === "mid"
          ? `Most lenders approving ${amt} personal loans look for a FICO score of 600 or higher, verifiable income, and an active checking account. Stronger credit (680+) and lower debt-to-income ratios unlock the lowest APRs in the range.`
          : `Approval for a ${amt} personal loan generally requires a FICO score of 680+, two years of verifiable income, and a debt-to-income ratio under 40%. Strong applicants can see APRs in the single digits.`,
    },
    {
      q: `What's the monthly payment on a ${amt} loan?`,
      a: `The monthly payment depends on your APR and term. As an illustration, ${amt} at ${p.exampleApr}% APR over ${p.exampleTermMonths} months works out to approximately ${formatCurrency(monthly)} per month. Use our loan-payment calculator to model your own rate and term.`,
    },
    {
      q: `How fast can I get ${amt}?`,
      a: `After you submit a request, lenders typically respond with offers within minutes. Once you accept and e-sign, funds are deposited via ACH as fast as the next business day. Bank processing times may add a day for some applicants.`,
    },
    {
      q: `Is there a prepayment penalty if I pay off the ${amt} loan early?`,
      a: `Most lenders in our network do not charge prepayment penalties on personal loans. Paying ahead of schedule reduces the interest you owe. Always confirm prepayment terms in the lender's loan agreement before signing.`,
    },
    {
      q: `Will applying for a ${amt} loan hurt my credit score?`,
      a: `No. Submitting a request through Get Advance Loan results in a soft credit inquiry only, which is not visible to other lenders and does not affect your credit score. A hard credit inquiry only happens if you accept a final offer and the lender requires one to finalise the loan.`,
    },
  ];
}
