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
}

export const AnimatedElement: React.FC<AnimatedElementProps<ElementType>> = ({
  element,
  delay = 0,
  duration = 0.5,
  className = "",
  children,
  fadeDirection = "none",
  offsetPx = 500,
  blur = 5,
  style,
  ...rest
}) => {
  const MotionTag = m[element as keyof typeof m] as ElementType

  const directions = {
    left: { x: -offsetPx },
    right: { x: offsetPx },
    top: { y: -offsetPx },
    bottom: { y: offsetPx },
    none: { x: 0, y: 0 },
  }

  const variants = {
    hidden: {
      opacity: 0,
      filter: `blur(${blur}px)`,
      ...directions[fadeDirection],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <MotionTag className={className} variants={variants} initial="hidden" animate="visible" style={style} {...rest}>
      {children}
    </MotionTag>
  )
}
