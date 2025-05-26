// ChartTooltip.tsx
import React, { memo } from "react"
import { ScaledSeries } from "./types"

interface ChartTooltipProps {
  activePoint: { series: number; point: number } | null
  series: ScaledSeries[]
  chartWidth: number
}

const ChartTooltip: React.FC<ChartTooltipProps> = ({ activePoint, series, chartWidth }) => {
  if (!activePoint || activePoint.series < 0 || activePoint.point < 0) {
    return null
  }

  const { series: seriesIndex, point: pointIndex } = activePoint

  if (!series[seriesIndex] || !series[seriesIndex].points[pointIndex]) {
    return null
  }

  const point = series[seriesIndex].points[pointIndex]
  const seriesColor = series[seriesIndex].color

  // Position tooltip to avoid going off-screen
  const isRightSide = point.x > chartWidth - 150
  const isTopHalf = point.y < 50

  const tooltipX = isRightSide ? point.x - 130 : point.x + 10
  const tooltipY = isTopHalf ? point.y + 10 : point.y - 35
  const textX = isRightSide ? point.x - 120 : point.x + 20
  const textY = isTopHalf ? point.y + 30 : point.y - 15

  return (
    <g className="chart-tooltip" data-testid="chart-tooltip">
      <rect x={tooltipX} y={tooltipY} width="120" height="30" rx="4" className="fill-gray-800 opacity-90" />
      <text x={textX} y={textY} className="fill-white text-xs">
        {new Date(point.date).toLocaleDateString()}: {point.value.toLocaleString()}
      </text>
    </g>
  )
}

export default memo(ChartTooltip)
