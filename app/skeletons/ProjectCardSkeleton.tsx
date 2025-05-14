import Image, { StaticImageData } from "next/image"
export const ProjectCardSkeleton = ({ gridId, src, alt, type }: { gridId: string; src: StaticImageData; alt: string; type: string }) => {
  return (
    <div data-grid-id={gridId}>
      <div className="relative h-full w-full">
        <span className="absolute inset-0 overflow-hidden rounded-3xl opacity-90 transition-opacity duration-500 will-change-transform">
          <span className="absolute top-2 left-2 w-fit rounded-full bg-black px-4 py-2 text-xs text-white">{type}</span>
          <span className="absolute bottom-4 left-4 z-5 w-fit text-lg text-white">{alt.split(" ")[0]}</span>
          <span className="absolute right-4 bottom-4 z-5 flex w-fit items-center gap-1 text-xs text-white">View Project</span>
        </span>
        <div className="h-[420px] w-[640px] rounded-3xl bg-gray-200 object-cover" />
      </div>
    </div>
  )
}
