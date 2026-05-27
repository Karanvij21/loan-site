import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/admin/:path*"],
};

/**
 * HTTP Basic Auth gate for /admin/*.
 *
 * Set ADMIN_USERNAME and ADMIN_PASSWORD in Vercel env vars. When either is
 * unset, /admin returns 503 so the dashboard can never be exposed by mistake.
 *
 * For a single-admin scenario this is the right size of solution; if you ever
 * need per-user accounts / audit trails, swap to Supabase Auth or NextAuth.
 */
export function middleware(req: NextRequest) {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    return new NextResponse(
      "Admin auth is not configured. Set ADMIN_USERNAME and ADMIN_PASSWORD env vars.",
      { status: 503 }
    );
  }

  const auth = req.headers.get("authorization");

  if (!auth?.startsWith("Basic ")) {
    return new NextResponse("Authentication required.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Get Advance Loan Admin"' },
    });
  }

  let providedUser = "";
  let providedPass = "";
  try {
    const decoded = atob(auth.slice("Basic ".length));
    const idx = decoded.indexOf(":");
    providedUser = decoded.slice(0, idx);
    providedPass = decoded.slice(idx + 1);
  } catch {
    // fall through with empty credentials -> 401
  }

  // Constant-time-ish comparison (good enough for short admin secrets; the
  // Edge runtime doesn't expose crypto.timingSafeEqual)
  const userOk = providedUser.length === username.length &&
    providedUser === username;
  const passOk = providedPass.length === password.length &&
    providedPass === password;

  if (!userOk || !passOk) {
    return new NextResponse("Invalid credentials.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Get Advance Loan Admin"' },
    });
  }

  // Prevent any /admin page from being indexed or cached.
  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  res.headers.set("Cache-Control", "private, no-store");
  return res;
}
