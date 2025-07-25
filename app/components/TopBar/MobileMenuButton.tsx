"use client"
import clsx from "clsx"
import { useMotionValueEvent } from "motion/react"
import { useScroll } from "motion/react"
import { isClient } from "../../utils/env"
import { useIsMobile } from "../../hooks/useIsMobile"
import { DotMenuIcon } from "./DotMenuIcon"

export const MobileMenuButton: React.FC = () => {
  const toggle = () => {
    if (isClient) {
      document.body.dataset.mobileMenu = document.body.dataset.mobileMenu === "open" ? "closed" : "open"
    }
  }

  const { scrollY } = useScroll()
  const isDesktop = !useIsMobile(768, () => {
    document.body.dataset.mobileMenu = "closed"
  })

  useMotionValueEvent(scrollY, "change", (current) => {
    if (!isDesktop) return
    const diff = current - (scrollY.getPrevious() ?? 0)
    document.body.dataset.scrolled = diff > 0 ? "up" : "down"
  })

  return (
    <button
      type="button"
      aria-label="Toggle navigation"
      onMouseEnter={() => {
        if (isDesktop) document.body.dataset.scrolled = "down"
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
