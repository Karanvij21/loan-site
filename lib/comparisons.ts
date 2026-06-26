/**
 * Comparison pages, high-intent SEO surface for "X vs Y" queries.
 *
 * Each entry powers `/compare/[slug]` with a side-by-side table,
 * a verdict, and FAQ. Schema markup is added in the route.
 */

export type ComparisonRow = {
  /** Attribute being compared (e.g., "APR range"). */
  k: string;
  /** Value for option A. */
  a: string;
  /** Value for option B. */
  b: string;
};

export type Comparison = {
  slug: string;
  /** Display headline, e.g., "Personal loan vs credit card". */
  h1: string;
  title: string;
  description: string;
  /** Display names for each side. */
  aName: string;
  bName: string;
  /** One-line intro / TL;DR sentence. */
  intro: string;
  /** Side-by-side rows shown in the table. */
  rows: ComparisonRow[];
  /** A short, named "winner" pick for each scenario. */
  verdicts: { scenario: string; pick: "a" | "b"; reason: string }[];
  faqs: { q: string; a: string }[];
};

export const comparisons: Record<string, Comparison> = {
  "personal-loan-vs-credit-card": {
    slug: "personal-loan-vs-credit-card",
    h1: "Personal loan vs credit card",
    title: "Personal Loan vs Credit Card: Which Is Cheaper in 2026?",
    description:
      "Side-by-side comparison of personal loans and credit cards: APR ranges, repayment structure, credit-score impact, and when each option costs less.",
    aName: "Personal loan",
    bName: "Credit card",
    intro:
      "Both move money into your hands fast, but the math diverges sharply once you carry a balance. A personal loan has a fixed APR and a defined payoff date; a credit card has a variable APR that compounds monthly and a minimum payment that can stretch repayment over decades.",
    rows: [
      { k: "Structure", a: "Fixed installment loan", b: "Revolving credit line" },
      { k: "APR range (typical)", a: "5.99% to 35.99%", b: "18% to 29%+" },
      { k: "APR type", a: "Fixed for the life of the loan", b: "Variable, tied to prime rate" },
      { k: "Loan amount", a: "$500 to $50,000", b: "Up to your credit limit" },
      { k: "Repayment", a: "Fixed monthly payment, defined payoff date", b: "Minimum payment, no payoff date" },
      { k: "Time to fund", a: "Next business day after acceptance", b: "Instant (existing card) or 7-10 days (new card)" },
      { k: "Credit check", a: "Soft inquiry at pre-qualification, hard at finalisation", b: "Hard inquiry to open a new card" },
      { k: "Origination fee", a: "0% to 8% of loan amount", b: "None (but may have annual fee)" },
      { k: "Rewards", a: "None", b: "Cash back, points, miles on purchases" },
      { k: "Best for", a: "Predictable payoff of an existing balance or one-time expense", b: "Short-term financing paid in full each month, or rewards on routine spend" },
    ],
    verdicts: [
      { scenario: "Consolidating $5,000+ of card debt", pick: "a", reason: "Single-digit personal-loan APRs can save thousands vs 22%+ card APRs if you actually pay off the loan on schedule." },
      { scenario: "Charging $500 you can repay this month", pick: "b", reason: "Pay in full before the statement closes and you owe nothing in interest. Card wins on convenience for short windows." },
      { scenario: "Financing a one-time $10,000 home repair", pick: "a", reason: "Fixed APR and defined term cost less and finish sooner than carrying a card balance at variable rates." },
      { scenario: "Routine monthly spending", pick: "b", reason: "If you pay statements in full, a rewards card with 0% effective APR plus cashback beats any loan." },
    ],
    faqs: [
      { q: "Will using a personal loan to pay off credit cards hurt my credit score?", a: "Usually no, and often it helps. The hard inquiry from the new loan and the new account dip your score a few points short-term. But paying down revolving balances drops your credit utilisation ratio, which is the second-largest factor in FICO scoring after payment history. Most consolidators see a net positive within 60-90 days." },
      { q: "What's the break-even point between a personal loan and a credit card?", a: "It depends on the APR spread and how fast you'd otherwise pay the card. Rule of thumb: if you'd carry the card balance for more than 12 months, and the personal loan APR is at least 3-5 points lower than the card APR, the personal loan saves money. Use our debt-payoff calculator to model both scenarios." },
      { q: "Can I use a balance-transfer card instead?", a: "Yes, and for some borrowers it's the cheapest option. A 0%-intro-APR balance-transfer card can beat a personal loan if you'll fully pay off the balance within the promo window (usually 15-21 months) and don't trigger deferred-interest billing. Once the promo ends, the card's APR usually reverts to 20%+." },
      { q: "Does a personal loan stay on my credit report?", a: "Yes. It shows up as an installment trade line for the life of the loan, plus 10 years after closure. Each on-time payment builds positive payment history; a missed payment damages it. Credit cards show as revolving trade lines and behave similarly, but their reported utilisation can swing month to month." },
    ],
  },

  "personal-loan-vs-payday-loan": {
    slug: "personal-loan-vs-payday-loan",
    h1: "Personal loan vs payday loan",
    title: "Personal Loan vs Payday Loan: APRs, Risks & Alternatives (2026)",
    description:
      "Why a personal loan is almost always cheaper and safer than a payday loan. APR comparisons, repayment structure, and consumer-protection differences.",
    aName: "Personal loan",
    bName: "Payday loan",
    intro:
      "A payday loan is almost never the cheapest option. Personal loans cap out at 35.99% APR in most states and run on multi-month installments; payday loans routinely run 300%+ effective APR and demand full repayment on your next paycheque. We don't market payday loans here; this comparison exists so borrowers can see the difference clearly.",
    rows: [
      { k: "APR range", a: "5.99% to 35.99%", b: "300% to 700%+ effective APR" },
      { k: "Loan amount", a: "$100 to $50,000", b: "$50 to $1,000 typically" },
      { k: "Term", a: "3 to 72 months, fixed installments", b: "2 to 4 weeks, single balloon payment" },
      { k: "Credit check", a: "Soft inquiry to pre-qualify, then hard inquiry", b: "Often none (but uses banking data + employment)" },
      { k: "Collateral", a: "None (unsecured)", b: "Post-dated check or ACH authorisation" },
      { k: "Federal regulation", a: "TILA, FCRA, ECOA, MLA all apply", b: "Limited federal regulation, regulated mainly at state level" },
      { k: "State availability", a: "All 50 states (varies by lender)", b: "Banned outright in 18+ states; capped in many others" },
      { k: "Rollover risk", a: "None, loan amortises predictably", b: "Heavy. CFPB data shows 75%+ of payday loans are rolled over or re-borrowed" },
      { k: "Reports to credit bureaus", a: "Yes (helps build credit with on-time payments)", b: "Usually no (so doesn't help score), but defaults can be sent to collections and reported" },
    ],
    verdicts: [
      { scenario: "Any emergency you can pay off in 3-12 months", pick: "a", reason: "Even at the 35.99% APR ceiling, a personal loan is roughly 1/10th the cost of a payday loan over the same repayment window." },
      { scenario: "Need $300 by Friday and have nothing else", pick: "a", reason: "Our emergency-loan partners typically respond within minutes and fund the next business day. A short-term personal installment loan is the right product even for small amounts." },
      { scenario: "You're considering a payday loan", pick: "a", reason: "Check the personal-loan alternative first. If denied, look at credit-union PALs (Payday Alternative Loans, capped at 28% APR) or non-profit hardship programs before going payday." },
    ],
    faqs: [
      { q: "Why is a payday loan's APR so much higher?", a: "Two reasons. First, payday loans charge a flat fee (typically $15-$30 per $100 borrowed) for a 14-day loan; annualise that and you get triple-digit APRs. Second, the rollover model, where borrowers pay another fee to extend the loan, can push the effective APR over 700% if a borrower can't pay off the original loan in two weeks." },
      { q: "What states have banned payday loans?", a: "As of recent CFPB and state-by-state data, payday loans are effectively banned in NY, NJ, CT, MA, MD, NC, PA, VT, AZ, AR, GA, NM, WV, DC, and capped to non-economic rates in IL, CO, MT, NH, OR, OH, NE, SD, NV (effective 2026), and others. Lender lists are updated frequently; check your state regulator for current status." },
      { q: "Are payday alternative loans (PALs) a better option?", a: "Yes, if you qualify. Federal credit unions can offer Payday Alternative Loans capped at 28% APR with $200-$2,000 amounts and 1-12 month terms. The catch is you must be a credit-union member (often 30+ days) to apply." },
      { q: "Can I get a personal loan with no credit?", a: "Some lenders in our network underwrite using income and bank-transaction data alongside credit. Approval is not guaranteed, but a personal loan attempt has more upside and less downside than walking into a payday lender." },
    ],
  },

  "personal-loan-vs-heloc": {
    slug: "personal-loan-vs-heloc",
    h1: "Personal loan vs HELOC",
    title: "Personal Loan vs HELOC: Which Is Better for Home Projects? (2026)",
    description:
      "Compare unsecured personal loans to home equity lines of credit. APRs, fees, closing time, lien risk, and when each option wins for home-improvement financing.",
    aName: "Personal loan",
    bName: "HELOC",
    intro:
      "Both can fund a home-improvement project. A personal loan is unsecured, fast, and predictable; a HELOC is secured by your home, usually cheaper per dollar, but takes weeks to close and puts your home on the line if you can't repay.",
    rows: [
      { k: "Collateral", a: "Unsecured (none)", b: "Secured by home equity" },
      { k: "APR range (typical)", a: "5.99% to 35.99% fixed", b: "8% to 12% variable" },
      { k: "Loan amount", a: "$500 to $50,000", b: "Up to ~85% of home equity (often $50k-$250k+)" },
      { k: "Time to fund", a: "Next business day", b: "30-45 days from application to close" },
      { k: "Closing costs", a: "0%-8% origination, no third-party costs", b: "2%-5% in appraisal, title, recording, and closing fees" },
      { k: "Repayment", a: "Fixed monthly installments, defined term", b: "Interest-only draw period, then amortising repayment" },
      { k: "Lien on property", a: "None", b: "Yes, second-position lien" },
      { k: "Tax deductibility", a: "Not deductible", b: "Interest may be deductible if used to substantially improve the home (consult tax pro)" },
      { k: "Best for", a: "Speed, smaller projects, borrowers with no equity", b: "Large projects ($50k+) by homeowners with significant equity who can wait" },
    ],
    verdicts: [
      { scenario: "$15,000 kitchen refresh, you want to start next week", pick: "a", reason: "Personal loan funds in days, no appraisal, no lien. The APR is higher but the project starts on time." },
      { scenario: "$80,000 whole-house renovation, no rush", pick: "b", reason: "HELOC's lower APR more than offsets closing costs on big projects. Possible tax deduction adds margin. Worth waiting 30+ days." },
      { scenario: "First-time homeowner with little equity", pick: "a", reason: "A HELOC needs equity you don't yet have. Personal loan underwrites to credit and income only." },
      { scenario: "You'd panic if a future job loss put your house at risk", pick: "a", reason: "HELOCs can be frozen by the lender and worst-case lead to foreclosure. Personal-loan default is bad for credit but doesn't touch the house." },
    ],
    faqs: [
      { q: "Can I get a HELOC if I just bought my home?", a: "Usually not for the first 6-12 months. Most lenders want to see established equity. Many also require at least 15%-20% equity before they'll lend." },
      { q: "Is a home equity loan different from a HELOC?", a: "Yes. A home equity loan is a lump-sum installment loan secured by your home equity, closer in shape to a personal loan but secured and cheaper. A HELOC is a revolving credit line you can draw from. Both put a lien on the home." },
      { q: "What credit score do I need for a HELOC?", a: "Most HELOC lenders want a FICO of 680+, a debt-to-income ratio under 43%, and at least 15-20% equity. Personal-loan minimums are looser (often 600+ and no DTI cap beyond 50%)." },
      { q: "Can I use a personal loan and a HELOC together?", a: "Yes. Some borrowers use a personal loan for the immediate phase of work (avoiding the wait) and a HELOC to fund the rest once it closes. Make sure your DTI accommodates both payments." },
    ],
  },

  "personal-loan-vs-401k-loan": {
    slug: "personal-loan-vs-401k-loan",
    h1: "Personal loan vs 401(k) loan",
    title: "Personal Loan vs 401(k) Loan: True Costs Compared (2026)",
    description:
      "A 401(k) loan looks free because the interest goes back to you. Why that's misleading once you factor in lost market growth, the leave-job risk, and tax exposure.",
    aName: "Personal loan",
    bName: "401(k) loan",
    intro:
      "A 401(k) loan looks attractive because the interest rate is low and the payments go back into your own account. Once you factor in the market returns you forgo while the money is out, the if-you-leave-your-job balloon payment, and the tax exposure on default, the math usually shifts.",
    rows: [
      { k: "APR / cost", a: "5.99% to 35.99%, paid to lender", b: "Prime + 1-2%, paid back to your own 401(k)" },
      { k: "Loan amount", a: "$500 to $50,000", b: "Up to 50% of vested balance, max $50,000" },
      { k: "Credit check", a: "Yes (soft → hard)", b: "None (it's your own money)" },
      { k: "Time to fund", a: "Next business day", b: "1-3 weeks depending on plan administrator" },
      { k: "Effect on credit score", a: "New trade line, on-time payments build credit", b: "None, not reported to credit bureaus" },
      { k: "Opportunity cost", a: "None (your investments keep compounding)", b: "Borrowed funds are out of the market, missing returns" },
      { k: "Leave-employer risk", a: "None, loan continues normally", b: "Loan typically due in full by the next tax-filing deadline; default = taxable distribution + 10% penalty if under 59½" },
      { k: "Tax treatment", a: "No tax impact (it's a loan)", b: "No tax impact if repaid; default triggers ordinary income tax + 10% penalty" },
    ],
    verdicts: [
      { scenario: "You're confident you'll stay at your employer through the loan term", pick: "b", reason: "If you're sure you won't leave or be laid off, the 'interest paid to yourself' math is genuinely attractive, especially for small short-term needs." },
      { scenario: "Job security is uncertain or you might change employers", pick: "a", reason: "The leave-job balloon payment is the biggest 401(k) loan trap. A personal loan continues normally regardless of employment changes." },
      { scenario: "You'd skip future 401(k) contributions to repay the loan", pick: "a", reason: "Pausing contributions during repayment forfeits employer match, typically the highest-return investment available to you. Don't let a 401(k) loan crowd out the match." },
      { scenario: "Funding a long-term need (debt consolidation, home repair)", pick: "a", reason: "Spread the cost over 3-5 years without raiding retirement. Opportunity cost on 5 years out of the market is real." },
    ],
    faqs: [
      { q: "What's the real cost of a 401(k) loan?", a: "It's not the interest rate (you pay that to yourself). It's the foregone market growth on the money while it's out of the account, plus the catastrophic tax exposure if you leave your job before repayment. A loan of $20,000 out for 4 years at an 8% missed return costs roughly $7,200 in unrealised compounding." },
      { q: "Does my employer have to offer a 401(k) loan?", a: "No. Plan sponsors choose whether to allow loans. Roughly 80% of plans permit them, but check your Summary Plan Description before counting on one." },
      { q: "Can I borrow from a Roth IRA instead?", a: "There's no formal Roth-IRA loan, but you can withdraw your contributions (not earnings) at any time without tax or penalty. The 60-day rollover rule can also function as a short-term loan window. The trade-off is the same opportunity cost on the missing balance." },
      { q: "What happens if I leave my job with an outstanding 401(k) loan?", a: "Under current IRS rules, you have until the due date of your federal tax return (with extensions) for the year you left to repay the balance in full. If you don't, the outstanding balance is treated as a taxable distribution. You owe ordinary income tax on the full amount, plus a 10% early-withdrawal penalty if you're under 59½." },
    ],
  },

  "personal-loan-vs-balance-transfer": {
    slug: "personal-loan-vs-balance-transfer",
    h1: "Personal loan vs balance transfer card",
    title: "Personal Loan vs Balance Transfer Card: Which Pays Off Debt Faster? (2026)",
    description:
      "When a 0% balance transfer beats a personal loan, when the math flips, and how to avoid the deferred-interest trap that erases the promo benefit.",
    aName: "Personal loan",
    bName: "Balance transfer card",
    intro:
      "Both can consolidate credit-card debt. A 0% balance transfer card is cheaper if (and only if) you fully pay off the balance within the promotional window. Miss the window, and the card's regular APR, usually 20%+, applies to the remaining balance going forward.",
    rows: [
      { k: "Interest cost", a: "Fixed APR 5.99% to 35.99% for the life of the loan", b: "0% for 15-21 months, then 18%-29%+" },
      { k: "Transfer fee", a: "None (origination fee 0%-8% rolled into APR)", b: "3%-5% of transferred amount, upfront" },
      { k: "Loan amount", a: "$500 to $50,000", b: "Up to credit limit of the new card (often $5k-$25k)" },
      { k: "Repayment structure", a: "Fixed monthly payment, defined payoff date", b: "Minimum payment only; no enforced payoff date" },
      { k: "Discipline required", a: "Low, payments are set", b: "High, you must pay off in full before promo ends" },
      { k: "Credit check", a: "Soft → hard inquiry", b: "Hard inquiry for new card" },
      { k: "Risk if you miss the promo deadline", a: "None, APR doesn't change", b: "Remaining balance reverts to the card's regular APR (20%+)" },
      { k: "Best for", a: "Larger balances or borrowers who want a defined payoff date", b: "Smaller balances ($1k-$10k) you'll fully pay off in 12-18 months" },
    ],
    verdicts: [
      { scenario: "$5,000 card balance you can pay off in 12 months", pick: "b", reason: "Even with the 3-5% transfer fee, 0% interest for a year beats any personal-loan APR. Set autopay to clear it before the promo ends." },
      { scenario: "$15,000 balance, realistic payoff in 36-48 months", pick: "a", reason: "You'd never pay off $15k in a balance-transfer window. Lock in a fixed APR and a defined term so the balance actually shrinks." },
      { scenario: "Tendency to add new charges to credit cards", pick: "a", reason: "Personal loans don't tempt you with available credit. Once the loan funds, the consolidated balance is gone, no spending temptation on the new card." },
      { scenario: "Want predictable monthly payment", pick: "a", reason: "Balance-transfer minimum payments fluctuate. A personal loan's fixed payment is the same every month, making budgeting straightforward." },
    ],
    faqs: [
      { q: "Is 0% balance transfer really 0%?", a: "0% interest, yes, usually for 15 to 21 months on the transferred amount. There's almost always a 3-5% upfront balance-transfer fee, which functions like an origination fee. After the promo, the regular card APR applies going forward (not retroactively, unless it's a deferred-interest deal, read the fine print)." },
      { q: "What's deferred interest vs intro APR?", a: "An intro APR offer (the typical balance-transfer card) charges no interest during the promo. A deferred-interest offer (common on store cards and dental/medical promotions) calculates interest from day one and adds it all retroactively if you don't pay off in full by the deadline. Deferred-interest is dangerous; intro APR is not." },
      { q: "Will applying for a balance-transfer card hurt my credit score?", a: "Short-term, the hard inquiry costs a few points, and the new account lowers your average age of accounts. Mid-term, opening a new card raises your total credit limit, which lowers your utilisation ratio, usually a net positive for the score." },
      { q: "Can I do both?", a: "Yes. Some borrowers use a balance transfer for a portion they're confident they can pay within the promo and a personal loan for the rest with a longer payoff window. It's more complex but optimises for the lowest blended cost." },
    ],
  },

  "secured-vs-unsecured-loan": {
    slug: "secured-vs-unsecured-loan",
    h1: "Secured vs unsecured loan",
    title: "Secured vs Unsecured Loan: APRs, Risks & When Each Wins (2026)",
    description:
      "What collateral means for a loan, how it affects APR, and the trade-off between cheaper rates and putting an asset at risk.",
    aName: "Secured loan",
    bName: "Unsecured loan",
    intro:
      "A secured loan is backed by collateral, an asset the lender can seize on default. An unsecured loan is backed only by your promise to repay. Secured loans usually cost less, but the downside if you can't pay is concrete and physical, not just a credit-score hit.",
    rows: [
      { k: "Collateral required", a: "Yes (car, home, savings account, etc.)", b: "No" },
      { k: "APR range (typical)", a: "Often 3-12% lower than unsecured for the same borrower", b: "Higher to compensate for lack of collateral" },
      { k: "Common examples", a: "Mortgage, auto loan, HELOC, pawn loan, secured personal loan, share-secured loan", b: "Personal loan, credit card, student loan" },
      { k: "Loan amount", a: "Often 50%-85% of collateral value", b: "Based on credit + income, typically up to $50,000 for personal loans" },
      { k: "Default consequence", a: "Lender repossesses/forecloses on collateral", b: "Collection, credit damage, possible lawsuit and wage garnishment" },
      { k: "Credit-score impact", a: "Similar reporting; on-time builds credit, default damages it", b: "Same, both report to bureaus" },
      { k: "Underwriting", a: "Collateral value reduces lender risk → easier approval for marginal credit", b: "Credit, income, and DTI drive approval" },
      { k: "Best for", a: "Large amounts at the lowest possible APR, or borrowers with thin credit but solid collateral", b: "Speed and flexibility, no asset on the line" },
    ],
    verdicts: [
      { scenario: "Buying a car or a house", pick: "a", reason: "These products are virtually always secured and at significantly lower APRs than unsecured alternatives." },
      { scenario: "Small short-term expense, want speed", pick: "b", reason: "Unsecured personal loans fund in days; secured loans require asset valuation that adds time." },
      { scenario: "Thin or bad credit, but you own a paid-off car", pick: "a", reason: "A secured personal loan or auto-equity loan can unlock cheaper APRs than an unsecured offer for the same borrower. Trade-off: you lose the car if you default." },
      { scenario: "Worried about job stability or income volatility", pick: "b", reason: "Defaulting on unsecured debt is a credit-and-collection problem. Defaulting on a secured loan can mean losing the asset itself. If you'd be devastated to lose the collateral, the lower APR isn't worth it." },
    ],
    faqs: [
      { q: "Is a credit card secured or unsecured?", a: "Most are unsecured. A secured credit card requires a cash deposit equal to (or near) your credit limit; it's designed for credit rebuilding and behaves like an unsecured card once you've established history. Standard rewards cards are unsecured." },
      { q: "Can I get a secured personal loan?", a: "Yes. Some lenders offer secured personal loans backed by a vehicle, savings account, or CD. APRs are usually meaningfully lower than unsecured offers. Common with credit unions (share-secured loans against your own savings)." },
      { q: "What happens if the collateral value drops below the loan balance?", a: "You're now 'underwater'. The lender can still foreclose/repossess and pursue you for the deficiency in many states. For unsecured loans, there's no collateral risk, but the higher APR essentially prices that lender comfort in." },
      { q: "Are student loans secured?", a: "Federal student loans are unsecured. Most private student loans are also unsecured. Defaulting on federal student loans triggers wage garnishment and tax-refund offset under separate statutes; defaulting on private student loans triggers standard collection processes." },
    ],
  },

  "installment-vs-revolving-credit": {
    slug: "installment-vs-revolving-credit",
    h1: "Installment vs revolving credit",
    title: "Installment vs Revolving Credit: Score & Cost Compared (2026)",
    description:
      "The two main credit structures explained: how installment loans (personal, auto, mortgage) differ from revolving accounts (credit cards, HELOC) on cost, payment, and credit-score impact.",
    aName: "Installment credit",
    bName: "Revolving credit",
    intro:
      "Installment credit is borrowed once, repaid in fixed monthly payments over a defined term. Revolving credit lets you borrow up to a limit, repay any portion, and borrow again. Most consumers carry both. The mix itself contributes to your credit score under the 'credit mix' factor.",
    rows: [
      { k: "Examples", a: "Personal loan, auto loan, mortgage, student loan", b: "Credit card, HELOC, retail charge card" },
      { k: "Amount borrowed", a: "Lump sum, decided at origination", b: "Flexible up to credit limit, drawn as needed" },
      { k: "APR type", a: "Usually fixed for life of loan", b: "Usually variable, tied to prime rate" },
      { k: "Payment", a: "Fixed monthly installment", b: "Minimum payment varies with balance" },
      { k: "Payoff date", a: "Defined at origination", b: "Open-ended" },
      { k: "Reported to credit bureaus", a: "Yes, open balance and original loan amount", b: "Yes, current balance and credit limit (which drives utilisation)" },
      { k: "Effect of paying down balance", a: "Balance shrinks predictably; payment stays the same", b: "Lowers credit utilisation ratio, which usually raises your score" },
      { k: "Effect of closing the account", a: "Closed account stays on report 10 years (positive history continues to count)", b: "Reduces total available credit → can raise utilisation and lower score" },
    ],
    verdicts: [
      { scenario: "Want predictable monthly budgeting", pick: "a", reason: "Fixed payment, defined term. You know exactly when you'll be debt-free." },
      { scenario: "Need flexible access to money over time", pick: "b", reason: "Draw and repay as needed within the credit limit. Right structure for variable cash-flow needs." },
      { scenario: "Optimising for credit score", pick: "a", reason: "Adding an installment loan diversifies credit mix and can help if you have only revolving accounts. The reverse also helps." },
      { scenario: "Carrying a large balance long-term", pick: "a", reason: "Installment loans have fixed APRs and force payoff. Revolving balances at variable APR can outlive you if you only pay the minimum." },
    ],
    faqs: [
      { q: "Which type of credit helps your score more?", a: "Having both helps more than either alone. FICO's 'credit mix' factor (10% of score) rewards diversity. The bigger lever in either category is on-time payments and (for revolving) keeping utilisation low, both factors that together account for ~65% of your score." },
      { q: "Does paying off an installment loan early hurt my score?", a: "Usually a small, temporary dip. Closing the loan removes the open trade line from the active mix and shortens average open-account age slightly. The trade-off is usually worth it, saving interest beats a few-point score variance you'll regain in a few months." },
      { q: "What's a revolving line of credit (LOC) vs a credit card?", a: "Mechanically very similar. A personal LOC is usually issued by a bank without a physical card, you draw funds into your checking account as needed and pay back over time. APRs sit between credit cards and personal loans. Less common today than they used to be." },
      { q: "How does credit utilisation work for installment loans?", a: "It usually doesn't. FICO and VantageScore look at utilisation almost exclusively on revolving accounts. Owing 80% of your original installment balance isn't penalised the way 80% credit-card utilisation is." },
    ],
  },

  "fixed-vs-variable-rate": {
    slug: "fixed-vs-variable-rate",
    h1: "Fixed vs variable interest rate",
    title: "Fixed vs Variable Interest Rate: Which Is Better for Personal Loans? (2026)",
    description:
      "Fixed rates lock in your payment for the life of the loan. Variable rates move with the prime rate. Which suits which borrower, and why most personal loans are fixed.",
    aName: "Fixed rate",
    bName: "Variable rate",
    intro:
      "A fixed rate stays the same from the first payment to the last. A variable rate can change with the market, typically tracking the U.S. prime rate plus a margin. Each comes with a predictable trade-off between certainty and potential savings.",
    rows: [
      { k: "Rate behaviour", a: "Stays constant for life of loan", b: "Adjusts periodically with a benchmark (prime, SOFR)" },
      { k: "Monthly payment", a: "Same every month", b: "Can rise or fall over time" },
      { k: "Starting rate", a: "Usually slightly higher than initial variable rate", b: "Often lower at origination" },
      { k: "Best in a rising-rate environment", a: "Yes, you're insulated from increases", b: "No, your payment grows" },
      { k: "Best in a falling-rate environment", a: "No, you'd need to refinance to capture the lower rate", b: "Yes, payment shrinks automatically" },
      { k: "Common products", a: "Personal loans, auto loans, fixed mortgages", b: "HELOCs, credit cards, adjustable-rate mortgages" },
      { k: "Predictability", a: "Total interest known at signing", b: "Total interest depends on rate path" },
    ],
    verdicts: [
      { scenario: "Standard personal loan", pick: "a", reason: "Personal loans are almost always fixed. Take the certainty; it's why the product exists." },
      { scenario: "Short-term borrowing during stable or falling-rate periods", pick: "b", reason: "If repayment is short and you're confident rates won't rise, a lower starting variable rate can win." },
      { scenario: "Risk-averse borrower or fixed budget", pick: "a", reason: "Fixed rate matches a fixed monthly budget. No surprise payment increases ever." },
      { scenario: "Refinancing flexibility matters more than predictability", pick: "b", reason: "Variable rates often have lower prepayment friction, making refinancing easier if rates move." },
    ],
    faqs: [
      { q: "Are personal loans usually fixed or variable?", a: "Fixed. The U.S. personal-loan market is dominated by fixed-rate installment loans. Variable-rate personal loans exist but are uncommon. HELOCs, credit cards, and adjustable-rate mortgages are the main variable-rate consumer products." },
      { q: "What index do variable rates use?", a: "Most U.S. consumer variable rates track the prime rate or SOFR (Secured Overnight Financing Rate, which replaced LIBOR). The lender adds a margin (e.g., prime + 4%) that depends on the borrower's credit and the product." },
      { q: "How often does a variable rate change?", a: "Depends on the product. Credit cards reprice monthly with the prime rate. HELOCs typically reprice monthly. Adjustable-rate mortgages adjust on a defined schedule (usually after a fixed intro period of 5, 7, or 10 years, then annually)." },
      { q: "Can I switch from variable to fixed?", a: "Indirectly, by refinancing into a fixed-rate product. Some HELOCs offer a 'fix-the-rate' option that converts a portion of the outstanding balance to a fixed instalment within the same account." },
    ],
  },

  "personal-loan-vs-home-equity-loan": {
    slug: "personal-loan-vs-home-equity-loan",
    h1: "Personal loan vs home equity loan",
    title: "Personal Loan vs Home Equity Loan: Costs, Risk & When Each Wins (2026)",
    description:
      "Home equity loans price 4 to 8 points lower than personal loans, but they put your house on the line. Side-by-side: APR, closing costs, risk, tax treatment, and best-fit scenarios.",
    aName: "Personal loan",
    bName: "Home equity loan",
    intro:
      "Both are fixed installment loans with predictable monthly payments. The home equity loan typically wins on price (your house is collateral, so the lender risks less) but loses on flexibility, speed, and the size of the downside if you cannot pay. A home equity loan that defaults can mean foreclosure; a personal loan that defaults damages your credit but cannot take the house.",
    rows: [
      { k: "Collateral", a: "None (unsecured)", b: "Your home (secured)" },
      { k: "APR range (typical)", a: "5.99% to 35.99%", b: "7% to 12%" },
      { k: "Loan amount", a: "$100 to $50,000", b: "Up to 85% of home equity" },
      { k: "Term", a: "3 to 72 months", b: "5 to 30 years" },
      { k: "Closing costs", a: "$0 to 8% origination", b: "2% to 5% of loan amount, plus appraisal" },
      { k: "Time to fund", a: "Next business day", b: "4 to 8 weeks" },
      { k: "Worst-case risk if you default", a: "Credit damage and collections", b: "Foreclosure on your home" },
      { k: "Tax treatment", a: "Interest never deductible for personal use", b: "Interest may be deductible if used for substantial home improvement (post-TCJA)" },
      { k: "Closing cost recovered in", a: "Immediate (low or no fees)", b: "24 to 36 months of interest savings, typically" },
    ],
    verdicts: [
      { scenario: "Borrowing $30,000+ for a major home renovation", pick: "b", reason: "Lower APR and possible tax deduction make the closing-cost outlay worth it for large, long-term borrowing tied to the property." },
      { scenario: "Borrowing $5,000 for any non-home purpose", pick: "a", reason: "Closing costs alone on a home equity loan would eat the APR savings, and you would be securing a small debt with your house." },
      { scenario: "You need funds in under a week", pick: "a", reason: "Home equity loans require appraisal and underwriting; personal loans fund in days." },
      { scenario: "You worry about job security or future income volatility", pick: "a", reason: "An unsecured default damages credit. A secured default can cost you the house." },
    ],
    faqs: [
      { q: "Is a home equity loan the same as a HELOC?", a: "No. A home equity loan is a fixed-rate lump sum repaid in equal installments. A HELOC is a revolving line of credit with a variable rate. Both use your home as collateral, but the cash-flow profile and risk differ. See our separate personal-loan-vs-HELOC comparison for that side." },
      { q: "How much equity do I need?", a: "Most lenders require you to retain at least 15 to 20% equity in the home after the new loan. If your home is worth $400,000 and your mortgage balance is $250,000, you have $150,000 of equity; you might borrow up to about $90,000 to $120,000 depending on the lender's combined LTV ceiling." },
      { q: "Are home equity loan interest payments tax-deductible?", a: "Only if the loan is used to 'buy, build, or substantially improve' the home that secures the loan, per the Tax Cuts and Jobs Act (2017). Interest on funds used for debt consolidation, tuition, or other non-home purposes is not deductible. Consult a CPA on your specific use." },
      { q: "What credit score do I need?", a: "Home equity loans typically require a FICO of 660+ and a debt-to-income ratio under 43%. The best pricing usually requires a 720+ score." },
    ],
  },

  "personal-loan-vs-bnpl": {
    slug: "personal-loan-vs-bnpl",
    h1: "Personal loan vs Buy Now Pay Later (BNPL)",
    title: "Personal Loan vs BNPL: Costs, Credit Impact & Hidden Risks (2026)",
    description:
      "BNPL is interest-free if you pay on time, but late fees, deferred interest, and credit-report changes have shifted the math. Side-by-side with personal loans for purchase financing.",
    aName: "Personal loan",
    bName: "BNPL",
    intro:
      "Buy Now Pay Later splits a single purchase into 4 to 12 short installments, typically at 0% APR if you pay on time. Personal loans amortise a larger principal over 12 to 72 months at a stated APR. BNPL wins for small, single-store purchases you will repay quickly; personal loans win for anything larger, multi-merchant, or longer-term.",
    rows: [
      { k: "Structure", a: "Fixed installment loan", b: "Short-term installment plan, typically 4 payments over 6 weeks" },
      { k: "Loan amount", a: "$100 to $50,000", b: "$50 to $5,000 per purchase, lender-specific cap" },
      { k: "APR if paid on time", a: "5.99% to 35.99%", b: "0%" },
      { k: "APR if late", a: "5.99% to 35.99% (same)", b: "Deferred interest can retroactively apply 20% to 30% on the original purchase" },
      { k: "Credit check", a: "Soft pull at pre-qualification", b: "Soft pull (most providers); some hard pull for longer plans" },
      { k: "Credit-bureau reporting", a: "Reports as installment loan", b: "Increasingly reports to bureaus (Klarna, Affirm reporting changed in 2025)" },
      { k: "Where you can use it", a: "Any purpose (cash to your bank account)", b: "Only at participating merchants" },
      { k: "Late fees", a: "$15 to $39, capped by state law", b: "Up to $7 per missed payment per BNPL provider; sometimes more" },
      { k: "Best for", a: "Larger purchases, debt consolidation, multi-merchant spend", b: "A single sub-$500 purchase you will fully repay in 6 weeks" },
    ],
    verdicts: [
      { scenario: "Furniture or appliance under $1,500", pick: "b", reason: "0% APR over 6 weeks beats any loan interest, assuming you have the cash flow to pay on time." },
      { scenario: "Consolidating multiple BNPL plans", pick: "a", reason: "Stacking multiple BNPL plans is the modern equivalent of carrying multiple card minimums. A personal loan rolls them all into one payment." },
      { scenario: "$5,000+ purchase", pick: "a", reason: "Most BNPL caps below $5,000; personal loans price competitively at this size and amortise over a manageable term." },
      { scenario: "You routinely miss credit-card payment dates", pick: "a", reason: "Personal-loan late fees are capped and predictable. BNPL deferred-interest products can retroactively apply 20%+ APR on the original purchase price." },
    ],
    faqs: [
      { q: "Does BNPL affect my credit score?", a: "Increasingly yes. Klarna and Affirm now report most plans to TransUnion and Experian (as of 2025). On-time payments build positive history; missed payments are reported as delinquencies. Older 'pay in 4' plans often did not report; new plans usually do. Read the disclosure before signing." },
      { q: "What is deferred interest?", a: "Some BNPL plans (especially the 6, 12, or 24-month variety) are structured as 'deferred interest': the 0% promotional APR disappears retroactively if the balance is not paid in full by the promo end date. If you carry even $1 past that date, the original purchase price gets charged the post-promo APR (often 20%+) retroactive to the purchase date." },
      { q: "Can I get a BNPL plan with bad credit?", a: "The 'pay in 4' style plans are usually approved instantly on a soft pull with minimal underwriting. Longer plans require a hard pull and standard underwriting. Sub-580 FICO applicants often face denials on the longer plans." },
      { q: "How many BNPL plans is too many?", a: "Industry research suggests borrowers carrying 3+ active BNPL plans simultaneously are materially more likely to miss a payment. The CFPB has flagged 'BNPL stacking' as a 2025 priority enforcement area." },
    ],
  },

  "personal-loan-vs-pawn-loan": {
    slug: "personal-loan-vs-pawn-loan",
    h1: "Personal loan vs pawn loan",
    title: "Personal Loan vs Pawn Loan: APRs, Risk & When Each Makes Sense (2026)",
    description:
      "Pawn loans require no credit check but charge 100% to 200% APR and risk losing your item. Personal loans take longer to approve but cost a fraction. Side-by-side analysis.",
    aName: "Personal loan",
    bName: "Pawn loan",
    intro:
      "A pawn loan is a short-term cash advance against a physical item you surrender to the pawnbroker as collateral. No credit check, no income verification, no application beyond presenting the item. The trade-off is brutal pricing (effective APRs of 100% to 240%) and the risk of losing the item if you cannot repay within the typically 30 to 90-day window.",
    rows: [
      { k: "Collateral", a: "None (unsecured)", b: "Physical item (jewelry, electronics, tools, instruments)" },
      { k: "APR range", a: "5.99% to 35.99%", b: "100% to 240% effective APR (state-regulated)" },
      { k: "Loan amount", a: "$100 to $50,000", b: "25% to 60% of the item's resale value" },
      { k: "Term", a: "3 to 72 months", b: "30 to 90 days (renewable in some states)" },
      { k: "Credit check", a: "Soft pull at pre-qualification", b: "None" },
      { k: "Income verification", a: "Yes", b: "None" },
      { k: "Time to fund", a: "Next business day", b: "Same-day cash" },
      { k: "Worst case if you default", a: "Credit damage and collections", b: "Lose the item; no further credit damage" },
      { k: "Best for", a: "Most borrowers; cheaper and longer-term", b: "A 30-day cash bridge with no other access and an item the borrower can accept losing" },
    ],
    verdicts: [
      { scenario: "Any amount over $500 and any timeline over 30 days", pick: "a", reason: "Pawn-loan effective APRs make the math nearly always worse than a personal loan once the loan extends past one month." },
      { scenario: "No credit, no bank account, $200 needed today, item the borrower can afford to lose", pick: "b", reason: "Pawn loans are sometimes the only option for the deeply unbanked. Borrowers should treat them as a sale at a discount, not a loan." },
      { scenario: "Avoiding any credit-report impact", pick: "b", reason: "Pawn loans do not pull credit and do not report to bureaus. Personal loans appear on the report regardless of outcome." },
      { scenario: "Borrower has a sub-580 FICO and needs $1,500 for 60 days", pick: "a", reason: "Even subprime personal-loan APRs of 35.99% cost a fraction of pawn APRs over a 60-day window. Pre-qualify with a marketplace before pawning." },
    ],
    faqs: [
      { q: "Does a pawn loan affect my credit score?", a: "No. Pawn loans do not require a credit pull and are not reported to the three credit bureaus, whether you repay or forfeit the item. This is the main upside for borrowers with damaged credit or active collections." },
      { q: "What happens if I cannot repay?", a: "The pawnbroker keeps and sells the item. There is no further collection, no court judgment, and no credit-report mark. From the lender's perspective the loan is collateralised, so they have no need to pursue the borrower personally." },
      { q: "What is the typical pawn loan APR?", a: "Effective APRs vary by state law and item type. Common ranges: 10% per month (about 120% APR) in light-regulation states, 25% per month (about 300%) in heavy-pawn states like Florida and Georgia, capped at lower rates in California and a few others. Always compute the APR, not just the monthly fee." },
      { q: "Can I extend a pawn loan?", a: "In most states, yes. The borrower pays the accrued interest, the principal remains, and the term extends another 30 or 60 days. Repeated extensions are how a 30-day $200 loan becomes a $300 debt. State laws cap the total number of extensions in some jurisdictions." },
    ],
  },

  "personal-loan-vs-cash-advance": {
    slug: "personal-loan-vs-cash-advance",
    h1: "Personal loan vs credit card cash advance",
    title: "Personal Loan vs Cash Advance: APRs, Fees & Cheaper Alternatives (2026)",
    description:
      "Cash advances charge a transaction fee, a higher APR than the card's purchase APR, and accrue interest from day one. Personal loans cost a fraction. Side-by-side breakdown.",
    aName: "Personal loan",
    bName: "Cash advance",
    intro:
      "Pulling cash from a credit card is one of the most expensive ways to borrow. The transaction fee is 3% to 5% of the amount, the cash-advance APR is typically 4 to 6 points higher than the card's purchase APR, and interest accrues from the moment of withdrawal with no grace period. Personal loans price-out one-tenth the cost in most situations.",
    rows: [
      { k: "Structure", a: "Fixed installment loan", b: "Revolving balance on the card" },
      { k: "APR", a: "5.99% to 35.99%", b: "Typically 25% to 30% (cash-advance APR, separate from purchase APR)" },
      { k: "Grace period", a: "30 to 45 days before first payment", b: "None. Interest accrues from day of withdrawal" },
      { k: "Transaction fee", a: "0% to 8% origination at loan funding", b: "3% to 5% of amount, or $10 minimum, per withdrawal" },
      { k: "Amount", a: "$100 to $50,000", b: "Up to your cash-advance limit (usually a fraction of the credit limit)" },
      { k: "Time to fund", a: "Next business day", b: "Instant at ATM or bank teller" },
      { k: "Reports as", a: "New installment trade line", b: "Higher utilisation on existing card; may flag the account" },
      { k: "Best for", a: "Almost every situation over $500", b: "Sub-$300 emergency with no other access in the next 24 hours" },
    ],
    verdicts: [
      { scenario: "Any amount $500 or larger over any timeline", pick: "a", reason: "Personal-loan total cost is materially lower because of the grace period and the lower APR; the transaction-fee math alone makes cash advances expensive." },
      { scenario: "Need $200 in cash tonight, no other access", pick: "b", reason: "Cash advance is instant. Repay within 14 days to minimise interest exposure, then pursue a personal loan if the cash need recurs." },
      { scenario: "Using a cash advance to pay another credit-card minimum", pick: "a", reason: "This pattern signals distress. A debt-consolidation personal loan addresses the root cause; rolling cash advances delays the reckoning at higher cost." },
      { scenario: "Want to keep credit-card utilisation low for an upcoming mortgage application", pick: "a", reason: "A personal loan does not raise credit-card utilisation. Cash advances do, and the spike at the wrong moment hurts mortgage pricing." },
    ],
    faqs: [
      { q: "Why does a cash advance APR differ from a purchase APR?", a: "Card issuers price cash advances as higher-risk borrowing because the cash is not tied to a recoverable purchase, the borrower has shown a preference for liquidity, and historic default rates on cash advances exceed default rates on purchase balances. The premium runs 4 to 6 percentage points above the purchase APR for most cards." },
      { q: "Does a cash advance hurt my credit score?", a: "Indirectly. The transaction itself is not reported separately, but the increased balance raises the card's utilisation ratio, which is the second-largest factor in FICO scoring. A $1,500 cash advance on a $5,000-limit card pushes utilisation past 30%, typically dropping the score 15 to 40 points until repaid." },
      { q: "Are there cheaper alternatives to a cash advance?", a: "Yes, in this priority order: small personal loan from a credit union or marketplace, federal credit-union Payday Alternative Loan (capped at 28% APR), borrowing from family with a written note, hardship withdrawal from a 401(k) if the situation qualifies, and payday lender as the last resort (still cheaper than the typical cash-advance/rollover cycle when factoring in cash-advance fees and lost grace period)." },
      { q: "Is there a daily cash-advance limit?", a: "Yes. Most cards cap cash advances at 20% to 50% of the total credit limit, with a per-day ATM limit of $300 to $1,000. The lower per-day limit is set by the issuing bank for fraud control; the credit limit cap is contractual." },
    ],
  },

  "personal-loan-vs-title-loan": {
    slug: "personal-loan-vs-title-loan",
    h1: "Personal loan vs car title loan",
    title: "Personal Loan vs Car Title Loan: APRs, Repossession Risk & Alternatives (2026)",
    description:
      "Title loans run 200% to 300% effective APR and put your vehicle at risk. Personal loans cost a fraction. Side-by-side on price, risk, and consumer-protection differences.",
    aName: "Personal loan",
    bName: "Car title loan",
    intro:
      "A car title loan is a small-dollar, short-term loan secured by the borrower's vehicle title. No credit check. Same-day cash. Effective APRs typically run 200% to 300% and the vehicle can be repossessed on a single missed payment. We do not market title loans; this comparison exists so borrowers understand the alternative cost.",
    rows: [
      { k: "Collateral", a: "None (unsecured)", b: "Vehicle title (lender holds title; borrower keeps and drives the car)" },
      { k: "APR range", a: "5.99% to 35.99%", b: "200% to 300% effective APR (state-regulated)" },
      { k: "Loan amount", a: "$100 to $50,000", b: "25% to 50% of the vehicle's wholesale value" },
      { k: "Term", a: "3 to 72 months", b: "15 to 30 days, often rolled over" },
      { k: "Credit check", a: "Soft pull at pre-qualification", b: "None or minimal" },
      { k: "Time to fund", a: "Next business day", b: "Same-day cash" },
      { k: "Worst case if you default", a: "Credit damage and collections", b: "Vehicle repossession, often within days of missed payment" },
      { k: "State availability", a: "All 50 states", b: "Banned in 30+ states; capped or restricted in many others" },
      { k: "CFPB classification", a: "Standard installment loan", b: "High-cost small-dollar loan; CFPB-flagged consumer-protection priority" },
    ],
    verdicts: [
      { scenario: "Any amount, any timeline", pick: "a", reason: "Title-loan effective APRs and rollover dynamics make them a net wealth transfer from borrower to lender. A personal loan, even at the 35.99% cap, costs a fraction." },
      { scenario: "Sub-580 FICO, $1,000 needed in 24 hours, vehicle is borrower's only transportation", pick: "a", reason: "The risk of losing the only vehicle is catastrophic. Subprime personal loans and credit-union PALs exist for this need; pursue those before a title loan." },
      { scenario: "Borrower's only transportation and the loan term is 14 days", pick: "a", reason: "CFPB data shows the average title-loan borrower renews 8 times before payoff or repossession. The 14-day plan is rarely 14 days in practice." },
      { scenario: "Avoiding any credit-report impact", pick: "b", reason: "Title loans do not pull credit and do not report. This is the only legitimate use case, and only if losing the vehicle is acceptable." },
    ],
    faqs: [
      { q: "How fast can a title-loan lender repossess my car?", a: "In most states, the lender can begin repossession within 1 to 10 days of a missed payment, with no court process required. The lender holds the title, so they only need to retrieve the vehicle; in some states they can charge for the recovery, adding to the deficiency balance." },
      { q: "What states ban title loans?", a: "About 30 states either ban title loans outright or cap APRs at levels that make the product economically unviable. The remaining states allow them, with varying consumer-protection requirements (right to cure, rollover limits, deficiency restrictions). Check your state's regulator before signing." },
      { q: "If they repossess the car, do I still owe the rest?", a: "Depends on state law. In about half of states, the lender sells the car at auction and any deficit between the sale price and the loan balance is the borrower's responsibility (the 'deficiency balance'). In the other half, repossession satisfies the debt. Read the contract before signing." },
      { q: "What are cheaper alternatives?", a: "Subprime personal loans (capped at 35.99% APR in most states), credit-union PALs (capped at 28% APR, $200 to $2,000), CDFI personal loans, employer hardship advances, and family loans with written notes. All cost a fraction of title-loan APRs." },
    ],
  },

  "personal-loan-vs-family-loan": {
    slug: "personal-loan-vs-family-loan",
    h1: "Personal loan vs borrowing from family",
    title: "Personal Loan vs Family Loan: Pricing, Tax & Relationship Cost (2026)",
    description:
      "Family loans can be interest-free if structured at the IRS Applicable Federal Rate, but they carry relationship risk and tax pitfalls. Side-by-side with a personal loan.",
    aName: "Personal loan",
    bName: "Family loan",
    intro:
      "Family loans are usually the cheapest pre-tax option (the IRS Applicable Federal Rate runs well below market personal-loan APRs) and the most expensive emotional one. Personal loans cost more in dollars but cost nothing in the relationship. The right answer depends on the size of the loan, the durability of the relationship, and how disciplined both sides are about treating the arrangement as a loan rather than a gift.",
    rows: [
      { k: "Interest rate", a: "5.99% to 35.99%", b: "0% to AFR (currently 4 to 5% short-term, 4 to 5% mid-term)" },
      { k: "Underwriting", a: "Credit + income + DTI checks", b: "None (or whatever the family agrees to)" },
      { k: "Time to fund", a: "Next business day", b: "As fast as the family member transfers it" },
      { k: "Documentation", a: "Loan agreement, promissory note, TILA disclosures", b: "Should be a written promissory note (often skipped, often regretted)" },
      { k: "Credit-bureau reporting", a: "Yes, builds credit history", b: "No, neutral effect on credit" },
      { k: "Default consequences", a: "Credit damage, collections, possible lawsuit", b: "Relationship damage, family-event tension, possible lawsuit if formalised" },
      { k: "Tax consequences", a: "Borrower: none. Lender: none.", b: "Loans over $10,000 below AFR can trigger 'imputed interest' rules; gifts over annual exclusion ($18,000 in 2026) trigger gift-tax reporting" },
      { k: "Best for", a: "Most borrowers, especially when the alternative is asking family", b: "Large amounts ($25k+) between disciplined relatives with documentation" },
    ],
    verdicts: [
      { scenario: "$3,000 to consolidate cards, multiple relatives offering", pick: "a", reason: "Save the relationship. Personal-loan total cost at this size is small; the optionality of paying a stranger has real value." },
      { scenario: "$50,000 down payment from parents at AFR, written note, both sides disciplined", pick: "b", reason: "The dollar savings vs a personal loan are real and the family is documenting properly. Best-case use of a family loan." },
      { scenario: "You have missed payments to family in the past", pick: "a", reason: "Past behaviour predicts future behaviour. If a family loan is likely to default, do not start a second cycle of relationship damage." },
      { scenario: "Family member has the cash but expects you to pay back with interest", pick: "a", reason: "If interest is going to be charged anyway, paying it to a third party preserves the family relationship and builds the borrower's credit history at the same time." },
    ],
    faqs: [
      { q: "What is the IRS Applicable Federal Rate (AFR)?", a: "The AFR is the minimum interest rate the IRS requires on private loans to avoid the loan being treated as a partial gift. Three tiers: short-term (under 3 years), mid-term (3 to 9 years), and long-term (over 9 years). The IRS publishes the rates monthly. As of mid-2026, AFRs are roughly 4 to 5% across tiers." },
      { q: "Do I need to charge interest on a family loan?", a: "Not strictly. Loans under $10,000 can be interest-free with no tax consequences. Loans of $10,000 to $100,000 below AFR trigger 'imputed interest' rules where the IRS treats the foregone interest as taxable income to the lender, even if no money changed hands. Loans over $100,000 are stricter still. Charge at least AFR to avoid the headache." },
      { q: "Should we put it in writing?", a: "Yes, always. A simple promissory note with the principal, interest rate, payment schedule, and default terms protects both sides. It also makes the arrangement feel real, which improves repayment discipline. Templates from LegalZoom or Rocket Lawyer cost under $50." },
      { q: "What if the family member dies before I repay?", a: "The loan becomes an asset of the lender's estate. The executor must collect from the borrower as part of probate. This is a common reason to formalise the loan: an undocumented family loan can become a contested estate matter, where heirs disagree about whether it was a loan or a gift." },
    ],
  },

  "personal-loan-vs-credit-union-loan": {
    slug: "personal-loan-vs-credit-union-loan",
    h1: "Marketplace personal loan vs credit union loan",
    title: "Marketplace Personal Loan vs Credit Union Loan: Where Each Wins in 2026",
    description:
      "Credit unions price 2 to 4 points lower than online marketplaces but membership and underwriting are slower. Side-by-side on cost, speed, and approval odds.",
    aName: "Marketplace personal loan",
    bName: "Credit union loan",
    intro:
      "Both deliver fixed-rate, fixed-term unsecured personal loans. Credit unions are member-owned, not-for-profit, and federally capped at 18% APR (28% for short-term Payday Alternative Loans). Marketplaces are for-profit aggregators that route applications across many lenders. Pricing usually favours credit unions; speed and convenience favour marketplaces.",
    rows: [
      { k: "APR cap", a: "Lender-set; up to 35.99% in most states", b: "18% federal cap for federal credit unions; 28% APR for PALs" },
      { k: "Typical pricing for 680 FICO", a: "12% to 18%", b: "9% to 14%" },
      { k: "Loan amount", a: "$100 to $50,000", b: "$200 to $50,000 (varies by CU)" },
      { k: "Membership requirement", a: "None", b: "Yes; eligibility is location, employer, family, or community based" },
      { k: "Pre-qualification", a: "Soft-pull, results in minutes", b: "Often requires membership first, then full application" },
      { k: "Time to fund", a: "Next business day", b: "1 to 5 business days, often longer if member is new" },
      { k: "Approval flexibility", a: "Wide; many lenders, varied underwriting", b: "Narrower; CU underwriting is conservative but values member relationship" },
      { k: "Best for", a: "Speed, optionality, applicants who want to compare 3-5 lenders at once", b: "Lowest pricing for moderate to strong credit, applicants already CU members" },
    ],
    verdicts: [
      { scenario: "Existing credit-union member with 680+ FICO needs $10,000", pick: "b", reason: "Pricing advantage is real, relationship already exists, and approval odds are strong. Best-case CU." },
      { scenario: "Need funds in 48 hours, no existing CU membership", pick: "a", reason: "Marketplace pre-qualifies in minutes and funds next-day. New CU membership plus application plus underwriting can take a week." },
      { scenario: "Sub-620 FICO seeking $5,000", pick: "a", reason: "Marketplaces include subprime lenders that price loans in the 28 to 35.99% range. Most CUs decline at this credit tier; the ones that don't typically max at the PAL caps." },
      { scenario: "Want to maximise approval odds without harming credit", pick: "a", reason: "Marketplace soft pulls reveal pre-qualified offers from multiple lenders simultaneously; a CU often requires a hard pull at application." },
    ],
    faqs: [
      { q: "How do I join a credit union?", a: "Most credit unions accept membership based on geography (anyone living, working, or worshipping in the area), employer affiliation, family of an existing member, or a small donation to a designated charity. Major national-membership credit unions include PenFed, Navy Federal (military and family), and Alliant. Join first, then apply for the loan." },
      { q: "Are credit-union personal loans the cheapest option?", a: "Often yes for prime and near-prime borrowers (FICO 680+). The federal 18% APR cap on federal credit unions binds before most CU pricing reaches it, so even mediocre credit can score sub-15% pricing. Subprime borrowers usually do not benefit because CUs decline at higher rates than marketplaces." },
      { q: "What is a credit-union Payday Alternative Loan (PAL)?", a: "A federally-regulated small-dollar loan product offered by federal credit unions as a payday-loan alternative. PALs cap at 28% APR, $200 to $2,000 principal, 1 to 12 month term, $20 application fee maximum. Designed for short-term cash needs at far lower cost than payday loans." },
      { q: "Can I pre-qualify with both a marketplace and a credit union?", a: "Yes. Marketplace pre-qualification is soft-pull; many credit unions also pre-qualify with a soft pull before formal application. Pursue both. Accept whichever offer is cheapest after factoring origination fees and term length." },
    ],
  },

  "personal-loan-vs-401k-hardship-withdrawal": {
    slug: "personal-loan-vs-401k-hardship-withdrawal",
    h1: "Personal loan vs 401(k) hardship withdrawal",
    title: "Personal Loan vs 401(k) Hardship Withdrawal: Tax & Retirement Impact (2026)",
    description:
      "A hardship withdrawal incurs income tax plus a 10% penalty and permanently shrinks retirement savings. Personal loans cost less and leave the 401(k) intact.",
    aName: "Personal loan",
    bName: "401(k) hardship withdrawal",
    intro:
      "A 401(k) hardship withdrawal taps your retirement savings to meet an immediate and heavy financial need. Unlike a 401(k) loan (which is repaid), a hardship withdrawal is permanent: you pay income tax on the distribution, plus a 10% early-withdrawal penalty if you're under 59½, and you lose decades of compounded growth on the withdrawn amount. Personal loans almost always cost less overall.",
    rows: [
      { k: "Repayable", a: "Yes, with predictable installments", b: "No, withdrawal is permanent" },
      { k: "Immediate cost", a: "5.99% to 35.99% APR + origination", b: "Income tax (10% to 37% marginal) + 10% early penalty under 59½" },
      { k: "Effective cost to retirement", a: "$0 (retirement savings unchanged)", b: "Compounded loss of 6 to 8% per year on the withdrawn principal until age 65" },
      { k: "Eligibility", a: "Credit + income underwriting", b: "Must meet IRS 'immediate and heavy financial need' criteria; plan must allow hardship withdrawals" },
      { k: "Approval window", a: "Days", b: "Typically 2 to 6 weeks" },
      { k: "Income-tax impact in the withdrawal year", a: "None", b: "Withdrawal added to taxable income; can push the household into a higher bracket" },
      { k: "Contribution-suspension impact", a: "None", b: "Some plans suspend new contributions for 6 months after withdrawal" },
      { k: "Best for", a: "Almost every borrower", b: "Borrowers who cannot qualify for any other credit and face a true emergency" },
    ],
    verdicts: [
      { scenario: "$15,000 needed for medical bills, borrower has decent credit", pick: "a", reason: "A 10-year personal loan at 15% APR costs less than the immediate tax-plus-penalty hit of a hardship withdrawal, and the 401(k) keeps compounding." },
      { scenario: "Borrower 60 years old, needs $20,000, no other credit access", pick: "b", reason: "At 60, the 10% early-withdrawal penalty does not apply. The income-tax bill is still real, but the math closes vs alternatives without credit access." },
      { scenario: "Cash flow can support a $400/month loan payment for 3 years", pick: "a", reason: "If the borrower can service a loan, the personal loan beats the withdrawal every time, even at 30% APR." },
      { scenario: "Imminent foreclosure, no qualifying credit, all other options exhausted", pick: "b", reason: "Hardship withdrawals exist for this scenario. The 401(k) is worth less than the home if the alternative is losing the home." },
    ],
    faqs: [
      { q: "What qualifies as a hardship withdrawal under IRS rules?", a: "The IRS recognises specific 'safe harbour' hardship categories: medical expenses, primary-residence purchase, post-secondary education, prevention of eviction or foreclosure, funeral expenses, and certain casualty losses. Plans may permit additional categories at the plan sponsor's discretion. The borrower must certify the need." },
      { q: "Is a 401(k) loan better than a hardship withdrawal?", a: "Almost always yes. A 401(k) loan is repaid back into your own account (interest goes to you, not a bank), avoids income tax and the 10% penalty, and lets the principal continue compounding once repaid. The catch: if you leave the employer before repayment, the outstanding balance is typically due in 60 to 90 days or treated as a distribution (triggering the tax and penalty)." },
      { q: "What's the real long-term cost of withdrawing $20,000?", a: "Run the compounding math. $20,000 withdrawn at age 35 from a 401(k) earning 7% annually loses about $135,000 of future retirement savings by age 65. Plus the immediate $4,000 to $8,000 federal tax bill and the $2,000 early-withdrawal penalty. Total economic cost: $140,000+ to receive $20,000 of cash today." },
      { q: "Can I avoid the 10% penalty?", a: "Yes, in specific cases. Medical expenses exceeding 7.5% of adjusted gross income are penalty-free. Withdrawals by someone receiving Social Security Disability are penalty-free. Substantially Equal Periodic Payments (SEPP / 72(t)) avoid the penalty but lock the borrower into a defined withdrawal schedule for 5 years or until age 59½, whichever is later." },
    ],
  },

  "personal-loan-vs-auto-loan": {
    slug: "personal-loan-vs-auto-loan",
    h1: "Personal loan vs auto loan",
    title: "Personal Loan vs Auto Loan 2026: APRs, Terms & When Each Wins",
    description:
      "Side-by-side comparison of personal loans and auto loans for buying a car. APR differences, collateral risk, loan-amount limits, and when an unsecured personal loan beats a traditional auto loan.",
    aName: "Personal loan",
    bName: "Auto loan",
    intro:
      "Auto loans are secured by the vehicle and almost always carry lower APRs than unsecured personal loans, but they come with repossession risk and require the lender to approve the specific car. Personal loans are faster, more flexible, and better for certain purchase situations - particularly private-party used cars and older vehicles that don't qualify for auto financing.",
    rows: [
      { k: "Collateral", a: "None (unsecured)", b: "The vehicle (lender holds title until paid off)" },
      { k: "APR range (700 FICO)", a: "8% to 20%", b: "5% to 12%" },
      { k: "Repossession risk", a: "None", b: "Yes - lender can repossess without court order on default" },
      { k: "Vehicle age restrictions", a: "None - funds can buy any car, any age", b: "Most lenders restrict to vehicles under 10 years old and under 150,000 miles" },
      { k: "Private-party purchase", a: "Works for any seller (private party, dealer, auction)", b: "Some lenders exclude private-party sales or require extra steps" },
      { k: "Loan amounts", a: "$1,000 to $50,000", b: "$5,000 to $100,000+" },
      { k: "Time to fund", a: "Next business day (unsecured)", b: "Same day at a dealership; 1-5 days for direct lenders" },
      { k: "Credit check", a: "Soft pull for pre-qualification, hard at acceptance", b: "Hard inquiry to approve" },
      { k: "Origination fee", a: "0% to 8%", b: "None (dealer may add dealer fees)" },
      { k: "Best for", a: "Private-party purchases, older vehicles, borrowers avoiding repossession risk", b: "Dealership purchases of newer vehicles where the lower APR justifies secured lending" },
    ],
    verdicts: [
      { scenario: "Buying a 3-year-old car from a dealer", pick: "b", reason: "Auto loan APRs are 3-8 points lower than personal loans for similar credit. At a dealer, the auto loan is also faster and simpler to process." },
      { scenario: "Buying a 12-year-old car from a private seller", pick: "a", reason: "Most auto lenders reject vehicles over 10 years old or 150K miles. A personal loan has no vehicle restrictions and works for any private-party transaction." },
      { scenario: "Borrower wants no repossession risk and can absorb a higher APR", pick: "a", reason: "With a personal loan, the lender cannot repossess your car if you default. The APR premium is the price for that protection." },
      { scenario: "Buying at auction where title is delayed", pick: "a", reason: "Auto lenders typically need a clear title before funding. Personal loans fund without the title, which is essential for auction purchases where titles transfer slowly." },
    ],
    faqs: [
      { q: "Is it always cheaper to use an auto loan?", a: "Usually yes, but not always. Auto loans carry lower APRs because they're secured by the vehicle. However, if you're buying an older vehicle that doesn't qualify for auto financing, a personal loan may be the only option. And if the difference is small (e.g., 2-3 percentage points on a $5,000 car), the personal loan's flexibility may be worth it." },
      { q: "Can I use a personal loan to buy a car at a dealership?", a: "Yes. The dealer doesn't need to know you're using a personal loan. You receive funds in your bank account, then pay the dealer like a cash buyer. This can also give you negotiating leverage since you're not tied to dealer financing." },
      { q: "Does an auto loan build credit the same way as a personal loan?", a: "Both are installment loans reported to the major bureaus. On-time payments build payment history equally. The main difference is that an auto loan is a secured installment account, which adds a different type of tradeline than an unsecured personal loan." },
    ],
  },

  "personal-loan-vs-line-of-credit": {
    slug: "personal-loan-vs-line-of-credit",
    h1: "Personal loan vs line of credit",
    title: "Personal Loan vs Line of Credit 2026: When Each Makes More Financial Sense",
    description:
      "Choosing between a personal loan and a personal line of credit. APR differences, repayment flexibility, credit-score impact, and the right use case for each product.",
    aName: "Personal loan",
    bName: "Personal line of credit",
    intro:
      "A personal loan delivers a lump sum at a fixed APR with a defined repayment schedule. A personal line of credit (PLOC) is revolving: you draw what you need, pay interest only on what you use, and replenish the credit as you repay. The better choice depends almost entirely on whether your funding need is a one-time event or an ongoing, variable need.",
    rows: [
      { k: "Structure", a: "Lump sum, fixed installment repayment", b: "Revolving credit line, draw as needed" },
      { k: "Interest", a: "Simple interest on full balance, fixed APR", b: "Interest only on drawn balance, often variable APR" },
      { k: "APR range", a: "5.99% to 35.99% (fixed)", b: "8% to 25% (variable, tied to prime rate)" },
      { k: "Availability", a: "Widely available online", b: "Primarily banks and credit unions; limited online availability" },
      { k: "Funding", a: "Full amount disbursed at closing", b: "Draw any amount up to the limit at any time" },
      { k: "Repayment", a: "Fixed monthly payment, defined payoff date", b: "Minimum interest-only payments; balance reduces as you repay" },
      { k: "Credit utilisation", a: "Installment debt; does not affect utilisation ratio", b: "Revolving debt; affects credit utilisation ratio like a credit card" },
      { k: "Best for", a: "Known, one-time expenses with a defined amount", b: "Ongoing, variable needs where amount is uncertain upfront" },
    ],
    verdicts: [
      { scenario: "Funding a $20,000 kitchen remodel with a known budget", pick: "a", reason: "You know the amount, so the fixed lump sum and defined payoff date of a personal loan is better. A PLOC's variable APR is extra risk with no benefit when the need is predictable." },
      { scenario: "Covering variable business expenses over 12 months", pick: "b", reason: "If spending fluctuates between $500 and $5,000 per month, paying interest only on what you draw with a PLOC costs significantly less than paying interest on a lump-sum personal loan that sits partially unused." },
      { scenario: "Emergency fund bridge while rebuilding savings", pick: "b", reason: "A PLOC sitting at $0 drawn costs nothing until used. For a backup liquidity buffer, a PLOC is the more efficient instrument since you only pay interest on actual drawdowns." },
      { scenario: "Debt consolidation of multiple credit cards", pick: "a", reason: "A personal loan's fixed payment and payoff date enforce discipline. A PLOC that's available to redraw can perpetuate the spending pattern that created the credit-card debt." },
    ],
    faqs: [
      { q: "Is a personal line of credit hard to get?", a: "PLOCs are less widely available than personal loans. Most are offered by banks and credit unions to existing customers with established accounts and good credit (670+). Pure-play online lenders rarely offer PLOCs, so you may need to work with your bank or a local credit union." },
      { q: "Does a personal line of credit affect my credit score?", a: "Yes. A PLOC is revolving debt and affects your credit utilization ratio (used balance / total revolving limit). Keeping the PLOC under 30% utilization is important for credit score maintenance. A personal loan is installment debt and doesn't factor into credit utilization." },
      { q: "Can I convert a personal loan to a line of credit?", a: "No. They are separate products with different structures. If you need the flexibility of a PLOC after taking a personal loan, you would need to apply for a new PLOC separately. Some borrowers keep both: a personal loan for a specific large expense and a PLOC as an ongoing backup liquidity tool." },
    ],
  },

  "personal-loan-vs-savings": {
    slug: "personal-loan-vs-savings",
    h1: "Personal loan vs using your savings",
    title: "Personal Loan vs Using Savings 2026: The True Cost Comparison",
    description:
      "Should you take a personal loan or spend down your savings? The math on opportunity cost, emergency fund preservation, and when each choice costs you less in 2026.",
    aName: "Personal loan",
    bName: "Use savings",
    intro:
      "Taking a personal loan when you have savings in the bank feels counterintuitive - you're paying 10-25% APR to borrow money you technically have. But the math is more nuanced: using savings has costs too (lost investment returns, depleted emergency fund, potential tax impact on retirement accounts). For many borrowers, a personal loan preserves financial resilience at a cost that is lower than it first appears.",
    rows: [
      { k: "Cost", a: "APR (5.99% to 35.99%) plus any origination fee", b: "Opportunity cost (investment return you're not earning)" },
      { k: "Emergency buffer impact", a: "None - savings stay intact", b: "Reduces or depletes emergency fund" },
      { k: "Credit score impact", a: "Adds installment tradeline; on-time payments build score", b: "No impact (spending your own money)" },
      { k: "Flexibility", a: "Fixed monthly payment for 12-72 months", b: "No obligation - can rebuild savings at any pace" },
      { k: "Investment accounts", a: "No market exposure (cash loan)", b: "Selling investments may trigger capital gains tax" },
      { k: "Time to access funds", a: "1-2 business days", b: "Instant (savings) or 3-5 days (brokerage liquidation)" },
      { k: "Best for", a: "Preserving emergency fund, building credit, or when savings are in tax-advantaged accounts", b: "Small expenses easily covered by savings excess above your emergency fund target" },
    ],
    verdicts: [
      { scenario: "Savings are your only emergency fund", pick: "a", reason: "Depleting your emergency fund leaves you exposed to the next emergency. A personal loan at 12-20% APR is cheaper than the potential credit-card debt of a second emergency." },
      { scenario: "Savings are above your 3-6 month emergency target", pick: "b", reason: "If you have $30,000 saved and need $5,000, the excess above your target is the right first resource. No APR beats 0% APR." },
      { scenario: "Savings are in a taxable brokerage with gains", pick: "a", reason: "Selling appreciated investments triggers capital gains tax. Depending on the tax rate and the personal loan APR, borrowing can cost less than liquidating." },
      { scenario: "Savings are in a traditional IRA or 401(k)", pick: "a", reason: "Early withdrawal from tax-advantaged retirement accounts triggers income tax plus a 10% penalty before age 59½. A 15% personal loan beats a 32-42% effective cost of early retirement withdrawal at most income levels." },
    ],
    faqs: [
      { q: "What is the 'opportunity cost' of using savings?", a: "The opportunity cost is the investment return you give up by spending the savings instead of keeping them invested. If your savings would have earned 7% annually in a stock index fund, and you spend $10,000, you're giving up roughly $700 per year in expected returns. Compare that to the APR of a personal loan to see which costs more." },
      { q: "Should I ever use savings to avoid a personal loan?", a: "Yes, when your savings exceed your emergency fund target (typically 3-6 months of expenses), when the personal loan APR is higher than your investment returns by a wide margin, and when the expense is certain and immediate. Paying 22% APR to preserve savings earning 4.5% in a high-yield savings account rarely makes sense." },
      { q: "What if I have a low-APR personal loan offer?", a: "At 6-9% APR, a personal loan competes favorably with even high-yield savings accounts. Preserving your emergency fund and liquidity while paying 6-9% to borrow is mathematically sound for most borrowers who have a true emergency fund they'd rather not deplete." },
    ],
  },
  "personal-loan-vs-medical-credit-card": {
    slug: "personal-loan-vs-medical-credit-card",
    h1: "Personal loan vs. medical credit card",
    title: "Personal Loan vs Medical Credit Card 2026 (CareCredit, Alphaeon): Which Costs Less?",
    description:
      "Side-by-side comparison: personal loan vs CareCredit and other deferred-interest medical credit cards. When deferred interest is a trap and when a personal loan wins on total cost.",
    aName: "Personal loan",
    bName: "Medical credit card",
    intro: "Medical credit cards like CareCredit and Alphaeon offer 0% deferred-interest promotions at the dental office or hospital. A personal loan offers a fixed APR from day one. The winner depends entirely on whether you can guarantee full payoff before the deferred-interest period ends.",
    rows: [
      { k: "Interest type", a: "Simple interest, always accruing on balance", b: "Deferred interest: 0% if paid in full before promo ends; retroactive if not" },
      { k: "APR if balance remains", a: "7.99-35.99% (fixed, disclosed upfront)", b: "26.99-29.99% applied retroactively to the full original balance" },
      { k: "Risk of back-interest", a: "None", b: "High: one missed payoff deadline charges interest on the original balance, not the remaining balance" },
      { k: "Loan amounts", a: "$1,000-$50,000", b: "Typically up to $25,000; varies by provider and specialty" },
      { k: "Credit impact", a: "Installment loan: utilization-neutral", b: "Revolving credit: new card affects utilization and average account age" },
      { k: "Approval speed", a: "Same day to 1-2 business days", b: "Often instant approval at point of service or provider office" },
      { k: "Provider requirement", a: "None: funds deposited to bank account", b: "Only usable at enrolled providers in CareCredit or Alphaeon network" },
      { k: "Monthly payment flexibility", a: "Fixed; specified in loan agreement", b: "Minimum payment required; must calculate payoff payment yourself" },
    ],
    verdicts: [
      { scenario: "You can pay the full balance before the promo period ends", pick: "b", reason: "0% interest beats any personal loan APR. Set up automatic payments to ensure full payoff before the deadline." },
      { scenario: "You are not 100% certain you can pay in full before the deadline", pick: "a", reason: "The deferred-interest trap is severe. Missing the payoff by even a month charges retroactive interest on the original balance, which can cost more than a personal loan at 20% for the same period." },
      { scenario: "Your provider is not in the medical card network", pick: "a", reason: "Medical credit cards only work at enrolled providers. A personal loan can pay any medical provider, hospital, or specialist." },
      { scenario: "You want to keep the debt off your credit card utilization", pick: "a", reason: "A personal loan is installment credit and does not affect revolving credit utilization. A medical credit card is revolving and can hurt your credit score if the balance is high relative to the limit." },
    ],
    faqs: [
      { q: "What is deferred interest and why is it dangerous?", a: "Deferred interest means 0% APR for a promotional period, but if you don't pay the full original balance before the period ends, the card issuer charges interest retroactively on the original amount, not what's left. On a $5,000 CareCredit balance with a 24-month promo at 26.99%, failing to pay it off in time means $2,699 in retroactive interest applied all at once - regardless of how much you've already paid down." },
      { q: "Is CareCredit a good option for medical expenses?", a: "It can be, specifically if you can guarantee full payoff before the promo period ends. CareCredit's network is extensive (dental, optometry, veterinary, cosmetic, and many specialty medical providers). The key discipline: calculate the monthly payment needed to pay the full balance in the promo period, set up autopay, and do not use the card for other purchases that could complicate payoff." },
      { q: "What is the true APR of a deferred-interest card if I don't pay it off?", a: "Much higher than the stated rate. If you borrow $3,000 on 18-month 0% deferred interest, pay only the minimum each month, and owe $2,400 at month 18, you get charged interest on the full $3,000 not the $2,400 remaining. On a 26.99% card, that's $810 in retroactive interest - an effective annual rate far above 26.99% on what you actually borrowed." },
    ],
  },
  "personal-loan-vs-buy-now-pay-later": {
    slug: "personal-loan-vs-buy-now-pay-later",
    h1: "Personal loan vs. buy now, pay later (BNPL)",
    title: "Personal Loan vs Buy Now Pay Later 2026 (Affirm, Klarna, Afterpay): Which to Choose",
    description:
      "BNPL splits purchases into 4 installments or monthly plans. Compare BNPL vs personal loans on APR, amounts, merchant limits, and credit building to choose the right option.",
    aName: "Personal loan",
    bName: "Buy now, pay later",
    intro: "Buy now, pay later services (Affirm, Klarna, Afterpay, Sezzle) split a purchase into equal installments - often 4 payments over 6 weeks at 0% interest on small amounts, or longer monthly plans at 10%-36% APR. Personal loans fund your bank account directly and can be used anywhere. BNPL is simpler for specific merchant purchases but limited in scope; personal loans are more flexible and can handle larger, non-merchant needs.",
    rows: [
      { k: "APR range", a: "7.99%-35.99% (fixed, disclosed upfront)", b: "0% on 4-payment plans; 10%-36% on longer monthly plans; varies by provider" },
      { k: "Loan amounts", a: "$500-$50,000", b: "$50-$17,500 (most BNPL caps are well below personal loan maximums)" },
      { k: "Where it works", a: "Any use: deposits to bank account, any merchant, any payee", b: "Only at enrolled merchants or via BNPL virtual card at selected retailers" },
      { k: "Credit check", a: "Soft pull for pre-qual; hard pull on application", b: "Soft pull or no check on 4-payment plans; hard check on longer plans" },
      { k: "Credit bureau reporting", a: "Yes - builds credit history with on-time payments", b: "Inconsistent: Affirm reports some loans; Afterpay and Klarna report in some cases. Buy-as-needed habit can result in many small tradelines" },
      { k: "Late fees", a: "Varies; typically $15-$39 or 5% of payment", b: "Afterpay: $8 capped at 25% of order. Klarna: up to $7. Affirm: no late fees on most plans" },
      { k: "Overspending risk", a: "Loan amount fixed at origination", b: "Easy to stack multiple BNPL plans across different merchants, creating many simultaneous obligations that are hard to track" },
      { k: "Merchant returns", a: "No complication - loan stands, you receive refund to original payment method", b: "Refunds can be complicated - you may continue owe installments while waiting for merchant refund to process" },
    ],
    verdicts: [
      { scenario: "Specific purchase at a major retailer under $500 you can pay in 4 bi-weekly payments", pick: "b", reason: "0% APR on 4-payment BNPL is genuinely free money. If you will pay the 4 installments reliably, BNPL on a specific purchase beats a personal loan's interest cost for that amount." },
      { scenario: "Need $2,000+ or need to pay a person, service provider, or bill", pick: "a", reason: "BNPL cannot pay utility bills, rent, non-enrolled contractors, or medical providers directly. A personal loan deposits cash to your account for any use." },
      { scenario: "You want to build your credit history", pick: "a", reason: "Personal loan on-time payments are consistently reported to all 3 bureaus. BNPL reporting is inconsistent and building credit through small BNPL plans is unreliable." },
      { scenario: "You have multiple BNPL plans already", pick: "a", reason: "Stacking many simultaneous BNPL obligations across merchants makes budgeting difficult and creates default risk. Consolidating into one personal loan payment is cleaner and often cheaper." },
    ],
    faqs: [
      { q: "Does BNPL affect my credit score?", a: "It depends on the provider and plan. Affirm reports loans over a certain threshold to Experian. Klarna and Afterpay have expanded credit reporting in recent years. On-time payments can help; missed payments can hurt. FICO 10T and VantageScore 4.0 have begun incorporating BNPL data, so the impact is growing. The safest assumption: treat BNPL payments as seriously as any credit account." },
      { q: "Can I use BNPL for services (medical, home repair)?", a: "Affirm has partnerships with some service providers. Klarna has expanded to some service categories. However, most BNPL networks still focus on retail products. For services, medical bills, home repairs, or anything not through an enrolled merchant, a personal loan is the only option." },
      { q: "Is BNPL a good substitute for a personal loan?", a: "For small retail purchases you can repay within 6 weeks, BNPL at 0% is cheaper than a personal loan. For larger amounts, longer repayment, or non-retail needs, BNPL cannot substitute. Financially, the biggest BNPL risk is stacking multiple plans and losing track of total obligations - a personal loan's single fixed payment is more transparent to budget." },
    ],
  },
};

export const comparisonSlugs = Object.keys(comparisons);

export function getComparison(slug: string): Comparison | undefined {
  return comparisons[slug];
}
