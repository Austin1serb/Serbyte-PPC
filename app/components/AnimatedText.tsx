import { ElementType } from "react"
import clsx from "clsx"
import * as m from "motion/react-m"

interface Props<T extends ElementType> {
  text: string
  element: T
  once?: boolean
  className?: string
  margin?: number
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
}

const letter = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
}

export const AnimatedText = <T extends ElementType>({ text, element, once = false, className = "", margin = 0, ...rest }: Props<T>) => {
  // Motion-wrapped tag (e.g. motion.h2, motion.span, etc.)
  // const MotionTag = m[element as keyof typeof m] as ElementType

  return (
    <m.h2
      {...rest}
      className={clsx(className)}
      aria-label={text}
      role="heading"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: `0px 0px -${margin}px 0px` }}
    >
      {text.split("").map((char, i) => (
        <m.span key={i} variants={letter} aria-hidden="true" className="inline-block">
          {char === " " ? "\u00A0" : char}
        </m.span>
      ))}
    </m.h2>
  )
}
