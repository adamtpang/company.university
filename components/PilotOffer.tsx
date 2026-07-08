import { content, PILOT_MAILTO } from "@/content";
import { Cta } from "@/components/brand";

/* The one-page priced offer. Built to be read in one scroll on a phone
   by a warm company lead, and to end at exactly one CTA. */

export default function PilotOffer() {
  const p = content.pilot;
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.24em] text-accent">
          {p.eyebrow}
        </p>
        <h1 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.05] tracking-[-0.015em]">
          {p.heading}
        </h1>

        {/* the price */}
        <div className="mt-8 border border-line bg-accent/5 p-6 sm:p-8">
          <p className="font-mono text-[clamp(2.4rem,6vw,3.6rem)] leading-none tracking-tight text-accent tabular-nums">
            {p.price}
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
            {p.priceNote}
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink/65">{p.sub}</p>
          <div className="mt-6">
            <Cta href={PILOT_MAILTO}>{p.cta}</Cta>
          </div>
        </div>

        {/* what you get */}
        <p className="mt-14 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-ink/45">
          {p.whatYouGetLabel}
        </p>
        <div className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {p.whatYouGet.map((item) => (
            <div key={item.lead} className="bg-paper p-6">
              <p className="font-serif text-[1.15rem] leading-snug">{item.lead}</p>
              <p className="mt-2 text-[13px] leading-6 text-ink/60">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* the arc */}
        <p className="mt-14 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-ink/45">
          {p.arcLabel}
        </p>
        <div className="mt-4 border border-line">
          {p.arc.map((w, i) => (
            <div
              key={w.label}
              className={`grid gap-2 p-5 sm:grid-cols-[8rem_12rem_1fr] sm:gap-6 ${
                i < p.arc.length - 1 ? "border-b border-line" : ""
              } ${i === p.arc.length - 1 ? "bg-accent/5" : "bg-paper"}`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent pt-1">
                {w.label}
              </p>
              <p className="font-serif text-[1.1rem] leading-snug">{w.title}</p>
              <p className="text-[13px] leading-6 text-ink/60">{w.note}</p>
            </div>
          ))}
        </div>

        {/* proof */}
        <p className="mt-14 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-ink/45">
          {p.proofLabel}
        </p>
        <div className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-2">
          {p.proof.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-paper p-6 transition-colors duration-200 hover:bg-paper-2"
            >
              <p className="font-serif text-[1.2rem] leading-snug">{item.name}</p>
              {item.domain && (
                <p className="mt-1.5 font-mono text-[10.5px] tracking-[0.08em] text-accent">
                  {item.domain}{" "}
                  <span aria-hidden className="inline-block">
                    ↗
                  </span>
                </p>
              )}
              <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] leading-5 text-ink/45">
                {item.note}
              </p>
            </a>
          ))}
        </div>

        {/* close */}
        <div className="mt-14 flex flex-col items-start gap-5 border-t border-line pt-8">
          <Cta href={PILOT_MAILTO}>{p.cta}</Cta>
          <p className="max-w-xl text-[12px] italic leading-6 text-ink/45">
            {p.smallPrint}
          </p>
        </div>
      </div>
    </section>
  );
}
