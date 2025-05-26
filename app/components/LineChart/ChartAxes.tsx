// ChartAxes.tsx
import React, { memo } from "react"
import { ChartDimensions } from "./types"
import { formatValue } from "./utils"

interface ChartAxesProps {
  dimensions: ChartDimensions
  yAxisTicks: Array<{ value: number; y: number }>
  xAxisTicks: Array<{ label: string; x: number }>
}

const ChartAxes: React.FC<ChartAxesProps> = ({ dimensions, yAxisTicks, xAxisTicks }) => {
  const { chartWidth, chartHeight } = dimensions

  return (
    <>
      {/* Axes */}
      <line x1="0" y1="0" x2="0" y2={chartHeight} className="stroke-gray-700" strokeWidth="1" />
      <line x1="0" y1={chartHeight} x2={chartWidth} y2={chartHeight} className="stroke-gray-700" strokeWidth="1" />

      {/* Y-axis ticks and grid */}
      {yAxisTicks.map((tick, i) => (
        <g key={`y-tick-${i}`} className="chart-tick">
          <line x1="-5" y1={tick.y} x2="0" y2={tick.y} className="stroke-gray-500" strokeWidth="1" />
          <text
            x="-10"
            y={tick.y}
            textAnchor="end"
            dominantBaseline="middle"
            className="fill-gray-400 text-xs md:text-sm"
            aria-label={`Y-axis value: ${tick.value}`}
          >
            {formatValue(tick.value)}
          </text>
          <line x1="0" y1={tick.y} x2={chartWidth} y2={tick.y} className="stroke-gray-600" strokeWidth="1" strokeDasharray="4 4" />
        </g>
      ))}

      {/* X-axis ticks and labels */}
      {xAxisTicks.map((tick, i) => (
        <g key={`x-tick-${i}`} className="chart-tick">
          <line x1={tick.x} y1={chartHeight} x2={tick.x} y2={chartHeight + 5} className="stroke-gray-500" strokeWidth="1" />
          <text x={tick.x} y={chartHeight + 20} textAnchor="middle" className="fill-gray-400 text-xs md:text-sm">
            {tick.label}
          </text>
          <line x1={tick.x} y1={chartHeight / -7} x2={tick.x} y2={chartHeight + 5} className="stroke-gray-500" strokeWidth="1" strokeDasharray="4 4" />
        </g>
      ))}
    </>
  )
}

export default memo(ChartAxes)
