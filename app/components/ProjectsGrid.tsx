"use client"
import { AnimatedCard, HeroOffset } from "./AnimatedCard"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import entitledPreview from "@/app/images/entitled-preview-v2.webp"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useIsMobile"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@austinserb/react-zero-ui"
const ids = ["automedics", "entitled", "iao", "bespoke"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const responsiveScale = isMobile ? 0.27 : 0.7
  const [, setReveal] = useUI<boolean>("reveal", false)

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "7% start"] : ["start start", "10% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 40 : 90
  const progress = useSpring(scrollYProgress, { stiffness, damping })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    entitled: { rot: 9, s: responsiveScale, dx: isMobile ? -200 : -30, dy: isMobile ? -120 : -40 },
    iao: { rot: -5, s: responsiveScale, dx: isMobile ? -210 : -60, dy: isMobile ? -130 : -40 },
    automedics: { rot: 5, s: responsiveScale, dx: isMobile ? -205 : -45, dy: isMobile ? -130 : -25 },
    bespoke: { rot: 12, s: responsiveScale, dx: isMobile ? -210 : -50, dy: isMobile ? -110 : -10 },
  }

  const offsets = Object.fromEntries(
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

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        const inView = entry.isIntersecting
        setReveal(inView)
      },
      {
        threshold: 0.4,
      }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={clsx("relative ", className)}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2 " ref={ref}>
        <AnimatedCard
          key={"Entitled"}
          src={entitledPreview}
          alt={"Entitled Preview"}
          offset={offsets["entitled"]}
          data-grid-id="entitled"
          color="#000000"
          type="Event Management"
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
          progress={progress}
        />
      </div>
    </section>
  )
}
