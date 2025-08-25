"use client"
import { useState, useMemo, memo } from "react"
import { MotionDiv } from "@/app/utils/lazy-ui"
import Image from "next/image"
import teslaNoTint from "@/public/assets/tesla-no-tint.jpg"
import tesla05 from "@/public/assets/tesla-05-tint.jpg"
import clsx from "clsx"

// Memoized image component
const TintImages = memo(({ opacity }: { opacity: number }) => {
  return (
    <div className="relative h-[60vw] max-h-[400px] w-full rounded-2xl border border-neutral-300 bg-white lg:h-screen">
      {/* No Tint Image (base) */}
      <Image src={teslaNoTint} alt="No Window Tint" fill className="object-contain" sizes="(max-width: 768px) 90vw, (max-width: 1023px) 50vw" />

      {/* 5% Tint Image (opacity controlled by scaled slider) */}
      <MotionDiv initial={{ opacity: 0 }} animate={{ opacity }} transition={{ ease: "easeIn", delay: 0.2 }} className="absolute inset-0">
        <Image src={tesla05} alt="5% Window Tint" fill className="rounded-4xl object-contain" sizes="(max-width: 768px) 90vw, (max-width: 1023px) 80vw" />
      </MotionDiv>
    </div>
  )
})

TintImages.displayName = "TintImages"

export const TintSimulator = ({ className }: { className?: string }) => {
  const [sliderValue, setSliderValue] = useState(70)
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value))
  }

  // Memoize the opacity calculation
  const opacity = useMemo(() => {
    if (sliderValue >= 70) return 0
    if (sliderValue <= 5) return 1
    return (70 - sliderValue) / 65
  }, [sliderValue])

  return (
    <div
      id="tesla-tint-simulator"
      className={`flex w-full flex-col items-center ${className} [--accent-alt:oklch(0.37_0.232012_264.2049)] [--accent:oklch(0.54_0.2531_262.09)]`}
    >
      <style jsx>{`
        input[type="range"]::-webkit-slider-runnable-track {
          background: linear-gradient(
            to left,
            var(--accent) 0%,
            var(--accent-alt) var(--slider-value),
            rgba(255, 255, 255) 0.001%,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0.6) 100%
          );
          height: 10px;
          border-radius: 999px;
          border: 1px solid rgba(0, 0, 0, 0.2);
        }

        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 26px;
          height: 26px;
          background: var(--accent);
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
          margin-top: -10px;
          transition: transform 0.2s ease;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        input[type="range"]::-webkit-slider-thumb:active {
          transform: scale(0.95);
          transition: all 0.3s ease;
          background: var(--accent-alt);
        }
      `}</style>

      {/* Use memoized image component */}
      <TintImages opacity={opacity} />

      {/* Tint Percentage Display */}
      <p className="h4-display text-foreground mt-5 uppercase">{sliderValue}% Tint</p>
      {/* Slider Control with Labels */}
      <div className="flex w-full min-w-80 items-center gap-2.5 sm:w-2/3">
        <span className="md:text-md w-20 text-sm font-medium">5% Tint (Darkest)</span>
        <input
          title="Tint Simulator"
          type="range"
          min="5"
          max="70"
          step="1"
          value={sliderValue}
          onChange={handleSliderChange}
          className="tint-simulator w-full cursor-pointer appearance-none bg-transparent"
          style={
            {
              WebkitAppearance: "none",
              appearance: "none",
              "--slider-value": `${100 * opacity}%`,
            } as React.CSSProperties
          }
        />
        <span className="md:text-md w-20 text-sm font-medium">70% Tint (Lightest)</span>
      </div>
      <div
        className={clsx("-mt-2 flex w-full flex-col items-center justify-center transition-opacity duration-300 ease-in-out", {
          "opacity-100": sliderValue <= 24,
          "pointer-events-none opacity-0": sliderValue > 24,
        })}
      >
        <span className="font-sans text-sm font-light text-red-600 uppercase">Illegal Tint Range</span>
        <div className="link-display-sm underline">See Washington Tint Laws</div>
      </div>
    </div>
  )
}
