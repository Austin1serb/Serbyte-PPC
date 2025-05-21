"use client"
import { AnimatedCard, HeroOffset } from "./AnimatedCard"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import entitledPreview from "@/app/images/entitled-preview-v2.webp"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useIsMobile"
import { useMemo } from "react"

const ids = ["automedics", "entitled", "iao", "bespoke"]

export function ProjectsGrid({ className }: { className?: string }) {
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    entitled: { rot: 4, s: isMobile ? 0.3 : 0.7, dx: isMobile ? -230 : -30, dy: -40 },

    iao: { rot: -5, s: isMobile ? 0.3 : 0.7, dx: isMobile ? -200 : -90, dy: -40 },

    automedics: { rot: 5, s: isMobile ? 0.3 : 0.7, dx: isMobile ? -210 : -45, dy: -25 },

    bespoke: { rot: 10, s: isMobile ? 0.35 : 0.7, dx: isMobile ? -210 : -50, dy: -40 },
  }

  const offsets = useMemo(() => {
    return Object.fromEntries(
      ids.map((id) => {
        const base = rawOffsets[id] ?? { x: 0, y: 0 }
        const t = OFFSET_TUNING[id]
        return [
          id,
          {
            x: base.x! + t.dx!,
            y: base.y! + t.dy!,
            rot: t.rot!,
            s: t.s ?? 1,
          },
        ]
      })
    )
  }, [rawOffsets, isMobile])

  return (
    <section id="projects" className={clsx("relative", className)}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key={"Entitled"}
          src={entitledPreview}
          alt={"Entitled Preview"}
          offset={offsets["entitled"]}
          data-grid-id="entitled"
          color="#000000"
          type="Event Management"
          isMobile={isMobile}
        />
        <AnimatedCard
          key={"IAO"}
          src={iaoPreview}
          alt={"IAO Preview"}
          offset={offsets["iao"]}
          data-grid-id="iao"
          color="#13739C"
          type="Private Security"
          isMobile={isMobile}
        />
        <AnimatedCard
          key="Automedics"
          src={automedicsPreview}
          alt={"Automedics Preview"}
          offset={offsets["automedics"]}
          data-grid-id="automedics"
          color="#DA961A"
          type="Automotive Repair"
          isMobile={isMobile}
        />
        <AnimatedCard
          key="Bespoke"
          src={bespokePreview}
          alt={"Bespoke Preview"}
          offset={offsets["bespoke"]}
          data-grid-id="bespoke"
          color="#024EFC"
          type="Automotive Styling"
          isMobile={isMobile}
        />
      </div>
    </section>
  )
}
