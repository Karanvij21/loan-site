"use client";

import { useFormContext } from "react-hook-form";
import { Field, Select, TextInput } from "../Field";
import { US_STATES } from "@/lib/schema";

function formatUSPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function Step2Personal() {
  const { setValue, watch } = useFormContext();
  const phoneVal = watch("phone") || "";

  return (
    <div className="space-y-7">
      <header>
        <h2 className="text-[32px] leading-[1.05] text-ink-900">
          About you.
        </h2>
        <p className="mt-2 text-[14px] text-ink-500">Lenders use this to verify your identity and prequalify you.</p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="firstName" label="First name">
          <TextInput name="firstName" autoComplete="given-name" />
        </Field>
        <Field name="lastName" label="Last name">
          <TextInput name="lastName" autoComplete="family-name" />
        </Field>
      </div>
      <Field name="email" label="Email">
        <TextInput name="email" type="email" autoComplete="email" placeholder="you@example.com" />
      </Field>
      <Field name="phone" label="Mobile phone">
        <TextInput
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 555-5555"
          inputMode="tel"
          value={phoneVal}
          onChange={(e) =>
            setValue("phone", formatUSPhone(e.target.value), { shouldValidate: true, shouldDirty: true })
          }
          className="tabular"
        />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="dob" label="Date of birth">
          <TextInput name="dob" type="date" autoComplete="bday" />
        </Field>
        <Field name="ssnLast4" label="Last 4 of SSN" help="Used by lenders to prequalify you.">
          <TextInput name="ssnLast4" inputMode="numeric" maxLength={4} pattern="\d{4}" placeholder="1234" className="tabular" />
        </Field>
      </div>
      <Field name="street" label="Street address">
        <TextInput name="street" autoComplete="street-address" placeholder="123 Main St" />
      </Field>
      <div className="grid gap-5 sm:grid-cols-[1fr_140px_160px]">
        <Field name="city" label="City">
          <TextInput name="city" autoComplete="address-level2" />
        </Field>
        <Field name="state" label="State">
          <Select name="state" defaultValue="">
            <option value="" disabled>Select</option>
            {US_STATES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </Select>
        </Field>
        <Field name="zip" label="ZIP">
          <TextInput name="zip" autoComplete="postal-code" placeholder="00000" maxLength={10} className="tabular" />
        </Field>
      </div>
    </div>
  );
}
