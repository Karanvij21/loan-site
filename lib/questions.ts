/**
 * Short-form Q&A pages targeting People-Also-Ask and AI-overview citations.
 *
 * Each entry is 250-400 words: a one-sentence direct answer, 2-3 paragraphs
 * of context, a short FAQ. Schema rendered as QAPage + Speakable so AI
 * answer engines can quote the direct answer verbatim.
 *
 * Grouped by topic for the /questions index. The slugs are query-style
 * for direct URL match with the underlying search query.
 */

export type QuestionTopic =
  | "Credit score"
  | "Approval & amount"
  | "Process & terms"
  | "Special situations";

export type Question = {
  slug: string;
  topic: QuestionTopic;
  question: string;
  /** ≤ 280 chars. Used as meta description, the snippet, and Speakable. */
  shortAnswer: string;
  /** Body paragraphs after the short answer. Plain text split on blank lines. */
  context: string;
  /** Other question slugs to surface as related Q&As. */
  relatedSlugs?: string[];
  /** Tool/glossary/page links surfaced at the foot. */
  toolLinks?: { label: string; href: string }[];
};

const PUBLISHED = "2026-05-22";
const REVIEWED = "2026-05-22";

export const QUESTIONS_PUBLISHED = PUBLISHED;
export const QUESTIONS_REVIEWED = REVIEWED;

export const questions: Question[] = [
  // ─── Credit score ────────────────────────────────────────────────
  {
    slug: "personal-loan-with-500-credit-score",
    topic: "Credit score",
    question: "Can I get a personal loan with a 500 credit score?",
    shortAnswer:
      "Possibly, but options are limited and APRs will run at or near the legal cap. A 500 FICO is below the floor of most online installment lenders (typical minimum is 580). Some subprime lenders consider 500-579 with verified income; expect APRs of 30-35.99%, loan amounts of $500-$3,000, and short terms.",
    context:
      "A 500 credit score puts you in the 'poor' tier and excludes you from prime and most fair-credit lenders. The lenders who will work with a 500 FICO underwrite primarily on income, employment stability, and bank-account history rather than score.\n\nBetter-cost alternatives for a 500-FICO borrower include: federal credit-union Payday Alternative Loans (PALs), capped at 28% APR with $200-$2,000 amounts; secured personal loans backed by a vehicle title or savings account; and family loans documented with a written promissory note at the IRS Applicable Federal Rate.\n\nIf the cash need can wait 60-90 days, focus on raising the score first. Paying down revolving balances and disputing inaccurate negatives can move a 500 score into the 540-580 range relatively quickly, unlocking meaningfully better APRs.",
    relatedSlugs: ["personal-loan-with-600-credit-score", "what-credit-score-needed-for-5000-loan", "how-to-raise-credit-score-fast"],
    toolLinks: [
      { label: "Bad credit loans", href: "/loans/bad-credit" },
      { label: "580 credit score loans", href: "/loans/580-credit-score" },
    ],
  },
  {
    slug: "personal-loan-with-600-credit-score",
    topic: "Credit score",
    question: "Can I get a personal loan with a 600 credit score?",
    shortAnswer:
      "Yes, with options across multiple online lenders. A 600 FICO is in the 'fair' credit tier and qualifies for personal-loan offers from most online installment lenders. Expect APRs of 18-32%, loan amounts up to $25,000, and terms of 24-60 months.",
    context:
      "At a 600 credit score, you're above the minimum threshold of most major online personal-loan lenders. Pre-qualification (soft credit pull only, no impact to score) will typically return 3-5 offers from a marketplace.\n\nYour APR depends heavily on income, debt-to-income ratio, and the loan amount. A 600-FICO borrower with stable W-2 income above $50,000 and DTI under 35% will see APRs in the high teens to mid-20s. The same score with thin income documentation or DTI above 40% pushes APRs to the upper end of the range.\n\nIf you'd like better pricing, raising the score 30-60 points to the mid-630s typically drops APR by 5-8 percentage points. Paying down credit-card balances below 30% utilisation is the fastest lever.",
    relatedSlugs: ["personal-loan-with-650-credit-score", "personal-loan-with-500-credit-score", "what-credit-score-needed-for-10000-loan"],
    toolLinks: [
      { label: "Fair credit loans", href: "/loans/fair-credit" },
      { label: "620 credit score loans", href: "/loans/620-credit-score" },
    ],
  },
  {
    slug: "personal-loan-with-650-credit-score",
    topic: "Credit score",
    question: "Can I get a personal loan with a 650 credit score?",
    shortAnswer:
      "Yes, with competitive offers. A 650 credit score qualifies for personal-loan offers from nearly every mainstream online lender. Expect APRs of 13-22%, loan amounts up to $40,000, and terms of 24-72 months. Strong income or low debt-to-income can unlock the lower end of the range.",
    context:
      "650 sits at the lower edge of the 'good' credit tier. You're past the threshold where mainstream lenders compete actively for your application, so pre-qualifying with 3-5 lenders typically returns a wide rate spread.\n\nThe biggest factor at this credit tier beyond the score itself is debt-to-income ratio. Lenders prefer DTI below 40% post-loan; some target below 35% for their best pricing.\n\nMost 650-FICO borrowers don't need a co-signer to qualify. Adding one with strong credit (720+) can sometimes shift the offer to the co-signer's pricing tier, dropping APR by 3-5 percentage points.",
    relatedSlugs: ["personal-loan-with-700-credit-score", "personal-loan-with-600-credit-score", "what-credit-score-needed-for-10000-loan"],
    toolLinks: [
      { label: "Good credit loans", href: "/loans/good-credit" },
    ],
  },
  {
    slug: "personal-loan-with-700-credit-score",
    topic: "Credit score",
    question: "Can I get a personal loan with a 700 credit score?",
    shortAnswer:
      "Yes, with offers from the full range of prime lenders. A 700 FICO is in the 'good' tier and qualifies for personal-loan offers from nearly every U.S. lender. Expect APRs of 9-16%, loan amounts up to $50,000, and the lowest origination fees in the market.",
    context:
      "At a 700 credit score you're in the sweet spot for personal-loan pricing. SoFi, LightStream, Marcus, and the major banks all actively compete for your application.\n\nFor borrowers at this tier, the differentiator is often origination fee. LightStream and SoFi advertise no-fee loans for prime applicants; other lenders may add 1-3% origination. Compare effective APR (rate plus fee, the disclosed APR) across offers rather than just the headline rate.\n\nAt 700 FICO, your monthly payment becomes the binding constraint rather than approval. Use a loan-affordability calculator to size the loan against your debt-to-income capacity before committing.",
    relatedSlugs: ["personal-loan-with-650-credit-score", "what-credit-score-needed-for-20000-loan", "compare-personal-loan-offers-question"],
    toolLinks: [
      { label: "Good credit loans", href: "/loans/good-credit" },
      { label: "Excellent credit loans", href: "/loans/excellent-credit" },
    ],
  },
  {
    slug: "what-credit-score-needed-for-5000-loan",
    topic: "Credit score",
    question: "What credit score do I need for a $5,000 personal loan?",
    shortAnswer:
      "Most lenders approving $5,000 personal loans accept FICO scores from 580 up. The best APRs require 670+; at 580-620 expect APRs in the high 20s to low 30s. Income and bank-account history matter as much as the score at this loan size.",
    context:
      "A $5,000 loan is in the middle of the personal-loan market by amount, with the widest range of competing lenders. Even fair-credit borrowers typically get multiple offers.\n\nMonthly payment math: $5,000 at 18% over 36 months works out to about $181/month. At 28% APR (subprime tier) the same loan runs $209/month. The payment is manageable across credit tiers, which is why approval rates here are higher than for larger amounts.\n\nIf the cash need is genuinely urgent, a $5,000 loan from a subprime lender at high APR can still make sense as a short-term tool. If the need can wait 60-90 days, focused score-improvement work often shifts the offer 5-10 points lower.",
    relatedSlugs: ["personal-loan-with-600-credit-score", "what-credit-score-needed-for-10000-loan"],
    toolLinks: [
      { label: "$5,000 personal loan", href: "/loans/amount/5000" },
      { label: "Loan payment calculator", href: "/calculators/loan-payment" },
    ],
  },
  {
    slug: "what-credit-score-needed-for-10000-loan",
    topic: "Credit score",
    question: "What credit score do I need for a $10,000 personal loan?",
    shortAnswer:
      "Most lenders require a FICO of 620+ for $10,000 personal loans, with the best APRs reserved for 700+. Expect APRs of 10-25% depending on credit and income. Some online lenders accept 580+ but with higher APRs and stricter DTI requirements.",
    context:
      "$10,000 is a common consolidation or major-purchase loan amount. Approval at this size starts being affected by debt-to-income ratio in a meaningful way. Lenders want to see that the new monthly payment fits within your existing budget.\n\nMonthly payment math: $10,000 at 14% over 48 months is about $273/month. At 22% APR over 60 months it's $276/month. Lenders compute DTI after adding this payment to your existing debt service; total should stay under ~40% of gross monthly income.\n\nIf you're at 580-619 FICO, expect either a smaller loan offer ($5,000-$7,500) or APRs at the upper end of the range. Adding a co-applicant with stronger credit often unlocks the full $10,000 at meaningfully better pricing.",
    relatedSlugs: ["what-credit-score-needed-for-5000-loan", "what-credit-score-needed-for-20000-loan", "personal-loan-with-650-credit-score"],
    toolLinks: [
      { label: "$10,000 personal loan", href: "/loans/amount/10000" },
      { label: "Loan affordability calculator", href: "/calculators/affordability" },
    ],
  },
  {
    slug: "what-credit-score-needed-for-20000-loan",
    topic: "Credit score",
    question: "What credit score do I need for a $20,000 personal loan?",
    shortAnswer:
      "Most lenders require a FICO of 660+ for $20,000 personal loans. The best APRs (single digits to low double-digits) require 720+ and verified annual income above $60,000. Below 660, options narrow to the smaller online lenders and some credit unions.",
    context:
      "$20,000 is the upper end of the typical personal-loan range. At this amount, lenders weight debt-to-income ratio heavily because the monthly payment is significant.\n\nMonthly payment math: $20,000 at 12% over 60 months is $445/month. At 10% over 48 months it's $507. For approval, your total debt service post-loan needs to stay under ~40% of gross income; on a $60,000 salary that's about $2,000 in total monthly debt, leaving room for the loan plus a modest car payment and other obligations.\n\nIf you're between 600-659 FICO, options typically max out at $10,000-$15,000 from mainstream lenders. Some online installment lenders go higher but at APRs that often make a smaller loan more financially sensible.",
    relatedSlugs: ["what-credit-score-needed-for-10000-loan", "personal-loan-with-700-credit-score", "how-much-loan-with-80000-income"],
    toolLinks: [
      { label: "$20,000 personal loan", href: "/loans/amount/20000" },
      { label: "Loan affordability calculator", href: "/calculators/affordability" },
    ],
  },
  {
    slug: "does-pre-qualification-hurt-credit-score",
    topic: "Credit score",
    question: "Does pre-qualification hurt my credit score?",
    shortAnswer:
      "No. Pre-qualification uses a soft credit inquiry, which is invisible to other lenders and does not affect your credit score. Hard inquiries, which can lower your score by 3-7 points, only happen after you accept a final offer and the lender requires one to finalise the loan.",
    context:
      "The distinction between soft and hard credit pulls is critical for shopping personal loans. Most marketplace pre-qualifications use only soft pulls, so you can get 3-5 offers without affecting your score at all.\n\nHard inquiries appear on your credit report and cost 3-7 points temporarily. They stay on the report for 24 months but only meaningfully affect your score for the first 12. Multiple hard inquiries for the same loan type within a short window (14-45 days depending on scoring model) typically count as one inquiry under FICO's rate-shopping logic.\n\nThe practical implication: pre-qualify with as many lenders as you want, then only accept a final offer from the lender whose disclosed APR you're committed to. The hard pull only happens at that final step.",
    relatedSlugs: ["how-personal-loan-affects-credit-score", "how-fast-credit-score-recovers"],
    toolLinks: [
      { label: "Glossary: Soft inquiry", href: "/glossary/soft-inquiry" },
      { label: "Glossary: Hard inquiry", href: "/glossary/hard-inquiry" },
    ],
  },
  {
    slug: "how-personal-loan-affects-credit-score",
    topic: "Credit score",
    question: "How much does a personal loan affect my credit score?",
    shortAnswer:
      "A new personal loan typically drops your credit score by 5-15 points short-term, then improves it over 6-18 months as on-time payments build positive history. The drop comes from the hard inquiry and the new account; the recovery comes from payment history and (for consolidation loans) reduced credit utilisation.",
    context:
      "The short-term drop happens because of two factors. First, the hard inquiry costs 3-7 points temporarily. Second, the new account lowers your average account age, which is one component of FICO's 15% 'length of credit history' factor.\n\nThe medium-term recovery and growth typically more than compensate. Each on-time payment builds your payment history, which is 35% of your score. If the loan was used to consolidate revolving credit-card debt, your credit utilisation ratio drops sharply, which can produce a 20-60 point increase within 90 days.\n\nLong term, a successfully repaid personal loan stays on your credit report for 10 years after closure and continues to contribute positively to your length of credit history.",
    relatedSlugs: ["does-pre-qualification-hurt-credit-score", "how-fast-credit-score-recovers"],
    toolLinks: [
      { label: "Glossary: Credit score", href: "/glossary/credit-score" },
    ],
  },
  {
    slug: "how-fast-credit-score-recovers",
    topic: "Credit score",
    question: "How fast does a credit score recover after paying off a loan?",
    shortAnswer:
      "Most of the recovery happens within 30-60 days of payoff. The hard-inquiry impact fades over 12 months; the new account closure can temporarily drop scores 5-15 points but is offset by the reduced debt load. Net effect is usually neutral to mildly positive after 90 days.",
    context:
      "Counterintuitively, paying off a personal loan often produces a small short-term score dip rather than a boost. The reasoning: closing an installment account reduces your active credit mix and shortens your average account age slightly. FICO and VantageScore both penalise these factors modestly.\n\nThe upside is the freed-up cash flow and the elimination of a monthly obligation. If you'll be applying for a major loan (mortgage, auto) within 60-90 days, time the payoff so it lands after the new application is approved. If no major application is pending, paying off early to save interest beats waiting for a 5-15 point score variance.\n\nFor revolving credit (credit cards), the math is different. Paying down a card balance produces an immediate, often large, score increase because credit utilisation drops. Don't close paid-off credit cards; keep them open with $0 balance to preserve your credit limit and account age.",
    relatedSlugs: ["how-personal-loan-affects-credit-score", "does-pre-qualification-hurt-credit-score"],
    toolLinks: [
      { label: "Glossary: Credit score", href: "/glossary/credit-score" },
    ],
  },

  // ─── Approval & amount ────────────────────────────────────────
  {
    slug: "how-much-loan-with-40000-income",
    topic: "Approval & amount",
    question: "How much personal loan can I get with $40,000 income?",
    shortAnswer:
      "Most lenders approve loans where the new monthly payment, plus existing debt service, stays under 40% of gross monthly income. On $40,000 income ($3,333/month gross), that's about $1,333 in total monthly debt service. With minimal existing debt, this supports a loan of $15,000-$25,000 depending on APR and term.",
    context:
      "The binding constraint at this income level is usually debt-to-income ratio rather than credit score. A $20,000 loan at 14% APR over 60 months is $465/month. Added to a $400 car payment, you're at $865 in monthly debt, or 26% of gross income. That fits comfortably in most lenders' DTI windows.\n\nLenders also look at residual income: gross pay minus all debt and basic living expenses. On $40,000 income, after-tax pay is roughly $33,000 (about $2,750/month). After a $1,200 rent or mortgage, $400 in utilities and insurance, and $400 in groceries and transportation, residual is about $750. A new $465 loan payment is achievable but tight.\n\nApply for the amount you need rather than the maximum the lender might approve. Borrowing $25,000 when you need $12,000 saddles you with interest costs you didn't have to pay.",
    relatedSlugs: ["how-much-loan-with-80000-income", "what-credit-score-needed-for-10000-loan"],
    toolLinks: [
      { label: "Loan affordability calculator", href: "/calculators/affordability" },
    ],
  },
  {
    slug: "how-much-loan-with-80000-income",
    topic: "Approval & amount",
    question: "How much personal loan can I get with $80,000 income?",
    shortAnswer:
      "On $80,000 income ($6,667/month gross), the typical 40% DTI ceiling supports about $2,667 in total monthly debt service. With minimal existing debt, this comfortably supports loans of $30,000-$50,000 depending on credit and term. Strong credit (720+) often unlocks the full $50,000 cap that mainstream personal lenders offer.",
    context:
      "At $80,000 income, personal-loan amount is usually limited by the lender's product cap ($50,000 at most mainstream lenders) rather than by your ability to service the debt.\n\nWorked example: $40,000 at 11% APR over 60 months is $870/month. Combined with a $500 car payment, that's $1,370 monthly debt or 21% of gross income. Easily within lender DTI requirements.\n\nFor amounts above $50,000, you're moving out of standard personal-loan territory. Options include: a HELOC (if you own a home with equity), a personal line of credit from a private bank, or splitting the borrowing into a personal loan plus a separate credit-product. Most personal-loan needs above $50,000 can be met more cheaply with a HELOC's lower APR.",
    relatedSlugs: ["how-much-loan-with-40000-income", "what-credit-score-needed-for-20000-loan"],
    toolLinks: [
      { label: "$50,000 personal loan", href: "/loans/amount/50000" },
      { label: "Loan affordability calculator", href: "/calculators/affordability" },
    ],
  },
  {
    slug: "highest-personal-loan-amount",
    topic: "Approval & amount",
    question: "What's the highest personal loan amount I can get?",
    shortAnswer:
      "Most online personal-loan lenders cap at $50,000. Some, including LightStream and SoFi, go to $100,000 for borrowers with excellent credit (740+ FICO) and verified high income. Above $100,000, you're typically looking at a HELOC, home equity loan, or private-bank line of credit rather than a personal loan.",
    context:
      "The $50,000 cap is industry-standard for two reasons. First, it's the unsecured-credit limit where lender risk modelling shifts; above this amount, lenders prefer collateral. Second, it covers the bulk of real-world personal-loan use cases (debt consolidation, major renovations, weddings, medical bills).\n\nFor borrowing above $50,000, the cheapest options are usually secured. A HELOC backed by home equity typically offers APRs of 8-11% (vs 10-15% for a $50,000 unsecured personal loan at the same credit tier). The trade-off is the closing process (30-45 days) and the lien on your home.\n\nFor non-homeowners or borrowers who don't want a home lien, splitting a large borrowing need into two personal loans from different lenders is sometimes feasible, but the second lender will see the first loan in your DTI calculation and may decline or price higher.",
    relatedSlugs: ["how-much-loan-with-80000-income", "personal-loan-vs-heloc-question"],
    toolLinks: [
      { label: "$50,000 personal loan", href: "/loans/amount/50000" },
    ],
  },
  {
    slug: "how-long-personal-loan-approval-takes",
    topic: "Approval & amount",
    question: "How long does personal loan approval take?",
    shortAnswer:
      "Online lenders typically respond with a decision within minutes of submitting a full application. Banks and credit unions usually take 1-3 business days. Pre-qualification (soft pull only) usually returns offers within 60-120 seconds.",
    context:
      "Online lenders use automated underwriting that pulls credit, runs identity verification, and applies risk scoring in real time. As long as you provide accurate information and there are no flags requiring human review, the decision is essentially instant.\n\nBanks and credit unions often have a human underwriter review applications, especially for amounts above $15,000. This adds 1-3 business days. Some banks (Discover, US Bank) have moved to fully automated underwriting and offer same-day decisions; others still rely on manual review.\n\nThe slowest path is a credit-union application where you're not yet a member. The membership process (proving eligibility, opening the deposit account, completing forms) typically adds 1-2 business days before the loan application can even start.",
    relatedSlugs: ["how-long-personal-loan-funding-takes", "can-i-get-personal-loan-same-day"],
    toolLinks: [
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    slug: "how-long-personal-loan-funding-takes",
    topic: "Approval & amount",
    question: "How long does personal loan funding take?",
    shortAnswer:
      "Most online lenders fund approved loans via ACH the next business day after you accept the offer and e-sign the documents. Banks and credit unions typically fund in 1-3 business days. Some lenders offer same-day funding for an additional fee ($15-$50).",
    context:
      "The standard sequence: you apply, get approved, review and accept the offer, e-sign the loan agreement, and the lender initiates an ACH transfer to your checking account. ACH transfers process overnight, so funds typically appear in your account the next business day.\n\nThe practical implication for emergencies: if you apply Friday morning and accept Friday afternoon, funds may not arrive until Monday. For genuine same-day cash needs, look for lenders advertising same-day funding (Avant, LendUp, OneMain Financial in some cases) or expect to pay a wire-transfer fee for faster movement.\n\nIf you've already opened an account with the lender's affiliated bank (some online lenders run their own banking products), funds may move faster than third-party ACH.",
    relatedSlugs: ["how-long-personal-loan-approval-takes", "can-i-get-personal-loan-same-day"],
    toolLinks: [
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    slug: "can-i-get-personal-loan-same-day",
    topic: "Approval & amount",
    question: "Can I get a personal loan the same day?",
    shortAnswer:
      "Yes, with some lenders. Several online lenders advertise same-day funding for approved applications submitted before mid-day, typically with a wire-transfer fee of $15-$50. Standard ACH funding is next-business-day.",
    context:
      "Same-day funding requires three things: a lender that offers it, an early-enough application submission (usually before 11 AM lender time), and a clean approval that doesn't require manual review.\n\nLenders that explicitly offer same-day funding for some applications include Avant, LendUp, OneMain Financial, and OppLoans. Subprime online lenders are more likely to advertise same-day; prime lenders like SoFi and LightStream usually fund next-business-day even for approved prime applicants.\n\nFor genuine emergency cash needs that can't wait, a credit-card cash advance (typically funded immediately, even via ATM) can be faster than any personal loan. The APR is much higher (often 25-30% with an immediate cash-advance fee of 3-5%), so it's a tool of last resort but works for one-off emergencies.",
    relatedSlugs: ["how-long-personal-loan-funding-takes", "how-long-personal-loan-approval-takes"],
    toolLinks: [
      { label: "Emergency loans", href: "/loans/emergency" },
    ],
  },
  {
    slug: "can-i-have-two-personal-loans",
    topic: "Approval & amount",
    question: "Can I have two personal loans at the same time?",
    shortAnswer:
      "Yes, if your debt-to-income ratio supports both payments. There's no federal law limiting how many personal loans you can hold simultaneously. Some lenders cap their own exposure at one loan per borrower; others will originate a second loan as long as the combined DTI stays under 40-43%.",
    context:
      "Two personal loans from the same lender is uncommon (most lenders prefer to refinance rather than originate a second loan to the same borrower). Two loans from different lenders is straightforward as long as both lenders see your full debt picture in your credit report.\n\nThe practical limit is debt-to-income. If you already have a $20,000 personal loan at $450/month and you apply for a second $10,000 loan, the new lender will see the existing loan in your credit report and add the new payment to your DTI calculation. If the resulting DTI exceeds 40%, expect a decline.\n\nIt's usually cheaper to refinance the first loan into a larger consolidated loan rather than carry two separate ones. Two origination fees and two payment dates is friction without benefit unless the second loan is for a genuinely different purpose at a meaningfully different APR.",
    relatedSlugs: ["how-much-loan-with-40000-income", "what-credit-score-needed-for-10000-loan"],
    toolLinks: [
      { label: "Loan affordability calculator", href: "/calculators/affordability" },
    ],
  },
  {
    slug: "personal-loan-on-unemployment",
    topic: "Approval & amount",
    question: "Can I get a personal loan if I'm on unemployment?",
    shortAnswer:
      "Yes with some lenders, no with others. Unemployment benefits count as income for some online installment lenders, capped at the expected benefit duration. Approval is harder than with W-2 income; expect smaller loan amounts ($500-$5,000) and higher APRs. Adding an employed co-applicant often makes approval easier.",
    context:
      "Unemployment insurance is a temporary income source by definition, so lenders treat it differently than ongoing employment. Some online lenders accept it directly; others require additional income (Social Security, pension, partner's income) alongside it.\n\nFederal credit-union PALs (Payday Alternative Loans, capped at 28% APR) often have more flexible income verification and can be a better fit for unemployed borrowers than traditional personal loans.\n\nIf the cash need can wait until employment resumes, that's almost always the financially better path. A short bridge loan at 30% APR during unemployment is expensive; the same cash need 60 days later post-employment is much cheaper.",
    relatedSlugs: ["personal-loan-as-student", "personal-loan-as-retiree"],
    toolLinks: [
      { label: "Bad credit loans", href: "/loans/bad-credit" },
      { label: "Emergency loans", href: "/loans/emergency" },
    ],
  },
  {
    slug: "personal-loan-as-student",
    topic: "Approval & amount",
    question: "Can I get a personal loan as a student?",
    shortAnswer:
      "Possible but limited. Students with verifiable part-time income, an established credit history, and U.S. residency can apply for personal loans, typically at smaller amounts ($1,000-$10,000). A co-signer with strong credit substantially improves approval odds and APR.",
    context:
      "Most personal-loan lenders require an established credit file and verifiable income to qualify. Traditional college students often have neither, which limits approval prospects.\n\nA few options work better for student applicants: federal credit-union PALs (lower income thresholds, capped APR), Self or Kikoff credit-builder loans (no income requirement, low amounts), and student credit cards (Discover It Student, Capital One QuicksilverOne for Students) which build credit history rather than provide cash.\n\nFor education-specific costs (tuition, fees), federal student loans are the cheapest option in nearly all cases. They don't show up on credit reports the same way and have income-driven repayment options private personal loans don't offer.",
    relatedSlugs: ["personal-loan-on-unemployment", "personal-loan-with-no-credit-history"],
    toolLinks: [
      { label: "Glossary: Co-signer", href: "/glossary/co-signer" },
    ],
  },
  {
    slug: "personal-loan-as-retiree",
    topic: "Approval & amount",
    question: "Can I get a personal loan as a retiree?",
    shortAnswer:
      "Yes. Lenders count Social Security, pension, annuity, and regular retirement-account distributions as income. With sufficient documented income to support the monthly payment, retirees often have a smoother approval path than younger applicants because credit history is typically longer and DTI is lower.",
    context:
      "Federal Equal Credit Opportunity Act (ECOA) explicitly prohibits lenders from declining applicants based on age (provided they have legal capacity to enter a contract). Age cannot be the basis of a decline.\n\nThe practical consideration is income source verification. Retirees should be prepared to provide Social Security award letters, pension distribution statements, or recent bank statements showing direct deposits from retirement accounts. Some lenders also want proof that income will continue for at least the loan term (which Social Security and pensions typically satisfy).\n\nFor large loan amounts, a HELOC may be cheaper than a personal loan. Retirees often have substantial home equity and stable income, which is the ideal profile for HELOC underwriting.",
    relatedSlugs: ["personal-loan-on-unemployment", "personal-loan-vs-heloc-question"],
    toolLinks: [
      { label: "Glossary: ECOA", href: "/glossary/ecoa" },
    ],
  },

  // ─── Process & terms ──────────────────────────────────────────
  {
    slug: "maximum-personal-loan-apr",
    topic: "Process & terms",
    question: "What's the maximum personal loan APR?",
    shortAnswer:
      "Most reputable U.S. personal-loan lenders cap APRs at 35.99% under industry self-regulation and the de facto federal ceiling for mainstream credit. Some states have lower caps (Arkansas at 17%, others at 36%). The federal Military Lending Act caps active-duty service members and dependents at 36% MAPR.",
    context:
      "The 35.99% effective ceiling reflects two pressures. First, payment-card networks (Visa, Mastercard) and most institutional lenders consider APRs above 36% to be predatory and avoid them. Second, federal regulators and Congress have repeatedly debated a 36% federal cap; lenders self-regulate near this level to avoid mandatory legislation.\n\nState caps vary widely. Arkansas has a constitutional 17% cap that excludes most subprime lenders from the state. Colorado, California, and several others cap at 36%. About 26 states have no notable cap and rely on the federal ceiling and lender discretion.\n\nFor active-duty service members and covered dependents, the federal Military Lending Act caps Military APR (MAPR) at 36%. MAPR includes interest, fees, and certain credit-insurance premiums, so it can be a tighter constraint than an interest-only state cap.",
    relatedSlugs: ["personal-loan-with-500-credit-score", "is-personal-loan-interest-tax-deductible"],
    toolLinks: [
      { label: "Glossary: APR", href: "/glossary/apr" },
      { label: "Glossary: MLA", href: "/glossary/mla" },
    ],
  },
  {
    slug: "is-personal-loan-interest-tax-deductible",
    topic: "Process & terms",
    question: "Is interest on a personal loan tax-deductible?",
    shortAnswer:
      "No, in most cases. Interest on personal loans used for personal expenses (debt consolidation, weddings, vacations, medical, home improvement on someone else's home) is not deductible. Interest on personal loans used exclusively for business expenses or for investment in income-producing assets may be partially deductible. Consult a tax professional.",
    context:
      "The IRS treats personal-loan interest based on what the funds are used for, not what kind of loan it is. Most personal uses (the bulk of personal-loan borrowing) generate non-deductible interest.\n\nNarrow exceptions where interest may be deductible: business expenses (Schedule C), investment in income-producing assets (Schedule A investment interest, with limitations), or qualified educational expenses (in some cases, on Form 1098-E for student-loan interest, which is a specific federal-loan category).\n\nMortgage interest, HELOC interest used to substantially improve the home that secures the loan, and home-equity-loan interest under similar conditions can be deductible if you itemise. These rules are why HELOCs are often financially better than personal loans for home improvement despite the slower closing.",
    relatedSlugs: ["maximum-personal-loan-apr", "personal-loan-vs-heloc-question"],
    toolLinks: [
      { label: "Personal loan vs HELOC", href: "/compare/personal-loan-vs-heloc" },
    ],
  },
  {
    slug: "can-i-pay-personal-loan-early",
    topic: "Process & terms",
    question: "Can I pay off a personal loan early?",
    shortAnswer:
      "Yes, with most reputable U.S. lenders. The majority of personal-loan agreements explicitly allow prepayment without penalty. Always confirm by reading the 'Prepayment' section of the loan agreement before signing; some subprime lenders still charge prepayment penalties.",
    context:
      "Mainstream lenders like SoFi, Marcus, Discover, LightStream, and most credit unions have no prepayment penalty. You can pay extra each month against principal, make lump-sum payments, or pay off the entire balance at any time without additional cost.\n\nWatch for: how prepayments are applied. The standard is to apply extra principal payments immediately to the loan balance, which reduces total interest paid. Some lenders apply prepayments to next month's payment instead (which doesn't reduce interest); this is rare on personal loans but worth confirming.\n\nWatch for: minimum interest charges (rare but exist on some subprime products). Phrases like 'minimum finance charge' in the loan agreement can produce a small payoff penalty even when there's no explicit 'prepayment fee'.",
    relatedSlugs: ["what-happens-if-miss-personal-loan-payment", "what-happens-if-default-personal-loan"],
    toolLinks: [
      { label: "Glossary: Prepayment penalty", href: "/glossary/prepayment-penalty" },
    ],
  },
  {
    slug: "what-happens-if-miss-personal-loan-payment",
    topic: "Process & terms",
    question: "What happens if I miss a personal loan payment?",
    shortAnswer:
      "Most lenders charge a late fee ($15-$40) after a grace period (typically 5-15 days). If the payment is more than 30 days past due, the late mark is reported to the credit bureaus, which typically drops your FICO score by 60-100 points. Repeated missed payments lead to default, charge-off, and possible collection or legal action.",
    context:
      "First missed payment: late fee within the grace period. Most lenders contact you by email, phone, or text to request payment.\n\n30+ days past due: late mark reported to credit bureaus. The first 30-day late payment is the single most damaging late mark; subsequent late marks have diminishing additional impact.\n\n60-90 days past due: more aggressive collection contact from the lender. Some lenders offer hardship programs (interest pause, payment deferral) at this stage if you proactively call them.\n\n120-180 days past due: charge-off. The lender writes off the debt and often sells it to a collection agency. Your credit takes another significant hit.\n\nProactive communication is the single highest-value move when you can't make a payment. Most lenders have hardship programs but only offer them to borrowers who call before defaulting.",
    relatedSlugs: ["what-happens-if-default-personal-loan", "can-i-pay-personal-loan-early"],
    toolLinks: [
      { label: "Glossary: Late fee", href: "/glossary/late-fee" },
      { label: "Glossary: Delinquency", href: "/glossary/delinquency" },
    ],
  },
  {
    slug: "personal-loan-with-no-credit-history",
    topic: "Process & terms",
    question: "Can I get a personal loan with no credit history?",
    shortAnswer:
      "Difficult but not impossible. Most traditional lenders require established credit history. Some fintech lenders (Upstart, Petal) use alternative data (education, employment, banking history) to underwrite thin-file applicants. Federal credit-union PALs and credit-builder loans are often easier to qualify for.",
    context:
      "The fundamental challenge is that scoring models need at least 6 months of credit activity to generate a reliable FICO score. Without that, lenders can't easily price the risk of lending to you.\n\nFor borrowers with no credit history, the priority should be building a file first rather than borrowing immediately. A secured credit card with a major issuer plus a credit-builder loan from Self or a local credit union typically establishes a usable credit file in 6-12 months.\n\nIf the cash need is genuinely urgent: federal credit-union PALs cap at 28% APR and have looser credit requirements; some fintech lenders (Upstart explicitly markets to thin-file applicants) underwrite using non-credit data. Adding a co-signer with established credit usually resolves the issue at conventional lenders.",
    relatedSlugs: ["personal-loan-as-student", "personal-loan-with-500-credit-score"],
    toolLinks: [
      { label: "Bad credit loans", href: "/loans/bad-credit" },
    ],
  },
  {
    slug: "do-personal-loans-require-collateral",
    topic: "Process & terms",
    question: "Do personal loans require collateral?",
    shortAnswer:
      "No, most personal loans are unsecured (no collateral required). The lender relies on your credit and income to underwrite. Some lenders offer secured personal loans backed by a vehicle, savings account, or CD; these typically come with lower APRs but put the collateral at risk.",
    context:
      "Standard personal loans from mainstream U.S. lenders are unsecured. The lender's recourse if you default is limited to credit reporting, collection efforts, and (in some cases) lawsuit and wage garnishment. They cannot repossess a specific asset.\n\nSecured personal loans exist but are less common. Common collateral types: vehicle title (similar to an auto loan but for general personal use), CD or savings account at the same institution (share-secured loans, common at credit unions), or investment account assets.\n\nSecured loans typically carry APRs 3-8 percentage points lower than unsecured loans for the same borrower. The trade-off is real default risk: if you can't repay, you lose the collateral. For borrowers with strong cash flow and a useful asset (paid-off car, large CD), a secured loan can be substantially cheaper.",
    relatedSlugs: ["what-happens-if-default-personal-loan", "personal-loan-vs-heloc-question"],
    toolLinks: [
      { label: "Glossary: Secured loan", href: "/glossary/secured-loan" },
      { label: "Glossary: Unsecured loan", href: "/glossary/unsecured-loan" },
    ],
  },
  {
    slug: "what-happens-if-default-personal-loan",
    topic: "Process & terms",
    question: "What happens if I default on a personal loan?",
    shortAnswer:
      "After 120-180 days of missed payments, the lender typically charges off the loan and sells it to a collection agency. Your credit score takes severe damage (often 100+ points lost), the collection appears on your report for 7 years, and the collection agency may sue you to recover the balance, potentially leading to wage garnishment.",
    context:
      "The default sequence is consistent across lenders. After 30 days late, the late mark appears on your credit. After 60-90 days, the lender escalates collection efforts. At 180 days, the lender charges off the debt and typically sells it to a third-party collection agency.\n\nThe collection agency typically paid 4-14 cents on the dollar for the debt. They have strong financial incentive to recover even a fraction of the face value, so they often pursue aggressively. Under the federal Fair Debt Collection Practices Act (FDCPA), they have specific rules they must follow, including not calling at certain hours, not threatening legal action they can't take, and stopping contact after a written cease-and-desist for work calls.\n\nIn most states, the collection agency can sue you in civil court to obtain a judgment. A judgment unlocks wage garnishment (typically up to 25% of disposable income) and bank-account levies. The window to sue is limited by your state's statute of limitations (usually 3-6 years from your last payment).",
    relatedSlugs: ["what-happens-if-miss-personal-loan-payment", "what-to-do-debt-collections-question"],
    toolLinks: [
      { label: "Glossary: Default", href: "/glossary/default" },
      { label: "Glossary: Charge-off", href: "/glossary/charge-off" },
    ],
  },
  {
    slug: "personal-loan-for-down-payment",
    topic: "Special situations",
    question: "Can I use a personal loan for a down payment on a house?",
    shortAnswer:
      "Generally no. Conventional mortgage underwriting requires the down payment to come from your own funds (savings, gift, or investment sales) and explicitly prohibits using borrowed funds. Some non-conforming mortgages and seller-financed deals are more flexible, but you'll typically be declined if a personal loan shows up in your bank statement just before closing.",
    context:
      "Mortgage underwriters review your bank statements for the past 60-90 days. Large deposits must be 'sourced' (you have to document where they came from). A $15,000 personal loan deposit will show up clearly and lead to either a decline or a re-evaluation with the new debt added to your DTI.\n\nMortgages where personal loans are explicitly disallowed for down payment: conventional Fannie Mae and Freddie Mac loans, FHA loans, VA loans, USDA loans. This covers almost all mainstream U.S. mortgages.\n\nWorkaround paths: take the personal loan more than 90 days before closing and the funds 'season' (look like normal savings to underwriters); use a gift from family (must be documented as a gift, not a loan); contribute the bare-minimum 3-5% down payment if you qualify for low-down-payment programs; explore seller financing or owner-finance arrangements which have more flexibility.",
    relatedSlugs: ["personal-loan-for-business", "personal-loan-vs-heloc-question"],
    toolLinks: [
      { label: "Personal loan vs HELOC", href: "/compare/personal-loan-vs-heloc" },
    ],
  },
  {
    slug: "personal-loan-for-business",
    topic: "Special situations",
    question: "Can I use a personal loan for business expenses?",
    shortAnswer:
      "Yes. Personal loans are unrestricted-use; you can use the funds for business expenses. This is common for sole proprietors and very small businesses without established business credit. Interest may be partially tax-deductible as a business expense. Consult a tax professional for documentation.",
    context:
      "Many sole proprietors, freelancers, and very small business owners use personal loans for business expenses because the alternatives (SBA loans, business lines of credit) require established business credit history and revenue documentation that startups don't have.\n\nThe practical implication: keep clean records separating business and personal use. If 100% of the loan is used for business, all the interest may be deductible as a business expense. If only a portion is used for business, only that portion's interest is deductible. Mixing uses makes the tax accounting harder.\n\nFor any borrowing over $25,000 or any business plan that will scale, building business credit and pursuing a business-specific loan is usually a better long-term move. A personal loan in your individual name shows up in your personal DTI calculations forever, limiting other personal borrowing capacity.",
    relatedSlugs: ["personal-loan-for-down-payment", "is-personal-loan-interest-tax-deductible"],
    toolLinks: [
      { label: "Glossary: Personal loan", href: "/glossary/personal-loan" },
    ],
  },
  {
    slug: "personal-loan-vs-heloc-question",
    topic: "Special situations",
    question: "Which is cheaper, a personal loan or a HELOC?",
    shortAnswer:
      "A HELOC is usually cheaper per dollar borrowed because it's secured by your home equity (typical APR 8-12% vs 10-25% for unsecured personal loans). A personal loan is faster to close (days vs 30-45 days) and doesn't put your home at risk. The right choice depends on amount, timeline, and your equity position.",
    context:
      "For borrowings under $15,000, a personal loan is almost always the right choice. The HELOC's APR advantage is small at this size and the closing costs (2-5% of credit line) eat the savings.\n\nFor borrowings $35,000-$100,000+, the HELOC's rate advantage compounds and the closing costs amortise across a larger loan. For homeowners with sufficient equity (above 20%) and time to close (30-45 days), the HELOC is usually cheaper.\n\nThe middle range ($15,000-$35,000) is the most situational. The HELOC's tax-deduction possibility (when used to substantially improve the home) can tip the math, as can your specific credit profile and the speed at which the project needs to start.",
    relatedSlugs: ["personal-loan-for-down-payment", "highest-personal-loan-amount"],
    toolLinks: [
      { label: "Personal loan vs HELOC", href: "/compare/personal-loan-vs-heloc" },
      { label: "Home improvement loans", href: "/loans/home-improvement" },
    ],
  },
  {
    slug: "what-to-do-debt-collections-question",
    topic: "Special situations",
    question: "What should I do when my debt is in collections?",
    shortAnswer:
      "Do not acknowledge the debt verbally. Request written validation of the debt within 30 days of first contact (this is your FDCPA right). Once validated, you can dispute it, negotiate a settlement (typical range 20-40 cents on the dollar for third-party collections), or pay in full. Get any settlement agreement in writing before paying.",
    context:
      "The federal Fair Debt Collection Practices Act (FDCPA) gives you specific rights once a debt is in collections. Collectors cannot call before 8 AM or after 9 PM, cannot threaten actions they can't take, cannot use profane language, and must stop contacting you after a written request.\n\nWithin 30 days of first contact, you have the right to request written debt validation. Once you do, the collector must pause collection until they verify the debt with the original creditor. If they can't verify it, they must stop collection efforts.\n\nThird-party collection agencies typically buy debt for 4-14 cents on the dollar. They'll often accept settlement at 20-40 cents on the dollar to clear the account. Always get the settlement agreement in writing before sending payment, and never agree to anything verbally that could be construed as acknowledging the debt.",
    relatedSlugs: ["what-happens-if-default-personal-loan", "negotiate-payoff-with-creditor-question"],
    toolLinks: [
      { label: "Glossary: FCRA", href: "/glossary/fcra" },
    ],
  },
  {
    slug: "how-to-raise-credit-score-fast",
    topic: "Special situations",
    question: "How can I raise my credit score fast?",
    shortAnswer:
      "The fastest move is paying down credit-card balances to below 30% utilisation (ideally below 10%). Score impact typically lands within 30-45 days. Disputing inaccurate negative items on your credit report can add 20-60 points within the same window. Both are free and don't require new credit applications.",
    context:
      "Credit utilisation (the percentage of your total revolving credit you're using) is the second-largest factor in FICO scoring after payment history. It's also the factor that updates fastest because it's recomputed each month when your cards report.\n\nFor a card maxed at 95% utilisation, paying it down to 25% can produce a 30-60 point increase in the next reporting cycle. The strategy works on aggregate utilisation (across all cards) and on per-card utilisation; the most aggressive lift comes from improving both.\n\nDisputing inaccurate negative items is the other fast lever. Pull all three credit reports at AnnualCreditReport.com (free). For each error (accounts not yours, accounts listed twice, incorrect balances, items past their 7-year removal date), file a dispute with the bureau. They have 30 days to investigate; the result usually appears in 14-21 days.",
    relatedSlugs: ["how-personal-loan-affects-credit-score", "personal-loan-with-600-credit-score"],
    toolLinks: [
      { label: "Glossary: Credit utilisation", href: "/glossary/credit-utilization" },
    ],
  },

  // ─── Batch 2: Scenarios & edge cases ─────────────────────────────
  {
    slug: "personal-loan-with-no-job",
    topic: "Special situations",
    question: "Can I get a personal loan with no job?",
    shortAnswer:
      "Possible but limited. You'll need to show alternative verifiable income such as Social Security, disability, pension, retirement distributions, alimony, child support, or a partner's income on a joint application. Most lenders require documented monthly income sufficient to make the payment.",
    context:
      "The federal Equal Credit Opportunity Act prohibits lenders from declining solely because you lack a W-2 job, as long as you have qualifying income. Acceptable income includes Social Security, disability, veterans benefits, pension, annuities, regular retirement distributions, and (in many cases) unemployment insurance.\n\nYour debt-to-income ratio still has to support the new monthly payment. If your only income is $1,200/month from Social Security and you want a $10,000 loan with a $250/month payment, lenders will look at whether the payment leaves enough for basic living expenses. Lower loan amounts are easier to approve in these situations.\n\nAdding a co-applicant with W-2 income often unlocks better terms. Federal credit-union PALs are also more flexible on income verification than mainstream personal-loan lenders.",
    relatedSlugs: ["personal-loan-on-unemployment", "personal-loan-as-retiree"],
    toolLinks: [
      { label: "Glossary: ECOA", href: "/glossary/ecoa" },
    ],
  },
  {
    slug: "personal-loan-as-non-citizen",
    topic: "Special situations",
    question: "Can I get a personal loan as a non-citizen?",
    shortAnswer:
      "Yes if you're a permanent resident (green card holder). Non-citizens with valid work visas (H-1B, L-1, etc.) and an SSN can qualify with some online lenders, though approval is harder. Tourist visas typically don't qualify.",
    context:
      "Most U.S. personal-loan lenders require permanent U.S. residency and a Social Security number. Permanent residents are usually treated identically to citizens once they have established U.S. credit history.\n\nFor visa holders, fintech lenders like Stilt and SoFi (in some cases) underwrite using alternative data (education, employment, country-of-origin credit) for borrowers without a long U.S. credit file. Approval is realistic for H-1B and L-1 visa holders with stable U.S. employment but uncommon for short-term visa categories.\n\nITIN-only borrowers (no SSN) face the tightest constraints. Some credit unions and community-development financial institutions (CDFIs) lend to ITIN borrowers, but options are narrow.",
    relatedSlugs: ["personal-loan-with-no-credit-history", "personal-loan-with-600-credit-score"],
    toolLinks: [
      { label: "Glossary: ECOA", href: "/glossary/ecoa" },
    ],
  },
  {
    slug: "personal-loan-just-got-hired",
    topic: "Special situations",
    question: "Can I get a personal loan if I just got hired?",
    shortAnswer:
      "Possible but most lenders prefer 30-90 days of employment at the current job. An offer letter alone usually isn't enough; you typically need at least one pay stub showing the new income. Prior employment history in the same field strengthens approval odds.",
    context:
      "Lenders use employment stability as a proxy for income reliability. The standard underwriting question is whether the borrower will still have income when payments start. A brand-new hire technically has near-zero employment tenure at the new employer, which raises perceived risk.\n\nWhat helps: a prior multi-year W-2 history (especially in the same industry), a salary increase rather than a lateral move, and at least one pay stub from the new role. Some lenders will manually review applications with strong prior history despite short tenure at the current employer.\n\nIf you're between paid-leave and a confirmed start date, wait until you have one pay stub before applying. Applying too early often produces a hard inquiry and no approval.",
    relatedSlugs: ["personal-loan-on-unemployment", "personal-loan-as-student"],
    toolLinks: [
      { label: "Glossary: Underwriting", href: "/glossary/underwriting" },
    ],
  },
  {
    slug: "can-i-refinance-personal-loan",
    topic: "Process & terms",
    question: "Can I refinance a personal loan?",
    shortAnswer:
      "Yes. Refinancing means taking a new personal loan to pay off the existing one, usually to lower the APR or change the term. Makes sense when your credit has improved since the original loan or when market rates have fallen meaningfully (typically a 3+ percentage-point APR drop).",
    context:
      "The mechanics are simple: you apply for a new personal loan with the new lender, use those funds to pay off the existing loan in full, and continue with the new loan's payment schedule.\n\nWhen it makes sense: your credit has improved 50+ points since origination (often the case when the original loan was for debt consolidation that lowered your utilisation), market rates have fallen, or your income has risen enough to support a shorter term.\n\nWhen it doesn't: the new APR is close to the old one, the new loan has high origination fees, or your original loan has a prepayment penalty (which would offset the savings). Always check for prepayment penalties on the original loan before refinancing.",
    relatedSlugs: ["compare-personal-loan-offers-question", "hidden-fees-personal-loans-question"],
    toolLinks: [
      { label: "Glossary: Refinance", href: "/glossary/refinance" },
      { label: "Glossary: Prepayment penalty", href: "/glossary/prepayment-penalty" },
    ],
  },
  {
    slug: "personal-loan-to-pay-off-personal-loan",
    topic: "Process & terms",
    question: "Can I get a personal loan to pay off another personal loan?",
    shortAnswer:
      "Yes. This is functionally a refinance. It makes sense when the new loan has a lower APR, shorter term, or both. Lenders see the existing loan in your credit report and add the new payment to your DTI calculation when underwriting the second loan.",
    context:
      "There's no federal rule preventing you from holding two personal loans simultaneously, but most borrowers refinance rather than hold both. The refinance pattern is: new lender disburses funds to your checking account, you immediately pay off the original loan in full, and continue on the new loan.\n\nWhen DTI is tight, holding both loans simultaneously can push you past the 40% threshold most lenders use, which can complicate any other application (mortgage, auto) during that window. Refinancing keeps the total loan count steady.\n\nIf you're refinancing to lower the APR by less than 2 percentage points, the savings often don't justify the new origination fee. Run the math through our APR calculator before committing.",
    relatedSlugs: ["can-i-refinance-personal-loan", "can-i-have-two-personal-loans"],
    toolLinks: [
      { label: "APR calculator", href: "/calculators/apr" },
    ],
  },
  {
    slug: "personal-loan-affects-mortgage",
    topic: "Special situations",
    question: "Can a personal loan affect getting a mortgage?",
    shortAnswer:
      "Yes. The personal loan's monthly payment is included in your debt-to-income ratio, which mortgage underwriters review. A new personal loan can also drop your credit score by 5-15 points short-term from the hard inquiry. Both can affect mortgage approval or rate.",
    context:
      "Mortgage underwriters apply strict DTI limits, typically 43% for qualified mortgages and 50% for FHA. A new personal loan with a $400/month payment can push borderline applicants past the threshold and trigger decline or rate adjustment.\n\nThe hard inquiry from a personal loan also affects FICO mortgage scoring models, though by less than people fear (3-7 points, fading within 12 months). The new account lowers your average account age slightly, which is a small additional drag.\n\nIf you're within 6-12 months of a planned mortgage application, avoid taking new personal loans unless absolutely necessary. If you must, time it so the personal loan account ages at least 6 months before the mortgage application.",
    relatedSlugs: ["how-personal-loan-affects-credit-score", "how-fast-credit-score-recovers"],
    toolLinks: [
      { label: "Glossary: DTI", href: "/glossary/debt-to-income-ratio" },
    ],
  },
  {
    slug: "personal-loan-discharged-bankruptcy",
    topic: "Special situations",
    question: "Can a personal loan be discharged in bankruptcy?",
    shortAnswer:
      "Yes in most cases. Personal loans are unsecured consumer debt and are typically discharged in Chapter 7 bankruptcy. Chapter 13 may require partial repayment through the court plan. Loans taken out fraudulently or shortly before filing may be excepted from discharge.",
    context:
      "Standard personal loans behave like credit card debt in bankruptcy: in Chapter 7 they discharge after the 4-6 month case completes, and in Chapter 13 they become part of the 3-5 year payment plan with the unpaid balance discharged at the end.\n\nExceptions: personal loans taken within 90 days of filing for over $800 of luxury goods or services are presumed non-dischargeable. Cash advances over $1,100 within 70 days of filing have similar treatment. Loans obtained through false financial statements (lying on the application) can be challenged by the lender.\n\nMost borrowers' personal-loan obligations discharge cleanly. If you have a personal loan you cannot repay, bankruptcy is a legitimate tool worth discussing with a consumer bankruptcy attorney rather than continuing to accrue late fees and credit damage indefinitely.",
    relatedSlugs: ["what-happens-if-default-personal-loan", "what-to-do-debt-collections-question"],
    toolLinks: [
      { label: "Glossary: Default", href: "/glossary/default" },
    ],
  },
  {
    slug: "cosign-personal-loan",
    topic: "Process & terms",
    question: "Can I cosign a personal loan for someone?",
    shortAnswer:
      "Yes. As a cosigner you're legally responsible for the full debt if the borrower defaults. The loan appears on your credit report, affects your DTI, and any late payments hurt your score. Cosigning is a significant financial commitment that often outlasts the borrower's reliability assessment.",
    context:
      "Cosigning a personal loan is functionally borrowing the money yourself, with the borrower as the primary payer. The lender can pursue you directly for missed payments without first exhausting collection efforts against the primary borrower.\n\nPractical implications: the loan reduces your available borrowing capacity for the term of the loan (the payment is part of your DTI), late payments by the primary borrower drop your credit score, and removing yourself as cosigner after the fact is essentially impossible without a refinance.\n\nMost financial advisors recommend cosigning only when you'd be comfortable paying the full loan yourself if needed. If you're not in that position, the safer alternative is gifting or lending the borrower a smaller amount directly.",
    relatedSlugs: ["personal-loan-with-no-credit-history", "personal-loan-as-student"],
    toolLinks: [
      { label: "Glossary: Co-signer", href: "/glossary/co-signer" },
    ],
  },
  {
    slug: "personal-loan-secured-or-unsecured",
    topic: "Process & terms",
    question: "Are personal loans secured or unsecured?",
    shortAnswer:
      "Most are unsecured (no collateral required). Some lenders offer secured personal loans backed by a vehicle, CD, or savings account, which typically come with lower APRs but put the collateral at risk if you default. Standard mainstream personal loans are unsecured.",
    context:
      "An unsecured personal loan relies entirely on your credit and income for underwriting. The lender's recourse on default is limited to collections, credit reporting, and possibly a lawsuit. They cannot repossess specific property.\n\nSecured personal loans backed by collateral exist but are less common. Common collateral: a paid-off vehicle (auto-equity loan), a savings or CD account at the lender (share-secured loan), or investment account assets. Secured personal-loan APRs are typically 3-8 percentage points lower than unsecured equivalents at the same credit tier.\n\nThe trade-off is concrete: lower APR for the lender's improved recovery position. Use secured personal loans when you have a useful asset, stable cash flow, and would rather pay less interest than carry collateral risk.",
    relatedSlugs: ["do-personal-loans-require-collateral"],
    toolLinks: [
      { label: "Glossary: Secured loan", href: "/glossary/secured-loan" },
      { label: "Glossary: Unsecured loan", href: "/glossary/unsecured-loan" },
    ],
  },
  {
    slug: "personal-loan-rates-fixed-or-variable",
    topic: "Process & terms",
    question: "Are personal loan rates fixed or variable?",
    shortAnswer:
      "Most U.S. personal loans are fixed-rate, meaning the APR stays the same for the life of the loan and your monthly payment never changes. Variable-rate personal loans exist but are uncommon; HELOCs and credit cards are the more common variable-rate consumer products.",
    context:
      "Fixed-rate personal loans dominate the U.S. market because borrowers value payment predictability and lenders price the rate-risk premium into the upfront rate. The total interest you'll pay is known at signing.\n\nVariable-rate personal loans appear occasionally, usually from credit unions or fintech lenders, and adjust monthly with the prime rate plus a margin. Starting rates are sometimes lower than fixed offers, but the borrower takes on rate risk: a 2 percentage-point market move can add hundreds to total interest paid.\n\nUnless a specific variable-rate offer is meaningfully cheaper at origination and you'll repay within 12-18 months, a fixed-rate personal loan is the standard recommendation.",
    relatedSlugs: ["maximum-personal-loan-apr"],
    toolLinks: [
      { label: "Glossary: Fixed rate", href: "/glossary/fixed-rate" },
      { label: "Glossary: Variable rate", href: "/glossary/variable-rate" },
    ],
  },
  {
    slug: "documents-needed-personal-loan",
    topic: "Process & terms",
    question: "What documents do I need for a personal loan?",
    shortAnswer:
      "Standard documents: government-issued ID, proof of address (utility bill or lease), 2-3 recent pay stubs or last year's tax return, and bank statements (typically 60-90 days). Self-employed applicants need two years of tax returns. Most online lenders accept document uploads or bank-data verification via Plaid.",
    context:
      "Most online personal-loan lenders use automated income verification via Plaid (which connects to your bank account and reads recent deposits) instead of requiring manual document uploads. This shortens the application and speeds up funding.\n\nManual document uploads are required when Plaid can't connect to your bank, your income is from multiple sources, you're self-employed, or the loan amount is large enough to trigger additional verification.\n\nFor self-employed borrowers: two years of federal tax returns (Form 1040 with Schedules C, E, and/or K-1), 3-6 months of business bank statements, and a year-to-date profit-and-loss statement if available. Lenders often want to see consistent net income trending up or flat year-over-year.",
    relatedSlugs: ["how-long-personal-loan-approval-takes"],
    toolLinks: [
      { label: "Glossary: Pre-qualification", href: "/glossary/pre-qualification" },
    ],
  },
  {
    slug: "personal-loan-income-tax",
    topic: "Special situations",
    question: "Are personal loans considered income for taxes?",
    shortAnswer:
      "No. Personal loan proceeds are not taxable income because you have to repay them. However, if any portion of the loan is forgiven or settled for less than the full balance, the forgiven amount is reportable as cancellation-of-debt income (Form 1099-C) and may be taxable.",
    context:
      "Loan proceeds are not income for tax purposes, you're borrowing money you'll repay, not earning it. This applies to personal loans, mortgages, auto loans, student loans, and any other borrowed amount.\n\nThe tax exposure arises if the loan is partially forgiven. If you settle a $10,000 personal loan balance for $4,000, the lender typically issues a 1099-C reporting the $6,000 of forgiven debt as cancellation-of-debt income. You owe federal income tax on that $6,000 at your marginal rate.\n\nException: the insolvency exclusion. If your total liabilities exceed your total assets at the time of forgiveness, the forgiven debt isn't taxable up to the amount of insolvency. File IRS Form 982. Consult a tax professional for specific cases.",
    relatedSlugs: ["is-personal-loan-interest-tax-deductible", "what-happens-if-default-personal-loan"],
    toolLinks: [
      { label: "Glossary: Charge-off", href: "/glossary/charge-off" },
    ],
  },
  {
    slug: "personal-loan-buy-car",
    topic: "Special situations",
    question: "Can I use a personal loan to buy a car?",
    shortAnswer:
      "Yes, but auto loans almost always cost less. Auto loans are secured by the car itself, so APRs run 3-8 percentage points lower than unsecured personal loans at the same credit tier. Personal loans for vehicles make sense mainly when buying an older car or from a private seller where auto loans aren't available.",
    context:
      "Standard auto financing pricing: prime credit (740+) sees auto-loan APRs of 5-7%, while personal loans at the same credit tier run 8-12%. The spread compounds over the loan's life; a $25,000 vehicle financed over 60 months can cost $3,000-$5,000 more interest via personal loan than via auto loan.\n\nWhen a personal loan makes sense: vehicle older than most auto-loan lenders' age cutoff (typically 8-10 years), private-party purchase where the seller wants cash rather than a financing contract, or buying a vehicle that doesn't meet auto-loan condition requirements.\n\nFor a new or used car from a dealer, financing through the dealer or your own bank/credit union nearly always beats a personal loan on cost.",
    relatedSlugs: ["personal-loan-vs-heloc-question"],
    toolLinks: [
      { label: "Glossary: Secured loan", href: "/glossary/secured-loan" },
    ],
  },
  {
    slug: "personal-loan-start-business",
    topic: "Special situations",
    question: "Can I use a personal loan to start a business?",
    shortAnswer:
      "Yes. Personal loans are unrestricted-use, so you can fund startup costs with them. This is common for sole proprietors and very small businesses without established business credit. Interest may be partially deductible as a business expense if you keep clean records separating personal and business use.",
    context:
      "Many small business owners use personal loans for startup costs because the alternatives (SBA loans, business lines of credit) require established business credit history, revenue documentation, and a longer application process that early-stage businesses don't have.\n\nKey trade-off: the debt is in your personal name, which limits your personal borrowing capacity and exposes your personal credit to any business missteps. Once the business has 1-2 years of revenue, refinancing personal-loan business debt into business-specific financing (SBA Microloan, line of credit, equipment financing) usually makes sense.\n\nKeep clean records separating business and personal use of loan funds from day one. If 100% goes to business expenses, all the interest may be deductible. Mixed-use loans require pro-rata accounting that's harder to defend in an audit.",
    relatedSlugs: ["personal-loan-for-business"],
    toolLinks: [
      { label: "Glossary: Personal loan", href: "/glossary/personal-loan" },
    ],
  },
  {
    slug: "personal-loan-vs-savings",
    topic: "Special situations",
    question: "Is it better to use savings or take a personal loan?",
    shortAnswer:
      "Use savings when possible. Borrowing always costs more than the interest your savings earn. The exception: never deplete your emergency fund (3-6 months of expenses) for non-emergency spending, and never use savings if doing so would prevent essential employer 401(k) match.",
    context:
      "On pure math, savings always beats borrowing. Even at the best 4-5% high-yield savings APY, the gap between earning 4% on savings and paying 10-30% on a loan means borrowing destroys value.\n\nThe nuance: emergency fund integrity matters. If your only liquid savings is your emergency fund and you spend it on a discretionary purchase, you've increased the risk that an actual emergency forces you into worse borrowing later. The rule of thumb is to maintain a $1,000 minimum starter fund untouched, with the goal of growing to 3-6 months of expenses.\n\nAlso: if depleting savings would prevent you from getting your full 401(k) employer match (typically 50-100% return), borrowing for the cash need preserves the higher-return savings vehicle.",
    relatedSlugs: ["build-emergency-fund-from-zero-guide"],
    toolLinks: [
      { label: "Loan affordability calculator", href: "/calculators/affordability" },
    ],
  },
  {
    slug: "how-many-personal-loans-at-once",
    topic: "Approval & amount",
    question: "How many personal loans can I have at once?",
    shortAnswer:
      "No federal limit. Most borrowers can technically hold 2-3 personal loans simultaneously if DTI permits, but each additional loan adds underwriting friction. Practical limit is debt-to-income; once new monthly payments push you above 40-43% of gross income, additional lenders decline.",
    context:
      "There's no rule limiting personal-loan count. Some individual lenders cap their own exposure at one loan per borrower (so SoFi won't issue you a second SoFi loan while the first is open) but cross-lender there's no aggregate cap.\n\nThe binding constraint is DTI. Each existing loan's monthly payment counts against your debt service. By the time you're holding two personal loans plus a car payment plus rent or mortgage, DTI is usually near the threshold where new lenders decline.\n\nIt's almost always cheaper to refinance multiple personal loans into a single larger one rather than maintain parallel obligations. Two origination fees, two payment dates, two credit-inquiry sequences, all friction without benefit unless the loans serve genuinely separate purposes at meaningfully different terms.",
    relatedSlugs: ["can-i-have-two-personal-loans", "can-i-refinance-personal-loan"],
    toolLinks: [
      { label: "Loan affordability calculator", href: "/calculators/affordability" },
    ],
  },
  {
    slug: "joint-personal-loan-application",
    topic: "Approval & amount",
    question: "Can I apply for a personal loan jointly?",
    shortAnswer:
      "Yes with some lenders. Joint applications combine both incomes for qualification and use a blended credit profile (often the lower score controls pricing). Both applicants are equally responsible for repayment. Not all online lenders accept joint applications; credit unions and banks more commonly do.",
    context:
      "Joint applications are useful when one applicant has stronger income but weaker credit, and the other has the inverse, combining unlocks both higher loan amounts and better pricing than either could achieve alone.\n\nMechanically, both applicants' credit reports are pulled, both incomes are documented, both sign the promissory note, and both are 100% liable for the full balance. The loan reports on both credit files. Late payments hurt both.\n\nWhich lenders offer joint applications shifts over time. Navy Federal, PenFed, and many community credit unions accept them. SoFi and several online prime lenders do not, citing automated-underwriting limits. Pre-qualify with a marketplace that supports joint applications to see your real options.",
    relatedSlugs: ["cosign-personal-loan"],
    toolLinks: [
      { label: "Glossary: Co-applicant", href: "/glossary/co-applicant" },
    ],
  },
  {
    slug: "personal-loan-online-vs-bank",
    topic: "Process & terms",
    question: "Should I get a personal loan online or at a bank?",
    shortAnswer:
      "Depends on your priorities. Online lenders are faster (same-day to next-day funding), accept wider credit tiers, and use modern UX. Bank loans often have lower APRs for existing customers with strong credit but take longer to close and have stricter underwriting. Credit unions frequently beat both on rate.",
    context:
      "Online lenders dominate by volume because they fund fast and serve fair-credit borrowers banks decline. For a 620-700 FICO borrower needing a $5,000-$15,000 loan, the most competitive offers nearly always come from online installment lenders.\n\nBanks (Wells Fargo, U.S. Bank, Discover, Citi) often beat online lenders on APR for existing customers with 700+ FICO and substantial deposit relationships. The trade-off: stricter underwriting and slower funding (1-5 business days vs same-day to next-day online).\n\nCredit unions are frequently the cheapest option of all if you qualify for membership. PenFed, Navy Federal, and Alliant accept wide membership eligibility and often beat both banks and online lenders on rate for the same credit profile.",
    relatedSlugs: ["compare-personal-loan-offers-question"],
    toolLinks: [
      { label: "Banks vs credit unions vs online lenders (guide)", href: "/learn/banks-credit-unions-online-lenders" },
    ],
  },
  {
    slug: "best-time-apply-personal-loan",
    topic: "Process & terms",
    question: "When is the best time to apply for a personal loan?",
    shortAnswer:
      "After you've optimised your credit profile and verified income documentation, not before. Pay down revolving balances 30-60 days before applying so updated utilisation reports to bureaus, gather pay stubs and tax returns, and pre-qualify with 3-5 lenders within the same 14-day window so multiple inquiries count as one.",
    context:
      "Most rate-shopping advice focuses on the application step, but the higher-leverage move is preparation. A 30-point credit-score increase from paying down balances can shift APR by 3-5 percentage points, which on a multi-year loan saves more than any aggressive negotiation could.\n\nTiming within the year is mostly noise. Late Q4 sometimes sees slightly better rates as lenders push to hit annual originations targets, but the difference is small. Don't delay a legitimate need to chase a 0.25% APR variation.\n\nDo pre-qualify multiple lenders within the FICO rate-shopping window (14-45 days depending on scoring model). Multiple hard inquiries for the same loan type within the window count as one inquiry for score impact.",
    relatedSlugs: ["how-to-raise-credit-score-fast", "compare-personal-loan-offers-question"],
    toolLinks: [
      { label: "Glossary: Hard inquiry", href: "/glossary/hard-inquiry" },
    ],
  },
  {
    slug: "personal-loan-and-rent",
    topic: "Special situations",
    question: "Can a personal loan affect my apartment application?",
    shortAnswer:
      "Possibly. Landlords running tenant-screening services see the loan on your credit report and factor it into DTI assessment. The new monthly payment reduces your apparent ability to pay rent. The hard inquiry also drops your score 3-7 points temporarily, which some landlord screeners weight heavily.",
    context:
      "Landlord underwriting varies widely. Some landlords care only about income (typically 3x rent), payment history, and prior eviction history. Others use full credit-report-based scoring that weights all your debt obligations.\n\nFor competitive rental markets where landlords have many applicants, a fresh hard inquiry plus an additional monthly debt obligation can push a borderline application into decline. For markets with vacancy, the marginal impact is usually minor.\n\nIf you're within 30-60 days of a planned apartment application, defer the personal loan until after the lease is signed unless the need is urgent. The personal loan can come right after move-in once the lease is locked in.",
    relatedSlugs: ["personal-loan-affects-mortgage", "how-personal-loan-affects-credit-score"],
    toolLinks: [
      { label: "Glossary: Hard inquiry", href: "/glossary/hard-inquiry" },
    ],
  },

  // ─── Batch 3: Credit-score granularity ───────────────────────────
  {
    slug: "personal-loan-with-540-credit-score",
    topic: "Credit score",
    question: "Can I get a personal loan with a 540 credit score?",
    shortAnswer:
      "Possibly, with a small number of subprime online lenders. A 540 FICO sits in the 'poor' tier and excludes you from most mainstream personal-loan lenders. Realistic loan amounts are $500-$3,000 with APRs at or near the 35.99% legal cap. Federal credit-union PALs (capped at 28% APR) are a better-cost alternative if you qualify.",
    context:
      "Below 580 FICO is the deepest subprime tier in personal-loan underwriting. Lenders here weight income, employment stability, and bank-account history heavily because the score itself signals high default risk. Approval at 540 is realistic with verified income above $1,800/month and a clean recent banking history.\n\nIf the cash need can wait 60-90 days, focused score-improvement work (paying down revolving balances, disputing inaccurate negatives) often moves a 540 score into the 580-620 range, which materially expands lender options and drops APR by 5-10 percentage points.",
    relatedSlugs: ["personal-loan-with-500-credit-score", "personal-loan-with-580-credit-score", "how-to-raise-credit-score-fast"],
    toolLinks: [
      { label: "Bad credit loans", href: "/loans/bad-credit" },
    ],
  },
  {
    slug: "personal-loan-with-580-credit-score",
    topic: "Credit score",
    question: "Can I get a personal loan with a 580 credit score?",
    shortAnswer:
      "Yes, with several online lenders. 580 FICO sits at the bottom edge of the 'fair' tier and is the typical minimum threshold for mainstream online installment lenders. Expect APRs of 22-35.99%, loan amounts up to $10,000-$15,000, and stricter income verification than higher-tier applicants.",
    context:
      "580 is a meaningful threshold in personal-loan underwriting. Above it you're in the addressable market of most online installment lenders (Avant, Upstart, OneMain, LendingPoint, Upgrade). Below it, options narrow to subprime specialists with worse pricing.\n\nApproval at 580 typically requires verifiable monthly income above $2,500, an active checking account with consistent direct deposits, and no recent (within 90 days) charge-offs or new collections. Adding a co-applicant with stronger credit drops APR substantially.",
    relatedSlugs: ["personal-loan-with-540-credit-score", "personal-loan-with-600-credit-score"],
    toolLinks: [
      { label: "580 credit score loans", href: "/loans/580-credit-score" },
    ],
  },
  {
    slug: "personal-loan-with-620-credit-score",
    topic: "Credit score",
    question: "Can I get a personal loan with a 620 credit score?",
    shortAnswer:
      "Yes, with broad lender access. 620 sits comfortably in the 'fair' tier and most online lenders compete for these applications. Expect APRs of 18-30%, loan amounts up to $25,000, and a wider range of term options than 580 borrowers see.",
    context:
      "The jump from 580 to 620 unlocks meaningful APR savings, often 5-8 percentage points at the same income level, because lenders' risk models step down sharply at this credit band.\n\nDebt-to-income ratio becomes the binding constraint at this tier. Lenders prefer DTI under 40% post-loan, with the best APRs reserved for borrowers under 30%. Pre-qualify with 3-5 lenders through a marketplace to see the range of offers before committing.",
    relatedSlugs: ["personal-loan-with-600-credit-score", "personal-loan-with-650-credit-score"],
    toolLinks: [
      { label: "620 credit score loans", href: "/loans/620-credit-score" },
    ],
  },
  {
    slug: "personal-loan-with-680-credit-score",
    topic: "Credit score",
    question: "Can I get a personal loan with a 680 credit score?",
    shortAnswer:
      "Yes, with competitive offers. 680 FICO crosses into the 'good' tier and qualifies for nearly all mainstream online lenders plus most bank personal-loan programs. Expect APRs of 11-18%, loan amounts up to $40,000-$50,000, and minimal origination fees compared to fair-credit pricing.",
    context:
      "680 is the threshold where bank personal loans become accessible. Discover, U.S. Bank, Wells Fargo, and Citi all consider applications starting around this score, often with better APRs than online lenders for existing banking customers.\n\nFor borrowers at this credit band, the binding cost variable is origination fee. Compare effective APRs (rate plus fee, the disclosed APR under TILA) across offers rather than just headline rates. LightStream and SoFi advertise no-fee loans for 680+ borrowers.",
    relatedSlugs: ["personal-loan-with-650-credit-score", "personal-loan-with-700-credit-score"],
    toolLinks: [
      { label: "Good credit loans", href: "/loans/good-credit" },
    ],
  },
  {
    slug: "personal-loan-with-720-credit-score",
    topic: "Credit score",
    question: "Can I get a personal loan with a 720 credit score?",
    shortAnswer:
      "Yes, with the lowest APRs in the market. 720 FICO is the threshold most prime lenders use for their top-tier pricing. Expect APRs of 7-13%, no or minimal origination fees, and access to the full $50,000-$100,000 amount range from premium lenders like SoFi and LightStream.",
    context:
      "720 unlocks prime-tier pricing across most personal-loan lenders. Above this score, additional credit improvements produce diminishing rate benefits; 720 to 770 typically shifts APR by less than a percentage point at the same income.\n\nAt this credit band, the differentiator is which lender offers the best total package: lowest effective APR, longest term flexibility, fastest funding, and add-on benefits like unemployment protection or refinance pre-approval. Pre-qualify across SoFi, LightStream, Marcus, Discover, and your primary bank to see the spread.",
    relatedSlugs: ["personal-loan-with-700-credit-score", "personal-loan-with-750-credit-score"],
    toolLinks: [
      { label: "Excellent credit loans", href: "/loans/excellent-credit" },
    ],
  },
  {
    slug: "personal-loan-with-750-credit-score",
    topic: "Credit score",
    question: "Can I get a personal loan with a 750 credit score?",
    shortAnswer:
      "Yes, at the best APRs available. 750 FICO qualifies for the lowest published personal-loan rates from prime lenders. Expect APRs of 6-11%, zero origination fees from most prime lenders, and immediate approval decisions across the full lender market.",
    context:
      "At 750+, the personal-loan market competes on every dimension other than approval. Whether you should take the offer depends more on your need and overall financial position than on whether you can qualify.\n\nFor 750+ borrowers, the cheapest financing options often aren't personal loans at all: a 0% intro APR balance-transfer credit card (if the need is short-term and under $25,000) can beat any personal loan on cost. Personal loans win when the term needs to exceed 18-21 months or the amount exceeds typical card limits.",
    relatedSlugs: ["personal-loan-with-720-credit-score", "personal-loan-with-700-credit-score"],
    toolLinks: [
      { label: "Excellent credit loans", href: "/loans/excellent-credit" },
    ],
  },
  {
    slug: "good-credit-score-for-personal-loan",
    topic: "Credit score",
    question: "What's a good credit score for a personal loan?",
    shortAnswer:
      "670 or higher qualifies for competitive personal-loan offers from mainstream lenders. 720+ unlocks the lowest published APRs. Anything below 580 is considered poor and limits you to subprime specialists with capped APRs near the 35.99% legal ceiling.",
    context:
      "FICO's official tiers: 800+ exceptional, 740-799 very good, 670-739 good, 580-669 fair, below 580 poor. Lenders' effective tiers shift slightly: most personal-loan lenders treat 700+ as the threshold for the best pricing, with material APR improvements at each 30-40 point increment below that.\n\nThere's no universally 'good' score; what matters is what's good for the specific loan you want. A 660 FICO qualifies for personal loans, but won't get you a mortgage's best rate. A 720 FICO is excellent for personal loans, but mortgage lenders typically want 740+ for their best terms.",
    relatedSlugs: ["what-credit-score-needed-for-5000-loan", "personal-loan-with-700-credit-score"],
    toolLinks: [
      { label: "Glossary: Credit score", href: "/glossary/credit-score" },
    ],
  },
  {
    slug: "does-checking-credit-score-hurt",
    topic: "Credit score",
    question: "Does checking my credit score hurt it?",
    shortAnswer:
      "No. Checking your own credit score is a soft inquiry that does not affect your score, regardless of how many times you check it. Lenders pulling your credit for an application is a hard inquiry, which can lower your score by 3-7 points temporarily.",
    context:
      "The distinction between soft and hard inquiries is critical and often misunderstood. Soft inquiries include checking your own score through Credit Karma, Experian, your credit card's free score tool, or AnnualCreditReport.com. None of these affect your score.\n\nHard inquiries happen when a lender pulls your full credit report to decide on a loan or credit card application. These appear on your credit report for 24 months but only meaningfully affect your score for the first 12. Multiple hard inquiries for the same loan type within 14-45 days typically count as one inquiry under FICO's rate-shopping logic.",
    relatedSlugs: ["does-pre-qualification-hurt-credit-score", "how-personal-loan-affects-credit-score"],
    toolLinks: [
      { label: "Glossary: Soft inquiry", href: "/glossary/soft-inquiry" },
      { label: "Glossary: Hard inquiry", href: "/glossary/hard-inquiry" },
    ],
  },

  // ─── Batch 3: Loan amount granularity ────────────────────────────
  {
    slug: "what-credit-score-needed-for-1000-loan",
    topic: "Credit score",
    question: "What credit score do I need for a $1,000 personal loan?",
    shortAnswer:
      "Most lenders approving $1,000 personal loans accept FICO scores from 580 up, with some subprime lenders considering 540+. Federal credit-union PALs (Payday Alternative Loans, capped at 28% APR) often work at this loan size with looser credit requirements.",
    context:
      "$1,000 is at the small end of the personal-loan market. Many borrowers at this size would be better served by credit-union PALs (which top out at $2,000), small-dollar credit-builder loans from Self or Kikoff, or a secured credit card if the goal is also to build credit.\n\nWhen $1,000 is the right amount: short-term emergency need (car repair, medical copay), where the loan will be paid off in 6-12 months. Loan-payment math: $1,000 at 28% APR over 12 months is about $97/month, manageable but expensive interest at $164 total.",
    relatedSlugs: ["what-credit-score-needed-for-5000-loan", "personal-loan-with-580-credit-score"],
    toolLinks: [
      { label: "$1,000 personal loan", href: "/loans/amount/1000" },
    ],
  },
  {
    slug: "what-credit-score-needed-for-3000-loan",
    topic: "Credit score",
    question: "What credit score do I need for a $3,000 personal loan?",
    shortAnswer:
      "Most lenders approving $3,000 personal loans accept FICO scores from 580 up. The best APRs require 670+. Expect APRs of 15-32% depending on credit and income. Approval is straightforward for fair-credit borrowers with stable income above $2,500/month.",
    context:
      "$3,000 is a common emergency or moderate-purchase loan amount. The market is broad enough that even fair-credit applicants typically get multiple offers when pre-qualifying through a marketplace.\n\nMonthly payment math: $3,000 at 18% over 36 months is about $108/month. At 28% APR (subprime tier) the same loan runs $124/month. Both are manageable at moderate income levels but require committed monthly cash flow.",
    relatedSlugs: ["what-credit-score-needed-for-5000-loan", "what-credit-score-needed-for-10000-loan"],
    toolLinks: [
      { label: "$3,000 personal loan", href: "/loans/amount/3000" },
    ],
  },
  {
    slug: "what-credit-score-needed-for-7500-loan",
    topic: "Credit score",
    question: "What credit score do I need for a $7,500 personal loan?",
    shortAnswer:
      "Most lenders require FICO 620+ for $7,500 personal loans, with the best APRs at 680+. Expect APRs of 12-26%. Debt-to-income ratio starts mattering meaningfully at this loan size: lenders want total monthly debt service below 40% of gross income post-loan.",
    context:
      "$7,500 is in the middle of the personal-loan market by amount and sees the widest range of competing lenders. Most prime online lenders cover this size, and bank personal loans become competitive for borrowers above 680 FICO.\n\nMonthly payment math: $7,500 at 14% over 48 months is about $205/month. At 22% APR over 60 months it's $207/month. The APR vs term trade-off is meaningful here: shorter terms at higher APR can save more interest than longer terms at lower APR, depending on how the math shakes out.",
    relatedSlugs: ["what-credit-score-needed-for-5000-loan", "what-credit-score-needed-for-10000-loan"],
    toolLinks: [
      { label: "Loan payment calculator", href: "/calculators/loan-payment" },
    ],
  },
  {
    slug: "what-credit-score-needed-for-15000-loan",
    topic: "Credit score",
    question: "What credit score do I need for a $15,000 personal loan?",
    shortAnswer:
      "Most lenders require FICO 660+ for $15,000 personal loans. The best APRs (single-digit to low double-digit) require 720+. Expect annual income above $50,000 for approval at most lenders. Debt-to-income post-loan needs to stay under 40-43%.",
    context:
      "$15,000 sits in the most competitive personal-loan amount range. Borrowers in this range often qualify with multiple lenders and can drive meaningful rate competition by pre-qualifying across the market.\n\nMonthly payment math: $15,000 at 13% APR over 60 months is about $341/month. At 18% over 48 months it's $441/month. The monthly payment difference is often more important than the total interest difference for borrowers managing cash flow tightly.",
    relatedSlugs: ["what-credit-score-needed-for-10000-loan", "what-credit-score-needed-for-20000-loan"],
    toolLinks: [
      { label: "$15,000 personal loan", href: "/loans/amount/15000" },
    ],
  },
  {
    slug: "what-credit-score-needed-for-25000-loan",
    topic: "Credit score",
    question: "What credit score do I need for a $25,000 personal loan?",
    shortAnswer:
      "Most lenders require FICO 680+ for $25,000 personal loans. The best APRs require 740+ and verified annual income above $75,000. Below 680, options narrow to smaller online lenders and some specialty programs.",
    context:
      "At $25,000, debt-to-income becomes the binding constraint for most applicants. A typical 60-month $25,000 loan at 12% APR has a $556/month payment. Combined with existing debt service, this pushes many fair-credit applicants past DTI thresholds.\n\nFor borrowers below 680 FICO needing $25,000, splitting into a smaller personal loan plus another financing source (HELOC if you own a home, 401k loan if you have retirement savings) often works better than chasing a single large personal loan at a high APR.",
    relatedSlugs: ["what-credit-score-needed-for-20000-loan", "highest-personal-loan-amount"],
    toolLinks: [
      { label: "Loan affordability calculator", href: "/calculators/affordability" },
    ],
  },
  {
    slug: "minimum-income-for-personal-loan",
    topic: "Approval & amount",
    question: "What's the minimum income for a personal loan?",
    shortAnswer:
      "Most online lenders require $24,000-$36,000 minimum annual income, though some accept lower with smaller loan amounts. Federal credit-union PALs have looser income requirements (often $1,500/month documented). The binding constraint is usually debt-to-income ratio, not income alone.",
    context:
      "There's no federal minimum income for personal loans, but lender-set thresholds reflect the reality that the loan's monthly payment has to fit a realistic household budget. A lender approving a $400/month payment on $20,000 annual income is setting the borrower up to fail.\n\nFor borrowers below typical income thresholds, options include: smaller loan amounts ($500-$3,000 range), credit-union PALs, secured loans backed by a vehicle or savings, or co-applicant arrangements with someone whose income meets the threshold.",
    relatedSlugs: ["how-much-loan-with-40000-income", "personal-loan-with-no-job"],
    toolLinks: [
      { label: "Loan affordability calculator", href: "/calculators/affordability" },
    ],
  },

  // ─── Batch 3: Purpose-specific use cases ─────────────────────────
  {
    slug: "personal-loan-for-taxes",
    topic: "Special situations",
    question: "Can I use a personal loan to pay IRS taxes?",
    shortAnswer:
      "Yes. Personal loans are unrestricted-use and many borrowers use them to pay tax debts. Compare the loan's APR against the IRS payment plan interest rate (typically the federal short-term rate plus 3%, currently around 8-10%). For most borrowers, the IRS payment plan is cheaper than a personal loan.",
    context:
      "The IRS offers both short-term (180 days) and long-term installment agreements for unpaid taxes. The long-term plan currently charges around 8-10% APR plus a $31-$130 setup fee. For borrowers with fair credit, a personal loan at 18-30% APR is usually more expensive than the IRS plan.\n\nWhere a personal loan can win: when you have good credit (sub-10% APR available) AND the IRS debt is large enough that the setup fee plus monthly admin friction makes the personal loan cleaner. Or when you want to avoid the IRS appearing as a debt on your credit (though IRS installment agreements typically don't report to bureaus).",
    relatedSlugs: ["personal-loan-vs-401k-loan", "is-personal-loan-interest-tax-deductible"],
    toolLinks: [
      { label: "APR calculator", href: "/calculators/apr" },
    ],
  },
  {
    slug: "personal-loan-for-legal-fees",
    topic: "Special situations",
    question: "Can I use a personal loan for legal fees?",
    shortAnswer:
      "Yes. Personal loans are commonly used for divorce, immigration, criminal defense, and civil-suit legal fees. Some specialty 'litigation finance' lenders exist for personal-injury plaintiffs but charge high rates. For most legal needs, a standard personal loan is cheaper.",
    context:
      "Legal fees can quickly run into five or six figures, especially for divorce, immigration, or criminal defense. Most borrowers find personal loans more accessible than legal-specific financing because the underwriting is standard and pricing is transparent.\n\nLitigation finance (where a third party funds your legal fees in exchange for a percentage of any settlement) is a specialty product mostly used in personal-injury cases. Rates are effectively 30-50% APR equivalent in many deals. A standard personal loan at 12-25% APR usually beats litigation finance on cost for borrowers who can qualify.",
    relatedSlugs: ["personal-loan-for-business"],
    toolLinks: [
      { label: "Glossary: Personal loan", href: "/glossary/personal-loan" },
    ],
  },
  {
    slug: "personal-loan-for-vet-bill",
    topic: "Special situations",
    question: "Can I use a personal loan for veterinary bills?",
    shortAnswer:
      "Yes. Personal loans are commonly used for emergency vet bills, surgery costs, and major pet medical expenses. Most veterinary practices accept CareCredit (a medical credit card with 0% promotional periods), which can be cheaper than a personal loan if you'll pay off within the promo window.",
    context:
      "Veterinary emergencies can produce $3,000-$10,000+ bills quickly, especially for surgery or extended ICU stays. Most pet insurance reimburses after you've paid, so you need immediate funding regardless of coverage.\n\nCareCredit's 6-24 month 0% promotional offers often beat personal loans if you'll pay in full by the deadline. The trap: missed deadline triggers deferred interest from day one at 26-28%, retroactively. If there's any chance you can't pay off in the promo window, a fixed-rate personal loan is safer.",
    relatedSlugs: ["personal-loan-vs-balance-transfer"],
    toolLinks: [
      { label: "Emergency loans", href: "/loans/emergency" },
    ],
  },
  {
    slug: "personal-loan-to-refinance-auto-loan",
    topic: "Special situations",
    question: "Can I use a personal loan to refinance my auto loan?",
    shortAnswer:
      "Yes, but auto-loan refinancing is usually cheaper. Auto refinance loans use the car as collateral, which keeps APRs lower than an unsecured personal loan. Personal-loan refinancing of an auto loan makes sense only when the car is too old for auto refinancers (typically 8-10 years), or when you want to remove a lien on the title.",
    context:
      "Auto refinance lenders like Auto Approve, RateGenius, and Lightstream's auto-refi product typically beat personal-loan APRs by 3-7 percentage points at the same credit tier because the car secures the loan.\n\nWhere a personal loan wins: very old vehicles (auto refinancers usually decline cars older than 8-10 years or above ~100,000 miles), private-party situations, or when you want to clear the lien from the title (a personal loan with no collateral lets you receive a clean title for the car you can then sell freely).",
    relatedSlugs: ["personal-loan-buy-car"],
    toolLinks: [
      { label: "Glossary: Secured loan", href: "/glossary/secured-loan" },
    ],
  },
  {
    slug: "personal-loan-pay-off-credit-cards",
    topic: "Special situations",
    question: "Should I use a personal loan to pay off credit cards?",
    shortAnswer:
      "Often yes. If the personal loan's APR is meaningfully lower than your weighted credit-card APR (typical card rates are 22-29%, personal loans for prime credit run 7-15%), consolidating saves substantial interest and gives you a defined payoff date. Avoid running the cards back up after consolidating.",
    context:
      "Credit-card consolidation via personal loan is one of the most common and financially effective uses of personal loans. The math works when the new APR is at least 5 percentage points below your weighted card APR.\n\nThe behavioural trap: many borrowers consolidate, feel relief from lower monthly payments, then gradually run the credit-card balances back up. Six months later they have the personal loan plus new card debt. If you don't trust yourself to keep cards at zero, freeze or lock them after consolidating.",
    relatedSlugs: ["consolidate-credit-card-debt-personal-loan"],
    toolLinks: [
      { label: "Debt consolidation loans", href: "/loans/debt-consolidation" },
      { label: "Debt payoff calculator", href: "/calculators/debt-payoff" },
    ],
  },
  {
    slug: "personal-loan-for-home-repair",
    topic: "Special situations",
    question: "Can I use a personal loan for home repair?",
    shortAnswer:
      "Yes. Personal loans are commonly used for unsecured home repair financing when speed matters and the project is too small to justify a HELOC. For repairs under $25,000 or when you need funds in days rather than weeks, a personal loan typically beats secured alternatives.",
    context:
      "Home-repair financing has three main options: HELOC (lowest APR but 30-45 day close), personal loan (fast funding, no lien on home), and credit cards (highest APR but instant). For urgent repairs (roof leak, HVAC failure, broken plumbing), the personal loan's same-day-to-next-business-day funding wins.\n\nFor planned major renovations above $25,000-$50,000, a HELOC's lower APR more than compensates for the slower close and the lien on your home. The break-even shifts based on the project size and timeline.",
    relatedSlugs: ["personal-loan-vs-heloc-question", "kitchen-remodel-heloc-vs-personal-loan-guide"],
    toolLinks: [
      { label: "Home improvement loans", href: "/loans/home-improvement" },
    ],
  },
  {
    slug: "personal-loan-for-solar-panels",
    topic: "Special situations",
    question: "Can I use a personal loan for solar panels?",
    shortAnswer:
      "Yes, though specialty solar financing usually offers better rates. Companies like Mosaic, Sunlight Financial, and GoodLeap offer solar-specific loans with longer terms (15-25 years) and lower APRs (5-9%) than personal loans. Personal loans make sense for partial solar projects or when solar-specific financing is unavailable.",
    context:
      "Solar financing is its own niche because the systems qualify for federal tax credits (currently 30% of installed cost) and have predictable long-term electric-bill offsets. Solar-loan providers underwrite around the savings, which lets them offer better terms than general-purpose personal loans.\n\nWhere a personal loan wins: smaller solar projects under $15,000 (where solar-loan minimums kick in too high), DIY installations where you're sourcing equipment yourself, or supplemental funding for the gap between solar-loan amount and total project cost.",
    relatedSlugs: ["personal-loan-for-home-repair"],
    toolLinks: [
      { label: "Home improvement loans", href: "/loans/home-improvement" },
    ],
  },
  {
    slug: "personal-loan-for-moving-expenses",
    topic: "Special situations",
    question: "Can I use a personal loan for moving expenses?",
    shortAnswer:
      "Yes. Personal loans are commonly used to cover moving costs: movers, truck rental, security deposits, first-month rent, utility setup. Loan amounts of $1,000-$10,000 are typical. The fast funding fits the relocation timeline; most lenders disburse funds the next business day after acceptance.",
    context:
      "Moving costs run $1,500-$8,000 for a typical local move and $3,000-$15,000+ for cross-country. Add security deposits and first/last month's rent and the upfront cash need can easily exceed $10,000.\n\nIf your employer is reimbursing moving expenses (common for corporate relocations), the timing gap between paying expenses and receiving reimbursement is exactly what a short-term personal loan can bridge. Take a 12-24 month term so the payment is manageable until the reimbursement lands.",
    relatedSlugs: ["financing-baby-arrival-guide"],
    toolLinks: [
      { label: "Moving loans", href: "/loans/moving" },
    ],
  },
  {
    slug: "personal-loan-for-fertility-treatment",
    topic: "Special situations",
    question: "Can I use a personal loan for fertility treatment or IVF?",
    shortAnswer:
      "Yes. IVF and fertility treatments routinely cost $15,000-$30,000 per cycle and are often financed via personal loans because most U.S. health insurance doesn't cover them. Specialty fertility-financing companies (CapexMD, Future Family) also exist with sometimes better terms.",
    context:
      "Fertility treatment financing is a substantial niche because most insurance plans either don't cover IVF or impose strict lifetime maximums. Out-of-pocket cycle costs of $15,000-$30,000 plus medication ($3,000-$5,000) and storage fees are common.\n\nFor borrowers comparing options: standard personal loans at 10-20% APR typically beat fertility-specialty lenders for borrowers with strong credit. Specialty lenders can win for borrowers with fair credit who get declined by mainstream lenders. Some clinics also offer in-house payment plans worth comparing.",
    relatedSlugs: ["financing-baby-arrival-guide"],
    toolLinks: [
      { label: "Medical loans", href: "/loans/medical" },
    ],
  },

  // ─── Batch 3: Approval scenarios ─────────────────────────────────
  {
    slug: "personal-loan-with-judgment",
    topic: "Special situations",
    question: "Can I get a personal loan with a judgment on my credit?",
    shortAnswer:
      "Possible but harder. A civil judgment on your credit report signals to lenders that prior creditors had to sue to collect. Most mainstream lenders decline, though some online subprime lenders consider applications if the judgment is older than 12-24 months and you're current on other obligations.",
    context:
      "Civil judgments stop appearing on credit reports under FCRA Public Records reforms (since 2017, most judgments are no longer reported because they don't meet stricter data-accuracy standards). However, lenders can still discover judgments through public-records searches outside the credit-bureau system.\n\nIf you're trying to get credit with an outstanding judgment, the cleanest path is to settle or satisfy the judgment first (even if at a discount). A 'satisfied' judgment is much less damaging to lender perception than an open one.",
    relatedSlugs: ["personal-loan-with-no-credit-history", "what-happens-if-default-personal-loan"],
    toolLinks: [
      { label: "Glossary: Default", href: "/glossary/default" },
    ],
  },
  {
    slug: "personal-loan-with-collections",
    topic: "Special situations",
    question: "Can I get a personal loan with collections on my credit?",
    shortAnswer:
      "Possible with online subprime lenders. Mainstream lenders typically decline applications with active collections under $500. Older or paid collections are less damaging. Medical collections under $500 are ignored by modern FICO scoring models (FICO 9, FICO 10).",
    context:
      "Newer FICO models (FICO 9 and FICO 10) and current VantageScore models ignore paid collections entirely and treat medical collections differently than other consumer debt. Some lenders use these newer models; many still rely on FICO 8 or older.\n\nFor borrowers with collections seeking a loan: prioritise paying or settling the largest open collection first (negotiating for 'pay for delete' if possible), then wait 30-60 days for the credit bureau to update. The score impact of removing a single significant collection is often 30-60 points.",
    relatedSlugs: ["what-to-do-debt-collections-question", "personal-loan-with-580-credit-score"],
    toolLinks: [
      { label: "Glossary: Charge-off", href: "/glossary/charge-off" },
    ],
  },
  {
    slug: "personal-loan-after-bankruptcy",
    topic: "Special situations",
    question: "Can I get a personal loan after bankruptcy?",
    shortAnswer:
      "Yes. Many subprime online lenders specifically serve post-bankruptcy borrowers as soon as 30-90 days after discharge. APRs run high (25-35.99%) for the first 12-24 months, but on-time payments rebuild credit faster than most borrowers expect.",
    context:
      "Bankruptcy discharge clears most unsecured debt and gives the borrower a fresh start. Post-discharge, your debt-to-income ratio is often dramatically improved even though your credit score has taken a major hit.\n\nThe rebuild timeline: secured credit card within 30-60 days, small personal loan within 6-12 months, auto loan within 12-24 months (often at higher APRs), mortgage within 2-4 years (FHA loans allow as little as 2 years post-Chapter 7 discharge). The bankruptcy stays on your report 7-10 years but matters less and less as positive history accumulates.",
    relatedSlugs: ["rebuild-credit-after-default-guide", "personal-loan-discharged-bankruptcy"],
    toolLinks: [
      { label: "Bad credit loans", href: "/loans/bad-credit" },
    ],
  },
  {
    slug: "personal-loan-with-itin",
    topic: "Special situations",
    question: "Can I get a personal loan with an ITIN instead of an SSN?",
    shortAnswer:
      "Limited options. Most mainstream U.S. personal-loan lenders require a Social Security Number. Some credit unions (especially those serving immigrant communities), Community Development Financial Institutions (CDFIs), and specialty fintech lenders like Stilt and Camino Financial accept Individual Taxpayer Identification Numbers (ITIN).",
    context:
      "ITIN-only borrowers face the tightest borrowing constraints in the U.S. consumer-credit market because most credit-scoring infrastructure was built around SSN as the identifier. CDFIs (federally-designated mission-driven lenders) are explicitly chartered to serve underbanked populations including ITIN holders.\n\nStilt specifically targets newcomers to the U.S. who have ITIN-only or thin SSN credit profiles. Their underwriting weights employment, education, and country-of-origin financial data alongside whatever U.S. credit history exists. Approval and pricing are reasonable for stable income applicants.",
    relatedSlugs: ["personal-loan-as-non-citizen", "personal-loan-with-no-credit-history"],
    toolLinks: [
      { label: "Glossary: Personal loan", href: "/glossary/personal-loan" },
    ],
  },

  // ─── Batch 3: Process and rate ───────────────────────────────────
  {
    slug: "can-i-cancel-personal-loan-after-accepting",
    topic: "Process & terms",
    question: "Can I cancel a personal loan after accepting?",
    shortAnswer:
      "Sometimes, but the window is short. Unsecured personal loans typically don't have a federal right of rescission (only secured loans against your primary residence do). Some lenders offer a 1-3 business day cancellation window in their loan agreement. After that, you can prepay (pay it off immediately) instead.",
    context:
      "Federal Truth in Lending Act rescission rights apply to home-equity loans (3 business days), not to unsecured personal loans. For personal loans, your contractual right to cancel depends entirely on the loan agreement language.\n\nSome lenders include a 'cooling-off' period of 1-3 business days during which you can cancel without consequence. After that window closes (or if the agreement doesn't include one), your option is to receive the funds and immediately prepay the loan. Most reputable lenders don't charge prepayment penalties, so the cost is just the few days of interest accrued before payoff.",
    relatedSlugs: ["can-i-pay-personal-loan-early"],
    toolLinks: [
      { label: "Glossary: Prepayment penalty", href: "/glossary/prepayment-penalty" },
    ],
  },
  {
    slug: "how-to-lower-personal-loan-apr",
    topic: "Process & terms",
    question: "How can I lower my personal loan APR?",
    shortAnswer:
      "Three levers, ranked by impact: improve your credit score before applying (a 50-point increase can drop APR 5-8 points), apply jointly with a co-applicant who has stronger credit, or enrol in autopay (most lenders give 0.25-0.50% APR discount). Shopping multiple lenders also reveals pricing differences worth 2-4 points.",
    context:
      "The largest APR lever is credit score. Paying down revolving balances to below 30% utilisation typically produces a 30-60 point score increase within 60-90 days, which can shift APR by 5-10 percentage points at the same income level.\n\nMost borrowers underuse the comparison shopping lever. Pre-qualifying with 4-5 lenders through a marketplace (soft pull, no score impact) routinely reveals 3-6 percentage points of APR spread between offers for the same borrower. Take the lowest effective APR (rate plus origination fee), not the lowest headline rate.",
    relatedSlugs: ["how-to-raise-credit-score-fast", "compare-personal-loan-offers-question"],
    toolLinks: [
      { label: "APR calculator", href: "/calculators/apr" },
    ],
  },
  {
    slug: "soft-pull-vs-hard-pull",
    topic: "Process & terms",
    question: "What's the difference between a soft pull and a hard pull?",
    shortAnswer:
      "A soft pull (soft inquiry) is a credit check that doesn't affect your score and isn't visible to other lenders. Used for pre-qualification, account monitoring, and checking your own score. A hard pull (hard inquiry) happens when a lender pulls full credit for an actual application decision, lowering your score by 3-7 points temporarily.",
    context:
      "Soft pulls include: checking your own score, pre-qualification at most marketplaces, lender account monitoring (existing accounts pulling your credit for risk management), and pre-screened credit-card offers in the mail.\n\nHard pulls happen when you formally apply for credit and the lender pulls your full report to decide. They stay on your report for 24 months but only meaningfully affect your score for the first 12. Multiple hard inquiries for the same loan type within 14-45 days (depending on scoring model) count as one inquiry under FICO's rate-shopping window.",
    relatedSlugs: ["does-pre-qualification-hurt-credit-score", "does-checking-credit-score-hurt"],
    toolLinks: [
      { label: "Glossary: Soft inquiry", href: "/glossary/soft-inquiry" },
      { label: "Glossary: Hard inquiry", href: "/glossary/hard-inquiry" },
    ],
  },
  {
    slug: "what-is-good-apr-personal-loan",
    topic: "Process & terms",
    question: "What's a good APR for a personal loan?",
    shortAnswer:
      "Depends on your credit tier. Below 8% is excellent (requires 740+ FICO). 8-13% is good (670-739 FICO). 14-22% is fair (620-669 FICO). 23-35% is the subprime range (below 620 FICO). Anything above 35.99% is illegal in most U.S. states for unsecured personal loans.",
    context:
      "The 'good APR' bar shifts dramatically by credit tier because lender risk-pricing is steep. The same borrower's FICO score moving from 660 to 720 typically shifts their available APR by 6-10 percentage points.\n\nFor any specific borrower, a 'good' offer is one that's at or below the median APR of 4-5 pre-qualifications across mainstream lenders. If your fourth offer is dramatically lower than the others, verify the lender's reputation before accepting; suspiciously-low offers sometimes come with deferred origination fees or unfavourable contract terms.",
    relatedSlugs: ["maximum-personal-loan-apr", "compare-personal-loan-offers-question"],
    toolLinks: [
      { label: "APR calculator", href: "/calculators/apr" },
    ],
  },
];

export const questionsBySlug = Object.fromEntries(
  questions.map((q) => [q.slug, q])
) as Record<string, Question>;

export const questionTopics: QuestionTopic[] = [
  "Credit score",
  "Approval & amount",
  "Process & terms",
  "Special situations",
];

export function questionsByTopic(topic: QuestionTopic) {
  return questions.filter((q) => q.topic === topic);
}

/** Render-safe paragraph split for context text. */
export function questionParagraphsOf(body: string): string[] {
  return body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
}
