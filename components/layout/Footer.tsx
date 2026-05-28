import Link from "next/link";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Loans",
    links: [
      { href: "/loans/personal", label: "Personal" },
      { href: "/loans/bad-credit", label: "Bad credit" },
      { href: "/loans/emergency", label: "Emergency" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/rates-and-fees", label: "Rates & fees" },
      { href: "/personal-loans", label: "Loans by state" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of use" },
      { href: "/disclosures", label: "Disclosures" },
      { href: "/do-not-sell", label: "Do Not Sell My Info" },
      { href: "/opt-out", label: "Opt out / DNC" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-[2] mt-20 bg-ink-900 text-cream-200">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10">
        {/* Top: wordmark + tagline */}
        <div className="flex flex-col gap-10 border-b border-cream-400/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-3">
              <span
                aria-hidden
                className="grid h-10 w-10 place-items-center rounded-lg bg-cream-100 text-forest-700 font-bold text-[16px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                GA
              </span>
              <span
                className="text-2xl font-semibold tracking-tight text-cream-100"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get Advance Loan
              </span>
            </Link>
            <p
              className="mt-6 text-[26px] leading-[1.15] tracking-tight font-medium text-cream-100"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A simple way to compare honest loan offers.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px]">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-cream-100">{siteConfig.email}</a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 py-12 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow !text-cream-300/80">{col.title}</h3>
              <ul className="mt-5 space-y-2.5 text-[14px]">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-cream-200 hover:text-cream-100 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Fine print: all required disclosures */}
        <div className="space-y-4 border-t border-cream-400/15 pt-8 text-[12px] leading-relaxed text-cream-300/70">
          <p>
            <span className="eyebrow !text-cream-300">Representative example.</span>{" "}
            <span className="tabular">A $5,000 loan with an APR of 24.99% over 36 months has a monthly payment of approximately $198.66 and a total cost of $7,151.76.</span> APR ranges from 5.99% to 35.99%. Loan amounts from $100 to $50,000. Repayment terms from 3 to 72 months. Actual APR, terms, and fees vary by lender and depend on credit profile, loan amount, term, and state of residence.
          </p>
          <p>
            <span className="eyebrow !text-cream-300">Not a lender.</span>{" "}
            {siteConfig.name} is not a lender, broker, or agent of any lender. We are a free online marketplace and lead-generation service that connects consumers with a network of independent third-party lenders, including LendingTree. We do not make loan approval decisions and we do not guarantee approval, loan amount, APR, or any specific terms. All loan decisions are made solely by the lender based on the information you provide.
          </p>
          <p>
            <span className="eyebrow !text-cream-300">Late & non-payment.</span>{" "}
            Late payments may incur fees of $15 to $40 (lender-dependent) and may be reported to credit bureaus, negatively affecting your credit score. Non-payment may result in collection activity, additional fees, and legal action by the lender.
          </p>
          <p>
            <span className="eyebrow !text-cream-300">State availability.</span>{" "}
            Loan products and lender availability vary by state. Not all loan products are available in all states. {siteConfig.name} does not operate in or solicit business from states where it is prohibited from doing so by law.
          </p>
          <p>
            <span className="eyebrow !text-cream-300">Credit impact.</span>{" "}
            Submitting a request results in a soft credit inquiry, which does not affect your credit score. If you accept a final offer, the lender may perform a hard credit inquiry, which may affect your score.
          </p>
          <p>
            <span className="eyebrow !text-cream-300">Equal credit opportunity.</span>{" "}
            The federal Equal Credit Opportunity Act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status, age, public-assistance income, or the good-faith exercise of any right under the Consumer Credit Protection Act. The federal agency that administers compliance with this law is the Consumer Financial Protection Bureau.
          </p>
          <p>
            <span className="eyebrow !text-cream-300">Military borrowers.</span>{" "}
            Active-duty service members and their dependents have additional protections under the Military Lending Act, including a 36% MAPR cap on most consumer loans. Our lender partners are required to comply.
          </p>
          <p className="pt-4 border-t border-cream-400/15 text-cream-300">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
