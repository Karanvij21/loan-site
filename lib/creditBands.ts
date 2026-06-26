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
  "640-credit-score": {
    slug: "640-credit-score",
    h1: "Personal loans with a 640 credit score",
    title: "Personal Loans With a 640 Credit Score 2026: APRs, Amounts & Best Lenders",
    description:
      "What a 640 FICO score qualifies for: APR ranges, lender options, and how 30 more points to 670 changes your offers significantly.",
    eyebrow: "By score",
    intro:
      "A 640 FICO sits in the upper-middle of the 'fair' credit tier. You're 30 points away from the 'good' credit threshold (670), which opens up significantly more lenders and noticeably lower APRs. At 640, you have meaningful approval options with online installment lenders and some credit unions, with APRs typically in the 18-32% range.",
    amountMin: 1000,
    amountMax: 20000,
    termMin: 12,
    termMax: 60,
    aprMin: 18.99,
    aprMax: 32.99,
    bullets: [
      "640 qualifies with most online personal-loan lenders",
      "Loan amounts from $1,000 to $20,000",
      "APRs typically 18.99% to 32.99%",
      "30 more points (to 670) can drop the APR by 5-8 percentage points",
      "Soft credit check, no impact to compare offers",
    ],
    faqs: [
      { q: "Is 640 a good credit score for a personal loan?", a: "It's workable. Most online marketplace lenders and credit unions will consider a 640 FICO for personal loans up to $20,000. Bank personal loans typically start at 660-670. You'll qualify but at higher APRs than borrowers above 670. Shopping across multiple lenders via soft-pull pre-qualification is especially important at this score." },
      { q: "How can I get from 640 to 670 quickly?", a: "The fastest path is reducing credit-card utilization (pay balances below 30% of credit limit before the statement closes), disputing any inaccurate negative items, and avoiding new hard inquiries for 60-90 days. Some borrowers gain 30+ points in a single billing cycle by paying revolving balances down sharply." },
      { q: "What loan amount can I realistically get at 640?", a: "Most approvals at 640 fall in the $2,000-$15,000 range. Lenders weight your income and DTI heavily at this score tier. A 640 borrower with $75,000 annual income and low existing debt may qualify for the $15,000-$20,000 range; the same score with high DTI may cap at $5,000." },
      { q: "Does applying hurt my score further?", a: "Pre-qualification uses a soft inquiry and does not affect your score. Only accepting a final offer triggers a hard inquiry (typically a 3-8 point drop that recovers in 3-12 months). Use soft-pull pre-qualification at a marketplace before committing to any formal application." },
    ],
  },
  "660-credit-score": {
    slug: "660-credit-score",
    h1: "Personal loans with a 660 credit score",
    title: "Personal Loans With a 660 Credit Score 2026: One Step Below Good Credit",
    description:
      "What a 660 FICO qualifies for: APR ranges, which lenders accept you, and why 10 more points matters so much. Options at this score threshold.",
    eyebrow: "By score",
    intro:
      "A 660 FICO is exactly 10 points below the traditional 'good' credit threshold of 670. That gap matters: most bank personal loans start at 660-670, so you're right on the edge. Online installment lenders and credit unions compete actively at this score. APRs fall in the 15-28% range, with stronger income significantly improving outcomes.",
    amountMin: 1000,
    amountMax: 30000,
    termMin: 12,
    termMax: 60,
    aprMin: 15.99,
    aprMax: 28.99,
    bullets: [
      "660 is accepted by most online marketplace lenders and many banks",
      "Loan amounts from $1,000 to $30,000",
      "APRs typically 15.99% to 28.99%",
      "Pre-qualification available via soft pull at multiple lenders",
      "Reaching 670 opens prime-tier bank lending and better APRs",
    ],
    faqs: [
      { q: "Will I qualify for a personal loan with a 660 credit score?", a: "Very likely, especially through online marketplace lenders. Most online lenders that service the fair-to-good credit range qualify borrowers at 660. A handful of bank lenders also start at 660, though most bank minimums are 670. Your income, DTI, and employment history also factor heavily." },
      { q: "How much better are the APRs at 670 vs 660?", a: "Typically 3-7 percentage points lower for the same borrower profile. On a $15,000 loan at 48 months, that difference can represent $1,500-$2,500 in total interest savings. If you can wait 60-90 days and raise your score to 670, the savings usually justify the delay." },
      { q: "What's the fastest way to raise my score from 660 to 670?", a: "Reduce credit-card utilization below 30% of credit limit (ideally 10%) before the statement closes, dispute any inaccuracies on your report, and avoid any new credit applications for 60-90 days. One billing cycle of utilization reduction can produce 10-30 points for some borrowers." },
      { q: "Are credit unions better than online lenders at 660?", a: "Often yes for members. Credit unions can offer lower APRs and more flexible underwriting for members with established relationships. If you're already a credit union member (especially a larger one like Navy Federal, PenFed, or BECU), request a pre-qualification there alongside marketplace options." },
    ],
  },
  "700-credit-score": {
    slug: "700-credit-score",
    h1: "Personal loans with a 700 credit score",
    title: "Personal Loans With a 700 Credit Score 2026: APRs, Amounts & Top Options",
    description:
      "A 700 FICO sits comfortably in the 'good' credit tier. APR ranges, loan amounts, and how to use your score to get the best offer from competing lenders.",
    eyebrow: "By score",
    intro:
      "A 700 FICO places you solidly in the 'good' credit tier (670-739). At this score, the broad personal-loan market is open to you, including most online lenders and many banks. Competition among lenders for your application is real, which means shopping matters. APRs typically run 10-22% for 700-score borrowers, with the lower end available to those with strong income and low DTI.",
    amountMin: 1000,
    amountMax: 50000,
    termMin: 12,
    termMax: 72,
    aprMin: 9.99,
    aprMax: 22.99,
    bullets: [
      "700 FICO opens most major online lenders and many banks",
      "Loan amounts from $1,000 to $50,000",
      "APRs typically 9.99% to 22.99%",
      "Multiple competing lenders means shopping APRs pays off",
      "Soft credit check pre-qualification at multiple lenders, no score impact",
    ],
    faqs: [
      { q: "Is 700 a good credit score for a personal loan?", a: "Yes, 700 is a solid score that qualifies you with the majority of personal-loan lenders at competitive rates. You're in the 'good' tier, which is better than about 40% of U.S. borrowers. The step up to 740+ (prime tier) does reduce APRs by another 2-5 points, but 700 gives you substantial access." },
      { q: "What APR should I expect with a 700 credit score?", a: "Most realistic offers for a 700 FICO borrower with average income and DTI fall in the 12-18% range. Borrowers with high income relative to their debt load may see 10-13%. The upper range (20-23%) is more typical for borrowers with high DTI or short credit history. Compare 3-5 offers via soft-pull pre-qualification to find the actual range for your specific profile." },
      { q: "How much can I borrow with a 700 credit score?", a: "At 700, most lenders will offer up to $50,000 if your income supports the payment. DTI is the binding constraint: your total monthly debt payments (including the new loan payment) should stay below 40-45% of gross monthly income. A $50,000 loan at 15% over 60 months is $1,189/month, requiring roughly $2,975+ in gross monthly income dedicated to debt repayment." },
      { q: "Should I apply now at 700 or wait and try to reach 740?", a: "It depends on the urgency of the need and the loan size. On a $5,000 loan, the interest difference between 700 and 740 is relatively small. On a $30,000 loan over 60 months, 5 percentage points of APR means about $4,000 in total interest. If you can realistically reach 740 in 3-6 months (by reducing utilization and avoiding new inquiries), waiting on large loan amounts often pays." },
    ],
  },
  "720-credit-score": {
    slug: "720-credit-score",
    h1: "Personal loans with a 720 credit score",
    title: "Personal Loans With a 720 Credit Score 2026: Prime Rates, Up to $50,000",
    description:
      "A 720 FICO puts you in the prime credit tier. Which lenders offer the best APRs at 720 and how to use competing offers to push the rate lower.",
    eyebrow: "By score",
    intro:
      "A 720 FICO sits comfortably in the 'good' credit band (670-739) and is only 20 points below the 'very good' threshold of 740, where many lenders unlock their best-rate tiers. At 720, virtually every personal-loan lender accepts your application, and you're positioned to receive pre-qualified offers in the single-digit to low-teens APR range if your income and DTI support it.",
    amountMin: 2000,
    amountMax: 50000,
    termMin: 12,
    termMax: 84,
    aprMin: 8.99,
    aprMax: 19.99,
    bullets: [
      "720 qualifies at every major online lender and most banks",
      "Loan amounts from $2,000 to $50,000",
      "APRs typically 8.99% to 19.99%",
      "Multiple lenders competing for your application keeps rates lower",
      "Pre-qualify via soft check, no score impact",
    ],
    faqs: [
      { q: "Is 720 a good score for a personal loan?", a: "720 is a strong score. It's in the prime credit tier and qualifies you with the full personal-loan market including banks, credit unions, and online lenders. You'll receive some of the better rate offers in the market, though the very best rates (sub-8% APR) typically require 760+. At 720 with strong income, single-digit APRs are achievable at some lenders." },
      { q: "What APR will I actually get with a 720 credit score?", a: "The realistic range is 9-16% for a well-qualified borrower at 720. If your DTI is below 30% and you have stable income, offers toward the lower end are realistic. If you have high existing debt or a shorter credit history, expect the higher end. Use soft-pull pre-qualification at 3-5 lenders to see your actual offers without impacting your score." },
      { q: "How do I get from 720 to 740 to unlock better rates?", a: "The primary lever is credit-card utilization. Dropping balances so your total utilization is below 15-20% can add 15-25 points for some borrowers. Keeping all accounts current and avoiding new credit applications for 60-90 days also helps. A single billing cycle with dramatically lower utilization can move the needle to 740." },
      { q: "Should I shop multiple lenders at 720?", a: "Absolutely. At 720, multiple lenders want your business. The spread between the best and worst offer for the same borrower profile at this score tier can be 5-6 percentage points of APR. Pre-qualifying (soft pull) at 3-5 lenders takes about 15 minutes and can save thousands in interest over the loan's life." },
    ],
  },
  "740-credit-score": {
    slug: "740-credit-score",
    h1: "Personal loans with a 740 credit score",
    title: "Personal Loans With a 740 Credit Score 2026: Best APRs & Maximum Amounts",
    description:
      "740 FICO unlocks the best personal-loan rate tiers most lenders offer. Compare the top APRs, amounts, and terms available at this credit score.",
    eyebrow: "By score",
    intro:
      "A 740 FICO crosses into the 'very good' credit tier (740-799), where many lenders' best-rate pricing begins. At 740, you're likely to see offers approaching single-digit APRs from credit unions and highly competitive rates from online lenders. This score tier typically unlocks the maximum loan amounts and longest available terms.",
    amountMin: 2000,
    amountMax: 50000,
    termMin: 12,
    termMax: 84,
    aprMin: 6.99,
    aprMax: 17.99,
    bullets: [
      "740 unlocks best-rate tiers at most personal-loan lenders",
      "Loan amounts from $2,000 to $50,000",
      "APRs typically 6.99% to 17.99%",
      "Credit unions often offer lowest APRs at this tier",
      "Soft credit check to compare, no score impact",
    ],
    faqs: [
      { q: "What APR can I expect with a 740 credit score?", a: "Offers range from roughly 7% to 16% at 740 depending on lender, income, and DTI. Credit unions that offer below-10% rates often start at 720-740. Online marketplace lenders tend to cluster in the 10-14% range for 740 borrowers with good income. If your DTI is below 25%, you have a strong case for the lower end of any lender's range." },
      { q: "How much can I borrow at 740?", a: "Most lenders extend their full loan range (up to $50,000) at 740. Income is the binding constraint: monthly payment on the new loan plus existing debt should be below 40-45% of gross monthly income. A $50,000 loan at 10% over 72 months is $924/month, requiring roughly $2,300+ gross monthly income dedicated to debt." },
      { q: "Is 740 significantly better than 720 for loan rates?", a: "Yes, meaningfully so. 740 is a threshold many lenders use to unlock their best-rate tier. For the same loan amount and term, a 740 borrower might see offers 2-4 percentage points lower than a 720 borrower at the same lender. On a $25,000 loan over 60 months, 3 percentage points of APR translates to roughly $2,000 in total interest savings." },
      { q: "Does 760 get even better rates than 740?", a: "Marginally at some lenders. Some lenders have a 760+ pricing tier that's slightly better, but the bigger jump is from 700 to 740. Above 740, the difference between adjacent scores is smaller. If you're at 740, the ROI of time spent raising your score vs. borrowing now is typically lower than it was getting from 700 to 740." },
    ],
  },
};

export const creditBandSlugs = Object.keys(creditBands);

export function getCreditBand(slug: string): UseCase | undefined {
  return creditBands[slug];
}
