import type { Metadata } from "next";
import { content, PILOT_MAILTO } from "@/content";
import { Mark, Cta } from "@/components/brand";
import PilotOffer from "@/components/PilotOffer";

export const metadata: Metadata = {
  title: "The Pilot · Company University",
  description:
    "The 6-week Company College pilot: $60,000. Curriculum built around your product, a weekly cohort at Network School, a flagship demo day, and a hiring funnel from the graduates.",
};

const NAV = [
  { label: "Home", href: "/" },
  { label: "Companies", href: "/board" },
  { label: "Skills", href: "/skills" },
];

export default function PilotPage() {
  return (
    <>
      {/* utility strip */}
      <div className="border-b border-paper/10 bg-ink-2">
        <div className="mx-auto flex h-9 max-w-5xl items-center justify-between px-6 font-mono text-[9.5px] uppercase tracking-[0.22em] text-paper/40">
          <span>{content.utility.left}</span>
          <span className="hidden sm:block">{content.utility.right}</span>
        </div>
      </div>

      {/* header */}
      <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="/" className="flex items-center gap-3 text-paper">
            <Mark className="h-7 w-7" base="var(--color-accent-bright)" />
            <span className="font-serif text-[17px] tracking-tight">
              {content.name}
            </span>
          </a>
          <nav aria-label="Sections" className="hidden items-center gap-8 md:flex">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-paper"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/pilot"
              className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper"
            >
              Pilot
            </a>
          </nav>
          <Cta href={PILOT_MAILTO} size="sm">
            {content.pilot.cta}
          </Cta>
        </div>
      </header>

      <main>
        <PilotOffer />
      </main>

      {/* footer */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-14 text-center">
          <Mark className="h-8 w-8" base="var(--color-accent-bright)" />
          <p className="max-w-md font-serif text-[1.7rem] leading-snug">
            One cohort. Six weeks. Your company becomes a school.
          </p>
          <Cta href={PILOT_MAILTO}>{content.pilot.cta}</Cta>
          <div className="mt-6 space-y-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-paper/35">
            {content.footer.smallPrint.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
