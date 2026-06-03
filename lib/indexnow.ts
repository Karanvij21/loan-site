/**
 * IndexNow integration.
 *
 * IndexNow (indexnow.org) is a protocol for telling search engines about
 * new and updated URLs without waiting for a recrawl. Bing, Yandex,
 * Seznam, Naver, and Yep all honour it. Google does not, so GSC manual
 * submission remains necessary.
 *
 * Verification flow: each domain hosts a key file at /<key>.txt
 * containing the key as plain text. The search engine fetches that file
 * to confirm submission authority before honouring the URLs.
 *
 * The key is public (it's served at a known URL); it does not need to be
 * secret. Pinning it in code makes it easy to rotate by changing this
 * constant + the key-file route.
 */

import { siteConfig } from "@/lib/site";

/**
 * IndexNow verification key for getadvanceloan.com.
 *
 * 32+ hex chars per IndexNow spec. Public, served at /<key>.txt.
 * To rotate: change this value and the key-file route filename.
 */
export const INDEXNOW_KEY = "a4f9c2eb1d574e63b8d0f72c9e51a83d";

export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

/**
 * Submit a batch of URLs to IndexNow. Returns the HTTP status code.
 * Per IndexNow spec, a 200 status means accepted; 202 means accepted
 * but not yet processed; other codes are errors documented at
 * https://www.indexnow.org/documentation.
 *
 * Use sparingly. IndexNow rate-limits aggressive senders; submit in
 * batches of new/changed URLs rather than the full sitemap every push.
 */
export async function submitToIndexNow(urls: string[]): Promise<{
  status: number;
  body: string;
}> {
  const host = new URL(siteConfig.url).host;
  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${siteConfig.url}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  return { status: res.status, body: await res.text() };
}
