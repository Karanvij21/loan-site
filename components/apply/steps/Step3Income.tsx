"use client";

import { useFormContext } from "react-hook-form";
import { Field, Select, TextInput } from "../Field";

export function Step3Income() {
  const { watch } = useFormContext();
  const employmentStatus = watch("employmentStatus");

  return (
    <div className="space-y-7">
      <header>
        <h2 className="text-[32px] leading-[1.05] text-ink-900">
          Your <span className="text-forest-700">income</span>.
        </h2>
        <p className="mt-2 text-[14px] text-ink-500">Lenders need to verify you can repay comfortably.</p>
      </header>

      <Field name="employmentStatus" label="Employment status">
        <Select name="employmentStatus" defaultValue="">
          <option value="" disabled>Choose one</option>
          <option value="full_time">Employed full-time</option>
          <option value="part_time">Employed part-time</option>
          <option value="self_employed">Self-employed</option>
          <option value="retired">Retired</option>
          <option value="military">Military (active duty)</option>
          <option value="benefits">Disability / Benefits</option>
          <option value="unemployed">Unemployed</option>
        </Select>
      </Field>

      {employmentStatus === "military" && (
        <div
          role="note"
          className="rounded-md border border-forest-700/30 bg-forest-50 p-4 text-[13px] leading-[1.55] text-ink-700"
        >
          <span className="eyebrow !text-forest-700 block mb-1.5">
            Military Lending Act protections
          </span>
          <p>
            As an active-duty service member or covered dependent, you are entitled to additional protections under the federal Military Lending Act, including a <strong>36% MAPR cap</strong> on most consumer loans (interest, fees, and certain charges included). Our lender partners are required to comply. If an offer appears to exceed this cap, email{" "}
            <a
              href="mailto:support@getadvanceloan.com"
              className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900"
            >
              support@getadvanceloan.com
            </a>{" "}
            or contact your installation&rsquo;s legal assistance office.
          </p>
        </div>
      )}

      <Field name="employerName" label="Employer name (if applicable)">
        <TextInput name="employerName" autoComplete="organization" />
      </Field>
      <Field name="monthlyIncome" label="Monthly income before tax (USD)">
        <TextInput name="monthlyIncome" type="number" min={0} step={100} inputMode="numeric" className="tabular" />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="payFrequency" label="Pay frequency">
          <Select name="payFrequency" defaultValue="">
            <option value="" disabled>Choose one</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Every 2 weeks</option>
            <option value="semimonthly">Twice a month</option>
            <option value="monthly">Monthly</option>
          </Select>
        </Field>
        <Field name="nextPayDate" label="Next pay date">
          <TextInput name="nextPayDate" type="date" />
        </Field>
      </div>
    </div>
  );
}
