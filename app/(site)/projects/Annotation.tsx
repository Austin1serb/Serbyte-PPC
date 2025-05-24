"use client"
import clsx from "clsx"
import { MotionValue, useTransform } from "motion/react"
import * as m from "motion/react-m"

type Rect = { x: number; y: number; w: number; h: number }
export interface AnnotationData {
  id: string
  rect: Rect
  text?: string
  start: number
  end: number
  className?: string
}

interface Props {
  data: AnnotationData
  progress: MotionValue<number>
}

export const Annotation = ({ data: a, progress }: Props) => {
  const opacity = useTransform(progress, [a.start - 0.05, a.start, a.end, a.end + 0.05], [0, 1, 1, 0])
  const scale = useTransform(progress, [a.start - 0.05, a.start, a.end, a.end + 0.05], [0, 1, 1, 0])

  return (
    <m.div
      style={{
        opacity,
        left: `${a.rect.x}%`,
        top: `${a.rect.y}%`,
        width: `${a.rect.w}%`,
        height: `${a.rect.h}%`,
        filter: "none",
      }}
      className="pointer-events-none absolute"
    >
      <div className="absolute inset-0 bg-white/75 blur-2xl" />

      <div className="absolute inset-0 border-3! border-solid! border-yellow-500!" />
      {a.text && (
        <m.div
          className={clsx(
            "absolute -bottom-11 -left-2 ml-3 rounded-2xl rounded-tl-none bg-white px-3 py-2 text-sm whitespace-nowrap text-black shadow-lg",
            a.className
          )}
        >
          {a.text}
        </m.div>
      )}
    </m.div>
  )
}
