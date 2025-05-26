// useChartScaling.ts
import { useMemo } from "react"
import { DataPoint, LineSeriesData, ScalingMethod, ChartDimensions, ChartScaling, ScaledPoint } from "./types"

// Scaling functions
const scalingFunctions = {
  linear: (value: number) => value,
  logarithmic: (value: number, min: number) => {
    const offset = min <= 0 ? Math.abs(min) + 1 : 0
    return Math.log(value + offset)
  },
  sqrt: (value: number, min: number) => {
    const offset = min < 0 ? Math.abs(min) : 0
    return Math.sqrt(value + offset)
  },
  auto: (value: number, min: number, max: number) => {
    if (max / (min > 0 ? min : 1) > 100) {
      return scalingFunctions.logarithmic(value, min)
    } else if (max / (min > 0 ? min : 1) > 10) {
      return scalingFunctions.sqrt(value, min)
    }
    return value
  },
}

export function useChartScaling(
  series: LineSeriesData[],
  dimensions: ChartDimensions,
  scaling: ScalingMethod = "auto",
  smoothing: boolean = true
): ChartScaling {
  return useMemo(() => {
    // Find min/max values across all series
    let minValue = Infinity
    let maxValue = -Infinity
    let minDate = Infinity
    let maxDate = -Infinity

    const seriesMinMax = series.map(() => ({ min: Infinity, max: -Infinity }))

    series.forEach(({ data }, seriesIndex) => {
      data.forEach((point) => {
        const value = point.value
        minValue = Math.min(minValue, value)
        maxValue = Math.max(maxValue, value)

        seriesMinMax[seriesIndex].min = Math.min(seriesMinMax[seriesIndex].min, value)
        seriesMinMax[seriesIndex].max = Math.max(seriesMinMax[seriesIndex].max, value)

        const timestamp = new Date(point.date).getTime()
        minDate = Math.min(minDate, timestamp)
        maxDate = Math.max(maxDate, timestamp)
      })
    })

    // Add buffer to top of chart
    const yMax = maxValue + (maxValue - minValue) * 0.1

    // Generate scaled points for each series
    const applyScaling = (value: number, min: number, max: number, seriesIndex: number) => {
      if (scaling === "independent") {
        const seriesMin = seriesMinMax[seriesIndex].min
        const seriesMax = seriesMinMax[seriesIndex].max
        const seriesYMax = seriesMax + (seriesMax - seriesMin) * 0.1
        return (value - seriesMin) / (seriesYMax - seriesMin)
      } else {
        const scaleFn = scalingFunctions[scaling]
        const scaledValue = scaleFn(value, min, max)
        const scaledMin = scaleFn(min, min, max)
        const scaledMax = scaleFn(yMax, min, max)
        return (scaledValue - scaledMin) / (scaledMax - scaledMin)
      }
    }
    const allDates = new Set<string>()
    series.forEach(({ data }) => {
      data.forEach((point) => {
        allDates.add(point.date)
      })
    })

    // Sort dates chronologically
    const sortedDates = Array.from(allDates).sort((a, b) => {
      return new Date(a).getTime() - new Date(b).getTime()
    })

    // Generate scaled points for each series
    const getScaledPoints = (data: DataPoint[], seriesIndex: number) => {
      // Create a map of dates to data points for faster lookup
      const dateMap = new Map<string, DataPoint>()
      data.forEach((point) => {
        dateMap.set(point.date, point)
      })
      // Generate points for all dates (using null for missing dates)
      return sortedDates
        .map((date) => {
          const point = dateMap.get(date)

          // Skip if this series doesn't have this date
          if (!point) return null

          const x = ((new Date(date).getTime() - minDate) / (maxDate - minDate)) * dimensions.chartWidth
          const normalizedY = applyScaling(point.value, minValue, yMax, seriesIndex)
          const y = dimensions.chartHeight - normalizedY * dimensions.chartHeight

          return { x, y, ...point }
        })
        .filter(Boolean) // Remove null entries
    }

    // Generate SVG path for a series
    // Generate SVG path for a series
    const getPath = (points: ScaledPoint[]): string => {
      if (!points.length) return ""

      if (smoothing) {
        let path = `M ${points[0].x},${points[0].y}`
        for (let i = 0; i < points.length - 1; i++) {
          const current = points[i]
          const next = points[i + 1]
          const controlPointX1 = current.x + (next.x - current.x) / 3
          const controlPointX2 = current.x + (2 * (next.x - current.x)) / 3
          path += ` C ${controlPointX1},${current.y} ${controlPointX2},${next.y} ${next.x},${next.y}`
        }
        return path
      } else {
        return points.reduce((path, point, i) => {
          return path + (i === 0 ? `M ${point.x},${point.y}` : ` L ${point.x},${point.y}`)
        }, "")
      }
    }

    // Generate scaled series data
    const scaledSeries = series.map((s, i) => {
      const points = getScaledPoints(s.data, i)
      return {
        points,
        color: s.color,
        label: s.label,
        path: getPath(points),
      }
    })

    // Y-axis ticks with appropriate scaling
    const yTickCount = dimensions.chartHeight < 300 ? 3 : 5
    const yAxisTicks = []

    for (let i = 0; i <= yTickCount; i++) {
      let value
      let y

      if (scaling === "logarithmic") {
        const offset = minValue <= 0 ? Math.abs(minValue) + 1 : 0
        const logMin = Math.log(minValue + offset)
        const logMax = Math.log(yMax + offset)
        const logValue = logMin + (logMax - logMin) * (i / yTickCount)
        value = Math.exp(logValue) - offset
        const normalizedY = (logValue - logMin) / (logMax - logMin)
        y = dimensions.chartHeight - normalizedY * dimensions.chartHeight
      } else if (scaling === "sqrt") {
        const offset = minValue < 0 ? Math.abs(minValue) : 0
        const sqrtMin = Math.sqrt(minValue + offset)
        const sqrtMax = Math.sqrt(yMax + offset)
        const sqrtValue = sqrtMin + (sqrtMax - sqrtMin) * (i / yTickCount)
        value = Math.pow(sqrtValue, 2) - offset
        const normalizedY = (sqrtValue - sqrtMin) / (sqrtMax - sqrtMin)
        y = dimensions.chartHeight - normalizedY * dimensions.chartHeight
      } else {
        value = minValue + (yMax - minValue) * (i / yTickCount)
        y = dimensions.chartHeight - ((value - minValue) / (yMax - minValue)) * dimensions.chartHeight
      }

      yAxisTicks.push({
        value: Math.round(value),
        y,
      })
    }
    // NEW: X-axis ticks aligned with actual data points
    const xAxisTicks = (() => {
      // Determine how many ticks to show based on available width
      let tickCount: number
      if (dimensions.chartWidth < 300) tickCount = 2
      else if (dimensions.chartWidth < 500) tickCount = 3
      else if (dimensions.chartWidth < 800) tickCount = 5
      else tickCount = sortedDates.length

      // Limit to a maximum number of ticks for readability
      tickCount = Math.min(tickCount, sortedDates.length)

      // Choose evenly spaced dates from the sorted dates
      const ticks = []

      if (tickCount === 1) {
        // Just show the first date
        const date = sortedDates[0]
        const x = ((new Date(date).getTime() - minDate) / (maxDate - minDate)) * dimensions.chartWidth
        ticks.push({
          label: new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
          x,
        })
      } else {
        // For more than one tick, distribute them evenly
        const step = Math.max(1, Math.floor(sortedDates.length / (tickCount - 1)))

        for (let i = 0; i < sortedDates.length; i += step) {
          // Ensure we include the last date
          if (i > 0 && i + step >= sortedDates.length && i < sortedDates.length - 1) {
            i = sortedDates.length - 1
          }

          const date = sortedDates[i]
          const x = ((new Date(date).getTime() - minDate) / (maxDate - minDate)) * dimensions.chartWidth

          // Format based on screen size
          const format = dimensions.chartWidth < 500 ? ({ month: "short" } as const) : ({ month: "short", day: "numeric" } as const)

          ticks.push({
            label: new Date(date).toLocaleDateString("en-US", format),
            x,
          })

          // Stop once we've collected enough ticks
          if (ticks.length >= tickCount) break
        }
      }

      return ticks
    })()

    return {
      minValue,
      maxValue,
      minDate,
      maxDate,
      yMax,
      seriesMinMax,
      yAxisTicks,
      xAxisTicks,
      scaledSeries,
    }
  }, [series, dimensions, scaling, smoothing])
}
