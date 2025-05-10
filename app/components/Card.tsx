import Image, { StaticImageData } from "next/image"

export const Card = ({ src, alt, index, color }: { src: StaticImageData; alt: string; index: number; color?: string }) => {
  return (
    <>
      <div
        className="absolute inset-0 rounded-2xl opacity-50 transition duration-200 will-change-transform group-hover:opacity-0 card-image"
        style={{ "--color-gradient": color } as React.CSSProperties}
      />
      <Image className="h-full w-full rounded-xl object-cover" src={src} alt={alt} width={640} height={420} priority sizes="(max-width: 768px) 50vw, 33vw" />
    </>
  )
}
