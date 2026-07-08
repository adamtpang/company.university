import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content, MAILTO } from "@/content";
import { Mark, Cta } from "@/components/brand";
import { companies, THE_METHOD, GETIN_MAILTO } from "@/getin";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = companies.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `How to get into ${c.name} · Company University`,
    description: `${c.oneLine} The door: ${c.tag}. The bar, who actually gets in, the skills that matter, and the first-principles artifact path.`,
  };
}

const LABEL =
  "font-mono text-[10.5px] font-medium uppercase tracking-[0.24em] text-accent";

export default async function GetInCompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = companies.find((x) => x.slug === slug);
  if (!c) notFound();

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
            <a href="/getin" className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-paper">All doors</a>
            <a href="/skills" className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-paper">Skills</a>
            <a href="/board" className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-paper">Companies</a>
          </nav>
          <Cta href={GETIN_MAILTO(c.name)} size="sm">Match me</Cta>
        </div>
      </header>

      <main>
        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <p className={LABEL}>How to get in · {c.cap}</p>
            <h1 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.05] tracking-[-0.015em]">
              {c.name}
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink/60">{c.oneLine}</p>

            {/* the door */}
            <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-2">
              <div className="bg-paper p-6">
                <p className={LABEL}>The door</p>
                <p className="mt-3 font-serif text-[1.25rem] leading-snug">{c.tag}</p>
                <ul className="mt-3 space-y-1.5">
                  {c.hiresFor.map((h) => (
                    <li key={h} className="text-[13px] leading-6 text-ink/60">· {h}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-paper p-6">
                <p className={LABEL}>The bar</p>
                <p className="mt-3 text-[14px] leading-7 text-ink/70">{c.bar}</p>
              </div>
            </div>

            {/* who actually gets in */}
            <div className="mt-10">
              <p className={LABEL}>Who actually gets in</p>
              <div className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-3">
                {c.whoGetsIn.map((w, i) => (
                  <div key={i} className="bg-accent/5 p-5">
                    <p className="font-mono text-[10px] text-accent">pattern 0{i + 1}</p>
                    <p className="mt-2 text-[13px] leading-6 text-ink/70">{w}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* skills that matter */}
            <div className="mt-10">
              <p className={LABEL}>Skills that matter here</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <a
                    key={s}
                    href="/skills"
                    className="border border-line px-3 py-1.5 font-mono text-[11px] text-ink/70 transition-colors hover:border-accent hover:text-accent"
                  >
                    {s} →
                  </a>
                ))}
              </div>
              <p className="mt-2 text-[12px] text-ink/45">
                Each links to the live demand board with the top certification per skill.
              </p>
            </div>

            {/* the path */}
            <div className="mt-10">
              <p className={LABEL}>The first-principles path</p>
              <div className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-5">
                {THE_METHOD.map((s, i) => (
                  <div key={s.title} className="bg-paper p-5">
                    <p className="font-mono text-[10px] text-accent">0{i + 1}</p>
                    <p className="mt-2 font-serif text-[1.02rem] leading-tight">{s.title}</p>
                    <p className="mt-1.5 text-[12px] leading-5 text-ink/55">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* the artifact */}
            <div className="mt-10 border border-accent/40 bg-accent/5 p-6">
              <p className={LABEL}>Your artifact for {c.name}</p>
              <p className="mt-3 max-w-2xl font-serif text-[1.15rem] leading-relaxed">{c.artifact}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Cta href={GETIN_MAILTO(c.name)}>Match me into {c.name}</Cta>
                <a
                  href={c.careersUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/55 underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  Live openings ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-14 text-center">
          <Mark className="h-8 w-8" base="var(--color-accent-bright)" />
          <p className="max-w-md font-serif text-[1.7rem] leading-snug">
            The resume waits outside. The artifact walks in.
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
