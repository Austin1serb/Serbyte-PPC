"use client"
import { BeforeAfterSliderSkeleton } from "@/app/skeletons/BeforeAfterSliderSkeleton"

import dynamic from "next/dynamic"
import Image from "next/image"
import { HeaderText } from "@/app/ui/HeaderText"
import { StaticImageData } from "next/image"

const BeforeAfterSlider = dynamic(() => import("@/app/ui/BeforeAfterSlider").then((mod) => mod.BeforeAfterSlider), {
  ssr: false,
  loading: () => <BeforeAfterSliderSkeleton />,
})

export const BeforeAfterSection: React.FC<{ heroBefore: StaticImageData; heroBeforeMobile: StaticImageData; iframe?: string; heroAfter?: StaticImageData }> = ({
  heroBefore,
  heroBeforeMobile,
  iframe,
  heroAfter,
}) => {
  return (
    <section className="border-y border-gray-200 relative">
      <div className="inside-container-large pt-12 lg:pt-16 flex flex-col gap-12">
        <HeaderText
          title="Before and after."
          titleHighlight="See the difference."
          description="Use the slider to see the difference between the before and after."
        />
        <BeforeAfterSlider
          initialPosition={70}
          before={
            <>
              <Image src={heroBefore} alt="Bespoke Hero Before" fill className="object-cover object-top rounded-xl lg:block hidden" priority />
              <Image src={heroBeforeMobile} alt="Bespoke Hero Before Mobile" fill className="object-cover object-top rounded-xl lg:hidden block" priority />
            </>
          }
          after={
            iframe ? (
              <iframe title="Bespoke Hero After" src={iframe} className="w-full h-full border-0 bg-white rounded-xl" scrolling="no" loading="lazy" />
            ) : (
              heroAfter && <Image src={heroAfter} alt="Bespoke Hero After" fill className="object-cover object-top rounded-xl" priority />
            )
          }
        />
      </div>
    </section>
  )
}
