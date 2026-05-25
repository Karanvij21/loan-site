"use client";

import { useFormContext } from "react-hook-form";
import type { ReactNode, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Field({
  name,
  label,
  help,
  children,
}: {
  name: string;
  label: string;
  help?: string;
  children: ReactNode;
}) {
  const { formState: { errors } } = useFormContext();
  const err = errors[name];
  return (
    <div>
      <label htmlFor={name} className="eyebrow !text-ink-700">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {help && !err && <p className="mt-1.5 text-[12px] text-ink-300">{help}</p>}
      {err && (
        <p role="alert" className="mt-1.5 text-[12px] text-amber-700">
          {String(err.message)}
        </p>
      )}
    </div>
  );
}

export function TextInput({ name, className, ...rest }: { name: string } & InputHTMLAttributes<HTMLInputElement>) {
  const { register, formState: { errors } } = useFormContext();
  return (
    <input
      id={name}
      {...register(name)}
      {...rest}
      aria-invalid={errors[name] ? "true" : undefined}
      className={cn("input", className)}
    />
  );
}

export function Select({
  name,
  children,
  className,
  ...rest
}: { name: string; children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) {
  const { register, formState: { errors } } = useFormContext();
  return (
    <select
      id={name}
      {...register(name)}
      {...rest}
      aria-invalid={errors[name] ? "true" : undefined}
      className={cn("input select-chevron", className)}
    >
      {children}
    </select>
  );
}
