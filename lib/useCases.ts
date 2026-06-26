/**
 * Use-case programmatic pages.
 *
 * Each entry powers `/loans/[slug]` (extended beyond the 3 core ProductSlugs)
 * targeting intent queries like "debt consolidation loan", "medical loan".
 *
 * Kept as a separate data source from `products.ts` so the 3 core product
 * archetypes remain isolated; the page route checks both lookups.
 */

export type UseCase = {
  slug: string;
  /** H1 + nav label. */
  h1: string;
  /** Document title used by Next metadata. */
  title: string;
  description: string;
  /** Short eyebrow above H1, categorises content for users. */
  eyebrow: string;
  intro: string;
  amountMin: number;
  amountMax: number;
  termMin: number;
  termMax: number;
  aprMin: number;
  aprMax: number;
  bullets: string[];
  faqs: { q: string; a: string }[];
};

export const useCases: Record<string, UseCase> = {
  "debt-consolidation": {
    slug: "debt-consolidation",
    h1: "Debt consolidation loans",
    title: "Debt Consolidation Loans 2026: Combine High-Interest Debt, Lower APR",
    description:
      "Combine credit-card balances and other high-APR debt into a single fixed-payment personal loan. Compare offers up to $50,000.",
    eyebrow: "Use case",
    intro:
      "A debt consolidation loan replaces several high-APR debts (most often credit cards) with one fixed-payment personal loan. If the new loan's APR is meaningfully lower than your weighted credit-card APR, consolidation can reduce both monthly cash-flow strain and total interest paid over the life of the debt.",
    amountMin: 1000,
    amountMax: 50000,
    termMin: 12,
    termMax: 60,
    aprMin: 6.99,
    aprMax: 35.99,
    bullets: [
      "Combine multiple credit-card balances into one fixed monthly payment",
      "Loan amounts from $1,000 to $50,000",
      "Fixed APRs typically 6.99% to 35.99%",
      "Common term lengths: 24, 36, 48, and 60 months",
      "Pay off the loan early with no prepayment penalty at most lenders",
    ],
    faqs: [
      { q: "Does a debt consolidation loan hurt my credit score?", a: "Short-term, your score may dip a few points after the new hard inquiry and a new account on your report. Mid-term, consolidating usually lowers your credit utilisation, which can raise your score. Long-term, on-time payments build credit history." },
      { q: "Should I close my credit cards after consolidating?", a: "Usually no. Closing cards reduces your total available credit and increases your utilisation ratio, which can lower your score. Most experts recommend keeping the cards open but unused, or used lightly and paid in full each month." },
      { q: "Is consolidating credit-card debt with a personal loan actually cheaper?", a: "Only if the personal loan's APR is meaningfully lower than your weighted credit-card APR. With current average credit-card APRs above 20%, borrowers with good credit who qualify for single-digit personal-loan rates can save thousands. Run the numbers in the debt-payoff calculator before signing." },
      { q: "How long does it take?", a: "After you accept an offer and e-sign, the lender typically deposits funds via ACH to your checking account the next business day. You then use those funds to pay off the consolidated balances directly." },
    ],
  },
  "medical": {
    slug: "medical",
    h1: "Medical loans",
    title: "Medical Loans 2026: Personal Loans for Healthcare Bills, Soft Check",
    description:
      "Personal loans for medical bills, dental work, fertility treatment, and elective procedures. Compare fixed-rate offers up to $50,000.",
    eyebrow: "Use case",
    intro:
      "A medical loan is a personal installment loan used to pay healthcare bills the patient owes after insurance, or to fund elective procedures insurance won't cover. Unlike provider-financed plans, a personal loan pays the bill in full upfront and gives you a single fixed monthly payment.",
    amountMin: 500,
    amountMax: 50000,
    termMin: 6,
    termMax: 60,
    aprMin: 7.99,
    aprMax: 35.99,
    bullets: [
      "Cover hospital bills, surgery copays, dental work, IVF, and elective procedures",
      "Loan amounts from $500 to $50,000",
      "Fixed APRs typically 7.99% to 35.99%",
      "Predictable monthly payments instead of revolving medical credit",
      "Pay providers directly and avoid in-collection reporting",
    ],
    faqs: [
      { q: "Should I use a personal loan or medical credit card (CareCredit)?", a: "It depends on the math. Promotional-rate medical credit cards can charge 0% for a defined window, but apply deferred interest retroactively if not paid in full by the end of the promo. A fixed-rate personal loan offers payment certainty and no retroactive-interest trap." },
      { q: "Will the lender know what the loan is for?", a: "You may be asked the purpose at application, but funds are deposited to your checking account and you pay the provider directly. Personal loans are not restricted-use; the lender does not direct payment to a hospital or clinic." },
      { q: "Can I get a medical loan if I'm already in collections?", a: "Possibly. Some lenders in our network consider applicants with collections on their report, particularly medical collections, which credit-scoring models increasingly de-weight. Your APR will likely be at the upper end of the range." },
      { q: "Are medical loans tax-deductible?", a: "The interest on a personal loan used for medical expenses is not deductible. However, the medical expenses themselves may be deductible if you itemise and they exceed 7.5% of your AGI. Consult a tax professional." },
    ],
  },
  "home-improvement": {
    slug: "home-improvement",
    h1: "Home improvement loans",
    title: "Home Improvement Loans 2026: Unsecured, No Equity Required",
    description:
      "Unsecured personal loans for kitchen, bath, roofing, HVAC, and whole-home renovations. Up to $50,000 with no home equity required.",
    eyebrow: "Use case",
    intro:
      "An unsecured home improvement loan is a personal installment loan used for renovations or repairs without putting your home up as collateral. Compared with a HELOC or home equity loan, an unsecured loan typically funds faster, doesn't require an appraisal, and won't trigger a lien on your property if you can't repay.",
    amountMin: 1000,
    amountMax: 50000,
    termMin: 12,
    termMax: 72,
    aprMin: 6.49,
    aprMax: 29.99,
    bullets: [
      "No home equity, appraisal, or lien required",
      "Loan amounts from $1,000 to $50,000",
      "Fixed APRs typically 6.49% to 29.99%",
      "Funding as fast as the next business day",
      "Use for kitchen, bath, roof, HVAC, solar, or accessibility improvements",
    ],
    faqs: [
      { q: "Personal loan vs HELOC for home improvement: which is better?", a: "A HELOC usually has a lower APR but takes weeks to close, requires an appraisal, and uses your home as collateral. A personal loan is unsecured, funds in days, and carries no lien risk, but APR is higher. For projects under $25,000 or when speed matters, personal loans often win on convenience." },
      { q: "Is the interest tax-deductible?", a: "No. Interest on a personal loan used for home improvement is not tax-deductible. The mortgage-interest deduction only applies to debt secured by your home (such as a HELOC or second mortgage)." },
      { q: "Can I get a loan if I'm a first-time homeowner with no equity?", a: "Yes. Unsecured personal loans don't look at home equity. They underwrite to your credit, income, and debt-to-income ratio." },
      { q: "What's the maximum I can borrow?", a: "Personal loan caps in our network are typically $50,000. For larger renovations, a HELOC or cash-out refinance may be a better fit despite the longer closing timeline." },
    ],
  },
  "wedding": {
    slug: "wedding",
    h1: "Wedding loans",
    title: "Wedding Loans 2026: Personal Loans for Wedding Costs, Soft Check",
    description:
      "Personal loans up to $50,000 for venue, catering, dress, photographer, and honeymoon costs. Fixed APRs and predictable monthly payments.",
    eyebrow: "Use case",
    intro:
      "A wedding loan is a personal installment loan used to cover wedding-related costs: venue deposit, catering, photography, attire, rings, and the honeymoon. Unlike putting wedding expenses on a credit card, a personal loan offers a fixed APR, a defined payoff date, and a predictable monthly payment.",
    amountMin: 1000,
    amountMax: 50000,
    termMin: 12,
    termMax: 60,
    aprMin: 7.99,
    aprMax: 29.99,
    bullets: [
      "Cover venue, catering, dress, photographer, rings, honeymoon",
      "Loan amounts from $1,000 to $50,000",
      "Fixed APRs typically 7.99% to 29.99%",
      "Predictable fixed monthly payment instead of revolving card debt",
      "No collateral required",
    ],
    faqs: [
      { q: "Is taking a loan for a wedding a good idea?", a: "It depends on your financial picture. If you can pay it off within 24 months at a single-digit APR, the math is often reasonable. If repayment will stretch four or five years at a high APR, you're paying interest on the wedding long after the day itself. Run the numbers in the loan-payment calculator first." },
      { q: "How is a wedding loan different from a regular personal loan?", a: "It isn't. 'Wedding loan' is marketing language for a standard unsecured personal loan used for wedding expenses. The underwriting, APR ranges, and terms are identical to a personal loan used for any other purpose." },
      { q: "What credit score do I need?", a: "Most lenders approving wedding loans look for a FICO of 600+, though stronger credit (680+) qualifies for the lowest APRs. Income and debt-to-income matter as much as the score itself." },
      { q: "Can my partner and I apply together?", a: "Some lenders in our network accept joint applications. A co-applicant with strong credit can lower the rate offered. Joint applications mean both applicants are equally responsible for repayment." },
    ],
  },
  "moving": {
    slug: "moving",
    h1: "Moving loans",
    title: "Moving Loans 2026: Personal Loans for Relocation, Funds Next Day",
    description:
      "Personal loans for movers, deposits, and relocation costs. Fund the move now, repay in fixed monthly payments over 12 to 60 months.",
    eyebrow: "Use case",
    intro:
      "A moving loan is a personal installment loan used to cover relocation costs: movers, truck rental, security deposits, first-month rent, utility setup, and the gap between leaving one job and starting the next. Funds are deposited to your checking account, so you can spend them wherever the move sends them.",
    amountMin: 500,
    amountMax: 25000,
    termMin: 6,
    termMax: 60,
    aprMin: 9.99,
    aprMax: 35.99,
    bullets: [
      "Cover movers, deposits, first-month rent, and utility setup",
      "Loan amounts from $500 to $25,000",
      "Fixed APRs typically 9.99% to 35.99%",
      "Funds in your account as fast as the next business day",
      "Pay movers, landlords, and vendors directly from your checking account",
    ],
    faqs: [
      { q: "When does a moving loan make sense?", a: "When the upfront cost of relocating (deposits + movers + setup) exceeds what you have in savings, but the move itself is essential, a job, a family situation, or a meaningful cost-of-living change. The loan smooths the cash crunch in month one." },
      { q: "Should I use a credit card or a personal loan?", a: "If you can pay the balance off within a 0% intro APR window, a card may be cheaper. If repayment will stretch over a year or more, a personal loan with a fixed APR usually costs less and gives a defined payoff date." },
      { q: "Can I use the loan to cover deposits in a new city?", a: "Yes. Personal loans are not restricted-use. You can pay security deposits, broker fees, utility deposits, and any other moving cost directly from the funds deposited to your account." },
      { q: "Does my employer pay for moving expenses?", a: "Some employers offer relocation reimbursement, often on a delayed schedule (reimbursed weeks after the move). A short-term personal loan can bridge the gap between paying expenses upfront and receiving reimbursement." },
    ],
  },
  "vehicle-repair": {
    slug: "vehicle-repair",
    h1: "Car repair loans",
    title: "Car Repair Loans 2026: Personal Loans for Auto Repairs, Same-Day Decision",
    description:
      "Personal loans for transmission, engine, brake, or accident-related auto repairs. Fund the repair now, pay over 6 to 48 months.",
    eyebrow: "Use case",
    intro:
      "A car repair loan is a personal installment loan used to cover an unexpected auto-repair bill: transmission rebuild, engine work, accident damage uncovered by insurance, or a major brake job. Funds are deposited to your checking account so you can pay the mechanic and get back on the road.",
    amountMin: 300,
    amountMax: 15000,
    termMin: 3,
    termMax: 48,
    aprMin: 12.99,
    aprMax: 35.99,
    bullets: [
      "Cover transmission, engine, brakes, suspension, body work, or storm damage",
      "Loan amounts from $300 to $15,000",
      "Fixed APRs typically 12.99% to 35.99%",
      "Decision in minutes, funding as fast as the next business day",
      "Often cheaper than the mechanic's in-house financing offer",
    ],
    faqs: [
      { q: "Is a personal loan cheaper than financing through the repair shop?", a: "Often yes. Repair-shop financing routinely runs at 25% to 30% APR with deferred-interest traps. A personal loan from a direct lender, especially for borrowers with fair-or-better credit, frequently comes in lower. Compare the loan agreement APR side-by-side with the shop's offer before signing either." },
      { q: "Should I use a credit card instead?", a: "If you can pay it off within 30 days, a card is fine. If repayment will stretch beyond a billing cycle or two, the typical 20%+ credit-card APR makes a personal loan cheaper over the life of the debt." },
      { q: "Can I use the loan for a down payment on a replacement car?", a: "Yes, though if the repair is uneconomical and you're replacing the vehicle, an auto loan secured by the new car will usually carry a lower APR than an unsecured personal loan." },
      { q: "How fast can I get the money?", a: "After you accept and e-sign an offer, funds are typically deposited via ACH the next business day. Some lenders offer same-day funding for an additional fee." },
    ],
  },
  "vacation": {
    slug: "vacation",
    h1: "Vacation loans",
    title: "Vacation Loans 2026: Personal Loans for Travel, No Collateral",
    description:
      "Personal loans for honeymoons, family vacations, and bucket-list trips. Fixed APRs, defined payoff dates, no revolving card debt.",
    eyebrow: "Use case",
    intro:
      "A vacation loan is a personal installment loan used to cover travel costs: flights, hotels, cruises, tour packages, and the cash for the trip itself. Compared with putting the trip on a credit card and revolving the balance, a personal loan with a fixed APR and defined payoff date often costs less over time and avoids the surprise of double-digit minimum-payment interest.",
    amountMin: 500,
    amountMax: 25000,
    termMin: 6,
    termMax: 48,
    aprMin: 9.99,
    aprMax: 29.99,
    bullets: [
      "Cover flights, hotels, cruises, and on-trip spending",
      "Loan amounts from $500 to $25,000",
      "Fixed APRs typically 9.99% to 29.99%",
      "Predictable monthly payment instead of revolving card balance",
      "Defined payoff date so the trip doesn't follow you for years",
    ],
    faqs: [
      { q: "Is borrowing for a vacation a smart move?", a: "Honestly, only if the budget is small enough that you can repay it within 12 to 24 months at a reasonable APR. If repaying the trip will stretch four years at high interest, the math gets ugly. A loan-payment calculator can show you the total cost before you commit." },
      { q: "Should I use travel rewards cards instead?", a: "If you can pay the balance in full each month, a rewards card is hard to beat. If you'll carry a balance, a personal loan with a single-digit APR is usually cheaper than a card's 20%+ APR." },
      { q: "Can I get a vacation loan with bad credit?", a: "Lenders in our network consider FICO scores below 600 for personal loans, including for travel. APRs at the lower end of credit will be at the upper end of the range, so consider whether the trip cost still works at that rate." },
      { q: "How long does it take to get the money?", a: "Funds are typically in your checking account the next business day after you accept and e-sign. You then use the funds to book flights, hotels, and any other travel costs directly." },
    ],
  },
  "dental": {
    slug: "dental",
    h1: "Dental loans",
    title: "Dental Loans 2026: Personal Loans for Dental Work & Implants",
    description:
      "Personal loans for implants, braces, Invisalign, crowns, root canals, and cosmetic dental work. Fixed APRs up to $50,000.",
    eyebrow: "Use case",
    intro:
      "A dental loan is a personal installment loan used to cover the patient portion of a dental bill, implants, crowns, root canals, braces, Invisalign, or cosmetic dentistry. Funds go to your checking account so you can pay the dentist directly and avoid in-office financing programs that often carry deferred-interest terms.",
    amountMin: 500,
    amountMax: 50000,
    termMin: 6,
    termMax: 60,
    aprMin: 7.99,
    aprMax: 35.99,
    bullets: [
      "Cover implants, crowns, Invisalign, braces, root canals, cosmetic work",
      "Loan amounts from $500 to $50,000",
      "Fixed APRs typically 7.99% to 35.99%",
      "Avoid deferred-interest dental credit cards",
      "Pay the practice directly and lock in any cash-pay discount",
    ],
    faqs: [
      { q: "Personal loan vs CareCredit for dental work: which costs less?", a: "CareCredit's 0% promotional offers can be cheaper than a personal loan if (and only if) you pay the balance in full by the end of the promo window. Miss that, and CareCredit charges deferred interest from day one, often at 25%+. A fixed-APR personal loan has no deferred-interest trap." },
      { q: "Does my dentist need to be in a network?", a: "No. Personal loan funds go to your checking account. You can pay any licensed dentist or orthodontist directly, including practices that don't participate in CareCredit or LendingClub Patient Solutions." },
      { q: "Can I get a discount for paying cash?", a: "Many dental practices offer 5% to 10% off the patient portion for cash-pay or single-payment patients. A personal loan funds you upfront, so you can negotiate the cash-pay rate and use the loan to cover it." },
      { q: "Is dental work tax-deductible?", a: "Medically necessary dental expenses may be deductible if you itemise and total medical costs exceed 7.5% of your AGI. Purely cosmetic dental work is not deductible. Consult a tax professional." },
    ],
  },
  "funeral": {
    slug: "funeral",
    h1: "Funeral loans",
    title: "Funeral Loans 2026: Personal Loans for End-of-Life Expenses, Fast Funding",
    description:
      "Personal loans for funeral, burial, and cremation costs. Compassionate same-day approval, no collateral, repay over 12 to 60 months.",
    eyebrow: "Use case",
    intro:
      "A funeral loan is a personal installment loan used to cover end-of-life expenses for a family member: funeral service, burial or cremation, casket or urn, cemetery costs, and the immediate cash-flow needs of arranging the service. Funds are deposited to your checking account so you can pay the funeral home and any related vendors directly.",
    amountMin: 500,
    amountMax: 25000,
    termMin: 12,
    termMax: 60,
    aprMin: 9.99,
    aprMax: 29.99,
    bullets: [
      "Cover funeral home, burial, cremation, casket, cemetery, and reception costs",
      "Loan amounts from $500 to $25,000",
      "Fixed APRs typically 9.99% to 29.99%",
      "Decision in minutes, funding as fast as the next business day",
      "Fixed monthly payment over 12 to 60 months",
    ],
    faqs: [
      { q: "What does an average funeral actually cost?", a: "The National Funeral Directors Association puts the median U.S. funeral with viewing and burial at roughly $8,300, and cremation with viewing at around $6,300, before cemetery and headstone costs. Costs vary widely by region and provider." },
      { q: "Will life insurance cover this?", a: "Some life insurance policies pay out within days; others take weeks. A short-term personal loan can bridge the gap so the funeral home is paid on time, and the insurance payout can later be applied to the loan balance." },
      { q: "Can I use the loan to pay multiple vendors?", a: "Yes. Funds go to your checking account and you pay the funeral home, cemetery, florist, caterer, or any other vendor directly." },
      { q: "Are there faster options if the funeral is in a few days?", a: "Yes. Online lenders in our network typically respond with offers within minutes and fund the next business day. If you need money the same day, ask the funeral home about same-day funding or a short payment-plan window while the loan funds." },
    ],
  },
  "appliance": {
    slug: "appliance",
    h1: "Appliance loans",
    title: "Appliance Loans 2026: Personal Loans for Refrigerators, Washers & HVAC",
    description:
      "Personal loans for refrigerators, washers, dryers, HVAC, and major appliance replacements. Fixed APRs from $500 to $15,000.",
    eyebrow: "Use case",
    intro:
      "An appliance loan is a personal installment loan used to replace a failed major appliance, refrigerator, washer, dryer, HVAC unit, water heater, or range. Funds go to your checking account, so you can shop for the best price wherever you want, instead of being locked into the retailer's in-house financing offer.",
    amountMin: 300,
    amountMax: 15000,
    termMin: 6,
    termMax: 60,
    aprMin: 9.99,
    aprMax: 32.99,
    bullets: [
      "Cover refrigerator, washer, dryer, HVAC, water heater, range, dishwasher",
      "Loan amounts from $300 to $15,000",
      "Fixed APRs typically 9.99% to 32.99%",
      "Shop any retailer instead of being locked into store financing",
      "Funding as fast as the next business day",
    ],
    faqs: [
      { q: "Is a personal loan cheaper than store financing?", a: "Often yes. Store financing offers (\"no interest for 24 months\") frequently use deferred-interest billing, if you don't pay in full by the end of the promo, all the interest from day one is added back. A fixed-APR personal loan has no deferred-interest risk." },
      { q: "How fast can I get the money?", a: "Once you accept and e-sign, funds are deposited the next business day via ACH. For a same-day appliance emergency, a credit card may be quicker for the purchase itself." },
      { q: "Can I bundle multiple appliances into one loan?", a: "Yes. Personal loans are not restricted-use. A single loan can fund a refrigerator + washer + dryer purchase, or any combination, deposited to your checking account in one transfer." },
      { q: "What about energy-efficient appliances, any rebates?", a: "Many states and utilities offer rebates for ENERGY STAR appliances. Combining a manufacturer rebate + utility rebate + personal loan can sharply reduce out-of-pocket cost. Check your utility's website before you buy." },
    ],
  },
};

export const useCaseSlugs = Object.keys(useCases);

export function getUseCase(slug: string): UseCase | undefined {
  return useCases[slug];
}
