"use client";

import { Field, Select, TextInput } from "../Field";
import { US_STATES } from "@/lib/schema";

export function Step2Personal() {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-slate-900">Tell us about you</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="firstName" label="First name">
          <TextInput name="firstName" autoComplete="given-name" />
        </Field>
        <Field name="lastName" label="Last name">
          <TextInput name="lastName" autoComplete="family-name" />
        </Field>
      </div>
      <Field name="email" label="Email">
        <TextInput name="email" type="email" autoComplete="email" />
      </Field>
      <Field name="phone" label="Mobile phone">
        <TextInput name="phone" type="tel" autoComplete="tel" placeholder="(555) 555-5555" />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="dob" label="Date of birth">
          <TextInput name="dob" type="date" autoComplete="bday" />
        </Field>
        <Field name="ssnLast4" label="Last 4 of SSN" help="Used by lenders to pre-qualify you.">
          <TextInput name="ssnLast4" inputMode="numeric" maxLength={4} pattern="\d{4}" />
        </Field>
      </div>
      <Field name="street" label="Street address">
        <TextInput name="street" autoComplete="street-address" />
      </Field>
      <div className="grid gap-4 sm:grid-cols-3">
        <Field name="city" label="City">
          <TextInput name="city" autoComplete="address-level2" />
        </Field>
        <Field name="state" label="State">
          <Select name="state" defaultValue="">
            <option value="" disabled>—</option>
            {US_STATES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </Select>
        </Field>
        <Field name="zip" label="ZIP">
          <TextInput name="zip" autoComplete="postal-code" />
        </Field>
      </div>
    </div>
  );
}
