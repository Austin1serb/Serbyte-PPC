import Image from "next/image"
import automedicsLogo from "../images/automedics-full.png"
import bespokeLogo from "../images/bespoke-full.png"
import iaoLogo from "../images/iao-full.png"
import entitledLogo from "../images/entitled-full.png"
import herbaLogo from "../images/herba-full.png"
import { AnimatedAvatars } from "./AnimatedAvatars"
import { AnimatedElement } from "./AnimatedElement"

const LOGOS = [automedicsLogo, bespokeLogo, herbaLogo, iaoLogo, entitledLogo]

export const LogoMarquee = ({ avatars = true }: { avatars?: boolean }) => {
  return (
    <section className="relative isolate border-y border-gray-200 bg-white">
      {/* center container */}
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-5.5 py-8 sm:flex-row sm:items-center sm:gap-10 md:px-11">
        {/* left: avatars + rating */}
        {avatars ? (
          <div className="flex items-center gap-4 whitespace-nowrap">
            <AnimatedAvatars />
            <AnimatedElement
              element="div"
              fadeDirection="right"
              offsetPx={20}
              duration={0.4}
              delay={0.15}
              className="flex flex-col text-sm font-medium text-slate-800"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-base text-gray-600">
                    ★
                  </span>
                ))}
              </div>
              <span>99+ Happy clients</span>
            </AnimatedElement>
          </div>
        ) : (
          <p className="body-display-lg whitespace-nowrap">
            Trusted by <strong>many</strong>
          </p>
        )}

        {/* right: marquee */}
        <AnimatedElement
          element="div"
          duration={0.8}
          delay={0.2}
          style={
            {
              "--width": "200px", // Set card width
              "--height": "60px", // Set card height
              "--quantity": LOGOS.length,
            } as React.CSSProperties
          }
          className="slider"
        >
          <div className="list h-full">
            {[...LOGOS].map((src, i) => (
              <div style={{ "--position": i + 1, "--speed": "20s" } as React.CSSProperties} className="item" key={i}>
                <Image src={src} alt="" className="h-15 w-auto max-w-48 min-w-48 object-contain opacity-70 grayscale transition" />
              </div>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}
