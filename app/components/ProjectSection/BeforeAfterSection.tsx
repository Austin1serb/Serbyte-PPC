"use client"
import { BeforeAfterSliderSkeleton } from "@/app/skeletons/BeforeAfterSliderSkeleton"
import heroBefore from "@/public/assets/bespoke-hero-before.png"
import heroBeforeMobile from "@/public/assets/bespoke-hero-mobile.png"
import dynamic from "next/dynamic"
import Image from "next/image"
import { HeaderText } from "@/app/ui/HeaderText"

const BeforeAfterSlider = dynamic(() => import("@/app/ui/BeforeAfterSlider").then((mod) => mod.BeforeAfterSlider), {
  ssr: false,
  loading: () => <BeforeAfterSliderSkeleton />,
})

export const BeforeAfterSection: React.FC = () => {
  return (
    <section className="border-y border-gray-200 relative">
      <div className="inside-container-projects pt-12 lg:pt-16 flex flex-col gap-12">
        <HeaderText
          title="Before and after."
          titleHighlight="See the difference."
          description="Use the slider to see the difference between the before and after."
        />
        <BeforeAfterSlider
          before={
            <>
              <Image src={heroBefore} alt="Bespoke Hero Before" fill className="object-cover object-top rounded-xl lg:block hidden" />
              <Image src={heroBeforeMobile} alt="Bespoke Hero Before Mobile" fill className="object-cover object-top rounded-xl lg:hidden block" />
            </>
          }
          after={
            <iframe
              title="Bespoke Hero After"
              src="/bespoke-hero.html"
              className="w-full h-full border-0 bg-white pointer-events-none rounded-xl"
              scrolling="no"
              loading="lazy"
            />
          }
        />
      </div>
    </section>
  )
}
