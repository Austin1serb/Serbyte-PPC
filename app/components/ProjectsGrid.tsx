"use client"
import { AnimatedCard, HeroOffset } from "./AnimatedCard"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import entitledPreview from "@/app/images/entitled-preview-v2.webp"
import clsx from "clsx"

import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useIsMobile"

const ids = ["automedics", "entitled", "iao", "bespoke"]

export function ProjectsGrid({ className }: { className?: string }) {
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    iao: { rot: 10, s: isMobile ? 0.31 : 0.82, dx: isMobile ? -90 : -20, dy: -10 },

    entitled: { rot: -12, s: isMobile ? 0.36 : 0.8, dx: isMobile ? -90 : 0, dy: -20 },

    automedics: { rot: 4, s: isMobile ? 0.33 : 0.81, dx: isMobile ? -90 : 0, dy: -15 },

    bespoke: { rot: -5, s: isMobile ? 0.39 : 0.78, dx: isMobile ? -90 : 0, dy: -15 },
  }

  const offsets = Object.fromEntries(
    Object.entries(rawOffsets).map(([id, base]) => [
      id,
      {
        ...OFFSET_TUNING[id],
        x: (base?.x ?? 0) + (OFFSET_TUNING[id]?.dx ?? 0),
        y: (base?.y ?? 0) + (OFFSET_TUNING[id]?.dy ?? 0),
        // rot: OFFSET_TUNING[id]?.rot ?? 0,
        // s: OFFSET_TUNING[id]?.s ?? 0,
      },
    ])
  )

  return (
    <section id="projects" className={clsx("relative", className)}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key={"Entitled"}
          src={entitledPreview}
          alt={"Entitled Preview"}
          offset={offsets?.["entitled"]}
          data-grid-id="entitled"
          color="#000000"
          type="Event Management"
        />
        <AnimatedCard key={"IAO"} src={iaoPreview} alt={"IAO Preview"} offset={offsets?.["iao"]} data-grid-id="iao" color="#13739C" type="Private Security" />
        <AnimatedCard
          key="Automedics"
          src={automedicsPreview}
          alt={"Automedics Preview"}
          offset={offsets?.["automedics"]}
          data-grid-id="automedics"
          color="#DA961A"
          type="Automotive Repair"
        />
        <AnimatedCard
          key="Bespoke"
          src={bespokePreview}
          alt={"Bespoke Preview"}
          offset={offsets?.["bespoke"]}
          data-grid-id="bespoke"
          color="#024EFC"
          type="Automotive Styling"
        />
      </div>
    </section>
  )
}
