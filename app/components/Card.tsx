import Image, { StaticImageData } from "next/image"

export const Card = ({ src, alt, index, color }: { src: StaticImageData; alt: string; index: number; color?: string }) => {
  return (
    <>
      <div className="card-image rounded-2xl" style={{ "--color-gradient": color } as React.CSSProperties} />
      <Image
        className="h-full w-full rounded-xl object-fill"
        src={src}
        alt={alt}
        width={640}
        height={420}
        quality={100}
        priority={index === 0}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />
    </>
  )
}
