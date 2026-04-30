import { ScrollReveal } from "./scroll-reveal"

const points = [
  {
    n: "01",
    title: "Built for CRE, not retrofitted from B2B SaaS.",
    body: "The data model, signals, and scoring are tuned to property cycles, not sales cycles.",
  },
  {
    n: "02",
    title: "Agents, not lists.",
    body: "Competitors hand you a static spreadsheet. Canary runs research continuously and updates the score as the world changes.",
  },
  {
    n: "03",
    title: "Grounded drafts, not generic templates.",
    body: "Every email cites a real signal from the prospect, so brokers actually send them.",
  },
]

export function Differentiators() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
        <ScrollReveal>
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
              Why not Apollo, ZoomInfo, or your CRM
            </p>
            <h2 className="font-display mt-5 text-balance text-[34px] font-light leading-[1.1] tracking-[-0.02em] text-ink md:text-[42px] lg:text-[48px]">
              Three things only Canary does.
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-14 md:space-y-20">
          {points.map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 80}>
              <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
                <p className="font-display text-[44px] font-light leading-none tracking-[-0.02em] text-ink-3 lg:col-span-2 lg:text-[64px]">
                  {p.n}
                </p>
                <div className="lg:col-span-10">
                  <h3 className="font-display max-w-3xl text-balance text-[24px] font-light leading-[1.2] tracking-[-0.02em] text-ink md:text-[32px] lg:text-[38px]">
                    {p.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-[16px] leading-[1.65] text-ink-2 md:text-[17px]">
                    {p.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
