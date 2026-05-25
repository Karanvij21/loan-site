import Link from "next/link";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Loans",
    links: [
      { href: "/loans/personal", label: "Personal Loans" },
      { href: "/loans/bad-credit", label: "Bad Credit Loans" },
      { href: "/loans/emergency", label: "Emergency Loans" },
      { href: "/loans/cash-advance", label: "Cash Advance" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/rates-and-fees", label: "Rates & Fees" },
      { href: "/faq", label: "FAQ" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/partners", label: "Partners" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
      { href: "/disclosures", label: "Disclosures" },
      { href: "/do-not-sell", label: "Do Not Sell My Info" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-brand-800">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">FL</span>
              <span>{siteConfig.name}</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{siteConfig.shortDescription}</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-slate-900">{col.title}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-slate-600 hover:text-brand-700">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8 text-xs text-slate-500 space-y-4">
          <p>
            <strong>Representative example:</strong> A $5,000 loan with an APR of 24.99% over 36 months has a monthly payment of approximately $198.66 and a total cost of $7,151.76. APR ranges and terms vary by lender and applicant qualifications.
          </p>
          <p>
            {siteConfig.name} is not a lender. We are a free online marketplace that connects consumers with a network of independent lenders. Loan approval, terms, and APR depend on the lender&rsquo;s evaluation of your credit profile. Not available in all states.
          </p>
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
