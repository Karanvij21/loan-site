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
    title: "Personal Loans for Self-Employed Borrowers 2026: How to Qualify",
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
    title: "Personal Loans for 1099 Contractors and Freelancers 2026",
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
    title: "Personal Loans for Gig Workers 2026: Uber, DoorDash, Instacart & More",
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
    title: "Personal Loans for W-2 Employees 2026: Standard Underwriting Explained",
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
  "seasonal": {
    slug: "seasonal",
    h1: "Personal loans for seasonal workers",
    title: "Personal Loans for Seasonal Workers 2026: Variable Income, Year-Round Repayment",
    description:
      "How seasonal workers qualify for personal loans on irregular income. Tax returns, bank statements, and documentation strategies for agriculture, tourism, and construction workers.",
    eyebrow: "Employment type",
    intro:
      "Seasonal workers, including those in agriculture, construction, landscaping, hospitality, tourism, and retail holiday staffing, earn most of their income in specific months but face year-round expenses. Personal loan underwriters care about average annual income, not whether it arrives in peaks. With 2 years of tax returns showing consistent seasonal earnings, most mainstream lenders will underwrite seasonal income the same as regular income.",
    amountMin: 500,
    amountMax: 30000,
    termMin: 12,
    termMax: 60,
    aprMin: 9.99,
    aprMax: 35.99,
    bullets: [
      "2 years of tax returns documents consistent seasonal income",
      "Annual gross income used for DTI, not monthly peaks",
      "Loan amounts from $500 to $30,000",
      "APRs 9.99% to 35.99% depending on credit",
      "Soft credit check to compare, no score impact",
    ],
    faqs: [
      { q: "How do seasonal workers document income for a personal loan?", a: "Two years of tax returns (Schedule C for self-employed seasonal workers, W-2s for seasonal employees) are the primary income documentation. Lenders calculate 24-month average annual income and divide by 12 for a monthly income figure. Bank statements showing seasonal income deposits (6-12 months of highs with periodic gaps) help tell the story of your income pattern." },
      { q: "Can I get a personal loan during my off-season?", a: "Yes, if your annual income supports it. Lenders look at your full-year income pattern, not just what you're earning at the moment of application. A construction worker earning $65,000 between April and November who applies in January can qualify using the prior year's income. Off-season applications require strong bank account reserves or evidence that the seasonal employment is returning." },
      { q: "Are credit unions better for seasonal workers?", a: "Often yes. Credit unions with ties to specific industries (agriculture credit unions, teachers' credit unions, etc.) understand seasonal income patterns better than algorithmic online lenders. If you belong to an industry-specific credit union, this is the best first stop for a personal loan. They may be willing to count seasonal income more generously than a national online lender." },
      { q: "What if this is my first year of seasonal work?", a: "One year of seasonal income history is a challenge for most lenders who want 2+ years. Options include applying with a co-borrower who has stable income, using a secured personal loan backed by savings, or targeting lenders known for flexible employment verification (some fintechs use bank data rather than tax returns and can see real income even without 2-year history)." },
    ],
  },
  "healthcare-workers": {
    slug: "healthcare-workers",
    h1: "Personal loans for healthcare workers",
    title: "Personal Loans for Healthcare Workers 2026: Nurses, RNs, Doctors & Medical Staff",
    description:
      "Personal loans for nurses, registered nurses, doctors, and healthcare staff. Licensing, shift pay, and travel nursing income all qualify. APR ranges and documentation.",
    eyebrow: "Employment type",
    intro:
      "Healthcare workers, including registered nurses, nurse practitioners, physicians, medical assistants, and allied health professionals, often have strong income but complex pay structures: shift differentials, overtime, PRN (per diem) pay, travel nursing stipends, and sign-on bonuses. Most lenders can accommodate healthcare income with standard pay-stub documentation. Travel nurses and PRN workers need bank-statement income history to document variable pay.",
    amountMin: 1000,
    amountMax: 50000,
    termMin: 12,
    termMax: 72,
    aprMin: 7.99,
    aprMax: 29.99,
    bullets: [
      "Shift differentials and overtime count as qualifying income",
      "Travel nursing stipends may count at some lenders",
      "Loan amounts from $1,000 to $50,000",
      "APRs 7.99% to 29.99% depending on credit",
      "Soft credit check pre-qualification, no score impact",
    ],
    faqs: [
      { q: "Do travel nursing stipends count as income for a personal loan?", a: "It varies by lender. Travel nursing compensation includes a taxable base pay plus non-taxable housing and meal stipends. Most lenders only count taxable wages shown on pay stubs for qualification, not the non-taxable stipends. Some lenders that specialize in healthcare workers will count total package compensation. Bank statements showing actual deposits are helpful supplemental documentation for the full income picture." },
      { q: "Can I include nursing overtime when applying for a personal loan?", a: "Yes, if it's consistent. Most lenders will count overtime that appears regularly (consistently for 12-24 months) in your income calculation. Occasional overtime is usually not counted. Bring 2-3 recent pay stubs plus a year or two of W-2s that show overtime history to document consistent additional income." },
      { q: "Are there personal loans specifically for nurses?", a: "Some lenders and credit unions market nurse-specific loan programs with slightly relaxed qualification criteria or lower APRs. Laurel Road (which has historically served healthcare professionals), SoFi, and some healthcare credit unions (like Healthcare Financial Federal Credit Union, Nurses Financial) have featured nurse-focused products. Availability and terms change frequently; compare these alongside mainstream marketplace lenders for the best rate." },
      { q: "I'm a PRN (per diem) nurse. Can I qualify?", a: "Yes, with appropriate documentation. PRN nurses have variable income that fluctuates week to week. The key is documenting 12-24 months of consistent PRN income. Bank statements showing regular deposits, tax returns, and a letter from your staffing agency confirming your rates and availability can support your application. Credit unions familiar with healthcare employment are more likely to underwrite PRN income favorably than algorithmic online lenders." },
    ],
  },
  "part-time": {
    slug: "part-time",
    h1: "Personal loans for part-time workers",
    title: "Personal Loans for Part-Time Workers 2026: Qualify on Variable Income",
    description:
      "How part-time workers get personal loan approval: income documentation, lender requirements, and APRs available on part-time or variable income.",
    eyebrow: "Employment type",
    intro:
      "Part-time workers can qualify for personal loans using the same underwriting as full-time employees. Lenders care about total monthly income and DTI ratio, not the number of hours worked. A part-time worker earning $2,500/month with low existing debt can qualify for the same loan amount as a full-time worker with identical numbers. The key is documenting income consistently.",
    amountMin: 500,
    amountMax: 25000,
    termMin: 12,
    termMax: 60,
    aprMin: 9.99,
    aprMax: 35.99,
    bullets: [
      "Part-time income qualifies the same as full-time at most lenders",
      "Loan amounts from $500 to $25,000 based on income",
      "APRs typically 9.99% to 35.99% depending on credit",
      "2-3 recent pay stubs or bank statements document income",
      "Soft credit check, no score impact to compare offers",
    ],
    faqs: [
      { q: "Can I get a personal loan working part time?", a: "Yes. Lenders don't require full-time status; they require verifiable income and a DTI ratio that supports the loan payment. If your part-time income is consistent and documented (pay stubs, bank statements, or 1099s), you can qualify for a personal loan the same way a full-time employee would." },
      { q: "How do I document part-time income for a loan application?", a: "Two to three recent pay stubs work for W-2 part-time work. For part-time contract or freelance work, 3 months of bank statements showing recurring income deposits is the most accepted alternative. Some lenders also accept a letter from your employer confirming pay rate and schedule." },
      { q: "Will multiple part-time jobs count together?", a: "Yes at most lenders. If you hold multiple part-time jobs, you can typically report combined income from all sources. You'll need documentation for each income stream. Lenders generally want to see income from each source for at least 2-6 months before counting it." },
      { q: "What's the maximum loan amount on part-time income?", a: "It depends on total monthly income and existing debt. On $2,000/month part-time income with minimal debt, a $10,000 loan over 36 months at 18% APR results in a $363 payment, which is 18% of gross monthly income (well within lender guidelines). On $3,000/month income, you can support a proportionally larger loan." },
    ],
  },
  "retired": {
    slug: "retired",
    h1: "Personal loans for retired people",
    title: "Personal Loans for Retired Borrowers 2026: Social Security, Pension & Fixed Income",
    description:
      "How retirees qualify for personal loans using Social Security, pension, IRA distributions, and fixed income. APRs, amounts, and documentation requirements.",
    eyebrow: "Employment type",
    intro:
      "Retirement income, including Social Security, pension payments, IRA/401(k) distributions, and investment income, counts the same as earned income for personal loan purposes under ECOA. Lenders may not discriminate based on age or income source. A retired borrower with consistent documented income and a good credit score can access the same loan amounts and APRs as a working borrower with equivalent numbers.",
    amountMin: 1000,
    amountMax: 40000,
    termMin: 12,
    termMax: 60,
    aprMin: 7.99,
    aprMax: 29.99,
    bullets: [
      "Social Security, pension, and IRA income fully counts",
      "ECOA prohibits age discrimination in lending",
      "Loan amounts from $1,000 to $40,000",
      "APRs typically 7.99% to 29.99% based on credit",
      "Soft credit check pre-qualification, no score impact",
    ],
    faqs: [
      { q: "Can retired people get personal loans?", a: "Yes. The Equal Credit Opportunity Act prohibits lenders from discriminating based on age. Retirement income (Social Security, pension, IRA/401k distributions, rental income, investment income) counts as qualifying income the same as wages. A retiree with $4,000/month in documented retirement income and a 720 credit score is a strong applicant." },
      { q: "What income counts for retired borrowers?", a: "Social Security retirement benefits, pension payments (public or private), regular IRA or 401(k) distributions, annuity payments, rental income, and investment dividend income all count. The income should be regular (monthly or at set intervals) and documentable. Social Security award letters and 1099-R forms are the standard proof documents." },
      { q: "Does my age affect my loan term options?", a: "Legally, no. Lenders cannot shorten your available loan term based on age. The same 60-month or 72-month personal loan terms available to younger borrowers must be offered to older borrowers with equivalent credit. Some retirees prefer shorter terms to minimize total interest; this is a personal choice, not a lender requirement." },
      { q: "How do I document retirement income?", a: "Social Security: use your annual SSA benefit verification letter or SSA-1099. Pension: pension award letter or 1099-R from the payer. IRA/401(k) distributions: 1099-R plus recent distribution statements. Consistent bank statements showing deposits also work as supplemental documentation at most lenders." },
    ],
  },
  "military": {
    slug: "military",
    h1: "Personal loans for military members and veterans",
    title: "Personal Loans for Military & Veterans 2026: MLA Protections, APR Cap & Options",
    description:
      "Personal loans for active-duty military and veterans: 36% MLA APR cap, SCRA protections, VA loan alternatives, and lenders that specialize in military borrowers.",
    eyebrow: "Employment type",
    intro:
      "Active-duty service members and their dependents have two important federal protections: the Military Lending Act (MLA) caps consumer loan APRs at 36% MAPR, and the Servicemembers Civil Relief Act (SCRA) caps interest on pre-service debts at 6%. Veterans without active-duty status have the same access as civilians but can benefit from military-affiliated credit unions (USAA, Navy Federal, PenFed) that often offer lower APRs and better underwriting for military income.",
    amountMin: 500,
    amountMax: 50000,
    termMin: 12,
    termMax: 84,
    aprMin: 5.99,
    aprMax: 35.99,
    bullets: [
      "MLA caps APR at 36% for active-duty members and dependents",
      "Military credit unions often offer lowest personal loan APRs",
      "Loan amounts from $500 to $50,000",
      "VA income (BAH, BAS) counts toward qualifying income",
      "Soft credit check pre-qualification available",
    ],
    faqs: [
      { q: "What is the MLA and how does it protect military borrowers?", a: "The Military Lending Act caps the Military Annual Percentage Rate (MAPR, which includes fees) at 36% for personal loans to active-duty service members, spouses, and certain dependents. Lenders must disclose this rate and certain loan terms orally and in writing. A lender offering a product that would exceed 36% MAPR to a covered borrower is violating federal law." },
      { q: "Do military credit unions offer better personal loan rates?", a: "Often significantly better. Navy Federal Credit Union, USAA Federal Savings Bank, and Pentagon Federal Credit Union regularly offer personal loan APRs starting around 7-8% for members with good credit, well below what most online lenders offer to the same credit profile. If you or an immediate family member have ever served, membership eligibility is worth checking." },
      { q: "Does military pay (BAH, BAS) count as qualifying income?", a: "Yes. Base pay, Basic Allowance for Housing (BAH), and Basic Allowance for Subsistence (BAS) all count as qualifying income for personal loans. These allowances are non-taxable, so lenders that 'gross up' non-taxable income may apply a 25-35% adjustment upward to the allowance figure, effectively increasing your qualifying income." },
      { q: "Can veterans (not active duty) access military loan protections?", a: "Veterans after discharge are not covered by MLA protections (which apply only during active duty to covered borrowers). However, veterans retain access to military-affiliated credit unions with favorable terms and strong service. Some lenders also have veteran-specific programs. SCRA protections apply only during active service for pre-service debts." },
    ],
  },
  "commission-based": {
    slug: "commission-based",
    h1: "Personal loans for commission-based workers",
    title: "Personal Loans for Commission-Based Workers 2026: Variable Income Qualification Guide",
    description:
      "Sales reps, real estate agents, and other commission earners can qualify for personal loans. Here is how lenders verify irregular income, what documents you need, and the APR ranges to expect.",
    eyebrow: "Employment type",
    intro:
      "Commission-based workers - real estate agents, sales representatives, independent insurance agents, financial advisors, and others with variable monthly income - can qualify for personal loans. The underwriting challenge is proving reliable average income when no two paychecks are the same. Most lenders use a 12-24 month average of documented commissions rather than a recent month's earnings.",
    amountMin: 1000,
    amountMax: 50000,
    termMin: 12,
    termMax: 72,
    aprMin: 7.99,
    aprMax: 35.99,
    bullets: [
      "Lenders average your last 12-24 months of documented commission income",
      "Loan amounts from $1,000 to $50,000",
      "APRs typically 7.99%-35.99% based on credit score and income stability",
      "Two years of tax returns (Schedule C or W-2 with commissions) typically required",
      "Soft credit check pre-qualification available at most online lenders",
    ],
    faqs: [
      { q: "How do lenders verify commission income?", a: "Most lenders require 1-2 years of federal tax returns (Schedule C for self-employed or W-2 plus commission statements for employees), recent bank statements showing the deposits, and sometimes a signed letter from your employer confirming the commission structure. Lenders will typically average the total annual commission over the past 12-24 months and divide by 12 to arrive at a monthly income figure. If your income has been growing, some lenders will weight more recent income more heavily." },
      { q: "What if my commission income is irregular month-to-month?", a: "This is expected for commission earners, and lenders account for it. The averaging approach (total commissions over 24 months divided by 24) smooths out the peaks and valleys. However, if your current year's income is significantly lower than prior years (for example, during a real estate market slowdown), lenders may use the current year or discount prior years. Providing a written explanation of your income trajectory and the nature of your business can help." },
      { q: "Do lenders distinguish between W-2 commission employees and independent contractors?", a: "Yes. W-2 commission employees (common in corporate sales jobs) have more predictable documentation - W-2 forms and employer-provided commission statements. Independent contractors (1099 income) are treated more like self-employed borrowers and typically need to provide Schedule C filings and business bank statements. The income averaging principle is the same, but independent contractors face additional scrutiny on business expenses and net income versus gross commissions." },
      { q: "Will a lender count a recent big commission month toward my income?", a: "Generally no. One standout month does not move the qualifying income number much when lenders are averaging 12-24 months. The flip side is also true: one bad month has limited impact. Lenders are looking for the sustainable trend, not the peak. If you recently closed an unusually large deal, note it in your application but expect qualifying income to be based on the multi-year average." },
    ],
  },
};

export const employmentSlugs = Object.keys(employmentTypes);

export function getEmploymentType(slug: string): UseCase | undefined {
  return employmentTypes[slug];
}
