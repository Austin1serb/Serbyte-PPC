// import Image from "next/image"
import clsx from "clsx"

/* ---------- DATA ---------- */

const tech = [
  { name: "Figma", src: "/icons/tech/figma.svg" },
  { name: "Framer", src: "/icons/tech/framer.svg" },
  { name: "Webflow", src: "/icons/tech/webflow.svg" },
  { name: "Rive", src: "/icons/tech/rive.svg" },
  { name: "Blender", src: "/icons/tech/blender.svg" },
  { name: "Trello", src: "/icons/tech/trello.svg" },
  { name: "OpenAI", src: "/icons/tech/openai.svg" },
]

const services = [
  { name: "Framer Development", src: "/icons/services/framer-dev.svg" },
  { name: "Brand Design", src: "/icons/services/brand.svg" },
  { name: "Web Apps", src: "/icons/services/web.svg" },
  { name: "Landing Pages", src: "/icons/services/landing.svg" },
  { name: "Motion Graphics", src: "/icons/services/motion.svg" },
  { name: "3D Design", src: "/icons/services/three.svg" },
  { name: "UX / UI Consultation", src: "/icons/services/uiux.svg" },
]

/* ---------- COMPONENT ---------- */

export const ServicesSectionV2: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section id="services" className={clsx("inside-container items-start justify-center bg-white md:flex-row md:items-center", className)}>
      {/* ------ LEFT COLUMN ------ */}
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

          <ul className="flex flex-wrap gap-3">
            {tech.map(({ name }) => (
              <li key={name}>
                <div className="group relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white/90 shadow-sm backdrop-blur">
                    {/* <Image src={src} alt={name} width={24} height={24} className="object-contain" priority /> */}
                  </div>
                  {/* optional tooltip */}
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 transition group-hover:opacity-100">{name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ------ RIGHT COLUMN ------ */}
      <ul className="flex-full grid grid-cols-2 gap-12 md:grid-cols-1">
        {services.map(({ name }) => (
          <li key={name} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black shadow-md">
              {/* <Image src={src} alt="" width={20} height={20} className="object-contain invert" priority /> */}
            </span>
            <span className="body-display-lg">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
