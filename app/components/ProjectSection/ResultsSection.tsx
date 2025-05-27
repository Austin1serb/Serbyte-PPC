import { HeaderText } from "@/app/ui/HeaderText"
import { AnalyticCard } from "./AnalyticCard"
import { LineChart } from "./LineChart"
import { RadialProgressRing } from "./RadialProgressRing"
import { TrafficBarChart } from "./TrafficBarChart"

export const ResultsSection: React.FC = () => {
  return (
    <section className="inside-container-projects ">
      <HeaderText title="The Outcome." titleHighlight="See the results." />

      <div className="flex flex-wrap gap-8 gap-y-16 items-start justify-center">
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
      </div>
    </section>
  )
}
