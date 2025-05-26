// ChartLegend.tsx
import React, { memo } from "react"
import { LineSeriesData } from "./types"

interface ChartLegendProps {
  series: LineSeriesData[]
  position?: "top-right" | "bottom-left"
}

const ChartLegend: React.FC<ChartLegendProps> = ({ series, position = "top-right" }) => {
  const seriesWithLabels = series.filter((s) => s.label)

  if (seriesWithLabels.length === 0) {
    return null
  }

  const positionClasses = {
    "top-right": "top-4 right-4 md:top-6 md:right-6 flex-col",
    "bottom-left": "bottom-4 left-4 md:bottom-6 md:left-6 flex-row flex-wrap",
  }

  return (
    <div className={`absolute flex gap-2 bg-opacity-80 bg-gray-900 p-2 rounded z-10 ${positionClasses[position]}`} data-testid="chart-legend">
      {seriesWithLabels.map((series, i) => (
        <div key={`legend-${i}`} className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: series.color }} aria-hidden="true" />
          <span className="text-xs md:text-sm whitespace-nowrap">{series.label}</span>
        </div>
      ))}
    </div>
  )
}

export default memo(ChartLegend)
