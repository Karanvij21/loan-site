/**
 * OneSignal Web Push helpers.
 *
 * The SDK is loaded in app/layout.tsx (gated by NEXT_PUBLIC_ONESIGNAL_APP_ID).
 * These helpers are no-ops when the SDK isn't loaded, so callers don't need
 * to know whether OneSignal is configured.
 *
 * Permission prompt is requested only after the visitor demonstrates intent
 * (completes Step 1 of the apply form). This dramatically improves grant rate
 * vs. asking on first load.
 */

type OneSignalDeferred = Array<(OneSignal: OneSignalSDK) => void>;

type OneSignalSDK = {
  init: (config: { appId: string; allowLocalhostAsSecureOrigin?: boolean; serviceWorkerParam?: { scope: string }; serviceWorkerPath?: string }) => Promise<void>;
  Slidedown: {
    promptPush: (opts?: { force?: boolean }) => Promise<void>;
  };
  User: {
    PushSubscription: {
      optIn: () => Promise<void>;
      readonly optedIn: boolean;
    };
    addTag: (key: string, value: string) => Promise<void>;
    addTags: (tags: Record<string, string>) => Promise<void>;
  };
  Notifications: {
    permission: NotificationPermission;
    requestPermission: () => Promise<NotificationPermission>;
  };
};

declare global {
  interface Window {
    OneSignalDeferred?: OneSignalDeferred;
    OneSignal?: OneSignalSDK;
  }
}

function withOneSignal(fn: (OneSignal: OneSignalSDK) => void) {
  if (typeof window === "undefined") return;
  // OneSignal SDK pattern: push a callback that runs when ready
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  window.OneSignalDeferred.push(fn);
}

/** Prompt the visitor to enable push notifications. Call only after intent
 *  (e.g., they completed Step 1 of the apply form). */
export function requestPushPermission() {
  withOneSignal(async (OneSignal) => {
    try {
      // Show the slidedown (gentler than the native prompt — better grant rates)
      await OneSignal.Slidedown.promptPush();
    } catch {
      // Permission was previously denied or other issue. Silent.
    }
  });
}

/** Tag the subscriber so OneSignal can segment for targeted pushes. */
export function tagSubscriber(tags: Record<string, string | number>) {
  withOneSignal(async (OneSignal) => {
    try {
      const stringTags = Object.fromEntries(
        Object.entries(tags).map(([k, v]) => [k, String(v)])
      );
      await OneSignal.User.addTags(stringTags);
    } catch {
      // Silent fail
    }
  });
}

/** Get the current visitor's OneSignal subscription ID, if subscribed.
 *  Returns null when OneSignal isn't loaded or the user hasn't opted in.
 *  Used by /api/lead to fire a server-side push targeted at THIS user. */
export function getOneSignalSubscriptionId(): Promise<string | null> {
  if (typeof window === "undefined") return Promise.resolve(null);
  return new Promise((resolve) => {
    let resolved = false;
    const done = (id: string | null) => {
      if (resolved) return;
      resolved = true;
      resolve(id);
    };
    // Race: if OneSignal isn't loaded within 2 seconds, give up
    const timeout = setTimeout(() => done(null), 2000);
    withOneSignal((OneSignal) => {
      try {
        const sub = OneSignal.User?.PushSubscription;
        const id = (sub as unknown as { id?: string })?.id ?? null;
        clearTimeout(timeout);
        done(id);
      } catch {
        clearTimeout(timeout);
        done(null);
      }
    });
  });
}
