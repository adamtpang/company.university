"use client";

import type { ReactNode } from "react";
import posthog from "posthog-js";
import { track } from "@vercel/analytics";

/* ================================================================
   PRIMARY CTA BUTTON
   The mailto conversion button used across every page. On click it
   fires a single named conversion event to both PostHog and Vercel
   Analytics. The visual output is identical to the prior version.
================================================================ */

export function Cta({
  href,
  children,
  size = "md",
  label,
}: {
  href: string;
  children: ReactNode;
  size?: "sm" | "md";
  label?: string;
}) {
  const sizing =
    size === "sm" ? "px-4 py-2 text-[10.5px]" : "px-7 py-4 text-[12px]";

  const cta = label ?? (typeof children === "string" ? children : href);

  function handleClick() {
    const props = { cta, href };
    posthog?.capture?.("cta_click", props);
    track("cta_click", props);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center gap-3 rounded-[2px] bg-accent font-mono font-medium uppercase tracking-[0.18em] text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-deep ${sizing}`}
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}
