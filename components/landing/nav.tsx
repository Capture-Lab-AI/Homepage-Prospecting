import Link from "next/link"
import { LinkButton } from "@/components/ui/button"

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-[22px] font-medium leading-none tracking-tight text-ink"
        >
          <img
            src="/canary-mark.png"
            alt=""
            className="h-7 w-7 object-contain"
          />
          Canary
        </Link>

        <LinkButton href="#cta" size="md" variant="primary">
          Book a demo
        </LinkButton>
      </div>
    </header>
  )
}
