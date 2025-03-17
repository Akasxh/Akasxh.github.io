import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface CardContainerProps {
  children: ReactNode
  className?: string
}

export default function CardContainer({ children, className }: CardContainerProps) {
  return (
    <div
      className={cn(
        "bg-black/30 backdrop-blur-md border-t border-white/10",
        "shadow-[0_-8px_32px_0_rgba(0,0,0,0.3)]",
        className,
      )}
    >
      {children}
    </div>
  )
}

