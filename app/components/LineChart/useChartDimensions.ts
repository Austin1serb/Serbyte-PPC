// useChartDimensions.ts
import { useState, useEffect, useRef } from "react"
import { ChartDimensions } from "./types"

export function useChartDimensions(aspectRatio = 16 / 9): [React.RefObject<HTMLDivElement>, ChartDimensions] {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState<ChartDimensions>({
    width: 1000,
    height: 1000 / aspectRatio,
    chartWidth: 880,
    chartHeight: 1000 / aspectRatio - 120,
    padding: 60,
  })

  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect()
        const height = width / aspectRatio

        // Responsive padding based on size
        const padding = width < 640 ? 40 : 60

        setDimensions({
          width,
          height,
          chartWidth: width - padding * 2,
          chartHeight: height - padding * 2,
          padding,
        })
      }
    }

    // Initial measurement
    updateDimensions()

    // Create ResizeObserver
    const resizeObserver = new ResizeObserver(updateDimensions)
    resizeObserver.observe(containerRef.current)

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current)
      }
      resizeObserver.disconnect()
    }
  }, [aspectRatio])

  return [containerRef, dimensions]
}
