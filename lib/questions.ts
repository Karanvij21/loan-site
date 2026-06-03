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
