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
      <label htmlFor={name} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {help && !err && <p className="mt-1 text-xs text-slate-500">{help}</p>}
      {err && (
        <p role="alert" className="mt-1 text-xs text-red-600">
          {String(err.message)}
        </p>
      )}
    </div>
  );
}

export function TextInput({ name, ...rest }: { name: string } & InputHTMLAttributes<HTMLInputElement>) {
  const { register, formState: { errors } } = useFormContext();
  return (
    <input
      id={name}
      {...register(name)}
      {...rest}
      className={cn(
        "block w-full rounded-lg border bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600",
        errors[name] ? "border-red-400" : "border-slate-300"
      )}
    />
  );
}

export function Select({
  name,
  children,
  ...rest
}: { name: string; children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) {
  const { register, formState: { errors } } = useFormContext();
  return (
    <select
      id={name}
      {...register(name)}
      {...rest}
      className={cn(
        "block w-full rounded-lg border bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600",
        errors[name] ? "border-red-400" : "border-slate-300"
      )}
    >
      {children}
    </select>
  );
}
