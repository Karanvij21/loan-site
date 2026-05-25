import Link from "next/link";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Loans",
    links: [
      { href: "/loans/personal", label: "Personal" },
      { href: "/loans/bad-credit", label: "Bad credit" },
      { href: "/loans/emergency", label: "Emergency" },
      { href: "/loans/cash-advance", label: "Cash advance" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/rates-and-fees", label: "Rates & fees" },
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
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/disclosures", label: "Disclosures" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-[2] mt-20 bg-ink-900 text-cream-200">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10">
        {/* Top — wordmark + tagline */}
        <div className="flex flex-col gap-10 border-b border-cream-400/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <Link href="/" className="flex items-baseline gap-3" aria-label="Home">
              <span
                aria-hidden
                className="grid h-10 w-10 place-items-center rounded-full bg-cream-100 text-forest-700"
                style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 24 }}
              >
                f
              </span>
              <span
                className="text-2xl tracking-tight text-cream-100"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Fast Loan Advance
              </span>
            </Link>
            <p
              className="mt-6 text-3xl leading-[1.05] text-cream-100"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.022em" }}
            >
              An <em className="italic">unhurried</em> marketplace for honest borrowing.
            </p>
          </div>
          <div className="flex items-center gap-6 text-[13px]">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-cream-100">{siteConfig.email}</a>
            <span className="opacity-40">·</span>
            <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="tabular hover:text-cream-100">{siteConfig.phone}</a>
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

        {/* Fine print */}
        <div className="space-y-4 border-t border-cream-400/15 pt-8 text-[12px] leading-relaxed text-cream-300/70">
          <p>
            <span className="eyebrow !text-cream-300">Representative example.</span>{" "}
            <span className="tabular">A $5,000 loan with an APR of 24.99% over 36 months has a monthly payment of approximately $198.66 and a total cost of $7,151.76.</span> APR ranges and terms vary by lender and applicant qualifications.
          </p>
          <p>
            {siteConfig.name} is not a lender. We are a free online marketplace that connects consumers with a network of independent lenders. Loan approval, terms, and APR depend on the lender&rsquo;s evaluation of your credit profile. Not available in all states.
          </p>
          <p className="text-cream-300/50">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
