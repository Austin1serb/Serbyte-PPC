"use client"

import { ReactNode } from "react"
import { useIsMobile } from "../hooks/useIsMobile"

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

  return <>{!isMobile ? animate : staticVersion}</>
}
