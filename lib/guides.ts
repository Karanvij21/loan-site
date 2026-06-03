/**
 * Long-form learning hub content (Tier 3 SEO content hub).
 *
 * Each guide is structured as: intro, sections (h2 + body), FAQ, related links.
 * Designed for Article + FAQPage + Speakable schema, with internal links to
 * glossary, calculators, state, and product pages.
 *
 * Body prose is plain text rendered as paragraphs split on blank lines.
 * Bullets render as a UL beneath the body when present.
 *
 * Guides are categorised by cluster so the /learn index can group them.
 */

export type GuideCluster =
  | "Debt management"
  | "Credit improvement"
  | "Loan shopping"
  | "Life events";

export type GuideSection = {
  h2: string;
  body: string;
  bullets?: string[];
};

export type Guide = {
  slug: string;
  cluster: GuideCluster;
  h1: string;
  /** Page metadata title. Can differ from h1. */
  title: string;
  /** Meta description and snippet bait. */
  description: string;
  /** ≤ 60-word TL;DR shown above the article body and used as Speakable. */
  intro: string;
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  /** ISO date (YYYY-MM-DD). */
  reviewedAt: string;
  /** Estimated reading minutes, shown above the byline. */
  estimatedReadMinutes: number;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  /** Other guide slugs to surface as related reading at the foot. */
  relatedSlugs?: string[];
  /** Internal links surfaced as "Related tools" cards at the foot. */
  toolLinks?: { label: string; href: string; blurb?: string }[];
};

const PUBLISHED = "2026-04-15";
const REVIEWED = "2026-05-22";

export const guides: Guide[] = [
  // ─── Debt management ────────────────────────────────────────────
  {
    slug: "consolidate-credit-card-debt-personal-loan",
    cluster: "Debt management",
    h1: "How to consolidate credit card debt with a personal loan",
    title: "How to Consolidate Credit Card Debt With a Personal Loan (2026)",
    description:
      "Step-by-step guide to using a personal loan to consolidate credit card debt: when it saves money, when it doesn't, and how to avoid the most common trap.",
    publishedAt: PUBLISHED,
    reviewedAt: REVIEWED,
    estimatedReadMinutes: 9,
    intro:
      "Consolidating credit card debt with a personal loan can cut total interest paid in half or more, but only if you avoid one specific trap: running the card balances back up. Here's how the math works, when it pays off, and the exact sequence to follow.",
    sections: [
      {
        h2: "What debt consolidation actually does",
        body:
          "Debt consolidation rolls multiple high-interest balances into one new loan with a single fixed monthly payment. For credit card debt, this usually means replacing several revolving card balances (each carrying variable APRs in the 20% to 29% range in the current market) with one fixed-rate personal loan, typically in the 6% to 35.99% range depending on your credit profile.\n\nThe mechanics are simple. The lender deposits the loan funds into your checking account. You use those funds to pay off the card balances. From that day forward you make one fixed monthly payment to the personal loan instead of separate minimums to each card.\n\nThe value comes from two effects. First, the new APR is usually lower than the weighted average APR of the original cards, so less of each payment goes to interest. Second, the fixed payment forces a defined payoff date, where revolving minimum payments stretch repayment over decades.",
      },
      {
        h2: "Run the numbers before you commit",
        body:
          "Consolidation only makes sense if the math works. The fastest way to check is to compare two scenarios side by side: keep paying the cards at your current payment, versus take a personal loan and pay it on its term.\n\nWorked example. You have $12,000 in card debt at a 24% weighted APR. You can afford $400 a month total toward debt service. Paying $400 toward the cards at 24% takes about 47 months and costs $6,700 in interest. Taking a 36-month personal loan at 14% APR for $12,000 also costs about $410 a month, but pays off in 36 months and costs $2,800 in interest. Net savings: about $3,900 and the debt is gone 11 months sooner.\n\nThe math flips against you if the consolidation APR is close to the card APR, if origination fees eat the spread, or if you stretch the term too long. Our debt-payoff calculator runs both scenarios in 30 seconds.",
        bullets: [
          "Compare effective APRs (rate plus origination fee), not stated rates",
          "Pick the shortest term you can afford, not the longest available",
          "Avoid lenders charging origination fees above 5% unless the rate is exceptionally low",
        ],
      },
      {
        h2: "The exact sequence to follow",
        body:
          "Step 1: pull your credit reports from AnnualCreditReport.com and dispute any inaccurate negative items. Errors are common and removing them can raise your score by 20 to 40 points within a billing cycle, which can drop your APR by several percentage points.\n\nStep 2: pre-qualify with three to five lenders through a marketplace using a soft credit inquiry. Soft pulls don't affect your score, so you can shop without penalty. Compare effective APRs (note rate plus origination fee), monthly payment, and total interest paid.\n\nStep 3: accept the offer with the lowest effective APR you'd be comfortable with at a term you can realistically afford. Sign electronically. Funds typically deposit the next business day.\n\nStep 4: use the funds to pay off each card balance in full. Most online lenders deposit cash to your checking account rather than paying creditors directly, so you maintain control of timing.\n\nStep 5: leave the cards open with zero balance. Closing them reduces your total available credit and increases your utilisation ratio on any remaining balances, which hurts your credit score. Open with zero balance is the goal.",
      },
      {
        h2: "The trap to avoid",
        body:
          "The single most common reason consolidation fails: the borrower consolidates the cards, feels relief at the lower monthly payment, then starts charging on the freshly cleared cards again. Six months later they have the personal loan payment AND new card balances. Their total debt is higher than where they started.\n\nIf you don't trust yourself to keep the cards at zero, take physical action. Cut them up. Freeze them in a block of ice in the freezer (sounds funny, works). Remove them from saved payment methods on Amazon, the App Store, and your browser. The lower the friction to spend on the cards, the more likely the trap closes.",
      },
      {
        h2: "What happens to your credit score",
        body:
          "Short term: a small dip. The hard credit inquiry from the new loan and the new account on your report typically cost 5 to 10 points. This is temporary; the impact fades within 6 to 12 months.\n\nMid term: usually a meaningful gain. Paying down revolving balances drops your credit utilisation ratio sharply, which is the second-largest factor in FICO scoring after payment history. Most consolidators see a 20 to 60 point increase within 60 to 90 days.\n\nLong term: depends on payment history. On-time payments on the personal loan build positive history. A single missed payment can erase several months of gains. Set up autopay.",
      },
    ],
    faqs: [
      {
        q: "Should I close my credit cards after consolidating?",
        a: "Usually no. Closing reduces your total available credit and raises utilisation, which lowers your score. The standard recommendation is to keep the cards open with zero balance. Use one card lightly each month (small recurring charge paid in full) to keep it from being closed for inactivity.",
      },
      {
        q: "Will consolidation hurt my credit score?",
        a: "Short term, yes by a few points from the hard inquiry. Mid term, usually no, and often it helps because revolving utilisation drops sharply. The biggest risk factor is missing a payment on the new loan, so set up autopay.",
      },
      {
        q: "What credit score do I need to qualify?",
        a: "Most personal-loan lenders accept FICO scores from 580 up, though the APR drops sharply as your score rises. The best consolidation math typically requires a score above 670 so the new APR is meaningfully below your card APRs.",
      },
      {
        q: "Can I consolidate even with bad credit?",
        a: "Yes, but the APR may not save enough to justify the move. If the personal loan APR is within 3 points of your card APR, consolidation isn't financially worth it. Focus first on raising your score by paying down card balances before applying.",
      },
      {
        q: "How long should the consolidation loan term be?",
        a: "The shortest term you can afford. Longer terms lower the monthly payment but increase total interest paid. For a $10,000 consolidation, dropping from 60 months to 36 months at the same APR typically saves $1,500 to $2,500 in interest.",
      },
    ],
    relatedSlugs: [
      "snowball-vs-avalanche-debt-payoff",
      "raise-credit-score-100-points",
      "compare-personal-loan-offers",
    ],
    toolLinks: [
      { label: "Debt payoff calculator", href: "/calculators/debt-payoff", blurb: "Card vs consolidation, side by side" },
      { label: "Loan payment calculator", href: "/calculators/loan-payment", blurb: "Model monthly payment and total interest" },
      { label: "Debt consolidation loans", href: "/loans/debt-consolidation", blurb: "Compare consolidation-specific offers" },
    ],
  },
  {
    slug: "snowball-vs-avalanche-debt-payoff",
    cluster: "Debt management",
    h1: "Snowball vs avalanche: which debt payoff method wins?",
    title: "Snowball vs Avalanche: Which Debt Payoff Method Saves More?",
    description:
      "The two most popular debt payoff strategies compared on math, behaviour, and real-world success rates. Includes a worked example showing exact dollar differences.",
    publishedAt: PUBLISHED,
    reviewedAt: REVIEWED,
    estimatedReadMinutes: 7,
    intro:
      "The avalanche method saves more interest mathematically. The snowball method has higher real-world success rates because of how human motivation actually works. Here's how to pick the right method for your situation, with the exact math from a real example.",
    sections: [
      {
        h2: "How each method works",
        body:
          "Both methods assume you make the minimum payment on every debt, then send all extra money to one debt at a time until it's paid off. They differ on which debt gets the extra money first.\n\nAvalanche method. Send all extra cash to the debt with the highest APR first. When that one's gone, roll the payment to the debt with the next-highest APR. Continue until everything's paid. This minimises total interest paid.\n\nSnowball method. Send all extra cash to the debt with the smallest balance first, regardless of APR. When it's paid off, roll the payment to the next smallest. This produces faster early wins, which fuels motivation to stick with the plan.",
      },
      {
        h2: "The math: a worked example",
        body:
          "Suppose you have three balances:\n\n- $1,200 on a store card at 28% APR\n- $4,500 on a Visa at 22% APR\n- $9,800 on a Mastercard at 19% APR\n\nMinimum payments total roughly $360. You have $600 a month total to put toward debt.\n\nAvalanche: extra $240 goes first to the 28% store card. Cleared in roughly 5 months. The freed-up minimum plus extra rolls to the Visa, then the Mastercard. Total interest paid over the life of the plan: about $3,400. Total time to debt-free: roughly 32 months.\n\nSnowball: extra $240 goes first to the smallest balance (the $1,200 store card, which happens to also be the highest APR here, so no difference at this step). When it's cleared, extra rolls to the Visa next because it's smaller than the Mastercard. Total interest paid: about $3,500. Time to debt-free: roughly 32 months.\n\nIn this example the methods nearly tie because the smallest balance happens to also be the highest APR. When they diverge sharply is when you have a small low-APR balance (a $400 medical bill at 0%) and a large high-APR balance (a $9,000 card at 24%). Avalanche correctly ignores the medical bill and attacks the card. Snowball wastes early effort on the medical bill.",
      },
      {
        h2: "Which one actually works in practice",
        body:
          "Academic research has produced mixed results. A 2016 Harvard Business Review study found that people using the snowball method were more likely to eliminate their entire debt than people using the avalanche method, even though the avalanche method is mathematically optimal. The hypothesis: small early wins build momentum and reinforce the behaviour that's getting debt paid off.\n\nThe snowball-vs-avalanche choice usually doesn't move the dollar number much (often within $200 over the full plan), but it does move the success rate. If you've started and stopped debt-payoff plans in the past, snowball's behavioural advantage may matter more than avalanche's small math advantage.",
      },
      {
        h2: "When to ignore both and consolidate instead",
        body:
          "Either method works only if your APRs are reasonable. If you're carrying $10,000+ in credit-card debt at 24%+ APR, the spread between your card APRs and a personal-loan APR is usually wide enough that consolidating into a single fixed-payment loan saves more than optimising the order of payoff.\n\nRule of thumb: if you'd qualify for a personal loan with an APR at least 5 percentage points below your weighted card APR, consolidation typically beats both snowball and avalanche.",
      },
    ],
    faqs: [
      { q: "Is the snowball method bad financial advice?", a: "Not for everyone. Mathematically the avalanche method saves marginally more interest. Behaviourally the snowball method has a higher follow-through rate. The 'right' method is the one you'll actually finish. If you've stuck with avalanche plans in the past, use avalanche. If you've started and stopped before, snowball's behavioural advantage matters." },
      { q: "What if I have a 0% promotional APR balance?", a: "Treat any 0% promo balance as 'highest priority' if the promo deadline is close (within 6 months), regardless of which method you're using. If the promo deadline is far out, both methods correctly de-prioritise it." },
      { q: "Should I pay only the minimum on lower-priority debts?", a: "Yes. Minimum payments on lower-priority debts keep your credit clean while all your extra cash attacks the priority debt. Once the priority debt is paid, you roll its minimum into the next priority. This is the 'snowball' or 'avalanche' effect itself." },
      { q: "How fast can I realistically pay off debt this way?", a: "Depends on the debt-to-income ratio. If your total debt is 1.5× your monthly income or less, 12 to 18 months is realistic with disciplined effort. If debt is 3-5× monthly income, the plan needs 24 to 48 months. If debt exceeds 5× monthly income, also evaluate consolidation, credit counselling, or bankruptcy with a non-profit credit counsellor." },
    ],
    relatedSlugs: [
      "consolidate-credit-card-debt-personal-loan",
      "raise-credit-score-100-points",
    ],
    toolLinks: [
      { label: "Debt payoff calculator", href: "/calculators/debt-payoff" },
      { label: "Loan affordability calculator", href: "/calculators/affordability" },
    ],
  },
  {
    slug: "what-to-do-debt-collections",
    cluster: "Debt management",
    h1: "What to do when your debt goes to collections",
    title: "Debt in Collections: Your Rights, Your Moves, Your Recovery",
    description:
      "If a creditor sent your debt to collections, here's exactly what to do: your FDCPA rights, how to negotiate, what to never say on a call, and how to repair your credit afterward.",
    publishedAt: PUBLISHED,
    reviewedAt: REVIEWED,
    estimatedReadMinutes: 10,
    intro:
      "A debt in collections feels worse than it is. You have specific rights under the federal Fair Debt Collection Practices Act, the collector usually paid pennies on the dollar for your account, and you have leverage if you know how to use it. Here's the playbook.",
    sections: [
      {
        h2: "What collections actually means",
        body:
          "When a borrower stops paying a debt, the original creditor (the credit card company, lender, or hospital) usually charges the debt off after 120 to 180 days of non-payment. Charge-off is an accounting move on the creditor's books, not a forgiveness of the debt. The debt still exists.\n\nWhat usually happens next: the creditor sells the debt to a third-party collection agency for a fraction of face value, often 4 to 14 cents on the dollar. The collection agency now owns the debt and tries to recover it from you. Anything they collect above their purchase price is their profit, which is why they're willing to negotiate.\n\nThis is your leverage. They'd rather get $400 on a $2,000 debt they paid $80 for than spend a year suing for the full $2,000.",
      },
      {
        h2: "Your rights under the FDCPA",
        body:
          "The federal Fair Debt Collection Practices Act (FDCPA) sets specific rules for what third-party debt collectors can and can't do.\n\nThey cannot call you before 8 AM or after 9 PM in your time zone. They cannot call you at work after you've told them not to. They cannot use profane language, threaten violence, or imply they can have you arrested. They cannot contact your family, employer, or neighbours about the debt (with very narrow exceptions to locate you).\n\nWithin 5 days of their first contact, they must send you a written notice with the debt amount, the original creditor, and a statement of your right to dispute. You have 30 days from that notice to send a written dispute. Once you dispute, they must pause collection until they verify the debt with the original creditor.\n\nThey cannot sue you on a debt past the statute of limitations (which varies by state, typically 3 to 6 years from your last payment). Making a partial payment can restart the clock in some states, so don't make small good-faith payments without a strategy.",
      },
      {
        h2: "The first call: what to say (and not say)",
        body:
          "When a collector calls, the single most important thing is to not acknowledge the debt or commit to anything verbally. Ask them to send you everything in writing.\n\nScript: 'I want to handle this responsibly. Please send me a written validation of this debt with the original creditor, the original amount, and the chain of ownership. I'll respond after I receive it.'\n\nThen hang up. Don't say 'yes I owe this' or 'I'll send something next week.' Both can be used against you legally if the case ever goes to court.\n\nWhen the written validation arrives, you have three options: dispute it, negotiate a settlement, or pay in full. Which one depends on whether the debt is real, how close it is to the statute of limitations, and how much you can afford.",
      },
      {
        h2: "How to negotiate a settlement",
        body:
          "Most third-party collectors will settle for 20 to 50 cents on the dollar. Original creditors (your original credit card company, if the debt hasn't been sold) typically settle at 40 to 60 cents.\n\nOpening move: offer 20% of the balance, payable in a lump sum, in exchange for a 'pay for delete' letter (their agreement to remove the collection from your credit report). They'll usually counter at 50% or higher. Settle around 35-40%.\n\nGet everything in writing before you pay. Specifically: the settlement amount, the agreement that the remaining balance is considered satisfied, and the agreement to update the credit-bureau reporting (either delete the account or mark it 'paid in full' rather than 'settled for less'). 'Pay for delete' is harder to get than it used to be (credit-reporting rules tightened) but worth asking for.\n\nNever pay before you have a signed settlement letter. Once paid, the leverage to negotiate the reporting is gone.",
      },
      {
        h2: "Rebuilding your credit afterwards",
        body:
          "A collection on your credit report can drop your FICO score by 60 to 100 points, depending on your starting point. The good news: newer FICO models (FICO 9, FICO 10) ignore paid collections entirely, and medical collections that have been paid don't count even on older models.\n\nRebuild path: a secured credit card with a $300 deposit, used for one or two small monthly charges paid in full, builds positive history. After 12 months of on-time payments, your score typically recovers to within 30 points of where it was before the collection.\n\nThe collection itself stays on your report for 7 years from the date of first delinquency on the original debt. After 7 years it falls off automatically.",
      },
    ],
    faqs: [
      { q: "Can a collection agency garnish my wages?", a: "Only after suing you in court and winning a judgment. The first time you'd see this is a court summons, not a surprise paycheck deduction. Federal student loans and IRS debts can garnish without a judgment, but private collections cannot." },
      { q: "Should I pay an old collection if it's about to fall off my credit report?", a: "Usually no for FICO 9 or 10 lenders (most modern lenders), and yes if you're applying for a mortgage with older underwriting. If the debt is past the statute of limitations and within 1-2 years of the 7-year auto-removal, paying it can actually restart the clock and re-age the negative item. Get advice specific to your state." },
      { q: "Can collectors call me at work?", a: "Yes, but you can tell them to stop, and the FDCPA requires them to. Send a written cease-and-desist for work calls (keep a copy and proof of mailing). They can still contact you at home." },
      { q: "What if a collector is calling about a debt that's not mine?", a: "Send a written dispute within 30 days of their first written notice. The collector must pause collection until they verify with the original creditor. If they can't verify, they must stop attempting to collect. If they keep calling after a verified dispute, you have grounds for an FDCPA lawsuit." },
    ],
    relatedSlugs: [
      "raise-credit-score-100-points",
      "dispute-credit-report-errors",
    ],
    toolLinks: [
      { label: "Bad credit loans", href: "/loans/bad-credit" },
      { label: "Glossary: Charge-off", href: "/glossary/charge-off" },
      { label: "Glossary: FCRA", href: "/glossary/fcra" },
    ],
  },

  // ─── Credit improvement ─────────────────────────────────────────
  {
    slug: "raise-credit-score-100-points",
    cluster: "Credit improvement",
    h1: "How to raise your credit score 100 points in 12 months",
    title: "How to Raise Your Credit Score 100 Points in 12 Months (2026)",
    description:
      "A realistic 12-month plan to raise your FICO score by 100 points or more, based on the five factors that actually drive scoring. No tricks, just the math behind credit reports.",
    publishedAt: PUBLISHED,
    reviewedAt: REVIEWED,
    estimatedReadMinutes: 11,
    intro:
      "A 100-point credit score increase is realistic in 12 months for borrowers starting between 550 and 680. It requires steady effort on the five factors that drive FICO scoring. Here's the plan, in order of which moves produce results fastest.",
    sections: [
      {
        h2: "The five factors that actually drive your score",
        body:
          "FICO doesn't tell you exactly how it calculates your score, but the broad weightings are public and stable.\n\nPayment history (35% of score). Are you paying every bill on time? A single 30-day late payment can drop your score by 60 to 100 points. This is the biggest single factor.\n\nAmounts owed / credit utilisation (30%). What percentage of your available revolving credit are you using? Below 30% is good. Below 10% is ideal. Above 70% is severely damaging.\n\nLength of credit history (15%). How long have your accounts been open? The age of your oldest account, newest account, and average account age all factor in.\n\nNew credit (10%). How many recent hard inquiries and new accounts? Multiple new accounts in a short window suggests financial stress to scoring models.\n\nCredit mix (10%). Do you have both revolving (cards) and installment (loans, mortgages)? Diversity helps slightly.\n\nThe biggest lever is the combination of payment history and utilisation, which together are 65% of your score. Optimising those two factors is the entire game.",
      },
      {
        h2: "Months 1-2: pay down revolving balances",
        body:
          "The fastest way to raise your score is to drop your credit utilisation. This works because utilisation is recalculated every month when each card reports to the bureaus.\n\nIf you have $15,000 in available card credit and $9,000 in balances, your utilisation is 60%. Paying $4,500 down to a $4,500 balance drops utilisation to 30%, which can raise your score by 30 to 60 points within 30 to 60 days.\n\nPay the cards with the highest utilisation ratio first, not the highest APR or highest balance. A card maxed at 100% utilisation hurts your score more than a card at 30% utilisation, even if the maxed card has a smaller balance.\n\nUtilisation matters per-card AND in aggregate. Lenders look at both. Spreading $3,000 across three $5,000-limit cards (20% utilisation each, 20% aggregate) scores better than concentrating $3,000 on one $5,000-limit card (60% utilisation that card, 20% aggregate).",
      },
      {
        h2: "Month 3: dispute credit-report errors",
        body:
          "About 1 in 4 consumers have at least one error on their credit report (CFPB and FTC studies). Common errors: accounts listed twice, accounts that aren't yours, payment statuses incorrectly marked as late, balances that don't match reality, collections past their 7-year removal date.\n\nPull your reports from all three bureaus (Equifax, Experian, TransUnion) at AnnualCreditReport.com (free, federally authorised). Review every account.\n\nFor each error: file a dispute with the bureau via their online portal. The bureau has 30 days to investigate. If the creditor can't verify the disputed item, the bureau must remove it. Removing a single legitimate negative item can produce a 20 to 60 point increase.",
      },
      {
        h2: "Months 4-12: pay every bill on time, every time",
        body:
          "Payment history is 35% of your score and the recovery curve is steep. Each on-time payment month builds the recent-payment-history portion of your file. After 6 months of perfect payments, lenders see you as a different risk than the borrower you were before.\n\nSet up autopay for the minimum on every credit account. This makes a missed payment impossible. Pay the rest manually so you can control the utilisation reported at month-end.\n\nDon't apply for new credit during this window. Each hard inquiry costs 3 to 7 points temporarily, and new accounts lower your average account age. Save credit applications for when you specifically need them.",
      },
      {
        h2: "Avoid these score-killing mistakes",
        body:
          "Closing old credit cards. Closing reduces your total available credit and lowers average account age. Both hurt the score. The right move is usually to leave old cards open with a small recurring charge (Netflix subscription, paid in full each month) to keep them active.\n\nApplying for store cards at the register for a 10% discount. Each one is a hard inquiry plus a new account. The 10% saved is rarely worth the credit damage.\n\nMaxing out a credit card right before a big purchase like a car. Lenders pull credit at application. A maxed-out card the day before a car loan application can mean an APR several points higher than what your underlying credit profile would otherwise earn.",
      },
    ],
    faqs: [
      { q: "Can I really raise my score 100 points in a year?", a: "Realistic if you're starting between 550 and 680 and you have meaningful room to improve on utilisation, errors, and payment history. Less realistic if you're already at 720 (the diminishing-returns zone) or if your file has recent serious negatives (bankruptcy, foreclosure) that need time to age." },
      { q: "How fast can credit utilisation changes show up?", a: "Most cards report to the bureaus once per month, usually on or after your statement date. A balance change on the 5th of a month appears on your credit report after the next statement, which can be 25-50 days later. The score impact then takes another 30 days for the next reporting cycle." },
      { q: "Should I use a credit-repair service?", a: "Usually no. They charge $100-$200 per month for what you can do yourself for free in 4-6 hours: pulling your reports, disputing errors, and setting up autopay. Some 'repair' tactics they sell are also legally questionable and can backfire." },
      { q: "How long do negative items stay on my report?", a: "Most negatives (late payments, charge-offs, collections) stay 7 years from the date of first delinquency. Chapter 7 bankruptcy stays 10 years. Chapter 13 stays 7 years. Hard inquiries stay 2 years but only affect your score for the first 12 months." },
      { q: "What's the fastest single move that raises a score?", a: "Paying down a maxed credit card to under 30% utilisation. Score impact typically lands within 30-45 days. For a card at 95% utilisation, this can be 30-60 points in one cycle." },
    ],
    relatedSlugs: [
      "what-credit-score-for-personal-loan",
      "dispute-credit-report-errors",
      "consolidate-credit-card-debt-personal-loan",
    ],
    toolLinks: [
      { label: "Fair credit personal loans", href: "/loans/fair-credit" },
      { label: "Good credit personal loans", href: "/loans/good-credit" },
      { label: "Glossary: Credit utilisation", href: "/glossary/credit-utilization" },
    ],
  },
  {
    slug: "what-credit-score-for-personal-loan",
    cluster: "Credit improvement",
    h1: "What credit score do you need for a personal loan?",
    title: "What Credit Score Do You Need for a Personal Loan? (2026 Ranges)",
    description:
      "Minimum credit scores for personal loans by lender tier, plus realistic APR ranges at each score band. Includes what to do if your score is too low.",
    publishedAt: PUBLISHED,
    reviewedAt: REVIEWED,
    estimatedReadMinutes: 8,
    intro:
      "Most online personal-loan lenders accept FICO scores from 580 up. Banks usually start at 660. Credit unions vary widely. Here are the score ranges that unlock real offers, the APRs you can expect at each tier, and what to do if you're below the floor.",
    sections: [
      {
        h2: "Minimum scores by lender type",
        body:
          "Online installment lenders. Typical floor around 580 FICO. Lenders that explicitly serve fair credit (LendingClub, Upgrade, Best Egg, Avant) accept applicants from 580 up. Subprime online lenders go lower, sometimes to 540 or below, with APRs at the legal cap.\n\nBanks. Typical floor 660-680. Big-bank personal loans (Wells Fargo, US Bank, Discover) want established credit history alongside the score. A 660 FICO with thin credit file may still get declined.\n\nCredit unions. Floor varies widely. Some credit unions consider applicants below 600 if they have an existing membership relationship. Federal credit unions can offer Payday Alternative Loans capped at 28% APR for members regardless of score.\n\nFintech lenders using alternative data. Some lenders (Upstart, Petal) weight education, employment history, and bank-transaction data alongside credit. A 600 FICO with strong income and a stable bank record may qualify here when traditional lenders decline.",
      },
      {
        h2: "Realistic APR ranges by score tier",
        body:
          "These ranges reflect current market conditions and assume an established credit file. A thin file (under 4 accounts, under 2 years history) typically sees APRs 2 to 5 points higher than these ranges at the same score.\n\n760+ (exceptional): 5.99% to 9.99% APR, minimal origination fees, top loan amounts.\n\n740-759 (very good): 6.99% to 11.99% APR, low or no origination fee.\n\n700-739 (good): 8.99% to 15.99% APR, origination fees 0% to 3%.\n\n670-699 (good): 11.99% to 19.99% APR, origination fees 3% to 6%.\n\n640-669 (fair): 15.99% to 24.99% APR, origination fees 4% to 8%.\n\n620-639 (fair): 19.99% to 29.99% APR, full origination fees common.\n\n580-619 (fair, lower end): 24.99% to 32.99% APR, fees at the upper end.\n\nBelow 580 (subprime): rates at or near 35.99% legal cap, smaller amounts, shorter terms.",
      },
      {
        h2: "Why the same score gets different rates",
        body:
          "Two borrowers with the same FICO score can see APRs 5 points apart from the same lender. The score is one input among many.\n\nIncome and debt-to-income ratio. The lender wants to see that the new payment doesn't push your total debt service above ~40% of gross monthly income. Borrowers with strong income at the same score get better rates because the payment is less of a stretch.\n\nLength of employment. Two years at the current employer is the typical sweet spot. Recent job changes can pull rates higher even at the same score.\n\nLoan amount and term. Smaller loan amounts at shorter terms typically come with lower APRs (the lender's risk per dollar lent is lower).\n\nAutomatic payment enrollment. Many lenders offer 0.25% to 0.50% APR discount for autopay enrolment.\n\nState of residence. State APR caps mean two identical borrowers in different states see different offers. California, Arkansas, Arizona, and others have meaningful caps.",
      },
      {
        h2: "What to do if you're below the minimum",
        body:
          "Pre-qualification first. A soft credit pull tells you whether any lender will consider you without affecting your score. If you get pre-qualified offers, even at the top of the APR range, you have options.\n\nAdd a co-signer with strong credit. A co-signer with a 720+ FICO can shift the loan to that co-signer's pricing tier. They take on full repayment responsibility, so this only works with someone who fully understands and accepts the commitment.\n\nWait and improve the score. Even 30 to 60 days of focused effort (paying down revolving balances, disputing errors) can move a borderline score across a tier line. The savings on a multi-year loan often dwarf the wait.\n\nSecured personal loan or credit-union PAL. Secured loans backed by a vehicle or savings account come with lower APRs and looser credit standards. Federal credit-union Payday Alternative Loans cap at 28% APR and are designed for borrowers shut out of mainstream credit.",
      },
    ],
    faqs: [
      { q: "Can I get a personal loan with a 550 credit score?", a: "Possible but limited. Some online subprime lenders consider scores from 540 up. Expect APRs at or near the 35.99% legal cap, smaller loan amounts ($500-$5,000), and shorter terms. A credit-union PAL or secured loan may be cheaper alternatives." },
      { q: "Do all lenders use FICO?", a: "Most do, though some use VantageScore (the model jointly developed by the three bureaus). The two models typically land within 20-50 points of each other. Some fintech lenders use proprietary risk models that include credit but weight it less heavily than traditional underwriting." },
      { q: "Does pre-qualification affect my credit score?", a: "No. Pre-qualification uses a soft credit inquiry, which is invisible to other lenders and doesn't affect your score. The hard inquiry only happens after you accept a final offer and the lender pulls full credit to finalise the loan." },
      { q: "How much does a 50-point score increase save on a loan?", a: "On a $15,000 loan at 48 months, going from a 620 FICO to a 670 FICO typically drops the APR by 5-8 percentage points. That's $2,500-$4,000 in interest savings over the life of the loan. The math justifies a 30-60 day delay to improve the score before applying." },
    ],
    relatedSlugs: [
      "raise-credit-score-100-points",
      "compare-personal-loan-offers",
      "consolidate-credit-card-debt-personal-loan",
    ],
    toolLinks: [
      { label: "Loans by credit profile", href: "/loans/fair-credit" },
      { label: "580 credit score loans", href: "/loans/580-credit-score" },
      { label: "Loan affordability calculator", href: "/calculators/affordability" },
    ],
  },
  {
    slug: "dispute-credit-report-errors",
    cluster: "Credit improvement",
    h1: "How to dispute errors on your credit report",
    title: "How to Dispute Credit Report Errors (Step-by-Step, FCRA)",
    description:
      "Step-by-step guide to disputing errors on your credit report under the Fair Credit Reporting Act. Includes sample letter, what bureaus must do, and how to escalate.",
    publishedAt: PUBLISHED,
    reviewedAt: REVIEWED,
    estimatedReadMinutes: 7,
    intro:
      "About 1 in 4 consumers have at least one error on their credit reports. Disputing inaccurate negatives is free, takes about an hour, and can raise your FICO score by 20 to 60 points. Here's how to do it right.",
    sections: [
      {
        h2: "Pull all three credit reports first",
        body:
          "Go to AnnualCreditReport.com, the federally authorised source for free credit reports. Skip the lookalike sites that charge for what's legally free.\n\nYou're entitled to one free report from each of the three nationwide credit bureaus (Equifax, Experian, TransUnion) every 12 months. Since 2020, the bureaus have voluntarily offered free weekly reports through the same site, so you can pull as often as needed.\n\nReview each report carefully. Errors don't always appear on all three because creditors don't always report to all three. An error that appears on Experian but not Equifax must be disputed with Experian specifically.",
      },
      {
        h2: "What counts as a disputable error",
        body:
          "Common errors that are worth disputing:\n\nAccounts you never opened (possible identity theft, requires a separate FTC IdentityTheft.gov report).\n\nAccounts listed twice (the same debt reported by both the original creditor and a collection agency, which double-counts the negative).\n\nIncorrect late-payment markings (your payment was on time but reported as late).\n\nBalances that don't match reality (paid-off accounts still showing a balance).\n\nNegative items past their 7-year FCRA expiration date.\n\nIncorrect personal information (wrong address, wrong employer) that may suggest a mixed file with another consumer.\n\nWhat's NOT a disputable error: a legitimate negative that you simply don't like. Trying to dispute valid negatives wastes effort and can be flagged as frivolous.",
      },
      {
        h2: "Dispute online through the bureau",
        body:
          "Each bureau has an online dispute portal. Find them at equifax.com, experian.com, and transunion.com. The portals walk you through identifying the item and explaining the dispute.\n\nFor each disputed item, provide: the account identifier as shown on the report, the specific reason you're disputing (\"this account was paid off in March 2024 but is still showing a balance\"), and supporting documentation (payment confirmation emails, settlement letters, bank statements).\n\nKeep the dispute reason factual and short. Long emotional explanations don't help; factual statements with documentation do.",
      },
      {
        h2: "What the bureau must do",
        body:
          "Once you file a dispute, the FCRA requires the bureau to investigate within 30 days. They contact the original creditor (the 'furnisher') and ask them to verify the disputed item.\n\nIf the creditor can't verify the item, the bureau must remove or correct it. If the creditor verifies it, the item stays.\n\nYou'll receive a written response with the outcome. If the item was changed, you can request a new copy of your credit report showing the update.\n\nIf the dispute fails but you believe the item is still wrong, you can: file a 100-word consumer statement that attaches to the disputed item on future reports, escalate to the CFPB (consumerfinance.gov/complaint), or, in cases of significant damages, hire an FCRA attorney.",
      },
      {
        h2: "After the dispute: monitor the change",
        body:
          "Pull a fresh copy of your report 35 days after filing the dispute. Confirm the change is reflected. Check your FICO score (most credit cards now show it for free) to see the impact.\n\nThe score change usually appears in the same reporting cycle the bureau processes the update. If the disputed item was a serious negative (collection, charge-off, late payment), the score increase can be 30 to 60 points.\n\nIf you dispute multiple items at once, file them separately rather than as a single dispute. The bureau can dismiss multi-item disputes as frivolous if any one item is borderline.",
      },
    ],
    faqs: [
      { q: "Can I dispute legitimate negative items?", a: "Technically you can dispute anything, but disputing valid items is wasted effort and can be flagged as frivolous. Focus on items where you have evidence they're wrong: incorrect balances, accounts that aren't yours, items past 7 years, duplicate listings, or late marks for payments you made on time." },
      { q: "How long does a dispute take?", a: "The FCRA gives the bureau 30 days. Most are resolved in 14-21 days. If the bureau extends to 45 days (which they can if you sent additional documentation mid-process), the longer window applies." },
      { q: "Can I dispute the same item more than once?", a: "Yes, especially if you have new evidence. Sending the same dispute with identical evidence the bureau already considered will be marked frivolous. Sending a new dispute with new documentation (a settlement letter you just found, a bank statement showing the on-time payment) is fair." },
      { q: "Do credit-repair companies dispute errors faster?", a: "No. They use the same FCRA process you can use yourself. They typically charge $100-$200 per month for 6-12 months. The same work takes 1-3 hours per credit report on your own. The CFPB has flagged predatory credit-repair companies as a consumer-protection concern." },
    ],
    relatedSlugs: [
      "raise-credit-score-100-points",
      "what-credit-score-for-personal-loan",
      "what-to-do-debt-collections",
    ],
    toolLinks: [
      { label: "Glossary: Credit report", href: "/glossary/credit-report" },
      { label: "Glossary: FCRA", href: "/glossary/fcra" },
      { label: "Glossary: Soft inquiry", href: "/glossary/soft-inquiry" },
    ],
  },

  // ─── Loan shopping ──────────────────────────────────────────────
  {
    slug: "compare-personal-loan-offers",
    cluster: "Loan shopping",
    h1: "How to compare personal loan offers like a pro",
    title: "How to Compare Personal Loan Offers: APR, Fees, Terms (Checklist)",
    description:
      "Step-by-step checklist for comparing personal loan offers correctly: effective APR, origination fees, prepayment terms, autopay discounts, and the lines you should never skim.",
    publishedAt: PUBLISHED,
    reviewedAt: REVIEWED,
    estimatedReadMinutes: 8,
    intro:
      "Comparing personal loans is more than picking the lowest APR. Origination fees, prepayment terms, autopay discounts, and credit-bureau reporting can swing the true cost by thousands of dollars. Here's exactly what to look at before you sign.",
    sections: [
      {
        h2: "Compare effective APR, not stated rate",
        body:
          "The interest rate is what the lender charges for the use of the money. The APR includes the rate plus most mandatory fees. The Truth in Lending Act requires lenders to disclose APR specifically so consumers can compare offers apples-to-apples.\n\nThe biggest fee rolled into APR is the origination fee, typically 1% to 8% of the loan amount. It's deducted from your disbursed funds or added to the loan balance. A loan with a 10% stated rate and a 5% origination fee has a meaningfully higher effective APR than a loan with a 12% stated rate and no fee.\n\nWorked example: $10,000 over 36 months. Loan A is 10.0% rate with 5% origination fee. You receive $9,500. Effective APR is about 14.5%. Loan B is 12.0% rate with no fee. You receive $10,000. Effective APR is 12.0%. Loan B costs less despite the higher stated rate.\n\nWhen the rate and fee are bundled into APR by the lender, you can trust the APR comparison. Always verify the disclosed APR matches what the loan agreement says.",
      },
      {
        h2: "Check for prepayment penalties",
        body:
          "Most reputable U.S. personal-loan lenders don't charge prepayment penalties. Some still do. If the loan agreement mentions a prepayment fee, the loan is materially less attractive than a fee-free equivalent.\n\nWhy this matters: if your financial situation improves (raise, bonus, tax refund) and you want to pay the loan off early, a prepayment penalty can cost you more than the interest you'd save. A 2% prepayment penalty on a $20,000 early payoff costs $400.\n\nThe loan documents will use phrases like 'prepayment fee', 'early termination fee', or 'penalty for partial prepayment'. Word-search for 'prepay' in the PDF if it's long.",
      },
      {
        h2: "Confirm credit-bureau reporting",
        body:
          "Reputable lenders report your account to one or more of the three credit bureaus. This is a feature, not a bug: on-time payments build your credit history.\n\nLenders that DON'T report to bureaus are a yellow flag. Common cases: very-subprime online lenders, payday-loan refinance shops, some peer-to-peer platforms. Not being reported means you can't build credit through repayment.\n\nLook for the lender's loan agreement language: 'We will report your account information to one or more consumer reporting agencies, including [bureau names].' If that language is absent, ask before signing.",
      },
      {
        h2: "Stack autopay and member discounts correctly",
        body:
          "Most major lenders offer a 0.25% to 0.50% APR discount for enrolling in automatic payments from a checking account. On a $20,000 loan over 60 months, a 0.50% discount saves about $300.\n\nMember discounts (for credit-union members or existing-customer banking products) can stack with autopay discounts. SoFi, LightStream, and others offer additional reductions for stacking products.\n\nThe catch: autopay requires you to have predictable cash flow. If your checking-account balance fluctuates and an autopay charge can trigger an overdraft, the overdraft fee can wipe out the discount many times over.",
      },
      {
        h2: "The lines to read closely (not skim)",
        body:
          "Section labelled 'Truth in Lending Act Disclosures' or 'TILA Box'. Federally required. Shows APR, finance charge, amount financed, total of payments, and a payment schedule. Compare this box across offers, not the marketing-page advertised rate.\n\nDefinition of default and what triggers it. Some loans treat a single missed payment as default; others require 60 or 90 days. The looser definition is friendlier to borrowers in a temporary cash crunch.\n\nLate-payment fee structure. Most lenders charge $15 to $40 per missed payment. A lender charging the high end consistently is a red flag.\n\nArbitration and class-action waivers. Standard but worth knowing about. The agreement may waive your right to sue in court or join a class action.\n\nForced add-ons. Credit insurance, debt protection, or other 'optional' products bundled into the loan increase the effective APR. Skip these unless you have a specific reason; the cost rarely justifies the protection.",
      },
    ],
    faqs: [
      { q: "Should I always pick the lowest APR?", a: "Usually but not always. Lowest APR plus a prepayment penalty or required arbitration with a 30-day default trigger may be worse than a slightly higher APR with cleaner terms. Read the loan agreement, not just the rate quote." },
      { q: "How many lenders should I pre-qualify with?", a: "Three to five. Below three, you don't have enough comparison points. Above five, the marginal benefit of one more quote is small and your time is worth more elsewhere. Marketplace pre-qualification uses a soft credit pull so additional quotes don't hurt your score." },
      { q: "Does rate-shopping hurt my credit score?", a: "If you stay within the FICO 'rate shopping window' (typically 14 days for newer models, 45 days for some older ones), multiple hard inquiries for the same loan type count as one. Pre-qualification stages use only soft pulls, so the window only matters once you're getting final offers." },
      { q: "Can I negotiate the APR a lender quotes?", a: "Sometimes. Online lenders are mostly automated and resistant to negotiation, but credit unions and some banks will match a competitor's offer if you bring the documentation. Always worth asking when you have multiple offers in hand." },
    ],
    relatedSlugs: [
      "hidden-fees-personal-loans",
      "consolidate-credit-card-debt-personal-loan",
      "what-credit-score-for-personal-loan",
    ],
    toolLinks: [
      { label: "APR calculator", href: "/calculators/apr" },
      { label: "Loan payment calculator", href: "/calculators/loan-payment" },
      { label: "Compare loan types", href: "/compare" },
    ],
  },
  {
    slug: "hidden-fees-personal-loans",
    cluster: "Loan shopping",
    h1: "Hidden fees in personal loans (and how to spot them)",
    title: "Hidden Fees in Personal Loans: Origination, Late, Prepayment",
    description:
      "Every fee a personal-loan lender can charge, why each exists, and how to find them buried in the loan agreement. Includes the federal TILA disclosure box decoded.",
    publishedAt: PUBLISHED,
    reviewedAt: REVIEWED,
    estimatedReadMinutes: 7,
    intro:
      "A personal-loan offer can carry six or seven different fees beyond the interest rate. Most are disclosed but easy to miss. Here's every fee you might encounter, what each one typically costs, and where to find them in the loan agreement.",
    sections: [
      {
        h2: "Origination fee (the big one)",
        body:
          "The origination fee is a one-time fee for processing the loan. It typically runs 1% to 8% of the loan amount, deducted from the funds you receive (so a $10,000 loan with a 5% origination fee deposits $9,500 to your account, but you owe $10,000 with interest).\n\nThe origination fee is rolled into the APR under the Truth in Lending Act, so the APR is a fee-inclusive comparison number. The stated interest rate is not.\n\nWhen origination is a fair charge: high-risk borrower profile where the lender's underwriting cost is real, or a small loan where 5% of $2,000 is reasonable compensation. When it's not: prime borrower being charged 5% on a $50,000 loan because the lender can. Prime borrowers often qualify for no-fee loans from SoFi, LightStream, and certain credit unions.",
      },
      {
        h2: "Late-payment fee",
        body:
          "Charged when a scheduled payment doesn't arrive by its due date, usually after a 5 to 15 day grace period. Typical range: $15 to $40 per missed payment, capped by state law in many jurisdictions.\n\nLate fees are disclosed in the loan agreement under a section like 'Late Payment Fee' or 'Default Charges'. Confirm the dollar amount and the grace-period length before signing.\n\nMissed payments also typically get reported to the credit bureaus after 30 days, which hurts your credit score independently of the fee.",
      },
      {
        h2: "Prepayment penalty",
        body:
          "A fee for paying off the loan ahead of schedule. Most reputable U.S. personal-loan lenders don't charge one. Some subprime and some peer-to-peer platforms still do.\n\nWhen disclosed it's labelled 'prepayment fee', 'early termination fee', or 'minimum interest charge'. Word-search the loan agreement for 'prepay'.\n\nA prepayment penalty fundamentally changes the loan's value to you. Even a 2% penalty on a $15,000 early payoff is $300. Avoid prepayment-penalty loans unless the underlying rate compensates for it.",
      },
      {
        h2: "NSF / returned-payment fee",
        body:
          "Charged when an autopay or manual ACH payment fails because your checking account had insufficient funds. Typical range: $15 to $30 per failed payment, plus whatever overdraft fee your bank also charges.\n\nNSF fees compound. A failed autopay can trigger both the lender's $25 NSF fee and your bank's $35 overdraft fee for one missed payment.",
      },
      {
        h2: "Wire / express funding fee",
        body:
          "If you accept the loan and want funds the same day instead of the standard next-business-day ACH, some lenders charge $15 to $50 for an expedited wire transfer.\n\nUsually optional. Standard ACH funding is free and lands the next business day.",
      },
      {
        h2: "Optional add-ons (skip unless you have a reason)",
        body:
          "Some lenders offer credit insurance, debt protection, or unemployment-protection riders bundled with the loan. These products promise to cover your payments if you die, are disabled, or lose your job.\n\nThe cost is usually 1% to 3% of the loan amount, rolled into the financed amount (so you also pay interest on the premium). Consumer-protection regulators have repeatedly flagged these as overpriced and lopsided in favour of the lender.\n\nUnless you have a specific reason (a clear catastrophe-coverage gap), skip them. A standalone term life policy or short-term disability insurance is almost always cheaper and broader coverage.",
      },
      {
        h2: "Where the fees live in the loan agreement",
        body:
          "Section 'Truth in Lending Act Disclosures' or 'TILA Box'. Federally required. The APR shown here includes origination fee. Compare APRs in this box across offers.\n\nSection 'Fee Schedule' or 'Other Charges'. Lists late fees, NSF fees, and any service charges.\n\nSection 'Prepayment' or 'Early Payoff'. Says whether a prepayment penalty applies. Read this even if the marketing page says 'no prepayment penalty', because the marketing language and the contract language aren't always identical.\n\nSection 'Optional Products' or 'Insurance Election'. Where any add-on products are agreed to. If you don't want them, this section should be unchecked or blank.",
      },
    ],
    faqs: [
      { q: "Is an origination fee negotiable?", a: "Rarely with online lenders (their pricing is mostly algorithmic). Sometimes with credit unions and community banks, especially if you bring competing offers. Always worth asking when you have other quotes." },
      { q: "Can I refinance a loan to get rid of the origination fee?", a: "The original origination fee is gone (you already paid it). Refinancing means a new loan with its own potential fees. Refinancing makes sense when the new APR is meaningfully lower or the term is shorter, not just to escape a sunk-cost fee." },
      { q: "What's the maximum origination fee that's still fair?", a: "For prime credit (740+), zero. For good credit (670-739), 1-3%. For fair credit (580-669), 3-6%. Above 6% the lender is usually capitalising on borrower desperation; pre-qualify with two or three more lenders before accepting." },
      { q: "Are lender fees tax-deductible?", a: "Generally no for personal loans (unlike mortgages, where origination fees can be deductible under specific rules). Interest on a personal loan used for business expenses may be partially deductible; consult a tax professional." },
    ],
    relatedSlugs: [
      "compare-personal-loan-offers",
      "what-credit-score-for-personal-loan",
    ],
    toolLinks: [
      { label: "APR calculator", href: "/calculators/apr" },
      { label: "Glossary: Origination fee", href: "/glossary/origination-fee" },
      { label: "Glossary: TILA", href: "/glossary/tila" },
    ],
  },

  // ─── Life events ────────────────────────────────────────────────
  {
    slug: "should-you-take-loan-for-wedding",
    cluster: "Life events",
    h1: "Should you take a personal loan for a wedding?",
    title: "Should You Take a Personal Loan for a Wedding? The Honest Math",
    description:
      "The financial case for and against borrowing to pay for a wedding, with a 30-second decision framework and the specific numbers that should drive your call.",
    publishedAt: PUBLISHED,
    reviewedAt: REVIEWED,
    estimatedReadMinutes: 7,
    intro:
      "A wedding loan can be the right move or the wrong move. The decision usually hinges on three numbers: how long you'd repay, what APR you qualify for, and what percentage of your gross monthly income the payment represents. Here's the framework.",
    sections: [
      {
        h2: "The 30-second framework",
        body:
          "The borrowing makes sense if all three are true:\n\n1. You can repay within 24 months.\n2. The APR is single digits or low double digits (under 15%).\n3. The monthly payment is under 8% of your combined gross monthly income.\n\nIf any one of those fails, lean toward downsizing the wedding instead.\n\nWorked example. A couple takes a $15,000 personal loan for a wedding at 12% APR over 24 months. Monthly payment is $706. Combined gross monthly income is $11,000. The payment is 6.4% of income. The plan repays the loan before any anniversary trip becomes a budget issue. This passes the framework.\n\nCounter-example. A couple takes the same $15,000 at 22% APR over 60 months. Monthly payment is $414. Same $11,000 income, so 3.8% of income. Looks manageable but they'd be paying for the wedding for five years. The total interest is $9,800, more than half the loan amount. The framework fails on item 1.",
      },
      {
        h2: "What weddings actually cost",
        body:
          "The Knot's most recent annual survey put the U.S. average wedding cost around $30,000, but the distribution is wide: the median is closer to $20,000 and the bottom quartile spends under $10,000.\n\nWhere the money goes (approximate national averages):\n\n- Venue and catering: 45-55%\n- Photography and video: 8-12%\n- Attire (dress, suit, accessories): 5-8%\n- Flowers and decor: 5-8%\n- Music or DJ: 4-6%\n- Rings: 3-5%\n- Officiant, transport, stationery, miscellaneous: balance\n\nVenue/catering is the single biggest lever. A backyard wedding or off-peak Tuesday venue can cut total cost by 50% with no impact on the day's quality.",
      },
      {
        h2: "Alternatives to financing",
        body:
          "Delay the wedding 6 to 12 months and save the cash. Setting aside $800 a month for 12 months covers the bottom-quartile $10,000 wedding entirely with no debt. The interest you'd have paid on the loan instead earns 4-5% in a high-yield savings account.\n\nSplit hosting costs with family. Many cultures and families still expect to contribute. Direct that contribution to specific line items (venue, catering, photographer) so the support is concrete and the budget is clear.\n\nMicro-wedding plus larger reception later. Get legally married with 10 people now, throw a party next year when the budget recovers. Total cost typically lower than a single bigger event, plus more flexibility.\n\nUse credit-card rewards rather than cash. If you can pay the balance in full each month using a 2% cashback card, you effectively get a 2% discount on the entire wedding. The cards never enter debt territory.",
      },
      {
        h2: "If you do borrow: do it right",
        body:
          "Apply jointly with your partner. Combined incomes often unlock larger amounts and better APRs than a single-applicant loan.\n\nFix the rate and term before any vendor deposits. Knowing your monthly payment ahead lets you size the wedding to fit the loan, rather than the loan stretching to fit a wedding that's already booked.\n\nDon't roll a honeymoon onto the same loan unless the math works on the combined amount. People consistently underestimate honeymoon spend and over-borrow.\n\nPreserve your credit cards for routine spending only. The wedding cash all flows through the personal loan; the cards stay clear so you have credit available for any post-wedding surprise (a deposit on a new apartment, a car repair, etc.).",
      },
    ],
    faqs: [
      { q: "How much should we spend on a wedding?", a: "There's no right number, but a useful guardrail: total wedding cost should be no more than 30% of your combined annual gross income, and shorter borrowing terms (under 24 months) only. Spending more turns into a multi-year obligation that competes with house, kids, or emergency-fund priorities." },
      { q: "What credit score do we need for a wedding loan?", a: "Most lenders approving wedding loans want a FICO of 600+, with the best APRs reserved for 720+. If you're applying jointly, the lower of the two scores often controls the pricing. Pre-qualify (soft pull) before submitting a full application." },
      { q: "Can we get a wedding loan with bad credit?", a: "Lenders in our network consider FICO scores below 600 for personal loans including weddings. APRs at the lower end of credit will be at the upper end of the range (25-35.99%), which usually makes the framework above fail on item 2. Consider downsizing rather than borrowing." },
      { q: "Should we use credit cards instead of a personal loan?", a: "If you can pay off within 12-15 months and use a 0% intro APR balance-transfer card, cards can be cheaper. Beyond 18 months a personal loan with a defined payoff is usually cheaper and forces the discipline a credit card doesn't." },
    ],
    relatedSlugs: [
      "compare-personal-loan-offers",
      "what-credit-score-for-personal-loan",
    ],
    toolLinks: [
      { label: "Wedding loans", href: "/loans/wedding" },
      { label: "Loan payment calculator", href: "/calculators/loan-payment" },
      { label: "Loan affordability calculator", href: "/calculators/affordability" },
    ],
  },
  {
    slug: "kitchen-remodel-heloc-vs-personal-loan",
    cluster: "Life events",
    h1: "Financing a kitchen remodel: HELOC vs personal loan",
    title: "Kitchen Remodel Financing: HELOC vs Personal Loan (2026 Math)",
    description:
      "When a HELOC beats a personal loan for kitchen remodel financing, when it loses, and the specific budget thresholds where each option wins.",
    publishedAt: PUBLISHED,
    reviewedAt: REVIEWED,
    estimatedReadMinutes: 8,
    intro:
      "A HELOC is usually cheaper per dollar borrowed. A personal loan funds in days, requires no appraisal, and doesn't put your home at risk. Which one wins depends on the remodel budget, your timeline, and how much equity you have. Here are the specific thresholds.",
    sections: [
      {
        h2: "The structural differences",
        body:
          "Personal loan. Unsecured installment loan. Fixed APR usually between 7% and 30% depending on credit. Funds in 1 to 3 days. No appraisal. Loan amounts cap around $50,000 in most cases. Monthly payment is fixed for the life of the loan.\n\nHELOC (Home Equity Line of Credit). Revolving credit line secured by the equity in your home. Variable APR usually between 8% and 12% (tracking the prime rate). Closes in 30 to 45 days, requires an appraisal and title work. Loan amounts up to ~85% of home equity, often $50,000 to $250,000 or more. Draw period (typically 10 years) is interest-only; then a repayment period (typically 20 years) amortises the balance.\n\nHome equity loan (the other secured option). Lump-sum installment loan secured by home equity. Fixed APR similar to HELOC. Same approval timeline and process as HELOC. Most kitchen-remodel discussions are HELOC vs personal loan, but home equity loans are a third option for borrowers who want the structure of a personal loan with the rate of a HELOC.",
      },
      {
        h2: "Budget thresholds: when each option wins",
        body:
          "Under $15,000. Personal loan wins on every dimension. HELOC closing costs (typically 2-5% of the credit line) eat any rate advantage at this size. Speed of funding lets the project start immediately.\n\n$15,000 to $35,000. Personal loan still usually wins, but the math gets closer. Personal-loan APRs in the 9-14% range and HELOC APRs in the 9-11% range are close enough that closing costs and approval friction tilt the decision toward personal loan unless you have meaningful equity (>40% equity in the home) AND time to wait.\n\n$35,000 to $80,000. HELOC starts winning if you have the equity and time. The rate advantage compounds at this loan size. Closing costs (~$1,500-$3,000) amortise across the larger loan. Possible tax-deduction benefit if used for substantial home improvement.\n\nOver $80,000. HELOC or home equity loan wins almost always. Personal-loan amount caps and APR-amplification on the larger loan make secured financing materially cheaper.",
      },
      {
        h2: "The non-financial considerations",
        body:
          "Lien risk. A HELOC puts a second-position lien on your home. If you default, the lender can foreclose. Personal-loan default is bad for credit but doesn't touch the house. If you're risk-averse or job-secure-but-anxious, the personal loan's lack of lien may be worth a few percentage points of rate.\n\nTimeline. Personal loan in 1-3 days. HELOC in 30-45 days. If contractor pricing is rising or vendor deposits need to lock in this month, the timeline favours personal loan even at a higher rate.\n\nVariable vs fixed rate. HELOCs are usually variable. If interest rates rise during your draw period, your payment grows. A 2% rate hike on a $50,000 HELOC adds about $80 to monthly interest cost. Personal loans are fixed.\n\nFlexibility. HELOC is revolving: you can draw, repay, draw again as the remodel progresses. Personal loan is one-shot: take the full amount at origination and start repaying immediately. If you're doing the remodel in phases and don't know the final cost, the HELOC's revolving structure is genuinely useful.",
      },
      {
        h2: "Tax treatment",
        body:
          "HELOC and home equity loan interest may be tax-deductible if the funds are used to 'substantially improve' the home that secures the loan, per IRS rules under the Tax Cuts and Jobs Act.\n\nPersonal-loan interest is not deductible regardless of how the funds are used.\n\nThe deduction only matters if you itemise. After the TCJA increased the standard deduction, the majority of taxpayers no longer itemise. Run the math for your specific situation; for many filers, the headline deduction advantage of a HELOC isn't realised.",
      },
    ],
    faqs: [
      { q: "Can I take a personal loan AND a HELOC for the same remodel?", a: "Yes. Some homeowners use a personal loan for phase 1 (avoiding the 30-day wait) and a HELOC for phases 2-3 once it closes. Make sure your debt-to-income ratio accommodates both payments. The HELOC underwriter sees the personal loan on your credit report." },
      { q: "What credit score do I need for a HELOC?", a: "Most HELOC lenders want a FICO of 680+, debt-to-income under 43%, and at least 15-20% equity in the home. Personal loan minimums are looser (often 600+) but APRs are higher." },
      { q: "Should I use a contractor's financing offer instead?", a: "Usually no. Contractor financing typically runs 18-28% APR with deferred-interest trap risk, even when marketed as 'special rate'. A personal loan from a direct lender or a HELOC is almost always cheaper for the same borrower." },
      { q: "Does the remodel increase my home value enough to justify the loan?", a: "Kitchen remodels typically recover 70-80% of their cost in home value at resale, per the National Association of Realtors' Cost vs Value report. The rest is consumption (you enjoyed the better kitchen). Don't expect 100% recovery; price the financing decision on cash flow, not anticipated home appreciation." },
    ],
    relatedSlugs: [
      "compare-personal-loan-offers",
      "consolidate-credit-card-debt-personal-loan",
    ],
    toolLinks: [
      { label: "Home improvement loans", href: "/loans/home-improvement" },
      { label: "Personal loan vs HELOC", href: "/compare/personal-loan-vs-heloc" },
      { label: "Loan payment calculator", href: "/calculators/loan-payment" },
    ],
  },
];

export const guidesBySlug = Object.fromEntries(
  guides.map((g) => [g.slug, g])
) as Record<string, Guide>;

export const guideClusters: GuideCluster[] = [
  "Debt management",
  "Credit improvement",
  "Loan shopping",
  "Life events",
];

export function guidesInCluster(cluster: GuideCluster) {
  return guides.filter((g) => g.cluster === cluster);
}

/** Render-safe paragraph split for guide body text. */
export function paragraphsOf(body: string): string[] {
  return body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
}
