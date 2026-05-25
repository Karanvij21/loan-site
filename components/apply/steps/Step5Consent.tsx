"use client";

import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { siteConfig } from "@/lib/site";

export function Step5Consent() {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="space-y-7">
      <header>
        <h2 className="text-[32px] leading-[1.05] text-ink-900" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
          Review &amp; consent.
        </h2>
        <p className="mt-3 max-w-[60ch] text-[14px] leading-relaxed text-ink-500">
          By submitting, you authorize {siteConfig.name} to share the information above with our lending partners (including LendingTree) to prequalify you for a loan offer. Submitting performs a soft credit inquiry that does <em>not</em> affect your credit score.
        </p>
      </header>

      <label className="flex cursor-pointer items-start gap-4 rounded-md border border-cream-300 bg-cream-50/60 p-5 transition-colors has-checked:border-forest-700 has-checked:bg-forest-50">
        <input type="checkbox" {...register("tcpaConsent")} className="mt-1 h-4 w-4 accent-forest-700" />
        <span className="text-[12px] leading-relaxed text-ink-700">
          <span className="eyebrow !text-ink-900 block mb-1.5">Marketing &amp; contact consent (TCPA)</span>
          I agree that {siteConfig.name} and its lending partners may contact me at the phone number and email I provided, including by autodialed calls, prerecorded messages, SMS, and email, about loan products and services, even if my number is on a Do Not Call list. Consent is not a condition of receiving a loan. Message/data rates may apply. I can opt out at any time by replying STOP. See our{" "}
          <Link href="/privacy" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">Privacy Policy</Link> and{" "}
          <Link href="/terms" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">Terms of Use</Link>.
        </span>
      </label>
      {errors.tcpaConsent && <p role="alert" className="text-[12px] text-amber-700">{String(errors.tcpaConsent.message)}</p>}

      <label className="flex cursor-pointer items-start gap-4 rounded-md border border-cream-300 bg-cream-50/60 p-5 transition-colors has-checked:border-forest-700 has-checked:bg-forest-50">
        <input type="checkbox" {...register("ecConsent")} className="mt-1 h-4 w-4 accent-forest-700" />
        <span className="text-[12px] leading-relaxed text-ink-700">
          <span className="eyebrow !text-ink-900 block mb-1.5">E-consent (E-SIGN Act)</span>
          I consent to receive disclosures, notices, and agreements electronically rather than on paper, and confirm I have hardware and software capable of accessing them.
        </span>
      </label>
      {errors.ecConsent && <p role="alert" className="text-[12px] text-amber-700">{String(errors.ecConsent.message)}</p>}
    </div>
  );
}
