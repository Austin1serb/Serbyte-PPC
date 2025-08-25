"use client"
import clsx from "clsx"
import { useMotionValueEvent } from "motion/react"
import { useScroll } from "motion/react"
import { isClient } from "../../utils/env"
import { useIsMobile } from "../../hooks/useMediaQuery"
import { DotMenuIcon } from "./DotMenuIcon"
import { useUI } from "@react-zero-ui/core"
import { useRef } from "react"

export const MobileMenuButton: React.FC = () => {
  const [, setScrolled] = useUI<"up" | "down">("scrolled", "up")
  const [, setMobileMenu] = useUI<"open" | "closed">("mobile-menu", "closed")

  const toggle = () => {
    if (isClient) {
      setMobileMenu((prev) => (prev === "open" ? "closed" : "open"))
    }
  }

  const { scrollY } = useScroll()
  const isDesktop = !useIsMobile(768, () => {
    setMobileMenu("closed")
  })

  // Hysteresis state: only flip direction after reversing by at least this many pixels
  const HYSTERESIS_PX = 20
  const committedDirectionRef = useRef<"up" | "down">("up")
  const pivotYRef = useRef<number | null>(null)

  useMotionValueEvent(scrollY, "change", (current) => {
    if (!isDesktop) return
    const previous = scrollY.getPrevious() ?? current
    const diff = current - previous
    const instantaneousDirection: "up" | "down" = diff > 0 ? "up" : "down"

    // If continuing in the same committed direction, reset pivot and ensure UI reflects it
    if (instantaneousDirection === committedDirectionRef.current) {
      pivotYRef.current = current
      setScrolled(committedDirectionRef.current)
      return
    }

    // Direction reversed: establish pivot if needed
    if (pivotYRef.current === null) {
      pivotYRef.current = current
    }

    const distanceFromPivot = Math.abs(current - pivotYRef.current)
    if (distanceFromPivot >= HYSTERESIS_PX) {
      committedDirectionRef.current = instantaneousDirection
      setScrolled(instantaneousDirection)
      pivotYRef.current = current
    }
  })

  return (
    <button
      type="button"
      aria-label="Toggle navigation"
      onMouseEnter={() => {
        if (isDesktop) setScrolled("down")
      }}
      onClick={() => {
        if (!isDesktop) toggle()
      }}
      className={clsx(
        "md:scrolled-down:opacity-0 md:scrolled-down:pointer-events-none group right-3 h-6 w-6 text-sm transition-all duration-300 ease-in-out hover:cursor-pointer md:absolute"
      )}
    >
      <DotMenuIcon />
    </button>
  )
}
