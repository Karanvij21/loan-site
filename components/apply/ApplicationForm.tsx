"use client";

import { useState } from "react";
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

const stepFields: (keyof FullApplication)[][] = [
  ["amount", "purpose", "creditRating"],
  ["firstName", "lastName", "email", "phone", "dob", "ssnLast4", "street", "city", "state", "zip"],
  ["employmentStatus", "monthlyIncome", "payFrequency", "nextPayDate"],
  ["hasBankAccount", "directDeposit"],
  ["tcpaConsent", "ecConsent"],
];

const steps = ["Amount", "Personal", "Income", "Banking", "Consent"];

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

  const onNext = async () => {
    const valid = await methods.trigger(stepFields[stepIdx]);
    if (valid) setStepIdx((i) => Math.min(i + 1, steps.length - 1));
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
      router.push("/apply/success");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  });

  return (
    <FormProvider {...methods}>
      <StepProgress steps={steps} current={stepIdx} />

      <form
        onSubmit={onSubmit}
        className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        noValidate
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={stepIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {stepIdx === 0 && <Step1Amount />}
            {stepIdx === 1 && <Step2Personal />}
            {stepIdx === 2 && <Step3Income />}
            {stepIdx === 3 && <Step4Bank />}
            {stepIdx === 4 && <Step5Consent />}
          </motion.div>
        </AnimatePresence>

        {error && (
          <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBack}
            disabled={stepIdx === 0}
            className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40"
          >
            Back
          </button>

          {stepIdx < steps.length - 1 ? (
            <button
              type="button"
              onClick={onNext}
              className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "See my offers"}
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
