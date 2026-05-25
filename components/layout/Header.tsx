import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/loans/personal", label: "Personal" },
  { href: "/loans/bad-credit", label: "Bad Credit" },
  { href: "/loans/emergency", label: "Emergency" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="relative z-10 border-b border-cream-300 bg-cream-100/85 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 lg:px-10">
        {/* Wordmark */}
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="group flex items-baseline gap-3"
        >
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full bg-forest-700 text-cream-100 transition-transform duration-300 group-hover:rotate-[8deg]"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 22 }}
          >
            f
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span
              className="text-[15px] font-medium tracking-tight text-ink-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Fast Loan Advance
            </span>
            <span className="eyebrow mt-0.5" style={{ fontSize: "9px", letterSpacing: "0.2em" }}>
              est. 2024 · USA
            </span>
          </span>
        </Link>

        {/* Nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[14px] text-ink-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3.5 py-2 transition-colors hover:bg-cream-200 hover:text-ink-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
            className="hidden text-[13px] tabular text-ink-500 hover:text-ink-900 md:inline"
          >
            {siteConfig.phone}
          </a>
          <Link href="/apply" className="btn btn-primary !py-2.5 !px-5 !text-[14px]">
            Begin
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
