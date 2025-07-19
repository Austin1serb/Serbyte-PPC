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
    <section className="relative border-y border-gray-200">
      <div className="inside-container-large flex flex-col gap-12 pt-12 lg:pt-16">
        <HeaderText
          title="Before and after."
          titleHighlight="See the difference."
          description="Use the slider to see the difference between the before and after."
        />
        <BeforeAfterSlider
          initialPosition={70}
          before={
            <>
              <Image src={heroBefore} alt="Bespoke Hero Before" fill className="hidden rounded-xl object-cover object-top lg:block" priority />
              <Image src={heroBeforeMobile} alt="Bespoke Hero Before Mobile" fill className="block rounded-xl object-cover object-top lg:hidden" priority />
            </>
          }
          after={
            iframe ? (
              <iframe title="Bespoke Hero After" src={iframe} className="h-full w-full rounded-xl border-0 bg-white" scrolling="no" loading="lazy" />
            ) : (
              heroAfter && <Image src={heroAfter} alt="Bespoke Hero After" fill className="rounded-xl object-cover object-top" priority />
            )
          }
        />
      </div>
    </section>
  )
}
