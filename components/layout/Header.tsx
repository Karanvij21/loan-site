"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/loans/personal", label: "Personal" },
  { href: "/loans/bad-credit", label: "Bad Credit" },
  { href: "/loans/emergency", label: "Emergency" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-30 border-b border-cream-300 bg-cream-100/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-5 lg:px-10">
        {/* Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-lg bg-forest-700 text-cream-100 font-bold text-[16px] transition-transform duration-300 group-hover:scale-105"
            style={{ fontFamily: "var(--font-display)" }}
          >
            GA
          </span>
          {/* Wordmark: visible from sm: up, sr-only otherwise so the
              link always has a discernible accessible name. */}
          <span className="sr-only sm:not-sr-only sm:flex sm:flex-col sm:leading-none">
            <span
              className="text-[14px] font-semibold tracking-tight text-ink-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Advance Loan
            </span>
            <span className="hidden sm:inline text-[10px] tracking-[0.15em] uppercase text-ink-500 mt-1">
              Loan Marketplace
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[14px] font-medium text-ink-700">
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
        <div className="flex items-center gap-3">
          <Link href="/apply" className="btn btn-primary hidden sm:inline-flex !py-2 !px-4 !text-[13px] !min-h-0">
            Begin
            <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink-900 hover:bg-cream-200 lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M4 12h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-[68px] bottom-0 z-50 overflow-y-auto bg-cream-100 px-5 py-8 slide-up"
          role="dialog"
          aria-modal="true"
        >
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-lg px-4 py-3.5 text-[18px] font-medium text-ink-900 hover:bg-cream-200"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.label}
                    <span className="text-ink-300">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <hr className="rule my-6" />
          <div className="space-y-3">
            <Link href="/apply" className="btn btn-primary w-full">
              Begin your request
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <hr className="rule my-6" />
          <ul className="space-y-2 text-[13px] text-ink-500">
            <li><Link href="/rates-and-fees" className="hover:text-ink-900">Rates & fees</Link></li>
            <li><Link href="/disclosures" className="hover:text-ink-900">Disclosures</Link></li>
            <li><Link href="/privacy" className="hover:text-ink-900">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-ink-900">Terms</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
