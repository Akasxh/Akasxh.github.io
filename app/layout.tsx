import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/layout/navbar"
import GeometricBackground from "@/components/background/geometric-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "S Akash - AI & RL Researcher",
  description: "Portfolio of S Akash, researching Reinforcement Learning and building things AI couldn't.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <GeometricBackground />
          <Navbar />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'