"use client";

import { useEffect, useRef } from "react";
import { requestPushPermission, getOneSignalSubscriptionId, tagSubscriber } from "@/lib/push";

/**
 * Renders nothing visible. Watches for visitor engagement on the homepage
 * (scroll depth + dwell time). When the thresholds are crossed and the
 * visitor hasn't already subscribed, prompts for push permission, then
 * schedules the "never started" drip via /api/never-started/schedule.
 *
 * Thresholds tuned to fire roughly when the visitor has finished reading
 * the hero + scrolled into the loan products section (clear interest,
 * not enough commitment to start the form).
 */
export function HomepagePushPrompt() {
  const fired = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof Notification === "undefined") return;
    // Skip if already granted or denied — re-asking is pointless / annoying.
    if (Notification.permission !== "default") return;

    const sessionFlag = "fla_homepage_prompt_shown";
    try {
      if (sessionStorage.getItem(sessionFlag)) return;
    } catch { /* ignore */ }

    const startedAt = Date.now();
    let scrolledPast = false;

    const onScroll = () => {
      // Have they scrolled past ~50% of the viewport-height worth of content?
      // Captures the "interested but not yet committing" moment.
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.6;
      if (scrolled > threshold) scrolledPast = true;
    };

    const tryFire = async () => {
      if (fired.current) return;
      const dwellOk = Date.now() - startedAt > 30_000; // 30 seconds on page
      if (!scrolledPast || !dwellOk) return;
      fired.current = true;
      try {
        sessionStorage.setItem(sessionFlag, "1");
      } catch { /* ignore */ }

      requestPushPermission();
      tagSubscriber({ funnel_stage: "subscribed_homepage" });

      // After a couple seconds, grab the subscription id and schedule the drip.
      setTimeout(async () => {
        const id = await getOneSignalSubscriptionId();
        if (!id) return;
        fetch("/api/never-started/schedule", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ oneSignalId: id }),
        }).catch(() => { /* best-effort */ });
      }, 3000);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const intervalId = window.setInterval(tryFire, 4000); // poll every 4s

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(intervalId);
    };
  }, []);

  return null;
}
