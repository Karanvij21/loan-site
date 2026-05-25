import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/loans/personal", label: "Personal" },
  { href: "/loans/bad-credit", label: "Bad Credit" },
  { href: "/loans/emergency", label: "Emergency" },
  { href: "/loans/cash-advance", label: "Cash Advance" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="flex items-center gap-2 font-bold text-lg text-brand-800"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">FL</span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-brand-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
            className="hidden text-sm font-medium text-slate-700 hover:text-brand-700 md:inline"
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
