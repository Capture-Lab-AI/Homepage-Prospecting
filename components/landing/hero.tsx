import { ArrowRight } from "lucide-react"
import { LinkButton } from "@/components/ui/button"
import { ScrollReveal } from "./scroll-reveal"

const tickerItems = [
  "LEASE EXPIRES",
  "FUNDING ROUND",
  "OWNERSHIP CHANGE",
  "HIRING SURGE",
  "M&A",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-content px-6 pb-24 pt-24 md:pb-32 md:pt-36 lg:pb-40 lg:pt-44">
        <ScrollReveal>
          <h1 className="font-display text-balance text-[44px] font-light leading-[1.02] tracking-[-0.02em] text-ink sm:text-[60px] md:text-[76px] lg:text-[88px]">
            Every lease expiring in your market.{" "}
            <span className="block italic text-accent sm:inline">
              Surfaced 18 months early.
            </span>
          </h1>

          <p className="mt-8 max-w-prose text-pretty text-[18px] leading-[1.55] text-ink-2 md:text-[20px]">
            Your next deal was signed three years ago. We build automation that
            tells you who&rsquo;s about to need space — before they pick up the
            phone.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <LinkButton href="#cta" size="lg" variant="primary">
              Book a demo
            </LinkButton>
            <LinkButton
              href="#how-it-works"
              size="lg"
              variant="ghost"
              className="group gap-1.5"
            >
              See how it works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </LinkButton>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={150}>
        <div className="border-y border-rule bg-bg-elev/40">
          <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-10 gap-y-3 px-6 py-5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
            <span className="text-accent">Signals we watch</span>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
              {tickerItems.map((item, i) => (
                <span key={item} className="flex items-center gap-7">
                  {item}
                  {i < tickerItems.length - 1 && (
                    <span className="text-rule">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
