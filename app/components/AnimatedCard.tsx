import { useTransform, MotionValue } from "motion/react"
import { StaticImageData } from "next/image"
import { Card } from "./Card"
import * as m from "motion/react-m"
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

  progress,
}: {
  src: StaticImageData
  alt: string
  offset: HeroOffset
  color: string
  "data-grid-id": string
  type: string
  isMobile: boolean

  progress: MotionValue<number>
}) {
  const x = useTransform(progress, [0, 1], [0, offset.x])
  const y = useTransform(progress, [0, 1], [0, offset.y])
  const scale = useTransform(progress, [0, 1], [1, offset.s])
  const rotate = useTransform(progress, [0, 1], [0, offset.rot])

  return (
    // TODO CHANGE LINK TO PROJECTS
    <Link href={`/projects/bespoke`} data-grid-id={gridId} className="reveal-false:pointer-events-none">
      <m.div
        style={{ x, y, scale, rotate, willChange: "transform" }}
        className={clsx("group relative h-full w-full reveal-false:[&_span]:opacity-0 ")}
        data-text={"View Project"}
      >
        <Card src={src} alt={alt} color={color} type={type} />
      </m.div>
    </Link>
  )
}
