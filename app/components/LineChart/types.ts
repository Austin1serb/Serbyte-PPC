// types.ts
export interface DataPoint {
  date: string
  value: number
}

export type ScalingMethod = "linear" | "logarithmic" | "sqrt" | "auto" | "independent"

export interface LineSeriesData {
  data: DataPoint[]
  color: string
  label?: string
}

export interface LineChartProps {
  series: LineSeriesData[]
  aspectRatio?: number
  darkMode?: boolean
  scaling?: ScalingMethod
  smoothing?: boolean
  className?: string
  onPointHover?: (seriesIndex: number, pointIndex: number, data: DataPoint) => void
}

export interface ChartDimensions {
  width: number
  height: number
  chartWidth: number
  chartHeight: number
  padding: number
}

export interface ScaledPoint extends DataPoint {
  x: number
  y: number
}

export interface ScaledSeries {
  points: ScaledPoint[]
  color: string
  label?: string
  path: string
}

export interface AxisTick {
  value: number | string
  position: number
}

export interface ChartScaling {
  minValue: number
  maxValue: number
  minDate: number
  maxDate: number
  yMax: number
  seriesMinMax: Array<{ min: number; max: number }>
  yAxisTicks: Array<{ value: number; y: number }>
  xAxisTicks: Array<{ label: string; x: number }>
  scaledSeries: ScaledSeries[]
}
