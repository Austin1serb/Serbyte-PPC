"use client"
import { bespoke } from "./projectData"
import { ProjectHero } from "./ProjectHero"
import { RadialProgressRing } from "./RadialProgressRing"
import { TrafficBarChart } from "./TrafficBarChart"
import { LineChart } from "./LineChart"
import { AnalyticCard } from "./AnalyticCard"
import { motion } from "motion/react"
import { BeforeAfterSection } from "./BeforeAfterSection"

export const milestones = [
  { date: "2025-02-01", title: "Kick-off", blurb: "Stakeholder workshop & SEO audit" },
  { date: "02-15", title: "Prototype", blurb: "Interactive Figma + copy drafting" },
  { date: "03-01", title: "Dev Sprint", blurb: "Next.js build, motion.dev, Core-Web-Vitals 92+" },
  { date: "03-14", title: "Launch", blurb: "Deployed to Vercel Edge • DNS flip" },
  { date: "04-15", title: "Optimize", blurb: "A/B test checkout, schema tweaks" },
]

function ProjectTimeline() {
  return (
    <section className="inside-container-projects py-20">
      <h2 className="mb-12 text-3xl font-semibold">42-Day Launch Timeline</h2>

      <ol className="relative border-l border-gray-300">
        {milestones.map((m, i) => (
          <li key={m.date} className="mb-10 ml-6">
            {/* pulse dot */}
            <motion.span
              className="absolute -left-3 flex h-5 w-5 items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 260 }}
            >
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
            </motion.span>

            <time className="mb-1 text-sm font-medium text-gray-500">{m.date}</time>
            <h3 className="text-lg font-semibold">{m.title}</h3>
            <p className="text-gray-600">{m.blurb}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

const ProjectDisplay: React.FC = () => {
  return (
    <main className="overflow-x-hidden">
      <ProjectHero {...bespoke.hero} />
      <BeforeAfterSection />
      <section className="inside-container-projects grid lg:grid-cols-3 grid-cols-1">
        <AnalyticCard
          title="Traffic Growth"
          description="Increase post-launch from all channels"
          percentageIncrease={966}
          chart={<TrafficBarChart />}
          dataSource="Based on 30 day traffic average"
        />

        <AnalyticCard
          title="Conversion Rate"
          percentageIncrease={45}
          description="Online visitor conversion improvement"
          chart={<RadialProgressRing />}
          dataSource="Measured over a 60 day period"
        />
        <AnalyticCard
          title="Revenue Growth"
          percentageIncrease={35}
          description="Increase post-launch"
          chart={<LineChart />}
          dataSource="Measured over a 90 day period"
        />
      </section>
      <ProjectTimeline />
    </main>
  )
}

export default ProjectDisplay
