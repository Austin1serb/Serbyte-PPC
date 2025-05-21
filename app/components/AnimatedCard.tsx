"use client"
import { useScroll, useTransform, useSpring, useMotionValueEvent } from "motion/react"
import { StaticImageData } from "next/image"
import { Card } from "./Card"
import * as m from "motion/react-m"
import { useEffect, useState } from "react"
import clsx from "clsx"
import { Link } from "../utils/Link"

export type HeroOffset = {
  x: number
  y: number
  rot: number
  s: number
  dx?: number // fine-tune X
  dy?: number // fine-tune Y
}

export function AnimatedCard({
  src,
  alt,
  offset,
  color,
  type,
  "data-grid-id": gridId,
  isMobile,
}: {
  src: StaticImageData
  alt: string
  offset: HeroOffset
  color: string
  "data-grid-id": string
  type: string
  isMobile: boolean
}) {
  // TODO pass scroll progress to the parent and reveal
  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["13% end", "start start"] : ["18% end", "start start"],
  })

  const progress = useSpring(scrollYProgress, { stiffness: isMobile ? 120 : 220, damping: isMobile ? 40 : 90 })

  const x = useTransform(progress, [0, 1], [0, offset.x])
  const y = useTransform(progress, [0, 1], [0, offset.y])
  const scale = useTransform(progress, [0, 1], [1, offset.s])
  const rotate = useTransform(progress, [0, 1], [0, offset.rot])

  const [reveal, setReveal] = useState(false)

  // flip when we cross 50 %
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v >= 0.6 && !reveal) setReveal(true)
    else if (v < 0.6 && reveal) setReveal(false)
  })

  useEffect(() => {
    console.log("reveal: ", offset.x)
  }, [offset])

  return (
    <Link href={`/projects/${gridId}`} data-grid-id={gridId}>
      <m.div
        // initial={{ opacity: 0, x: 0, y: 0, scale: 1, rotate: 0 }}
        // animate={{ opacity: 1, transition: { opacity: { delay: 0.35 } } }}
        style={{ x, y, scale, rotate, willChange: "transform" }}
        className={clsx("group relative h-full w-full", reveal && "hover-target [&_span]:opacity-0")}
        // data-text={!reveal ? "View Project" : null}
      >
        <Card src={src} alt={alt} color={color} type={type} />
      </m.div>
    </Link>
  )
}
