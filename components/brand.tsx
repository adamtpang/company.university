import type { ReactNode } from "react";

/* ================================================================
   SHARED BRAND PIECES
   Imported by the homepage and the /board page so the mark and
   the CTA button stay identical everywhere.
================================================================ */

/* Stacked blocks suggesting a campus "U". The base block carries
   the accent. */
export function Mark({
  className = "h-6 w-6",
  base = "var(--color-accent)",
}: {
  className?: string;
  base?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="6.5" height="6.5" fill="currentColor" />
      <rect x="2" y="10" width="6.5" height="6.5" fill="currentColor" />
      <rect x="15.5" y="2" width="6.5" height="6.5" fill="currentColor" />
      <rect x="15.5" y="10" width="6.5" height="6.5" fill="currentColor" />
      <rect x="2" y="18" width="20" height="4.5" fill={base} />
    </svg>
  );
}

export function Cta({
  href,
  children,
  size = "md",
}: {
  href: string;
  children: ReactNode;
  size?: "sm" | "md";
}) {
  const sizing =
    size === "sm" ? "px-4 py-2 text-[10.5px]" : "px-7 py-4 text-[12px]";
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-3 rounded-[2px] bg-accent font-mono font-medium uppercase tracking-[0.18em] text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-deep ${sizing}`}
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}
