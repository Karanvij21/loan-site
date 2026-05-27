import Link from "next/link";
import { getSupabaseAdmin } from "@/lib/supabase";
import { formatCurrency } from "@/lib/utils";

// Always SSR — read fresh data on every page load.
export const dynamic = "force-dynamic";

type LeadRow = {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  amount: number;
  purpose: string;
  credit_rating: string;
  state: string;
  lendingtree_lead_id: string | null;
  forwarded_at: string | null;
  email_sent_at: string | null;
  tcpa_consent: boolean;
  ec_consent: boolean;
};

type Search = Promise<{
  state?: string;
  status?: "forwarded" | "pending" | "all";
  q?: string;
}>;

export default async function LeadsAdminPage({ searchParams }: { searchParams: Search }) {
  const params = await searchParams;
  const sb = getSupabaseAdmin();

  if (!sb) {
    return (
      <div className="rounded-lg border border-amber-500/30 bg-amber-300/10 p-6 text-[14px] text-amber-700">
        Supabase is not configured. Set <code>NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
        <code>SUPABASE_SERVICE_ROLE_KEY</code> in Vercel env vars.
      </div>
    );
  }

  let query = sb
    .from("leads")
    .select(
      "id,created_at,first_name,last_name,email,phone,amount,purpose,credit_rating,state,lendingtree_lead_id,forwarded_at,email_sent_at,tcpa_consent,ec_consent"
    )
    .order("created_at", { ascending: false })
    .limit(200);

  if (params.state) query = query.eq("state", params.state.toUpperCase());
  if (params.status === "forwarded") query = query.not("forwarded_at", "is", null);
  if (params.status === "pending") query = query.is("forwarded_at", null);
  if (params.q) {
    query = query.or(
      `email.ilike.%${params.q}%,first_name.ilike.%${params.q}%,last_name.ilike.%${params.q}%`
    );
  }

  const { data: leads, error } = await query;

  if (error) {
    return (
      <div className="rounded-lg border border-amber-500/30 bg-amber-300/10 p-6 text-[13px] text-amber-700">
        Failed to query leads: {error.message}
        <br />
        If you see &ldquo;relation does not exist&rdquo;, run{" "}
        <code>supabase/schema.sql</code> and{" "}
        <code>supabase/migration_lead_status.sql</code> in the Supabase SQL editor.
      </div>
    );
  }

  const rows = (leads ?? []) as LeadRow[];
  const total = rows.length;
  const forwarded = rows.filter((r) => r.forwarded_at).length;
  const emailed = rows.filter((r) => r.email_sent_at).length;

  return (
    <div>
      {/* Heading */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-[28px] font-semibold tracking-tight text-ink-900">Leads</h1>
          <p className="mt-1 text-[13px] text-ink-500">
            Showing latest {total} submissions. Refreshes on every page load.
          </p>
        </div>
        <div className="flex gap-6 text-[12px]">
          <Stat label="Total" value={total} />
          <Stat label="Forwarded" value={forwarded} accent />
          <Stat label="Email sent" value={emailed} accent />
        </div>
      </div>

      {/* Filters */}
      <form className="mt-6 flex flex-wrap items-end gap-3" method="get">
        <Field label="Search" name="q" defaultValue={params.q ?? ""} placeholder="email, first or last name" wide />
        <Field label="State" name="state" defaultValue={params.state ?? ""} placeholder="TX" maxLength={2} />
        <FieldSelect
          label="Status"
          name="status"
          defaultValue={params.status ?? "all"}
          options={[
            { value: "all", label: "All" },
            { value: "forwarded", label: "Forwarded" },
            { value: "pending", label: "Pending" },
          ]}
        />
        <button type="submit" className="h-9 rounded-md bg-ink-900 px-4 text-[13px] font-medium text-paper-50 hover:bg-cobalt-700">
          Apply
        </button>
        {(params.q || params.state || (params.status && params.status !== "all")) && (
          <Link href="/admin/leads" className="self-end text-[13px] text-ink-500 hover:text-ink-900">
            Clear
          </Link>
        )}
      </form>

      {/* Table */}
      <div className="mt-6 overflow-x-auto rounded-lg border border-paper-300 bg-white">
        <table className="w-full text-[13px]">
          <thead className="border-b border-paper-300 text-left text-[11px] uppercase tracking-[0.12em] text-ink-500">
            <tr>
              <th className="px-4 py-3">When</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Purpose</th>
              <th className="px-4 py-3">State</th>
              <th className="px-4 py-3">Forwarded</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-12 text-center text-ink-500">
                  No leads match these filters.
                </td>
              </tr>
            ) : (
              rows.map((r) => (
                <tr key={r.id} className="border-b border-paper-200 last:border-0 hover:bg-paper-50">
                  <td className="whitespace-nowrap px-4 py-3 tabular text-ink-700">
                    {new Date(r.created_at).toLocaleString("en-US", {
                      year: "2-digit",
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-ink-900">
                    {r.first_name} {r.last_name}
                  </td>
                  <td className="px-4 py-3 text-ink-700">{r.email}</td>
                  <td className="whitespace-nowrap px-4 py-3 tabular font-medium text-ink-900">
                    {formatCurrency(r.amount)}
                  </td>
                  <td className="px-4 py-3 text-ink-700">{r.purpose.replace(/_/g, " ")}</td>
                  <td className="whitespace-nowrap px-4 py-3 tabular text-ink-700">{r.state}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {r.forwarded_at ? (
                      <span title={r.lendingtree_lead_id ?? ""} className="inline-flex items-center gap-1 text-[12px] text-cobalt-700">
                        <Dot color="cobalt" /> {r.lendingtree_lead_id?.startsWith("MOCK") ? "mocked" : "forwarded"}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[12px] text-ink-300">
                        <Dot color="grey" /> pending
                      </span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {r.email_sent_at ? (
                      <span className="inline-flex items-center gap-1 text-[12px] text-cobalt-700">
                        <Dot color="cobalt" /> sent
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[12px] text-ink-300">
                        <Dot color="grey" /> skipped
                      </span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <Link href={`/admin/leads/${r.id}`} className="text-[12px] font-medium text-ink-900 hover:text-cobalt-700">
                      View →
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="text-right">
      <div className={`tabular text-[20px] font-semibold ${accent ? "text-cobalt-700" : "text-ink-900"}`}>{value}</div>
      <div className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-ink-500">{label}</div>
    </div>
  );
}

function Field({
  label,
  name,
  defaultValue,
  placeholder,
  maxLength,
  wide,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  maxLength?: number;
  wide?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-[10px] uppercase tracking-[0.14em] text-ink-500">{label}</span>
      <input
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`h-9 rounded-md border border-paper-300 bg-white px-3 text-[13px] text-ink-900 placeholder:text-ink-300 focus:border-ink-900 focus:outline-none ${wide ? "w-[280px]" : "w-[120px]"}`}
      />
    </label>
  );
}

function FieldSelect({
  label,
  name,
  defaultValue,
  options,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-[10px] uppercase tracking-[0.14em] text-ink-500">{label}</span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="h-9 w-[120px] rounded-md border border-paper-300 bg-white px-3 text-[13px] text-ink-900 focus:border-ink-900 focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}

function Dot({ color }: { color: "cobalt" | "grey" }) {
  return (
    <span
      className={`inline-block h-1.5 w-1.5 rounded-full ${color === "cobalt" ? "bg-cobalt-700" : "bg-paper-400"}`}
    />
  );
}
