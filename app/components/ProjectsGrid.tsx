"use client"
import { AnimatedCard, HeroOffset } from "./AnimatedCard"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import entitledPreview from "@/app/images/entitled-preview-v2.webp"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useIsMobile"
import { useMemo, useRef } from "react"
import { useMotionValueEvent, useScroll, useSpring } from "motion/react"
import * as motion from "motion/react-m"
const ids = ["automedics", "entitled", "iao", "bespoke"]

export function ProjectsGrid({ className }: { className?: string }) {
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const responsiveScale = isMobile ? 0.27 : 0.7

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["13% end", "start start"] : ["18% end", "start start"],
  })
  const progress = useSpring(scrollYProgress, { stiffness: isMobile ? 120 : 220, damping: isMobile ? 40 : 90 })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    entitled: { rot: 9, s: responsiveScale, dx: isMobile ? -200 : -30, dy: isMobile ? -120 : -40 },
    iao: { rot: -5, s: responsiveScale, dx: isMobile ? -210 : -60, dy: isMobile ? -130 : -40 },
    automedics: { rot: 5, s: responsiveScale, dx: isMobile ? -205 : -45, dy: isMobile ? -130 : -25 },
    bespoke: { rot: 12, s: responsiveScale, dx: isMobile ? -210 : -50, dy: isMobile ? -110 : -10 },
  }

  const offsets = useMemo(() => {
    return Object.fromEntries(
      ids.map((id) => {
        const base = rawOffsets[id]
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

  const ref = useRef<HTMLDivElement>(null)

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!ref.current) return
    ref.current.dataset.reveal = v >= 0.6 ? "false" : "true"
  })

  return (
    <section id="projects" className={clsx("relative", className)}>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.9 }}
        className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2"
        ref={ref}
        data-reveal="false"
      >
        <AnimatedCard
          key={"Entitled"}
          src={entitledPreview}
          alt={"Entitled Preview"}
          offset={offsets["entitled"]}
          data-grid-id="entitled"
          color="#000000"
          type="Event Management"
          isMobile={isMobile}
          progress={progress}
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
          progress={progress}
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
          progress={progress}
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
          progress={progress}
        />
      </motion.div>
    </section>
  )
}
