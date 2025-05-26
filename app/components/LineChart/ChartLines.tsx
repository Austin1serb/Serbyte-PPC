// ChartLines.tsx
import React, { memo } from "react"
import { motion } from "framer-motion"
import { ScaledSeries } from "./types"

interface ChartLinesProps {
  series: ScaledSeries[]
  onPointHover: (seriesIndex: number, pointIndex: number) => void
  activePoint: { series: number; point: number } | null
}

const ChartLines: React.FC<ChartLinesProps> = ({ series, onPointHover, activePoint }) => {
  return (
    <>
      {series.map((s, seriesIndex) => (
        <g key={`series-${seriesIndex}`} className="chart-series">
          {/* The line */}
          <motion.path
            d={s.path}
            fill="none"
            stroke={s.color}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Data points */}
          {s.points.map((point, pointIndex) => (
            <g key={`point-${seriesIndex}-${pointIndex}`}>
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill={s.color}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + pointIndex * 0.05 }}
                onMouseEnter={() => onPointHover(seriesIndex, pointIndex)}
                onMouseLeave={() => onPointHover(-1, -1)}
                onTouchStart={() => onPointHover(seriesIndex, pointIndex)}
                className="cursor-pointer hover:opacity-80 transition-all duration-150"
                aria-label={`Data point: ${point.value} on ${new Date(point.date).toLocaleDateString()}`}
              />
            </g>
          ))}
        </g>
      ))}
    </>
  )
}

export default memo(ChartLines)
