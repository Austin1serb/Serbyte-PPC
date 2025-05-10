"use client"

import { ReactNode, Suspense } from "react"
import dynamic from "next/dynamic"
import { useIsMobile } from "@/hooks/useIsMobile" // your singleton hook
import { useReducedMotion } from "motion/react"

export type Importer = () => Promise<{ default: React.ComponentType<unknown> }>

interface DeviceRouterProps {
  /** async import for desktop/large-screen variant */
  desktop: Importer
  /** async import for mobile/reduced-motion variant */
  mobile: Importer
  /** tailwind-style max-width at which we switch to mobile (px) */
  breakpoint?: number
  /** optional placeholder while the chunk streams */
  fallback?: ReactNode
}

export default function DeviceRouter({ desktop, mobile, breakpoint = 768, fallback = null }: DeviceRouterProps) {
  const isMobile = useIsMobile(breakpoint)
  const prefersNoAnimation = useReducedMotion()

  /* Decide which importer to use. The *other* chunk is never requested. */
  const Loader = dynamic(() => (isMobile || prefersNoAnimation ? mobile() : desktop()), { ssr: false })

  return (
    <Suspense fallback={fallback}>
      <Loader />
    </Suspense>
  )
}
