import TransparentCard from "@/components/ui/transparent-card"
import BlogCard from "@/components/sections/blog-card"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    slug: "future-of-reinforcement-learning",
    title: "The Future of Reinforcement Learning",
    excerpt:
      "Exploring how reinforcement learning will shape the next generation of AI systems and its potential applications beyond gaming.",
    date: "March 10, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 2,
    slug: "neuro-symbolic-ai",
    title: "Neuro-Symbolic AI: Bridging the Gap",
    excerpt:
      "How combining neural networks with symbolic reasoning can create more robust and interpretable AI systems.",
    date: "February 22, 2024",
    readTime: "12 min read",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 3,
    slug: "multi-agent-systems",
    title: "Emergent Behaviors in Multi-Agent Systems",
    excerpt:
      "Analyzing how multiple AI agents can develop complex behaviors and communication protocols through interaction.",
    date: "January 15, 2024",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=600",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <div className="container mx-auto px-4 py-20">
        <TransparentCard className="min-h-[80vh] p-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white/90">Blog</h1>
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <BlogCard post={post} />
                </Link>
              ))}
            </div>
          </div>
        </TransparentCard>
      </div>
    </main>
  )
}

