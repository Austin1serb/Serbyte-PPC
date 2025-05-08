"use client"
import { useScroll, useTransform, useSpring } from "motion/react"
import { StaticImageData } from "next/image"
import { useIsMobile } from "../hooks/useIsMobile"
import { Card } from "./Card"
import * as m from "motion/react-m"
export type HeroOffset = {
  x: number
  y: number
  rot?: number
  s?: number
  dx?: number // fine-tune X
  dy?: number // fine-tune Y
  color?: string
}

export function AnimatedCard({
  src,
  alt,
  offset,
  index,
  color,
  "data-grid-id": gridId,
}: {
  src: StaticImageData
  alt: string
  offset: HeroOffset
  index: number
  color: string
  "data-grid-id": string
}) {
  const isMobile = useIsMobile()

  const { scrollYProgress } = useScroll({
    offset: isMobile
      ? ["15% end", "start start"] // on mobile, complete animation earlier
      : ["20% end", "start start"], // desktop = normal
  })

  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 90 })

  const finalX = offset?.x + (offset?.dx ?? 0)
  const finalY = offset?.y + (offset?.dy ?? 0)
  const finalScale = offset?.s ?? 1

  const x = useTransform(progress, [0, 1], [0, finalX])
  const y = useTransform(progress, [0, 1], [0, finalY])
  const scale = useTransform(progress, [0, 1], [1, finalScale])
  const rotate = useTransform(progress, [0, 1], [0, offset?.rot ?? 0])

  return (
    <div data-grid-id={gridId}>
      <m.div
        initial={{ opacity: 0, x: 0, y: 0, scale: 1, rotate: 0 }}
        animate={{ opacity: 1, transition: { opacity: { delay: 0.35 } } }}
        style={{ x, y, scale, rotate, willChange: "transform, opacity" }}
        className="hover-target group relative rounded-2xl"
        data-text="View Project"
      >
        <Card src={src} alt={alt} index={index} color={color} />
      </m.div>
    </div>
  )
}
