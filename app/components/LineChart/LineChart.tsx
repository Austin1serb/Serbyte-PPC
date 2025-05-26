// LineChart.tsx
import React, { useState, memo } from "react"
import { LineChartProps } from "./types"
import { useChartDimensions } from "./useChartDimensions"
import { useChartScaling } from "./useChartScaling"
import ChartAxes from "./ChartAxes"
import ChartLines from "./ChartLines"
import ChartLegend from "./ChartLegend"
import ChartToolTip from "./ChartToolTip"

export const LineChart: React.FC<LineChartProps> = memo(
  ({ series, aspectRatio = 16 / 9, darkMode = true, scaling = "auto", smoothing = true, className = "", onPointHover }) => {
    // Get container dimensions with custom hook
    const [containerRef, dimensions] = useChartDimensions(aspectRatio)

    // Get scaled data with custom hook
    const { yAxisTicks, xAxisTicks, scaledSeries } = useChartScaling(series, dimensions, scaling, smoothing)

    // Tracking active point for tooltips
    const [activePoint, setActivePoint] = useState<{ series: number; point: number } | null>(null)

    // Handle point hover/touch
    const handlePointInteraction = (seriesIndex: number, pointIndex: number) => {
      const newActivePoint = seriesIndex >= 0 && pointIndex >= 0 ? { series: seriesIndex, point: pointIndex } : null

      setActivePoint(newActivePoint)

      if (onPointHover && newActivePoint) {
        const point = series[seriesIndex].data[pointIndex]
        onPointHover(seriesIndex, pointIndex, point)
      }
    }

    return (
      <div
        ref={containerRef}
        className={`relative w-full ${darkMode ? "bg-black text-white" : "bg-white text-black"} ${className}`}
        style={{ height: dimensions.height }}
        data-testid="line-chart"
      >
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          preserveAspectRatio="xMidYMid meet"
          className="font-sans"
          aria-label="Line chart visualization"
          role="img"
        >
          <g transform={`translate(${dimensions.padding}, ${dimensions.padding})`}>
            {/* Chart axes and grid */}
            <ChartAxes dimensions={dimensions} yAxisTicks={yAxisTicks} xAxisTicks={xAxisTicks} />

            {/* Chart lines and points */}
            <ChartLines series={scaledSeries} onPointHover={handlePointInteraction} activePoint={activePoint} />

            {/* Tooltip */}
            <ChartToolTip activePoint={activePoint} series={scaledSeries} chartWidth={dimensions.chartWidth} />
          </g>
        </svg>

        {/* Legend */}
        <ChartLegend series={series} position={dimensions.width < 640 ? "bottom-left" : "top-right"} />

        {/* Accessibility note for mobile */}
        {dimensions.width < 500 && <div className="absolute bottom-1 right-1 text-[10px] text-gray-500 opacity-70">Tap points for details</div>}
      </div>
    )
  }
)

// Add display name for debugging
LineChart.displayName = "LineChart"
