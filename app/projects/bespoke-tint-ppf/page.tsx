"use client"

import { useScroll, useTransform } from "motion/react"
import * as m from "motion/react-m"
import Image from "next/image"
import { useRef } from "react"
import { AnnotationLayer } from "../AnnotationLayer"

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

  return (
    <main className="relative items-center">
      <m.div ref={ref} style={{ translateY }} className="flex justify-center items-center flex-col h-fit w-full fixed inset-0 z-3">
        <m.h2
          style={{ translateY: translateYH1 }}
          className="xs:text-5xl z-0 text-4xl leading-[1] font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl absolute top-0 "
        >
          Hero Section
        </m.h2>

        {/* Scaled image */}
        <m.div style={{ scale, transformOrigin: "50% 0%" }} className="w-full h-fit flex flex-col items-center ">
          {/* <Image
            src="/bespoke.png"
            alt="Bespoke Tint PPF - screenshot"
            priority
            height={2100}
            width={1400}
            className="w-full rounded-xl shadow-xl relative z-1"
            quality={10}
          /> */}

          <iframe title="Bespoke Hero" src="/bespoke-hero2.html" height={2100} width={1400} className="w-full shadow-xl relative z-1 max-h-[800px] " />
        </m.div>
        {/* Unscaled annotation layer, overlays the image */}
        <AnnotationLayer progress={scrollYProgress2} />
      </m.div>
      {/* Spacer */}
      <div className="h-[2000px]" />
      {/* Content after the scroll experience */}
      <div className="bg-white p-8 ">
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
