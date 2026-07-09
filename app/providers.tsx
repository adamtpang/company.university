"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

/* ================================================================
   ANALYTICS PROVIDER
   Client side PostHog for funnels, session replay, autocapture,
   and surveys. No op when NEXT_PUBLIC_POSTHOG_KEY is unset, so the
   build and the live site work with no key configured.
================================================================ */

export function Providers({ children }: { children: React.ReactNode }) {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

  useEffect(() => {
    if (!key) return;
    if (posthog.__loaded) return;
    posthog.init(key, {
      api_host: host,
      capture_pageview: true,
      capture_pageleave: true,
      session_recording: { maskAllInputs: true },
      autocapture: true,
    });
  }, [key, host]);

  if (!key) return <>{children}</>;

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
