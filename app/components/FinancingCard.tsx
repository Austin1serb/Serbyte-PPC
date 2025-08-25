import Image from "next/image"
import lightningIcon from "../images/lightning.png"
import { Typography } from "../ui/Elements"
import { MotionDiv } from "../utils/lazy-ui"

export function FinancingCard() {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 10 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="pointer-events-none inset-0 z-1 md:absolute"
    >
      <div className="animate-rotate button-shadow @container relative flex h-1/2 min-h-[220px] w-full max-w-sm flex-col justify-between overflow-hidden rounded-3xl bg-black p-6 backdrop-blur-sm">
        {/* Badge */}
        <div>
          <span className="button-shadow inline-block rounded-full bg-white px-4 py-2 text-xs font-medium text-black">Start for as little as $199</span>
        </div>

        {/* Text */}
        <Typography as="article" size="lg" className="mt-auto">
          <h3 className="leading-tight text-slate-400">Financing available for</h3>
          <h3 className="leading-tight text-white">brands who move fast.</h3>
        </Typography>

        {/* Lightning Icon */}
        <div className="absolute -top-2 -right-12 aspect-square w-72 rotate-25 overflow-visible @sm:w-80 @md:-right-8">
          <Image
            src={lightningIcon}
            alt="Lightning Icon"
            className="object-cover grayscale invert"
            fill
            style={{
              maskImage: "linear-gradient(10deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 97.74774774774775%)",
              WebkitMaskImage: "linear-gradient(10deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 97.74774774774775%)",
            }}
            sizes="400px"
          />
        </div>
      </div>
    </MotionDiv>
  )
}
