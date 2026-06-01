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
    title: "Personal Loan vs Payday Loan: APRs, Risks, Alternatives",
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
    title: "Personal Loan vs HELOC: Which Is Better for Home Projects?",
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
    title: "Personal Loan vs 401(k) Loan: True Costs Compared",
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
    title: "Personal Loan vs 0% Balance Transfer Card: Which Pays Off Debt Faster?",
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
    title: "Secured vs Unsecured Loan: APRs, Risks, and When Each Wins",
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
    title: "Installment vs Revolving Credit: How They Affect Your Score and Cost",
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
    title: "Fixed vs Variable Interest Rate: Which Is Better for Personal Loans?",
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
};

export const comparisonSlugs = Object.keys(comparisons);

export function getComparison(slug: string): Comparison | undefined {
  return comparisons[slug];
}
