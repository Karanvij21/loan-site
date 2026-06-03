import { NextResponse } from "next/server";
import { submitToIndexNow } from "@/lib/indexnow";
import { siteConfig } from "@/lib/site";
import { states } from "@/lib/states";
import { amounts } from "@/lib/amounts";
import { useCases } from "@/lib/useCases";
import { creditBands } from "@/lib/creditBands";
import { employmentTypes } from "@/lib/employment";
import { comparisons } from "@/lib/comparisons";
import { cities } from "@/lib/cities";
import { guides } from "@/lib/guides";
import { questions } from "@/lib/questions";
import { glossaryTerms } from "@/lib/glossary";

/**
 * IndexNow submission endpoint.
 *
 * POST /api/indexnow/submit
 *
 * Body (optional): { urls: string[] }
 *   - If urls is present, submits exactly that list.
 *   - If urls is absent, submits a curated "high-priority" set:
 *     all top-level routes plus all newly-added Spanish + question
 *     + guide + data URLs. Avoids re-submitting the long tail of
 *     state x city pages, which IndexNow rate-limits anyway.
 *
 * Auth: requires INDEXNOW_ADMIN_TOKEN env var match in the
 * Authorization header (Bearer <token>). Set this before invoking
 * so random POSTs don't burn rate-limit budget.
 *
 * Bing, Yandex, Seznam, Naver, and Yep honour IndexNow. Google does
 * not, so this complements (does not replace) GSC manual submission.
 */
export async function POST(req: Request) {
  const adminToken = process.env.INDEXNOW_ADMIN_TOKEN;
  if (!adminToken) {
    return NextResponse.json(
      { error: "INDEXNOW_ADMIN_TOKEN not configured on server" },
      { status: 503 },
    );
  }
  const auth = req.headers.get("authorization") ?? "";
  if (auth !== `Bearer ${adminToken}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let urls: string[];
  try {
    const body = (await req.json().catch(() => ({}))) as { urls?: string[] };
    urls = Array.isArray(body.urls) && body.urls.length > 0 ? body.urls : defaultUrlSet();
  } catch {
    urls = defaultUrlSet();
  }

  if (urls.length === 0) {
    return NextResponse.json({ error: "No URLs to submit" }, { status: 400 });
  }

  const result = await submitToIndexNow(urls);
  return NextResponse.json({
    submitted: urls.length,
    indexnowStatus: result.status,
    indexnowBody: result.body,
  });
}

function defaultUrlSet(): string[] {
  const base = siteConfig.url;
  const core = [
    "/",
    "/apply",
    "/personal-loans",
    "/how-it-works",
    "/rates-and-fees",
    "/faq",
    "/about",
    "/contact",
    "/disclosures",
    "/privacy",
    "/terms",
    "/learn",
    "/questions",
    "/glossary",
    "/calculators",
    "/calculators/loan-payment",
    "/calculators/apr",
    "/calculators/debt-payoff",
    "/calculators/affordability",
    "/compare",
    "/editorial-policy",
    "/data/personal-loan-apr-by-state",
    "/loans/personal",
    "/loans/bad-credit",
    "/loans/emergency",
    "/loans/amount",
    // Spanish
    "/es",
    "/es/loans/personal",
    "/es/loans/bad-credit",
    "/es/loans/emergency",
    "/es/how-it-works",
    "/es/faq",
    "/es/apply",
    "/es/disclosures",
  ];

  const stateUrls = states.map((s) => `/personal-loans/${s.slug}`);
  const amountUrls = amounts.map((a) => `/loans/amount/${a.slug}`);
  const useCaseUrls = Object.keys(useCases).map((slug) => `/loans/${slug}`);
  const creditBandUrls = Object.keys(creditBands).map((slug) => `/loans/${slug}`);
  const employmentUrls = Object.keys(employmentTypes).map((slug) => `/loans/${slug}`);
  const compareUrls = Object.keys(comparisons).map((slug) => `/compare/${slug}`);
  const guideUrls = guides.map((g) => `/learn/${g.slug}`);
  const questionUrls = questions.map((q) => `/questions/${q.slug}`);
  const glossaryUrls = glossaryTerms.map((t) => `/glossary/${t.slug}`);
  // Sampled city URLs: skip exhaustive city list to stay under IndexNow's
  // per-submission cap (10,000 URLs) and avoid burning rate-limit budget
  // on the long tail. Top 50 cities by population suffice for first push.
  const topCityUrls = cities
    .slice()
    .sort((a, b) => {
      const aNum = parseFloat(a.population) * (a.population.endsWith("M") ? 1000 : 1);
      const bNum = parseFloat(b.population) * (b.population.endsWith("M") ? 1000 : 1);
      return bNum - aNum;
    })
    .slice(0, 50)
    .map((c) => `/personal-loans/${c.stateSlug}/${c.slug}`);

  const all = [
    ...core,
    ...stateUrls,
    ...amountUrls,
    ...useCaseUrls,
    ...creditBandUrls,
    ...employmentUrls,
    ...compareUrls,
    ...guideUrls,
    ...questionUrls,
    ...glossaryUrls,
    ...topCityUrls,
  ];

  // De-dupe and absolute-ise.
  const seen = new Set<string>();
  const out: string[] = [];
  for (const u of all) {
    const abs = u.startsWith("http") ? u : `${base}${u}`;
    if (!seen.has(abs)) {
      seen.add(abs);
      out.push(abs);
    }
  }
  return out;
}
