import TransparentCard from "@/components/ui/transparent-card"
import AchievementCard from "@/components/sections/achievement-card"
import Link from "next/link"

const achievements = [
  {
    id: 1,
    title: "Best Paper Award",
    description:
      "Received the Best Paper Award at the International Conference on Machine Learning (ICML) for research on novel reinforcement learning algorithms.",
    year: "2023",
    icon: "trophy",
    link: "https://github.com/Akasxh",
  },
  {
    id: 2,
    title: "Research Grant",
    description:
      "Awarded a $500,000 research grant from the National Science Foundation to explore advanced AI systems for robotic control.",
    year: "2022",
    icon: "banknote",
    link: "https://github.com/Akasxh",
  },
  {
    id: 3,
    title: "PhD in Computer Science",
    description:
      "Completed doctoral studies with a focus on Reinforcement Learning and Artificial Intelligence at Stanford University.",
    year: "2021",
    icon: "graduation-cap",
    link: "https://github.com/Akasxh",
  },
  {
    id: 4,
    title: "Industry Partnership",
    description:
      "Established a research partnership with leading robotics company to implement RL algorithms in industrial automation.",
    year: "2022",
    icon: "handshake",
    link: "https://github.com/Akasxh",
  },
  {
    id: 5,
    title: "Open Source Contribution",
    description:
      "Created and maintained a popular open-source library for reinforcement learning with over 5,000 GitHub stars.",
    year: "2020-Present",
    icon: "github",
    link: "https://github.com/Akasxh",
  },
]

export default function AchievementsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <div className="container mx-auto px-4 py-20">
        <TransparentCard className="min-h-[80vh] p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white/90">Achievements</h1>

            <div className="space-y-6">
              {achievements.map((achievement) => (
                <Link key={achievement.id} href={achievement.link} target="_blank" rel="noopener noreferrer">
                  <AchievementCard key={achievement.id} achievement={achievement} />
                </Link>
              ))}
            </div>
          </div>
        </TransparentCard>
      </div>
    </main>
  )
}

