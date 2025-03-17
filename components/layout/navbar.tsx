"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/achievements", label: "Achievements" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="flex items-center gap-1 md:gap-2 p-1 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-full transition-colors",
                  pathname === link.href
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/[0.05]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

