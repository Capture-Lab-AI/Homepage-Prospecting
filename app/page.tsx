import { Nav } from "@/components/landing/nav"
import { Hero } from "@/components/landing/hero"
import { Backed } from "@/components/landing/backed"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Nav />
      <Hero />
      <Backed />
      <FinalCTA />
      <Footer />
    </main>
  )
}
