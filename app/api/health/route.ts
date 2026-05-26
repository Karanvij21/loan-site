export const runtime = "edge";

/**
 * Status endpoint. Reports basic OK plus which integrations are configured.
 * The integration-status detail is gated behind a token to prevent
 * fingerprinting. Set HEALTH_TOKEN in env to enable detailed reporting.
 *
 *   curl https://example.com/api/health           -> { ok: true, ts }
 *   curl -H "x-health-token: <token>" .../health  -> includes integrations
 */
export function GET(req: Request) {
  const token = process.env.HEALTH_TOKEN;
  const provided = req.headers.get("x-health-token");
  const authed = Boolean(token && provided && provided === token);

  return Response.json({
    ok: true,
    ts: new Date().toISOString(),
    ...(authed && {
      integrations: {
        supabase: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
        lendingtree: Boolean(process.env.LENDINGTREE_API_KEY),
        plaid: Boolean(process.env.PLAID_CLIENT_ID && process.env.PLAID_SECRET),
        sendgrid: Boolean(process.env.SENDGRID_API_KEY),
      },
    }),
  });
}
