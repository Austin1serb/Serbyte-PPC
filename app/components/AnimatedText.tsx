"use client"

import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { ElementType } from "react"
import { useReducedMotion } from "motion/react"
import clsx from "clsx"

interface Props<T extends ElementType> {
  text: string
  element?: T
  once?: boolean
  className?: string
  threshold?: number
  offsetPx?: number
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
}

const letter = {
  hidden: {
    opacity: 0,
    y: "0.25em",
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
}

export const AnimatedText = <T extends ElementType>({ text, element, once = false, className = "", threshold = 0.5, offsetPx = 0, ...rest }: Props<T>) => {
  const prefersReducedMotion = useReducedMotion()
  const { ref, inView } = useInView({
    threshold,
    rootMargin: `0px 0px -${offsetPx}px 0px`,
    triggerOnce: once,
  })

  if (prefersReducedMotion) {
    const StaticTag = element as ElementType
    return (
      <StaticTag ref={ref} className={className} aria-label={text} {...rest}>
        {text}
      </StaticTag>
    )
  }

  // Motion-wrapped tag (e.g. motion.h2, motion.span, etc.)
  const MotionTag = motion[element as keyof typeof motion] as ElementType

  return (
    <MotionTag
      ref={ref}
      className={clsx(className, "**:mr-[-0.01em]")}
      aria-label={text}
      role="heading"
      {...rest}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letter} aria-hidden="true">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </MotionTag>
  )
}
