import { BeforeAfterSliderSkeleton } from "@/app/skeletons/BeforeAfterSliderSkeleton"
import heroBefore from "@/public/assets/bespoke-hero-before.png"
import heroBeforeMobile from "@/public/assets/bespoke-hero-mobile.png"
import dynamic from "next/dynamic"
import Image from "next/image"
import { AnimatedH2 } from "../AnimatedH2"
import { Typography } from "@/app/ui/Elements"

const BeforeAfterSlider = dynamic(() => import("@/app/ui/BeforeAfterSlider").then((mod) => mod.BeforeAfterSlider), {
  ssr: false,
  loading: () => <BeforeAfterSliderSkeleton />,
})

export const BeforeAfterSection: React.FC = () => {
  return (
    <section className="border-y border-gray-200 relative pt-12">
      <div className="inside-container-projects pt-12 lg:pt-16  ">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
          <AnimatedH2 className="[flex:1_0_0px]">
            Before and after. <br />
            <span className="text-slate-500">See the difference.</span>
          </AnimatedH2>
          <Typography as="div" size="lg" className="max-w-md [flex:0.5_0_0px]">
            Use the slider to see the difference between the before and after.
          </Typography>
        </div>
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
