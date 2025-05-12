"use client"
import { useScroll, useTransform, useSpring, useMotionValueEvent } from "motion/react"
import { StaticImageData } from "next/image"
import { useIsMobile } from "../hooks/useIsMobile"
import { Card } from "./Card"
import * as m from "motion/react-m"
import { useState } from "react"
import clsx from "clsx"
export type HeroOffset = {
  x: number
  y: number
  rot?: number
  s?: number
  dx?: number // fine-tune X
  dy?: number // fine-tune Y
  color?: string
  type?: string
}

export function AnimatedCard({
  src,
  alt,
  offset,
  color,
  type,
  "data-grid-id": gridId,
}: {
  src: StaticImageData
  alt: string
  offset: HeroOffset
  color: string
  "data-grid-id": string
  type?: string
}) {
  const isMobile = useIsMobile()

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["13% end", "start start"] : ["18% end", "start start"],
  })

  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 90 })

  const finalX = offset?.x + (offset?.dx ?? 0)
  const finalY = offset?.y + (offset?.dy ?? 0)
  const finalScale = offset?.s ?? 1

  const x = useTransform(progress, [0, 1], [0, finalX])
  const y = useTransform(progress, [0, 1], [0, finalY])
  const scale = useTransform(progress, [0, 1], [1, finalScale])
  const rotate = useTransform(progress, [0, 1], [0, offset?.rot ?? 0])

  const [reveal, setReveal] = useState(false)

  // flip when we cross 50 %
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v >= 0.6 && !reveal) setReveal(true)
    else if (v < 0.6 && reveal) setReveal(false)
  })

  return (
    <div data-grid-id={gridId}>
      <m.div
        initial={{ opacity: 0, x: 0, y: 0, scale: 1, rotate: 0 }}
        animate={{ opacity: 1, transition: { opacity: { delay: 0.35 } } }}
        style={{ x, y, scale, rotate, willChange: "transform, opacity" }}
        className={clsx("group relative h-full w-full rounded-2xl", reveal && "hover-target [&_span]:opacity-0")}
        // data-text={!reveal ? "View Project" : null}
      >
        <Card src={src} alt={alt} color={color} type={type} />
      </m.div>
    </div>
  )
}
