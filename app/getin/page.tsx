import type { Metadata } from "next";
import { content, MAILTO, JOIN_MAILTO } from "@/content";
import { Mark, Cta } from "@/components/brand";
import { GetInLink } from "@/components/GetInLink";
import { companies, GETIN_INTRO, THE_METHOD } from "@/getin";

export const metadata: Metadata = {
  title: "How to get in · Company University",
  description:
    "How people actually enter the world's best companies: the door, the bar, the pattern, and the first-principles artifact path for Anthropic, OpenAI, Vercel, Ramp, Stripe and more.",
};

const TH =
  "px-5 py-3 font-mono text-[9px] font-normal uppercase tracking-[0.16em] text-ink/45";

export default function GetInIndex() {
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
            <a href="/" className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-paper">Home</a>
            <a href="/board" className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-paper">Companies</a>
            <a href="/skills" className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-paper">Skills</a>
            <a href="/getin" className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper transition-colors hover:text-paper">Get in</a>
            <a href="/pilot" className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-paper">Pilot</a>
          </nav>
          <Cta href={MAILTO} size="sm">{content.nav.cta}</Cta>
        </div>
      </header>

      <main>
        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.24em] text-accent">
              {GETIN_INTRO.eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.05] tracking-[-0.015em]">
              {GETIN_INTRO.heading}
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink/60">
              {GETIN_INTRO.sub}
            </p>

            {/* the method, once */}
            <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-5">
              {THE_METHOD.map((s, i) => (
                <div key={s.title} className="bg-paper p-5">
                  <p className="font-mono text-[10px] text-accent">0{i + 1}</p>
                  <p className="mt-2 font-serif text-[1.05rem] leading-tight">{s.title}</p>
                  <p className="mt-1.5 text-[12px] leading-5 text-ink/55">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* the deal: free until hired */}
            <div className="mt-12 border border-line bg-accent/5 p-6 sm:p-8">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-accent">
                {content.deal.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-[clamp(1.6rem,3.5vw,2.2rem)] leading-[1.08] tracking-[-0.01em]">
                {content.deal.heading}
              </h2>
              <p className="mt-3 max-w-xl text-[14px] leading-6 text-ink/65">
                {content.deal.sub}
              </p>
              <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-3">
                {content.deal.terms.map((t) => (
                  <div key={t.lead} className="bg-paper p-5">
                    <p className="font-serif text-[1.1rem] leading-snug">{t.lead}</p>
                    <p className="mt-1.5 text-[12.5px] leading-5 text-ink/55">
                      {t.detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Cta href={JOIN_MAILTO}>{content.deal.cta}</Cta>
                <p className="max-w-sm text-[11px] italic leading-5 text-ink/45">
                  {content.deal.smallPrint}
                </p>
              </div>
            </div>

            {/* the doors */}
            <div className="mt-12 overflow-x-auto border border-line">
              <table className="w-full border-collapse text-[13px]">
                <thead>
                  <tr className="border-b border-line">
                    <th className={`${TH} w-12 text-left`}>#</th>
                    <th className={`${TH} text-left`}>Company</th>
                    <th className={`${TH} hidden text-right sm:table-cell`}>Cap</th>
                    <th className={`${TH} hidden text-left md:table-cell`}>The door</th>
                    <th className={`${TH} text-right`}>Path</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((c, i) => (
                    <tr key={c.slug} className="border-b border-line transition-colors last:border-0 hover:bg-paper-2">
                      <td className="px-5 py-3.5 text-left font-mono text-[11px] text-ink/40">{i + 1}</td>
                      <td className="px-5 py-3.5">
                        <a href={`/getin/${c.slug}`} className="font-serif text-[15px] hover:underline">{c.name}</a>
                        <span className="mt-0.5 block text-[12px] leading-5 text-ink/55">{c.oneLine}</span>
                      </td>
                      <td className="hidden px-5 py-3.5 text-right font-mono text-[11px] tabular-nums text-ink/70 sm:table-cell">{c.cap}</td>
                      <td className="hidden px-5 py-3.5 text-left text-[12px] text-ink/70 md:table-cell">{c.tag}</td>
                      <td className="px-5 py-3.5 text-right">
                        <GetInLink href={`/getin/${c.slug}`} company={c.slug} className="font-mono text-[10px] uppercase tracking-[0.08em] text-accent transition-colors hover:text-accent-deep hover:underline">
                          How to get in →
                        </GetInLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[11px] italic text-ink/40">
              Patterns, not promises. Written from public hiring signals and the artifact method, updated as doors open and close.
            </p>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-14 text-center">
          <Mark className="h-8 w-8" base="var(--color-accent-bright)" />
          <p className="max-w-md font-serif text-[1.7rem] leading-snug">
            Pick the company. Build the proof. Walk in.
          </p>
          <Cta href={MAILTO}>Get matched</Cta>
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
