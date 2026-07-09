/* ================================================================
   SHARED BRAND PIECES
   Imported by the homepage and the /board page so the mark and
   the CTA button stay identical everywhere. Cta lives in its own
   client module and is re-exported here so existing imports of
   { Mark, Cta } from "@/components/brand" keep working.
================================================================ */

export { Cta } from "./Cta";

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
