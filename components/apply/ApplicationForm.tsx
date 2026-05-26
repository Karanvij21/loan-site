"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fullApplicationSchema, type FullApplication } from "@/lib/schema";
import { StepProgress } from "./StepProgress";
import { Step1Amount } from "./steps/Step1Amount";
import { Step2Personal } from "./steps/Step2Personal";
import { Step3Income } from "./steps/Step3Income";
import { Step4Bank } from "./steps/Step4Bank";
import { Step5Consent } from "./steps/Step5Consent";
import { trackApplyStarted, trackStepCompleted, trackLeadSubmitted } from "@/lib/tracking";

const stepFields: (keyof FullApplication)[][] = [
  ["amount", "purpose", "creditRating"],
  ["firstName", "lastName", "email", "phone", "dob", "ssnLast4", "street", "city", "state", "zip"],
  ["employmentStatus", "monthlyIncome", "payFrequency", "nextPayDate"],
  ["hasBankAccount", "directDeposit"],
  ["tcpaConsent", "ecConsent"],
];

const steps = ["Amount", "About you", "Income", "Banking", "Consent"];

export function ApplicationForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [stepIdx, setStepIdx] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const methods = useForm<FullApplication>({
    resolver: zodResolver(fullApplicationSchema),
    mode: "onTouched",
    defaultValues: {
      amount: Number(params.get("amount")) || 5000,
      hasBankAccount: true,
      directDeposit: true,
    },
  });

  // Fire apply_started exactly once when the form mounts (top of funnel)
  useEffect(() => {
    const initial = Number(params.get("amount")) || undefined;
    trackApplyStarted(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onNext = async () => {
    const valid = await methods.trigger(stepFields[stepIdx]);
    if (valid) {
      trackStepCompleted(stepIdx + 1, steps[stepIdx]);
      setStepIdx((i) => Math.min(i + 1, steps.length - 1));
    }
  };

  const onBack = () => setStepIdx((i) => Math.max(i - 1, 0));

  const onSubmit = methods.handleSubmit(async (data) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...data,
          consentTimestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      const payload = await res.json().catch(() => ({} as { leadId?: string }));
      // Final step counts as a completed step too, before the conversion fires
      trackStepCompleted(steps.length, steps[steps.length - 1]);
      trackLeadSubmitted({
        amount: data.amount,
        purpose: data.purpose,
        creditRating: data.creditRating,
        state: data.state,
        leadId: payload?.leadId,
      });
      router.push("/apply/success");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  });

  return (
    <FormProvider {...methods}>
      <div className="bezel-outer">
       <div className="bezel-inner p-7 sm:p-10 lg:p-12">
        <StepProgress steps={steps} current={stepIdx} />

        <form onSubmit={onSubmit} className="mt-10" noValidate>
          <AnimatePresence mode="wait">
            <motion.div
              key={stepIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {stepIdx === 0 && <Step1Amount />}
              {stepIdx === 1 && <Step2Personal />}
              {stepIdx === 2 && <Step3Income />}
              {stepIdx === 3 && <Step4Bank />}
              {stepIdx === 4 && <Step5Consent />}
            </motion.div>
          </AnimatePresence>

          {error && (
            <p role="alert" className="mt-6 rounded-md border border-amber-500/30 bg-amber-300/10 p-4 text-[13px] text-amber-700">
              {error}
            </p>
          )}

          <hr className="rule mt-10" />

          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onBack}
              disabled={stepIdx === 0}
              className="btn btn-secondary !py-2.5 !px-5 !text-[14px] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
                <path d="M11 7H3M7 11l-4-4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </button>

            {stepIdx < steps.length - 1 ? (
              <button type="button" onClick={onNext} className="btn btn-primary">
                Continue
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-accent disabled:opacity-60"
              >
                {submitting ? "Submitting…" : "See my offers"}
                {!submitting && (
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            )}
          </div>
        </form>
       </div>
      </div>
    </FormProvider>
  );
}
