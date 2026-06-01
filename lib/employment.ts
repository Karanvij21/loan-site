/**
 * Employment-type programmatic pages, extends `/loans/[slug]` with
 * audience pages targeting "personal loan for X" queries by employment type.
 *
 * Same shape as `useCases.ts`.
 */

import type { UseCase } from "@/lib/useCases";

export const employmentTypes: Record<string, UseCase> = {
  "self-employed": {
    slug: "self-employed",
    h1: "Personal loans for self-employed borrowers",
    title: "Personal Loans for Self-Employed Borrowers: How to Qualify",
    description:
      "How self-employed borrowers qualify for personal loans without W-2 income. Documentation requirements, lender expectations, and APR ranges for sole proprietors and small-business owners.",
    eyebrow: "Employment type",
    intro:
      "A personal loan for a self-employed borrower is a standard unsecured installment loan underwritten with self-employment income, typically Schedule C, K-1, or 1099 earnings, instead of W-2 wages. Lenders need additional documentation to verify income, but creditworthy self-employed borrowers can access the full personal-loan market.",
    amountMin: 1000,
    amountMax: 50000,
    termMin: 12,
    termMax: 72,
    aprMin: 6.99,
    aprMax: 35.99,
    bullets: [
      "Sole proprietors, LLC owners, and S-corp owners all qualify",
      "Loan amounts from $1,000 to $50,000",
      "APRs typically 6.99% to 35.99% (credit-dependent)",
      "Typically need 2 years of tax returns to verify income",
      "Strong credit and 2+ years self-employed unlocks the best APRs",
    ],
    faqs: [
      { q: "What income documents do self-employed borrowers need?", a: "Most lenders want two years of personal federal tax returns (Form 1040 with Schedules C, E, and/or K-1). Some accept one year if the business is stable. Recent bank statements (typically 3-6 months) verify cash flow. Newer businesses may need to provide a year-to-date P&L." },
      { q: "How do lenders calculate self-employment income?", a: "Most use a two-year average of net income from your tax returns (Schedule C line 31 for sole proprietors). Some add back depreciation. If income trended down year-over-year, lenders use the more recent (lower) year. If it trended up, the average usually controls." },
      { q: "Can I get a personal loan with less than 2 years of self-employment?", a: "Yes, but options narrow. Some online lenders accept 1 year of self-employment if you have 3+ years of stable W-2 income in the same field beforehand. Strong credit (700+) significantly helps when self-employment history is short." },
      { q: "Should I use gross or net income?", a: "Lenders use net (after-tax-deductible expenses). This can be lower than what you'd report on a W-2 application. Some self-employed borrowers consciously reduce deductions in the year before a major loan application to show higher net income, discuss with a tax pro before doing this." },
    ],
  },
  "1099-contractor": {
    slug: "1099-contractor",
    h1: "Personal loans for 1099 contractors",
    title: "Personal Loans for 1099 Contractors and Freelancers",
    description:
      "Personal loans for 1099 independent contractors: how income is verified, what lenders require, and how to qualify with non-traditional income.",
    eyebrow: "Employment type",
    intro:
      "A personal loan for a 1099 contractor is a standard unsecured installment loan underwritten with independent-contractor income. Lenders weight 1099 earnings similarly to W-2 income once you can document the history and consistency.",
    amountMin: 1000,
    amountMax: 40000,
    termMin: 12,
    termMax: 60,
    aprMin: 7.99,
    aprMax: 35.99,
    bullets: [
      "Full-time and part-time 1099 contractors both qualify",
      "Loan amounts from $1,000 to $40,000",
      "APRs typically 7.99% to 35.99%",
      "Documentation: 2 years of 1099s, tax returns, and recent bank statements",
      "Multiple 1099 income streams can be combined for qualification",
    ],
    faqs: [
      { q: "How do lenders verify 1099 income?", a: "Two main signals: your federal tax returns (showing 1099 income summed on Schedule C or as 'other income') and recent 1099 forms from the payers. Some lenders also want 3-6 months of bank statements to verify the deposits match the reported income." },
      { q: "Is 1099 income treated worse than W-2 income?", a: "Slightly. Lenders see 1099 income as somewhat less stable than W-2 because contracts can end. The discount is usually small for established contractors (2+ years, stable client base), and disappears entirely for borrowers with strong credit." },
      { q: "What if I have both W-2 and 1099 income?", a: "Most lenders will count both. This is the strongest income profile for a contractor, the W-2 portion gives the lender a 'floor' of stable income, and the 1099 piece adds capacity. Bring documentation for both." },
      { q: "Can I get a personal loan if I just started contracting?", a: "Harder, but possible. Strong credit (700+) and a recent strong W-2 history in the same field help significantly. Some lenders accept a single tax year of 1099 income; others want two. Pre-qualification (soft pull) shows you who'll work with you." },
    ],
  },
  "gig-workers": {
    slug: "gig-workers",
    h1: "Personal loans for gig-economy workers",
    title: "Personal Loans for Uber, DoorDash, Instacart, and Other Gig Workers",
    description:
      "How rideshare drivers, food-delivery couriers, and other gig workers qualify for personal loans. Income verification, lender expectations, and APR ranges.",
    eyebrow: "Employment type",
    intro:
      "A personal loan for a gig-economy worker is underwritten with platform-earned income (Uber, Lyft, DoorDash, Instacart, Shipt, Amazon Flex, TaskRabbit, etc.) in place of W-2 wages. Lenders need to verify the platform deposits and the history, but established gig workers with stable monthly income can qualify on standard personal-loan terms.",
    amountMin: 500,
    amountMax: 25000,
    termMin: 6,
    termMax: 60,
    aprMin: 12.99,
    aprMax: 35.99,
    bullets: [
      "Income from Uber, DoorDash, Instacart, Shipt, Amazon Flex, TaskRabbit, etc.",
      "Loan amounts from $500 to $25,000",
      "APRs typically 12.99% to 35.99%",
      "Documentation: 1099s from platforms + 3-6 months bank statements",
      "12+ months of gig income with stable monthly deposits unlocks better rates",
    ],
    faqs: [
      { q: "How do lenders verify gig-economy income?", a: "Three signals: 1099-NEC or 1099-K from each platform, recent year's tax return showing the income summed on Schedule C, and 3-6 months of bank statements showing the platform direct deposits. Some lenders also check the in-app earnings dashboards." },
      { q: "Does the lender care which platforms I drive for?", a: "Mostly no. What matters is documented income, not the specific platform. Lenders treat earnings from Uber, Lyft, DoorDash, Instacart, and other established platforms similarly, all are reported on 1099 forms." },
      { q: "Can I get approved with only a few months of gig history?", a: "Approval odds are lower with short history. Most lenders want at least 6 months, and 12+ unlocks the best pricing. If you have a strong recent W-2 history that transitioned to gig work, document the full timeline, lenders often weight that favourably." },
      { q: "Are there lenders that specialise in gig workers?", a: "A handful, typically online installment lenders that explicitly accept platform-deposit verification. Marketplace pre-qualification (soft pull) is the fastest way to see who'll consider you. Don't waste hard inquiries on lenders that exclude gig income." },
    ],
  },
  "w2-employees": {
    slug: "w2-employees",
    h1: "Personal loans for W-2 employees",
    title: "Personal Loans for W-2 Employees: Standard Underwriting Explained",
    description:
      "W-2 employee personal loans: standard documentation, fastest underwriting in the market, and how to qualify for the best APRs at any credit tier.",
    eyebrow: "Employment type",
    intro:
      "A personal loan for a W-2 employee is the standard case in U.S. personal lending. With a regular paycheque, recent W-2 forms, and pay stubs, you have the cleanest possible income documentation, which translates to faster underwriting and broader lender competition for your application.",
    amountMin: 1000,
    amountMax: 50000,
    termMin: 12,
    termMax: 72,
    aprMin: 5.99,
    aprMax: 35.99,
    bullets: [
      "Full-time and part-time W-2 employees qualify",
      "Loan amounts from $1,000 to $50,000",
      "APRs from 5.99% (excellent credit) to 35.99%",
      "Fastest underwriting in the personal-loan market",
      "Standard documentation: recent pay stubs + last year's W-2",
    ],
    faqs: [
      { q: "What documents do W-2 employees need to apply?", a: "Typically 2-3 recent pay stubs, the most recent year's W-2, and government ID. Some lenders also pull bank-statement data via Plaid to verify the deposits. Total documentation usually takes 5-10 minutes to gather." },
      { q: "How long does W-2 underwriting take?", a: "Often minutes. Online lenders pull credit, verify employment and income against the documents you upload, and decision in real time. Funding typically lands the next business day after acceptance." },
      { q: "Can part-time W-2 income qualify me?", a: "Yes. Lenders look at total monthly income and debt-to-income ratio, not whether you're full or part time. Part-time income from a long-tenured job is treated similarly to full-time income from the same employer." },
      { q: "What if I just started a new W-2 job?", a: "Most lenders want at least 30-90 days at the new employer plus a prior history in the same field. Job-hopping within an industry is usually fine; switching industries can require longer recent tenure. An offer letter alone usually isn't enough for approval before the first paycheque clears." },
    ],
  },
};

export const employmentSlugs = Object.keys(employmentTypes);

export function getEmploymentType(slug: string): UseCase | undefined {
  return employmentTypes[slug];
}
