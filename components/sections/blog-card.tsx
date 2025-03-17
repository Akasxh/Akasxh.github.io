"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import { Clock } from "lucide-react"

interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  link?: string
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="cursor-pointer">
      <Card className="bg-white/[0.03] border-white/10 overflow-hidden hover:bg-white/[0.05] transition-colors">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-48 md:h-auto md:w-1/3">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
          <div className="md:w-2/3">
            <CardHeader>
              <CardTitle className="text-white/90">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4 text-sm text-white/40">
                <span>{post.date}</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

