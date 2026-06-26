/**
 * Credit-band programmatic pages, extend `/loans/[slug]` with audience
 * segments targeting "X credit personal loan" / "Y credit score loan"
 * queries.
 *
 * Same shape as `useCases.ts` so the existing route renders them.
 */

import type { UseCase } from "@/lib/useCases";

export const creditBands: Record<string, UseCase> = {
  "excellent-credit": {
    slug: "excellent-credit",
    h1: "Excellent credit personal loans",
    title: "Personal Loans for Excellent Credit 2026 (740+ FICO): Best APRs",
    description:
      "Personal loans for borrowers with excellent credit (FICO 740+). Single-digit APRs, $50,000 amounts, and the lowest origination fees in the market.",
    eyebrow: "Credit profile",
    intro:
      "An excellent-credit personal loan is a standard unsecured installment loan available to borrowers with a FICO score of 740 or higher. At this credit tier, lenders compete on APR, so you generally see single-digit rates, no or low origination fees, and the highest loan amounts in the network.",
    amountMin: 1000,
    amountMax: 50000,
    termMin: 12,
    termMax: 84,
    aprMin: 5.99,
    aprMax: 11.99,
    bullets: [
      "FICO 740+ qualifies for the lowest APRs in the market",
      "Loan amounts up to $50,000",
      "APRs typically 5.99% to 11.99%",
      "Many lenders waive origination fees at this tier",
      "Pre-qualification via soft credit check, no impact to your score",
    ],
    faqs: [
      { q: "What FICO score counts as excellent credit?", a: "FICO defines 740-799 as 'very good' and 800+ as 'exceptional'. Most personal-loan lenders treat 740+ as the top tier for pricing, with marginal improvements above 760." },
      { q: "How low can my APR go with excellent credit?", a: "The strongest applicants, 760+ FICO, stable high income, low debt-to-income, and autopay enrolment, can see APRs in the 5.99% to 7.99% range from prime online lenders. The rest of the 740+ tier typically sees 7% to 10%." },
      { q: "Should I shop around if I have excellent credit?", a: "Yes. Even at the prime tier, APRs vary by 2-3 points between lenders for the same borrower. Marketplace pre-qualification (soft pull only) lets you compare 3-5 offers without affecting your score." },
      { q: "Do excellent-credit borrowers ever pay origination fees?", a: "Less often. SoFi and LightStream advertise no-fee loans, and many lenders waive the fee for 740+ borrowers. Some still charge 1-3% at the lower end of the prime range. Compare effective APRs (rate + fee rolled in), not just stated rates." },
    ],
  },
  "good-credit": {
    slug: "good-credit",
    h1: "Good credit personal loans",
    title: "Personal Loans for Good Credit 2026 (670-739 FICO): APRs & Terms",
    description:
      "Personal loans for borrowers with good credit (FICO 670-739). Competitive APRs, $50,000 loan amounts, terms up to 72 months, fast funding.",
    eyebrow: "Credit profile",
    intro:
      "A good-credit personal loan is the most common personal-loan profile in the U.S. market. With a FICO score of 670-739, you qualify for the bulk of online lenders' standard pricing tier, competitive APRs, full $50,000 loan amounts, and terms up to 72 months.",
    amountMin: 1000,
    amountMax: 50000,
    termMin: 12,
    termMax: 72,
    aprMin: 8.99,
    aprMax: 19.99,
    bullets: [
      "FICO 670-739 unlocks competitive personal-loan pricing",
      "Loan amounts from $1,000 to $50,000",
      "APRs typically 8.99% to 19.99%",
      "Repayment terms of 12 to 72 months",
      "Pre-qualification via soft credit check, no impact to your score",
    ],
    faqs: [
      { q: "Is a 700 FICO score enough for a good personal-loan rate?", a: "Yes. 700 sits in the middle of the 'good' tier and qualifies you with most prime online lenders. Expect APRs in the low-double-digits, with stronger income and lower debt-to-income unlocking the lower end." },
      { q: "How much can I borrow with good credit?", a: "Most lenders cap personal loans at $50,000 regardless of credit tier. With good credit, you can usually access the full amount if your income supports the resulting monthly payment without pushing your debt-to-income past ~40%." },
      { q: "Will applying hurt my good credit?", a: "Pre-qualification through a marketplace is a soft credit inquiry only and doesn't affect your score. If you accept a final offer, the lender's hard inquiry costs a few points temporarily. On-time payments rebuild that within a few months." },
      { q: "Should I take a longer term to lower the payment?", a: "Only if you need to. Longer terms (60-72 months) lower the monthly payment but increase total interest paid. At good-credit APRs, the trade-off works out, but on a $25,000 loan, extending from 48 to 72 months can add $2,000+ in interest." },
    ],
  },
  "fair-credit": {
    slug: "fair-credit",
    h1: "Fair credit personal loans",
    title: "Personal Loans for Fair Credit 2026 (580-669 FICO): Options & APRs",
    description:
      "Personal loans for borrowers with fair credit (FICO 580-669). APR ranges, lender requirements, and how to qualify for the best terms in your tier.",
    eyebrow: "Credit profile",
    intro:
      "A fair-credit personal loan serves borrowers with a FICO score of 580-669, a wide tier that captures roughly 17% of U.S. consumers. Lenders that compete here weigh income, employment, and bank-account history alongside the credit score, so offers can vary widely.",
    amountMin: 500,
    amountMax: 30000,
    termMin: 12,
    termMax: 60,
    aprMin: 15.99,
    aprMax: 32.99,
    bullets: [
      "FICO 580-669 considered, with offers tied to income and employment",
      "Loan amounts from $500 to $30,000",
      "APRs typically 15.99% to 32.99%",
      "Terms from 12 to 60 months",
      "Pre-qualification via soft credit check, no impact to your score",
    ],
    faqs: [
      { q: "What's the difference between fair and good credit?", a: "FICO defines 'fair' as 580-669 and 'good' as 670-739. The gap matters: APR offers at 670 are often 5-10 points lower than at 660. If you're close to the line, raising your score before applying can save thousands over the life of the loan." },
      { q: "How can I improve my score before applying?", a: "Paying revolving balances down below 30% of credit limit (ideally below 10%) tends to move scores fastest. Disputing any inaccurate negative items via AnnualCreditReport.com is the next biggest lever. Both can produce 20-40 point increases within one or two billing cycles." },
      { q: "Will any lender approve me with fair credit?", a: "Approval is never guaranteed. Lenders in our network include some that specialise in fair-credit borrowers, typically online installment lenders, not banks. Strong income and a long checking-account history significantly raise approval odds." },
      { q: "Is a 35.99% APR worth it?", a: "It depends on the alternative. If you're consolidating credit-card debt at 25%+ APR, a 32% personal loan can still save money if the term is short enough. If you're funding a discretionary purchase, the math rarely works at the top of the range." },
    ],
  },
  "580-credit-score": {
    slug: "580-credit-score",
    h1: "Personal loans with a 580 credit score",
    title: "Personal Loans With a 580 Credit Score 2026: Approval Odds & APRs",
    description:
      "What a 580 FICO score qualifies for: loan amounts, APR ranges, lender expectations, and how to boost approval odds.",
    eyebrow: "By score",
    intro:
      "A 580 FICO sits at the bottom edge of the 'fair' credit tier. It's a meaningful improvement over subprime (below 580) and unlocks options that aren't available below that threshold. Approval is realistic with a stable income and an active checking account, but APRs run at the upper end of the personal-loan range.",
    amountMin: 500,
    amountMax: 15000,
    termMin: 12,
    termMax: 60,
    aprMin: 19.99,
    aprMax: 35.99,
    bullets: [
      "580 is the lowest score most prime online lenders consider",
      "Loan amounts from $500 to $15,000",
      "APRs typically 19.99% to 35.99%",
      "Terms from 12 to 60 months",
      "Stable income and bank history meaningfully raise approval odds",
    ],
    faqs: [
      { q: "Can I really get a personal loan with a 580 credit score?", a: "Yes, though not from every lender. Bank personal-loan minimums typically sit at 660+, so a 580 borrower will see offers from online installment lenders and select credit unions. Pre-qualification via soft pull is the cheapest way to see who'll work with you." },
      { q: "What APR should I expect at 580?", a: "Most realistic offers at 580 sit in the 25% to 35.99% range, with the loan amount and term affecting where you land within that range. The top end of the legal personal-loan APR cap is 35.99% in most states." },
      { q: "How much can I borrow at 580?", a: "Typically $500 to $15,000, with most approved loans falling in the $1,000 to $7,500 range. Lenders weight income and DTI heavily at this credit tier, a borrower with $80k income at 580 will usually qualify for more than a borrower with $40k at the same score." },
      { q: "Can I get a better rate by adding a co-signer?", a: "Often yes. A co-signer with a 720+ FICO can shift the offer to that co-signer's pricing tier, sometimes cutting the APR in half. The co-signer takes on full repayment responsibility, so this only works with someone who fully understands the commitment." },
    ],
  },
  "620-credit-score": {
    slug: "620-credit-score",
    h1: "Personal loans with a 620 credit score",
    title: "Personal Loans With a 620 Credit Score 2026: APRs, Amounts, Lenders",
    description:
      "What a 620 FICO score qualifies for: APR ranges, lender expectations, and how the offers compare to 580 and 660 tiers.",
    eyebrow: "By score",
    intro:
      "A 620 FICO sits in the middle of the 'fair' credit tier. It's a meaningful step up from 580: many more lenders compete for your application, APRs drop noticeably, and loan amounts open up. Approval is straightforward with stable income.",
    amountMin: 1000,
    amountMax: 25000,
    termMin: 12,
    termMax: 60,
    aprMin: 16.99,
    aprMax: 32.99,
    bullets: [
      "620 is widely accepted by online personal-loan lenders",
      "Loan amounts from $1,000 to $25,000",
      "APRs typically 16.99% to 32.99%",
      "Terms from 12 to 60 months",
      "Stronger income or low DTI can unlock the lower end of the range",
    ],
    faqs: [
      { q: "How is a 620 credit score different from a 580?", a: "Roughly 5-8 percentage points of APR difference for the same borrower profile. Many more lenders also compete at 620 vs 580. If you're sitting at 600 and can wait 60-90 days to reach 620 by paying down revolving balances, the savings on a multi-year loan often justify the wait." },
      { q: "What APR should I expect at 620?", a: "Most realistic offers at 620 sit in the 20% to 30% range, with the term and loan amount affecting where you fall. The strongest 620 applicants (stable income, low DTI, long banking history) can occasionally see the high teens." },
      { q: "How fast can I go from 620 to 660?", a: "Three to nine months is typical with focused effort. Biggest levers: paying down credit-card utilisation, disputing inaccurate negative items, and avoiding any new credit applications during the run-up." },
      { q: "Is it worth waiting to apply?", a: "Often yes. A 40-point score increase before applying can shift the APR by 5+ points, which on a $15,000 / 48-month loan saves around $1,800 in interest. If the borrowing need isn't urgent, waiting pays." },
    ],
  },
};

export const creditBandSlugs = Object.keys(creditBands);

export function getCreditBand(slug: string): UseCase | undefined {
  return creditBands[slug];
}
