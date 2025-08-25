import { useMemo } from "react"

import { MotionProps } from "motion/react"
import { ReactNode, ElementType } from "react"
import * as m from "motion/react-m"

interface AnimatedElementProps<T extends ElementType> extends MotionProps {
  element: T
  delay?: number
  duration?: number
  className?: string
  children?: ReactNode
  fadeDirection?: "left" | "right" | "bottom" | "top" | "none"
  offsetPx?: number
  blur?: number
  style?: React.CSSProperties
  margin?: string
}
// outside the component
const directionOffset = (dir: "left" | "right" | "top" | "bottom" | "none", offset: number) =>
  dir === "left" ? { x: -offset } : dir === "right" ? { x: offset } : dir === "top" ? { y: -offset } : dir === "bottom" ? { y: offset } : {}

export const AnimatedElement = <T extends ElementType>({
  element,
  delay = 0,
  duration = 0.5,
  fadeDirection = "none",
  offsetPx = 500,
  blur = 5,
  margin = "0px 0px 100px 0px",
  ...rest
}: AnimatedElementProps<T>) => {
  const MotionTag = m[element as keyof typeof m] as ElementType

  const variants = {
    hidden: { opacity: 0, ...directionOffset(fadeDirection, offsetPx) },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration, delay, ease: [0.2, 0.65, 0.3, 0.9] } },
  }

  return <MotionTag initial="hidden" whileInView="visible" viewport={{ once: true, margin: margin }} variants={variants} {...rest} />
}
