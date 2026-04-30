import { Nav } from "@/components/landing/nav"
import { Hero } from "@/components/landing/hero"
import { Backed } from "@/components/landing/backed"
import { OneLiner } from "@/components/landing/one-liner"
import { Problem } from "@/components/landing/problem"
import { Pillars } from "@/components/landing/pillars"
import { Signals } from "@/components/landing/signals"
import { Audiences } from "@/components/landing/audiences"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Nav />
      <Hero />
      <Backed />
      <OneLiner />
      <Problem />
      <Pillars />
      <Signals />
      <Audiences />
      <FinalCTA />
      <Footer />
    </main>
  )
}
