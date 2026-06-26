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

  // ─── Collections, default, post-funding ──────────────────────────
  {
    slug: "fdcpa",
    name: "Fair Debt Collection Practices Act (FDCPA)",
    aka: ["Fair Debt Collection Practices Act"],
    category: "Regulation",
    short:
      "A federal law that prohibits abusive, deceptive, and unfair practices by third-party debt collectors. Limits when and how often they can contact you, requires written validation of the debt, and gives you the right to demand they stop contacting you in writing.",
    long: "The Fair Debt Collection Practices Act (FDCPA), 15 U.S.C. §§ 1692-1692p, is the primary federal consumer-protection law for third-party debt collection. It applies to collection agencies and debt buyers (not to original creditors). Core protections: collectors must identify themselves, send a written validation notice within five days of first contact, stop collection on a disputed debt until proof is provided, and cease contact in writing if the consumer demands it. Forbidden tactics include calls before 8 AM or after 9 PM, contacting your employer, threats, or using deceptive language. Violations carry actual damages plus $1,000 statutory damages per case, and the CFPB enforces parallel rules under Regulation F.",
    related: ["debt-validation-letter", "charge-off", "cfpb"],
  },
  {
    slug: "debt-validation-letter",
    name: "Debt validation letter",
    aka: ["debt verification letter", "FDCPA validation request"],
    category: "Regulation",
    short:
      "A written request sent to a debt collector within 30 days of first contact, demanding proof the debt is yours and the amount is correct. The collector must pause collection activity and bureau reporting until they provide documentation.",
    long: "A debt validation letter is a formal exercise of the consumer's rights under FDCPA § 1692g. Sent to the collector within 30 days of the initial validation notice (use certified mail with return receipt as proof of timing), the letter requests: the original creditor's name, the original loan agreement, an itemised statement of the amount owed, and documentation of the chain of assignment showing the collector has legal authority to collect. Until the collector provides this evidence, they must halt all collection activity, including credit-bureau reporting. About 25 to 40% of validation requests on older or sold debts result in no response, after which the debt is uncollectable by that party. Sample letters are available from the CFPB consumer-tools site.",
    related: ["fdcpa", "assignment-of-debt", "cfpb"],
  },
  {
    slug: "assignment-of-debt",
    name: "Assignment of debt",
    aka: ["debt assignment", "sold debt"],
    category: "Regulation",
    short:
      "The legal transfer of a creditor's right to collect a debt to another party, typically a debt buyer that purchases charged-off accounts in bulk. The new party steps into the original creditor's shoes but inherits all the consumer's defenses.",
    long: "Assignment of debt is the contractual transfer of a creditor's interest in a receivable to a third party. After a personal loan is charged off (typically at 180 days past due), the original lender often sells the account to a debt buyer for pennies on the dollar. The buyer can then collect, sue, and report to bureaus as if they were the original creditor. However, the consumer keeps every defense and counterclaim available against the original lender, plus FDCPA protections that did not apply to the original lender. A common debt-buyer weakness is incomplete chain-of-title documentation: when forced to prove the assignment in court or through debt validation, many buyers cannot, which can defeat the claim entirely.",
    related: ["fdcpa", "charge-off", "debt-validation-letter"],
  },
  {
    slug: "right-to-cure",
    name: "Right to cure",
    aka: ["cure period", "notice of right to cure"],
    category: "Regulation",
    short:
      "A state-law requirement that a lender give a defaulted borrower written notice and a defined window (typically 10 to 30 days) to bring the loan current before the lender can accelerate the balance, repossess collateral, or sue. About 20 states require it on consumer loans.",
    long: "The right to cure is a state-level borrower protection that interrupts a lender's path from default to legal remedies. Where it applies (Connecticut, Iowa, Kansas, Maine, Massachusetts, Wisconsin, and roughly 15 other states each with their own statute), the lender must serve a notice that specifies the missed payment amount, the deadline to pay (typically 10, 15, 20, or 30 days), and the consequence of not curing. If the borrower pays the past-due amount plus permitted late fees within the cure window, the loan is reinstated and the lender cannot accelerate or sue based on that default. Right-to-cure does not exist under federal law for unsecured personal loans, so out-of-state lenders sometimes attempt to skip the step; in cure-required states, doing so is grounds for a counterclaim.",
    related: ["default", "fdcpa"],
  },
  // ─── Borrower-segment terms ──────────────────────────────────────
  {
    slug: "itin",
    name: "ITIN (Individual Taxpayer Identification Number)",
    aka: ["Individual Taxpayer Identification Number", "tax ID number"],
    category: "Application",
    short:
      "A nine-digit IRS-issued identifier for people who file U.S. tax returns but do not have a Social Security number, including undocumented workers, certain non-resident aliens, and foreign nationals with U.S. tax obligations. Some lenders accept an ITIN in place of an SSN on a personal-loan application.",
    long: "The Individual Taxpayer Identification Number (ITIN), issued by the IRS, allows people without a Social Security number to file federal taxes, claim certain credits, and (at participating financial institutions) open accounts and borrow. ITINs always begin with 9 and have 7 or 8 in the fourth digit, distinguishing them from SSNs. For personal-loan underwriting, ITIN-only applicants typically work with community development financial institutions (CDFIs), credit unions with explicit ITIN-friendly products, or specialised online lenders. The credit bureaus (Experian, Equifax, TransUnion) accept ITIN-based files, so an ITIN holder can build a credit history through secured cards or credit-builder loans, then qualify for unsecured personal loans on the strength of that history.",
    related: ["bank-statement-loan", "tradeline"],
  },
  {
    slug: "bank-statement-loan",
    name: "Bank-statement loan",
    aka: ["bank-statement underwriting", "alt-doc loan"],
    category: "Lender types",
    short:
      "A loan underwritten on 12 to 24 months of bank-deposit history instead of tax returns. Common for self-employed borrowers, gig workers, and tipped employees whose reported taxable income materially understates true cash flow.",
    long: "Bank-statement loans are an alternative-documentation underwriting path. Instead of qualifying off line 31 of Schedule C or W-2 wage history, the lender averages 12 or 24 months of personal or business bank deposits to derive a qualifying income figure. The approach lets self-employed borrowers, 1099 contractors, gig workers, and high-tip earners qualify based on actual cash flow rather than after-deduction taxable income. The trade-off is pricing: bank-statement loans typically run 1 to 3 percentage points above fully documented loans because the data is thinner and the borrower base is higher-risk on average. Most bank-statement personal loans are written by CDFIs, credit unions, or specialty online lenders rather than mainstream marketplace platforms.",
    related: ["itin", "tradeline", "seasoning-period"],
  },
  {
    slug: "seasoning-period",
    name: "Seasoning period",
    aka: ["employment seasoning", "income seasoning"],
    category: "Application",
    short:
      "The minimum time a borrower must have held a job, self-employment, or other income source before a lender will count it toward qualifying income. Typically 24 months for self-employment and tipped income; 90 to 180 days for new W-2 employment in the same field.",
    long: "Seasoning period is underwriter shorthand for 'how long the income source must exist before we trust it.' Standard seasoning rules: W-2 employment in the same field, 30 to 90 days; W-2 employment in a new field, 90 to 180 days; self-employment, 24 months minimum; bank-statement-based deposit averaging, 12 to 24 months; rental income, 24 months of Schedule E history. Seasoning rules differ between lenders and product types, and some are explicit in published underwriting guides (Fannie Mae's seller guide, for example, sets seasoning rules that conventional mortgages follow). Personal-loan lenders have less standardisation; the practical seasoning floor for marketplace lending is usually 90 days of W-2 employment or 24 months of self-employment.",
    related: ["bank-statement-loan", "verification-of-employment"],
  },
  {
    slug: "tradeline",
    name: "Tradeline",
    aka: ["credit tradeline", "credit account"],
    category: "Credit",
    short:
      "A single credit account as reported on a credit report. Each open or closed account (credit card, auto loan, mortgage, personal loan) is a separate tradeline. FICO and VantageScore models weight tradeline count, age, and payment history heavily.",
    long: "A tradeline is the unit of measurement on a credit report. Each lender reports each open or closed credit account as its own tradeline, with fields including original balance, current balance, monthly payment, payment history (the 84-month grid of on-time / 30 / 60 / 90+ marks), date opened, date closed, and credit type (revolving vs installment). FICO scoring models consider files with fewer than three open tradelines as 'thin file' and may decline to generate a score. Older tradelines weigh more heavily on positive impact than newer ones; the average age of accounts is a meaningful score input. Closing an old tradeline removes it from the average-age calculation after 10 years (for accounts in good standing) or 7 years (for accounts with derogatories), which is why advisors generally counsel against closing old cards even when unused.",
    related: ["credit-report", "credit-utilization", "fico-score"],
  },
  {
    slug: "mapr",
    name: "MAPR (Military Annual Percentage Rate)",
    aka: ["Military Annual Percentage Rate"],
    category: "Regulation",
    short:
      "A specialized APR calculation under the federal Military Lending Act that includes interest, fees, credit insurance premiums, and certain ancillary charges. The MLA caps MAPR at 36% for active-duty servicemembers and their dependents.",
    long: "The Military Annual Percentage Rate (MAPR), defined in the Military Lending Act (32 CFR Part 232), is a broader calculation than standard TILA APR. MAPR includes interest, all credit-related fees (origination, application, service charges), credit-insurance premiums whether voluntary or mandatory, fees for ancillary products sold with the loan, and certain other charges. The federal MLA caps MAPR at 36% on consumer loans extended to covered borrowers (active-duty servicemembers, their spouses, and dependents). Loans exceeding 36% MAPR are void and any payments must be refunded. Lender verification of covered status is done through the DoD Manpower Data Center, which lenders query against the applicant's SSN. Because of MAPR rules, most online personal-loan lenders cap pricing at 35.99% across the board to avoid civilian-vs-military compliance bifurcation.",
    related: ["mla", "apr", "fdcpa"],
  },
  {
    slug: "verification-of-employment",
    name: "Verification of employment (VOE)",
    aka: ["VOE", "employment verification"],
    category: "Application",
    short:
      "The lender's process of confirming an applicant's employer, position, and salary. Done via direct contact with the employer's HR department, a verification service (The Work Number, etc.), or by reviewing recent paystubs and tax documents.",
    long: "Verification of employment (VOE) is one of the four standard underwriting verifications, alongside credit pull, income calculation, and asset verification. Lenders run a VOE near the end of the application process by directly contacting the employer's HR department, querying a verification service like The Work Number (Equifax's database, which covers about 70% of U.S. employers), or accepting a written letter from the employer on letterhead. VOE confirms three things: that the applicant is currently employed at the stated position, the stated salary or hourly rate, and the start date. Discrepancies between the application and the VOE result either delays or denials. Self-employed borrowers cannot do a traditional VOE; lenders substitute tax returns, bank statements, and sometimes CPA letters as analogous documentation.",
    related: ["seasoning-period", "bank-statement-loan"],
  },
  {
    slug: "statute-of-limitations-debt",
    name: "Statute of limitations on debt",
    aka: ["debt SOL", "time-barred debt"],
    category: "Regulation",
    short:
      "The maximum time after a debt becomes delinquent during which a creditor or collector can sue to collect. Varies by state and debt type, typically 3 to 10 years for personal loans. After the period expires, the debt is time-barred and unenforceable in court, though it remains on credit reports for seven years.",
    long: "The statute of limitations on consumer debt is a state-law clock that starts at the date of first delinquency (the date you missed the payment that was never cured). For written contracts (which includes most personal loans), the SOL is typically 3 to 6 years; for oral or open-ended accounts, often 3 to 4 years. Once the SOL runs, a lawsuit to collect can be defeated by raising the SOL as an affirmative defense. SOL does not extinguish the underlying debt and does not erase the credit-report mark (which is governed separately by the seven-year FCRA reporting window). Two consumer pitfalls reset the clock: making a partial payment or providing a written acknowledgment of the debt. In about half of states, a verbal acknowledgment is enough. Time-barred debts are still legally pursued via collection calls and bureau pressure; only the lawsuit path is closed.",
    related: ["fdcpa", "charge-off", "assignment-of-debt"],
  },
  {
    slug: "grace-period",
    name: "Grace period",
    aka: ["payment grace period"],
    category: "Repayment",
    short:
      "A window of time after a payment due date during which you can pay without incurring a late fee or being reported delinquent to credit bureaus. Most personal-loan lenders offer 10-15 days. After the grace period, the late fee applies; after 30 days, the lender typically reports the delinquency to the bureaus.",
    long: "A grace period is a contractual provision that gives borrowers a short buffer after the scheduled payment due date to submit a payment without penalty. For personal loans, this is typically 10-15 calendar days after the due date. During this window, no late fee is assessed and the lender does not report the payment as late to Equifax, Experian, or TransUnion.\n\nGrace periods are not universal. Always confirm whether your lender offers one by checking your loan agreement under 'late charges' or 'default.' Some lenders charge late fees the day after the due date with no grace period at all.\n\nThe regulatory floor for mortgage grace periods is 15 days under RESPA, but no equivalent federal rule covers personal loans, making grace periods a contractual feature rather than a right.\n\nImportant distinction: a grace period delays the late fee and bureau reporting, but interest continues to accrue on the outstanding balance from the due date forward, not from the end of the grace period. Consistent use of the grace period over time does not hurt your credit score, but it does cost slightly more interest than paying on the due date.",
    related: ["late-fee", "delinquency", "monthly-payment"],
  },
  {
    slug: "debt-settlement",
    name: "Debt settlement",
    aka: ["debt negotiation", "debt relief"],
    category: "Repayment",
    short:
      "A negotiated agreement in which a creditor accepts less than the full balance owed to consider the debt resolved. Typically used for seriously delinquent accounts (90+ days past due). Settlement saves money on the balance but severely damages credit scores and may result in a taxable 1099-C from the creditor.",
    long: "Debt settlement is the process of negotiating with a creditor to accept a lump-sum payment that is less than the total amount owed, in exchange for marking the account 'settled' or 'settled for less than full balance' and stopping collection efforts. It is generally only available for accounts that are significantly delinquent (90-180 days past due or in collections), because lenders have little incentive to accept less from borrowers who are current.\n\nSettlement ratios vary widely: creditors often accept 40-60% of the outstanding balance, but this depends on the age of the debt, the original creditor vs. a debt buyer, and whether you are in active litigation. A lump-sum offer resolves faster than an installment settlement agreement.\n\nCredit impact is severe. The settled account appears on your credit report as 'settled for less than full amount,' which is a negative item. Because the account was delinquent before settlement, the delinquency and the charge-off (if applicable) also appear. The combined effect can drop a score by 100+ points from pre-settlement levels, though the score has typically already declined significantly by the time of settlement.\n\nTax consequences: if the lender cancels $600 or more of debt, they are required to send you a Form 1099-C (Cancellation of Debt). The forgiven amount is generally treated as taxable ordinary income in the year of settlement unless you qualify for an insolvency or bankruptcy exclusion under IRS rules.\n\nFor-profit debt-settlement companies charge fees of 15-25% of enrolled debt, often require you to stop paying creditors (which accelerates delinquency and lawsuits), and carry mixed consumer outcomes. Nonprofit credit counseling agencies offer debt management plans as an alternative that preserves credit relationships.",
    related: ["charge-off", "debt-validation-letter", "fdcpa"],
  },
  {
    slug: "credit-builder-loan",
    name: "Credit-builder loan",
    aka: ["credit building loan", "fresh start loan"],
    category: "Credit",
    short:
      "A small installment loan designed to help people with no credit or damaged credit build a positive payment history. The loan proceeds are held in a savings account while you make monthly payments; after the term ends, you receive the funds (minus fees). The on-time payments are reported to all three bureaus.",
    long: "A credit-builder loan works in reverse from a standard loan: the lender holds the borrowed funds in a locked savings account or certificate of deposit while you make fixed monthly payments over 6-24 months. At the end of the term, the savings are released to you (minus interest and fees). You never touch the money during the loan period.\n\nThe product's value is entirely in the credit-reporting benefit. Each on-time monthly payment is reported to Equifax, Experian, and TransUnion as a positive installment-loan payment, building or rebuilding the most important factor in a FICO score (payment history, 35% of score weight).\n\nCredit-builder loans are offered primarily by credit unions, community banks, and CDFIs (Community Development Financial Institutions). Online platforms like Self (formerly Self Lender) and Credit Strong also offer them. Loan amounts typically range from $300 to $1,000, with terms of 12-24 months. APRs run 5-20%, though the effective 'return' includes the forced savings component.\n\nBest use case: thin-file borrowers who have never had credit and want to establish a score, and post-bankruptcy borrowers who need positive tradelines after discharge. A credit-builder loan combined with a secured credit card (kept under 30% utilization) is a common 12-month rebuilding strategy that can produce a 650+ score from zero.",
    related: ["credit-score", "payment-history", "tradeline"],
  },
  {
    slug: "personal-line-of-credit",
    name: "Personal line of credit",
    aka: ["PLOC", "personal LOC"],
    category: "Rates & terms",
    short:
      "A revolving credit facility tied to a personal credit limit, similar to a credit card but typically at lower APRs and without a physical card. You draw funds as needed up to the limit, pay interest only on what you draw, and the available credit replenishes as you repay. Different from a personal loan, which delivers a lump sum upfront.",
    long: "A personal line of credit (PLOC) is a flexible credit facility that gives a borrower access to funds up to an approved credit limit. Unlike a personal loan, which provides a one-time lump sum at a fixed interest rate with a defined repayment schedule, a PLOC allows repeated draws and repayments within the draw period. Interest accrues only on the outstanding drawn balance, not on the full credit limit.\n\nPLOCs are offered by banks and credit unions, often to existing customers with good credit. They are typically unsecured, with APRs ranging from about 8% to 25% based on creditworthiness. Some have a fixed draw period (e.g., 2 years) followed by a repayment period; others are open-ended and renewable annually.\n\nComparison to alternatives:\n- vs. personal loan: A PLOC costs less in interest if you only need funds intermittently because you pay interest only on what is drawn. A personal loan is better for a known, one-time amount because lump-sum access is immediate and rates may be lower.\n- vs. credit card: A PLOC typically offers a higher limit and lower APR than a credit card, but lacks rewards and purchase protections. A PLOC is drawn via check, ACH transfer, or debit card tied to the account.\n- vs. HELOC: A HELOC is a secured line of credit backed by home equity. A PLOC is unsecured and typically has a lower credit limit and higher rate.\n\nPLOCs impact credit utilization, similar to credit cards, because they are revolving credit. Keeping the balance below 30% of the limit helps maintain credit scores.",
    related: ["revolving-credit", "heloc", "credit-utilization"],
  },
  {
    slug: "collection-agency",
    name: "Collection agency",
    aka: ["third-party collector", "debt collector"],
    category: "Regulation",
    short:
      "A company that purchases or is hired to collect defaulted consumer debts. Third-party collectors are regulated by the Fair Debt Collection Practices Act (FDCPA), which limits when and how they can contact you, prohibits harassment, and gives you the right to request debt validation in writing.",
    long: "A collection agency enters the picture when a borrower has defaulted on a debt and the original creditor either hires the agency on commission to collect it (third-party collection) or sells the debt to the agency outright (debt buyer). At the point of sale, the debt buyer acquires the right to collect the full outstanding balance for a fraction of the face value (often 5-20 cents on the dollar for very old debt).\n\nThe Fair Debt Collection Practices Act (FDCPA, 15 U.S.C. §1692) governs the conduct of third-party collectors. Key provisions:\n- Collectors may only contact you between 8 a.m. and 9 p.m. in your local time zone.\n- Collectors may not contact you at work if they know your employer prohibits such calls.\n- You can demand in writing that the collector stop contacting you (cease-and-desist letter). They must then stop, except to notify you of legal action.\n- Within 5 days of first contact, the collector must send a written notice stating the amount owed, the name of the original creditor, and your right to dispute the debt.\n- You have 30 days to dispute the debt in writing; during this time the collector must stop collection activity until they verify the debt.\n\nOriginal creditors collecting their own debt are not subject to the FDCPA (they are covered by state law), but many states have parallel statutes. The CFPB supervises large collection agencies.\n\nKey consumer right: if you believe a collector is violating the FDCPA, you can sue in federal or state court for up to $1,000 in statutory damages plus actual damages and attorney fees.",
    related: ["fdcpa", "debt-validation-letter", "assignment-of-debt"],
  },
  {
    slug: "credit-counseling",
    name: "Credit counseling",
    aka: ["nonprofit credit counseling", "consumer credit counseling"],
    category: "Repayment",
    short:
      "A service, typically offered by nonprofit agencies, that helps consumers analyze their debt situation, create a budget, and potentially enroll in a debt management plan (DMP). Reputable agencies are accredited by NFCC or FCAA and offer initial consultations free of charge.",
    long: "Credit counseling is a professional service designed to help individuals understand and manage personal debt. The National Foundation for Credit Counseling (NFCC) and the Financial Counseling Association of America (FCAA) are the two main accrediting bodies for nonprofit credit counseling agencies in the U.S.\n\nA credit counseling session typically includes a review of your income, expenses, debts, and assets; a recommendation on the best path forward (budgeting alone, a debt management plan, or a referral to a bankruptcy attorney); and if appropriate, a proposal for a debt management plan.\n\nDebt management plan (DMP): If your unsecured debts (credit cards, personal loans) are still manageable but you cannot afford minimum payments at current interest rates, an accredited counseling agency may negotiate with your creditors to reduce interest rates (often to 6-9% from 20%+) in exchange for a fixed monthly payment to the agency, which then distributes it to creditors. Creditors agree because they recover more than from a default or bankruptcy. DMPs typically run 3-5 years.\n\nFee structure: Initial consultations at NFCC/FCAA agencies are typically free. DMP monthly maintenance fees average $25-$35/month and are regulated by state law. For-profit credit counseling companies often charge much higher fees and may not be able to negotiate the same rate reductions. Verify agency accreditation before paying any fee.\n\nBankruptcy distinction: Credit counseling is a prerequisite for filing bankruptcy under the Bankruptcy Abuse Prevention and Consumer Protection Act (BAPCPA, 2005). Both a pre-filing counseling certificate and a post-filing debtor education certificate are required for Chapter 7 and Chapter 13.",
    related: ["debt-settlement", "forbearance", "fdcpa"],
  },
  {
    slug: "payment-history",
    name: "Payment history",
    aka: ["payment track record"],
    category: "Credit",
    short:
      "The record of whether you paid your credit accounts on time, late, or not at all. It is the single largest factor in FICO credit scores, accounting for 35% of the score. Even one 30-day late payment can drop a score by 60-110 points depending on the prior score level.",
    long: "Payment history is the credit-scoring factor that carries the most weight across all major scoring models. In FICO 8 (the most widely used score), payment history accounts for 35% of the total score. In VantageScore 4.0, it is classified as 'extremely influential.'\n\nWhat is recorded: For each open and recently closed credit account, the bureaus track whether each monthly payment was made on time, 30 days late, 60 days late, 90 days late, 120+ days late, charged off, or subject to a settlement. Every derogatory mark is associated with the specific account and the specific date.\n\nScore impact by derogatory type (approximate, varies by prior score):\n- 30-day late on a current account with no prior lates: 60-80 points\n- 90-day late: 80-100 points\n- Charge-off: 100-140 points\n- Bankruptcy: 100-200 points\n\nThe higher your score before the derogatory event, the larger the drop (the scoring model penalizes the deviation from expected behavior). A borrower at 760 drops more from a single late payment than a borrower at 620.\n\nRecovery timeline: A single 30-day late payment from two years ago, with no other negative marks, has minimal ongoing impact. Most scoring models give increasing weight to recent behavior. Sustained on-time payment for 12-24 months after a derogatory event produces meaningful score recovery.\n\nThe most important action for building or rebuilding credit: never miss a payment. Autopay for at least the minimum payment eliminates the risk of accidental late payments.",
    related: ["credit-score", "delinquency", "late-fee"],
  },
  {
    slug: "home-equity-loan",
    name: "Home equity loan",
    aka: ["second mortgage", "HEL"],
    category: "Rates & terms",
    short:
      "A lump-sum installment loan secured by the borrower's home equity, typically at a fixed interest rate. Lower APRs than unsecured personal loans (often 6-9% vs 10-36%) because the lender can foreclose on the home if you default. Compared to a HELOC, a home equity loan delivers a one-time amount with a fixed repayment schedule.",
    long: "A home equity loan allows homeowners to borrow against the equity they have built up in their property. Equity is the difference between the home's current market value and the remaining mortgage balance. Most lenders will lend up to 80-85% combined loan-to-value (CLTV), meaning the sum of your first mortgage plus the home equity loan cannot exceed 80-85% of the home's appraised value.\n\nStructure: Home equity loans are installment loans, not revolving credit. You receive the full loan amount at closing, then repay it in fixed monthly principal-and-interest payments over a term of 5-30 years. The interest rate is almost always fixed, making the payment predictable. This distinguishes home equity loans from HELOCs, which are revolving and often have variable rates.\n\nAPR comparison: Because the loan is secured by real property, lenders accept much lower APRs than on unsecured personal loans. As of mid-2026, home equity loan rates typically run 6-9% for borrowers with 700+ credit scores, compared to 10-36% for unsecured personal loans. The trade-off is that failure to repay can result in foreclosure.\n\nUse cases where a home equity loan beats a personal loan: large amounts ($50,000+), long repayment horizons, and situations where the borrower has substantial home equity and a stable income that makes default unlikely.\n\nUse cases where a personal loan beats a home equity loan: no homeownership, insufficient equity, time pressure (personal loans fund in 1-2 days vs. 3-6 weeks for home equity products), or situations where borrowers cannot risk their home as collateral.\n\nTax treatment: Interest on home equity loans may be deductible if the funds are used to 'buy, build, or substantially improve' the home (IRC §163(h)(3)). Interest for personal expenses such as debt consolidation or vacations is generally not deductible post-2017 TCJA.",
    related: ["heloc", "secured-loan", "personal-loan"],
  },
  {
    slug: "collateral",
    name: "Collateral",
    aka: ["security interest", "pledge"],
    category: "Rates & terms",
    short: "An asset pledged to a lender as security for a loan. If the borrower defaults, the lender can seize and sell the asset to recover the debt. Personal loans are typically unsecured, meaning no collateral is required.",
    long: "Collateral is property or another asset that a borrower offers to a lender as a guarantee of loan repayment. The lender takes a security interest in the collateral, which gives them the legal right to take possession of it if the borrower fails to repay the loan as agreed.\n\nCommon types of collateral: Real estate (mortgages and HELOCs), vehicles (auto loans and title loans), savings accounts (secured personal loans), investment portfolios (margin loans), and business equipment (commercial loans).\n\nUnsecured vs. secured personal loans: Most personal loans available through online marketplaces are unsecured, meaning no collateral is pledged. This means the lender cannot take your car or home if you default (though they can pursue the debt through courts). In exchange for accepting this risk, unsecured lenders charge higher APRs than secured lenders. A secured personal loan, by contrast, requires collateral (often a savings account or CD) and typically offers lower APRs but puts the collateral at risk.\n\nTitle loans use your car as collateral with extremely high APRs (often 300%+) and should generally be avoided in favor of unsecured personal loans from legitimate lenders.\n\nWhy collateral matters: Pledging collateral reduces the lender's risk, which is why secured loans carry lower interest rates. For borrowers with weak credit who can't qualify for unsecured loans at reasonable rates, a secured loan using a savings account as collateral may be a viable option.",
    related: ["secured-loan", "unsecured-loan", "heloc"],
  },
  {
    slug: "annual-percentage-yield",
    name: "Annual Percentage Yield (APY)",
    aka: ["APY", "effective annual rate"],
    category: "Rates & terms",
    short: "The annualized return on a savings or investment account that accounts for compound interest. APY measures what you earn on deposits; APR measures what you pay on loans. They are not interchangeable.",
    long: "Annual Percentage Yield (APY) is the real rate of return earned on a savings account, certificate of deposit, or other interest-bearing product after accounting for the effect of compounding. APY is expressed as a percentage and is always higher than the nominal interest rate when compounding occurs more than once per year.\n\nFormula: APY = (1 + r/n)^n - 1, where r is the nominal annual interest rate and n is the number of compounding periods per year. A savings account paying 5% nominal interest compounded daily has an APY of approximately 5.13%.\n\nAPY vs. APR: APY is used for deposit products (savings accounts, CDs, money market accounts) and tells you what you earn. APR is used for borrowing products (personal loans, credit cards, mortgages) and tells you what you pay. Confusing APY and APR is a common consumer mistake. When a bank advertises a 5% APY on savings but an 8% APR on a personal loan, these are measuring different things: the 5% APY is what you earn on deposits, and the 8% APR is what you pay to borrow.\n\nRegulatory requirement: Under the Truth in Savings Act, banks must disclose APY on interest-bearing deposit accounts. This makes savings-account rates comparable across institutions. The analogous disclosure requirement for loans is APR under TILA.",
    related: ["apr", "interest-rate", "tila"],
  },
  {
    slug: "credit-mix",
    name: "Credit Mix",
    category: "Credit",
    short: "One of five FICO score factors, accounting for approximately 10% of your score. Credit mix reflects whether your credit history includes both revolving accounts (credit cards) and installment accounts (personal loans, auto loans, mortgages).",
    long: "Credit mix is a component of the FICO scoring model that evaluates the variety of credit types in your credit history. It accounts for approximately 10% of your FICO score. Lenders and scoring models reward credit mix because a borrower who has successfully managed multiple types of credit (revolving and installment) is considered a lower risk than one who has only managed one type.\n\nRevolving accounts: Credit cards and lines of credit, where the balance can fluctuate and you have a minimum required payment. These are evaluated partly based on utilization (how much of your available credit you're using).\n\nInstallment accounts: Loans with fixed payments over a fixed term, including personal loans, auto loans, mortgages, and student loans. These are evaluated primarily on payment history.\n\nHow a personal loan affects credit mix: If you currently have only credit cards, adding a personal loan can improve your credit mix score (the 10% component). This is why 'credit-builder loans,' specifically offered through credit unions and fintech lenders like Self, are effective: they add an installment tradeline to a thin credit file, improving both credit mix and payment history.\n\nCredit mix is not a reason to open accounts you don't need: While a diverse credit mix is slightly beneficial, opening new accounts primarily for mix improvement is generally not worth the temporary score damage from the hard inquiry and the reduced average account age. The 10% weight of credit mix is outweighed by the benefits of keeping existing accounts in good standing.",
    related: ["credit-score", "fico-score", "revolving-credit", "installment-loan"],
  },
  {
    slug: "gross-income",
    name: "Gross Income",
    aka: ["pre-tax income", "gross pay"],
    category: "Application",
    short: "Total income before any deductions, including taxes, retirement contributions, or insurance. Personal loan lenders use gross monthly income to calculate your debt-to-income ratio. Most loan applications ask for gross income, not take-home (net) pay.",
    long: "Gross income is total earnings before any taxes or other deductions are taken out. It differs from net income (take-home pay), which is what actually lands in your bank account after federal income tax, state income tax, Social Security, Medicare, retirement contributions, and other payroll deductions.\n\nWhy lenders use gross income: Debt-to-income (DTI) ratio calculations, which determine loan affordability, are based on gross monthly income. Lenders use gross income because it's the most standardized measure across different tax situations, deduction choices, and states. Two employees with identical salaries in different states would have different net incomes (due to state tax differences) but the same gross income.\n\nVerification: For W-2 employees, gross income can be verified from pay stubs (which show gross pay before deductions) and W-2 forms. The bottom-line of each month's pay stub showing 'current gross earnings' is typically what lenders count. For self-employed borrowers, gross income from Schedule C or K-1 after business deductions is what matters.\n\nGross vs. net for self-employed borrowers: Self-employed borrowers often have lower adjusted gross income on their tax returns after business deductions, which can hurt DTI calculations. Some lenders 'add back' non-cash deductions like depreciation when calculating qualifying income.\n\nIncome types that are gross: Salary, hourly wages, commissions, bonuses, rental income (before expenses), business revenue (before expenses). Social Security and pension income are sometimes 'grossed up' by 125% by some lenders because these sources are tax-advantaged.",
    related: ["debt-to-income-ratio", "verification-of-employment", "underwriting"],
  },
  {
    slug: "loan-proceeds",
    name: "Loan Proceeds",
    category: "Rates & terms",
    short: "The actual amount of money the borrower receives after any fees are deducted at funding. If you borrow $10,000 with a 5% origination fee, your loan proceeds are $9,500. The full $10,000 principal is still owed and repaid.",
    long: "Loan proceeds are the net amount of funds that a borrower actually receives when a loan is funded, after any upfront fees (primarily origination fees) are deducted.\n\nHow proceeds vs. principal works: If you take out a $15,000 personal loan with a 4% origination fee, the lender deducts $600 at funding and deposits $14,400 into your bank account. Your loan balance is still $15,000, and all repayment calculations (monthly payment, total interest) are based on the full $15,000 principal.\n\nImplication for borrowers: If you need exactly $15,000 to pay a contractor, a $15,000 loan with a 4% origination fee only delivers $14,400. You'd need to borrow approximately $15,625 to receive $15,000 net of the 4% fee ($15,625 x 0.96 = $15,000). Alternatively, choose a lender with a 0% origination fee where proceeds equal the full loan amount.\n\nLenders with 0% origination fees: LightStream, SoFi, Marcus by Goldman Sachs, and Discover Personal Loans (subject to change; verify at time of application) do not charge origination fees, meaning proceeds equal the full approved loan amount.\n\nAPR accounts for proceeds discrepancy: The APR calculation under TILA factors the origination fee into the effective rate. A loan with a lower interest rate but a high origination fee may have the same or higher APR as a loan with a higher rate and no fee. Always compare APRs, not just interest rates, to account for fees in the total cost.",
    related: ["origination-fee", "apr", "principal"],
  },
  {
    slug: "credit-repair",
    name: "Credit Repair",
    category: "Credit",
    short: "The process of disputing inaccurate, outdated, or unverifiable items on a credit report to improve credit scores. Legitimate credit repair is a right under the FCRA and is free to do yourself. Credit repair companies that charge upfront fees are often ineffective and may be scams.",
    long: "Credit repair refers to actions taken to address negative items on a credit report with the goal of improving credit scores. The Fair Credit Reporting Act (FCRA) gives consumers the right to dispute any information in their credit report that they believe is inaccurate, incomplete, or unverifiable. This right belongs to you and is exercisable for free directly with the three major credit bureaus (Equifax, Experian, TransUnion).\n\nWhat credit repair can legitimately do: Remove inaccurate information (wrong account, wrong balance, wrong late-payment date), remove unverifiable information (the bureau must verify within 30 days or remove it), and request validation of debts from collectors.\n\nWhat credit repair cannot do: Remove accurate negative information, delete valid late payments or defaults before 7 years, or remove bankruptcies before 10 years. Any company promising to do these things is misrepresenting the law.\n\nDIY credit repair process: (1) Pull free credit reports from annualcreditreport.com from all three bureaus. (2) Identify inaccurate, outdated, or unverifiable items. (3) File disputes online at each bureau's website (Equifax.com, Experian.com, TransUnion.com). (4) The bureau has 30 days to investigate; inaccurate items must be corrected or removed.\n\nCredit repair companies: Regulated by the Credit Repair Organizations Act (CROA), which prohibits upfront fees and requires a 3-day cancellation right. Many charge $100-$150/month with mixed results, since they can only do what you can do yourself for free. Avoid any company promising score increases they cannot legally guarantee.",
    related: ["fcra", "credit-report", "adverse-action-notice", "credit-score"],
  },
  {
    slug: "account-age",
    name: "Average Age of Accounts",
    aka: ["length of credit history", "account age"],
    category: "Credit",
    short: "One of five FICO score factors, accounting for approximately 15% of your score. Measures the average age of your credit accounts (oldest account age + newest account age + all accounts in between, divided by number of accounts). Longer average age improves your score.",
    long: "Average age of accounts (sometimes called 'length of credit history') is a FICO score factor that evaluates how long you have been using credit. It accounts for approximately 15% of a FICO score and is calculated based on several sub-factors: the age of your oldest account, the age of your newest account, and the average age of all accounts.\n\nWhy it matters: A longer credit history gives lenders more data to assess your repayment patterns. A borrower with a 10-year credit history during which they always paid on time is a demonstrably lower risk than a borrower with 6 months of history, even if both have the same payment pattern.\n\nHow opening new accounts hurts account age: Every new account starts at age zero, which lowers the average age of all accounts. This is a key reason why opening new credit cards just for rewards, or opening a new loan you don't need, can temporarily damage your score even if you make all payments on time.\n\nThe impact on personal loan applicants: Young borrowers (under 30) and recent immigrants often have thin files with a short average account age. This suppresses scores even with perfect payment history. Adding a credit-builder loan or becoming an authorized user on an older family member's credit card (which adds that account's age to your file) can help.\n\nKeeping old accounts open: Closing an old credit card (even one you don't use) reduces your oldest-account age and raises your average interest rate. Generally, keeping old accounts open with no balance or a small recurring charge is better for your score than closing them.",
    related: ["credit-score", "fico-score", "tradeline", "credit-mix"],
  },
  {
    slug: "net-income",
    name: "Net Income",
    aka: ["take-home pay", "after-tax income"],
    category: "Application",
    short: "Income after all deductions, including taxes, have been taken out. This is the amount that lands in your bank account. Lenders typically use gross income (not net) for DTI calculations, but net income is what you actually have available to make loan payments.",
    long: "Net income is the amount of money remaining after all deductions have been subtracted from gross income. For employees, deductions include federal and state income taxes, FICA taxes (Social Security 6.2% and Medicare 1.45%), health insurance premiums, 401(k) contributions, and other voluntary deductions.\n\nNet vs. gross for loan purposes: Most personal loan lenders use gross monthly income to calculate your debt-to-income ratio (DTI). This is consistent and comparable across borrowers regardless of their withholding choices. However, your net income is what you actually have available to make loan payments, so it's useful for your own budgeting even if it's not the primary underwriting metric.\n\nExample: An employee earning $6,000/month gross might take home $4,200/month net after taxes and deductions. If a lender qualifies them at a 40% DTI based on gross income, they could have $2,400/month in total debt payments (40% x $6,000). But from a cash-flow perspective, $2,400 out of $4,200 take-home is a 57% burden, which may be tighter than it appears.\n\nSelf-employed net income: For self-employed borrowers, 'net income' often refers to Schedule C net profit (gross business revenue minus business expenses). This is distinct from personal net income. Lenders for self-employed borrowers typically use Schedule C net income or sometimes tax return AGI as the qualifying income base, not gross business revenue.\n\nBudgeting with net income: When assessing whether a personal loan payment is affordable, use your net income as the basis, not gross. A payment that is 15% of gross income might be 25% of net income, which is the real cash-flow constraint.",
    related: ["gross-income", "debt-to-income-ratio", "underwriting"],
  },
  {
    slug: "co-borrower",
    name: "Co-Borrower",
    aka: ["joint borrower", "joint applicant"],
    category: "Application",
    short: "A co-borrower shares equal responsibility for a loan alongside the primary borrower. Unlike a co-signer, a co-borrower also has equal rights to the loan proceeds and the purchased asset (if any). Both borrowers' income counts toward qualification, and both credit histories are evaluated.",
    long: "A co-borrower (also called a joint borrower) is a person who applies for a loan together with the primary borrower as an equal partner. Both parties sign the loan agreement, both are equally responsible for repayment, and both have equal legal rights to the funds. The loan appears on both borrowers' credit reports.\n\nCo-borrower vs. co-signer: A co-signer guarantees the debt if the primary borrower defaults but typically has no ownership rights to the loan proceeds. A co-borrower shares ownership and access to the proceeds from day one. For a personal loan, both structures make the co-borrower/co-signer equally liable for repayment.\n\nBenefit of a co-borrower: Two incomes count toward the DTI qualification, allowing approval for a larger loan or a lower rate than either borrower could get individually. For example, two earners with moderate credit combined may reach a DTI and income level that unlocks better rates.\n\nRisk: Both co-borrowers are 100% responsible for the full debt. If one stops paying, the other owes the full balance and their credit is equally damaged. Lending money jointly to a spouse, family member, or business partner carries relationship risk alongside credit risk.\n\nRemoving a co-borrower: Like co-signer removal, the standard path is refinancing the loan in one borrower's name alone. Most lenders do not allow co-borrower release mid-loan.",
    related: ["co-signer", "underwriting", "debt-to-income-ratio", "credit-score"],
  },
  {
    slug: "charge-off",
    name: "Charge-Off",
    aka: ["write-off", "charged-off account"],
    category: "Credit",
    short: "A charge-off occurs when a lender declares a delinquent debt unlikely to be collected and removes it from their books as a loss, typically after 120-180 days of non-payment. A charge-off does not erase the debt - you still owe it, and the lender may sell it to a collections agency.",
    long: "A charge-off is an accounting action by a lender that reclassifies a seriously delinquent account from an asset to a loss. The lender does this for tax and accounting purposes, not because they forgive the debt. Most lenders charge off accounts after 120-180 days of non-payment, consistent with OCC (Office of the Comptroller of the Currency) guidelines for banks.\n\nWhat changes when an account is charged off: (1) The lender removes the account from their active loan portfolio. (2) The account is marked 'charged off' on your credit reports - a severe derogatory mark. (3) The lender will either pursue internal collections, hire a third-party collection agency, or sell the debt to a debt buyer.\n\nWhat does not change: You still legally owe the full balance plus interest. The statute of limitations on the debt continues to run from the original date of default (not the charge-off date). A debt buyer who purchases the account has the same legal right to collect and sue as the original lender (within the statute of limitations).\n\nCredit impact: A charge-off is one of the most damaging entries on a credit report. It can drop scores by 100-150 points and remains for 7 years from the original delinquency date. Paying the debt (settling or paying in full) does not remove the charge-off notation, but the account status should update to 'charged off - paid' or 'settled,' which is viewed more favorably.\n\nPersonal loans and charge-offs: Missing personal loan payments for 120-180 days almost certainly results in a charge-off. Getting a new personal loan with a charged-off account on your credit report is very difficult at mainstream lenders.",
    related: ["credit-report", "collections", "credit-score", "delinquency"],
  },
  {
    slug: "subprime",
    name: "Subprime",
    aka: ["non-prime", "near-prime"],
    category: "Rates & terms",
    short: "A term for borrowers (or loans) with credit profiles below prime standards - typically a credit score below 620-660. Subprime loans carry higher interest rates to compensate lenders for greater default risk. Not all lenders offer subprime products; those that do often charge 25%-36% APR.",
    long: "Subprime refers to credit quality below what major lenders consider 'prime' - creditworthy borrowers who qualify for competitive rates. The exact cutoff varies by lender, but a FICO score below 620 is widely considered subprime; 620-659 is sometimes called near-prime or non-prime.\n\nHistory: The term gained notoriety during the 2007-2008 financial crisis when subprime mortgage loans packaged into securities collapsed in value. Subprime lending in personal loans is less systemically risky but still carries high default rates relative to prime.\n\nSubprime personal loan market: Lenders who serve subprime borrowers include OneMain Financial, Avant, OppFi, and regional credit unions. Rates typically range from 18%-36% APR. Loan amounts are usually limited to $1,000-$15,000 for borrowers in this tier. Some states cap rates at 36% (including fees), which effectively limits the subprime market in those states.\n\nBorrower perspective: Being labeled 'subprime' is not permanent. Credit scores improve as negative marks age off (7 years for most derogatory items) and positive payment history accumulates. A borrower who takes a subprime loan, makes all payments on time for 12-24 months, and addresses the underlying credit issues (high utilization, collections, etc.) may move into prime territory within 2-3 years.\n\nPredatory lending risk: Subprime borrowers are frequently targeted by predatory lenders. Warning signs include: rates above 36% APR, mandatory add-on insurance products, balloon payments, prepayment penalties, or lenders that don't check your ability to repay.",
    related: ["credit-score", "apr", "origination-fee", "predatory-lending"],
  },
  {
    slug: "balloon-payment",
    name: "Balloon Payment",
    aka: ["balloon loan", "bullet payment"],
    category: "Rates & terms",
    short: "A large lump-sum payment due at the end of a loan term, after a series of smaller periodic payments. Balloon payments are rare in standard personal loans but appear in some mortgages, auto loans, and business financing. The balloon amount is often equal to most of the original principal.",
    long: "A balloon payment is a final payment on a loan that is substantially larger than the preceding installment payments. The loan is structured so that regular payments cover mostly interest and a small portion of principal, leaving a large remaining balance due in a single payment at the end of the term.\n\nExample: A 5-year balloon loan of $50,000 might require $400/month interest-only payments for 59 months, followed by a $50,000 balloon payment in month 60. The borrower has paid $23,600 in interest but still owes the entire principal.\n\nPersonal loans and balloon payments: Most personal loans from online lenders, banks, and credit unions are fully amortizing - meaning regular equal payments pay off both interest and principal so the balance reaches exactly zero at the end of the term. Balloon structures are uncommon in personal lending.\n\nWhere balloon payments appear: Mortgages (especially commercial real estate), some auto loans, seller financing on real estate transactions, certain business term loans.\n\nRisks: If a borrower cannot make the balloon payment (because they have not saved for it or cannot refinance), they may lose the collateral (in secured loans) or face a large default. Always confirm whether a loan has a balloon payment by checking the final payment amount in the loan amortization schedule.\n\nBalloon vs. bullet: A 'bullet loan' (common in commercial real estate) makes no principal payments at all during the term - only interest - and requires the entire principal as one final payment.",
    related: ["amortization", "principal", "loan-term", "refinancing"],
  },
  {
    slug: "loan-disclosure",
    name: "Loan Disclosure (TILA)",
    aka: ["truth in lending disclosure", "Reg Z disclosure", "loan estimate"],
    category: "Regulation",
    short: "A federally required document that lenders must provide before you sign a personal loan agreement. Under the Truth in Lending Act (TILA), the disclosure must clearly state the APR, total finance charge, total amount financed, and the total repayment amount over the life of the loan.",
    long: "The Truth in Lending Act (TILA), implemented by the Federal Reserve's Regulation Z, requires lenders to disclose standardized cost information to consumers before they commit to a loan. The disclosure is designed to let borrowers compare loan offers apples-to-apples.\n\nKey figures that must be disclosed: (1) Annual Percentage Rate (APR) - the annualized cost of credit including fees, expressed as a percentage. (2) Finance Charge - the total dollar cost of the credit over the loan term (interest + fees). (3) Amount Financed - the amount of credit actually provided to you (loan amount minus upfront fees). (4) Total of Payments - the sum of all payments you will make, including principal and interest.\n\nWhen it must be provided: TILA requires the disclosure before you sign the loan agreement. For open-end credit like credit cards, lenders must also provide periodic statements. For mortgage loans, TILA now uses the Loan Estimate and Closing Disclosure forms under the TRID rules.\n\nHow to use the disclosure: Compare the APR (not just the stated interest rate) across lenders, because APR includes origination fees that the stated rate does not. Compare the Total of Payments to understand the actual dollar cost of each loan option.\n\nYour rights under TILA: You have a right to receive the disclosure before signing. For some transactions (like a refinance on your primary home), you have a 3-day right of rescission - you can cancel the transaction within 3 business days of signing.",
    related: ["apr", "origination-fee", "amortization", "regulation"],
  },
  {
    slug: "rate-shopping",
    name: "Rate Shopping",
    aka: ["comparison shopping", "loan shopping"],
    category: "Application",
    short: "The practice of checking rates from multiple lenders before committing to a loan. When done within a 14-45 day window for the same loan type, FICO treats all inquiries as one - so rate shopping has minimal credit score impact. Always use soft-pull pre-qualification tools first.",
    long: "Rate shopping is the process of obtaining loan quotes from multiple lenders to compare APRs, terms, fees, and total costs before selecting the best offer. It is one of the most effective ways to save money on a personal loan.\n\nThe credit score impact: A common myth is that checking your rate with multiple lenders destroys your credit score. In reality, the impact is managed in two ways. First, most lenders offer soft-pull pre-qualification that has zero impact on your score. Second, for formal applications (which do trigger hard inquiries), FICO and VantageScore treat multiple inquiries for the same loan type within a 14-45 day window as a single inquiry, minimizing the score impact.\n\nHow to rate shop effectively: (1) Start with soft-pull pre-qualification at 3-5 lenders (use each lender's 'check your rate' feature). (2) Note the full APR including origination fee, not just the interest rate. (3) Compare monthly payments and total repayment amounts at the same term. (4) Once you have identified your top 1-2 options, submit formal applications within the same 14-day window to keep the hard-inquiry impact to a single event.\n\nWhat to compare: APR (most important), origination fee (some lenders charge 1%-10% of the loan amount), prepayment penalty (check if it exists), funding speed (same day vs 3-5 business days), and minimum/maximum loan amounts.\n\nWhere to rate shop: Online lenders (SoFi, LightStream, Upgrade, Best Egg), your existing bank or credit union, and marketplace lenders. The best offer may not be from your primary bank.",
    related: ["apr", "soft-pull", "hard-inquiry", "origination-fee"],
  },
  {
    slug: "lien",
    name: "Lien",
    aka: ["security interest", "encumbrance"],
    category: "Rates & terms",
    short: "A lender's legal claim against an asset (home, car) used as collateral for a loan. If you default, the lien gives the lender the right to seize and sell that asset to recover the debt. Personal loans are unsecured and carry no lien.",
    long: "A lien is a legal right or claim a creditor holds against a debtor's property as security for a debt. If the borrower fails to repay, the lienholder can force the sale of the property to satisfy the debt.\n\nCommon lien types in consumer finance: Mortgage lien (your home as collateral for a home loan), auto lien (your car as collateral for an auto loan), HELOC or home equity loan lien (home equity as collateral), mechanic's lien (contractor's claim for unpaid work on property).\n\nWhy personal loans have no lien: Unsecured personal loans are not backed by any asset. The lender relies solely on your creditworthiness and income, not on a claim against property. If you default on an unsecured personal loan, the lender cannot directly seize your assets without first getting a court judgment. This is what distinguishes unsecured borrowing from secured borrowing.\n\nSome secured personal loans do have liens: OneMain Financial and some credit unions offer secured personal loans where a car or savings account serves as collateral. These carry a lien on that specific asset, which the lender will note on your title (for a car) or hold in a pledged savings account.\n\nChecking for liens: You can search for liens on real property through your county recorder's office. Auto liens typically appear on the vehicle title. For personal property, liens may be filed as UCC financing statements.",
    related: ["secured-loan", "collateral", "heloc", "unsecured-loan"],
  },
  {
    slug: "index-rate",
    name: "Index Rate",
    aka: ["benchmark rate", "reference rate"],
    category: "Rates & terms",
    short: "A publicly published interest rate (such as SOFR or the prime rate) that lenders use as the baseline for setting variable interest rates. A variable-rate loan is priced as 'index rate + margin.' When the index rises, your rate rises with it.",
    long: "An index rate is a standardized, independently published interest rate benchmark that lenders use to price variable-rate loans. The most common indices for consumer loans are:\n\nPrime Rate: Published daily by the Wall Street Journal based on the federal funds rate set by the Federal Reserve. Credit cards and some personal loans are priced as 'prime + X%'. When the Fed raises rates, prime rises, and so does your variable loan rate.\n\nSOFR (Secured Overnight Financing Rate): The replacement for LIBOR since 2023. Used for variable-rate mortgages, student loans, and some personal loans. Reflects overnight lending rates in Treasury repurchase markets.\n\nHow variable loan rates are calculated: Lender sets a margin (e.g., +5%) on top of the index. If SOFR is 4.5% and the margin is 5%, your rate is 9.5%. If SOFR rises to 5.5%, your rate becomes 10.5%.\n\nWhy it matters to borrowers: A 3-year fixed personal loan at 10% is predictable regardless of Fed actions. A variable-rate loan starting at 9% linked to prime could become 12% or 14% if the Fed raises rates during your loan. For personal loans, which have shorter terms than mortgages, the index rate risk is more concentrated.\n\nChecking the current index: The prime rate is published at wsj.com/market-data/bonds/moneyrates. SOFR is published by the New York Federal Reserve at newyorkfed.org.",
    related: ["variable-rate", "fixed-rate", "prime-rate", "apr"],
  },
  {
    slug: "credit-limit",
    name: "Credit Limit",
    aka: ["spending limit", "credit line"],
    category: "Credit",
    short: "The maximum amount a lender permits you to borrow on a revolving credit account (credit card, line of credit, HELOC). Personal loans do not have a credit limit - you receive the full approved amount in one lump sum.",
    long: "A credit limit is the maximum balance a lender will extend on a revolving credit account. Unlike an installment loan (personal loan, auto loan, mortgage) where you receive a lump sum, revolving accounts let you borrow, repay, and re-borrow up to the credit limit repeatedly.\n\nHow credit limits are set: Lenders use your credit score, income, existing debt, payment history with that lender, and current economic conditions. A new credit card might offer $2,000; after 12 months of on-time payments, the lender may proactively increase it to $5,000.\n\nCredit limit and credit utilization: How much of your credit limit you are using is your utilization rate. A $5,000 balance on a $10,000 card is 50% utilization. FICO models heavily penalize utilization above 30%. The optimal target is below 10% for the highest possible score.\n\nAsking for a credit limit increase: Most card issuers allow you to request a higher limit online or by phone. A hard inquiry may or may not be pulled depending on the issuer. A higher limit with the same balance instantly lowers utilization and improves your score.\n\nCredit limit vs. personal loan amount: Personal loans have a maximum approved amount but you receive it all upfront. There is no ongoing available credit to draw from. A personal loan paid off and closed does not leave a credit limit - the account simply closes.",
    related: ["credit-utilization", "revolving-credit", "personal-line-of-credit", "credit-score"],
  },
  {
    slug: "balance-transfer-fee",
    name: "Balance Transfer Fee",
    aka: ["transfer fee"],
    category: "Rates & terms",
    short: "A one-time charge of 3%-5% of the transferred balance when you move credit card debt to a different card. On a $10,000 balance transfer, a 3% fee costs $300. Compare this cost against the interest you will save during the promotional period.",
    long: "A balance transfer fee is charged by the receiving credit card issuer when you transfer existing debt from one card to theirs. It is typically 3%-5% of the amount transferred and is added to your new balance immediately.\n\nWhy cards charge this fee: The issuer is taking on your debt and offering you a promotional 0% APR period. The fee is how they make some money even if you pay off the balance before the promotional period ends.\n\nMath example: $10,000 balance transfer with a 3% fee = $300 fee. If you are currently paying 22% APR on that $10,000, the annual interest would be about $2,200. Even with a $300 fee, a 15-month 0% promotional period saves you significant interest if you pay off the balance in time.\n\nComparing personal loan to balance transfer: A personal loan to pay off credit card debt has no balance transfer fee. A $10,000 personal loan at 12% APR for 24 months costs $1,289 in interest, versus a balance transfer that costs $300 upfront but $0 in interest if fully paid within the promo period. If you can pay off within 15-21 months, the 0% card wins. If you need more time, the personal loan often wins.\n\nWatch for: Some cards charge no balance transfer fee for transfers within the first 60 days of account opening. After that, the fee applies. Also note that balance transfers typically do not earn rewards points.",
    related: ["apr", "revolving-credit", "debt-consolidation", "personal-loan"],
  },
  {
    slug: "introductory-apr",
    name: "Introductory APR",
    aka: ["intro APR", "promotional APR", "0% APR offer"],
    category: "Rates & terms",
    short: "A temporary low or zero interest rate offered for a set period (typically 12-21 months) on new credit card accounts or balance transfers. After the promotional period ends, the rate reverts to the regular (often much higher) APR.",
    long: "An introductory APR is a marketing incentive lenders use to attract new customers. The most attractive versions offer 0% APR for 12-21 months on purchases, balance transfers, or both.\n\nHow the promotional period works: During the intro period, no interest accrues on qualifying balances. If you transfer $8,000 in debt and pay it all off within 18 months at 0% APR, you paid no interest at all (minus any balance transfer fee).\n\nWhat happens when it ends: On the day the promotional period expires, the remaining balance begins accruing interest at the regular APR - which is typically 19%-29% on credit cards. The transition happens automatically with no warning from most issuers.\n\nDeferred interest vs. 0% interest: These are not the same. A true 0% APR offer means interest simply does not accrue during the promo period. A deferred interest offer (common with store cards and contractor financing) means interest IS accruing in the background - if you do not pay off the full balance by the promo end date, the entire deferred interest amount is charged retroactively. Always confirm which type you are being offered.\n\nUsing intro APR as a personal loan alternative: If you need to finance something over 12-18 months and can guarantee payoff within that window, a 0% intro APR card beats a personal loan on total cost (assuming no or low balance transfer fees). For longer payoff needs, a personal loan with a fixed rate is usually cheaper.",
    related: ["apr", "balance-transfer-fee", "revolving-credit", "deferred-interest"],
  },
  {
    slug: "deferred-interest",
    name: "Deferred Interest",
    aka: ["same-as-cash financing", "no-interest if paid in full"],
    category: "Rates & terms",
    short: "A financing arrangement where interest accrues during a promotional period but is waived if you pay the full balance by the deadline. If even $1 remains unpaid at the deadline, the entire deferred interest - often at 26%-30% APR - is charged retroactively.",
    long: "Deferred interest is commonly used by retailers, healthcare providers, medical credit cards (CareCredit), and home improvement contractors. The marketing language 'same as cash' or 'no interest if paid in full in 12 months' signals a deferred interest arrangement.\n\nWhy it is risky: Unlike a true 0% APR promotion where interest simply does not accumulate, deferred interest runs a hidden interest clock behind the scenes at the full rate (typically 26%-30% APR). The entire accumulated interest is waived only if you pay the full original balance by the promotional end date. If you have $1 remaining, you owe all the deferred interest retroactively.\n\nExample: $3,000 furniture purchase on same-as-cash 18-month financing at 29.99% APR. If you pay $2,990 by the end of month 18 but still owe $10, you are charged approximately $1,350 in deferred interest (18 months x 29.99% / 12 x $3,000 average balance). The $10 remaining cost you $1,350.\n\nHow to handle deferred interest financing safely: Set a calendar reminder for 60 days before the deadline. Arrange your budget to pay the full balance at least 30 days early to avoid any last-minute payment timing issues.\n\nBetter alternatives for most borrowers: A personal loan with a fixed rate eliminates the deferred interest risk entirely. A true 0% APR balance transfer card (not deferred interest) is also safer.",
    related: ["introductory-apr", "apr", "revolving-credit", "origination-fee"],
  },
  {
    slug: "loan-agreement",
    name: "Loan Agreement",
    aka: ["promissory note", "credit agreement", "loan contract"],
    category: "Rates & terms",
    short: "The legal contract between a borrower and lender documenting the loan amount, interest rate, repayment schedule, fees, and rights of both parties. You should read the full agreement before signing - it is legally binding.",
    long: "A loan agreement (also called a credit agreement, promissory note, or note) is the legally enforceable contract governing your personal loan. Once you sign, you are obligated to the terms in the document.\n\nKey sections to read before signing: (1) Interest rate and APR - confirm the rate is what was quoted. (2) Loan amount and disbursement amount - if there is an origination fee, the disbursement (what you receive) will be less than the loan amount. (3) Monthly payment amount and due date. (4) Prepayment penalty clause - most online personal loans have none, but check explicitly. (5) Late payment fee amount and grace period. (6) Default provisions - what events trigger a default (missed payment, declared bankruptcy). (7) Arbitration clause - many lenders require disputes go to binding arbitration rather than court.\n\nElectronic signatures: Online personal loans are signed electronically using e-signature platforms. Electronic signatures are fully legally binding under the E-SIGN Act of 2000.\n\nKeepping a copy: Always download and save a PDF of the signed agreement. Store it somewhere you can find it years from now if a dispute arises.\n\nRight of rescission: For most personal loans, there is no 3-day right of rescission like there is for mortgage refinances on a primary home. Once you e-sign and funds are disbursed, the loan is final. Review carefully before signing.",
    related: ["promissory-note", "tila", "prepayment-penalty", "origination-fee"],
  },
  {
    slug: "annual-fee",
    name: "Annual Fee",
    aka: ["yearly fee", "membership fee"],
    category: "Rates & terms",
    short: "A yearly charge some credit cards and lines of credit impose simply for having the account open. Personal loans almost never have annual fees - they typically have a one-time origination fee instead. For credit cards, weigh the annual fee against the card's rewards and benefits.",
    long: "An annual fee is a yearly charge billed by a credit card issuer or line of credit lender for maintaining the account. It appears on your statement once per year, typically on the account anniversary or January.\n\nWhy annual fees exist: Premium rewards cards (travel cards, cash-back cards) offer benefits worth more than the annual fee if you use them. A card with a $95 annual fee but $350 in annual travel credits is net-positive for frequent travelers.\n\nAnnual fees and personal loans: Installment personal loans from reputable online lenders almost never charge annual fees. The one-time cost structure for personal loans is the origination fee (1%-8% charged at funding). Be cautious of any personal loan lender that mentions recurring annual fees - this is not standard and is a red flag.\n\nCalculating the real APR of an annual fee card: If you carry a $1,000 balance on a card with a 20% APR and a $100 annual fee, your effective APR is closer to 30% (the $100 fee is equivalent to 10% of the balance annually). For small balances, annual fees dramatically increase the true cost of the debt.\n\nWaiving the annual fee: Many card issuers will waive the annual fee in the first year as an incentive, or will waive it if you call and ask (citing a competing no-fee offer). This works more reliably at banks where you have multiple products.",
    related: ["origination-fee", "apr", "revolving-credit", "credit-limit"],
  },
  {
    slug: "avalanche-method",
    name: "Avalanche Method",
    aka: ["debt avalanche", "highest-rate-first"],
    category: "Repayment",
    short: "A debt repayment strategy where you pay minimums on all debts, then direct all extra money toward the debt with the highest interest rate first. Mathematically optimal - saves the most money in total interest. Compare with the snowball method (lowest balance first).",
    long: "The avalanche method is a systematic debt payoff approach that minimizes the total interest you pay over time by targeting high-interest debt first.\n\nHow it works: List all debts with their balances, minimum payments, and interest rates. Pay the minimum on every debt each month. Apply all remaining available money to the debt with the highest APR. When that debt is paid off, roll its payment to the next-highest-rate debt.\n\nExample: Credit card at 24% APR ($5,000 balance), personal loan at 14% APR ($8,000 balance), auto loan at 6% APR ($12,000 balance). Avalanche order: credit card first, then personal loan, then auto loan. You pay the absolute minimum on the personal loan and auto loan while aggressively paying the credit card.\n\nWhy it saves the most money: High-interest debt grows fastest. Every extra dollar you put toward a 24% APR debt saves 24 cents per year in perpetuity (until the balance is zero). A dollar toward a 6% debt saves only 6 cents. Hitting the highest rate first is mathematically superior.\n\nComparing to snowball method: The snowball method (pay lowest balance first) gives psychological wins faster by eliminating accounts quickly. Research shows some people stay more motivated with snowball because they see accounts closing. Avalanche wins on pure math; snowball wins on psychology for some borrowers.\n\nUsing avalanche with a personal loan: If you take a personal loan to consolidate credit card debt, the personal loan replaces high-APR debt with lower-APR debt automatically - essentially performing the avalanche move in one step.",
    related: ["debt-consolidation", "prepayment-penalty", "personal-loan", "credit-counseling"],
  },
  {
    slug: "snowball-method",
    name: "Snowball Method",
    aka: ["debt snowball", "lowest-balance-first"],
    category: "Repayment",
    short: "A debt repayment strategy where you pay minimums on all debts and direct extra money toward the smallest balance first, regardless of interest rate. Creates psychological wins by eliminating accounts quickly. Costs more in total interest than the avalanche method but keeps some borrowers more motivated.",
    long: "The debt snowball method was popularized by financial author Dave Ramsey. It prioritizes behavioral motivation over mathematical optimization.\n\nHow it works: List all debts by balance from smallest to largest (ignore interest rates for ranking). Pay the minimum on every debt. Put all extra money toward the smallest balance. When that debt is paid off, roll its payment amount into the next-smallest balance - the 'snowball' grows as each account closes.\n\nPsychological mechanism: Eliminating an account quickly (even if it is a small one) gives a concrete sense of progress. For borrowers who have struggled with debt motivation, a quick win can provide the momentum to stay committed to the payoff plan.\n\nThe cost of snowball vs avalanche: On a typical mix of debts (credit cards at 20%-24%, car at 6%-8%), the snowball method typically costs $500-$2,000 more in total interest than the avalanche over 3-5 years. The higher cost is the price of motivation for some people.\n\nWhen snowball works best: When you have multiple small debts (medical bills, store cards, small credit cards) cluttering your financial picture. Eliminating accounts simplifies your monthly payments. When the psychological burden of many open accounts is more draining than the interest cost difference.\n\nWhen avalanche is clearly better: When one debt has an extreme rate (30%+ payday loan, high-rate credit card) and others are moderate. The math gap is too large to ignore.",
    related: ["avalanche-method", "debt-consolidation", "personal-loan", "credit-counseling"],
  },
  {
    slug: "net-monthly-income",
    name: "Net Monthly Income",
    aka: ["take-home pay", "after-tax income"],
    category: "Application",
    short: "Your total monthly earnings after taxes, Social Security, and other mandatory deductions have been withheld. Lenders use gross (pre-tax) income for DTI calculations, but net income reflects what you actually have available for loan payments.",
    long: "Net monthly income is what lands in your bank account after your employer withholds federal income tax, state income tax, Social Security (6.2%), Medicare (1.45%), and any pre-tax benefit contributions (health insurance, 401k).\n\nWhy lenders use gross income instead: Debt-to-income calculations in the mortgage and personal loan industry use gross (pre-tax) income because tax burdens vary significantly between borrowers and tax situations change. Using a consistent pre-tax number makes lender comparisons more standardized.\n\nPractical planning using net income: Even though lenders approve you based on gross income DTI, you make payments from your net income. A $500/month loan payment on a $5,000/month gross income looks manageable at 10% DTI. But if your net income after taxes and deductions is $3,500, that same $500 payment is 14.3% of take-home pay - a more honest picture of your monthly cash flow.\n\nSelf-employed borrowers: When you are self-employed, 'net income' often means profit after business expenses (net profit on Schedule C). Lenders may use 2-year average net profit from tax returns. This can be significantly lower than gross revenue.\n\nBudgeting with net income: When deciding if a loan is affordable, compare the monthly payment to your net income, not your gross. Most financial planners suggest keeping total debt payments under 25-30% of net (take-home) income for comfortable repayment.",
    related: ["debt-to-income-ratio", "gross-income", "income-verification"],
  },
  {
    slug: "payment-history",
    name: "Payment History",
    aka: ["payment record", "on-time payment rate"],
    category: "Credit",
    short: "The most heavily weighted factor in your FICO credit score (35%), tracking whether you pay bills on time. A single 30-day late payment can drop a good credit score by 60-110 points. On-time payments over years are the foundation of excellent credit.",
    long: "Payment history is the single most important factor in the FICO scoring model, accounting for 35% of your score. It records whether you paid each credit account on time, and if not, how late.\n\nHow lateness is categorized: Payments are reported in tiers - 30, 60, 90, 120, and 150+ days late. Each tier is progressively more damaging. A payment that is 29 days late does not appear on your credit report at all (though you may owe a late fee to the lender). The damage begins at 30 days.\n\nScore impact estimates: For a borrower with a 740 FICO, a single 30-day late payment typically causes a 60-80 point drop. For a 680 FICO, a 30-day late might drop the score 50-60 points. Scores below 640 are impacted less dramatically because the starting point is already distressed.\n\nHow long late payments stay: A late payment remains on your credit report for 7 years from the date of the missed payment. However, the scoring impact fades significantly after 12-24 months as the late payment becomes older and is overshadowed by recent positive history.\n\nAutopay as the primary defense: Setting autopay for at least the minimum payment on every credit account is the single most reliable way to protect payment history. One forgotten payment during a busy period can take a year to recover from in scoring terms.\n\nGoodwill adjustment requests: If you have an otherwise excellent payment history and miss one payment due to a hardship, calling the lender and requesting a 'goodwill adjustment' (removing the late mark from credit reporting) is worth attempting. Some lenders will do this once for a long-standing customer in good standing.",
    related: ["credit-score", "hard-inquiry", "credit-report", "fico-score"],
  },
  {
    slug: "variable-rate",
    name: "Variable Rate",
    aka: ["adjustable rate", "floating rate", "variable APR"],
    category: "Rates & terms",
    short: "An interest rate that changes over time based on a reference index (such as the Prime Rate or SOFR). Most personal loans have fixed rates; variable rates are more common on credit cards, HELOCs, and some private student loans. The rate can go up or down.",
    long: "A variable interest rate is tied to a benchmark rate that fluctuates with market conditions. The most common benchmark for consumer products in the United States is the Prime Rate (set at 3 points above the Federal Funds Rate) or SOFR (Secured Overnight Financing Rate, which replaced LIBOR).\n\nHow variable rates work in personal loans: If a variable-rate personal loan has a rate of Prime + 5%, and Prime is 8.5%, your rate is 13.5%. If the Fed raises rates and Prime moves to 9%, your rate becomes 14%. Your monthly payment rises with the rate.\n\nVariable vs fixed for personal loans: Most personal loans in the current market are fixed-rate. Variable-rate personal loans do exist (notably from some credit unions and online lenders) but are less common than on credit cards or HELOCs. When offered, variable rates often start lower than fixed rates to compensate for the risk you take on.\n\nRate caps: Variable-rate consumer loans sometimes include caps - a maximum amount the rate can rise per year (periodic cap) or over the life of the loan (lifetime cap). Review these caps carefully before accepting a variable-rate offer.\n\nWhen variable can make sense: If rates are high and expected to decline (as in a high-rate cycle turning toward cuts), a variable-rate loan could drop your rate over time. If you plan to pay off the loan quickly (under 12 months), short-term rate volatility matters less.\n\nThe risk: Unlike a fixed payment that you can budget around reliably, variable payments are unpredictable. A multi-year personal loan with a variable rate exposes you to significant payment increases if market rates rise substantially.",
    related: ["annual-percentage-rate", "fixed-rate", "index-rate", "prime-rate"],
  },
  {
    slug: "loan-servicer",
    name: "Loan Servicer",
    aka: ["servicer", "loan servicing company"],
    category: "Lender types",
    short: "The company that handles your day-to-day loan administration - collecting payments, managing your account, and handling payoff requests. Your loan servicer may differ from the original lender if your loan was sold or assigned after closing.",
    long: "When you take out a personal loan, the company you make payments to (the servicer) may not be the company that originated the loan. Lenders frequently sell loan portfolios to investors or specialized servicing companies. The terms of your loan cannot change when sold, but who you deal with operationally does.\n\nWhat servicers do: Process your monthly payments. Manage your account record and payment history. Handle hardship requests, deferments, and forbearance applications. Send payoff statements when you request them. Report payment activity to credit bureaus. Manage collections if payments become delinquent.\n\nYour rights when a servicer changes: Federal law requires your original lender to notify you in writing at least 15 days before transferring servicing. The new servicer must send a welcome notice within 15 days of assuming service. You have a 60-day grace period during the transfer in which you cannot be penalized for sending payment to the wrong servicer.\n\nCommon servicer transfers: Personal loans originated by marketplace lenders (LendingClub, Prosper) are often sold to institutional investors immediately after funding; the platform may continue servicing or hand it to a third party. Student loan servicing transfers are very common and have caused significant consumer confusion as multiple servicers have exited the market.\n\nFinding your servicer: If you are unsure who your current servicer is, check your credit report. The servicer appears as the active creditor on the tradeline. For student loans, the National Student Loan Data System (NSLDS) shows current servicer assignments.",
    related: ["origination-fee", "lender", "personal-loan", "credit-report"],
  },
  {
    slug: "unsecured-debt",
    name: "Unsecured Debt",
    aka: ["unsecured loan", "signature debt"],
    category: "Rates & terms",
    short: "Debt not backed by any collateral. If you default, the lender cannot automatically seize an asset - they must sue to obtain a judgment. Personal loans, credit cards, and medical bills are common unsecured debts. Rates are typically higher than secured debt.",
    long: "Unsecured debt requires no pledged collateral. The lender's protection is your promise to repay (and legal remedies if you do not), rather than a claim on a specific asset.\n\nHow unsecured differs from secured: A mortgage is secured by the home - default leads to foreclosure. A car loan is secured by the vehicle - default leads to repossession. A personal loan is unsecured - if you default, the lender's recourse is to report the delinquency to credit bureaus, sell the debt to a collection agency, or sue you to obtain a judgment. No asset is automatically forfeited.\n\nLegal remedies for unsecured default: After winning a court judgment against you, a creditor can garnish wages (take a percentage from your paycheck), levy bank accounts (freeze and seize funds), or place a lien on property you own. These remedies require additional legal steps and vary by state law.\n\nWhy unsecured debt has higher rates: The lender takes on more risk without collateral. This risk premium is reflected in higher interest rates compared to equivalent secured products. A personal loan at 12% vs a home equity loan at 8% illustrates this spread.\n\nTypes of unsecured consumer debt: Personal loans. Credit cards. Medical bills. Student loans (federal and private). Payday loans. Buy-now-pay-later (BNPL) obligations.\n\nBankruptcy treatment: In Chapter 7 bankruptcy, most unsecured debt (credit cards, personal loans, medical bills) can be discharged. Secured debt survives unless you give up the underlying collateral. This is why unsecured personal loans carry a higher risk premium and higher rates.",
    related: ["personal-loan", "secured-loan", "collateral", "debt-to-income-ratio"],
  },
  {
    slug: "credit-freeze",
    name: "Credit Freeze",
    aka: ["security freeze", "credit lock"],
    category: "Credit",
    short: "A restriction you place on your credit report that prevents new creditors from accessing it. Lenders cannot approve new credit accounts while a freeze is active. Free to place and lift at all three bureaus since 2018. Must be lifted before applying for a personal loan.",
    long: "A credit freeze (formally called a security freeze) blocks third parties from pulling your credit report to issue new credit. The freeze does not affect your existing accounts, your credit score, or your ability to use credit you already have - it only prevents new credit from being opened.\n\nWhen to use: If your Social Security number or financial data has been compromised in a data breach or identity theft incident. As a precautionary measure if you are not planning to apply for new credit for months or years. For children (you can freeze a child's credit file to prevent identity theft before they are old enough to use credit).\n\nFree by federal law: The Economic Growth, Regulatory Relief, and Consumer Protection Act (2018) made credit freezes free to place and lift at all three major bureaus (Equifax, Experian, TransUnion). There is no fee and no limit on how many times you can freeze and thaw your reports.\n\nHow to freeze: Contact each bureau separately online, by phone, or by mail. You receive a PIN or account access that you use to lift the freeze later. The freeze is effective immediately when placed online.\n\nLifting a freeze for a loan application: When applying for a personal loan, lift the freeze at all three bureaus before applying (most personal loan lenders pull all three). You can lift it permanently or temporarily (for a specified number of days). Temporary lift is safer if you only need it for one application cycle.\n\nFreezes vs locks: 'Credit lock' is a marketing term some bureaus use for a paid service that works similarly to a freeze but may have different legal protections. The free statutory credit freeze has stronger legal protections under federal law.",
    related: ["hard-inquiry", "credit-report", "credit-score", "identity-theft-protection"],
  },
  {
    slug: "charge-off",
    name: "Charge-Off",
    aka: ["write-off", "charged off account"],
    category: "Credit",
    short: "An accounting action where a lender writes your debt off their books as a loss, typically after 120-180 days of non-payment. A charge-off does not eliminate the debt - you still owe it, and it remains on your credit report for 7 years. Often signals debt sale to a collector.",
    long: "A charge-off is an accounting entry, not a legal determination. When a lender charges off a debt, they reclassify it from an asset to a loss for accounting and tax purposes. The IRS requires lenders to charge off debts deemed uncollectible. This typically happens at 120-180 days of non-payment for unsecured consumer debt.\n\nWhat happens after charge-off: The original lender typically sells the charged-off debt to a debt collection agency for pennies on the dollar (5-20 cents per dollar of face value). The collection agency then attempts to collect the full balance from you - often years later. You now owe the collection agency rather than the original lender, and the collection account appears separately on your credit report.\n\nCredit reporting impact: A charged-off account remains on your credit report for 7 years from the first date of delinquency that led to the charge-off (not the date of the charge-off itself). A charge-off is one of the most damaging entries on a credit report - it signals extended non-payment and reduces your score significantly (100-150 points for a previously good score).\n\nPaying a charged-off debt: You can still pay a charged-off debt. If it has not been sold to a collector, contact the original lender. If sold, negotiate with the collector. Paying does not remove the charge-off from your report, but the status changes to 'charged off - paid' which looks better to lenders than 'charged off - unpaid.'\n\nStatute of limitations: Each state has a statute of limitations on collecting debts - typically 3-6 years from the last payment date. After this window, collectors cannot sue to enforce the debt. However, the debt still exists and can still be reported to credit bureaus for the full 7 years.\n\nDo not confuse with credit score 'charged off': Sometimes people mistake 'charge-off' with their account balance being zeroed out. The debt is fully owed regardless of the accounting treatment.",
    related: ["collections", "credit-score", "debt-settlement", "credit-report"],
  },
  {
    slug: "dti-ratio",
    name: "Debt-to-Income Ratio (DTI)",
    aka: ["DTI", "debt ratio", "income-to-debt ratio"],
    category: "Application",
    short: "Your total monthly debt payments divided by your gross monthly income, expressed as a percentage. Lenders use DTI to assess your capacity to take on new debt. Most personal loan lenders want DTI below 40-45%. Below 36% is considered strong.",
    long: "DTI = (Total monthly debt payments) / (Gross monthly income) x 100\n\nWhat counts in the numerator: All minimum monthly debt payments that appear on your credit report. This includes credit card minimums, car loans, student loans, mortgage or rent (some lenders exclude rent), and any existing personal loans. Utilities, phone bills, and subscriptions are typically excluded.\n\nGross vs net income: DTI uses pre-tax gross income, not take-home pay. This is an industry standard that allows for consistent comparisons across borrowers with different tax situations.\n\nDTI thresholds by lender type:\n\nConventional mortgage: Maximum 43% back-end DTI (including all debts). Some programs allow up to 50% with compensating factors.\n\nPersonal loans: Most lenders target under 40-45% total DTI after adding the proposed new payment. Some lenders (Upgrade, Avant) have approved borrowers up to 50% DTI for strong-income, good-credit applicants.\n\nAuto loans: Tend to focus on payment-to-income (PTI) in addition to DTI.\n\nFront-end vs back-end DTI: Front-end DTI includes only housing costs (mortgage/rent + property tax + insurance). Back-end DTI includes all debt payments. Personal loan lenders usually only calculate back-end DTI.\n\nReducing DTI before applying: Pay off or pay down debts to eliminate minimum payments. Increase income (documented second jobs, freelance income, alimony). Co-borrower with income can reduce combined DTI if both incomes are counted. Do not open new credit cards (minimum payments increase DTI even if you do not carry a balance).",
    related: ["debt-to-income-ratio", "gross-income", "personal-loan", "approval-odds"],
  },
  {
    slug: "peer-to-peer-lending",
    name: "Peer-to-Peer Lending",
    aka: ["P2P lending", "marketplace lending", "crowdlending"],
    category: "Lender types",
    short: "A lending model where individuals (investors) fund loans to other individuals through an online platform, cutting out traditional banks. LendingClub and Prosper are the largest U.S. platforms. Rates and terms are often competitive with bank personal loans.",
    long: "Peer-to-peer (P2P) lending platforms emerged around 2005-2007 with the promise of directly connecting borrowers who needed funds with investors seeking better returns than savings accounts.\n\nHow it works in practice today: Borrowers apply online and receive a credit decision within minutes to hours. If approved, their loan request is listed for investors to fund (in whole or fractional shares). Most platforms fund loans within a few business days. The platform services the loan (collects payments, handles delinquency) and takes a fee from both borrowers (origination fee) and investors (service fee).\n\nEvolution of P2P platforms: Originally, P2P lending was truly individual-to-individual. Today, institutional investors (hedge funds, banks, insurance companies) fund the majority of loans on most platforms. The 'peer-to-peer' label is somewhat historical - these are now better described as 'marketplace lenders.'\n\nLeading U.S. platforms: LendingClub (went public and acquired a bank; now FDIC-insured). Prosper (still operates as a marketplace). Upstart (uses AI/ML underwriting, sells loans to banks). Avant (focuses on near-prime borrowers). LendingClub now operates more like a bank than a traditional P2P platform.\n\nBorrower considerations: Rates and fees on P2P platforms are often similar to traditional online lenders. Origination fees of 1%-6% are common. Approval decisions may be faster for some credit profiles that traditional banks would decline. The key advantage is access, not necessarily price.\n\nFor investors: P2P platform investments in consumer loans are not FDIC insured and carry real default risk. Not suitable for money that cannot be lost. Most P2P investment opportunities are now only available to accredited investors.",
    related: ["marketplace-lender", "origination-fee", "personal-loan", "secured-loan"],
  },
  {
    slug: "promotional-rate",
    name: "Promotional Rate",
    aka: ["intro APR", "teaser rate", "introductory period"],
    category: "Rates & terms",
    short: "A temporary, lower interest rate offered for a defined introductory period (typically 6-21 months) on credit cards or occasionally loans. After the period ends, the rate resets to the standard (higher) rate. Common on balance transfer cards and 0% purchase offers.",
    long: "A promotional rate is a marketing tool that lets lenders attract borrowers with a temporarily attractive interest rate. The rate is real but expires.\n\nCommon promotional structures:\n\n0% purchase APR: No interest on new purchases for 12-21 months. If you pay the full balance before the period ends, you pay no interest at all. After the period, remaining balances accrue at the standard APR (typically 19%-29%).\n\n0% balance transfer APR: Transfer existing credit card debt to a new card and pay 0% interest on the transferred balance for 12-21 months. Balance transfer fees (3%-5%) apply upfront but are often still cheaper than ongoing interest at 20%+.\n\nReduced-rate personal loan: Less common; some lenders offer a lower rate for the first few months of a loan term, then the rate adjusts upward.\n\nThe deferred interest trap: Some retailer financing (Synchrony, Comenity Bank) uses 'deferred interest' rather than a true 0% promotion. If you do not pay the full promotional balance by the deadline, all back-interest is charged retroactively at the full rate (often 26%-30%). This is not the same as a true 0% promotional rate. Read the fine print carefully.\n\nUsing promotions strategically: A 0% balance transfer card is an excellent tool for paying down high-rate credit card debt interest-free during the promotional window. Set up autopay to ensure the full balance is paid before the period ends. Set a calendar reminder 3 months before the deadline to assess your payoff pace.\n\nPersonal loan vs promotional credit: For amounts you can repay within 12-21 months, a 0% credit card promotion is cheaper than any personal loan. For amounts requiring 24-60 months to repay, a low fixed-rate personal loan (8%-15%) typically beats a credit card's standard 20%+ rate.",
    related: ["annual-percentage-rate", "balance-transfer-fee", "introductory-apr", "deferred-interest"],
  },
  {
    slug: "credit-invisible",
    name: "Credit Invisible",
    aka: ["no credit file", "unscoreable", "thin file"],
    category: "Credit",
    short: "A consumer with no credit report at any major bureau, or too little credit history to generate a FICO score. Approximately 26 million Americans are credit invisible. Lenders cannot approve standard personal loans for credit invisible applicants through automated underwriting.",
    long: "The term 'credit invisible' was coined by the Consumer Financial Protection Bureau (CFPB) in a 2015 report. The CFPB identified approximately 26 million Americans with no credit file at the three major bureaus and another 19 million with a file but insufficient activity to generate a score.\n\nWhy credit invisibility creates a catch-22: To build credit, you need access to credit products. But to access credit products, you typically need existing credit. This is the fundamental barrier the credit invisible face.\n\nWho is most affected: Recent immigrants with no U.S. credit history. Young adults who have not yet opened credit accounts. Elderly consumers who closed all accounts and stopped using credit. Lower-income Americans who have used only cash and debit for years.\n\nPaths out of credit invisibility: Secured credit cards (provide a cash deposit that becomes your credit limit - no credit history required). Credit-builder loans at credit unions (payments reported to bureaus). Becoming an authorized user on a trusted family member's credit card (their history is added to your report). Experian Boost (adds utility and phone payments to Experian report). Upstart (personal loan lender that uses non-traditional underwriting for no-score applicants).\n\nFICO ScoreScan program: FICO has initiatives to score previously unscoreable consumers using alternative data (rental payments, utility payments, bank account data). Some lenders participate in programs to reach credit-invisible borrowers.\n\nTimeline: With a secured card and credit-builder loan opened simultaneously, most credit-invisible individuals generate their first score within 6 months and reach 600+ within 12 months.",
    related: ["credit-builder-loan", "credit-score", "soft-inquiry", "tradeline"],
  },
  {
    slug: "income-verification",
    name: "Income Verification",
    aka: ["income documentation", "proof of income", "income proof"],
    category: "Application",
    short: "The process by which a lender confirms that you earn the income you claimed on your application. Common verification methods include pay stubs, W-2 forms, tax returns, bank statements, and employer phone verification. Self-employed borrowers face more extensive verification.",
    long: "Income verification is a core component of loan underwriting. The lender needs confidence that you can afford the monthly payment before committing to the loan.\n\nVerification methods by employment type:\n\nW-2 employees: Pay stubs (most recent 1-2 pay periods), W-2 forms from the most recent tax year, and sometimes employer verification by phone or email. Digital verification services (Plaid, The Work Number/Equifax) can access payroll data instantly with your permission.\n\nSelf-employed / sole proprietors: Two years of signed federal tax returns with Schedule C. Business bank statements (3-12 months). Year-to-date profit and loss statement, ideally CPA-prepared. 1099 forms.\n\nGig workers / contractors: 1099 forms, bank statement deposit history, Schedule C from tax returns.\n\nRetired / disability income: Social Security award letter or benefit verification letter. Pension statement from the administrator. VA rating letter for VA disability. Investment account statements if living on distributions.\n\nRental income: Schedule E from tax return showing rental income, lease agreements, and bank statements showing rent deposits.\n\nDigital income verification: Many lenders now use Plaid (bank connection) or the Equifax Work Number database (which holds payroll records for 50%+ of U.S. employers) to instantly verify income without requiring document uploads. You grant permission, the system checks, and the lender gets your data in seconds.\n\nWhy verification matters: Lenders use your verified income to calculate DTI (debt-to-income ratio). Overstating income on a loan application is fraud, even if unintentional. Lenders reserve the right to verify income at any point, including before funding.",
    related: ["debt-to-income-ratio", "gross-income", "net-income", "underwriting"],
  },
  {
    slug: "financial-hardship",
    name: "Financial Hardship",
    aka: ["hardship", "economic hardship", "financial difficulty"],
    category: "Repayment",
    short: "A documented event or condition that temporarily impairs your ability to meet financial obligations. Recognized hardships include job loss, medical crisis, divorce, natural disaster, or death of a co-borrower. Most lenders have hardship programs for customers who proactively communicate before defaulting.",
    long: "Financial hardship is a legal and regulatory term recognized across the lending industry. When a borrower documents a genuine hardship, lenders are incentivized to work out a solution - recovery of a modified payment is better than the loss from default.\n\nCommon qualifying hardship events: Job loss or significant income reduction. Medical emergency or extended illness (the borrower's or a dependent's). Death of a spouse or co-borrower. Natural disaster (FEMA-declared events typically trigger automatic lender accommodation programs). Divorce or separation with materially changed income. Military deployment.\n\nWhat hardship programs offer: Payment deferral (skip one payment, extend the loan). Reduced payment period (pay only interest for 1-3 months). Forbearance (pause payments entirely while interest accrues). Interest rate reduction (temporary). Fee waivers (late fees, prepayment penalties).\n\nDocumentation: Lenders typically require documentation of the hardship event. For job loss: a termination letter or layoff notice. For medical: hospital statements or doctor's note. For natural disaster: FEMA documentation or news verification.\n\nWhen to contact the lender: Before the payment is due, not after. Lenders have much more flexibility for current-status accounts than for accounts already delinquent. Calling 1-2 weeks before a missed payment gives both parties maximum options.\n\nCFPB definition: The CFPB formally recognizes financial hardship in its mortgage servicing rules and expects servicers to have defined processes for hardship accommodation. Personal loan lenders are not subject to the same regulations but typically have analogous programs.",
    related: ["forbearance", "delinquency", "default", "payment-history"],
  },
  {
    slug: "loan-purpose",
    name: "Loan Purpose",
    aka: ["use of funds", "loan use", "intended use"],
    category: "Application",
    short: "The stated reason you are borrowing money. Personal loan lenders ask about loan purpose during the application. While most lenders allow any legal purpose, some restrict certain uses (business expenses, gambling, down payments). Stating your purpose truthfully is required - misrepresentation is fraud.",
    long: "Loan purpose is the answer to 'why do you need this money?' on a personal loan application. The lender asks because certain uses carry different risk profiles and some uses may violate federal law or the lender's terms of service.\n\nCommonly allowed purposes:\n- Debt consolidation (most common stated purpose for personal loans)\n- Home improvement and repairs\n- Medical and dental expenses\n- Auto purchase or repair\n- Wedding expenses\n- Vacation\n- Moving expenses\n- Emergency expenses\n- Major purchases (appliances, electronics)\n\nPurposes that are often restricted:\n- Business use: Most personal lenders prohibit using personal loans for business purposes. Business lending has different regulatory requirements and risk profiles. If you need funds for a business, a small business loan or SBA product is appropriate.\n- Post-secondary education: Some lenders prohibit using personal loans to pay for tuition. This is related to the regulatory framework governing student loans.\n- Securities trading: Using a personal loan to buy stocks, options, or cryptocurrency on margin is prohibited by most lenders and violates securities law when combined with margin trading.\n- Down payments: FHA and conventional mortgage underwriting prohibit using personal loan proceeds as a down payment on the home being purchased with that mortgage.\n\nDoes the stated purpose affect the rate: Generally no - lenders price on credit score, DTI, and term, not on stated purpose. However, some lenders (notably LightStream) have purpose-specific rate tiers where home improvement borrowers get lower rates than general-purpose borrowers.\n\nVerification: Lenders typically take the stated purpose at face value and do not monitor how funds are actually used. However, misrepresentation on a loan application is fraud and can have legal consequences.",
    related: ["personal-loan", "underwriting", "origination-fee", "unsecured-loan"],
  },
  {
    slug: "wage-garnishment",
    name: "Wage Garnishment",
    aka: ["garnishment", "wage attachment", "earnings withholding"],
    category: "Regulation",
    short: "A court-ordered process where an employer withholds a portion of your paycheck and sends it directly to a creditor. Garnishment is a post-judgment remedy - the creditor must first sue you and win before garnishment can begin. Federal law limits garnishment to 25% of disposable weekly earnings.",
    long: "Wage garnishment is how an unsecured creditor (like a personal loan lender) ultimately collects a debt after a borrower stops paying and ignores the debt long enough for the creditor to sue.\n\nThe legal process required: (1) Creditor files a lawsuit in civil court. (2) The court schedules a hearing and serves the defendant. (3) If the defendant does not respond or loses, the court enters a judgment. (4) The creditor files a garnishment order with the court. (5) The court issues a writ of garnishment to the employer. (6) The employer begins withholding.\n\nFederal limits: The Consumer Credit Protection Act (CCPA) limits weekly garnishment to the lesser of: 25% of disposable earnings, or the amount by which disposable earnings exceed 30 times the federal minimum wage ($217.50/week at $7.25/hr federal minimum). Many states have lower caps - some states prohibit wage garnishment for consumer debts entirely.\n\nExempt debts: Federally, only certain debt types require no court order: federal student loan default (administrative wage garnishment), IRS tax levies, and child support orders. Personal loan garnishment always requires a court judgment first.\n\nProtection from termination: Federal law prohibits employers from firing an employee whose wages are garnished for a single debt. However, multiple garnishment orders do not have this protection in all states.\n\nBankruptcy protection: Filing for bankruptcy triggers an automatic stay that immediately stops wage garnishment (even for student loans, temporarily). Consult a bankruptcy attorney if wage garnishment is imminent.",
    related: ["default", "charge-off", "collections", "fdcpa"],
  },
  {
    slug: "collection-account",
    name: "Collection Account",
    aka: ["collections", "charged-off collection", "debt in collections"],
    category: "Credit",
    short: "A debt that has been assigned or sold to a collection agency after the original creditor wrote it off as a loss. Collection accounts appear as negative entries on your credit report for up to 7 years from the original delinquency date. They significantly reduce credit scores.",
    long: "A collection account is created when an original creditor (like a personal loan lender) gives up on collecting the debt directly and either assigns it to an in-house collection department or sells it to a third-party collection agency.\n\nTimeline: (Day 1) Payment missed. (Day 30-180) Original creditor calls and sends notices. (Day 120-180) Account charged off internally. (Month 4-9) Debt sold to collection agency at 5-20 cents on the dollar. (Month 4 onward) Collection agency reports a new collection account to credit bureaus.\n\nDual reporting problem: Both the original charged-off account AND the new collection account may appear on your credit report simultaneously. This creates two separate negative entries for the same debt - an issue consumer advocates have criticized as unfair.\n\nNew CFPB rule: As of 2025-2026, the CFPB has finalized rules prohibiting medical debt collection accounts from appearing on credit reports. Non-medical collection accounts remain reportable for up to 7 years.\n\nShould you pay a collection account: Paying a collection account stops the clock on legal collection attempts. However, the negative entry remains on your credit report for 7 years from the original delinquency date regardless of whether you pay. Ask the collector for a 'pay-for-delete' agreement (they agree to remove the tradeline in exchange for payment). Not all collectors will agree, but some do.\n\nNewest FICO models (FICO 10T) and VantageScore 4.0 score paid collections less severely than unpaid collections. However, many lenders still use older FICO models that penalize paid and unpaid collections nearly equally.",
    related: ["charge-off", "delinquency", "default", "credit-report", "fdcpa"],
  },
  {
    slug: "closing-costs",
    name: "Closing Costs",
    aka: ["loan closing fees", "settlement costs"],
    category: "Rates & terms",
    short: "Fees paid at or before the disbursement of a loan. For personal loans, the primary closing cost is the origination fee (1%-8% of loan amount), often deducted from the loan proceeds. Most online personal loans have no closing costs beyond the origination fee, though some lenders also charge application fees.",
    long: "Closing costs is a term more commonly associated with mortgage loans, where they can total 2%-5% of the purchase price. For personal loans, the concept is simpler: the fees are usually either origination fees deducted from proceeds or none at all.\n\nPersonal loan fee types:\n\nOrigination fee: Charged by many lenders (1%-8%), this is deducted from the loan amount at disbursement. On a $10,000 loan with a 5% origination fee, you receive $9,500 but owe $10,000. The fee is included in the APR calculation. Some lenders (LightStream, SoFi, Marcus) charge no origination fee.\n\nApplication fee: Relatively uncommon for online personal loans. Some credit unions charge $25-$50 as a processing fee. This fee is charged at application, not at disbursement.\n\nDocument processing fee: Occasionally charged by lenders for document review. Usually $10-$50.\n\nInsurance products: Some lenders offer (or formerly required) credit insurance, payment protection insurance, or GAP-style products. These are almost never required and add significant cost when included. Always decline unless you have specifically researched the product.\n\nNo-fee lenders: LightStream (Truist), SoFi, Marcus (Goldman Sachs), and Discover all market themselves as zero-fee personal loan lenders. They make their money on the interest rate alone. These lenders are worth comparing even if their advertised rates seem slightly higher, because the lack of origination fee reduces effective APR.",
    related: ["origination-fee", "annual-percentage-rate", "loan-proceeds", "personal-loan"],
  },
  {
    slug: "federal-funds-rate",
    name: "Federal Funds Rate",
    aka: ["fed funds rate", "policy rate", "overnight lending rate"],
    category: "Rates & terms",
    short: "The interest rate at which U.S. banks lend money to each other overnight. Set by the Federal Reserve's FOMC at each policy meeting (8 times per year). The fed funds rate is the foundation of U.S. interest rate policy and indirectly influences personal loan rates.",
    long: "The federal funds rate is the benchmark interest rate for the U.S. economy. When the Federal Open Market Committee (FOMC) raises or lowers the fed funds rate, it sets off a chain reaction across consumer lending markets.\n\nHow it reaches personal loan rates: The fed funds rate directly drives the Prime Rate (which is set by convention at 3 percentage points above the fed funds rate). The Prime Rate is used as the base for many variable-rate consumer products. Fixed-rate personal loans are more influenced by longer-term rate expectations embedded in Treasury yields, but the fed funds rate still sets the floor for short-term borrowing costs across the economy.\n\nPersonal loan rate environment: In a low-rate environment (fed funds rate near 0%), personal loan APRs historically run 7%-15% for prime borrowers. In a high-rate environment (fed funds rate at 5%+, as in 2023-2025), personal loan APRs for prime borrowers run 10%-20%. The spread above the policy rate reflects credit risk, operating costs, and profit margins for lenders.\n\n2024-2026 rate cycle: The Fed raised rates from near-zero in 2022 to a peak of 5.25%-5.50% in 2023, then began cutting rates in late 2024. As of mid-2026, the fed funds rate sits in the 3.75%-4.25% range (actual current rate depends on FOMC decisions after this guide's writing). Personal loan rates follow with a lag as lenders adjust pricing.\n\nFixed vs variable in a rate-cutting cycle: When rates are declining, variable-rate personal loans (tied to Prime Rate) can drop over time. Fixed rates lock in current rates. In a rate-cutting cycle, starting with a higher fixed rate and refinancing later is sometimes the optimal strategy.",
    related: ["prime-rate", "index-rate", "variable-rate", "annual-percentage-rate"],
  },
  {
    slug: "loan-forgiveness",
    name: "Loan Forgiveness",
    aka: ["debt cancellation", "loan discharge", "principal reduction"],
    category: "Repayment",
    short: "The cancellation of all or part of a borrower's remaining loan balance by the lender or a third party. Loan forgiveness is rare for private personal loans. It is more common for federal student loans (PSLF, IDR forgiveness) and certain government-backed programs during declared disasters.",
    long: "Loan forgiveness eliminates a borrower's obligation to repay some or all of a remaining loan balance. The mechanisms, eligibility, and tax treatment vary significantly by loan type.\n\nPrivate personal loans: Forgiveness is extremely rare. Private lenders have no regulatory obligation to forgive balances. The nearest equivalents are: (1) Debt settlement - negotiating with a lender or collector to pay less than the full balance (typically 40-60 cents on the dollar) on a defaulted debt. (2) Discharge in bankruptcy - Chapter 7 bankruptcy eliminates most unsecured personal loan obligations. (3) Statute of limitations - while not forgiveness, a debt becomes legally uncollectible (via court judgment) after the applicable state statute of limitations passes.\n\nFederal student loan forgiveness: More common. Public Service Loan Forgiveness (PSLF) forgives remaining federal student loan balances after 10 years of qualifying payments while employed in public service. Income-Driven Repayment (IDR) plans forgive remaining balances after 20-25 years of payments. Teacher Loan Forgiveness: up to $17,500 after 5 years of teaching in qualifying schools.\n\nDisaster-related personal loan assistance: After declared federal disasters, some lenders voluntarily offer temporary forbearance and, in rare cases, partial forgiveness of accrued interest. This is at lender discretion, not a right.\n\nTax implications of forgiven debt: Forgiven debt is generally taxable income under federal law. If a lender forgives $5,000 of your personal loan balance, the IRS considers it $5,000 of ordinary income and you receive a Form 1099-C. Exceptions include amounts discharged in bankruptcy (not taxable). Consult a tax professional when a significant amount of debt is forgiven.",
    related: ["debt-settlement", "default", "bankruptcy", "charge-off"],
  },
  {
    slug: "emergency-fund",
    name: "Emergency Fund",
    aka: ["rainy day fund", "liquid savings buffer", "financial cushion"],
    category: "Repayment",
    short: "A dedicated savings reserve covering 3-6 months of essential living expenses, held in a liquid account. An emergency fund is the foundation of financial resilience - it allows you to handle job loss, medical crises, or major repairs without borrowing at high interest rates.",
    long: "Financial planners universally recommend maintaining an emergency fund as the first priority before investing, paying off low-rate debt aggressively, or making other financial moves. The reasoning: a single unexpected expense or income disruption can cascade into high-rate debt, missed payments, and credit damage that takes years to repair.\n\nStandard sizing guidelines: The conventional recommendation is 3-6 months of essential monthly expenses. Essential expenses include rent/mortgage, utilities, food, insurance, and minimum debt payments. Discretionary spending is excluded. A household with $3,000/month in essential expenses needs $9,000-$18,000 in emergency savings.\n\nWho needs more: 6-12 months recommended for: self-employed or freelance income. Irregular income (commission-based, seasonal). Single-income households. Jobs in volatile industries (tech, media, finance during cycles). Health conditions that may require extended leave.\n\nWhere to keep it: High-yield savings accounts (currently 4%-5% APY at online banks in 2026) are the right vehicle. Not a checking account (too tempting to spend). Not the stock market (could decline when you need it most). Not a CD longer than 3 months (too illiquid). Online banks (Ally, Marcus, Discover Bank) routinely offer rates 4-10x higher than traditional bank savings accounts.\n\nRelationship to personal loans: A robust emergency fund is a direct substitute for emergency borrowing. At 15% APR personal loan vs 4.5% savings interest, the effective 'cost' of not having an emergency fund (relative to borrowing when crises occur) is approximately 10%-11% annually on the unbuilt portion. Building the fund first is almost always the financially correct choice.",
    related: ["personal-loan", "financial-hardship", "net-monthly-income", "payment-history"],
  },
  {
    slug: "cosigner-release",
    name: "Co-signer Release",
    aka: ["cosigner removal", "guarantor release"],
    category: "Rates & terms",
    short: "A lender provision that allows removing a co-signer from a loan after the primary borrower demonstrates sufficient creditworthiness - typically by making 12-24 consecutive on-time payments. Not all lenders offer this option.",
    long: "A co-signer release provision lets the primary borrower remove the co-signer's legal obligation from the loan once certain conditions are met. The co-signer's name is removed from the promissory note, ending their liability for the remaining balance.\n\nTypical eligibility requirements: Most lenders that offer co-signer release require (1) a minimum number of on-time payments (usually 12-24 consecutive months), (2) the primary borrower meeting the lender's standalone credit and income requirements at the time of the request, and (3) no current delinquency on the account.\n\nHow to request it: Submit a formal co-signer release application to the lender. The lender reviews the primary borrower's current credit score, DTI, and income as if underwriting a new loan. If the primary borrower qualifies alone, the co-signer is released. If not, the request is denied and the co-signer remains responsible.\n\nLenders that offer co-signer release for personal loans: This feature is more common on student loans and auto loans than personal loans. Sallie Mae and Earnest offer co-signer release on student loans. For personal loans, this feature is less standardized. Check your specific loan agreement for the co-signer release provision before signing.\n\nIf no co-signer release provision exists: The only way to remove a co-signer from a personal loan that lacks this provision is to refinance the loan in the primary borrower's name alone. The new loan pays off the original, and the co-signer is no longer on the obligation. This requires the primary borrower to qualify independently at current rates.\n\nImpact on co-signer until release: Until the release is granted, the loan appears on the co-signer's credit report. Every late payment affects the co-signer's credit score. The loan balance counts toward the co-signer's DTI if they apply for their own credit.",
    related: ["co-signer", "co-borrower", "refinance"],
  },
  {
    slug: "deferment",
    name: "Deferment",
    aka: ["payment deferral", "loan deferment"],
    category: "Repayment",
    short: "A temporary postponement of loan payments approved by the lender during a hardship period. Unlike forbearance (which typically still accrues interest during the pause), deferment terms vary - some personal loan deferments pause interest too, while most do not.",
    long: "Deferment allows a borrower to temporarily stop making loan payments without going into default. For personal loans, deferment is less standardized than for student loans - each lender has its own policies, terms, and eligibility criteria.\n\nDeferment vs forbearance on personal loans: The terms are often used interchangeably by personal loan lenders, but the technical distinction is: (1) Deferment - payments paused; may or may not accrue interest depending on the program. (2) Forbearance - payments paused or reduced; interest typically accrues and is added to the principal (capitalized).\n\nWhen personal loan deferment is available: Economic hardship or job loss. Medical emergency or disability. Natural disaster affecting ability to pay. Military deployment. Some lenders offer a 'skip-a-payment' option as a one-time benefit for borrowers in good standing.\n\nHow to request deferment: Contact the lender's hardship line - not the regular customer service number. Explain the circumstances. Provide documentation (termination letter, medical records, disaster declaration). Most lenders have an internal hardship program even if not publicly advertised.\n\nWhat happens during deferment: Payments are temporarily suspended (typically 1-3 months). Interest usually continues to accrue on the outstanding principal. Some lenders add the accrued interest to the loan balance at the end of the deferment period (capitalization). Your account is not reported delinquent to credit bureaus during an approved deferment.\n\nAfter deferment ends: Regular payments resume. The loan maturity date may be extended to account for the missed payments. Total interest paid over the life of the loan increases due to the additional accrual during deferment. Confirm the updated payoff date and total amount in writing.",
    related: ["forbearance", "financial-hardship", "default"],
  },
  {
    slug: "disbursement",
    name: "Disbursement",
    aka: ["loan payout", "funding", "loan proceeds release"],
    category: "Application",
    short: "The act of a lender releasing loan funds to the borrower after final approval and signing. For personal loans, disbursement is typically an ACH transfer to the borrower's bank account, completing in 1-3 business days.",
    long: "Disbursement is the final step in the lending process - the moment when approved loan funds are transferred to the borrower. Understanding disbursement timing helps borrowers plan for when money will actually be available.\n\nDisbursement methods: Direct-to-borrower ACH: Most common for personal loans. The lender initiates an ACH transfer to the bank account provided during the application. Funds arrive in 1-3 business days. Wire transfer: Some lenders offer same-day wire for a fee. Check: Traditional lenders and some credit unions still issue physical checks. Direct-to-creditor: For debt consolidation loans, some lenders offer to pay creditors directly rather than disbursing to the borrower.\n\nDisbursement timing variables: Business day processing - ACH transfers only process on business days. A Friday approval typically means Monday disbursement. Origination fee deduction - if the lender charges an origination fee (1%-8% of the loan amount), it is typically deducted from the disbursement. You receive the net amount. Verification holds - some lenders hold disbursement for a 3-day cooling-off period (right of rescission) under state law for certain loan types.\n\nTracking disbursement: After signing the loan agreement, the lender provides a disbursement confirmation with an expected date. You can also check the lender's online portal. Once the ACH is initiated, most banks show the pending deposit 1 business day before it clears.\n\nIf you do not receive funds: Contact the lender's support team with your loan reference number. Confirm the bank account details you provided are correct (routing number and account number errors are a common disbursement problem). Incorrect account information can delay or misdirect funds.",
    related: ["loan-proceeds", "origination-fee", "ach-transfer"],
  },
  {
    slug: "hardship-program",
    name: "Hardship Program",
    aka: ["financial hardship plan", "lender assistance program", "hardship deferment"],
    category: "Repayment",
    short: "A lender's internal program that temporarily modifies a borrower's payment terms during documented financial difficulty - such as job loss, illness, or divorce. Programs may include rate reduction, payment pause, or reduced minimum payments. Most lenders have these programs but do not widely advertise them.",
    long: "Most major personal loan lenders maintain internal hardship programs for borrowers experiencing genuine financial difficulty. These programs are designed to help lenders recover loan balances (even slowly) rather than push borrowers into default and write off the balance.\n\nCommon hardship program structures: Payment deferment - 1-3 months of skipped payments added to the end of the loan term. Rate reduction - temporary interest rate reduction (for example, from 22% to 12%) for 3-6 months. Reduced minimum payment - lower required monthly payment for a defined period. Extended repayment - adding months or years to the loan term to lower the required payment. In extreme cases: principal balance reduction (very rare for personal loans; more common in debt settlement after default).\n\nHow to access a hardship program: Do not wait until you have missed payments. Contact the lender's hardship or customer retention team before the first missed payment. Ask specifically for their 'hardship program' or 'financial hardship plan.' Be prepared to explain the hardship and provide documentation (termination letter, medical records, divorce filing).\n\nCredit reporting during a hardship program: If the program is formally approved before any missed payment, most lenders will not report the account as delinquent during the modified terms. Confirm this in writing before agreeing. If the account is already delinquent and the hardship program is negotiated after a missed payment, the prior late payment may already be reported.\n\nHardship programs vs debt settlement: A hardship program is offered by the lender while the loan is in good standing or early delinquency. Debt settlement is negotiated with original creditors or collectors after significant default. Hardship programs are a much less damaging option for credit health.",
    related: ["forbearance", "deferment", "financial-hardship", "default"],
  },
  {
    slug: "maturity-date",
    name: "Maturity Date",
    aka: ["loan maturity", "payoff date", "final payment date"],
    category: "Rates & terms",
    short: "The date on which a loan is scheduled to be fully repaid. On a personal loan, this is the date of the final regular installment payment. Paying off the loan early moves the effective maturity date forward.",
    long: "The maturity date is specified in the loan agreement at origination. It represents the end of the loan term - when the last scheduled payment is due and the principal balance reaches zero (assuming all payments were made on schedule).\n\nHow to calculate the maturity date: Take the loan origination date and add the loan term. A 36-month (3-year) personal loan originated on July 1, 2026 has a maturity date of July 1, 2029. Some lenders use the first payment date rather than the origination date as the starting point, which can shift the maturity date by 30 days.\n\nWhat happens at maturity: If you have made all required payments, the loan is paid off and the lender sends a payoff confirmation. No further payments are due. The account status on your credit report changes to 'paid in full' or 'closed.'\n\nEarly payoff vs maturity date: Paying off a loan early (before the maturity date) eliminates future interest costs but does not affect your credit report negatively. The account is marked 'paid in full' regardless of whether you paid early or at maturity. Some loans have prepayment penalties that apply if you pay off before the maturity date - check your loan agreement.\n\nMaturity date vs balloon payment: Most personal loans are fully amortizing - the maturity date coincides with the final regular payment and the balance reaches zero. A balloon loan requires a large lump-sum payment at maturity beyond the regular payments. Personal loans are almost never structured as balloon loans.\n\nExtended maturity due to deferment: If you use a hardship deferral or payment pause, the maturity date may be extended by the number of months skipped. Confirm the revised maturity date with your lender after any payment accommodation.",
    related: ["loan-term", "amortization", "prepayment-penalty", "balloon-payment"],
  },
  {
    slug: "risk-based-pricing",
    name: "Risk-Based Pricing",
    aka: ["credit-risk pricing", "risk-tiered rates"],
    category: "Rates & terms",
    short: "The practice of setting interest rates based on the borrower's assessed credit risk - lower-risk borrowers (higher credit scores, lower DTI) receive lower interest rates; higher-risk borrowers receive higher rates. All major personal loan lenders use risk-based pricing.",
    long: "Risk-based pricing is the foundation of modern consumer lending. Rather than charging all borrowers the same rate, lenders use credit profiles to set individual rates that reflect the probability of default.\n\nFactors that drive personal loan pricing: Credit score (primary factor) - a 750-score borrower typically receives an APR 10-15 percentage points lower than a 600-score borrower from the same lender. Debt-to-income ratio - high DTI suggests the borrower may struggle to handle additional payments. Income and employment stability - steady W-2 income is priced better than irregular freelance income. Loan amount - very large or very small loans may carry different rates. Loan term - longer terms typically carry higher rates due to greater uncertainty over time. Relationship with lender - existing customers may receive discounted rates.\n\nWhy risk-based pricing exists: Lenders need their loan portfolio to be collectively profitable. If 3% of borrowers default, the other 97% must pay enough interest to cover those losses plus administrative costs plus profit. Higher-risk borrowers cost more to serve (higher default rates, higher collection costs) so they are charged more.\n\nFCRA requirements: The Fair Credit Reporting Act requires lenders to send an 'adverse action notice' if they deny credit or offer less favorable terms than the best available because of information in your credit report. This notice must specify which credit bureau was used and your right to a free credit report.\n\nHow to improve your pricing tier: Reduce outstanding revolving debt before applying (lower utilization improves your score quickly). Pay off derogatory accounts if possible. Wait 6-12 months after a negative credit event before applying. Apply with a lender where you have an existing relationship.",
    related: ["apr", "credit-score", "debt-to-income-ratio", "hard-inquiry", "adverse-action-notice"],
  },
  {
    slug: "loan-modification",
    name: "Loan Modification",
    aka: ["loan restructuring", "contract modification"],
    category: "Repayment",
    short: "A permanent or long-term change to the original terms of a loan agreement - such as a lower interest rate, extended repayment period, or reduction in principal. For personal loans, modifications are rare and typically occur after default or severe hardship when the alternative is charge-off.",
    long: "A loan modification is a formal change to the existing loan contract, agreed to by both the borrower and lender. Unlike a hardship program (which is temporary), a modification permanently alters the loan terms going forward.\n\nWhen personal loan modifications happen: Modifications are uncommon in personal lending compared to mortgage lending (where home loan modifications became widespread after 2008). They typically occur when: (1) the borrower is in extended default with no ability to resume regular payments; (2) the lender prefers to recover a modified amount over time rather than charge off the full balance; (3) a non-profit credit counseling agency negotiates modified terms on the borrower's behalf as part of a debt management plan.\n\nTypes of modifications: Interest rate reduction - lowering the rate to reduce monthly payments (for example, from 24% to 10%). Term extension - adding months or years to reduce the required payment. Principal reduction - reducing the outstanding balance (very rare; more common in settlement after default). Capitalization of arrears - adding past-due amounts to the principal and restarting a fresh payment schedule.\n\nCredit reporting impact: A loan modification is typically noted on the credit report. The account may be reported as 'modified' or 'modified under a debt management plan.' The notation affects your credit but is less damaging than a charge-off or collection. If the modification was preceded by multiple late payments, those remain on the report.\n\nDebt management plans: Non-profit credit counseling agencies (like those accredited by NFCC) negotiate with creditors to establish debt management plans, which include modified interest rates on enrolled accounts. The borrower makes one monthly payment to the agency, which distributes it to creditors. Most creditors waive late fees and reduce rates for DMP participants.",
    related: ["hardship-program", "forbearance", "charge-off", "debt-settlement"],
  },
  {
    slug: "negative-amortization",
    name: "Negative Amortization",
    aka: ["deferred interest capitalization", "NegAm"],
    category: "Rates & terms",
    short: "A loan structure where the minimum required payment is less than the interest accruing each month, causing the principal balance to grow over time instead of shrinking. Negative amortization does not occur with standard fixed-rate personal loans, which are fully amortizing by definition.",
    long: "In a standard personal loan, each monthly payment covers all interest due plus some principal, so the balance declines every month. With negative amortization, if the payment is set below the interest cost, the unpaid interest is added to the principal balance - the borrower owes more than they started with even after making payments.\n\nWhere negative amortization appears: Standard personal loans: never. Personal loans are fully amortizing - each payment is calculated to pay off the loan by the maturity date. Negative amortization does not occur in standard personal loan products. Option-ARM mortgages - the classic example. Borrowers could choose a minimum payment that did not cover interest, causing balances to grow. Student loans in income-driven repayment - when the required income-based payment is less than the accruing interest, the balance grows (though federal law now caps this in some IDR plans). Credit cards - the minimum payment on a high-rate card often covers only a fraction of the interest, so balances grow if only the minimum is paid.\n\nWhy it matters for personal loan borrowers: If a lender offers a 'temporary reduced payment' option (as part of a hardship program), check whether the interest that is not paid is being added to the principal. This is negative amortization in practice, even if not labeled as such. Always confirm the post-hardship payoff balance is the same or lower than before the program started.\n\nDeferred interest on 0% promotional products: '0% APR for 18 months' financing on purchases is not negative amortization, but deferred interest products (common in retail financing) charge all accrued interest retroactively if not paid in full by the end of the promotional period - a related but distinct risk.",
    related: ["amortization", "forbearance", "balloon-payment", "deferment"],
  },
  {
    slug: "guarantor",
    name: "Guarantor",
    aka: ["loan guarantor", "guarantee"],
    category: "Lender types",
    short: "A person or entity that agrees to repay a loan if the primary borrower defaults. Similar to a co-signer but with a key legal difference: a guarantor's liability is typically secondary (they are called upon only after the lender exhausts collection from the borrower), while a co-signer is jointly and immediately liable.",
    long: "In consumer lending, 'guarantor' and 'co-signer' are often used interchangeably, but the technical legal distinction matters in some loan contexts.\n\nThe legal distinction: Co-signer - equally and immediately liable for the debt from day one. If the borrower misses a payment, the lender can pursue the co-signer without first trying to collect from the borrower. Guarantor - secondary liability. The lender must typically exhaust collection efforts against the primary borrower before pursuing the guarantor. This secondary nature makes it slightly less risky to be a guarantor than a co-signer in theory.\n\nIn practice for personal loans: Most U.S. personal loan lenders use 'co-signer' terminology and structure (primary liability) rather than true guarantees. A true guarantor relationship with secondary liability is more common in commercial lending, SBA loans, and international consumer lending.\n\nImpact on the guarantor's finances: Whether called a guarantor or co-signer, the obligation appears on the guarantor's credit report. The loan balance counts toward the guarantor's DTI if they apply for other credit. Any missed payment is reported on the guarantor's credit report. The guarantor can be sued for the balance if the primary borrower defaults.\n\nSBA loan guarantees: In small business lending, the SBA typically requires the business owner to personally guarantee SBA loans. This means the owner's personal assets are at risk if the business defaults - a true personal guarantee.\n\nBefore agreeing to be a guarantor or co-signer: Understand that you are accepting full financial responsibility for someone else's debt. Only agree if you can absorb the payments without financial hardship. Have an honest conversation about the borrower's plan and ability to repay.",
    related: ["co-signer", "co-borrower", "default", "co-applicant"],
  },
  {
    slug: "payoff-amount",
    name: "Payoff Amount",
    aka: ["payoff balance", "payoff quote", "settlement amount"],
    category: "Rates & terms",
    short: "The exact amount required to fully satisfy a loan on a specific date. The payoff amount differs from the current account balance because it includes accrued interest to the payoff date and may include prepayment fees. Request a payoff quote from your lender before sending a final payment.",
    long: "The payoff amount is a time-sensitive figure calculated by the lender. Because interest accrues daily on personal loans, the payoff amount changes every day.\n\nComponents of a payoff amount: Outstanding principal - the remaining loan balance after all previous payments. Accrued interest - interest accumulated since the last payment date through the payoff date. Prepayment penalty (if applicable) - a fee charged by some lenders for paying off early (less common in personal loans than mortgages). Outstanding fees - any unpaid late fees, returned payment fees, or other charges.\n\nHow to request a payoff quote: Log into the lender's online portal (most provide a payoff calculator). Call the lender's loan servicing line and request a 'payoff quote' or 'payoff statement' for a specific date. The payoff quote typically remains valid for 10-30 days.\n\nWhy exact payoff matters: If you send the current account balance rather than the payoff quote, you will underpay because of interest accrued since that balance was calculated. The lender will apply your payment, calculate the remaining balance plus any additional accrued interest, and send you a final bill for the difference. This small underpayment can prevent your account from closing.\n\nCertifying payoff: After sending the payoff amount, request written confirmation from the lender that the account is paid in full and closed. This letter is important documentation for: disputing any future collection attempts on the account. Confirming the credit reporting update. Proof of payoff if the debt is ever sold.\n\nPayoff via mail: Some lenders require final payoff payments to be sent via certified mail or wire transfer rather than ACH to ensure cleared funds. Confirm the lender's payoff process before sending a large final payment.",
    related: ["prepayment-penalty", "principal", "origination-fee", "maturity-date"],
  },
  {
    slug: "acceleration-clause",
    name: "Acceleration Clause",
    aka: ["demand clause", "call clause"],
    category: "Regulation",
    short: "A loan provision that allows the lender to demand full immediate repayment of the outstanding balance if the borrower defaults, misses payments, or violates specific loan terms. Most personal loans contain an acceleration clause that triggers after 2-3 consecutive missed payments.",
    long: "An acceleration clause gives the lender the right to 'accelerate' the loan - meaning they can declare the entire remaining balance due immediately rather than waiting for the scheduled payment dates. This is a standard provision in nearly all consumer loan agreements and is typically buried in the loan terms.\n\nWhen acceleration is triggered: Missing 2-3 consecutive payments (the exact threshold is in your loan agreement). Filing for bankruptcy (which automatically triggers acceleration on most loans). Transferring the property or collateral without lender consent (common in secured loans). Material misrepresentation on the loan application discovered after funding. Failure to maintain required insurance on secured collateral.\n\nWhat happens after acceleration: The lender sends a formal notice of acceleration (sometimes called a 'demand letter') stating that the full balance is immediately due. You have a short period (typically 30 days) to cure the default (pay all past-due amounts) or contest the acceleration. If you do not cure or respond, the lender proceeds to collections, legal action, or repossession (for secured loans).\n\nRight to cure: Many state laws and some loan agreements include a 'right to cure' provision - the borrower has the right to cure the default (catch up on missed payments and fees) within a specified period after the acceleration notice, which stops the acceleration and reinstates the original payment schedule. Check your state's consumer protection laws for right-to-cure provisions.\n\nNegotiating after acceleration: If you receive an acceleration notice, contact the lender's loss mitigation department immediately. Lenders generally prefer to work out a payment plan over pursuing collection - acceleration is a legal lever to motivate response, not always the first step toward a lawsuit.",
    related: ["default", "right-to-cure", "delinquency", "forbearance"],
  },
  {
    slug: "allotment-loan",
    name: "Allotment Loan",
    aka: ["payroll deduction loan", "salary allotment loan"],
    category: "Application",
    short: "A personal loan repaid through automatic payroll deduction - the payment is taken from your paycheck before you receive it. Common among federal government employees and military members. The automatic repayment method makes these loans easier to qualify for and often results in lower interest rates.",
    long: "An allotment is a portion of a paycheck that is automatically directed to a specific destination (like a savings account or a loan payment) before the employee receives the remainder. Allotment loans leverage this mechanism to guarantee repayment.\n\nHow allotment loans work: You apply for the loan through a participating lender (often a credit union or specialty lender). If approved, you authorize a payroll allotment with your employer or agency. Each pay period, the loan payment is automatically deducted from your gross pay before your net check is calculated. Because payment is guaranteed and automatic, default risk is very low, often resulting in lower rates and easier approval.\n\nWho offers allotment loans: Navy Federal Credit Union and Pentagon Federal Credit Union offer allotment-style repayment to military members. Kashable partners with federal agencies and some large employers to offer workplace loans repaid via payroll allotment. Many state and local government credit unions offer similar products for public employees. AAFES (Army and Air Force Exchange Service) offers employee loan programs.\n\nBenefits over standard personal loans: Lower default risk means some lenders approve applicants with lower credit scores. Automatic repayment eliminates the risk of forgetting to pay. No late fees (payment is automatic). Some lenders offer lower rates (12%-24% vs 20%-36% for comparable personal loans).\n\nRisks: If your pay period amount is sometimes lower than the allotment (overtime fluctuations, leave without pay), your paycheck may be insufficient. If employment ends, the allotment stops and the full balance often becomes immediately due. Read the employment-separation clause carefully before borrowing.",
    related: ["payoff-amount", "verification-of-employment", "loan-servicer"],
  },
  {
    slug: "creditworthiness",
    name: "Creditworthiness",
    aka: ["credit profile", "credit quality"],
    category: "Credit",
    short: "A lender's overall assessment of how likely a borrower is to repay a debt on time and in full. Creditworthiness is evaluated through the '5 Cs': credit history (score and report), capacity (income vs debt), capital (assets), conditions (loan purpose and market), and collateral (for secured loans).",
    long: "Creditworthiness is not a single number - it is a holistic judgment about repayment reliability. While credit score is the most visible component, lenders use a broader framework to evaluate borrowers, particularly for larger loan amounts or borderline credit profiles.\n\nThe 5 Cs of creditworthiness: (1) Character: your credit history, payment record, and length of relationship with the lender. FICO score is the primary proxy for character. (2) Capacity: your ability to repay based on current income, existing debt obligations, and employment stability. Measured by DTI ratio. (3) Capital: assets you own that could cover the loan if income stops. Savings, retirement accounts, real estate equity. (4) Conditions: the purpose of the loan, the economic environment, and lender-specific policies. A loan for debt consolidation may be viewed more favorably than one for a volatile investment. (5) Collateral: for secured loans, the value of the asset pledged. Personal loans are unsecured, so collateral is not applicable - but it can be used to strengthen an application by offering to secure the loan.\n\nWhy creditworthiness matters beyond the score: Two borrowers with identical 680 credit scores can receive very different loan terms if one has $5,000 in monthly income with $500/month in debt (10% DTI) and the other has $3,000/month income with $1,400/month in debt (47% DTI). The first has high capacity; the second has low capacity. Lenders weigh all five Cs together.\n\nImproving creditworthiness: Short-term (0-90 days): reduce credit card balances (improves utilization), avoid new hard inquiries, verify credit report accuracy. Medium-term (3-12 months): establish or extend positive payment history, pay down installment loan balances, avoid closing old accounts. Long-term (1-3 years): build savings and assets (capital), maintain stable employment, reduce total debt.",
    related: ["credit-score", "debt-to-income-ratio", "hard-inquiry", "underwriting"],
  },
  {
    slug: "debt-buyer",
    name: "Debt Buyer",
    aka: ["debt purchaser", "portfolio buyer", "charged-off debt buyer"],
    category: "Regulation",
    short: "A company that purchases portfolios of charged-off or delinquent debts from original creditors (banks, credit card companies, personal loan lenders) for pennies on the dollar, then attempts to collect the full balance from borrowers. Most collection accounts in the U.S. are eventually sold to debt buyers.",
    long: "When a personal loan lender charges off an account after 120-180 days of non-payment, they have two options: keep the debt in their internal collections department or sell it to a third-party debt buyer. Most charged-off personal loan balances are sold.\n\nHow debt buying works: The original creditor sells a portfolio of charged-off accounts to a debt buyer for 5-25 cents per dollar of face value (the price depends on how old the debt is and how collectible the creditor believes it is). The debt buyer now owns the debt legally. They attempt to collect the full balance from borrowers, keeping everything they recover above their purchase price.\n\nMultiple sales: A debt buyer that cannot collect may re-sell the debt to another buyer at an even lower price. The same debt can be sold multiple times over years, sometimes causing confusion about who the current owner is. Under the FDCPA, every debt buyer or collector must provide debt validation upon request.\n\nYour rights when dealing with a debt buyer: (1) Request debt validation within 30 days of first contact - the buyer must prove they own the debt and the amount is correct. (2) The debt buyer is bound by the FDCPA and cannot harass, threaten, or contact you at inconvenient times. (3) The statute of limitations on the debt does not reset when the debt is sold - it continues from the date of last activity on the original account. (4) You can send a written cease-communication letter requiring the buyer to stop contacting you (though this does not erase the debt).\n\nSettlement opportunity: Because debt buyers purchased the debt at a discount, they often settle for 25-60 cents on the dollar rather than pursue litigation. Settlement is most effective when: the debt is older, the statute of limitations is approaching, or you have a documented hardship.",
    related: ["charge-off", "collection-agency", "fdcpa", "debt-validation-letter", "statute-of-limitations-debt"],
  },
  {
    slug: "fully-amortizing",
    name: "Fully Amortizing Loan",
    aka: ["fully amortized", "self-liquidating loan"],
    category: "Rates & terms",
    short: "A loan in which the scheduled monthly payments are sufficient to pay off the entire principal plus interest by the maturity date. All standard personal loans are fully amortizing - each payment reduces the balance so that the final payment brings it to exactly zero.",
    long: "Amortization refers to the systematic repayment of a loan through regular installments. A fully amortizing loan is one where the payment schedule is designed so the loan is completely paid off by the last payment - no balloon payment, no residual balance.\n\nHow it works mathematically: At origination, the lender calculates a fixed monthly payment using the loan amount, interest rate, and term. This payment is set so that the cumulative effect of all payments (principal + interest over the full term) exactly equals the total obligation. In early months, most of the payment is interest (balance is high, so interest accrues faster). In later months, most is principal (balance is low). The split shifts gradually each month.\n\nContrast with non-amortizing structures: Interest-only loan: monthly payment covers only interest; no principal is paid each month; full principal is due at maturity as a balloon payment. Negative amortization loan: monthly payment is less than interest due; unpaid interest is added to the balance; balance grows over time. These structures are extremely rare in personal lending but common in some mortgage products.\n\nWhy fully amortizing matters for personal loan borrowers: Predictability: you know exactly when the loan will be paid off and how much total interest you will pay at origination. No surprises: unlike credit cards or lines of credit, there is no minimum payment trap where a low payment barely covers interest. Automatic payoff: as long as you make all scheduled payments, the loan is extinguished at the maturity date.\n\nMaking extra payments on a fully amortizing loan: Extra principal payments reduce the remaining balance, which reduces future interest accrual. This does not change your required monthly payment (unless you refinance or the lender explicitly offers a re-amortization), but it means you pay off the loan earlier than the original maturity date and save total interest.",
    related: ["amortization", "balloon-payment", "maturity-date", "prepayment-penalty"],
  },
  {
    slug: "judgment-lien",
    name: "Judgment Lien",
    aka: ["court judgment", "money judgment", "civil judgment"],
    category: "Regulation",
    short: "A court order establishing that a borrower legally owes a debt to a creditor, which can be enforced by wage garnishment, bank account levy, or a lien on real property. Creditors sue borrowers to obtain a judgment when collection efforts fail. A judgment lien can appear in property records and complicate real estate transactions.",
    long: "A judgment lien results from a lawsuit that a creditor (or debt buyer) wins against a borrower. The lien represents a legal claim against the borrower's assets and formally establishes the debt in the court record.\n\nThe lawsuit process: After a personal loan defaults and collection efforts fail, the original creditor or debt buyer can file a civil lawsuit in the applicable state court. The borrower is served with a summons. If the borrower does not respond (most do not - over 70% of collection lawsuits result in default judgments), the judge enters a judgment for the creditor. If contested, the court holds a hearing.\n\nEnforcement of a judgment: Wage garnishment: the creditor can garnish up to 25% of disposable earnings (federal law caps this; some states are lower). Bank account levy: funds in checking or savings accounts can be seized up to the judgment amount. Property lien: in most states, a judgment can be recorded as a lien against real property, which must be satisfied before the property can be sold or refinanced. Vehicle levy: some states allow creditors to seize and sell non-exempt vehicles.\n\nExemptions: Federal law and state law protect certain assets from judgment enforcement. All states exempt a portion of wages from garnishment. Social Security and SSI benefits are fully exempt from civil creditor garnishment (though not from tax or child support). Many states have a homestead exemption protecting equity in a primary residence. IRA and 401k funds are generally protected.\n\nStatute of limitations on judgments: A judgment itself has a life (typically 10-20 years, depending on state), after which it expires and is no longer enforceable without renewal. Creditors can renew most judgments for additional terms. Judgments appear on credit reports for 7 years from the filing date.",
    related: ["wage-garnishment", "default", "debt-buyer", "statute-of-limitations-debt"],
  },
  {
    slug: "open-end-credit",
    name: "Open-End Credit",
    aka: ["revolving credit", "open credit", "revolving line"],
    category: "Rates & terms",
    short: "A type of credit with a maximum limit that can be borrowed, repaid, and re-borrowed repeatedly over time. Credit cards and personal lines of credit are examples of open-end credit. Contrasts with closed-end credit (installment loans like personal loans), where you borrow a fixed amount and repay it on a set schedule.",
    long: "Open-end credit gives borrowers ongoing access to funds up to a maximum credit limit. The borrower controls how much to borrow (up to the limit) and when to repay. Repayments restore available credit, which can be re-used.\n\nExamples of open-end credit: Credit cards (the most common form). Personal lines of credit (PLOCs). Home equity lines of credit (HELOCs). Business lines of credit. Overdraft protection lines.\n\nKey characteristics: Revolving availability: borrow, repay, borrow again - the cycle can repeat indefinitely within the limit. Minimum payment structure: most open-end products have a minimum required payment (often 1%-3% of the balance or a flat minimum). Paying only the minimum allows interest to accumulate on the remaining balance. Variable credit limit: lenders can increase or decrease the credit limit based on payment history and creditworthiness review. Variable interest rates: most open-end credit (except fixed-rate PLOCs) carries a variable APR tied to the prime rate.\n\nContrast with closed-end credit (personal loans): A personal loan is closed-end credit - you receive a fixed lump sum, repay it over a fixed term with fixed payments, and cannot re-borrow when the balance declines. Once paid off, the loan is closed. To access more funds, you must apply for a new loan.\n\nImpact on credit score: Open-end credit contributes to credit utilization ratio (amounts owed relative to credit limits), which is 30% of the FICO score. High utilization on open-end accounts hurts the score significantly. Closed-end installment loans do not have a utilization ratio - their balance is simply a debt obligation, not a ratio against a limit.",
    related: ["revolving-credit", "personal-line-of-credit", "credit-limit", "credit-utilization"],
  },
  {
    slug: "thin-file",
    name: "Thin File",
    aka: ["thin credit file", "sparse credit history", "limited credit history"],
    category: "Credit",
    short: "A credit profile with too few accounts or too short a history for credit bureaus to generate a reliable credit score. Approximately 26 million Americans are 'credit invisible' (no file) or have a thin file that results in an unscorable profile. Thin files are common among young adults, recent immigrants, and people who primarily use cash.",
    long: "A thin file typically means fewer than 5 credit accounts or a credit history shorter than 6 months. With insufficient data, the FICO and VantageScore models cannot reliably score the borrower, resulting in 'NP' (no profile) or 'NS' (no score) status.\n\nWho has thin files: Young adults (18-25) who are just entering the credit system. Recent immigrants with no U.S. credit history (even with strong credit in their home country). People who have avoided all debt and credit products intentionally. Former bankrupt borrowers whose discharged accounts have fallen off the credit report (after 7-10 years). Widows and widowers who had all accounts solely in their late spouse's name.\n\nThe thin file paradox: To build credit, you need credit. But to get credit, you need a credit history. Several products break this cycle: Secured credit card: requires a security deposit (which becomes the credit limit). Building 6-12 months of on-time payment history establishes a scorable file. Credit-builder loan: a savings-linked installment loan where payments are reported to bureaus before you access the funds. Authorized user status: being added to someone else's credit card account can transfer some of their history to your report. Experian Boost and UltraFICO: allow non-traditional payment data (utility bills, streaming services, bank account cash flow) to supplement thin credit files.\n\nDifference from bad credit: A thin file borrower may have no negative marks - simply no history. This is distinct from someone with a low score due to late payments or charge-offs. Thin-file borrowers can often build a solid credit profile in 12-18 months with disciplined use of one or two starter products.",
    related: ["credit-invisible", "credit-builder-loan", "secured-loan", "vantagescore"],
  },
  {
    slug: "cash-out-refinance",
    name: "Cash-Out Refinance",
    aka: ["cash-out refi", "cash-out refinancing"],
    category: "Rates & terms",
    short: "Refinancing a loan for more than you currently owe, with the difference paid to you in cash. Most commonly applied to mortgages (where you borrow against home equity), but the concept also applies to personal loans when you refinance for a larger amount than the outstanding balance to access additional funds.",
    long: "In a cash-out refinance, you replace an existing loan with a new, larger loan. The new loan pays off the old balance, and you receive the difference between the new loan amount and the payoff amount in cash.\n\nMortgage cash-out refinance (the most common form): A homeowner with a $150,000 mortgage and a home worth $300,000 refinances into a $200,000 mortgage. After paying off the $150,000 balance, they receive $50,000 cash (minus closing costs). The new mortgage may have a different rate, term, and monthly payment. This allows homeowners to tap home equity without a second mortgage or HELOC.\n\nPersonal loan cash-out refinance: If you have an existing personal loan with a $5,000 balance and you need an additional $3,000, you could refinance into a new $8,000 personal loan. The new loan pays off the $5,000 balance, and you receive $3,000 in cash. The new loan may have a different rate (better or worse depending on your current credit vs when you originally borrowed) and a fresh term.\n\nWhen a personal loan cash-out refi makes sense: Your credit score has improved significantly since the original loan (rate will be better). You have a legitimate need for additional funds but prefer one payment vs two loans. The new rate on the larger amount is lower than taking a separate second personal loan.\n\nRisks: You extend the repayment timeline on the amount you already owed, potentially paying more total interest on the original balance. If the rate is higher than your original loan (credit has worsened), you are refinancing at a loss on the existing debt. Consider the total interest cost (original balance at original rate vs same balance at new rate) before proceeding.",
    related: ["refinance", "heloc", "home-equity-loan", "loan-term"],
  },
  {
    slug: "rate-cap",
    name: "Rate Cap",
    aka: ["interest rate cap", "APR cap"],
    category: "Rates & terms",
    short: "A contractual ceiling on how high an interest rate can rise over the life of a variable-rate loan. Rate caps protect borrowers from extreme interest rate increases. Some states also impose statutory rate caps on consumer loans - for example, many states cap personal loan APRs at 36%.",
    long: "Rate caps exist in two forms: contractual caps embedded in loan agreements (for variable-rate loans) and statutory caps imposed by state law on all consumer loans.\n\nContractual rate caps on variable-rate personal loans: Variable-rate personal loans (uncommon but available) have rates that can change as the index rate changes. A rate cap limits how high the rate can go. Periodic cap: limits the rate change per adjustment period (e.g., rate cannot rise more than 2% per year). Lifetime cap: limits the total rate change over the life of the loan (e.g., cannot exceed origination rate + 5%). These caps provide predictability within the variable structure.\n\nStatutory rate caps on consumer loans: Many states cap the maximum interest rate or APR that lenders can charge on personal loans. Interest rate limits by state range from 18% (Arkansas) to no statutory cap (Delaware, Wyoming). The Military Lending Act caps APR at 36% for active-duty military members and their dependents across all consumer credit products. Some fintech lenders based in states without rate caps (Delaware, Utah) used to issue loans at very high rates to residents of capped states through 'rent-a-bank' arrangements - federal courts and regulators have significantly curtailed this practice.\n\nConsumer Financial Protection Bureau (CFPB) and rate caps: The CFPB does not set a federal rate cap for non-military personal loans. Proposals for a 36% federal rate cap have been introduced in Congress but not enacted as of 2026. The existing federal cap under MLA (36% MAPR for military) is the closest to a federal standard.\n\nPractical significance for borrowers: In states with rate caps, if a lender offers you a rate above the statutory maximum, the excess interest is unenforceable. Keep track of your state's rate cap, especially for online lenders who may not always comply with applicable state law.",
    related: ["variable-rate", "apr", "mla", "mapr", "fixed-rate"],
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
