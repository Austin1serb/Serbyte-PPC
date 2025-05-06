import useWindowSize from "./useWindowSize"

type BreakpointKey = "sm" | "md" | "lg" | "xl" | "2xl"

const breakpointMap: Record<BreakpointKey, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

export function useIsMobile(breakpoint: BreakpointKey | number = "md") {
  const { width } = useWindowSize()
  const threshold = typeof breakpoint === "string" ? breakpointMap[breakpoint] : breakpoint

  return width < threshold
}
