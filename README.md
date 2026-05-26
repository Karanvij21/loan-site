# Get Advance Loan: Lead-gen Site

A Next.js 15 + Tailwind v4 + Supabase loan-marketplace site, scaffolded for SEO/AEO/GEO and ready to forward leads to LendingTree once you have partner credentials.

## Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router, RSC) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Forms | React Hook Form + Zod |
| Animations | Framer Motion |
| Database | Supabase (Postgres) |
| Email | SendGrid |
| Lead forwarding | LendingTree (stub: plug in keys) |
| Hosting | Vercel |

## Quick start

```bash
# 1. Install
npm install

# 2. Configure env
cp .env.example .env.local
# Fill in NEXT_PUBLIC_SITE_URL at minimum.

# 3. Dev
npm run dev
# → http://localhost:3000
```

The form works end-to-end in dev with mocked LendingTree + skipped Supabase/SendGrid. Configure each integration in `.env.local` to activate it.

## What's included

### Pages
- `/`: homepage (hero, loan calculator, 4 product cards, 3-step process, example rates, FAQ, CTA)
- `/apply`: multi-step application (5 steps, Zod-validated, framer-motion transitions)
- `/apply/success`: confirmation
- `/loans/{personal,bad-credit,emergency,cash-advance}`: SEO landing pages, dynamic routes from `lib/products.ts`
- `/how-it-works`, `/rates-and-fees`, `/faq`, `/about`, `/contact`
- `/privacy`, `/terms`, `/disclosures`: legal (starter content: have counsel review)

### SEO / AEO / GEO infrastructure
- ✅ `app/sitemap.ts` → `/sitemap.xml` (auto-generated)
- ✅ `app/robots.ts` → `/robots.txt` (allowlists GPTBot, ClaudeBot, PerplexityBot, Google-Extended for AEO)
- ✅ `app/llms.txt/route.ts` → `/llms.txt` (emerging AI-crawler standard)
- ✅ `app/manifest.ts` → PWA manifest
- ✅ JSON-LD: Organization (FinancialService), WebSite (with SearchAction), LoanOrCredit, FAQPage, BreadcrumbList
- ✅ Per-page `<title>`, meta description, canonical, Open Graph, Twitter Card
- ✅ Semantic HTML (header/main/footer, ol/ul, dl/dt/dd, details/summary for FAQ)
- ✅ Accessibility: skip link, aria-labels, focus rings, semantic headings
- ✅ Security headers in `next.config.ts` (HSTS, X-Frame-Options, Referrer-Policy)
- ✅ Image optimization via `next/image` with AVIF/WebP
- ✅ Font optimization via `next/font` (Inter, swap)

### API routes
- `POST /api/lead`: validates with Zod, persists to Supabase, forwards to LendingTree, sends confirmation email
- `GET /api/health`: integration-status check

### Compliance
- TCPA consent checkbox with `consent_timestamp` logged
- E-SIGN Act consent checkbox
- Soft-credit-check disclosure
- Representative APR example in footer + rates page
- Privacy/Terms/Disclosures pages (starter templates: must be reviewed by counsel)

## Wiring up integrations

### 1. Supabase
1. Create a project at [supabase.com](https://supabase.com).
2. Run [`supabase/schema.sql`](./supabase/schema.sql) in the SQL editor.
3. Copy URL, anon key, and service-role key into `.env.local`.

### 2. LendingTree
1. Apply at [lendingtree.com/about/partner-with-us](https://www.lendingtree.com/about/partner-with-us/) (or via [CJ Affiliate](https://www.cj.com/) / [FlexOffers](https://www.flexoffers.com)).
2. On approval, you receive: API endpoint URL, partner ID, API key, and (optional) sub-ID.
3. Drop them into `.env.local`. The stub in [`lib/lendingtree.ts`](./lib/lendingtree.ts) will start forwarding live leads.
4. Adjust the payload shape in `lib/lendingtree.ts` to match the spec they send you.

### 3. SendGrid
1. Get an API key from [app.sendgrid.com](https://app.sendgrid.com).
2. Verify a sender email.
3. Add `SENDGRID_API_KEY` and `SENDGRID_FROM_EMAIL`.

### 4. Plaid (optional, future)
- For bank-verified income/identity. Get credentials at [dashboard.plaid.com](https://dashboard.plaid.com).
- A `/api/plaid` route can be added later: schema fields already exist for it.

### 5. Analytics
- Google Analytics 4: set `NEXT_PUBLIC_GA_ID`.
- Google Tag Manager: set `NEXT_PUBLIC_GTM_ID` (preferred: manage pixels in GTM).
- Microsoft Clarity (free heatmaps): set `NEXT_PUBLIC_CLARITY_ID`.

## SEO checklist before launch

- [ ] Replace `og-default.png` with a real 1200×630 OG image (create in Figma or Canva).
- [ ] Generate favicons (`favicon.ico`, `icon.svg`, `apple-icon.png`, `icon-192.png`, `icon-512.png`): use [realfavicongenerator.net](https://realfavicongenerator.net).
- [ ] Submit `/sitemap.xml` to [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters).
- [ ] Verify domain in GSC; add `GOOGLE_SITE_VERIFICATION` env var.
- [ ] Set up [Trustpilot](https://business.trustpilot.com/) profile and add `NEXT_PUBLIC_TRUSTPILOT_BUSINESS_ID`.
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev): target LCP < 2.5s, CLS < 0.1, INP < 200ms.
- [ ] Test JSON-LD with [Schema Markup Validator](https://validator.schema.org) and Google's [Rich Results Test](https://search.google.com/test/rich-results).
- [ ] Run [Lighthouse](https://developer.chrome.com/docs/lighthouse): aim for 95+ on Performance, SEO, Accessibility, Best Practices.

## AEO / GEO checklist (AI search)

- [ ] `/llms.txt` is live and lists key pages.
- [ ] FAQ pages have plain-language Q&A with FAQPage JSON-LD (done).
- [ ] First paragraph of every page answers the page's main question directly.
- [ ] Add structured author bios for any blog content (Person schema).
- [ ] Build internal links to /faq from every page.

## Deploy

```bash
# Push to GitHub, then:
# 1. Import the repo in Vercel
# 2. Set all env vars from .env.example
# 3. Set custom domain + Cloudflare in front (for WAF/bot mitigation)
```

## Project structure

```
app/
  layout.tsx              # global metadata, JSON-LD, GA/GTM, fonts
  page.tsx                # homepage
  globals.css             # Tailwind v4 + design tokens
  sitemap.ts              # /sitemap.xml
  robots.ts               # /robots.txt
  manifest.ts             # PWA manifest
  llms.txt/route.ts       # /llms.txt
  apply/
    page.tsx              # multi-step form entry
    success/page.tsx
  api/
    lead/route.ts         # POST: main lead endpoint
    health/route.ts       # GET: status
  loans/[slug]/page.tsx   # product landing pages
  how-it-works/page.tsx
  rates-and-fees/page.tsx
  faq/page.tsx
  about/page.tsx
  contact/page.tsx
  (legal)/
    layout.tsx
    privacy/page.tsx
    terms/page.tsx
    disclosures/page.tsx
  not-found.tsx
components/
  layout/{Header,Footer}.tsx
  home/{LoanCalculator,TrustBar}.tsx
  apply/{ApplicationForm,StepProgress,Field}.tsx
  apply/steps/Step{1-5}*.tsx
  seo/JsonLd.tsx
lib/
  site.ts                 # site config (name, URL, social)
  schema.ts               # Zod schemas + US_STATES
  products.ts             # loan-product page content
  utils.ts                # cn(), formatCurrency()
  supabase.ts             # admin client
  lendingtree.ts          # forwardToLendingTree()
  email.ts                # sendApplicationConfirmation()
supabase/
  schema.sql              # leads table DDL
```
