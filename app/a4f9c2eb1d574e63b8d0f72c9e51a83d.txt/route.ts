import { INDEXNOW_KEY } from "@/lib/indexnow";

/**
 * IndexNow verification key file. Served at /<key>.txt per the
 * IndexNow protocol. Each search engine that supports IndexNow
 * fetches this file once to confirm we control the domain before
 * accepting URL submissions signed with the same key.
 *
 * Plain text, no extra whitespace, no newline.
 */
export function GET() {
  return new Response(INDEXNOW_KEY, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
