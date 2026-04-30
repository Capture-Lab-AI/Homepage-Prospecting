import Link from "next/link"
import { LinkButton } from "@/components/ui/button"

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-[22px] font-medium leading-none tracking-tight text-ink"
        >
          Pipeline
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <a
            href="#how-it-works"
            className="text-[14px] text-ink-2 transition-colors hover:text-ink"
          >
            How it works
          </a>
          <a
            href="#signals"
            className="text-[14px] text-ink-2 transition-colors hover:text-ink"
          >
            Signals
          </a>
          <a
            href="#why-pipeline"
            className="text-[14px] text-ink-2 transition-colors hover:text-ink"
          >
            Why Pipeline
          </a>
        </nav>

        <LinkButton href="#cta" size="md" variant="primary">
          Book a demo
        </LinkButton>
      </div>
    </header>
  )
}
