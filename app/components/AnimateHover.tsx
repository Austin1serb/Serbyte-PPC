// components/AnimateHover.tsx
"use client"
import { motion } from "motion/react"
import { ElementType, ReactNode } from "react"

interface AnimateHoverProps {
  element: ElementType
  fadeDirection?: "left" | "right" | "top" | "bottom" | "none"
  offsetPx?: number
  className?: string
  children: ReactNode
}

export const AnimateHover = ({ element, fadeDirection = "left", offsetPx = 20, className = "", children }: AnimateHoverProps) => {
  const MotionTag = motion[element as keyof typeof motion] as ElementType

  const directions = {
    left: { x: offsetPx },
    right: { x: -offsetPx },
    top: { y: offsetPx },
    bottom: { y: -offsetPx },
    none: {},
  }

  const variants = {
    rest: {
      opacity: 0,
      pointerEvents: "none",
      ...directions[fadeDirection],
    },
    hover: {
      opacity: 1,
      x: 0,
      y: 0,
      pointerEvents: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <MotionTag variants={variants} initial="rest" animate="rest" className={className}>
      {children}
    </MotionTag>
  )
}
