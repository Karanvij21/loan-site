"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { trackLeadFormView, trackLeadFormMessage } from "@/lib/tracking";

/**
 * Round Sky form embed.
 *
 * Round Sky's stock snippet uses `document.write` to inject a script tag,
 * which silently wipes the document when run after page load, so it's
 * broken under Next.js's App Router. This component does the same setup
 * the right way:
 *
 *   1. Sets the `inputOptions` object on `window` (Round Sky's init.php
 *      reads it via the encoded URL param AND falls back to the global).
 *   2. Pipes Google Ads UTMs into SubID / SubID2 / SubID3 so Round Sky's
 *      back-end reporting carries them through to per-keyword payout data.
 *   3. Loads Round Sky's JSON polyfill and init script in order via
 *      onload chaining (avoids a flash of broken state on slow networks).
 *   4. Listens for `postMessage` from `rndframe.com`, if/when Round Sky
 *      dispatches form-event messages, we forward them into dataLayer
 *      so GTM can route them to GA4 conversions.
 *   5. Fires a `lead_form_view` event on mount so we can measure
 *      CTA → form-view rate even though we don't own the submission event.
 *
 * UserID is Round Sky's affiliate identifier, public-ish (it's in the
 * page source they hand you) but kept in a constant so we never typo it.
 */
const ROUND_SKY_USER_ID = "Rleuv25GxLB9nyI9OH3yVC77rbGGmVDbJPUzXvNPewI.";
const FORM_ID = "INSTALLMENT_STEP";
const RS_HELPER_SRC = "https://www.rndframe.com/server/web/js/json.min.js";
const RS_INIT_BASE = "https://www.rndframe.com/server/init.php";
const RS_ALLOWED_ORIGIN = /\.rndframe\.com$|^https:\/\/(?:www\.)?rndframe\.com$/i;

declare global {
  interface Window {
    inputOptions?: Record<string, unknown>;
    __roundSkyMounted?: boolean;
  }
}

export function RoundSkyForm() {
  const targetRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    // Hot-reload / strict-mode double-mount guard. Round Sky's init script
    // is not idempotent, running it twice creates two stacked forms.
    if (window.__roundSkyMounted) return;
    window.__roundSkyMounted = true;

    const utm_source = searchParams.get("utm_source") ?? "";
    const utm_medium = searchParams.get("utm_medium") ?? "";
    const utm_campaign = searchParams.get("utm_campaign") ?? "";
    const utm_term = searchParams.get("utm_term") ?? "";
    const utm_content = searchParams.get("utm_content") ?? "";

    const inputOptions = {
      UserID: ROUND_SKY_USER_ID,
      Style: "STYLE1",
      FormID: FORM_ID,
      // SubID dimensions surface in Round Sky's per-source payout reports.
      // Map to Google Ads's standard UTM scheme so spend attribution lines up.
      SubID: utm_source,
      SubID2: utm_campaign,
      SubID3: utm_term || utm_content,
      Domain: "",
      Height: "AUTO",
      StepAmountSelect: "buttons",
      TargetDivID: "rsForm",
    };

    window.inputOptions = inputOptions;

    // Fire the view event before the iframe even starts loading so we still
    // capture the impression if the network fails or an ad blocker eats the
    // Round Sky scripts.
    trackLeadFormView({
      provider: "round_sky",
      form_id: FORM_ID,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    });

    // postMessage bridge, Round Sky may or may not emit events from inside
    // the iframe. If they ever do, the payload reaches dataLayer here and
    // GTM can route specific message types to GA4 conversion goals.
    const onMessage = (e: MessageEvent) => {
      if (!e.origin || !RS_ALLOWED_ORIGIN.test(e.origin)) return;
      let payload: unknown = e.data;
      let messageType: string | undefined;
      if (payload && typeof payload === "object") {
        const obj = payload as Record<string, unknown>;
        const t = obj.type ?? obj.event ?? obj.name;
        if (typeof t === "string") messageType = t;
      } else if (typeof payload === "string") {
        messageType = payload;
      }
      trackLeadFormMessage({
        provider: "round_sky",
        form_id: FORM_ID,
        message_type: messageType,
        payload,
      });
    };
    window.addEventListener("message", onMessage);

    // Load JSON helper first, then the init script. Order matters: init.php
    // uses JSON.stringify on older browsers via the helper.
    const helper = document.createElement("script");
    helper.src = RS_HELPER_SRC;
    helper.async = true;

    const init = document.createElement("script");
    init.src = `${RS_INIT_BASE}?vn=${encodeURIComponent(JSON.stringify(inputOptions))}`;
    init.async = true;
    init.onload = () => setStatus("ready");
    init.onerror = () => setStatus("error");

    helper.onload = () => document.body.appendChild(init);
    helper.onerror = () => {
      // Helper isn't strictly required on modern browsers, try init anyway.
      document.body.appendChild(init);
    };

    document.body.appendChild(helper);

    // Don't tear down the scripts on unmount, Round Sky binds listeners
    // and removing the scripts mid-flight orphans the form. The mount guard
    // above is what prevents double-init across remounts.
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, [searchParams]);

  return (
    <>
      {status === "loading" && (
        <div className="grid min-h-[480px] place-items-center text-[14px] text-ink-500">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-cream-300 border-t-forest-700" />
            <p className="mt-4">Loading secure application…</p>
          </div>
        </div>
      )}
      {status === "error" && (
        <div className="rounded-lg border border-cream-300 bg-cream-50 p-6 text-center text-[14px] text-ink-700">
          <p>The application form didn&rsquo;t load. This sometimes happens with strict ad blockers.</p>
          <p className="mt-2">Disable any blocker for this page and reload, or use our <a href="/apply-legacy" className="underline decoration-cream-400 underline-offset-2 hover:text-ink-900 hover:decoration-ink-900">backup application form</a>.</p>
        </div>
      )}
      {/* Round Sky renders the form into this div via inputOptions.TargetDivID */}
      <div id="rsForm" ref={targetRef} className={status === "ready" ? "" : "hidden"} />
    </>
  );
}
