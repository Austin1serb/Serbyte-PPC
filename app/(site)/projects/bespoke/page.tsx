"use client"

import { useMotionTemplate, useScroll, useTransform } from "motion/react"
import * as m from "motion/react-m"
import Image from "next/image"
import { useRef } from "react"
import { AnnotationLayer } from "../AnnotationLayer"
import clsx from "clsx"

const BespokePage: React.FC = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "20% start"],
  })
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    offset: ["start start", "end start"],
  })
  const ref = useRef<HTMLDivElement>(null)
  const scale = useTransform(scrollYProgress, [0.166, 0.5], [1, 0.85])
  const translateY = useTransform(scrollYProgress, [0.166, 0.5], [0, 180])
  const translateYH1 = useTransform(scrollYProgress, [0.5, 0.666], [0, -80])

  const brightness = useTransform(scrollYProgress2, [0.11, 0.14, 0.3, 0.5], [1, 0.6, 0.6, 1])
  const filter = useMotionTemplate`brightness(${brightness})`

  return (
    <main className="relative z-5 items-center">
      <m.div ref={ref} style={{ translateY }} className="fixed inset-0 z-5 flex h-fit w-full flex-col items-center justify-center">
        <m.h2
          style={{ translateY: translateYH1 }}
          className="xs:text-5xl absolute top-0 z-0 text-4xl leading-[1] font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
        >
          Hero Section
        </m.h2>

        {/* Scaled image */}
        <m.div style={{ scale, transformOrigin: "50% 0%", filter }} className="flex h-fit w-full flex-col items-center">
          {/* <Image
            src="/bespoke.png"
            alt="Bespoke Tint PPF - screenshot"
            priority
            height={2100}
            width={1400}
            className="w-full rounded-xl shadow-xl relative z-1"
            quality={10}
          /> */}

          <iframe
            title="Bespoke Hero"
            src="/bespoke-hero2.html"
            height={2100}
            width={1400}
            className="pointer-events-none relative z-5 max-h-[800px] w-full shadow-xl"
          />
        </m.div>
        {/* Unscaled annotation layer, overlays the image */}
        <AnnotationLayer progress={scrollYProgress2} />
      </m.div>
      {/* Spacer */}
      <div className="h-[2000px]" />
      {/* Content after the scroll experience */}
      <div className="bg-white p-8">
        <h2 className="mb-4 text-3xl font-bold">Bespoke Tint PPF Project</h2>
        <p>
          Details about this project and the website created for the client...Details about this project and the website created for the client...Details about
          this project and the website created for the client...
        </p>
      </div>
    </main>
  )
}

export default BespokePage
