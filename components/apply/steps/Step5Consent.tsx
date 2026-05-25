"use client";

import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { siteConfig } from "@/lib/site";

export function Step5Consent() {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-slate-900">Review & consent</h2>
      <p className="text-sm text-slate-600">
        By submitting, you authorize {siteConfig.name} to share the information above with our lending partners (including LendingTree) for the purpose of pre-qualifying you for a loan offer. Submitting this request will perform a soft credit inquiry that does not affect your credit score.
      </p>

      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-4 has-checked:border-brand-600 has-checked:bg-brand-50">
        <input type="checkbox" {...register("tcpaConsent")} className="mt-1 h-4 w-4 accent-brand-600" />
        <span className="text-xs text-slate-700">
          <strong className="block mb-1 text-slate-900">Marketing &amp; contact consent (TCPA)</strong>
          I agree that {siteConfig.name} and its lending partners may contact me at the phone number and email I provided — including by autodialed calls, prerecorded messages, SMS, and email — about loan products and services, even if my number is on a Do Not Call list. Consent is not a condition of receiving a loan. Message/data rates may apply. I can opt out at any time by replying STOP. See our{" "}
          <Link href="/privacy" className="underline">Privacy Policy</Link> and{" "}
          <Link href="/terms" className="underline">Terms of Use</Link>.
        </span>
      </label>
      {errors.tcpaConsent && <p role="alert" className="text-xs text-red-600">{String(errors.tcpaConsent.message)}</p>}

      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-4 has-checked:border-brand-600 has-checked:bg-brand-50">
        <input type="checkbox" {...register("ecConsent")} className="mt-1 h-4 w-4 accent-brand-600" />
        <span className="text-xs text-slate-700">
          <strong className="block mb-1 text-slate-900">E-consent (E-SIGN Act)</strong>
          I consent to receive disclosures, notices, and agreements electronically rather than on paper, and confirm I have hardware and software capable of accessing them.
        </span>
      </label>
      {errors.ecConsent && <p role="alert" className="text-xs text-red-600">{String(errors.ecConsent.message)}</p>}
    </div>
  );
}
