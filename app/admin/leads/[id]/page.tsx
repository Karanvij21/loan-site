import Link from "next/link";
import { notFound } from "next/navigation";
import { getSupabaseAdmin } from "@/lib/supabase";
import { formatCurrency } from "@/lib/utils";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export default async function LeadDetailPage({ params }: Props) {
  const { id } = await params;
  const sb = getSupabaseAdmin();
  if (!sb) {
    return <div className="text-[14px] text-amber-700">Supabase not configured.</div>;
  }

  const { data: lead, error } = await sb.from("leads").select("*").eq("id", id).single();
  if (error || !lead) notFound();

  // Pull related scheduled-push rows for context
  const { data: pushes } = await sb
    .from("scheduled_pushes")
    .select("notification_id,stage,send_after,cancelled_at,created_at")
    .order("created_at", { ascending: true })
    .limit(20);

  return (
    <div>
      <Link href="/admin/leads" className="text-[12px] text-ink-500 hover:text-ink-900">
        ← All leads
      </Link>

      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-semibold tracking-tight text-ink-900">
            {lead.first_name} {lead.last_name}
          </h1>
          <p className="mt-1 text-[12px] text-ink-500 tabular">
            Lead ID: {lead.id}
          </p>
        </div>
        <div className="text-right text-[12px]">
          <div className="tabular text-ink-500">
            {new Date(lead.created_at).toLocaleString("en-US")}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card title="Loan request">
          <Row k="Amount" v={formatCurrency(lead.amount)} />
          <Row k="Purpose" v={String(lead.purpose).replace(/_/g, " ")} />
          <Row k="Credit rating" v={lead.credit_rating} />
        </Card>

        <Card title="Identity">
          <Row k="Email" v={lead.email} mono />
          <Row k="Phone" v={lead.phone} mono />
          <Row k="DOB" v={lead.dob} mono />
          <Row k="SSN last 4" v={`****${lead.ssn_last_4}`} mono />
        </Card>

        <Card title="Address">
          <Row k="Street" v={lead.street} />
          <Row k="City" v={lead.city} />
          <Row k="State" v={lead.state} />
          <Row k="ZIP" v={lead.zip} mono />
        </Card>

        <Card title="Income">
          <Row k="Employment" v={String(lead.employment_status).replace(/_/g, " ")} />
          <Row k="Employer" v={lead.employer_name || "—"} />
          <Row k="Monthly income" v={formatCurrency(lead.monthly_income || 0)} />
          <Row k="Pay frequency" v={String(lead.pay_frequency).replace(/_/g, " ")} />
          <Row k="Next pay date" v={lead.next_pay_date} />
        </Card>

        <Card title="Banking">
          <Row k="Bank account" v={lead.has_bank_account ? "yes" : "no"} />
          <Row k="Direct deposit" v={lead.direct_deposit ? "yes" : "no"} />
        </Card>

        <Card title="Consent">
          <Row k="TCPA" v={lead.tcpa_consent ? "granted" : "missing"} accent={!lead.tcpa_consent} />
          <Row k="E-SIGN" v={lead.ec_consent ? "granted" : "missing"} accent={!lead.ec_consent} />
          <Row k="Timestamp" v={lead.consent_timestamp ? new Date(lead.consent_timestamp).toLocaleString("en-US") : "—"} />
        </Card>

        <Card title="Delivery" wide>
          <Row
            k="LendingTree"
            v={
              lead.forwarded_at
                ? `${lead.lendingtree_lead_id?.startsWith("MOCK") ? "mocked" : "forwarded"} · ${new Date(lead.forwarded_at).toLocaleString("en-US")}`
                : "pending"
            }
            accent={!lead.forwarded_at}
          />
          <Row
            k="LT lead ID"
            v={lead.lendingtree_lead_id || "—"}
            mono
          />
          <Row
            k="Confirmation email"
            v={
              lead.email_sent_at
                ? `sent · ${new Date(lead.email_sent_at).toLocaleString("en-US")}`
                : "skipped"
            }
          />
        </Card>

        <Card title="Tracking metadata" wide>
          <Row k="IP" v={lead.ip || "—"} mono />
          <Row k="Referrer" v={lead.referrer || "—"} mono />
          <Row k="User agent" v={lead.user_agent || "—"} mono small />
        </Card>
      </div>

      {/* Push scheduling overview */}
      {pushes && pushes.length > 0 && (
        <Card title={`Recent scheduled pushes (${pushes.length})`} className="mt-6">
          <table className="w-full text-[12px]">
            <thead className="text-left text-[10px] uppercase tracking-[0.12em] text-ink-500">
              <tr>
                <th className="py-2">Stage</th>
                <th className="py-2">Send after</th>
                <th className="py-2">Cancelled</th>
                <th className="py-2">Notification ID</th>
              </tr>
            </thead>
            <tbody>
              {pushes.map((p) => (
                <tr key={p.notification_id} className="border-t border-paper-200">
                  <td className="py-2 text-ink-700">{p.stage}</td>
                  <td className="py-2 tabular text-ink-700">
                    {p.send_after ? new Date(p.send_after).toLocaleString("en-US") : "—"}
                  </td>
                  <td className="py-2 tabular text-ink-700">
                    {p.cancelled_at ? new Date(p.cancelled_at).toLocaleString("en-US") : "—"}
                  </td>
                  <td className="py-2 tabular text-[11px] text-ink-300">{p.notification_id.slice(0, 8)}…</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
}

function Card({ title, children, wide, className = "" }: { title: string; children: React.ReactNode; wide?: boolean; className?: string }) {
  return (
    <section className={`${wide ? "lg:col-span-3" : ""} rounded-lg border border-paper-300 bg-white p-5 ${className}`}>
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">{title}</h2>
      <dl className="mt-3 space-y-2 text-[13px]">{children}</dl>
    </section>
  );
}

function Row({
  k,
  v,
  mono,
  small,
  accent,
}: {
  k: string;
  v: React.ReactNode;
  mono?: boolean;
  small?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-3">
      <dt className="text-[11px] uppercase tracking-[0.12em] text-ink-500">{k}</dt>
      <dd
        className={`${mono ? "tabular" : ""} ${small ? "text-[11px] break-all" : ""} ${accent ? "text-amber-700" : "text-ink-900"}`}
      >
        {v}
      </dd>
    </div>
  );
}
