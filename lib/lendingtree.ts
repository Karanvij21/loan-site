import type { FullApplication } from "@/lib/schema";

export type LendingTreeResponse = {
  ok: boolean;
  leadId?: string;
  offers?: unknown[];
  raw?: unknown;
  error?: string;
};

/**
 * Forward a lead to LendingTree.
 *
 * NOTE: LendingTree's partner API surface and exact endpoint URL depend on the
 * partner program you join (direct, CJ Affiliate, FlexOffers, etc.). This stub
 * mirrors the typical XML/JSON ping-post pattern. Replace `LENDINGTREE_API_URL`
 * and the body shape with the spec you receive at onboarding.
 *
 * Until env vars are configured, this returns a mock OK response so the form
 * works end-to-end in development.
 */
export async function forwardToLendingTree(
  data: FullApplication,
  meta: { ip?: string | null; userAgent?: string | null; referrer?: string | null }
): Promise<LendingTreeResponse> {
  const url = process.env.LENDINGTREE_API_URL;
  const partnerId = process.env.LENDINGTREE_PARTNER_ID;
  const apiKey = process.env.LENDINGTREE_API_KEY;
  const subId = process.env.LENDINGTREE_SUB_ID;

  if (!url || !partnerId || !apiKey) {
    // Dev-mode mock so the funnel works before partner credentials arrive.
    return { ok: true, leadId: `MOCK-${Date.now()}`, raw: { mocked: true } };
  }

  const payload = {
    partner_id: partnerId,
    sub_id: subId,
    api_key: apiKey,
    lead: {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      dob: data.dob,
      ssn_last_4: data.ssnLast4,
      address: {
        street: data.street,
        city: data.city,
        state: data.state,
        zip: data.zip,
      },
      loan: {
        amount: data.amount,
        purpose: data.purpose,
        credit_rating: data.creditRating,
      },
      employment: {
        status: data.employmentStatus,
        employer: data.employerName,
        monthly_income: data.monthlyIncome,
        pay_frequency: data.payFrequency,
        next_pay_date: data.nextPayDate,
      },
      banking: {
        has_account: data.hasBankAccount,
        direct_deposit: data.directDeposit,
      },
      consent: {
        tcpa: data.tcpaConsent,
        ec: data.ecConsent,
        timestamp: new Date().toISOString(),
        ip: meta.ip ?? null,
        user_agent: meta.userAgent ?? null,
        referrer: meta.referrer ?? null,
      },
    },
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      return { ok: false, error: `LendingTree ${res.status}`, raw: json };
    }
    return { ok: true, leadId: json.lead_id, offers: json.offers, raw: json };
  } catch (e: unknown) {
    return { ok: false, error: e instanceof Error ? e.message : "Network error" };
  }
}
