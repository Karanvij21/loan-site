/**
 * Client-side event tracking.
 *
 * Events push to `window.dataLayer` so they reach BOTH:
 *   - GA4 directly (the gtag.js script in app/layout.tsx subscribes to dataLayer)
 *   - GTM container (which can fan out to Meta Pixel, TikTok Pixel, conversion
 *     goals, LendingTree partner pixel, etc. when configured in the GTM UI)
 *
 * Event taxonomy chosen to map cleanly to GA4 recommended events:
 *   - apply_started      -> custom event, signals top-of-funnel
 *   - step_completed     -> custom event with `step_index` + `step_name`
 *   - lead_submitted     -> custom event with `value` (loan amount) + `currency`
 *
 * The standard GA4 conversion event for lead-gen is `generate_lead`. We fire
 * both `lead_submitted` (semantic, for our own analysis) AND `generate_lead`
 * (so GA4's built-in conversion reports pick it up automatically).
 */

type EventName =
  | "apply_started"
  | "step_completed"
  | "lead_submitted"
  | "generate_lead"
  | "lead_form_view"
  | "lead_form_message";

type EventParams = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function track(event: EventName, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      ...params,
    });
  } catch {
    // Tracking must never throw into the UI.
  }
}

/* Convenience wrappers so call sites stay readable */

export function trackApplyStarted(amount?: number) {
  track("apply_started", amount ? { initial_amount: amount } : {});
}

export function trackStepCompleted(stepIndex: number, stepName: string) {
  track("step_completed", {
    step_index: stepIndex,
    step_name: stepName,
  });
}

/**
 * Fired when an external lead-capture iframe (Round Sky, LendingTree)
 * renders. Lets us measure CTA → form-view rate even when we don't
 * own the form submission event.
 */
export function trackLeadFormView(opts: {
  provider: string;
  form_id: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}) {
  track("lead_form_view", opts);
}

/**
 * Fired when the iframe origin postMessages back to us. Round Sky's
 * messages (if any) come through here with their raw payload, so GTM
 * can route specific message types to conversion goals when configured.
 */
export function trackLeadFormMessage(opts: {
  provider: string;
  form_id: string;
  message_type?: string;
  payload?: unknown;
}) {
  track("lead_form_message", opts);
}

export function trackLeadSubmitted(opts: {
  amount: number;
  purpose: string;
  creditRating: string;
  state: string;
  leadId?: string;
}) {
  const params = {
    value: opts.amount,
    currency: "USD",
    loan_amount: opts.amount,
    loan_purpose: opts.purpose,
    credit_rating: opts.creditRating,
    state: opts.state,
    lead_id: opts.leadId,
  };
  track("lead_submitted", params);
  // GA4 recommended event for lead generation. Picks up conversion automatically.
  track("generate_lead", params);
}
