"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "fla_cookie_consent";

type ConsentState = "accepted" | "essential" | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ConsentState;
      if (stored === "accepted" || stored === "essential") {
        setConsent(stored);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const choose = (value: "accepted" | "essential") => {
    try { localStorage.setItem(STORAGE_KEY, value); } catch { /* ignore */ }
    setConsent(value);
    // Update Google Consent Mode v2 if gtag is available
    const w = window as { gtag?: (...args: unknown[]) => void };
    if (typeof window !== "undefined" && w.gtag) {
      const granted = value === "accepted" ? "granted" : "denied";
      w.gtag("consent", "update", {
        ad_storage: granted,
        analytics_storage: granted,
        ad_user_data: granted,
        ad_personalization: granted,
        functionality_storage: "granted",
        security_storage: "granted",
      });
    }
  };

  if (!mounted || consent) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-[680px] rounded-2xl border border-cream-300 bg-cream-50 p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] sm:inset-x-auto sm:right-4 sm:bottom-4 sm:left-4 sm:max-w-[680px] slide-up"
    >
      <p className="text-[14px] leading-[1.55] text-ink-700">
        <span className="font-semibold text-ink-900">We use cookies.</span> We use essential cookies to operate the site, and (with your consent) analytics and advertising cookies to improve our service and personalize content. Read more in our{" "}
        <Link href="/privacy" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => choose("essential")}
          className="btn btn-secondary !py-2 !px-4 !text-[13px] !min-h-0"
        >
          Essential only
        </button>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="btn btn-primary !py-2 !px-4 !text-[13px] !min-h-0"
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
