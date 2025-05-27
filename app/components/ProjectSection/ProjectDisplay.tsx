"use client"
import { bespoke } from "./projectData"
import { ProjectHero } from "./ProjectHero"
import { RadialProgressRing } from "./RadialProgressRing"
import { TrafficBarChart } from "./TrafficBarChart"
import { LineChart } from "./LineChart"
import { AnalyticCard } from "./AnalyticCard"

const ProjectDisplay: React.FC = () => {
  return (
    <main>
      <ProjectHero {...bespoke.hero} />
      <section className="border-y border-gray-200 relative">
        <div className="inside-container-projects pt-12 lg:pt-16 relative">
          <iframe
            // TODO extract into own lazy loaded component
            onClick={(e) => {
              e.stopPropagation()
            }}
            title="Bespoke Hero"
            src="/bespoke-hero2.html"
            height={2100}
            scrolling="no"
            width={1400}
            className="relative z-5 max-h-[860px] w-full shadow-xl rounded-xl border border-gray-200"
          />
        </div>
      </section>
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
      <section className="inside-container-projects h-96"></section>
    </main>
  )
}

export default ProjectDisplay
