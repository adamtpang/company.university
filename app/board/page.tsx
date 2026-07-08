import type { Metadata } from "next";
import { content, MAILTO } from "@/content";
import { Mark, Cta } from "@/components/brand";
import Board from "@/components/Board";

export const metadata: Metadata = {
  title: "The University Layer · Company University",
  description:
    "Every company gets a school. The world's top companies, ranked by market cap, each an open college at Network School.",
};

export default function BoardPage() {
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
            <a
              href="/"
              className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-paper"
            >
              Home
            </a>
            <a
              href="/skills"
              className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-paper"
            >
              Skills
            </a>
            <a
              href="/#proof"
              className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-paper"
            >
              Proof
            </a>
            <a
              href="/pilot"
              className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-paper"
            >
              Pilot
            </a>
          </nav>
          <Cta href={MAILTO} size="sm">
            {content.nav.cta}
          </Cta>
        </div>
      </header>

      <main>
        <Board />
      </main>

      {/* footer */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-14 text-center">
          <Mark className="h-8 w-8" base="var(--color-accent-bright)" />
          <p className="max-w-md font-serif text-[1.7rem] leading-snug">
            {content.board.footer}
          </p>
          <Cta href={MAILTO}>{content.board.cta}</Cta>
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
