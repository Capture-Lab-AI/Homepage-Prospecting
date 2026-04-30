import { LinkButton } from "@/components/ui/button"
import { ScrollReveal } from "./scroll-reveal"

export function FinalCTA() {
  return (
    <section id="cta" className="bg-bg-deep">
      <div className="mx-auto max-w-content px-6 py-28 text-bg md:py-36 lg:py-44">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bg/60">
              See it live
            </p>
            <h2 className="font-display mt-6 text-balance text-[40px] font-light leading-[1.05] tracking-[-0.02em] text-bg md:text-[56px] lg:text-[68px]">
              See Pipeline on{" "}
              <span className="italic text-accent-soft">your market.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-pretty text-[17px] leading-[1.6] text-bg/75 md:text-[18px]">
              Book a 20-minute demo — we&rsquo;ll show you live prospects in
              your geography on the call.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <LinkButton
                href="mailto:hello@pipeline.example.com"
                size="lg"
                variant="invert"
              >
                Book a demo
              </LinkButton>
              <a
                href="mailto:hello@pipeline.example.com"
                className="font-mono text-[12px] uppercase tracking-[0.14em] text-bg/70 transition-colors hover:text-bg"
              >
                hello@pipeline.example.com
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
