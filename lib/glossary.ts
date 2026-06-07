/**
 * Loan & personal finance glossary.
 *
 * Each entry powers `/glossary/[slug]` plus the `/glossary` index.
 * Definitions are written for LLM citation: short, factual, named-entity-rich,
 * and self-contained so an answer engine can quote without context.
 *
 * Categories are used for filtering / grouping on the index page.
 */

export type GlossaryCategory =
  | "Rates & terms"
  | "Credit"
  | "Application"
  | "Repayment"
  | "Lender types"
  | "Regulation";

export type GlossaryTerm = {
  slug: string;
  /** Display term. */
  name: string;
  /** Other phrases this term answers to, used as also-known-as text. */
  aka?: string[];
  category: GlossaryCategory;
  /** ≤ 280 chars, used for meta description and the snippet card. */
  short: string;
  /** Long-form definition shown on the detail page. */
  long: string;
  /** Internal links to related glossary terms (by slug). */
  related?: string[];
};

export const glossaryTerms: GlossaryTerm[] = [
  // ─── Rates & terms ───────────────────────────────────────────────
  {
    slug: "apr",
    name: "APR (Annual Percentage Rate)",
    aka: ["Annual Percentage Rate"],
    category: "Rates & terms",
    short:
      "APR is the yearly cost of borrowing, expressed as a percentage of the loan amount. It includes interest plus most lender fees, so it's a more complete measure of cost than the interest rate alone.",
    long: "APR (Annual Percentage Rate) is the total yearly cost of a loan, expressed as a percentage of the principal. The federal Truth in Lending Act (TILA, Regulation Z) requires U.S. lenders to disclose APR to consumers. Unlike the simple interest rate, APR includes interest plus certain mandatory fees such as origination fees, making it the apples-to-apples number to use when comparing loan offers. Personal-loan APRs in the U.S. typically range from about 6% for the strongest credit profiles to 35.99% for subprime borrowers, with state caps applying in some jurisdictions.",
    related: ["interest-rate", "origination-fee", "tila"],
  },
  {
    slug: "interest-rate",
    name: "Interest rate",
    category: "Rates & terms",
    short:
      "The interest rate is the percentage of the loan balance charged per year as interest, excluding fees. It is a component of, but smaller than, the APR.",
    long: "The interest rate is the portion of a loan's cost charged for the use of the money itself, expressed as an annual percentage. It does not include origination fees or other lender charges. Because APR rolls those fees in, APR is almost always higher than the stated interest rate. When comparing loan offers, compare APRs rather than interest rates so the comparison includes both rate and fees.",
    related: ["apr", "origination-fee"],
  },
  {
    slug: "fixed-rate",
    name: "Fixed interest rate",
    category: "Rates & terms",
    short:
      "A fixed rate stays the same for the entire life of the loan, so the monthly payment never changes. Most U.S. personal loans are fixed-rate.",
    long: "A fixed interest rate stays constant from the first payment to the last. The borrower's monthly payment is predictable, and the total interest paid over the life of the loan is fully known at signing. Most U.S. personal loans are fixed-rate. Fixed-rate loans transfer rate risk from the borrower to the lender, so they typically start a bit above an introductory variable rate.",
    related: ["variable-rate", "amortization"],
  },
  {
    slug: "variable-rate",
    name: "Variable interest rate",
    category: "Rates & terms",
    short:
      "A variable rate can change over the life of the loan, usually tied to an index like the prime rate. Monthly payment can rise or fall.",
    long: "A variable interest rate adjusts during the loan's life, typically based on an underlying index (such as the U.S. prime rate or SOFR) plus a fixed margin. Borrowers benefit if rates fall and pay more if rates rise. Variable rates are common on HELOCs and credit cards, but uncommon on personal installment loans, which are usually fixed-rate.",
    related: ["fixed-rate", "prime-rate"],
  },
  {
    slug: "prime-rate",
    name: "Prime rate",
    category: "Rates & terms",
    short:
      "The prime rate is the benchmark interest rate U.S. banks publish for their most creditworthy commercial customers. Many consumer rates are quoted as prime + a margin.",
    long: "The prime rate is the interest rate large U.S. banks publish for short-term loans to their most creditworthy commercial customers. It moves in step with the Federal Reserve's federal funds rate. Consumer credit products often quote rates as 'prime + X%', so when the Fed raises rates, prime rises and variable-rate consumer borrowing gets more expensive.",
    related: ["variable-rate", "apr"],
  },
  {
    slug: "loan-term",
    name: "Loan term",
    category: "Rates & terms",
    short:
      "The loan term is how long you have to repay the loan, usually expressed in months. Common personal-loan terms are 24, 36, 48, 60, and 72 months.",
    long: "The loan term is the length of time the borrower has to repay the loan in full. Personal-loan terms in the U.S. typically run 12 to 72 months. A longer term lowers the monthly payment but increases the total interest paid; a shorter term raises the monthly payment but reduces total interest. The right term balances cash-flow affordability against total cost.",
    related: ["amortization", "monthly-payment"],
  },
  {
    slug: "principal",
    name: "Principal",
    category: "Rates & terms",
    short:
      "Principal is the original loan amount you borrowed, before interest. Each monthly payment goes partly to principal and partly to interest.",
    long: "Principal is the dollar amount originally borrowed, separate from interest and fees. In a standard amortising loan, each monthly payment is split between an interest portion and a principal portion. Early in the term, more of the payment goes to interest; late in the term, more goes to principal. The remaining principal is the payoff balance at any point in the loan.",
    related: ["amortization", "monthly-payment"],
  },
  {
    slug: "origination-fee",
    name: "Origination fee",
    category: "Rates & terms",
    short:
      "A one-time fee a lender charges to process a new loan. Usually 1% to 8% of the loan amount, deducted from the proceeds or added to the balance.",
    long: "An origination fee is a one-time fee a lender charges to underwrite and process a new loan. Personal-loan origination fees typically range from 1% to 8% of the loan amount and are either deducted from the funds disbursed to the borrower or added to the loan balance. Because origination fees are rolled into APR under TILA, comparing APRs (rather than headline interest rates) accounts for them automatically.",
    related: ["apr", "tila"],
  },
  {
    slug: "amortization",
    name: "Amortization",
    category: "Rates & terms",
    short:
      "Amortization is the schedule by which a loan is paid off through fixed monthly payments, with each payment split between interest and principal.",
    long: "Amortization is the process of paying off a loan in a series of fixed payments over its term. Each payment is the same dollar amount, but the split between interest and principal shifts over time: early payments are mostly interest because the balance is large; later payments are mostly principal because the balance has been paid down. An amortisation schedule (or amortisation table) lists every payment in the loan with that month's interest and principal split.",
    related: ["principal", "monthly-payment", "loan-term"],
  },
  {
    slug: "monthly-payment",
    name: "Monthly payment",
    category: "Rates & terms",
    short:
      "The fixed dollar amount due each month on an installment loan. Determined by principal, APR, and term using the standard amortisation formula.",
    long: "The monthly payment on a fixed-rate installment loan is the amount due each month for the full term. It is calculated by the standard amortisation formula: M = P × r × (1 + r)^n / ((1 + r)^n − 1), where P is principal, r is the monthly rate (APR / 12 / 100), and n is the number of monthly payments. Use a loan-payment calculator to model how changing the APR or term affects your monthly payment.",
    related: ["amortization", "loan-term", "principal"],
  },

  // ─── Credit ──────────────────────────────────────────────────────
  {
    slug: "credit-score",
    name: "Credit score",
    category: "Credit",
    short:
      "A three-digit number (typically 300 to 850) summarising your credit history. Lenders use it to predict the likelihood you'll repay.",
    long: "A credit score is a three-digit number (most commonly 300 to 850 on the FICO and VantageScore models) summarising your credit history. Lenders use it as a quick predictor of repayment risk. Scores above 740 are considered very good or excellent and qualify for the lowest APRs; scores below 580 are considered subprime and face the highest APRs and most restrictive terms.",
    related: ["fico-score", "vantagescore", "credit-report"],
  },
  {
    slug: "fico-score",
    name: "FICO score",
    category: "Credit",
    short:
      "FICO is the credit-scoring model used in roughly 90% of U.S. lending decisions. Scores range from 300 to 850.",
    long: "The FICO score, developed by Fair Isaac Corporation, is the credit-scoring model used in roughly 90% of U.S. consumer lending decisions. Scores range from 300 to 850 and are built from five factors: payment history (35%), amounts owed (30%), length of credit history (15%), new credit (10%), and credit mix (10%).",
    related: ["credit-score", "vantagescore"],
  },
  {
    slug: "vantagescore",
    name: "VantageScore",
    category: "Credit",
    short:
      "VantageScore is a competing credit-scoring model jointly developed by the three major credit bureaus. Also runs 300 to 850.",
    long: "VantageScore is a credit-scoring model jointly developed by the three major U.S. credit bureaus (Equifax, Experian, TransUnion) as an alternative to FICO. It also runs 300 to 850 but weighs the underlying factors slightly differently. The two scores typically land within 20 to 50 points of each other for the same consumer.",
    related: ["credit-score", "fico-score"],
  },
  {
    slug: "credit-report",
    name: "Credit report",
    category: "Credit",
    short:
      "A record of your credit history maintained by the three U.S. credit bureaus. You're entitled to one free copy per year from each bureau.",
    long: "A credit report is the underlying record of your credit history, maintained by the three nationwide credit reporting agencies (Equifax, Experian, TransUnion). It lists open and closed credit accounts, payment history, public records, and recent inquiries. Under the Fair Credit Reporting Act, you're entitled to one free copy per bureau every 12 months at AnnualCreditReport.com, the only federally authorised source.",
    related: ["fcra", "soft-inquiry", "hard-inquiry"],
  },
  {
    slug: "soft-inquiry",
    name: "Soft credit inquiry",
    aka: ["Soft pull", "Soft credit check"],
    category: "Credit",
    short:
      "A credit check that does not affect your credit score. Used for pre-qualification and rate-shopping.",
    long: "A soft credit inquiry (or soft pull) is a credit check that does not affect your credit score and is not visible to other lenders. Lenders use soft pulls for pre-qualification, rate-shopping, and account monitoring. Get Advance Loan performs only a soft inquiry when you submit a request; a hard inquiry occurs only if you accept a final offer and the lender requires one to complete the loan.",
    related: ["hard-inquiry", "credit-score", "pre-qualification"],
  },
  {
    slug: "hard-inquiry",
    name: "Hard credit inquiry",
    aka: ["Hard pull", "Hard credit check"],
    category: "Credit",
    short:
      "A credit check that may lower your credit score a few points and remains on your credit report for up to 24 months.",
    long: "A hard credit inquiry (or hard pull) occurs when a lender pulls your full credit report to make a final lending decision. Each hard inquiry typically lowers your FICO score by a small amount (often 5 points or fewer) and stays on your credit report for up to 24 months, though its score impact fades after the first 12. Rate-shopping for the same product within a 14- to 45-day window (depending on scoring model) usually counts as a single inquiry.",
    related: ["soft-inquiry", "credit-score", "credit-report"],
  },
  {
    slug: "debt-to-income-ratio",
    name: "Debt-to-income ratio (DTI)",
    aka: ["DTI"],
    category: "Credit",
    short:
      "Your monthly debt payments divided by your gross monthly income. Lenders use DTI to assess how much new debt you can afford.",
    long: "The debt-to-income ratio (DTI) is your total monthly debt payments divided by your gross monthly income, expressed as a percentage. Most personal-loan lenders prefer DTI under 40%, with the most competitive APRs reserved for borrowers under 30%. DTI is one of the two main affordability signals lenders use alongside credit score.",
    related: ["credit-score", "underwriting"],
  },
  {
    slug: "credit-utilization",
    name: "Credit utilisation",
    category: "Credit",
    short:
      "The share of your available revolving credit you're currently using. Below 30% is generally healthy; below 10% is ideal for credit scores.",
    long: "Credit utilisation is the percentage of your total available revolving credit (mostly credit cards) currently in use. It is the second-largest factor in FICO scoring after payment history. Most credit experts recommend keeping utilisation below 30%, and ideally below 10%, to maximise your score. Consolidating credit-card debt into a personal loan can quickly drop reported utilisation.",
    related: ["credit-score", "debt-consolidation"],
  },
  {
    slug: "subprime",
    name: "Subprime",
    category: "Credit",
    short:
      "A credit profile with a FICO score below approximately 620. Loans to subprime borrowers carry higher APRs to reflect higher default risk.",
    long: "Subprime is the credit-industry label for borrowers with a FICO score below approximately 620. Loans to subprime borrowers carry higher APRs and stricter terms to reflect higher default risk. The subprime personal-loan market in the U.S. is served by online installment lenders, credit unions, and specialty banks.",
    related: ["credit-score", "fico-score"],
  },

  // ─── Application ─────────────────────────────────────────────────
  {
    slug: "pre-qualification",
    name: "Pre-qualification",
    category: "Application",
    short:
      "A preliminary check that estimates the loan terms you might qualify for, based on a soft credit inquiry that does not affect your score.",
    long: "Pre-qualification is a preliminary lending check that estimates the rate and amount you might qualify for, using a soft credit inquiry and the basic information you provide. Because it relies on a soft pull, pre-qualification doesn't affect your credit score. A pre-qualified offer is not a final approval; the lender confirms eligibility with a hard inquiry only if you accept and proceed.",
    related: ["soft-inquiry", "pre-approval", "underwriting"],
  },
  {
    slug: "pre-approval",
    name: "Pre-approval",
    category: "Application",
    short:
      "A stronger lending check than pre-qualification, often involving a hard credit inquiry and a conditional commitment from the lender.",
    long: "Pre-approval is a more rigorous lending check than pre-qualification. Some lenders perform a hard credit inquiry at this stage and issue a conditional commitment to lend at a stated rate, subject to verification of income and identity. The distinction between pre-qualification and pre-approval is not standardised across lenders, so always read the disclosures to know which type of inquiry will be performed.",
    related: ["pre-qualification", "hard-inquiry", "underwriting"],
  },
  {
    slug: "underwriting",
    name: "Underwriting",
    category: "Application",
    short:
      "The lender's process of evaluating credit, income, identity, and risk before approving and pricing a loan.",
    long: "Underwriting is the process by which a lender evaluates a loan application's credit, income, employment, identity, and risk profile before deciding whether to lend, at what rate, and on what terms. Modern online underwriting uses automated decisioning powered by credit-bureau data, bank-transaction data, and proprietary risk models, often returning a decision in minutes.",
    related: ["pre-qualification", "credit-score", "dti"],
  },
  {
    slug: "co-signer",
    name: "Co-signer",
    category: "Application",
    short:
      "A second person who agrees to repay your loan if you don't. A strong-credit co-signer can help you qualify or lower your APR.",
    long: "A co-signer is a second person who agrees to repay the loan if the primary borrower defaults. Lenders treat a co-signer as additional collateral against default risk, so adding a strong-credit co-signer can help a marginal applicant qualify or lower the APR offered. The co-signer's credit is checked, and the loan appears on their credit report; missed payments hurt both parties.",
    related: ["co-applicant", "credit-score"],
  },
  {
    slug: "co-applicant",
    name: "Co-applicant",
    category: "Application",
    short:
      "A second borrower who shares both the obligation to repay and access to the funds. Different from a co-signer.",
    long: "A co-applicant (or co-borrower) is a second person who shares ownership of the loan, including both the obligation to repay and equal access to the funds. This differs from a co-signer, who guarantees repayment but doesn't receive funds. Joint applications often allow combining two incomes for qualification, which can unlock larger loan amounts.",
    related: ["co-signer", "underwriting"],
  },

  // ─── Repayment ───────────────────────────────────────────────────
  {
    slug: "installment-loan",
    name: "Installment loan",
    category: "Repayment",
    short:
      "A loan repaid in fixed monthly payments over a set term. Personal loans, auto loans, and mortgages are all installment loans.",
    long: "An installment loan is a loan repaid in fixed monthly installments over a defined term. Each payment includes interest and principal according to an amortisation schedule. Personal loans, mortgages, auto loans, and student loans are installment loans. They contrast with revolving credit (such as credit cards), where the balance and minimum payment fluctuate.",
    related: ["amortization", "personal-loan", "revolving-credit"],
  },
  {
    slug: "revolving-credit",
    name: "Revolving credit",
    category: "Repayment",
    short:
      "Credit you can repeatedly draw on up to a limit, with a minimum monthly payment based on the current balance. Credit cards and HELOCs are revolving.",
    long: "Revolving credit lets you repeatedly borrow up to a set credit limit, repay any portion, and borrow again. The balance and minimum payment vary with usage. Credit cards and HELOCs are the most common forms. Revolving credit gives flexibility but typically carries higher APRs than fixed-term installment loans, particularly on credit cards.",
    related: ["installment-loan", "credit-utilization"],
  },
  {
    slug: "prepayment-penalty",
    name: "Prepayment penalty",
    category: "Repayment",
    short:
      "A fee some lenders charge if you pay off the loan before the scheduled end of the term. Most U.S. personal loans do not have one.",
    long: "A prepayment penalty is a fee some lenders charge if you repay the loan ahead of schedule, compensating them for the interest they would otherwise have earned. Most reputable U.S. personal-loan lenders do not charge prepayment penalties, but always confirm in the loan agreement before signing. The federal CFPB requires disclosure of any prepayment penalty in the loan documents.",
    related: ["loan-term", "amortization"],
  },
  {
    slug: "late-fee",
    name: "Late fee",
    category: "Repayment",
    short:
      "A fee charged when you don't make a loan payment by its due date. Typically $15 to $40 depending on the lender and state.",
    long: "A late fee is charged when a scheduled loan payment is not received by its due date, after any applicable grace period. Personal-loan late fees typically range from $15 to $40 per missed payment, capped by state law in many jurisdictions. Repeated late payments can also trigger reporting to credit bureaus, hurting your credit score.",
    related: ["delinquency", "default"],
  },
  {
    slug: "delinquency",
    name: "Delinquency",
    category: "Repayment",
    short:
      "Missing a scheduled payment by 30 days or more. Reported to credit bureaus and a major negative factor in credit scoring.",
    long: "Delinquency is the state of being past due on a loan payment. Most lenders report a delinquency to the credit bureaus after 30 days past due, at which point it appears on your credit report and can sharply lower your FICO score (often by 60 to 100 points). Delinquencies remain on your report for up to seven years from the date of first delinquency.",
    related: ["late-fee", "default", "credit-score"],
  },
  {
    slug: "default",
    name: "Default",
    category: "Repayment",
    short:
      "Failure to repay a loan according to its terms. Usually declared after 90 to 120 days of missed payments, depending on lender and product.",
    long: "Default is the formal status of a loan after the borrower has failed to make payments for an extended period, typically 90 to 120 days for unsecured personal loans. Consequences include the lender charging off the loan, transferring it to a collection agency, and in some states pursuing the borrower in court for the balance. Default has a severe and long-lasting impact on credit.",
    related: ["delinquency", "charge-off"],
  },
  {
    slug: "charge-off",
    name: "Charge-off",
    category: "Repayment",
    short:
      "An accounting action a lender takes after concluding a debt is unlikely to be repaid. Doesn't erase the debt; it stays on your credit report.",
    long: "A charge-off is an accounting action a lender takes, typically at 180 days of delinquency, to recognise that a debt is unlikely to be repaid and remove it from the lender's active receivables. The debt itself is not erased: it remains on the borrower's credit report for up to seven years and is often sold to a collection agency that may attempt to collect.",
    related: ["default", "delinquency", "credit-report"],
  },

  // ─── Lender types ────────────────────────────────────────────────
  {
    slug: "personal-loan",
    name: "Personal loan",
    category: "Lender types",
    short:
      "An unsecured installment loan that can be used for almost any personal purpose. The most flexible mainstream U.S. consumer-loan product.",
    long: "A personal loan is an unsecured installment loan that can be used for almost any personal purpose: consolidating debt, financing a major purchase, covering medical bills, paying for a wedding, or bridging a short-term cash gap. U.S. personal-loan amounts typically range from $1,000 to $50,000, with terms of 12 to 72 months and APRs from about 6% to 35.99%.",
    related: ["installment-loan", "secured-loan", "unsecured-loan"],
  },
  {
    slug: "unsecured-loan",
    name: "Unsecured loan",
    category: "Lender types",
    short:
      "A loan that doesn't require collateral. The lender relies on your credit and income to underwrite. Most personal loans are unsecured.",
    long: "An unsecured loan is one that doesn't require collateral. If the borrower defaults, the lender cannot repossess a specific asset; they can pursue collection or sue for the balance, but recovery is harder. Because the lender takes more risk, unsecured loans carry higher APRs than secured equivalents. Most personal loans, credit cards, and student loans are unsecured.",
    related: ["secured-loan", "personal-loan"],
  },
  {
    slug: "secured-loan",
    name: "Secured loan",
    category: "Lender types",
    short:
      "A loan backed by collateral the lender can seize on default. Auto loans, mortgages, and HELOCs are secured. APRs are lower than for unsecured loans.",
    long: "A secured loan is backed by collateral, an asset the lender can repossess or foreclose on if the borrower defaults. Auto loans (car as collateral), mortgages (home as collateral), HELOCs, and pawn loans are common secured loans. Because the lender's downside risk is limited by the collateral's value, secured loans carry lower APRs than unsecured loans for the same borrower.",
    related: ["unsecured-loan", "heloc"],
  },
  {
    slug: "heloc",
    name: "HELOC (Home Equity Line of Credit)",
    category: "Lender types",
    short:
      "A revolving line of credit secured by your home equity. APRs are typically lower than personal loans, but the home is collateral.",
    long: "A HELOC (Home Equity Line of Credit) is a revolving line of credit secured by the equity in your home. APRs are typically variable and lower than unsecured personal-loan rates because the home serves as collateral. HELOCs are common for home improvement and large planned expenses. The downside: the lender can foreclose on default, and closing takes weeks rather than days.",
    related: ["secured-loan", "personal-loan"],
  },
  {
    slug: "credit-union",
    name: "Credit union",
    category: "Lender types",
    short:
      "A member-owned, not-for-profit financial cooperative. Often offers lower personal-loan APRs than banks for the same credit profile.",
    long: "A credit union is a member-owned, not-for-profit financial cooperative regulated under federal or state credit-union charters. Profits return to members as lower loan APRs, higher deposit rates, and reduced fees. For personal loans, credit unions are often the cheapest mainstream option for borrowers who qualify for membership and meet the credit union's underwriting standards.",
    related: ["personal-loan", "apr"],
  },
  {
    slug: "online-lender",
    name: "Online lender",
    category: "Lender types",
    short:
      "A lender that originates and services loans entirely online. Decisions in minutes; funding as fast as the next business day.",
    long: "An online lender originates and services loans entirely through digital channels, application, decisioning, document signing, and funding all happen online. Examples include SoFi, LightStream, Upstart, Upgrade, and Best Egg. Online lenders typically respond in minutes and fund in 1 to 3 business days. Some serve prime credit only; others specialise in subprime and bad-credit lending.",
    related: ["personal-loan", "marketplace-lender"],
  },
  {
    slug: "marketplace-lender",
    name: "Marketplace lender",
    aka: ["Lending marketplace", "Loan marketplace"],
    category: "Lender types",
    short:
      "A platform that matches borrowers with multiple lenders from a single application, so you can compare offers without applying separately.",
    long: "A marketplace lender (or lending marketplace) is a platform that takes one borrower application and shares it with a network of lenders, who respond with competing offers. The borrower compares APR, term, monthly payment, and fees in one view and chooses an offer to accept. LendingTree is the largest U.S. example. Marketplaces themselves are not lenders; they earn a referral fee from the lender that funds the loan.",
    related: ["personal-loan", "online-lender"],
  },

  // ─── Regulation ──────────────────────────────────────────────────
  {
    slug: "tila",
    name: "TILA (Truth in Lending Act)",
    aka: ["Truth in Lending Act", "Regulation Z"],
    category: "Regulation",
    short:
      "The federal law that requires lenders to disclose loan terms, APR, fees, and the schedule of payments before a borrower signs.",
    long: "The federal Truth in Lending Act (TILA), implemented by Regulation Z, requires U.S. lenders to disclose specific loan terms before a borrower signs. Required disclosures include APR, finance charge, amount financed, total of payments, and a payment schedule. TILA disclosures are designed to let consumers compare offers apples-to-apples and identify hidden fees. Enforced by the federal Consumer Financial Protection Bureau (CFPB).",
    related: ["apr", "origination-fee", "cfpb"],
  },
  {
    slug: "fcra",
    name: "FCRA (Fair Credit Reporting Act)",
    aka: ["Fair Credit Reporting Act"],
    category: "Regulation",
    short:
      "The federal law that governs credit reports and credit-bureau practices, including your right to a free annual report and to dispute errors.",
    long: "The federal Fair Credit Reporting Act (FCRA) governs how the three credit bureaus (Equifax, Experian, TransUnion) collect, maintain, and share consumer credit information. Under the FCRA you have the right to one free credit report from each bureau every 12 months (at AnnualCreditReport.com), to dispute inaccurate information, and to be notified when adverse action is taken based on your report. Enforced by the FTC and CFPB.",
    related: ["credit-report", "cfpb"],
  },
  {
    slug: "ecoa",
    name: "ECOA (Equal Credit Opportunity Act)",
    aka: ["Equal Credit Opportunity Act", "Regulation B"],
    category: "Regulation",
    short:
      "The federal law that prohibits lender discrimination based on race, religion, sex, marital status, age, national origin, or receipt of public assistance.",
    long: "The federal Equal Credit Opportunity Act (ECOA), implemented by Regulation B, prohibits creditors from discriminating against credit applicants on the basis of race, colour, religion, national origin, sex, marital status, age (if the applicant has the capacity to contract), or because all or part of the applicant's income comes from a public-assistance program. ECOA is enforced by the federal Consumer Financial Protection Bureau (CFPB).",
    related: ["cfpb", "fcra"],
  },
  {
    slug: "mla",
    name: "MLA (Military Lending Act)",
    aka: ["Military Lending Act", "MAPR"],
    category: "Regulation",
    short:
      "Federal law capping consumer-credit APRs to active-duty service members and their dependents at 36% (the Military APR, or MAPR).",
    long: "The federal Military Lending Act (MLA) caps the cost of consumer credit extended to active-duty service members and their dependents at a 36% Military Annual Percentage Rate (MAPR). The MAPR is broader than a standard APR: it includes interest, fees, and certain credit-insurance premiums. Lenders are required to check covered-borrower status before extending credit. Get Advance Loan requires its lender partners to comply with the MLA.",
    related: ["apr", "tila"],
  },
  {
    slug: "cfpb",
    name: "CFPB (Consumer Financial Protection Bureau)",
    aka: ["Consumer Financial Protection Bureau"],
    category: "Regulation",
    short:
      "The federal agency that supervises and enforces consumer financial-protection laws across most U.S. lenders.",
    long: "The Consumer Financial Protection Bureau (CFPB) is the federal regulator responsible for supervising and enforcing consumer financial-protection laws across most U.S. lenders, including the Truth in Lending Act, Fair Credit Reporting Act, Equal Credit Opportunity Act, and Military Lending Act. Consumers can file complaints at consumerfinance.gov/complaint, which routes the complaint to the relevant lender and tracks the response.",
    related: ["tila", "fcra", "ecoa"],
  },
  {
    slug: "tcpa",
    name: "TCPA (Telephone Consumer Protection Act)",
    aka: ["Telephone Consumer Protection Act"],
    category: "Regulation",
    short:
      "The federal law governing telemarketing calls and texts, including the prior-express-written-consent requirement for autodialed marketing.",
    long: "The federal Telephone Consumer Protection Act (TCPA) governs telemarketing calls and SMS texts. It requires prior express written consent before businesses can send autodialed or prerecorded marketing messages. Get Advance Loan and our lender partners obtain consent at the point of application; you can revoke that consent at any time by replying STOP to texts, clicking unsubscribe in emails, or contacting us at our published address.",
    related: ["cfpb", "ecoa"],
  },
  {
    slug: "gramm-leach-bliley",
    name: "GLBA (Gramm-Leach-Bliley Act)",
    aka: ["Gramm-Leach-Bliley Act"],
    category: "Regulation",
    short:
      "The federal law requiring financial institutions to disclose their information-sharing practices and safeguard customer data.",
    long: "The federal Gramm-Leach-Bliley Act (GLBA) requires financial institutions, including loan marketplaces and lenders, to disclose how they collect, share, and protect customer personal information. It also requires implementation of administrative, technical, and physical safeguards for that data. Our privacy policy summarises our GLBA-required practices.",
    related: ["cfpb"],
  },

  // ─── Repayment & misc concepts ───────────────────────────────────
  {
    slug: "debt-consolidation",
    name: "Debt consolidation",
    category: "Repayment",
    short:
      "Combining multiple debts into a single loan, usually to lower the overall interest rate or simplify payments.",
    long: "Debt consolidation is the practice of combining multiple debts, most commonly high-APR credit-card balances, into a single new loan with a fixed APR and fixed monthly payment. When the consolidation loan's APR is meaningfully lower than the weighted APR of the original debts, consolidation reduces total interest paid and simplifies cash flow. It is also used to lower the credit-utilisation ratio on revolving accounts, which can improve credit scores.",
    related: ["personal-loan", "credit-utilization"],
  },
  {
    slug: "refinance",
    name: "Refinance",
    category: "Repayment",
    short:
      "Taking out a new loan to pay off an existing loan, usually to secure a lower APR or change the term.",
    long: "Refinancing means replacing an existing loan with a new loan, usually to secure a lower APR, a shorter term, or both. For personal loans, refinancing makes sense when your credit has improved since the original loan or when rates have fallen meaningfully. Always check for prepayment penalties on the old loan and origination fees on the new loan before refinancing.",
    related: ["personal-loan", "prepayment-penalty", "origination-fee"],
  },
  {
    slug: "minimum-payment",
    name: "Minimum payment",
    category: "Repayment",
    short:
      "The smallest amount you must pay each month to avoid late fees and stay current. Common on credit cards and other revolving credit.",
    long: "The minimum payment is the smallest payment a lender requires each month to keep an account current. On credit cards, minimum payments are typically 1% to 3% of the balance plus interest and fees, which can stretch repayment over decades and produce very high total interest. Personal loans require a fixed monthly payment instead of a minimum, which is one of the reasons borrowers use them to consolidate credit-card debt.",
    related: ["revolving-credit", "amortization"],
  },

  // ─── Batch 2: Process and documentation ───────────────────────────
  {
    slug: "promissory-note",
    name: "Promissory note",
    category: "Application",
    short:
      "The signed legal document in which a borrower promises to repay a loan according to specified terms. The promissory note is the loan's enforceable contract.",
    long: "A promissory note is the signed legal document that obligates a borrower to repay a loan. It specifies the principal amount, APR, payment schedule, default conditions, and the lender's remedies on non-payment. The promissory note is the loan's enforceable contract; if the lender ever needs to sue for non-payment, the promissory note is the evidence. Both unsecured and secured loans have promissory notes; secured loans add a separate security agreement that establishes the lender's lien on the collateral.",
    related: ["loan-agreement", "default"],
  },
  {
    slug: "loan-servicer",
    name: "Loan servicer",
    category: "Application",
    short:
      "The company that handles day-to-day loan management on behalf of the loan's owner: collecting payments, sending statements, processing payoffs, and (when needed) referring delinquent accounts to collection.",
    long: "The loan servicer is the entity you interact with after origination: where you make payments, get statements, request payoffs, and contact for hardship requests. The servicer may or may not be the same company as the original lender. Loans are frequently sold or transferred between owners, but the servicer often stays the same. If servicing changes, you receive a notice at least 15 days in advance, and your payment history is preserved.",
    related: ["lender", "monthly-payment"],
  },
  {
    slug: "adverse-action-notice",
    name: "Adverse action notice",
    category: "Regulation",
    short:
      "Federally required written notice a lender must send within 30 days of denying a credit application. Discloses the specific reasons for denial and the credit bureau whose report was used.",
    long: "Under the Fair Credit Reporting Act and the Equal Credit Opportunity Act, any lender that denies a credit application must send the applicant a written 'adverse action notice' within 30 days. It must include the specific reasons for denial (or the right to request them), the name and contact of the credit bureau whose report was used, your right to a free copy of that credit report within 60 days, and your right to dispute inaccurate information. The adverse action notice is the borrower's roadmap for understanding the decline and addressing the underlying issues.",
    related: ["fcra", "ecoa", "credit-report"],
  },
  {
    slug: "forbearance",
    name: "Forbearance",
    category: "Repayment",
    short:
      "A temporary agreement allowing a borrower to pause or reduce payments during hardship, without the loan being treated as delinquent. Interest typically still accrues on the balance.",
    long: "Forbearance is a lender-granted accommodation that pauses or reduces a borrower's payments for a defined period (often 3-12 months) without treating the loan as past-due. The borrower's credit is protected from late marks during the forbearance window. Interest typically continues to accrue and is either added to the balance or repaid through extended terms after forbearance ends. Forbearance is more common on student loans and mortgages than on personal loans, but some personal-loan lenders offer hardship-program equivalents.",
    related: ["delinquency", "loan-modification"],
  },
  {
    slug: "balloon-payment",
    name: "Balloon payment",
    category: "Repayment",
    short:
      "A large final loan payment that's significantly bigger than the regular monthly payments. Common on some commercial loans, short-term mortgages, and certain auto loans; rare on personal loans.",
    long: "A balloon payment is the final loan payment, structured to be substantially larger than the regular monthly payments. Typical structures: a 5-year loan where monthly payments amortise as if it were a 30-year loan, with the remaining balance due in full at month 60. Used to give borrowers a low monthly payment in exchange for refinancing or paying off the balance later. Mainstream U.S. personal loans don't use balloon payments. Some commercial loans, owner-financed real estate deals, and certain auto loans do.",
    related: ["amortization", "monthly-payment"],
  },
  {
    slug: "bridge-loan",
    name: "Bridge loan",
    category: "Lender types",
    short:
      "A short-term loan used to cover a financing gap, typically 6-12 months. Common in real estate when buying a new home before selling the existing one, and for short-term business cash-flow needs.",
    long: "A bridge loan is a short-term financing tool designed to span a defined gap, usually 6-12 months. Real-estate bridge loans let homebuyers purchase a new property before their existing one sells. Business bridge loans cover temporary cash-flow gaps between an expected receivable and a current obligation. Bridge loans typically carry higher APRs than long-term financing because of the short repayment horizon and the lender's elevated risk. Most personal loans are not bridge loans; they have standard 2-7 year amortising terms.",
    related: ["personal-loan", "secured-loan"],
  },
  {
    slug: "ach-transfer",
    name: "ACH transfer",
    category: "Application",
    short:
      "Automated Clearing House transfer: the electronic bank-to-bank payment network used for most U.S. personal-loan disbursements and monthly payments. Settles in 1-3 business days, typically free.",
    long: "ACH (Automated Clearing House) is the U.S. electronic payment network operated by NACHA that handles most consumer bank-to-bank transactions, including direct deposit, autopay, and personal-loan funding. When you accept a personal loan, the lender disburses funds via ACH, which lands in your checking account the next business day. Monthly payments to the lender also typically run via ACH. ACH transfers are free for the consumer in nearly all cases; wire transfers (faster, more expensive) are the alternative for time-sensitive funding.",
    related: ["personal-loan", "monthly-payment"],
  },
  {
    slug: "identity-theft",
    name: "Identity theft",
    category: "Credit",
    short:
      "The use of someone's personal information (SSN, name, date of birth) without authorisation to open accounts or take loans. Federal law gives victims tools to dispute, recover, and prevent further damage.",
    long: "Identity theft happens when someone uses your personal information without permission to open credit accounts, take loans, or commit fraud in your name. If you discover identity theft: file a report at IdentityTheft.gov (FTC), file a police report, place a fraud alert or freeze with the three credit bureaus, dispute fraudulent accounts in writing with each lender and bureau, and request the fraudulent accounts be removed from your credit report. Federal law (Fair Credit Reporting Act and Identity Theft and Assumption Deterrence Act) protects victims from liability for fraudulent debts.",
    related: ["credit-freeze", "credit-report", "fcra"],
  },
  {
    slug: "credit-freeze",
    name: "Credit freeze",
    category: "Credit",
    short:
      "A free request to a credit bureau that prevents new creditors from accessing your credit report, which blocks new accounts from being opened in your name. Useful after identity theft or as preventive protection.",
    long: "A credit freeze (also called a security freeze) is a request to each of the three credit bureaus (Equifax, Experian, TransUnion) to prevent new creditors from pulling your credit report. With a freeze in place, identity thieves can't easily open accounts in your name because lenders that can't pull your file usually decline. You can place, lift, or remove a freeze for free under federal law (Economic Growth, Regulatory Relief, and Consumer Protection Act, 2018). Lifting takes about an hour through each bureau's online portal. A credit freeze does not affect your credit score or your existing accounts.",
    related: ["identity-theft", "credit-report", "fcra"],
  },
  {
    slug: "joint-application",
    name: "Joint application",
    category: "Application",
    short:
      "A loan application submitted by two borrowers who are both equally responsible for repayment. Combines both incomes and credit profiles for qualification, often unlocking better terms than either could achieve alone.",
    long: "A joint loan application means two borrowers apply together, both signing the promissory note and both fully liable for the debt. The lender pulls both credit reports and documents both incomes. The loan appears on both credit files. Joint applications differ from cosigning: a cosigner guarantees a primary borrower's loan but isn't a co-borrower; joint applicants are equal borrowers. Joint applications are useful when one applicant has stronger income and the other has stronger credit; combining unlocks larger amounts or better APRs than either could achieve alone.",
    related: ["co-applicant", "co-signer", "promissory-note"],
  },
];

export const glossaryBySlug = Object.fromEntries(
  glossaryTerms.map((t) => [t.slug, t])
) as Record<string, GlossaryTerm>;

export const glossaryCategories: GlossaryCategory[] = [
  "Rates & terms",
  "Credit",
  "Application",
  "Repayment",
  "Lender types",
  "Regulation",
];

export function termsByCategory(category: GlossaryCategory) {
  return glossaryTerms.filter((t) => t.category === category);
}
