"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Banknote, GraduationCap, Handshake, Github, Award } from "lucide-react"
import { motion } from "framer-motion"

interface Achievement {
  id: number
  title: string
  description: string
  year: string
  icon: string
  link?: string
}

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  const icons = {
    trophy: Trophy,
    banknote: Banknote,
    "graduation-cap": GraduationCap,
    handshake: Handshake,
    github: Github,
    award: Award,
  }

  const IconComponent = icons[achievement.icon as keyof typeof icons] || Award

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="cursor-pointer"
    >
      <Card className="bg-white/[0.03] border-white/10 overflow-hidden hover:bg-white/[0.05] transition-colors">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-white/60" />
          </div>
          <div>
            <CardTitle className="text-white/90">{achievement.title}</CardTitle>
            <CardDescription className="text-white/40">{achievement.year}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-white/70">{achievement.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

