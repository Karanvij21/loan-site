"use client";

import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { siteConfig } from "@/lib/site";

export function Step5Consent() {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="space-y-7">
      <header>
        <h2 className="text-[32px] leading-[1.05] text-ink-900">
          Review &amp; consent.
        </h2>
        <p className="mt-3 max-w-[60ch] text-[14px] leading-relaxed text-ink-500">
          Before submitting, please review and check each box. Submitting performs a soft credit inquiry that does <em>not</em> affect your credit score.
        </p>
      </header>

      {/* Lender identity disclosure box */}
      <div className="rounded-md border border-cream-300 bg-cream-50/60 p-5 text-[12px] leading-relaxed text-ink-700">
        <span className="eyebrow !text-ink-900 block mb-2">Who you may hear from</span>
        <p>
          By submitting, your information will be shared with our lender partner network for the purpose of obtaining loan offers. This network currently includes{" "}
          <strong>LendingTree, LLC</strong> and the lenders within LendingTree&rsquo;s marketplace (a full list of LendingTree marketplace partners is available at{" "}
          <a href="https://www.lendingtree.com/about/partners/" target="_blank" rel="noopener noreferrer" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">
            lendingtree.com/about/partners
          </a>). You may receive contact from {siteConfig.name}, LendingTree, and one or more lenders in their network.
        </p>
      </div>

      <label className="flex cursor-pointer items-start gap-4 rounded-md border border-cream-300 bg-cream-50/60 p-5 transition-colors has-checked:border-forest-700 has-checked:bg-forest-50">
        <input type="checkbox" {...register("tcpaConsent")} className="mt-1 h-4 w-4 accent-forest-700" />
        <span className="text-[12px] leading-relaxed text-ink-700">
          <span className="eyebrow !text-ink-900 block mb-1.5">TCPA contact consent</span>
          I expressly consent to receive marketing and informational communications about loan products and related services from <strong>{siteConfig.name}</strong>, <strong>LendingTree, LLC</strong>, and the lenders in LendingTree&rsquo;s network at the phone number and email address I provided. I agree these communications may be sent by autodialed calls, prerecorded or artificial-voice messages, SMS/text messages, and email, <strong>even if my number is registered on any Federal or State Do Not Call list</strong>. Consent is <strong>not a condition</strong> of receiving any loan or service. Message and data rates may apply. Message frequency varies. I may opt out at any time: reply STOP to text messages, click &ldquo;unsubscribe&rdquo; in any email, or contact us via our <Link href="/opt-out" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">opt-out page</Link>. See our{" "}
          <Link href="/privacy" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">Privacy Policy</Link> and{" "}
          <Link href="/terms" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">Terms of Use</Link>.
        </span>
      </label>
      {errors.tcpaConsent && <p role="alert" className="text-[12px] text-amber-700">{String(errors.tcpaConsent.message)}</p>}

      <label className="flex cursor-pointer items-start gap-4 rounded-md border border-cream-300 bg-cream-50/60 p-5 transition-colors has-checked:border-forest-700 has-checked:bg-forest-50">
        <input type="checkbox" {...register("ecConsent")} className="mt-1 h-4 w-4 accent-forest-700" />
        <span className="text-[12px] leading-relaxed text-ink-700">
          <span className="eyebrow !text-ink-900 block mb-1.5">E-SIGN consent &amp; FCRA authorization</span>
          I consent to receive all disclosures, notices, contracts, and other communications electronically rather than on paper. I authorize {siteConfig.name} and the lenders matched with my request to obtain my credit information and reports from credit bureaus (initially a soft credit pull that does not affect my credit score) to evaluate my eligibility for a loan offer. I confirm I have the hardware and software necessary to access and retain electronic records.
        </span>
      </label>
      {errors.ecConsent && <p role="alert" className="text-[12px] text-amber-700">{String(errors.ecConsent.message)}</p>}

      {/* Final compliance note */}
      <p className="text-[11px] leading-relaxed text-ink-300">
        By clicking &ldquo;See my offers&rdquo; you confirm: (a) you are at least 18 years old, (b) you are a legal U.S. resident, (c) all information you provided is true and accurate, (d) you have read and agree to our{" "}
        <Link href="/disclosures" className="underline decoration-cream-300 underline-offset-2 hover:text-ink-900">Disclosures</Link>,{" "}
        <Link href="/privacy" className="underline decoration-cream-300 underline-offset-2 hover:text-ink-900">Privacy Policy</Link>, and{" "}
        <Link href="/terms" className="underline decoration-cream-300 underline-offset-2 hover:text-ink-900">Terms of Use</Link>.
      </p>
    </div>
  );
}
