"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import TransparentCard from "@/components/ui/transparent-card"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export default function Home() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <div className="container mx-auto px-4 py-20">
        <TransparentCard className="min-h-[80vh] flex items-center justify-center" blurIntensity="sm">
          <div className="max-w-3xl mx-auto text-center px-4">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
              <span className="text-sm text-white/60 tracking-wide">AI & RL Researcher</span>
            </motion.div>

            <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">S Akash</span>
                <br />
                <span
                  className={cn(
                    "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
                    pacifico.className,
                  )}
                >
                  Building Beyond AI
                </span>
              </h1>
            </motion.div>

            <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
              <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto">
                Researching Reinforcement Learning and building systems that current AI couldn't accomplish.
              </p>
            </motion.div>
          </div>
        </TransparentCard>
      </div>
    </main>
  )
}

