import Image from "next/image"
import automedicsLogo from "../images/automedics-full.webp"
import bespokeLogo from "../images/bespoke-full.webp"
import iaoLogo from "../images/iao-full.webp"
import entitledLogo from "../images/entitled-full.webp"
import vetsChoiceLogo from "../images/vetschoice-full.png"
import herbaLogo from "../images/herba-full.webp"
import { AnimatedAvatars } from "./ui/AnimatedAvatars"
import { AnimatedElement } from "./ui/AnimatedElement"
import clsx from "clsx"
import { Text } from "../ui/Elements"

const LOGOS = [automedicsLogo, bespokeLogo, herbaLogo, iaoLogo, entitledLogo, vetsChoiceLogo]

export const LogoMarquee = ({ avatars = true }: { avatars?: boolean }) => {
  return (
    <section className="relative isolate border-y border-gray-200 bg-white">
      {/* center container */}
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-5.5 py-8 sm:flex-row sm:items-center sm:gap-10 md:px-11">
        {/* left: avatars + rating */}
        {avatars ? (
          <div className="flex items-center gap-4 whitespace-nowrap">
            <AnimatedAvatars />
            <AnimatedElement element="div" fadeDirection="right" offsetPx={20} duration={0.4} delay={0.15} className="flex flex-col">
              <div className="flex items-center gap-0.5 text-base text-gray-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-sm font-medium text-slate-900">Many Happy clients</span>
            </AnimatedElement>
          </div>
        ) : (
          <AnimatedElement element="div" fadeDirection="right" offsetPx={20} duration={0.4} delay={0.15} className="max-md:w-full">
            <Text size="lg" className={clsx("whitespace-nowrap", { "max-md:w-full max-md:text-center": !avatars })}>
              Trusted by <strong className="font-semibold text-slate-900">many</strong>
            </Text>
          </AnimatedElement>
        )}

        {/* right: marquee */}
        <div
          style={
            {
              "--width": "200px", // Set card width
              "--height": "60px", // Set card height
              "--quantity": LOGOS.length,
            } as React.CSSProperties
          }
          className="slider"
        >
          <AnimatedElement element="div" className="list">
            {[...LOGOS].map((src, i) => (
              <div style={{ "--position": i + 1, "--speed": "20s" } as React.CSSProperties} className="item" key={i}>
                <Image
                  src={src}
                  alt="Logo Marquee Brand Icon"
                  className="h-15 w-48 max-w-48 min-w-48 object-contain opacity-70 grayscale transition"
                  sizes="100px"
                  unoptimized
                />
              </div>
            ))}
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
