import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { content, MAILTO, type CatalogTag, type LadderRung } from "@/content";
import { Mark, Cta } from "@/components/brand";

/* ================================================================
   SHARED PIECES: eyebrow labels (Mark + Cta live in components/brand)
================================================================ */

function Eyebrow({
  n,
  children,
  tone = "light",
}: {
  n: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`font-mono text-[10.5px] font-medium uppercase tracking-[0.24em] ${
        tone === "dark" ? "text-accent-bright" : "text-accent"
      }`}
    >
      <span className="opacity-80">{n}</span>
      <span className="mx-2 opacity-50">·</span>
      {children}
    </p>
  );
}

/* ================================================================
   NAV: utility strip + sticky bar
================================================================ */

function Nav() {
  return (
    <>
      <div className="border-b border-paper/10 bg-ink-2">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-6 font-mono text-[9.5px] uppercase tracking-[0.22em] text-paper/40">
          <span>{content.utility.left}</span>
          <span className="hidden sm:block">{content.utility.right}</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3 text-paper">
            <Mark className="h-7 w-7" base="var(--color-accent-bright)" />
            <span className="font-serif text-[17px] tracking-tight">
              {content.name}
            </span>
          </a>

          <nav aria-label="Sections" className="hidden items-center gap-8 md:flex">
            {content.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-paper"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <Cta href={MAILTO} size="sm">
            {content.nav.cta}
          </Cta>
        </div>
      </header>
    </>
  );
}

/* ================================================================
   01 · HERO: headline + registrar card
================================================================ */

const TAG_STYLES: Record<CatalogTag, string> = {
  live: "border-accent bg-accent text-paper",
  inMotion: "border-accent/60 bg-accent/5 text-accent",
  events: "border-ink/30 text-ink/60",
  open: "border-dashed border-ink/35 text-ink/50",
};

function Stamp({ tag }: { tag: CatalogTag }) {
  return (
    <span
      className={`inline-flex flex-none rotate-[-2deg] items-center gap-1.5 border px-2 py-[3px] font-mono text-[9px] font-medium uppercase tracking-[0.16em] ${TAG_STYLES[tag]}`}
    >
      {tag === "live" && <span className="pulse-dot" aria-hidden />}
      {content.hero.tags[tag]}
    </span>
  );
}

function RegistrarCard() {
  const c = content.hero.catalog;
  return (
    <div className="w-full bg-paper text-ink shadow-[0_32px_64px_-28px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
        <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink/55">
          {c.header}
        </span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink/55">
          {c.campus}
        </span>
      </div>

      <ul>
        {c.rows.map((row) => (
          <li
            key={row.index}
            className="flex items-center justify-between gap-3 border-b border-line px-5 py-[15px]"
          >
            <span className="flex min-w-0 items-baseline gap-3">
              <span className="font-mono text-[10px] text-ink/40">
                {row.index}
              </span>
              <span
                className={`truncate font-serif text-[16px] ${
                  row.tag === "open" ? "italic text-ink/45" : ""
                }`}
              >
                {row.name}
              </span>
            </span>
            <Stamp tag={row.tag} />
          </li>
        ))}
      </ul>

      <div className="px-5 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40">
        {c.footer}
      </div>
    </div>
  );
}

function Hero() {
  const c = content.hero;
  return (
    <section id="top" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-16 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_25rem] lg:gap-20 lg:pb-28 lg:pt-24">
        <div>
          <p
            className="rise font-mono text-[10.5px] font-medium uppercase tracking-[0.26em] text-paper/45"
            style={{ animationDelay: "60ms" }}
          >
            {c.eyebrow}
          </p>

          <h1
            className="rise mt-6 font-serif text-[clamp(2.9rem,8vw,5.3rem)] leading-[1.04] tracking-[-0.01em]"
            style={{ animationDelay: "140ms" }}
          >
            {c.headlinePre}
            <em className="text-accent-bright">{c.headlineEm}</em>
          </h1>

          <p
            className="rise mt-7 max-w-xl text-[15.5px] leading-7 text-paper/65"
            style={{ animationDelay: "220ms" }}
          >
            {c.subline}
          </p>

          <div className="rise mt-9" style={{ animationDelay: "300ms" }}>
            <Cta href={MAILTO}>{c.cta}</Cta>
          </div>
        </div>

        <div className="rise" style={{ animationDelay: "360ms" }}>
          <RegistrarCard />
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   02 · THE PROBLEMS: six problems, one layer
================================================================ */

function Problems() {
  const c = content.problems;
  return (
    <section id="problems" className="scroll-mt-16 bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <Eyebrow n="01">{c.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-serif text-[clamp(2rem,4.6vw,3.1rem)] leading-[1.08] tracking-[-0.01em]">
            {c.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink/60">
            {c.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {c.items.map((item, i) => (
            <Reveal
              key={item.problem}
              delay={(i % 3) * 80}
              className="bg-paper p-6 sm:p-7"
            >
              <p className="font-mono text-[10px] font-medium tracking-[0.2em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-[1.3rem] leading-snug">
                {item.problem}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-6 text-ink/60">
                {item.answer}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-12 border-l-2 border-accent pl-5 font-serif text-[clamp(1.3rem,2.6vw,1.7rem)] italic leading-snug text-ink/85">
            {c.capper}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   03 · HOW IT WORKS: the system + the ladder
================================================================ */

function Rung({ rung, last }: { rung: LadderRung; last: boolean }) {
  return (
    <div className="relative flex-1 bg-paper p-6 sm:p-7">
      <p className="flex items-center justify-between font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
        {rung.label}
        {!last && (
          <span aria-hidden className="text-ink/30">
            <span className="lg:hidden">↓</span>
            <span className="hidden lg:inline">→</span>
          </span>
        )}
      </p>
      <p className="mt-3 font-serif text-[1.25rem] leading-snug">{rung.title}</p>
      <p className="mt-2 text-[13px] leading-6 text-ink/55">{rung.note}</p>
    </div>
  );
}

function System() {
  const c = content.system;
  return (
    <section id="system" className="scroll-mt-16 border-t border-line bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <Eyebrow n="02">{c.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-serif text-[clamp(2rem,4.6vw,3.1rem)] leading-[1.08] tracking-[-0.01em]">
            {c.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink/60">
            {c.sub}
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {c.steps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={(i % 3) * 80}
              className="bg-paper p-6 sm:p-7"
            >
              <li>
                <p className="font-mono text-[10px] font-medium tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-[1.25rem] leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-6 text-ink/60">
                  {step.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <p className="mt-14 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-ink/45">
            {c.ladder.label}
          </p>
          <div className="mt-4 flex flex-col gap-px border border-line bg-line lg:flex-row">
            {c.ladder.rungs.map((rung, i) => (
              <Rung
                key={rung.label}
                rung={rung}
                last={i === c.ladder.rungs.length - 1}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   04 · THE OFFER: the bold card
================================================================ */

function Offer() {
  const c = content.offer;
  return (
    <section id="offer" className="scroll-mt-16 border-t border-line bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="border-t-4 border-accent bg-ink p-8 text-paper sm:p-12 lg:p-14">
            <Eyebrow n="03" tone="dark">
              {c.eyebrow}
            </Eyebrow>
            <h2 className="mt-6 max-w-xl font-serif text-[clamp(2rem,4.6vw,3.1rem)] leading-[1.08] tracking-[-0.01em]">
              {c.heading}
            </h2>

            <div className="mt-10 grid gap-x-12 gap-y-9 sm:grid-cols-2">
              {c.items.map((item) => (
                <div key={item.lead} className="border-l border-accent-bright/40 pl-5">
                  <p className="font-serif text-[1.3rem] leading-snug">
                    {item.lead}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-6 text-paper/60">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Cta href={MAILTO}>{c.cta}</Cta>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   05 · PROOF: track record strip + Zcash dashboard
================================================================ */

function Proof() {
  const c = content.proof;
  return (
    <section id="proof" className="scroll-mt-16 border-t border-line bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <Eyebrow n="04">{c.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-serif text-[clamp(2rem,4.6vw,3.1rem)] leading-[1.08] tracking-[-0.01em]">
            {c.heading}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {c.links.map((item) => {
              const inner = (
                <>
                  <p className="font-serif text-[1.2rem] leading-snug">
                    {item.name}
                  </p>
                  {item.domain && (
                    <p className="mt-1.5 font-mono text-[10.5px] tracking-[0.08em] text-accent">
                      {item.domain}{" "}
                      <span aria-hidden className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </p>
                  )}
                  <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] leading-5 text-ink/45">
                    {item.note}
                  </p>
                </>
              );
              return item.href ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-paper p-6 transition-colors duration-200 hover:bg-paper-2 sm:p-7"
                >
                  {inner}
                </a>
              ) : (
                <div key={item.name} className="bg-paper p-6 sm:p-7">
                  {inner}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-12 border border-line">
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
              <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink/55">
                {c.dashboard.title}
              </span>
              <a
                href={c.dashboard.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-accent hover:underline"
              >
                {c.dashboard.linkLabel} <span aria-hidden>↗</span>
              </a>
            </div>
            <div className="grid gap-px bg-line sm:grid-cols-3">
              {c.dashboard.stats.map((stat) => (
                <div key={stat.label} className="bg-paper p-6 sm:p-7">
                  <p className="font-mono text-[2.4rem] leading-none text-accent sm:text-[2.8rem]">
                    {stat.value}
                  </p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-[12px] italic text-ink/45">
            {c.dashboard.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   06 · TEAM: Adam + the open seat
================================================================ */

function Team() {
  const c = content.team;
  return (
    <section id="team" className="scroll-mt-16 border-t border-line bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <Eyebrow n="05">{c.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-serif text-[clamp(2rem,4.6vw,3.1rem)] leading-[1.08] tracking-[-0.01em]">
            {c.heading}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
            {c.members.map((m) => (
              <div
                key={m.name}
                className={`bg-paper p-6 sm:p-8 ${m.open ? "text-ink/55" : ""}`}
              >
                <div
                  className={
                    m.open ? "h-full border border-dashed border-ink/25 p-5 sm:p-6" : ""
                  }
                >
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                    {m.role}
                  </p>
                  <h3 className={`mt-3 font-serif text-[1.5rem] ${m.open ? "italic" : ""}`}>
                    {m.name}
                  </h3>
                  <p className="mt-3 max-w-md text-[13.5px] leading-6 text-ink/60">
                    {m.bio}
                  </p>
                  <p className="mt-5">
                    <a
                      href={m.linkHref}
                      {...(m.linkHref.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="font-mono text-[11px] tracking-[0.08em] text-accent underline-offset-4 hover:underline"
                    >
                      {m.linkLabel} <span aria-hidden>↗</span>
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   07 · CTA FOOTER
================================================================ */

function FooterCta() {
  const c = content.footer;
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal className="flex flex-col items-center text-center">
          <Mark className="h-9 w-9" base="var(--color-accent-bright)" />
          <h2 className="mt-8 max-w-3xl font-serif text-[clamp(2.1rem,5.4vw,3.6rem)] leading-[1.06] tracking-[-0.01em]">
            {c.heading}
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-paper/60">
            {c.sub}
          </p>
          <div className="mt-9">
            <Cta href={MAILTO}>{c.cta}</Cta>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col items-center justify-between gap-3 border-t border-paper/10 pt-8 text-center font-mono text-[9.5px] uppercase tracking-[0.18em] text-paper/35 sm:flex-row sm:text-left">
          {c.smallPrint.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <a
            href="https://adampang.com"
            className="transition-colors hover:text-paper/60"
          >
            Built by Adam Pangelinan
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ================================================================
   PAGE
================================================================ */

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problems />
        <System />
        <Offer />
        <Proof />
        <Team />
      </main>
      <FooterCta />
    </>
  );
}
