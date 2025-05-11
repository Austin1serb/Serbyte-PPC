import Image, { StaticImageData } from "next/image"
import { Icon } from "./Icon"
import clsx from "clsx"

export const Card = ({ src, alt, color, type = "" }: { src: StaticImageData; alt: string; color?: string; type?: string }) => {
  return (
    <>
      <span
        className={clsx(
          "absolute inset-0 rounded-2xl transition-opacity opacity-90 duration-500 will-change-transform group-hover:after:opacity-0 overflow-hidden card-image"
        )}
        data-text="View Project"
        style={{ "--color-gradient": color } as React.CSSProperties}
      >
        <span className="absolute top-2 left-2 text-white text-xs button-shadow w-fit px-4 py-2 rounded-full bg-black">{type}</span>
        <span className="absolute bottom-4 left-4 text-white text-lg w-fit z-5">{alt.split(" ")[0]}</span>
        <span className="absolute bottom-4 right-4 text-white text-xs w-fit z-5 flex items-center gap-1">
          View Project
          <Icon name="arrow-right" className="w-4 h-4" />
        </span>
      </span>
      <Image className="h-full w-full rounded-xl object-cover" src={src} alt={alt} width={640} height={420} priority sizes="(max-width: 768px) 90vw, 33vw" />
    </>
  )
}
