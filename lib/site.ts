export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Get Advance Loan",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://getadvanceloan.com",
  description:
    "Compare personal loan offers from $100 to $50,000 in minutes. Bad credit OK. Free, no obligation. Funds as fast as the next business day.",
  shortDescription:
    "Personal loans from $100 to $50,000. Compare offers in minutes. Bad credit OK.",
  phone: process.env.NEXT_PUBLIC_BRAND_PHONE || "+1-800-000-0000",
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
    "online loans",
    "bad credit loans",
    "emergency loans",
    "cash advance",
    "installment loans",
    "loans up to $50000",
    "fast loans online",
    "same day loans",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
