"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** Mobile-only sticky bottom CTA. Hides on /apply (no double-CTA). */
export function StickyApplyCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after the user has scrolled past 40% of the viewport height
    const onScroll = () => {
      const threshold = window.innerHeight * 0.4;
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Skip on application page itself and success page
  if (pathname?.startsWith("/apply")) return null;
  if (!visible) return null;

  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-cream-300 bg-cream-100/95 backdrop-blur-md px-4 py-3 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.18)]">
      <div className="flex items-center justify-between gap-3">
        <div className="text-[11px] leading-tight text-ink-500">
          <p className="font-medium text-ink-900">2-min request</p>
          <p>Soft credit check, no impact</p>
        </div>
        <Link href="/apply" className="btn btn-primary !py-2.5 !px-5 !text-[14px] !min-h-0">
          Begin
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
