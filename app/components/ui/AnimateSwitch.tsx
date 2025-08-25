"use client"

import { ReactNode } from "react"
import { useIsMobile } from "../../hooks/useMediaQuery"
import { useReducedMotion } from "motion/react"

interface AnimateSwitchProps {
  animate: ReactNode
  static: ReactNode
  breakpoint?: number
}

/**
 * Render the `animate` version if allowed, otherwise render `static`.
 */
export function AnimateSwitch({ animate, static: staticVersion, breakpoint = 768 }: AnimateSwitchProps) {
  const isMobile = useIsMobile(breakpoint)
  const prefersReducedMotion = useReducedMotion()

  return <>{!isMobile && !prefersReducedMotion ? animate : staticVersion}</>
}
