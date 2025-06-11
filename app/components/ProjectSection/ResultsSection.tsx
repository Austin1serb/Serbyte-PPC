import { HeaderText } from "@/app/ui/HeaderText"
import { AnalyticCard } from "./AnalyticCard"

export interface AnalyticCardProps {
  title: string
  description: string
  percentageIncrease: number
  chart: React.ReactNode
  dataSource: string
}

export interface ResultsSectionProps {
  analyticCards: AnalyticCardProps[]
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ analyticCards }) => {
  return (
    <section className="inside-container-projects ">
      <HeaderText title="The Outcome." titleHighlight="See the results." />

      <div className="flex flex-wrap gap-8 gap-y-16 items-start justify-center">
        {analyticCards.map((card) => (
          <AnalyticCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}
