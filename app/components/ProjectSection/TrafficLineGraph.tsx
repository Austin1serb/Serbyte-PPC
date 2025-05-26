// page.tsx
"use client"

import { LineChart } from "../LineChart"
import { useState, useMemo, useCallback } from "react"
import type { DataPoint } from "../LineChart"

export default function ChartDemo() {
  // Memoize data to prevent re-renders
  const chartData = useMemo(
    () => ({
      currentYear: [
        { date: "2025-03-01", value: 100 },
        { date: "2025-03-14", value: 200 },
        { date: "2025-03-30", value: 800 },
        { date: "2025-04-15", value: 4000 },
        { date: "2025-05-01", value: 3600 },
        { date: "2025-05-24", value: 3200 },
      ],
      previousYear: [
        { date: "2025-03-01", value: 90 },
        { date: "2025-03-14", value: 128 },
        { date: "2025-03-30", value: 110 },
        { date: "2025-04-15", value: 135 },
        { date: "2025-05-01", value: 185 },
        { date: "2025-05-24", value: 130 },
      ],
    }),
    []
  )

  // Track currently hovered data point
  const [hoveredPoint, setHoveredPoint] = useState<{
    seriesIndex: number
    pointIndex: number
    data: DataPoint
  } | null>(null)

  // Memoized callback for handling hover events
  const handlePointHover = useCallback((seriesIndex: number, pointIndex: number, data: DataPoint) => {
    setHoveredPoint({ seriesIndex, pointIndex, data })
  }, [])

  return (
    <div className="p-4 md:p-8 max-w-full">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Performance Chart</h1>

      <LineChart
        series={[
          { data: chartData.currentYear, color: "#00e6b2", label: "Current Year" },
          { data: chartData.previousYear, color: "#e65c00", label: "Previous Year" },
        ]}
        scaling="independent"
        onPointHover={handlePointHover}
      />

      {/* Optional: Display additional info about hovered point */}
      {hoveredPoint && (
        <div className="mt-4 p-4 bg-gray-800 rounded">
          <p>Selected: {new Date(hoveredPoint.data.date).toLocaleDateString()}</p>
          <p>Value: {hoveredPoint.data.value.toLocaleString()}</p>
          <p>Series: {hoveredPoint.seriesIndex === 0 ? "Current Year" : "Previous Year"}</p>
        </div>
      )}
    </div>
  )
}
