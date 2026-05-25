"use client";

import { Field, Select, TextInput } from "../Field";

export function Step3Income() {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-slate-900">Your income</h2>
      <Field name="employmentStatus" label="Employment status">
        <Select name="employmentStatus" defaultValue="">
          <option value="" disabled>Choose one</option>
          <option value="full_time">Employed full-time</option>
          <option value="part_time">Employed part-time</option>
          <option value="self_employed">Self-employed</option>
          <option value="retired">Retired</option>
          <option value="military">Military</option>
          <option value="benefits">Disability / Benefits</option>
          <option value="unemployed">Unemployed</option>
        </Select>
      </Field>
      <Field name="employerName" label="Employer name (if applicable)">
        <TextInput name="employerName" autoComplete="organization" />
      </Field>
      <Field name="monthlyIncome" label="Monthly income before tax (USD)">
        <TextInput name="monthlyIncome" type="number" min={0} step={100} inputMode="numeric" />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
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
