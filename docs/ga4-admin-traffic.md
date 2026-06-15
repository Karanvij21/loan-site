# /admin/traffic — GA4 Reporting API setup

How to wire the Google Analytics Data API behind the admin traffic dashboard.
Service-account based, no per-user OAuth, works on Vercel out of the box.

One-time setup. Once the three env vars are in Vercel, the dashboard pulls
live data on every load.

## What you'll end up with

`https://getadvanceloan.com/admin/traffic` shows:

- Overview cards: sessions, users, page views, engaged sessions, avg session, events
- Top pages by views (last 7/28/90 days, switchable)
- Top events (watch `lead_form_view`, `apply_started`, `step_completed`, `lead_submitted`, `generate_lead`)
- Traffic sources (source + medium)
- Landing pages (sessions, engaged, bounce rate)
- Top countries

All behind the same Basic Auth gate as `/admin/leads`.

## Step 1: Find your GA4 numeric property ID

This is NOT the `G-XXXXXXXXXX` measurement ID. It's a separate numeric ID.

1. Open Google Analytics at analytics.google.com
2. Bottom-left → Admin (gear icon)
3. Property column → Property settings
4. Copy "Property ID" (looks like `123456789`)

That's `GA4_PROPERTY_ID`.

## Step 2: Create a Google Cloud project (or use an existing one)

1. Go to console.cloud.google.com
2. Top bar → project selector → New Project
3. Name it something like "getadvanceloan-analytics"
4. Click Create
5. Once created, make sure it's the selected project in the top bar

## Step 3: Enable the Google Analytics Data API

1. Console → APIs & Services → Library
2. Search "Google Analytics Data API"
3. Click → Enable

## Step 4: Create a service account

1. Console → IAM & Admin → Service Accounts
2. Click "+ Create Service Account" at the top
3. Service account name: `ga4-reporter` (or whatever)
4. Click Create and Continue
5. Skip the "Grant this service account access to project" step (click Continue)
6. Skip the "Grant users access" step (click Done)
7. You're back at the service accounts list. Click the new account's email.

## Step 5: Generate a JSON key

1. On the service account page → Keys tab
2. Add Key → Create new key → JSON → Create
3. A JSON file downloads. Keep it secure; treat it like a password.

## Step 6: Extract the two values from the JSON

Open the JSON file. You'll see something like:

```json
{
  "type": "service_account",
  "project_id": "...",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAI...\n-----END PRIVATE KEY-----\n",
  "client_email": "ga4-reporter@your-project.iam.gserviceaccount.com",
  ...
}
```

You need:

- `client_email` → goes into `GOOGLE_CLIENT_EMAIL`
- `private_key` → goes into `GOOGLE_PRIVATE_KEY` (including the
  `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` lines and
  all the `\n` newline characters)

## Step 7: Grant the service account access to your GA4 property

The service account exists in Google Cloud, but Analytics doesn't know about
it yet. Wire them together:

1. Go back to analytics.google.com
2. Admin → Property → Property Access Management
3. Click the blue "+" → Add users
4. Email address: paste the `client_email` from the JSON
5. Roles: select **Viewer** (read-only is enough for reporting)
6. Click Add

The service account can now read your GA4 property.

## Step 8: Add the env vars to Vercel

1. Vercel dashboard → your project → Settings → Environment Variables
2. Add each of these for **Production**, **Preview**, and **Development**:

| Name | Value |
|---|---|
| `GA4_PROPERTY_ID` | The numeric property ID from Step 1 (e.g. `123456789`) |
| `GOOGLE_CLIENT_EMAIL` | The `client_email` from the JSON (Step 6) |
| `GOOGLE_PRIVATE_KEY` | The `private_key` from the JSON (Step 6), full multi-line string including `BEGIN`/`END` markers |

Vercel's UI handles the multi-line private key fine. If you're setting via
the CLI (`vercel env add`), paste the entire private_key string including
the literal `\n` characters; the runtime substitutes real newlines before
handing it to the SDK.

## Step 9: Redeploy

Either push a new commit or trigger a redeploy in Vercel. The env vars
only take effect on builds AFTER they're set.

## Step 10: Verify

Visit `https://getadvanceloan.com/admin/traffic`. You should see:

- Overview cards with real numbers (zeros are fine if the site is new)
- Top pages, events, sources, landings, countries populated

If you see "GA4 not configured", one of the three env vars isn't set or
the value is wrong. Check the Vercel env vars and redeploy.

If you see "Failed to load …", the Vercel function logs will show the
underlying error. Common causes:

- Service account doesn't have access to the property (re-do Step 7)
- Wrong property ID (re-check Step 1, must be numeric, not `G-XXXX`)
- Private key got mangled (re-paste the full value, preserve all newlines)
- The Data API isn't enabled in the Cloud project (Step 3)

## Cost

GA4 Data API is free for reasonable usage. The current dashboard runs
about 6 queries per page load. Vercel will rate-limit you with their own
function execution caps long before GA4's quota becomes a concern.

## Security

The service account credentials are in env vars, never in the code or
git history. The admin dashboard itself is behind HTTP Basic Auth via
`middleware.ts`, so the credentials are never exposed to public visitors.

`lib/ga4.ts` imports `server-only` to make sure the credentials never
end up in a client bundle even if accidentally re-exported.

## Rotation

Service account JSON keys don't expire by default. If you want to
rotate periodically (recommended every 6-12 months):

1. Create a new key (Step 5) on the same service account
2. Update the Vercel env vars
3. Redeploy
4. Delete the old key in the Cloud console
