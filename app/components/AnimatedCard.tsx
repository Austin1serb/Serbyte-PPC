"use client"
import { MotionValue } from "motion/react"
import { StaticImageData } from "next/image"
import { Card } from "./Card"
import clsx from "clsx"
import { Link } from "../utils/Link"
import { useRef } from "react"
import { useCompositorSpring } from "../hooks/useLag"

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

  progress,
}: {
  src: StaticImageData
  alt: string
  offset: HeroOffset
  color: string
  "data-grid-id": string
  type: string

  progress: MotionValue<number>
}) {
  const ref = useRef<HTMLDivElement>(null)
  useCompositorSpring(ref, progress)
  return (
    <Link href={`/projects/${gridId}`} data-grid-id={gridId} className="reveal-false:pointer-events-none will-change-transform">
      <div
        ref={ref}
        style={
          {
            "--tx": `${offset.x}px`,
            "--ty": `${offset.y}px`,
            "--rot": `${offset.rot}deg`,
            "--sc": `${offset.s}`,
          } as React.CSSProperties
        }
        className={clsx("group relative h-full w-full reveal-false:[&_span]:opacity-0 contain-content transform-gpu")}
        data-text={"View Project"}
      >
        <Card src={src} alt={alt} color={color} type={type} />
      </div>
    </Link>
  )
}
