"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TransparentCardProps {
  children: ReactNode
  className?: string
  delay?: number
  blurIntensity?: "none" | "sm" | "md" | "lg" | "xl"
}

export default function TransparentCard({
  children,
  className,
  delay = 0,
  blurIntensity = "md",
}: TransparentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={cn(
        "relative w-full rounded-3xl",
        `bg-white/[0.03] backdrop-blur-${blurIntensity} border border-white/[0.08]`,
        "shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]",
        "hover:bg-white/[0.05] transition-colors duration-300",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

