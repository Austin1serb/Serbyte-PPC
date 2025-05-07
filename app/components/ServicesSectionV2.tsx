// import Image from "next/image"
import clsx from "clsx"
import { Icon } from "./Icon"

const tech = [
  { name: "Figma", src: "figma" },
  { name: "Express", src: "express" },
  { name: "TypeScript", src: "typescript" },
  { name: "React", src: "react" },
  { name: "MongoDB", src: "mongodb" },
  { name: "Next", src: "next" },
  { name: "OpenAI", src: "openai" },
  { name: "Motion", src: "motion" },
]

const services = [
  { name: "Website Development", src: "magic-wand" },
  { name: "Brand Design", src: "paint-bucket" },
  { name: "Ad Campaigns", src: "web" },
  { name: "Landing Pages", src: "world" },
  { name: "SEO Optimization", src: "seo" },
  { name: "Motion Graphics", src: "planet" },
  { name: "PPC Campaigns", src: "page" },
]

export const ServicesSectionV2: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section id="services" className={clsx("inside-container items-start justify-center bg-white md:flex-row md:items-center", className)}>
      {/*  LEFT COLUMN  */}
      <div className="flex-1-5 flex flex-col gap-16">
        <h2 className="h2-display">
          <span className="text-slate-700">Services that</span>
          <br />
          <span className="text-nowrap">
            supercharge <span className="text-slate-500">your</span> <br /> business.
          </span>
        </h2>

        {/* Tech Stack */}
        <div>
          <p className="body-display mb-4">My tech stack</p>

          <ul className="flex flex-wrap gap-8">
            {tech.map(({ name, src }) => (
              <li key={name}>
                <div className="group relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white/90 shadow-sm backdrop-blur">
                    <Icon name={src} width={30} height={30} className="object-contain" />
                  </div>
                  {/* optional tooltip */}
                  <span className="absolute -top-0 left-1/2 -translate-x-1/2 text-xs opacity-0 transition group-hover:opacity-100">{name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*  RIGHT COLUMN  */}
      <ul className="flex-full grid grid-cols-2 gap-12 md:grid-cols-1">
        {services.map(({ name, src }) => (
          <li key={name} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black shadow-md">
              <Icon name={src} width={25} height={30} className="object-contain invert" />
            </span>
            <span className="body-display-lg">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
