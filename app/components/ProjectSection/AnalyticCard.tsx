import CountUp from "@/app/ui/CountUp"
import { H3 } from "@/app/ui/Elements"
import * as m from "motion/react-m"

interface AnalyticCardProps {
  title: string
  description?: string
  percentageIncrease?: number
  chart: React.ReactNode
  dataSource: string
}

export const AnalyticCard: React.FC<AnalyticCardProps> = ({ title, description, percentageIncrease, chart, dataSource }) => {
  return (
    <div className="flex-1 p-6 border border-gray-200 rounded-xl h-[500px] min-w-[300px] max-w-md relative flex flex-col justify-between hover:shadow-lg transition-all duration-300">
      {/* Title */}

      <div className="text-center mb-8">
        <H3 className="mb-2">{title}</H3>
        {percentageIncrease && (
          <p className="text-4xl font-semibold text-slate-700">
            +<CountUp to={percentageIncrease} margin="-100px" />%
          </p>
        )}
        {description && <p className="text-gray-600 text-xs leading-tight">{description}</p>}
      </div>

      {/* Chart Container */}
      {chart}
      <m.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 1.5,
          ease: [0.2, 0.65, 0.3, 0.9],
        }}
        className="text-center absolute -bottom-6 left-4 text-xs text-slate-500 "
      >
        * {dataSource}
      </m.span>
    </div>
  )
}
