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
const REVIEWED = "2026-06-15";

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

  // ─── Batch 4: Final 20 to reach 100 entries ──────────────────────
  {
    slug: "personal-loan-autopay-discount",
    topic: "Process & terms",
    question: "Do personal loans give an autopay discount?",
    shortAnswer:
      "Most do. Mainstream lenders typically offer a 0.25-0.50% APR discount for enrolling in automatic payments from a checking account. On a $20,000 loan over 60 months, a 0.50% discount saves about $300 in total interest.",
    context:
      "The autopay discount is one of the easiest APR reductions to claim because it's automatic on application. SoFi, Marcus, LightStream, Discover, and most credit unions offer some form of autopay discount.\n\nThe catch: autopay requires consistent checking-account cash flow. If your balance fluctuates and an autopay charge can trigger overdraft, the overdraft fee (typically $35) wipes out months of discount value. Set up a low-balance alert or maintain a buffer specifically for the autopay date.",
    relatedSlugs: ["how-to-lower-personal-loan-apr"],
    toolLinks: [
      { label: "APR calculator", href: "/calculators/apr" },
    ],
  },
  {
    slug: "personal-loan-extra-payments",
    topic: "Process & terms",
    question: "Can I make extra payments on my personal loan?",
    shortAnswer:
      "Yes with virtually all reputable lenders. Most personal loans accept extra payments at any time without penalty. Extra payments typically apply to principal, which reduces total interest paid and shortens the payoff timeline.",
    context:
      "How extra payments are applied matters. The standard treatment is principal reduction, which immediately shrinks your loan balance and reduces all future interest accrual. Some lenders default to applying extras as 'pre-payments' against next month's payment instead, which doesn't reduce interest paid. Confirm by reading the loan agreement or asking the servicer.\n\nThe cleanest workflow: make your regular payment on the due date, then make extra principal payments separately (most servicer portals have a 'principal-only' payment option). This guarantees the extra dollars reduce balance and total interest.",
    relatedSlugs: ["can-i-pay-personal-loan-early"],
    toolLinks: [
      { label: "Loan payment calculator", href: "/calculators/loan-payment" },
    ],
  },
  {
    slug: "personal-loan-for-home-down-payment-revisited",
    topic: "Special situations",
    question: "Can I use a personal loan to fund a down payment on a house?",
    shortAnswer:
      "Generally no for conforming mortgages. Conventional, FHA, VA, and USDA loan underwriting explicitly prohibits using borrowed funds for the down payment. The personal loan deposit will appear in your bank statements during mortgage underwriting and lead to either decline or DTI re-evaluation.",
    context:
      "Mortgage underwriters trace large deposits in your bank account for 60-90 days before close. A personal loan disbursement is obvious. The underwriter will either decline the application or add the loan payment to your DTI, often pushing you above the threshold.\n\nWorkarounds: take the personal loan more than 90 days before mortgage application so it 'seasons' as savings, use a documented gift from family instead (which is permitted), or explore low-down-payment loan programs (FHA 3.5%, conventional 3%) that reduce the down payment need.",
    relatedSlugs: ["personal-loan-for-down-payment", "personal-loan-affects-mortgage"],
    toolLinks: [
      { label: "Glossary: DTI", href: "/glossary/debt-to-income-ratio" },
    ],
  },
  {
    slug: "personal-loan-for-college-tuition",
    topic: "Special situations",
    question: "Can I use a personal loan for college tuition?",
    shortAnswer:
      "Yes, but federal and private student loans are almost always cheaper. Federal student loans have income-driven repayment, deferment options, and potential forgiveness, none of which personal loans offer. Use personal loans for education only when student loans aren't an option or for non-tuition costs.",
    context:
      "Federal direct unsubsidised loans currently carry rates around 7-9% for undergrads, with much better repayment flexibility than personal loans. The federal options should always be exhausted first.\n\nWhere personal loans can fit: short-term education like coding bootcamps that don't qualify for federal aid, certificate programs at non-eligible schools, or covering the gap between aid and total cost when other options are unavailable. For traditional university education, use federal then private student loans before considering personal loans.",
    relatedSlugs: ["personal-loan-as-student"],
    toolLinks: [
      { label: "Glossary: Personal loan", href: "/glossary/personal-loan" },
    ],
  },
  {
    slug: "personal-loan-with-800-credit-score",
    topic: "Credit score",
    question: "Can I get a personal loan with an 800 credit score?",
    shortAnswer:
      "Yes, at the absolute best rates available. 800+ FICO is 'exceptional' tier and qualifies for the lowest published personal-loan APRs. Expect 5.99-9.99% APR, no origination fees, and immediate approval from prime lenders like SoFi, LightStream, and Marcus.",
    context:
      "At 800+, lenders compete aggressively for your business because exceptional-credit borrowers have low default rates and stable payment behaviour. Pre-qualification offers from 4-5 lenders typically spread across only 1-2 percentage points of APR, making the choice come down to features like autopay discount and origination fee.\n\nFor 800+ borrowers, the cheapest financing often isn't a personal loan at all. A 0% intro APR credit card (12-21 months) routinely beats personal loans on cost for short-term needs under $25,000. Personal loans win when the term needs to exceed 21 months or the amount exceeds card limits.",
    relatedSlugs: ["personal-loan-with-750-credit-score", "good-credit-score-for-personal-loan"],
    toolLinks: [
      { label: "Excellent credit loans", href: "/loans/excellent-credit" },
    ],
  },
  {
    slug: "personal-loan-with-450-credit-score",
    topic: "Credit score",
    question: "Can I get a personal loan with a 450 credit score?",
    shortAnswer:
      "Extremely difficult. 450 FICO is deep subprime, below the threshold of nearly all mainstream and subprime personal-loan lenders. Realistic options: federal credit-union PALs, secured loans backed by a vehicle or savings, or improving the score before applying.",
    context:
      "At 450, the borrower profile signals serious recent credit damage, likely a charge-off, repossession, or bankruptcy within the past 12 months. Most lenders interpret this as too high a default risk to underwrite at any APR.\n\nIf the cash need can wait 90-180 days, focused score improvement (paying any active collections, ensuring all current obligations are paid on time, opening a secured credit card to start building positive history) often moves a 450 score above 540, which materially expands lender options.",
    relatedSlugs: ["personal-loan-with-500-credit-score", "rebuild-credit-after-default-guide"],
    toolLinks: [
      { label: "Bad credit loans", href: "/loans/bad-credit" },
    ],
  },
  {
    slug: "personal-loan-72-month-term",
    topic: "Process & terms",
    question: "Are 72-month personal loans available?",
    shortAnswer:
      "Yes, with some lenders. 60 months is the most common maximum term for personal loans, but lenders like LightStream, SoFi, and Marcus offer 72 and 84-month terms for larger loan amounts (typically $20,000+). Longer terms lower the monthly payment but materially increase total interest paid.",
    context:
      "The math on long-term personal loans is meaningful. A $30,000 loan at 13% APR over 60 months has a $682/month payment and $10,950 total interest. The same loan at 84 months has $545/month payment and $15,807 total interest. The $137/month savings costs nearly $5,000 in extra interest.\n\nLonger terms make sense when monthly cash flow is the binding constraint, when you have a specific plan to refinance within 2-3 years, or when the lower payment frees cash for higher-return uses (debt payoff at higher rates, retirement contributions for employer match).",
    relatedSlugs: ["loan-term-personal-loan"],
    toolLinks: [
      { label: "Loan payment calculator", href: "/calculators/loan-payment" },
    ],
  },
  {
    slug: "personal-loan-fees-explained",
    topic: "Process & terms",
    question: "What fees come with a personal loan?",
    shortAnswer:
      "Origination fee (1-8% of loan, deducted from disbursement), late payment fee ($15-40 per missed payment), NSF/returned-payment fee ($15-30), and sometimes a wire/express funding fee ($15-50). Most reputable U.S. lenders don't charge prepayment penalties or monthly maintenance fees.",
    context:
      "The origination fee is the biggest cost variable. It's rolled into the disclosed APR under the Truth in Lending Act, so comparing effective APRs (not stated rates) gives an apples-to-apples cost comparison.\n\nAvoid lenders charging: monthly maintenance fees, account servicing fees, mandatory credit-insurance bundles, or prepayment penalties. These exist on subprime products and significantly increase real cost. Reputable mainstream lenders charge only the origination, late, and NSF fees listed above.",
    relatedSlugs: ["hidden-fees-personal-loans-question"],
    toolLinks: [
      { label: "Hidden fees in personal loans (guide)", href: "/learn/hidden-fees-personal-loans" },
    ],
  },
  {
    slug: "personal-loan-lump-sum-payoff",
    topic: "Process & terms",
    question: "How do I pay off a personal loan in one lump sum?",
    shortAnswer:
      "Request a payoff quote from your lender, which is the exact balance plus per-diem interest through your target payoff date. Pay that amount via the servicer's payoff portal or by wire. The loan closes within 1-3 business days; the bureau reports the closure within 30-45 days.",
    context:
      "Payoff quotes are time-sensitive, they include daily interest accrual through a specific date. Request a quote good for 7-10 days in the future to give yourself time to schedule the payment without running short.\n\nAfter the lump-sum payment posts, request a written confirmation that the loan is closed and the balance is zero. Pull your credit reports 45-60 days later to confirm the loan reports as closed and the balance shows $0. Errors at this stage are common and require dispute through the credit bureau to correct.",
    relatedSlugs: ["can-i-pay-personal-loan-early", "personal-loan-extra-payments"],
    toolLinks: [
      { label: "Glossary: Prepayment penalty", href: "/glossary/prepayment-penalty" },
    ],
  },
  {
    slug: "personal-loan-change-due-date",
    topic: "Process & terms",
    question: "Can I change my personal loan due date?",
    shortAnswer:
      "Usually yes. Most lenders allow one or two due-date changes per loan, free of charge, with a request through their servicing portal or customer service. The new due date typically takes effect within one billing cycle.",
    context:
      "Changing your due date is useful when your income arrives on a different schedule than the lender's default (often the 1st or 15th of the month). Aligning the due date with your payday cycle reduces the chance of insufficient-funds events.\n\nSome lenders limit due-date changes to once every 12 months or once per loan. A few don't allow changes at all on automatically-amortising loans. Check your loan agreement or call the servicer to confirm before assuming flexibility.",
    relatedSlugs: ["personal-loan-autopay-discount"],
    toolLinks: [
      { label: "Glossary: Monthly payment", href: "/glossary/monthly-payment" },
    ],
  },
  {
    slug: "personal-loan-when-funds-arrive",
    topic: "Process & terms",
    question: "When do personal loan funds arrive after approval?",
    shortAnswer:
      "Most online lenders disburse via ACH the next business day after you accept the final offer and e-sign documents. Some offer same-day funding for an additional wire fee ($15-50). Banks and credit unions typically take 1-3 business days.",
    context:
      "The timeline from application to funds: pre-qualification is typically instant (soft pull, no commitment), full application and approval take minutes to hours, e-signing and acceptance take minutes, and ACH disbursement settles next business day.\n\nIf you apply Friday afternoon and accept Friday evening, funds typically appear Monday or Tuesday depending on your bank. For genuine same-day needs, look for lenders advertising same-day funding (Avant, LendUp, OneMain in some cases) and confirm before applying.",
    relatedSlugs: ["how-long-personal-loan-funding-takes"],
    toolLinks: [
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    slug: "personal-loan-increase-amount-after-approval",
    topic: "Process & terms",
    question: "Can I increase my personal loan amount after approval?",
    shortAnswer:
      "Not typically. Once a personal loan is funded, the amount is fixed. If you need more money, options are: take a second personal loan from a different lender, refinance the existing loan to a larger amount with a new lender, or use a different financing tool (credit card, HELOC).",
    context:
      "Personal loans are one-time disbursements, unlike lines of credit or credit cards where you can borrow up to a limit on demand. Once funded, the loan amortises according to the original schedule.\n\nIf you anticipate needing more cash within the loan's first year, consider either taking a slightly larger loan upfront (and paying down the excess if not needed), or opening a personal line of credit instead of a fixed-amount loan. PLOCs at credit unions and some online lenders offer revolving access at lower APRs than credit cards.",
    relatedSlugs: ["can-i-refinance-personal-loan", "can-i-have-two-personal-loans"],
    toolLinks: [
      { label: "Glossary: Refinance", href: "/glossary/refinance" },
    ],
  },
  {
    slug: "personal-loan-partial-prepayment",
    topic: "Process & terms",
    question: "Does partial prepayment save interest on personal loans?",
    shortAnswer:
      "Yes. Every dollar of extra principal payment reduces all future interest accrual on the loan. Even small extra payments ($25-50/month) can knock months off the payoff timeline and save hundreds in total interest over the loan's life.",
    context:
      "Specific example: a $15,000 loan at 14% APR over 48 months has a $410/month payment and $4,672 total interest. Adding $50/month to principal cuts the payoff to 42 months and total interest to $4,072, $600 saved.\n\nThe larger the loan and the higher the APR, the more impact extra payments have. For high-APR loans (above 20%), aggressive prepayment from any windfalls (tax refunds, bonuses, side income) is usually a higher-return move than investing the same dollars.",
    relatedSlugs: ["personal-loan-extra-payments", "personal-loan-lump-sum-payoff"],
    toolLinks: [
      { label: "Loan payment calculator", href: "/calculators/loan-payment" },
    ],
  },
  {
    slug: "personal-loan-signing-online",
    topic: "Process & terms",
    question: "Are e-signed personal loan agreements legally binding?",
    shortAnswer:
      "Yes. The federal Electronic Signatures in Global and National Commerce Act (E-SIGN Act, 2000) makes electronic signatures legally equivalent to wet signatures for most consumer contracts including personal loan agreements. The lender will collect explicit E-SIGN consent before you click the final signing button.",
    context:
      "E-SIGN compliance requires the lender to: provide the contract in a format you can keep, get your affirmative consent to receive electronic disclosures, verify your hardware/software supports electronic delivery, and store records as the legal authoritative copy.\n\nOnce e-signed, the loan agreement has the same legal weight as a paper original. Download a PDF copy of your signed agreement and store it with your tax records. You'll need it for any future dispute, identity-theft case, or income-documentation request.",
    relatedSlugs: ["how-to-read-loan-agreement-guide"],
    toolLinks: [
      { label: "Glossary: Promissory note", href: "/glossary/promissory-note" },
    ],
  },
  {
    slug: "personal-loan-payment-methods",
    topic: "Process & terms",
    question: "How can I pay my personal loan each month?",
    shortAnswer:
      "Standard options: automatic ACH from your checking account (most common), online portal payment from a bank account or debit card, mailed check, or in-person at a branch for bank loans. Most lenders charge fees for debit-card and credit-card payments; ACH is free.",
    context:
      "Setting up autopay is the most reliable option because it prevents missed payments. ACH from checking is free at all major lenders; debit-card payments often carry a $5-15 convenience fee; credit-card payments are usually disallowed or carry 2-3% processing fees.\n\nFor in-person payments, banks and credit unions accept cash, check, or money order at their branches. Online-only lenders don't have branches; mail payments work but take 5-7 days to process, which can cause late marks if not timed carefully.",
    relatedSlugs: ["personal-loan-autopay-discount"],
    toolLinks: [
      { label: "Glossary: ACH transfer", href: "/glossary/ach-transfer" },
    ],
  },
  {
    slug: "personal-loan-multiple-prequalifications",
    topic: "Process & terms",
    question: "How many pre-qualifications should I do before applying?",
    shortAnswer:
      "Three to five. Below three you don't have enough comparison data; above five the marginal value of more quotes is small. All pre-qualifications use soft pulls, so additional shopping doesn't hurt your score.",
    context:
      "Pre-qualification reveals the spread between the cheapest and most expensive offers for your specific credit profile. The spread is often 3-6 percentage points of APR across mainstream lenders, which is meaningful money over a multi-year loan.\n\nMarketplace pre-qualification (one application, many offers) saves time vs applying separately at each lender. Marketplaces also typically include a mix of lender types (online, credit unions, bank-affiliated) that you might not think to apply to individually.",
    relatedSlugs: ["compare-personal-loan-offers-question", "soft-pull-vs-hard-pull"],
    toolLinks: [
      { label: "Begin pre-qualification", href: "/apply" },
    ],
  },
  {
    slug: "personal-loan-vs-paycheck-advance",
    topic: "Process & terms",
    question: "Personal loan vs paycheck advance app: which is cheaper?",
    shortAnswer:
      "Paycheck advance apps (Earnin, Dave, MoneyLion) typically advance $100-$500 against your next paycheck for an optional 'tip' (effectively 3-15% per advance, which annualises to hundreds of percent APR). Personal loans are cheaper for any need that can wait 1-2 business days and is over a few hundred dollars.",
    context:
      "Paycheck-advance apps are technically advances against earned wages, not loans, which lets them avoid most lending regulations. Their cost structure looks cheap per-advance ($1-15) but the APR equivalent is comparable to or worse than payday loans when annualised.\n\nFor any cash need over $500 or that can wait 1-2 business days, even subprime personal loans at 30-35% APR are dramatically cheaper than repeated paycheck advances. Paycheck-advance apps make sense only for genuine $50-200 same-day micro-needs.",
    relatedSlugs: ["personal-loan-vs-payday-loan-question"],
    toolLinks: [
      { label: "Emergency loans", href: "/loans/emergency" },
    ],
  },
  {
    slug: "personal-loan-after-divorce",
    topic: "Special situations",
    question: "Can I get a personal loan during or after divorce?",
    shortAnswer:
      "Yes. Divorce doesn't affect personal-loan approval directly. The relevant variables are your individual credit, individual income, and individual DTI. If joint debts are still in both spouses' names during the divorce, both income and both debt obligations factor into each person's separate underwriting.",
    context:
      "During divorce, your financial profile is technically still joint with your spouse until decree. Most lenders underwrite to your individual credit and income, but they see joint debts in your credit report. If you're still on a joint mortgage, the full mortgage payment counts against your DTI even though you might be paying only half.\n\nPost-divorce, separating joint debt is important. Refinancing joint debt into individual debt (refinancing the joint mortgage, paying off joint cards) cleans up the picture for future borrowing. Until that happens, joint obligations cap your individual borrowing capacity.",
    relatedSlugs: ["personal-loan-affects-mortgage", "personal-loan-on-unemployment"],
    toolLinks: [
      { label: "Glossary: DTI", href: "/glossary/debt-to-income-ratio" },
    ],
  },
  {
    slug: "personal-loan-after-job-loss",
    topic: "Special situations",
    question: "Should I take a personal loan after losing my job?",
    shortAnswer:
      "Usually no if your only goal is maintaining lifestyle until re-employment. The interest cost of borrowing during unemployment compounds with the difficulty of qualifying without W-2 income. Better moves: tap emergency fund, apply for unemployment insurance, negotiate with creditors for hardship deferral.",
    context:
      "Lenders assess unemployment income as temporary, capped at expected benefit duration. Personal-loan APRs available to unemployed borrowers run 25-35% range, which is expensive money to spend on routine expenses.\n\nIf you must borrow during unemployment: take the smallest loan necessary, prioritise essentials (housing, utilities, transportation to job interviews), and aim to refinance into a lower-APR loan within 60-90 days of re-employment when your DTI calculation includes the new W-2 income.",
    relatedSlugs: ["personal-loan-on-unemployment", "build-emergency-fund-from-zero-guide"],
    toolLinks: [
      { label: "Emergency loans", href: "/loans/emergency" },
    ],
  },
  {
    slug: "personal-loan-credit-bureau-reporting",
    topic: "Process & terms",
    question: "When does my personal loan show up on my credit report?",
    shortAnswer:
      "Typically 30-60 days after funding. Most lenders report to one or more credit bureaus monthly. The first report includes the opening balance, account age, and on-time payment marker. Some smaller lenders take 60-90 days to start reporting.",
    context:
      "If the loan doesn't appear on your credit reports within 90 days, contact the lender and confirm which bureaus they report to. Some non-reporting lenders exist (especially in subprime), which means on-time payments don't help your credit despite costing real money. This is a yellow flag worth knowing before accepting.\n\nFor borrowers building credit, lender-reporting behaviour is as important as APR. A 25% APR loan that reports to all three bureaus and helps your score is often worth more than a 15% APR loan that doesn't report at all.",
    relatedSlugs: ["how-personal-loan-affects-credit-score"],
    toolLinks: [
      { label: "Glossary: Credit report", href: "/glossary/credit-report" },
    ],
  },

  // ─── Batch 4: State-law specific Q&As ────────────────────────────
  {
    slug: "personal-loan-arkansas-apr-cap",
    topic: "Special situations",
    question: "Why does Arkansas cap personal loan rates at 17%?",
    shortAnswer:
      "Arkansas has a constitutional usury cap of 17% APR set by Amendment 89 to the state constitution. The cap applies to most consumer loans, making Arkansas one of the most restrictive states for unsecured lending. Many national online lenders don't operate in Arkansas because of the cap.",
    context:
      "Arkansas Amendment 89 (1982) sets the maximum consumer-loan interest rate at the higher of 17% or the federal discount rate plus 5%. In practice, with the federal discount rate well below 12%, the 17% APR cap controls.\n\nFor Arkansas residents seeking a personal loan, the limited lender pool means fewer competing offers and stricter underwriting. Federal credit-union PALs (capped at 28% APR under federal law, which preempts state caps for federal credit unions) and CDFIs are common alternatives.",
    relatedSlugs: ["maximum-personal-loan-apr"],
    toolLinks: [
      { label: "Personal loans in Arkansas", href: "/personal-loans/arkansas" },
    ],
  },
  {
    slug: "personal-loan-california-fair-access-act",
    topic: "Special situations",
    question: "What is California's Fair Access to Credit Act?",
    shortAnswer:
      "California's Fair Access to Credit Act (AB 539, 2019) caps APRs on consumer loans between $2,500 and $10,000 at 36% plus the federal funds rate. The law eliminated triple-digit-APR consumer lending in California for amounts under $10,000.",
    context:
      "Before AB 539, California allowed installment loans of $2,500-$10,000 with no APR cap, leading to consumer loans at 100%+ APR. The Fair Access to Credit Act set a binding ceiling that aligned with the federal Military Lending Act's 36% cap.\n\nFor California residents, the law means meaningfully better-priced credit for $2,500-$10,000 loans. Above $10,000, California has no APR cap, though most mainstream lenders price well below the regulatory ceiling because of market competition.",
    relatedSlugs: ["maximum-personal-loan-apr", "personal-loan-arkansas-apr-cap"],
    toolLinks: [
      { label: "Personal loans in California", href: "/personal-loans/california" },
    ],
  },
  {
    slug: "personal-loan-colorado-36-cap",
    topic: "Special situations",
    question: "Does Colorado cap personal loan APRs?",
    shortAnswer:
      "Yes. Colorado's Predatory Lending Prevention Act caps payday loans and small consumer installment loans at 36% APR. The cap applies to loans up to $1,000 (payday) and certain small installment loans. Larger personal loans in Colorado are not subject to a state APR cap.",
    context:
      "Colorado voters approved Proposition 111 in 2018, which set the 36% cap on payday loans and certain small installment loans. The cap meaningfully reduced predatory lending in the state.\n\nFor personal loans above $1,000, Colorado allows market-rate pricing, though mainstream lenders rarely approach the upper end of allowed rates because of competition. Pre-qualify with multiple lenders to see actual offers; Colorado borrowers typically have access to the full national lender market.",
    relatedSlugs: ["personal-loan-vs-payday-loan-question"],
    toolLinks: [
      { label: "Personal loans in Colorado", href: "/personal-loans/colorado" },
    ],
  },
  {
    slug: "personal-loan-new-york-25-cap",
    topic: "Special situations",
    question: "What's the personal loan APR cap in New York?",
    shortAnswer:
      "New York has a 25% civil usury cap and a 16% criminal usury threshold for unsecured consumer loans. Unlicensed lenders charging above 16% commit a misdemeanour. Licensed lenders operating under New York's banking law can charge up to 25% with specific exceptions for small loans.",
    context:
      "New York's usury law is one of the strictest in the country. The 25% civil cap voids the contract; the 16% criminal cap is enforced through the Department of Financial Services. National lenders operating in New York must comply by either licensing as state banks or routing loans through partner banks under federal preemption.\n\nFor New York consumers, the practical effect is dramatically fewer lender options compared to neighbouring states, with all offered rates below 25%. The lender market is concentrated in established players rather than the broad subprime online lending market common in states without caps.",
    relatedSlugs: ["personal-loan-california-fair-access-act"],
    toolLinks: [
      { label: "Personal loans in New York", href: "/personal-loans/new-york" },
    ],
  },
  {
    slug: "personal-loan-texas-no-apr-cap",
    topic: "Special situations",
    question: "Does Texas cap personal loan APRs?",
    shortAnswer:
      "Texas has no general APR cap on consumer installment loans, making it one of the more lender-friendly states. Mainstream personal loan lenders operate in Texas at standard market rates (typically 6-36% depending on credit). Payday lending has separate Texas-specific regulations.",
    context:
      "Texas's hands-off approach to consumer-loan APRs results in broad lender access for Texas residents. The full national market of online installment lenders, banks, and credit unions competes for Texas borrowers, often producing competitive pricing through market forces rather than regulation.\n\nThe trade-off: without a regulatory ceiling, the worst subprime products in Texas can charge APRs above what other states allow. Texas borrowers should compare offers carefully and avoid lenders charging above 36% APR, which is the de-facto industry ceiling in most other states.",
    relatedSlugs: ["maximum-personal-loan-apr"],
    toolLinks: [
      { label: "Personal loans in Texas", href: "/personal-loans/texas" },
    ],
  },
  {
    slug: "personal-loan-florida-state-rules",
    topic: "Special situations",
    question: "Are there state rules on personal loans in Florida?",
    shortAnswer:
      "Yes. Florida caps consumer installment loans at 18% APR for the first $500, 30% for $500-$2,000, and 24% for amounts above $2,000 under the Florida Consumer Finance Act. Loans by state-licensed consumer finance companies can charge these capped rates; bank loans operate under federal preemption.",
    context:
      "Florida's tiered cap structure means a $500 loan can carry up to 18% APR while a $10,000 loan can carry up to 24% APR. Federal banks and credit unions can lend at higher rates by operating under federal regulation, but state-licensed consumer-finance companies must comply with state caps.\n\nIn practice, most Florida personal-loan borrowers see offers from national online lenders operating under federal-bank partnerships, with APRs determined by credit profile rather than state law. Pre-qualify across multiple lenders to find the best available rate.",
    relatedSlugs: ["personal-loan-texas-no-apr-cap", "personal-loan-colorado-36-cap"],
    toolLinks: [
      { label: "Personal loans in Florida", href: "/personal-loans/florida" },
    ],
  },
  {
    slug: "personal-loan-illinois-predatory-lending",
    topic: "Special situations",
    question: "What protections does Illinois offer personal loan borrowers?",
    shortAnswer:
      "Illinois passed the Predatory Loan Prevention Act in 2021, capping all consumer loans at 36% APR including fees. The law applies to all installment loans, payday loans, and title loans, making Illinois one of the more borrower-protective states.",
    context:
      "The Illinois Predatory Loan Prevention Act (PLPA) set a uniform 36% Military-APR-equivalent ceiling across all consumer loan types, eliminating most subprime lending in the state. The law took effect immediately on signing in March 2021.\n\nFor Illinois residents, the practical effect is materially better pricing on small-dollar loans (where APRs previously ran 200%+ for payday and similar products), at the cost of fewer lender options for deeply subprime borrowers. Federal credit-union PALs and CDFIs remain available.",
    relatedSlugs: ["personal-loan-colorado-36-cap"],
    toolLinks: [
      { label: "Personal loans in Illinois", href: "/personal-loans/illinois" },
    ],
  },
  {
    slug: "personal-loan-state-availability",
    topic: "Special situations",
    question: "Why aren't all personal loans available in every state?",
    shortAnswer:
      "States set their own consumer-lending laws, including APR caps, licensing requirements, and disclosure rules. Lenders choose where to operate based on whether they can profitably serve a state's regulatory environment. Strict states (Arkansas, New York, Illinois) attract fewer lenders than permissive states (Texas, Utah, Nevada).",
    context:
      "Each U.S. state regulates consumer lending through its own banking department or equivalent agency. Federal preemption allows national banks and federally-chartered credit unions to operate across state lines under federal rules, which is why some lenders are available everywhere while others are state-limited.\n\nFor borrowers, the practical implication: pre-qualify only through marketplaces or lenders that explicitly serve your state. Applying with a lender that doesn't operate in your state wastes a hard inquiry on a guaranteed decline.",
    relatedSlugs: ["personal-loan-arkansas-apr-cap", "personal-loan-texas-no-apr-cap"],
    toolLinks: [
      { label: "Loans by state", href: "/personal-loans" },
    ],
  },
  {
    slug: "personal-loan-military-mla-protections",
    topic: "Special situations",
    question: "Do military service members have personal loan protections?",
    shortAnswer:
      "Yes. The federal Military Lending Act caps consumer credit to active-duty service members and their dependents at 36% Military Annual Percentage Rate (MAPR). MAPR includes interest, fees, and certain credit-insurance premiums, making it a stricter cap than typical APR.",
    context:
      "The Military Lending Act (MLA) applies to active-duty members of the Armed Forces, National Guard or Reserves on active duty for over 30 consecutive days, and their dependents (spouses and certain children). Lenders are required to check covered-borrower status before extending credit.\n\nLenders that violate the MLA face severe penalties including void contracts. For service members, the practical effect is access to mainstream lenders at the same APRs available to civilians (which are typically well below 36%) and zero exposure to triple-digit-APR subprime products.",
    relatedSlugs: ["maximum-personal-loan-apr"],
    toolLinks: [
      { label: "Glossary: MLA", href: "/glossary/mla" },
    ],
  },
  {
    slug: "personal-loan-cfpb-complaint",
    topic: "Special situations",
    question: "How do I file a CFPB complaint about a personal loan?",
    shortAnswer:
      "File at consumerfinance.gov/complaint. The CFPB sends the complaint to the lender, requires a response within 15 days, tracks the resolution, and publishes anonymised complaint data. Most lenders take CFPB complaints seriously because they affect regulatory standing.",
    context:
      "The CFPB complaint process is one of the most effective tools for resolving lender disputes. Filing takes 10-15 minutes and requires the loan details, the issue, and the resolution you're seeking. The CFPB tracks lender response times publicly, which incentivises prompt resolution.\n\nCommon valid complaints: incorrect loan terms or balance, late-fee errors, payment posting errors, unauthorised inquiries on your credit, harassment by collectors, or refusal to provide payoff quotes. Frivolous complaints (just unhappy with the rate you agreed to) are dismissed quickly.",
    relatedSlugs: ["adverse-action-notice"],
    toolLinks: [
      { label: "Glossary: CFPB", href: "/glossary/cfpb" },
    ],
  },

  // ─── After denial / after funding arc ─────────────────────────────
  {
    slug: "personal-loan-denied-what-next",
    topic: "Special situations",
    question: "I was denied a personal loan. What should I do next?",
    shortAnswer:
      "Read the adverse action notice the lender is required to send within 30 days. It lists the specific reasons for denial. Fix the top one or two reasons, wait 30 to 60 days, then re-apply with a different lender. Do not re-apply with the same lender within 30 days.",
    context:
      "Under the federal Equal Credit Opportunity Act (Regulation B), every declined application triggers a written adverse action notice within 30 days. The notice names the specific reasons (low score, high DTI, short employment history, recent derogatory marks) and the credit-reporting agency used.\n\nUse the notice as a checklist. If the top reason is high credit utilisation, pay down a card balance. If it is short credit history, wait and let accounts age. If it is recent inquiries, stop applying for two or three months. Each fix raises your score on the next pull.\n\nDifferent lenders weight risk differently, so a denial at one lender does not mean denial everywhere. Once you have addressed the named reason, re-apply with a different marketplace or a lender that targets your credit tier. Soft-pull pre-qualification will not hurt your score.",
    relatedSlugs: ["personal-loan-denied-reasons-why", "personal-loan-second-application-after-denial", "personal-loan-cosigner-after-denial"],
    toolLinks: [
      { label: "Glossary: Adverse action notice", href: "/glossary/adverse-action-notice" },
      { label: "Bad credit loans", href: "/loans/bad-credit" },
    ],
  },
  {
    slug: "personal-loan-denied-reasons-why",
    topic: "Approval & amount",
    question: "Why do lenders deny personal-loan applications?",
    shortAnswer:
      "The five most common reasons are: credit score below the lender minimum, debt-to-income above 43%, insufficient or unverifiable income, very recent derogatory marks (60 day late, collection, charge-off), and thin or no credit history. Lenders disclose the specific reason in the adverse action notice.",
    context:
      "Lenders evaluate the same handful of factors, but their thresholds differ. A 620 FICO is below the floor at some lenders and well within range at others. DTI ceilings range from 40% to 50%. Income documentation rules vary widely, especially for self-employed and 1099 applicants.\n\nThe one factor that gets every applicant denied is a recent derogatory mark. A 60-day late payment in the last six months, a charge-off in the last 12 months, or an active collection account weighs heavily in every underwriter's model, regardless of score.\n\nThin credit (fewer than three open trade lines, or files less than 24 months old) is the second most common surprise denial. The fix is time plus secured-card or credit-builder loan activity to thicken the file.",
    relatedSlugs: ["personal-loan-denied-what-next", "personal-loan-second-application-after-denial", "what-credit-score-needed-for-5000-loan"],
    toolLinks: [
      { label: "Glossary: Debt-to-income ratio", href: "/glossary/debt-to-income-ratio" },
    ],
  },
  {
    slug: "personal-loan-second-application-after-denial",
    topic: "Approval & amount",
    question: "How long should I wait to re-apply after a personal-loan denial?",
    shortAnswer:
      "Wait at least 30 days before re-applying with the same lender. With a different lender, you can re-apply immediately if the denial reason is lender-specific (DTI ceiling, income type) but wait 30 to 60 days if the reason is score or recent derogatory marks. Soft-pull pre-qualification first, hard application second.",
    context:
      "There is no federal waiting period, but two practical limits matter. Hard credit inquiries from formal applications stay on the report for 24 months and ding the score 3 to 8 points each; clustering them looks like distress to underwriters. And the same lender re-running you within 30 days is wasted effort because their underwriting model is unchanged.\n\nThe better pattern is to fix the named denial reason first (pay down a balance, document income differently, wait out a hard inquiry), then pre-qualify with two or three different lenders via soft pull. Only proceed to formal application with the lender that returns the strongest pre-qualified offer.\n\nIf the denial cited insufficient credit history, a 90-day to 6-month wait while you build trade-line activity is usually the right timeline.",
    relatedSlugs: ["personal-loan-denied-what-next", "personal-loan-multiple-prequalifications", "personal-loan-cosigner-after-denial"],
    toolLinks: [
      { label: "Apply", href: "/apply" },
    ],
  },
  {
    slug: "personal-loan-cosigner-after-denial",
    topic: "Approval & amount",
    question: "Will a cosigner help after a personal-loan denial?",
    shortAnswer:
      "Often yes, but not always. A cosigner with a 700+ FICO and stable income can flip a borderline denial to approval and drop APR by 3 to 8 percentage points. Not every lender allows cosigners, so check eligibility before asking. The cosigner is fully liable for repayment and the loan reports on their credit too.",
    context:
      "A cosigner functions as a backup borrower. The lender underwrites both files and prices the loan to the stronger one. Cosigners help most when the primary applicant has thin credit, low income relative to the requested amount, or a recent score dip but otherwise clean history.\n\nThe trade-offs are significant for the cosigner. They take on full legal responsibility for the debt, the loan appears on their credit report and counts toward their DTI, and any missed payment by the primary borrower damages the cosigner's score too. About 38% of cosigners end up paying at least one payment on a cosigned loan, per CFPB data.\n\nIf a cosigner is not available, secured personal loans (backed by a savings account or vehicle title) and credit-union Payday Alternative Loans offer alternate paths to approval at sub-36% APR.",
    relatedSlugs: ["personal-loan-denied-what-next", "personal-loan-joint-application", "personal-loan-with-500-credit-score"],
    toolLinks: [
      { label: "Glossary: Cosigner", href: "/glossary/co-signer" },
    ],
  },
  {
    slug: "personal-loan-after-funding-checklist",
    topic: "Process & terms",
    question: "What should I do in the first 30 days after my personal loan funds?",
    shortAnswer:
      "Confirm the disbursement amount, calendar the first payment date, set up autopay, save the loan agreement and amortisation schedule, and resist using freed-up credit-card limits. The first 30 days are the highest-risk window for the consolidation trap and for missed-first-payment fees.",
    context:
      "Lenders typically deduct origination fees from the disbursed amount, so the cash that hits your account is less than the loan principal. Verify the deposit matches the agreed net amount; if it does not, contact the lender within five business days while documentation is fresh.\n\nThe first payment is usually due 30 to 45 days after disbursement. Set up autopay from the same account, both because most lenders discount APR by 0.25 to 0.50 percentage points for autopay and because the first payment missed is the most common trigger for late fees and credit damage.\n\nIf you took the loan to consolidate cards, the most expensive mistake is leaving the cards open and running them back up. Either close the cards or, if you want to preserve the credit history, freeze them in a drawer and zero out their auto-charges.",
    relatedSlugs: ["personal-loan-when-funds-arrive", "personal-loan-payment-methods", "personal-loan-change-due-date"],
    toolLinks: [
      { label: "Debt payoff calculator", href: "/calculators" },
    ],
  },
  {
    slug: "personal-loan-late-payment-grace-period",
    topic: "Process & terms",
    question: "Is there a grace period on a personal-loan late payment?",
    shortAnswer:
      "Most lenders offer a 10 to 15 day grace period before charging a late fee. The late payment is not reported to credit bureaus until it is 30 days past due. Call the lender within the grace window if you know you will be late; most will waive the fee for a first-time borrower in good standing.",
    context:
      "Grace period length is set in the loan agreement and varies by lender. Federal credit unions are generally on the longer end (15 days). Online lenders and bank affiliates tend toward 10 days. Late fees range from $15 to $39 or 5% of the missed payment, whichever is lower (state caps apply in some jurisdictions).\n\nThe credit-bureau reporting threshold is 30 days past due. A payment that lands on day 25 still incurs the late fee but does not hit the credit file. A payment that lands on day 31 is reported as a 30-day late, which can drop a strong score by 60 to 110 points.\n\nIf you cannot make the payment, contact the lender before the due date. Most offer hardship options (one-time deferral, modified payment plan) that keep the account current on the credit file even when cash flow does not allow on-time payment.",
    relatedSlugs: ["personal-loan-missed-payment-credit-impact", "personal-loan-default-vs-charge-off"],
    toolLinks: [
      { label: "Glossary: Late fee", href: "/glossary/late-fee" },
    ],
  },
  {
    slug: "personal-loan-missed-payment-credit-impact",
    topic: "Process & terms",
    question: "How much will one missed personal-loan payment drop my credit score?",
    shortAnswer:
      "A single 30-day late payment drops a strong score (740+) by 60 to 110 points. The same late on a fair-credit score (620 to 680) drops it 40 to 80 points. The late mark stays on the credit report for seven years from the date of the missed payment, though its impact fades materially after 24 months.",
    context:
      "Payment history is 35% of the FICO score, the single largest factor. A 30-day late is the smallest reportable derogatory; 60-day, 90-day, and 120-day lates compound the damage at each step.\n\nThe higher the starting score, the further the drop. FICO's model assumes high-score borrowers have spotless histories, so a single late is a larger deviation from baseline than the same late on a borrower with a history of occasional issues.\n\nRecovery starts immediately once you bring the account current. Scores typically recover 50 to 70% within 12 months if no further negatives are added. A goodwill letter to the lender asking them to remove the late mark sometimes works for first-time issues on long-tenured accounts; success rates are 20 to 30%.",
    relatedSlugs: ["personal-loan-late-payment-grace-period", "personal-loan-default-vs-charge-off", "how-to-raise-credit-score-fast"],
    toolLinks: [
      { label: "Glossary: FICO score", href: "/glossary/fico-score" },
    ],
  },
  {
    slug: "personal-loan-default-vs-charge-off",
    topic: "Process & terms",
    question: "What is the difference between loan default and charge-off?",
    shortAnswer:
      "Default is the lender's formal declaration that you have breached the loan agreement, typically after 90 to 120 days of non-payment. Charge-off is the accounting step where the lender writes the debt off its books as a loss, usually at 180 days past due. You still owe the debt after charge-off; it is the most damaging single mark on a credit report.",
    context:
      "Default and charge-off are sequential states. Default happens first, usually at 90 days past due though the trigger varies by contract. Default unlocks the lender's remedies under the loan agreement: accelerating the full balance due, suing for the debt, and reporting the default to bureaus.\n\nCharge-off follows at 180 days under federal banking regulation for most consumer loans. The lender removes the receivable from its balance sheet (an accounting move) and either continues internal collection, places it with a third-party collection agency, or sells the debt to a debt buyer. The status changes from \"default\" to \"charged off\" on the credit report.\n\nNeither step extinguishes the debt. You still owe it, and statute of limitations on collection lawsuits varies by state (3 to 10 years). A charge-off mark on the credit report stays seven years from the original date of delinquency, regardless of subsequent payment.",
    relatedSlugs: ["personal-loan-missed-payment-credit-impact", "personal-loan-debt-sold-to-collections-rights"],
    toolLinks: [
      { label: "Glossary: Charge-off", href: "/glossary/charge-off" },
    ],
  },
  {
    slug: "personal-loan-debt-sold-to-collections-rights",
    topic: "Special situations",
    question: "What are my rights if my personal loan is sold to a collections agency?",
    shortAnswer:
      "Under the federal Fair Debt Collection Practices Act, the collector must send a written validation notice within five days of first contact. You can demand debt validation in writing within 30 days; the collector must stop collection until they prove the debt is yours and the amount is correct. They cannot call before 8 AM or after 9 PM, contact your employer, or use threats.",
    context:
      "Debt buyers acquire portfolios of charged-off accounts at pennies on the dollar. Many lack full documentation, which is the core of your leverage. Send a written debt-validation request within 30 days of first contact (use certified mail with return receipt). Collection must pause until they produce the original loan agreement, signed assignment of the debt from the original creditor, and an itemised balance.\n\nAbout 25 to 40% of validation requests return either no response or insufficient documentation, in which case the collector cannot legally pursue the debt or report it to bureaus. They sometimes still try; that is itself an FDCPA violation worth a CFPB complaint.\n\nDo not make a partial payment or verbally acknowledge the debt before deciding strategy. In some states, either step restarts the statute-of-limitations clock from zero, extending the collector's legal window.",
    relatedSlugs: ["personal-loan-default-vs-charge-off", "personal-loan-cfpb-complaint"],
    toolLinks: [
      { label: "Glossary: FDCPA", href: "/glossary/fdcpa" },
      { label: "Glossary: Debt validation letter", href: "/glossary/debt-validation-letter" },
    ],
  },
  {
    slug: "personal-loan-refinance-when",
    topic: "Process & terms",
    question: "When does it make sense to refinance a personal loan?",
    shortAnswer:
      "Refinance when the new APR is at least 2 percentage points lower than your current one AND the origination fee on the new loan is under 3%. Also consider it if you need a longer term to lower the payment or a shorter term to pay off faster without origination fees eating the savings. Avoid refinancing in the last 12 months of an existing loan.",
    context:
      "The math test is simple. Take your current loan's remaining balance and remaining months. Calculate total remaining interest at the current APR. Then run the same balance at the new APR over the new term, adding the origination fee on top. If the new total cost is meaningfully lower, refinance pays off.\n\nThe two situations where refinancing is almost always a mistake: late in the loan when most interest is already paid (the fee outweighs savings), and stretching the term significantly longer just to lower the monthly payment (you save monthly cash flow but pay more total interest).\n\nCredit profile improvements are the most common refi trigger. A 60-point score increase after 18 to 24 months of on-time payments can drop APR by 5 to 8 percentage points, easily justifying the fee.",
    relatedSlugs: ["personal-loan-lump-sum-payoff", "personal-loan-partial-prepayment"],
    toolLinks: [
      { label: "APR calculator", href: "/calculators" },
    ],
  },

  // ─── Borrower-segment arc: self-employed, gig, military, retirees, etc ──
  {
    slug: "personal-loan-self-employed-qualify",
    topic: "Approval & amount",
    question: "How do self-employed borrowers qualify for a personal loan?",
    shortAnswer:
      "Self-employed applicants typically need two years of tax returns (Schedule C, K-1, or 1120-S) showing stable or growing net income. Lenders qualify off the net income after deductions, not gross revenue, which is the most common surprise. Some lenders accept 12 to 24 months of bank statements as alternative documentation.",
    context:
      "Self-employment makes underwriting harder because there's no employer to verify income against. The standard approach is two years of personal tax returns. Lenders qualify off line 31 of Schedule C (net profit) for sole proprietors, or distributions plus W-2 wages for S-corp owners, not gross revenue or top-line receipts. This catches many self-employed borrowers off-guard: a freelancer billing $180,000 a year but taking $60,000 of business deductions qualifies as a $120,000 earner, not a $180,000 one.\n\nBank-statement loans are an alternative for borrowers whose tax returns understate true cash flow. The lender averages 12 to 24 months of personal or business deposits to derive a qualifying income. Bank-statement loans typically price 1 to 3 percentage points higher than fully documented loans.\n\nIf the self-employment is under two years old, expect declines from prime lenders. Subprime and marketplace lenders that underwrite primarily on credit and DTI rather than income can sometimes approve thin-documentation applicants, but pricing reflects the higher risk.",
    relatedSlugs: ["personal-loan-1099-contractor-application", "personal-loan-gig-worker-income", "personal-loan-multiple-income-sources"],
    toolLinks: [
      { label: "Self-employed loans", href: "/loans/self-employed" },
      { label: "Glossary: Bank-statement loan", href: "/glossary/bank-statement-loan" },
    ],
  },
  {
    slug: "personal-loan-1099-contractor-application",
    topic: "Process & terms",
    question: "What does a 1099 contractor need to apply for a personal loan?",
    shortAnswer:
      "Two years of 1099 income shown on Schedule C, the most recent two years of personal tax returns, and three months of business bank statements. Lenders qualify off net income after business deductions, plus year-to-date deposits as confirmation of current trajectory.",
    context:
      "1099 contractors face the same underwriting standards as other self-employed applicants but with one wrinkle: the income is documented on the 1099 forms themselves, which acts as a baseline verification. Lenders cross-check the tax-return numbers against the 1099 totals to catch under-reporting.\n\nFor a high-deduction contractor (heavy mileage, home office, large equipment depreciation), tax-return net income can run 40 to 60% below the 1099 gross. Plan for this by either reducing the loan amount requested or applying with a bank-statement lender that derives income from deposits instead. A contractor netting $80K but depositing $200K of business revenue per year qualifies for materially more loan with the bank-statement approach.\n\nThe self-employment must be at least 24 months old at most lenders. Newer contractors sometimes qualify with co-signers, with secured loans backed by a savings account, or with credit-union Personal Loans tied to membership history.",
    relatedSlugs: ["personal-loan-self-employed-qualify", "personal-loan-gig-worker-income"],
    toolLinks: [
      { label: "1099 contractor loans", href: "/loans/1099-contractor" },
    ],
  },
  {
    slug: "personal-loan-gig-worker-income",
    topic: "Approval & amount",
    question: "Can Uber, DoorDash, or other gig workers get a personal loan?",
    shortAnswer:
      "Yes, but income documentation is the gating step. Provide app-platform earnings statements (Uber 1099-K, DoorDash earnings report, etc.), 12 to 24 months of bank statements showing deposit history, and two years of personal tax returns. Stable or growing weekly earnings over at least 12 months are the key signal.",
    context:
      "Gig workers face two distinct underwriting headwinds. First, the income is variable week-to-week, so lenders look at trailing-12-month averages rather than recent weeks. Second, deductions on Schedule C are usually heavy (vehicle expenses, mileage, phone), so reported taxable income materially understates gross earnings.\n\nThe right approach: download the earnings report directly from each platform, the relevant 1099-K or 1099-NEC, and 12 months of bank statements showing the platform deposits. A lender willing to write bank-statement loans can derive a qualifying income from the deposit average, which usually beats the tax-return number. Marketplace lenders and CDFI loans are gig-friendlier than traditional banks.\n\nApprovals improve materially after 24 months of gig income with consistent weekly patterns. Borrowers under 12 months should expect declines from prime lenders and target subprime or secured options instead.",
    relatedSlugs: ["personal-loan-self-employed-qualify", "personal-loan-multiple-income-sources"],
    toolLinks: [
      { label: "Gig worker loans", href: "/loans/gig-workers" },
    ],
  },
  {
    slug: "personal-loan-active-duty-military",
    topic: "Special situations",
    question: "What personal-loan protections do active-duty military have?",
    shortAnswer:
      "Active-duty servicemembers (including their spouses and dependents) are protected by the Military Lending Act, which caps Military APR (MAPR) at 36% and bans mandatory arbitration, prepayment penalties, and rollover-style refinancing. The Servicemembers Civil Relief Act (SCRA) caps APR at 6% on pre-service debts.",
    context:
      "The Military Lending Act (MLA) is the strongest federal consumer-credit protection. Lenders verify active-duty status through the DoD Manpower Data Center; any loan to a covered borrower must comply with the 36% MAPR cap, which includes interest, fees, credit insurance premiums, and certain ancillary charges. Loans that exceed MAPR are void and the lender must refund payments. Most online personal-loan lenders simply price below 35% for everyone to avoid the compliance headache.\n\nSCRA is a separate protection covering debts incurred before active duty. On any pre-service consumer loan, including a personal loan taken before deployment, the servicemember can request a rate reduction to 6% APR for the duration of active service. The lender must reduce the rate within 30 days of the written request and a copy of orders.\n\nNavy Federal Credit Union, USAA, and PenFed are the standard military-focused lenders and typically offer the best pricing for active-duty applicants. Membership is open to active-duty, veterans, and family.",
    relatedSlugs: ["personal-loan-military-mla-protections", "personal-loan-veteran-options"],
    toolLinks: [
      { label: "Glossary: MAPR", href: "/glossary/mapr" },
    ],
  },
  {
    slug: "personal-loan-veteran-options",
    topic: "Special situations",
    question: "What personal-loan options do veterans have?",
    shortAnswer:
      "Veterans qualify for general consumer personal loans plus veteran-specific options at Navy Federal, USAA, and PenFed (membership open to veterans). The VA does not directly offer or guarantee personal loans the way it does mortgages, but veteran-focused credit unions often discount APR by 0.25 to 0.50 percentage points for service members.",
    context:
      "Veterans should default to credit-union lending. Navy Federal, USAA, and PenFed all require veteran or veteran-family membership and price personal loans materially below mainstream online lenders for prime-credit applicants. APRs at these credit unions typically start near the 18% federal cap rather than the 35.99% marketplace ceiling, even for fair-credit applicants.\n\nThere are no VA-guaranteed personal loans. The VA's loan-guarantee programs cover home mortgages, home-improvement loans tied to the VA mortgage, and small-business loans (the latter via the SBA). Marketing that pitches a \"VA personal loan\" is typically using the term loosely to refer to a marketplace loan with veteran-friendly underwriting.\n\nVeteran identification can also unlock minor APR discounts at other lenders (LightStream, SoFi, Marcus all have programs). The discount is usually 0.25 percentage points, which is meaningful but not the difference-maker; the credit-union route still beats it.",
    relatedSlugs: ["personal-loan-active-duty-military", "personal-loan-credit-union-loan"],
    toolLinks: [
      { label: "Compare: Marketplace vs credit-union loan", href: "/compare/personal-loan-vs-credit-union-loan" },
    ],
  },
  {
    slug: "personal-loan-retiree-social-security-income",
    topic: "Approval & amount",
    question: "Can a retiree on Social Security get a personal loan?",
    shortAnswer:
      "Yes. Social Security counts as income for personal-loan underwriting, just like W-2 wages. Lenders need documentation of the benefit amount (the most recent SSA-1099 or benefit verification letter) plus credit score and DTI in normal ranges. Pension income is also accepted with the 1099-R.",
    context:
      "Federal law (the Equal Credit Opportunity Act) prohibits age discrimination in consumer lending, and Social Security is treated as stable income because the federal government is the payor. A retiree with $2,500 of monthly Social Security plus a $1,500 pension qualifies on the same income basis as a working borrower making $4,000 of W-2 wages, before adjusting for any other risk factors.\n\nDocumentation is the only meaningful difference. Lenders ask for the SSA-1099 (annual benefit statement) and often a current benefit verification letter, which can be downloaded from the my.ssa.gov portal in a few minutes. For pension income, the 1099-R from the pension provider plus the most recent monthly deposit statement is standard.\n\nTerm length is sometimes a practical consideration for older borrowers. A 72-month loan taken at age 70 will outlast the typical retiree's primary cash-flow planning horizon. Many credit unions counsel retirees toward shorter terms even when monthly affordability would support longer; the trade-off is between monthly cash flow and total interest paid.",
    relatedSlugs: ["personal-loan-no-credit-history-options"],
    toolLinks: [],
  },
  {
    slug: "personal-loan-itin-applicant",
    topic: "Special situations",
    question: "Can someone with an ITIN instead of an SSN get a personal loan?",
    shortAnswer:
      "Yes, at a smaller set of lenders. ITIN-only applicants typically need to apply with a credit union or CDFI that explicitly accepts ITIN, since most marketplace lenders require an SSN to pull credit. Bank-statement-based underwriting (12 to 24 months of deposits) is the common path because ITIN holders often have thin or no credit files.",
    context:
      "An Individual Taxpayer Identification Number (ITIN) is issued by the IRS to people who file taxes but don't have a Social Security number, including undocumented workers and certain non-resident aliens. ITIN holders can build credit (most credit bureaus accept ITIN-only applications) but the credit file is often thin or non-existent.\n\nThe practical lending path for an ITIN applicant: a community-development financial institution (CDFI), a credit union with explicit ITIN-friendly underwriting, or an online lender specialising in the immigrant market. Self-Help Credit Union, Latino Credit Union, and Mission Asset Fund all have ITIN-friendly products. Approvals usually depend on bank-statement income verification and a co-signer with an SSN-based file, plus stable U.S. address history of 12+ months.\n\nAPRs tend to run 2 to 5 percentage points above comparable SSN-based loans because of the thinner data. Building 12 to 24 months of secured-card or credit-builder-loan activity before applying for an unsecured personal loan usually pays for itself in better pricing.",
    relatedSlugs: ["personal-loan-no-credit-history-options"],
    toolLinks: [
      { label: "Glossary: ITIN", href: "/glossary/itin" },
    ],
  },
  {
    slug: "personal-loan-no-credit-history-options",
    topic: "Approval & amount",
    question: "How do borrowers with no credit history get approved for a personal loan?",
    shortAnswer:
      "Three paths: a secured personal loan backed by a savings deposit, a credit-builder loan from a credit union or CDFI, or an unsecured loan with a co-signer who has established credit. All three build credit history while delivering funds.",
    context:
      "A \"no credit history\" file (sometimes called \"credit invisible\") usually means fewer than three open trade lines or a file younger than 24 months. Without this baseline, FICO can't score the file at all, which makes most unsecured-loan applications auto-decline.\n\nThe secured-loan path uses a deposit (typically the loan amount itself, locked in a savings account) as collateral. The lender extends a parallel personal loan and reports payments to the bureaus, building credit history from month one. Self Financial, Self Lender, and most credit-union secured-loan products work this way.\n\nThe credit-builder-loan path is similar but flipped: the lender holds the loan proceeds in escrow while the borrower pays monthly installments. At payoff, the borrower receives the principal back minus interest. CDFIs price these at 4 to 8% APR. After 12 months of on-time payments, the file has enough history to apply unsecured.\n\nThe co-signer path is the fastest. A borrower with a credit-established co-signer (FICO 700+) can usually qualify for a standard unsecured personal loan immediately, with the co-signer's credit driving pricing.",
    relatedSlugs: ["personal-loan-cosigner-after-denial", "personal-loan-itin-applicant", "personal-loan-with-500-credit-score"],
    toolLinks: [
      { label: "Glossary: Tradeline", href: "/glossary/tradeline" },
    ],
  },
  {
    slug: "personal-loan-stay-at-home-spouse",
    topic: "Approval & amount",
    question: "Can a stay-at-home spouse with no income get a personal loan?",
    shortAnswer:
      "Yes, via a joint application or co-signed loan that uses the working spouse's income to qualify. Under federal Regulation B, lenders cannot discount a spouse's earned income, so a joint household income of $80,000 qualifies the household even if only one spouse earns it. A solo application with no income generally cannot qualify for an unsecured loan.",
    context:
      "Regulation B (the Equal Credit Opportunity Act's implementing regulation) explicitly requires lenders to consider all income, including a spouse's, when both spouses sign the loan. A joint application combining one income and the other's strong credit history can sometimes deliver better pricing than the working spouse's individual application alone.\n\nThe distinction matters: a joint application makes both spouses fully liable for the debt and reports on both credit files. A co-signed loan makes the stay-at-home spouse the primary applicant and the working spouse the secondary; this is unusual structurally and lenders sometimes decline because it inverts the typical liability pattern.\n\nA stay-at-home spouse with no other income source who needs a personal loan independently of the working spouse typically has only the secured-loan path (with a deposit as collateral) or a family loan. Lenders cannot extend unsecured credit to a borrower with zero qualifying income; this is true regardless of marital status.",
    relatedSlugs: ["personal-loan-joint-application", "personal-loan-cosigner-after-denial"],
    toolLinks: [],
  },
  {
    slug: "personal-loan-teacher-nurse-public-employee",
    topic: "Special situations",
    question: "Are there personal-loan discounts for teachers, nurses, or other public employees?",
    shortAnswer:
      "Yes, at several credit unions and online lenders. Discounts typically run 0.25 to 0.75 percentage points off APR for verified public-service employment (teaching, nursing, first responder, public-safety, military). The discount is usually applied via membership pricing at NEA-affiliated credit unions or via promotional APR at lenders like LightStream and SoFi.",
    context:
      "Public-service discounts are marketing as much as they are pricing. The actual underwriting is identical to other applicants: credit, income, DTI all run through the same model. The discount comes off the final APR at funding and is documented on the loan agreement. Common qualifying occupations: K-12 teaching, university faculty, registered nursing, licensed practical nursing, emergency medical services, law enforcement, firefighting, active-duty and reserve military.\n\nThe higher-leverage angle for public employees is the credit-union route. State-employee credit unions (the State Employees Credit Union of North Carolina, the New York State Employees Federal Credit Union, etc.) typically price personal loans at 6 to 12% APR for prime-credit members, well below mainstream marketplace pricing. Eligibility is usually employment at the qualifying agency or family relation to an employee.\n\nFor borrowers eligible for Public Service Loan Forgiveness on federal student debt, a personal loan is often financially the wrong move because PSLF eligibility hinges on staying in income-driven repayment on the federal student loans. Consolidating PSLF-eligible student debt into a personal loan voids the forgiveness path.",
    relatedSlugs: ["personal-loan-credit-union-loan"],
    toolLinks: [],
  },
  {
    slug: "personal-loan-multiple-income-sources",
    topic: "Approval & amount",
    question: "How do lenders handle applicants with multiple part-time jobs or income streams?",
    shortAnswer:
      "Lenders combine documented income streams (W-2 wages, 1099 contracting, rental income, Social Security, alimony) to compute total qualifying income, but each stream must be documented separately. Streams with under 24 months of history are usually excluded. The stable, documented portion drives qualification.",
    context:
      "Mixed-income applicants face a documentation puzzle. Each source needs its own paper trail: W-2s and recent paystubs for W-2 jobs; tax returns and bank statements for 1099 income; lease agreements and tax returns showing Schedule E for rental income; benefit verification letters for Social Security or pension. Streams documented for under 24 months are typically excluded from qualifying income, even if they're real, because lenders cannot rely on continuation.\n\nThe practical workaround when paperwork is messy: apply with the stable W-2 portion as the primary income and let the variable streams supplement DTI only if needed. Many borrowers actually qualify more cleanly that way than by piling every source into the application, because the additional sources sometimes introduce edge cases the underwriter has to chase.\n\nFor borrowers piecing together multiple short-tenure gigs, an alternative-documentation lender (CDFI, bank-statement lender) can derive income from 12 months of deposit history rather than per-stream documentation. This is usually the better path when no single income source dominates.",
    relatedSlugs: ["personal-loan-self-employed-qualify", "personal-loan-gig-worker-income", "personal-loan-cash-tip-income-server"],
    toolLinks: [],
  },
  {
    slug: "personal-loan-new-job-30-days-old",
    topic: "Approval & amount",
    question: "Can I get a personal loan if I just started a new job 30 days ago?",
    shortAnswer:
      "Sometimes yes, particularly if the new job is in the same field as a prior 24+ month position. Lenders look for two things: continuity of profession (same field counts as continuous employment for underwriting) and a job offer letter or first paystub that documents salary. Brand-new entries to the workforce face declines from most lenders until 90 to 180 days of employment.",
    context:
      "Underwriters distinguish between a job change (one position to another in the same field) and a workforce entry (no recent employment history). A job change is treated as continuous employment if the gap was under 30 days and the field is similar. A nurse moving from one hospital to another after 5 years of nursing qualifies as a 5-year nurse, not a 30-day employee.\n\nA workforce entry, or a career change to a meaningfully different field, restarts the employment-history clock from the new lender's perspective. Most lenders want 90 to 180 days minimum before approving. Some accept a written offer letter from a reputable employer plus one paystub as sufficient documentation in lieu of tenure.\n\nIf the gap between old job and new is over 30 days, expect more skepticism. Applicants in this situation often qualify by demonstrating savings cushion (3+ months of expenses) or by applying with a co-signer until the new employment seasons.",
    relatedSlugs: ["personal-loan-denied-reasons-why", "personal-loan-cosigner-after-denial"],
    toolLinks: [
      { label: "Glossary: Seasoning period", href: "/glossary/seasoning-period" },
    ],
  },
  {
    slug: "personal-loan-cash-tip-income-server",
    topic: "Approval & amount",
    question: "How do servers, bartenders, and other tipped workers document income for a personal loan?",
    shortAnswer:
      "Two years of personal tax returns are the baseline because reported tip income on the W-2 is the qualifying figure. Bank-statement loans are the better path for under-reporters: 12 to 24 months of deposits showing the cash flow that hits the bank account, regardless of what was reported to the IRS.",
    context:
      "Tipped workers face the same documentation problem as self-employed contractors: reported income often understates actual cash flow. A server netting $55,000 in tips and reporting $35,000 to the IRS will qualify for less loan based on the W-2 number, even though the bank account shows the higher figure.\n\nThe straightforward fix is bank-statement underwriting. Lenders that offer this product (often credit unions, CDFIs, and a subset of online lenders) derive qualifying income from deposit averages. A server depositing $4,500 per month consistently qualifies at $54,000 of annual income for these lenders.\n\nThe trade-off is twofold. Bank-statement loans usually price 1 to 3 percentage points above fully documented loans, and the documentation burden (12 to 24 months of clean statements showing the deposit pattern) is heavier. For servers with otherwise strong credit and DTI, the higher rate is usually worth it for the higher qualifying amount.",
    relatedSlugs: ["personal-loan-self-employed-qualify", "personal-loan-gig-worker-income"],
    toolLinks: [
      { label: "Glossary: Bank-statement loan", href: "/glossary/bank-statement-loan" },
    ],
  },
  {
    slug: "personal-loan-rental-property-landlord",
    topic: "Approval & amount",
    question: "Can rental-property income count toward a personal-loan application?",
    shortAnswer:
      "Yes, with two years of Schedule E showing the rental income net of expenses and depreciation. Lenders typically count 75% of the net rental income to account for vacancy and maintenance. Vacant or under-rented units are excluded. Lease agreements alone are usually not sufficient documentation.",
    context:
      "Rental income is the trickiest non-W-2 source to document. Lenders require two years of Schedule E (the IRS form for rental real estate) showing the property has produced consistent net income. The qualifying figure is net rental income after expenses, mortgage interest, and depreciation, multiplied by a 75% vacancy factor.\n\nThe 75% factor catches landlords off-guard. A property netting $1,200 a month on paper qualifies at $900 for underwriting purposes, on the assumption that vacancy and capex will eventually erode some portion. Lenders apply this even to fully-occupied long-tenured rentals.\n\nProperties under 24 months of ownership are typically excluded from qualifying income; the lender wants two full tax years of rental history. Short-term rental income (Airbnb, Vrbo) is treated similarly: two years of Schedule E history, with the 75% factor, and the additional caveat that some lenders apply a higher vacancy adjustment (50 to 60%) on short-term rental because the income is less predictable.",
    relatedSlugs: ["personal-loan-self-employed-qualify", "personal-loan-multiple-income-sources"],
    toolLinks: [],
  },
  {
    slug: "personal-loan-maternity-leave",
    topic: "Special situations",
    question: "Can I get a personal loan while on maternity leave?",
    shortAnswer:
      "Yes, if you're returning to the same job. Submit the employer letter confirming your return date and pre-leave salary; lenders treat that as continuous employment. Paid leave income (if FMLA is paid through your employer or short-term disability) also counts. Unpaid leave with no confirmed return triggers most declines.",
    context:
      "Federal Regulation B prohibits discrimination against borrowers on parental leave. Lenders may not deny a loan because the applicant is currently on FMLA, maternity, or paternity leave, provided the employment situation will return to normal. The standard documentation is a letter from the employer confirming the leave dates, the return date, and the pre-leave salary, plus the most recent paystubs from before leave began.\n\nIf the leave is paid (through accrued PTO, employer-paid maternity, or short-term disability insurance), the paid portion counts as current income on the application. Unpaid FMLA leave is the harder case: lenders typically require the return-date letter as the bridge between current zero income and future restored income, and they may underwrite to the post-leave salary as the qualifying figure.\n\nApplications during leave for parents who do not intend to return to the same employer face the same underwriting as anyone between jobs: limited approval options, usually requiring co-signers or secured collateral.",
    relatedSlugs: ["personal-loan-after-job-loss", "personal-loan-stay-at-home-spouse"],
    toolLinks: [],
  },
  {
    slug: "what-is-debt-to-income-ratio",
    topic: "Approval & amount",
    question: "What is a debt-to-income ratio and how does it affect loan approval?",
    shortAnswer:
      "DTI is your total monthly debt payments divided by gross monthly income. Most personal-loan lenders want DTI below 40%; below 36% unlocks better rates. A $500 car payment plus a $200 minimum credit-card payment on $3,000 monthly income gives you a 23% DTI.",
    context:
      "Debt-to-income ratio (DTI) is one of the two main underwriting levers alongside credit score. Lenders calculate it by summing all recurring monthly debt obligations (minimum credit-card payments, auto loans, student-loan payments, existing personal loans, mortgage or rent if the lender includes it) and dividing by gross monthly income before taxes.\n\nThe resulting percentage tells the lender how much of each dollar you earn is already spoken for. A DTI of 35% means 35 cents of every gross dollar goes to existing debt, leaving 65 cents for the new payment plus living expenses.\n\nMost personal-loan lenders set a hard cap at 40-45% DTI (including the proposed new payment). Prime lenders compete most aggressively for borrowers under 30%. High income can offset a higher DTI: a borrower with $200k income and 42% DTI may qualify where a borrower with $50k income and 42% DTI is declined.\n\nTo lower DTI before applying, pay down or close revolving accounts (this also raises your credit score) or pay off smaller installment balances. Increasing income is faster if you can document it with a recent pay raise or a new job offer letter.",
    relatedSlugs: ["personal-loan-approval-odds", "how-much-can-i-borrow-personal-loan"],
    toolLinks: [],
  },
  {
    slug: "consolidate-student-loans-personal-loan",
    topic: "Special situations",
    question: "Can I use a personal loan to consolidate student loans?",
    shortAnswer:
      "Technically yes, but it almost never makes sense. Federal student loans carry 5-8% fixed rates plus income-driven repayment, deferment, and forgiveness options. A personal loan at 10-36% APR strips all those protections away permanently. Only consider it for small private student-loan balances where the rate math clearly wins.",
    context:
      "Personal loans can legally be used to pay off student-loan balances, but federal student-loan borrowers almost always lose more than they gain. Federal Direct Loans include income-driven repayment plans (PAYE, SAVE, IBR), Public Service Loan Forgiveness eligibility, deferment and forbearance during hardship, and fixed rates set by Congress (currently 5.5-8.05% depending on loan type and year). Refinancing into a personal loan permanently forfeits all of those protections.\n\nThe math can favor a personal loan only for private student loans with very high fixed rates (15%+), if you have excellent credit and can qualify for a personal loan at a materially lower APR, and if you do not expect to need income-driven repayment or forgiveness. Even then, dedicated student-loan refinancing lenders (SoFi, Earnest, Laurel Road, ELFI) offer lower rates than the personal-loan market for student-debt refinancing and are purpose-built for this use case.\n\nBorrowers who use a personal loan to pay federal student debt should be aware they can never un-do the move: once federal loans are paid off, the federal benefits and forgiveness programs disappear permanently.",
    relatedSlugs: ["debt-consolidation-loan", "personal-loan-pay-off-debt"],
    toolLinks: [],
  },
  {
    slug: "paying-off-personal-loan-early-credit",
    topic: "Credit score",
    question: "Does paying off a personal loan early hurt my credit score?",
    shortAnswer:
      "Usually a small, temporary dip - not damage. Closing the account removes it from your 'active accounts' mix and can slightly shorten average account age. For most borrowers this is a few points and recovers quickly. The interest savings almost always outweigh the score cost.",
    context:
      "Paying off a personal loan early eliminates the account from your open-account mix. Two credit-score factors are briefly affected: account mix (personal loans are installment credit, which adds variety to a file dominated by revolving accounts) and average age of accounts (if the loan was your oldest or one of your older accounts, closing it can shorten the average).\n\nIn practice, the score impact is typically 5-15 points and temporary. FICO scoring models keep closed accounts on your credit history for up to 10 years, so the account age benefit does not vanish immediately. The reduction in total debt load (a positive signal) often partially offsets the closure effect.\n\nBefore paying off early, confirm whether your lender charges a prepayment penalty. Most online personal-loan lenders do not, but some older bank and credit-union loan agreements still include one. The fee is usually 1-2% of the remaining balance and only makes sense to pay if the remaining interest over the life of the loan exceeds it.\n\nFor borrowers with thin credit files (fewer than 5 open accounts), the impact of closing the loan can be larger. In those cases, opening a credit-builder card before payoff can cushion the account-mix effect.",
    relatedSlugs: ["personal-loan-prepayment-penalty", "personal-loan-pay-off-debt"],
    toolLinks: [],
  },
  {
    slug: "collection-account-loan-approval",
    topic: "Approval & amount",
    question: "How does a collection account affect personal loan approval?",
    shortAnswer:
      "A collection account hurts approval odds but does not automatically disqualify you. Age and balance matter most: a paid collection from 4 years ago has far less impact than an active $3,000 collection. Some online lenders explicitly work with borrowers who have collections; banks and credit unions rarely do.",
    context:
      "When a debt goes to collections it typically results in a 100+ point credit score drop and leaves a negative tradeline on your report for 7 years from the original delinquency date. The impact fades over time: a collection that is 4+ years old and paid has much less underwriting weight than a recent or unpaid collection.\n\nLenders treating collections differently by type and amount: many online lenders will approve loans when collections are small (under $1,000), old (3+ years), or paid. Medical collections receive special treatment since the major bureaus began a phased removal of paid medical debts and smaller unpaid medical debts in 2023-2024. A medical collection under $500 should no longer appear on the major FICO-relevant bureau files.\n\nFor active large unpaid collections, the lender may require you to pay or settle the collection before funding a loan. Some lenders require a clear-to-close from all three bureaus meaning no outstanding collections above a threshold.\n\nIf you plan to apply with collections on your file, pull your free credit report at AnnualCreditReport.com first. Verify the collection is reporting accurately (amount, date, status). Inaccurate collection entries can be disputed under the FCRA. Settling a collection before applying improves both your score and your negotiating position with lenders.",
    relatedSlugs: ["personal-loan-bad-credit", "credit-report-error-dispute"],
    toolLinks: [],
  },
  {
    slug: "refinance-personal-loan-lower-rate",
    topic: "Process & terms",
    question: "Can I refinance a personal loan to get a lower interest rate?",
    shortAnswer:
      "Yes. Refinancing means taking out a new personal loan to pay off the old one, ideally at a lower APR or better terms. It makes sense when your credit score has improved significantly since the original loan, rates have dropped, or you want to change the term length.",
    context:
      "Refinancing a personal loan is mechanically simple: you apply for a new personal loan, use the proceeds to pay off the old loan in full, and then repay the new loan. The economic case requires the new loan's total cost (APR multiplied over the remaining term, plus any origination fee) to be lower than continuing the old loan.\n\nThe best candidates for refinancing are borrowers whose credit score has improved 40+ points since the original loan (common after 12-18 months of on-time payments), or who took a high-rate loan in a past emergency and now qualify for prime pricing.\n\nBefore applying, run the math: (old remaining balance) x (old APR - new APR) / 12 x remaining months = approximate monthly saving. Subtract any origination fee on the new loan (typically 1-8% of principal). If the net saving over the remaining term exceeds the fee, refinancing pays.\n\nWatch for prepayment penalties on the old loan. Most modern personal-loan agreements do not include them, but confirm in your original loan agreement before proceeding.\n\nThe application process is identical to a new loan: soft-pull pre-qualification first, then a hard inquiry if you accept an offer. Your credit score will absorb the hard inquiry (a few points) and recover within a few months of on-time payments.",
    relatedSlugs: ["personal-loan-prepayment-penalty", "what-apr-will-i-get"],
    toolLinks: [],
  },
  {
    slug: "personal-loan-default-credit-report-duration",
    topic: "Credit score",
    question: "How long does a personal loan default stay on my credit report?",
    shortAnswer:
      "Seven years from the date of first delinquency on the original account. That clock starts when you first missed the payment that led to default, not when the lender declared default or sold the debt to collections.",
    context:
      "Under the Fair Credit Reporting Act (FCRA), most negative information, including loan defaults, charge-offs, and resulting collection accounts, can remain on your credit report for 7 years. The 7-year clock begins from the date of first delinquency: the date of the first missed payment that was never cured and eventually led to the default.\n\nThis matters because debt collectors sometimes try to re-age a debt by reporting the collection account as if it started when they received the debt rather than when the original delinquency occurred. This practice is illegal under the FCRA. If a collection account appears with a date of first delinquency that seems too recent, you can dispute it directly with the bureau or file a complaint with the CFPB.\n\nSome variations: Chapter 7 bankruptcy (which may discharge the defaulted loan) stays on your report for 10 years from the filing date. Tax liens and unpaid child support judgments have different rules.\n\nThe 7-year negative item and the statute of limitations for debt collection are separate legal concepts. In many states, the statute of limitations for suing to collect a debt is 3-6 years, meaning a collector may no longer be able to sue you long before the credit reporting period expires. Making any payment on an old debt can reset the statute of limitations in some states, so verify your state law before paying an old defaulted loan.",
    relatedSlugs: ["credit-report-error-dispute", "personal-loan-bad-credit"],
    toolLinks: [],
  },
  {
    slug: "multiple-personal-loans-same-time",
    topic: "Approval & amount",
    question: "Can I have multiple personal loans at the same time?",
    shortAnswer:
      "Yes, there is no federal law limiting the number of personal loans you can hold. Whether a specific lender will approve a second or third loan depends on your debt-to-income ratio, credit score, and the lender's internal policy. Existing loan payments count against your DTI for any new application.",
    context:
      "Nothing in federal law prevents a borrower from holding multiple personal loans simultaneously. Lenders evaluate each application on its own merits, but they do see your existing personal-loan obligations on your credit report and will count those payments in your debt-to-income ratio calculation.\n\nPractical limits emerge through the DTI ceiling. If your existing personal loan consumes most of your available DTI headroom, a second lender will see that and may decline or limit the new loan amount accordingly. The combined monthly payments plus the new proposed payment must fit within the lender's DTI cap (usually 40-45%).\n\nSome lenders have explicit internal policies, such as 'no more than two personal loans with us simultaneously' or 'maximum total personal-loan exposure of $X across all lenders.' These are lender-level policies, not regulatory requirements.\n\nCredit-score effects: each application results in a hard inquiry and the new account ages your average account age. If you open multiple personal loans in a short window, FICO treats inquiries of the same type within a 45-day rate-shopping window as a single inquiry. But the new accounts themselves (not the inquiries) lower average account age and increase total debt.\n\nBest practice: max out a single loan to the amount you need rather than taking multiple smaller loans. Multiple personal loans signal financial stress to future lenders and can trigger manual underwriting reviews.",
    relatedSlugs: ["how-much-can-i-borrow-personal-loan", "what-is-debt-to-income-ratio"],
    toolLinks: [],
  },
  {
    slug: "hard-inquiry-credit-score-impact",
    topic: "Credit score",
    question: "How much does a hard inquiry lower my credit score?",
    shortAnswer:
      "Typically 5 points or fewer for a single inquiry, and it recovers within 12 months of on-time payments. Multiple inquiries of the same loan type within 45 days count as one under FICO 8 and FICO 9, so rate-shopping during a short window costs you at most one inquiry's worth of points.",
    context:
      "A hard inquiry is placed on your credit report when a lender pulls your full credit file to evaluate a loan application. FICO's research shows the average impact is less than 5 points, and many borrowers see no measurable change because the inquiry carries little weight against a thick, positive history.\n\nBorrowers most affected are those with thin credit files (fewer than 5-6 accounts) or short histories (under 2 years). In those cases a single hard inquiry can temporarily cost 10-15 points because the inquiry is a larger proportion of the available credit history signal.\n\nFICO's rate-shopping window: FICO 8 (the most widely used score) groups all mortgage, auto, and student-loan inquiries within a 45-day window as a single inquiry. Personal loans are NOT explicitly included in this window in all scoring models. FICO 9 and VantageScore 3.0/4.0 are more generous and typically include personal-loan inquiries in the shopping window. To be safe with personal loans, try to complete all pre-approvals and final applications within a 2-3 week period.\n\nAlso note: soft inquiries (pre-qualification checks, employer background checks, account reviews by existing creditors) do not appear to other lenders and do not affect your FICO score. Only hard inquiries triggered by a new-credit application appear to future lenders and carry scoring impact.",
    relatedSlugs: ["personal-loan-soft-credit-check", "credit-score-personal-loan"],
    toolLinks: [],
  },
  {
    slug: "maximum-unsecured-personal-loan-amount",
    topic: "Approval & amount",
    question: "What is the maximum amount I can borrow with an unsecured personal loan?",
    shortAnswer:
      "Most online lenders cap unsecured personal loans at $50,000. A few lenders (SoFi, LightStream) go to $100,000 for excellent-credit borrowers with high incomes. Your personal maximum depends on your credit score, income, and existing debt obligations, not just the lender's ceiling.",
    context:
      "The unsecured personal loan market is broadly segmented by credit tier. For prime borrowers (740+ FICO, strong income, low DTI), the practical ceiling from most online marketplace lenders is $50,000. Select lenders extend to $100,000 for borrowers who can document income well above the resulting payment.\n\nBelow the prime tier, loan maximums drop. Fair-credit lenders (580-669 FICO) typically cap at $15,000-$25,000. Bad-credit lenders may cap at $5,000-$10,000. The ceiling is set by the lender's loss rate at each credit tier, not by regulation.\n\nYour personal borrowing maximum is set by income and DTI rather than credit score alone. A borrower with a 760 FICO and $30,000 annual income may be capped at $20,000 because the monthly payment on a $40,000 loan would push DTI past the lender's threshold. The same FICO at $120,000 income could be approved for the full $50,000.\n\nFor amounts above $50,000, borrowers typically shift to secured options: HELOC, home equity loan, or cash-out refinance. These products require collateral but offer much lower APRs and higher limits. Unsecured business loans also occupy this space for business-purpose borrowing.\n\nMarketplace pre-qualification tools show your actual approved amount before you trigger a hard inquiry, making them the most efficient way to discover your true borrowing ceiling.",
    relatedSlugs: ["how-much-can-i-borrow-personal-loan", "what-is-debt-to-income-ratio"],
    toolLinks: [],
  },
  {
    slug: "personal-loan-debt-management-plan",
    topic: "Special situations",
    question: "Can I get a personal loan while enrolled in a debt management plan?",
    shortAnswer:
      "Rarely, and your DMP counseling agency may require you to close the plan first. Most DMP agreements restrict you from opening new credit. If you need additional funds while on a DMP, talk to your credit counseling agency first - they may be able to renegotiate existing terms instead.",
    context:
      "A debt management plan (DMP) is an informal repayment arrangement administered by a nonprofit credit counseling agency. The agency negotiates reduced interest rates with your creditors in exchange for your agreement to make fixed monthly payments and, critically, to not open any new credit during the plan period (typically 3-5 years).\n\nLenders can see a DMP on your credit report (it may appear as a notation on the enrolled accounts or show in your payment history). Combined with the lower credit scores typical of DMP enrollees and the existing debt load, most prime personal-loan lenders will decline applications from current DMP participants. The few lenders that might approve are higher-rate, and taking a new high-rate loan while trying to pay off existing debt undercuts the plan's purpose.\n\nIf you need additional funds while enrolled in a DMP, the right first call is your credit counseling agency. They may be able to request a temporary forbearance from enrolled creditors, renegotiate the plan payment amount, or help you identify other options. Exiting a DMP early by taking a new personal loan typically results in the creditors reinstating their original interest rates and terms, eliminating the DMP's interest savings.\n\nOnce you complete the DMP, your credit score typically has improved enough to qualify for mainstream personal-loan products, and the completion is noted positively by creditors.",
    relatedSlugs: ["debt-consolidation-loan", "personal-loan-bad-credit"],
    toolLinks: [],
  },
  {
    slug: "how-lenders-verify-income",
    topic: "Process & terms",
    question: "How do lenders verify income for a personal loan application?",
    shortAnswer:
      "Most lenders use a combination of self-reported income on the application, pay stubs or tax returns, and instant bank-data verification via Plaid or Finicity. The verification level scales with loan size: a $2,000 loan may need only a pay stub, while a $40,000 loan typically requires full document review.",
    context:
      "Income verification in personal lending has evolved substantially with open-banking APIs. Three main methods are used, often in combination:\n\n1. Document upload: You upload recent pay stubs (typically 2-3 most recent), the last 1-2 years' W-2s, or tax returns (for self-employed borrowers, Schedule C or K-1). The lender's underwriting system or a human reviewer validates the document against the income you stated on the application.\n\n2. Bank data aggregation: Services like Plaid, Finicity (Mastercard Open Banking), or Argyle connect to your bank account with your permission and pull 3-6 months of transaction history. The lender's system identifies recurring payroll deposits, calculates average monthly income, and verifies it matches the stated figure. This is the most common method for online lenders and can produce a decision in minutes.\n\n3. Manual employment verification: The lender calls or sends an electronic inquiry to your employer's HR system to confirm employment status, start date, and salary. This is standard for larger loans and traditional bank lenders.\n\nFor self-employed, 1099, or gig-economy borrowers, the verification is more intensive: typically 2 years of personal tax returns plus bank statements. Some lenders also accept a year-to-date P&L statement for newer businesses.\n\nIf you provide inaccurate income information on a loan application, it is considered bank fraud, a federal crime. Lenders cross-check stated income against verified sources, and large discrepancies trigger manual review and likely denial.",
    relatedSlugs: ["personal-loan-self-employed", "personal-loan-gig-workers"],
    toolLinks: [],
  },
  {
    slug: "personal-loan-social-security-disability",
    topic: "Special situations",
    question: "Can I get a personal loan on Social Security disability income?",
    shortAnswer:
      "Yes. SSDI and SSI payments count as qualifying income under Equal Credit Opportunity Act regulations; lenders cannot discount disability income solely because of its source. Your approval odds depend on the same factors as any applicant: credit score, monthly income, and debt-to-income ratio.",
    context:
      "The Equal Credit Opportunity Act (ECOA) and Regulation B prohibit lenders from discriminating against applicants based on the fact that their income comes from public assistance, disability benefits, or other protected sources. SSDI (Social Security Disability Insurance) and SSI (Supplemental Security Income) both qualify as documented, verifiable income for loan underwriting.\n\nIn practice, the underwriting math is the same: your monthly SSDI or SSI benefit amount is treated as gross monthly income, and the lender calculates your debt-to-income ratio against it. If the DTI falls within the lender's acceptable range and your credit score meets their threshold, you qualify.\n\nDocumentation typically required: an award letter from the Social Security Administration confirming the monthly benefit amount and the fact that it is permanent (or the review date if it is a temporary award). Some lenders also accept recent bank statements showing the recurring SSA deposits.\n\nChallenges: SSI has an income cap (as of 2025, the federal benefit rate is about $943/month for an individual) that can make qualifying for larger loan amounts difficult due to DTI constraints. SSDI amounts vary based on work history and can be higher. Borrowers on SSDI should also verify whether a personal loan would affect any income-based asset limits for their specific benefit, though most disability programs distinguish between loans (not income) and income.\n\nAvoid predatory lenders who specifically market to disability recipients at very high APRs. A marketplace pre-qualification lets you compare mainstream lender offers without affecting your credit.",
    relatedSlugs: ["personal-loan-bad-credit", "personal-loan-approval-odds"],
    toolLinks: [],
  },
  {
    slug: "medical-debt-collections-loan-approval",
    topic: "Special situations",
    question: "Does medical debt in collections disqualify me for a personal loan?",
    shortAnswer:
      "Less so than it used to. Since 2023-2024, paid medical collections and medical collections under $500 have been removed from major credit bureau files, and the three main bureaus committed to removing all medical collections over time. Unpaid medical collections above $500 still appear and still affect scores, but lenders treat medical collections more leniently than consumer-debt collections.",
    context:
      "Medical collections have historically been treated the same as other negative credit items, but that changed significantly in 2022-2024. The three major credit bureaus (Equifax, Experian, TransUnion) implemented several changes:\n\n- July 2022: Paid medical collections removed from credit reports.\n- April 2023: Medical collections under $500 removed regardless of paid/unpaid status.\n- January 2025 (CFPB rulemaking proposal, status may vary): The CFPB proposed a rule to remove all medical debt from credit reports entirely; enforcement status as of mid-2026 varies.\n\nFor personal-loan underwriting specifically, lenders have always weighted medical collections differently from consumer debt collections because medical debt is often incurred involuntarily and in emergencies. Many lenders explicitly exclude medical collections from their adverse-action criteria or apply lower thresholds.\n\nFICO 9 and VantageScore 4.0 also reduced the scoring weight of medical collections compared to older models. However, most lenders still use FICO 8, which does not distinguish medical from non-medical collections.\n\nIf you have medical debt in collections and are planning to apply for a personal loan: check whether those specific accounts still appear on your bureau files (many have been removed already), confirm whether they are paid or unpaid, and use soft-pull pre-qualification to see which lenders' systems approve you before triggering a hard inquiry.",
    relatedSlugs: ["collection-account-loan-approval", "credit-report-error-dispute"],
    toolLinks: [],
  },
  {
    slug: "personal-loan-two-years-after-bankruptcy",
    topic: "Special situations",
    question: "Can I get a personal loan 2 years after bankruptcy?",
    shortAnswer:
      "Yes, though not from every lender. At the 2-year mark after Chapter 7 discharge, a growing number of online lenders will consider you if you have rebuilt your credit to at least 580-620 and can show stable income. Expect APRs in the 20-35% range and loan amounts under $10,000 initially.",
    context:
      "Bankruptcy recovery follows a predictable timeline in personal lending. Chapter 7 remains on your credit report for 10 years from the filing date, but its underwriting weight fades with time and positive rebuilding steps.\n\nAt 0-12 months post-discharge: Very limited options. Secured credit cards and credit-builder loans are the primary tools for rebuilding. Most personal-loan lenders decline.\n\nAt 12-24 months: Some online installment lenders specifically designed for credit rebuilding will consider applications, typically at high APRs ($1,000-$3,000 amounts). Your score may still be 500-580 if rebuilding has been passive.\n\nAt 24 months (your question): If you have actively rebuilt (on-time secured card payments, kept utilization low, no new delinquencies), your score may have risen to 580-650. At this level, a meaningful subset of online marketplace lenders will consider you. Expect strict DTI requirements and smaller loan amounts ($1,000-$7,500) at rates of 20-35% APR.\n\nAt 3-5 years: Approval options expand significantly. Many mainstream lenders treat a discharged bankruptcy that is 3+ years old with no subsequent delinquencies as a 'prior period' event and underwrite primarily on current credit profile.\n\nKey rebuilding signals lenders want to see at 2 years: 24 consecutive on-time payments (zero late payments post-discharge), at least one positive revolving tradeline open for 12+ months, current employment documentation, and stable housing.",
    relatedSlugs: ["personal-loan-bad-credit", "personal-loan-after-job-loss"],
    toolLinks: [],
  },
  {
    slug: "personal-loan-without-social-security-number",
    topic: "Special situations",
    question: "Can I get a personal loan without a Social Security number?",
    shortAnswer:
      "Yes, if you have an Individual Taxpayer Identification Number (ITIN). A small but growing number of lenders accept ITIN in place of an SSN for personal-loan applications. ITIN borrowers typically need stronger income documentation and may face slightly higher APRs, but the same federal consumer-protection laws apply.",
    context:
      "The Social Security number is used by lenders primarily to pull credit reports and verify identity. For people who do not have an SSN (non-citizens without work authorization, certain visa holders), the IRS-issued Individual Taxpayer Identification Number (ITIN) serves as an alternative identifier.\n\nITIN credit reporting: Experian, Equifax, and TransUnion all accept ITIN as a credit-file identifier. Borrowers who have been in the U.S. and making on-time payments on installment accounts (auto loans, credit-union accounts) using their ITIN can have a full credit history. A lender that accepts ITIN applications can pull this file exactly as they would an SSN-based file.\n\nLenders that explicitly accept ITIN: A limited number of community development financial institutions (CDFIs), credit unions (particularly those serving immigrant communities), and fintech lenders have built ITIN workflows. The set of mainstream marketplace lenders accepting ITIN has grown but remains smaller than SSN-only lenders.\n\nDocumentation requirements are typically heavier: ITIN card or IRS letter, government-issued photo ID (passport, consular ID), 2+ years of tax returns filed with the ITIN, and 3-6 months of bank statements showing income deposits. Some lenders also require a co-applicant with SSN.\n\nConsumer protections: ECOA, FCRA, and TILA apply equally to ITIN borrowers. Lenders may not discriminate based on national origin. If you receive an adverse-action notice, you have the same right to know the reason and to dispute it.",
    relatedSlugs: ["personal-loan-approval-odds", "how-lenders-verify-income"],
    toolLinks: [],
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
