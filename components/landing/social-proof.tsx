import { ScrollReveal } from "./scroll-reveal"

/* TODO: replace placeholders with real brokerage logos, real testimonial,
   and real stats before launch. */
const logoSlots = [
  "BROKERAGE",
  "BROKERAGE",
  "BROKERAGE",
  "BROKERAGE",
  "BROKERAGE",
  "BROKERAGE",
]

export function SocialProof() {
  return (
    <section className="border-t border-rule bg-bg-elev/40">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32 lg:py-40">
        <ScrollReveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
            Trusted by brokerages running on Canary
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-px border border-rule bg-rule sm:grid-cols-3 lg:grid-cols-6">
            {logoSlots.map((label, i) => (
              <li
                key={i}
                className="flex h-20 items-center justify-center bg-bg-elev font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3"
              >
                {/* TODO: real logo */}
                {label}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <figure className="mx-auto mt-24 max-w-3xl text-center md:mt-32">
            <blockquote className="font-display text-balance text-[28px] font-light leading-[1.3] tracking-[-0.01em] text-ink md:text-[36px] lg:text-[40px]">
              &ldquo;We replaced four tools and a part-time analyst.&rdquo;
            </blockquote>
            <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
              {/* TODO: real attribution */}
              Managing broker · [Brokerage name]
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2 md:mt-28">
            <Stat value="X hrs" caption="saved per broker, per week" />
            <Stat value="Y%" caption="lift in connect rate" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function Stat({ value, caption }: { value: string; caption: string }) {
  return (
    <div className="bg-bg-elev px-6 py-10 text-center">
      {/* TODO: real numbers */}
      <p className="font-display text-[56px] font-light leading-none tracking-[-0.03em] text-accent md:text-[72px]">
        {value}
      </p>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
        {caption}
      </p>
    </div>
  )
}
