"use client"
import Image from "next/image"
import { bespoke } from "./projectData"
import { ProjectHero } from "./ProjectHero"
import TrafficLineGraph from "./TrafficLineGraph"
import ChartDemo from "./TrafficLineGraph"

/* ---------- DEMO DATA -------------------------------------------------- */
const currentYearData = [
  { date: "2025-03-01", value: 100 },
  { date: "2025-03-14", value: 200 },
  { date: "2025-03-30", value: 800 },
  { date: "2025-04-15", value: 4000 },
  { date: "2025-05-01", value: 3600 },
  { date: "2025-05-24", value: 3200 },
]

const prevYearData = [
  { date: "2024-03-01", value: 90 },
  { date: "2024-03-14", value: 128 },
  { date: "2024-03-30", value: 110 },
  { date: "2024-04-15", value: 135 },
  { date: "2024-05-01", value: 185 },
  { date: "2024-05-24", value: 130 },
]

const ProjectDisplay: React.FC = () => {
  return (
    <main className="items-center ">
      <ProjectHero {...bespoke.hero} />
      <section className="border-y border-gray-200 relative">
        <div className="inside-container-projects pt-12 lg:pt-16 relative">
          <iframe
            onClick={(e) => {
              e.stopPropagation()
            }}
            title="Bespoke Hero"
            src="/bespoke-hero2.html"
            height={2100}
            width={1400}
            className="relative z-5 max-h-[800px] w-full shadow-xl rounded-xl bo rder border-gray-200"
          />
          <div className="pointer-events-none max-w-[1632px] absolute left-[-255px] top-[-204px] aspect-[1.39393939] w-[1472px] bg-[#111111] lg:-left-60 lg:top-[-162px] lg:w-[100vw] md:left-[-26.705%] md:top-[-36.921%] md:w-[153.409%]">
            <video src="/videos/glow.mp4" autoPlay loop muted playsInline className="h-auto w-full max-w-none" />
          </div>
        </div>
      </section>
      <section className="inside-container-projects min-h-[1000px]">
        <ChartDemo />
      </section>
    </main>
  )
}

export default ProjectDisplay
