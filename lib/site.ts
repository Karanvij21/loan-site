const PLACEHOLDER_PHONE = "+1-800-000-0000";
const phoneEnv = process.env.NEXT_PUBLIC_BRAND_PHONE;

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Get Advance Loan",
  /** Legal operating entity. Must match the Google Ads MCC / advertiser
   *  verification name so ads aren't disapproved for identity mismatch. */
  legalEntity: process.env.NEXT_PUBLIC_LEGAL_ENTITY || "Stellar Commerce Solutions LLC",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://getadvanceloan.com",
  description:
    "Compare personal loan offers from $100 to $50,000 in minutes. Bad credit OK. Free, no obligation. Funds as fast as the next business day.",
  shortDescription:
    "Personal loans from $100 to $50,000. Compare offers in minutes. All credit profiles considered.",
  phone: phoneEnv || PLACEHOLDER_PHONE,
  /** True only when NEXT_PUBLIC_BRAND_PHONE is set to a real (non-placeholder) value.
   *  Use this to conditionally render phone links so the demo number never ships. */
  hasPhone: Boolean(phoneEnv && phoneEnv !== PLACEHOLDER_PHONE),
  email: process.env.NEXT_PUBLIC_BRAND_EMAIL || "support@getadvanceloan.com",
  // Physical mailing address required for CAN-SPAM compliance in marketing emails.
  // Set NEXT_PUBLIC_BRAND_ADDRESS to your real business address before sending.
  address: process.env.NEXT_PUBLIC_BRAND_ADDRESS || "Get Advance Loan, Mailing address available upon request.",
  locale: "en-US",
  social: {
    twitter: "@yourbrand",
    facebook: "https://facebook.com/yourbrand",
    instagram: "https://instagram.com/yourbrand",
    linkedin: "https://linkedin.com/company/yourbrand",
    youtube: "https://youtube.com/@yourbrand",
    tiktok: "https://tiktok.com/@yourbrand",
  },
  keywords: [
    "personal loans",
    "online personal loans",
    "bad credit personal loans",
    "emergency loans",
    "installment loans",
    "debt consolidation loans",
    "personal loans up to $50,000",
    "compare loan offers",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
