import TransparentCard from "@/components/ui/transparent-card"
import AchievementCard from "@/components/sections/achievement-card"

const achievements = [
  {
    id: 1,
    title: "Best Paper Award",
    description:
      "Received the Best Paper Award at the International Conference on Machine Learning (ICML) for research on novel reinforcement learning algorithms.",
    year: "2023",
    icon: "trophy",
  },
  {
    id: 2,
    title: "Research Grant",
    description:
      "Awarded a $500,000 research grant from the National Science Foundation to explore advanced AI systems for robotic control.",
    year: "2022",
    icon: "banknote",
  },
  {
    id: 3,
    title: "PhD in Computer Science",
    description:
      "Completed doctoral studies with a focus on Reinforcement Learning and Artificial Intelligence at Stanford University.",
    year: "2021",
    icon: "graduation-cap",
  },
  {
    id: 4,
    title: "Industry Partnership",
    description:
      "Established a research partnership with leading robotics company to implement RL algorithms in industrial automation.",
    year: "2022",
    icon: "handshake",
  },
  {
    id: 5,
    title: "Open Source Contribution",
    description:
      "Created and maintained a popular open-source library for reinforcement learning with over 5,000 GitHub stars.",
    year: "2020-Present",
    icon: "github",
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
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </div>
        </TransparentCard>
      </div>
    </main>
  )
}

