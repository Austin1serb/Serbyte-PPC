import Link from "next/link"
import entitledPreview from "@/app/images/entitled-preview-v2.webp"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import { ProjectCardSkeleton } from "./ProjectCardSkeleton"

export const ProjectsSkeleton: React.FC = () => {
  return (
    <section className="inside-container bg-white" aria-hidden>
      {/* overlay heading */}
      <div className="pointer-events-none relative z-5">
        <h2 className="inline-block text-4xl leading-9 tracking-tighter whitespace-nowrap text-white md:text-5xl md:leading-12 lg:text-6xl">Latest Projects</h2>
      </div>

      <section id="projects" className="relative">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          <ProjectCardSkeleton gridId="entitled" src={entitledPreview} alt={"Entitled Preview"} type="Event Management" />
          <ProjectCardSkeleton gridId="iao" src={iaoPreview} alt={"IAO Preview"} type="Private Security" />
          <ProjectCardSkeleton gridId="automedics" src={automedicsPreview} alt={"Automedics Preview"} type="Automotive Repair" />
          <ProjectCardSkeleton gridId="bespoke" src={bespokePreview} alt={"Bespoke Preview"} type="Automotive Styling" />
        </div>
      </section>

      <Link prefetch={false} href="/" className="flex items-center justify-center gap-2">
        <span className="underline-hover text-xl leading-6 tracking-tight text-slate-700 md:text-2xl">View Featured Projects</span>
      </Link>
    </section>
  )
}
