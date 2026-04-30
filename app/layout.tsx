import type { Metadata } from "next"
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Canary — Prospecting autopilot for commercial real estate",
  description:
    "Canary is an AI prospecting platform built for CRE brokerages. Discover off-market opportunities, enrich every prospect automatically, and start each day with an AI-drafted task queue grounded in real signals.",
  metadataBase: new URL("https://canary.example.com"),
  openGraph: {
    title: "Canary — Prospecting autopilot for commercial real estate",
    description:
      "Every lease expiring in your market. Surfaced 18 months early.",
    type: "website",
    images: ["/og.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
