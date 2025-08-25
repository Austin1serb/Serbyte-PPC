"use client"
import { usePathname } from "next/navigation"
import { AnimatePresence } from "motion/react"
import { MotionDiv } from "../utils/lazy-ui"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <MotionDiv
        key={pathname}
        className="fixed inset-0 z-50" // full-viewport layer
        initial={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
        animate={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
        exit={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
      >
        {/* Darken old page while we slide the mask */}
        <div className="absolute inset-0 bg-neutral-900/60" />
      </MotionDiv>

      {/* NEW PAGE CONTENT */}
      <MotionDiv
        key={pathname + "-content"}
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "-20%" }}
        transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
        className="min-h-screen"
      >
        {children}
      </MotionDiv>
    </AnimatePresence>
  )
}
