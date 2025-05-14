"use client"
import { BespokeTintPpf } from "@/app/images"

import { useScroll, useTransform } from "motion/react"
import * as m from "motion/react-m"
import Image from "next/image"
import { useRef } from "react"

const BespokePage: React.FC = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "20% start"],
  })
  const ref = useRef<HTMLDivElement>(null)
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1])
  const translateY = useTransform(scrollYProgress, [0, 0.5], ["10%", "14%"])

  return (
    <main className="inside-container relative items-center">
      {/* <div className="h-80"></div> */}
      <m.div ref={ref} style={{ scale, translateY, transformOrigin: "50% 0" }} className="flex h-full w-full">
        {/* <Image src={BespokeTintPpf} alt="Bespoke Tint PPF" className="w-full rounded-xl shadow-xl" quality={10} /> */}

        <iframe
          onClick={(e) => e.preventDefault()}
          src="https://www.bespokeauto.org/"
          title="Iframe Example"
          className="w-full h-[7500px] rounded-xl shadow-xl"
        />
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
