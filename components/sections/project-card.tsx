import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-white/[0.03] border-white/10 overflow-hidden hover:bg-white/[0.05] transition-colors cursor-pointer">
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-white/90">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/70">{project.description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-white/[0.03] text-white/60 border-white/10">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

