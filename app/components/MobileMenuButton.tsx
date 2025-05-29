"use client"
import clsx from "clsx"
import { useMotionValueEvent } from "motion/react"
import { useScroll } from "motion/react"
import { env } from "../utils/env"
import { DotMenuIcon } from "./DotMenuIcon"

export const MobileMenuButton: React.FC = () => {
  const toggle = () => {
    if (env.isClient) {
      document.body.dataset.mobileMenu = document.body.dataset.mobileMenu === "open" ? "closed" : "open"
      console.log(document.body.dataset)
    }
  }

  const { scrollY } = useScroll()
  const isDesktop = env.isClient && window.innerWidth >= 768

  useMotionValueEvent(scrollY, "change", (current) => {
    if (!isDesktop) return
    const diff = current - (scrollY.getPrevious() ?? 0)
    document.body.dataset.scrolled = diff > 0 ? "down" : "up"
  })

  return (
    <button
      type="button"
      aria-label="Toggle navigation"
      onMouseEnter={() => {
        if (isDesktop) document.body.dataset.scrolled = "up"
      }}
      onClick={() => {
        if (!isDesktop) toggle()
      }}
      className={clsx("dot-menu-icon-container group right-3 h-6 w-6 text-sm duration-200 hover:cursor-pointer md:absolute")}
    >
      <DotMenuIcon />
    </button>
  )
}
