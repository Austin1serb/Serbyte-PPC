import { BeforeAfterSliderSkeleton } from "@/app/skeletons/BeforeAfterSliderSkeleton"
import heroBefore from "@/public/assets/bespoke-hero-before.png"
import heroBeforeMobile from "@/public/assets/bespoke-hero-mobile.png"
import dynamic from "next/dynamic"
import Image from "next/image"

const BeforeAfterSlider = dynamic(() => import("@/app/ui/BeforeAfterSlider").then((mod) => mod.BeforeAfterSlider), {
  ssr: false,
  loading: () => <BeforeAfterSliderSkeleton />,
})

export const BeforeAfterSection: React.FC = () => {
  return (
    <section className="border-y border-gray-200 relative pt-12">
      <div className="inside-container-projects pt-12 lg:pt-16 relative">
        <BeforeAfterSlider
          before={
            <>
              <Image src={heroBefore} alt="Bespoke Hero Before" fill className="object-contain object-top rounded-xl lg:block hidden" />
              <Image src={heroBeforeMobile} alt="Bespoke Hero Before Mobile" fill className="object-cover object-top rounded-xl lg:hidden block" />
            </>
          }
          after={
            <iframe
              title="Bespoke Hero After"
              src="/bespoke-hero2.html"
              className="w-full h-full border-0 bg-white pointer-events-none rounded-xl"
              scrolling="no"
            />
          }
        />
      </div>
    </section>
  )
}
