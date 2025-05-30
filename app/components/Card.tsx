import Image, { StaticImageData } from "next/image"
import { Icon } from "./Icon"
import clsx from "clsx"

export const Card = ({ src, alt, color, type = "" }: { src: StaticImageData; alt: string; color?: string; type?: string }) => {
  return (
    <>
      <span
        className={clsx(
          "card-image absolute inset-0 overflow-hidden md:rounded-3xl rounded-2xl opacity-90 transition-opacity duration-500 will-change-transform group-hover:after:opacity-0"
        )}
        style={{ "--color-gradient": color } as React.CSSProperties}
      >
        <span className="button-shadow absolute top-2 left-2 w-fit rounded-full bg-black px-4 py-2 text-xs text-white">{type}</span>
        <span className="absolute bottom-4 left-4 z-5 w-fit text-lg text-white">{alt.split(" ")[0]}</span>
        <span className="absolute right-4 bottom-4 z-5 flex w-fit items-center gap-1 text-xs text-white">
          <Icon name="arrow-right" className="h-4 w-4" />
          View Project
        </span>
      </span>
      <Image
        placeholder="blur"
        className="h-full w-full md:rounded-3xl rounded-2xl object-cover"
        src={src}
        alt={alt}
        // width={640}
        // height={420}
        priority
        sizes="(max-width: 768px) 90vw, 33vw"
      />
    </>
  )
}
