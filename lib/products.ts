export type ProductSlug = "personal" | "bad-credit" | "emergency";

export const products: Record<ProductSlug, {
  slug: ProductSlug;
  h1: string;
  title: string;
  description: string;
  amountMin: number;
  amountMax: number;
  termMin: number;
  termMax: number;
  aprMin: number;
  aprMax: number;
  intro: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
}> = {
  personal: {
    slug: "personal",
    h1: "Personal Loans up to $50,000",
    title: "Personal Loans Online 2026: $1,000 to $50,000, 5.99-35.99% APR",
    description:
      "Compare personal loan offers from $1,000 to $50,000. Fixed APRs, terms up to 72 months, soft credit check. Get matched in 2 minutes.",
    amountMin: 1000,
    amountMax: 50000,
    termMin: 12,
    termMax: 72,
    aprMin: 5.99,
    aprMax: 35.99,
    intro:
      "A personal loan is a lump-sum installment loan you repay in fixed monthly payments. Use the funds for almost any purpose: consolidate debt, fund a major purchase, cover medical bills, or pay for a wedding. Our network includes lenders that work with a wide range of credit profiles.",
    bullets: [
      "Loan amounts from $1,000 to $50,000",
      "Fixed APRs typically 5.99% to 35.99%",
      "Repayment terms from 12 to 72 months",
      "Soft credit check, no impact to apply",
      "Funds as fast as the next business day",
    ],
    faqs: [
      { q: "What can I use a personal loan for?", a: "Debt consolidation, home improvement, medical bills, weddings, moving, and most other personal expenses. Some lenders restrict use for post-secondary education, gambling, or illegal activities." },
      { q: "What APR will I get?", a: "Your APR depends on your credit score, income, debt-to-income ratio, loan amount, term, and the lender. The strongest applicants see APRs in the single digits." },
      { q: "Is there a prepayment penalty?", a: "Most lenders in our network do not charge prepayment penalties, but always confirm in your loan agreement." },
    ],
  },
  "bad-credit": {
    slug: "bad-credit",
    h1: "Bad Credit Loans",
    title: "Bad Credit Personal Loans 2026: $500 to $10,000, Soft Check First",
    description:
      "Personal loans for bad credit from $500 to $10,000. Lenders in our network consider FICO scores below 600. Apply with a soft credit check.",
    amountMin: 500,
    amountMax: 10000,
    termMin: 6,
    termMax: 60,
    aprMin: 19.99,
    aprMax: 35.99,
    intro:
      "A bad credit loan is a personal loan offered to borrowers with FICO scores below 600. Lenders that specialize in this market consider factors beyond credit score, including income, employment, and bank-account history, when evaluating your application.",
    bullets: [
      "Loan amounts from $500 to $10,000",
      "FICO scores below 600 considered",
      "APRs typically 19.99% to 35.99%",
      "Decision in minutes, funding in as little as 24 hours",
      "Soft inquiry only, no impact to apply",
    ],
    faqs: [
      { q: "What credit score do I need?", a: "Some lenders in our network will consider scores as low as 500, though approval is not guaranteed. The higher your score and income, the better your odds and terms." },
      { q: "Are bad credit loans more expensive?", a: "Yes. Because the lender takes on more risk, APRs are typically higher. Compare offers carefully and only borrow what you can repay." },
      { q: "Will repayment improve my credit?", a: "Most lenders report to one or more credit bureaus. Making on-time payments can help rebuild your credit over time." },
    ],
  },
  emergency: {
    slug: "emergency",
    h1: "Emergency Loans",
    title: "Emergency Loans Online 2026: $300 to $5,000, Funds Next Day",
    description:
      "Emergency loans from $300 to $5,000 with funding as fast as the next business day. Apply in 2 minutes with a soft credit check.",
    amountMin: 300,
    amountMax: 5000,
    termMin: 3,
    termMax: 36,
    aprMin: 14.99,
    aprMax: 35.99,
    intro:
      "An emergency loan is a short-term personal loan designed for unexpected expenses such as a medical bill, car repair, or urgent home repair. Lenders in our network prioritize fast decisions and same-day or next-day funding.",
    bullets: [
      "Loan amounts from $300 to $5,000",
      "Funding as fast as the next business day",
      "Decision typically in minutes",
      "All credit profiles considered",
      "Soft credit check to start",
    ],
    faqs: [
      { q: "How fast will I get the money?", a: "After you accept an offer and e-sign, funds are typically deposited via ACH the next business day. Some lenders offer same-day funding for an additional fee." },
      { q: "Will my credit be checked for an emergency loan?", a: "Yes. All lenders in our network perform some form of credit review. The initial inquiry is a soft pull that does not affect your score; a hard pull only happens if you accept a final offer." },
    ],
  },
};
