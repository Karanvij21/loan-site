export const runtime = "edge";
export function GET() {
  return Response.json({
    ok: true,
    ts: new Date().toISOString(),
    integrations: {
      supabase: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
      lendingtree: Boolean(process.env.LENDINGTREE_API_KEY),
      plaid: Boolean(process.env.PLAID_CLIENT_ID && process.env.PLAID_SECRET),
      sendgrid: Boolean(process.env.SENDGRID_API_KEY),
    },
  });
}
