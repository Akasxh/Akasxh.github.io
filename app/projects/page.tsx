import TransparentCard from "@/components/ui/transparent-card"
import ProjectCard from "@/components/sections/project-card"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "RL-Based Robotic Control",
    description:
      "A reinforcement learning system that enables robots to learn complex manipulation tasks with minimal human intervention.",
    tags: ["Reinforcement Learning", "Robotics", "PyTorch"],
    image: "/placeholder.svg?height=300&width=600",
    link: "https://github.com/Akasxh",
  },
  {
    id: 2,
    title: "Emergent Communication Framework",
    description:
      "A multi-agent system where AI agents develop their own communication protocols to solve collaborative tasks.",
    tags: ["Multi-Agent RL", "NLP", "TensorFlow"],
    image: "/placeholder.svg?height=300&width=600",
    link: "https://github.com/Akasxh",
  },
  {
    id: 3,
    title: "Neuro-Symbolic Reasoning Engine",
    description:
      "Combining neural networks with symbolic reasoning to create AI systems capable of logical inference and abstraction.",
    tags: ["Neuro-Symbolic AI", "Knowledge Graphs", "JAX"],
    image: "/placeholder.svg?height=300&width=600",
    link: "https://github.com/Akasxh",
  },
  {
    id: 4,
    title: "Adaptive Learning Environment",
    description:
      "A platform that dynamically adjusts difficulty based on learner performance using reinforcement learning algorithms.",
    tags: ["Education Tech", "Adaptive Learning", "Python"],
    image: "/placeholder.svg?height=300&width=600",
    link: "https://github.com/Akasxh",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <div className="container mx-auto px-4 py-20">
        <TransparentCard className="min-h-[80vh] p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white/90">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Link key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
                  <ProjectCard key={project.id} project={project} />
                </Link>
              ))}
            </div>
          </div>
        </TransparentCard>
      </div>
    </main>
  )
}

