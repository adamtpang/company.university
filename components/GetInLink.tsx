"use client";

import type { ReactNode } from "react";
import posthog from "posthog-js";
import { track } from "@vercel/analytics";

/* ================================================================
   GET IN LINK
   The per company "How to get in" links on the /getin index. These
   are the entry point into the get matched funnel, so a click fires
   the same named conversion event to PostHog and Vercel Analytics.
   Visual output is identical to a plain anchor.
================================================================ */

export function GetInLink({
  href,
  company,
  className,
  children,
}: {
  href: string;
  company: string;
  className?: string;
  children: ReactNode;
}) {
  function handleClick() {
    const props = { cta: "getin_how_to_get_in", company };
    posthog?.capture?.("cta_click", props);
    track("cta_click", props);
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
