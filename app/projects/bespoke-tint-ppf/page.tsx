"use client"
import { BespokeTintPpf } from "@/app/images"
import { H1, Text } from "@/app/ui/Elements"

import { useScroll, useTransform } from "motion/react"
import * as m from "motion/react-m"
import Image from "next/image"
import { useRef } from "react"

const BespokePage: React.FC = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "20% start"],
  })
  const ref = useRef<HTMLDivElement>(null)
  const scale = useTransform(scrollYProgress, [0.166, 0.5], [1, 0.6])
  const translateY = useTransform(scrollYProgress, [0, 0.5], ["-5%", "24%"])
  const h1Opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const topBarTrigger = useTransform(scrollYProgress, [0.4, 0.5], [0, 1])

  return (
    <main className="relative items-center">
      <m.h1
        style={{
          opacity: h1Opacity,
        }}
        className="xs:text-5xl relative z-5 text-4xl leading-[1] font-medium tracking-tight sm:text-6xl lg:text-7xl -top-20 left-1/2 mix-blend-exclusion translate-y-60 bg-white h-fit text-black"
      >
        Hero Section
      </m.h1>

      <m.div ref={ref} style={{ scale, translateY, transformOrigin: "50% 0" }} className="flex h-full w-full relative ">
        {/* <Image src={BespokeTintPpf} alt="Bespoke Tint PPF" className="w-full rounded-xl shadow-xl" quality={10} /> */}

        <div className="flex items-start justify-between w-full relative">
          <div>sd</div>
          <iframe
            onClick={(e) => e.preventDefault()}
            src="/bespoke-hero.html"
            title="Iframe Example"
            className="w-full h-[2000px] rounded-xl shadow-xl min-w-[375px] z-0 relative"
          />
          <m.div
            initial={{
              opacity: 0,
            }}
            style={{
              opacity: topBarTrigger,
            }}
            className="absolute h-20 w-80 md:-right-40 -top-8 flex items-center justify-center "
          >
            <div className="blur rounded-full bg-white z-0 inset-0 absolute"></div>
            <Text size="xl" className="relative z-1">
              Navigation
            </Text>
          </m.div>
        </div>
      </m.div>

      {/* Content after the scroll experience */}
      <div className="bg-white p-8 pt-[800px]">
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
