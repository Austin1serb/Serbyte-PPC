import clsx from "clsx"
import { Icon } from "./Icon"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./AnimatedH2"
import * as m from "motion/react-m"

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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
}

const element = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
}

const element2 = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
}
export const ServicesSectionV2: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section id="services" className={clsx("inside-container items-start justify-center bg-white md:flex-row md:items-center", className)}>
      {/*  LEFT COLUMN  */}
      <div className="[flex:1.5_0_0px] flex flex-col gap-16">
        <AnimatedH2>
          <span className="text-slate-700">Services </span>that
          <br />
          <span className="text-nowrap">
            supercharge <span className="text-slate-500">your</span> <br /> business.
          </span>
        </AnimatedH2>

        {/* Tech Stack */}
        <div>
          <Text size="base" className="mb-8">
            My tech stack
          </Text>

          <m.ul
            className="flex flex-wrap gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            {tech.map(({ name, src }) => (
              <m.li key={name} variants={element}>
                <div className="group relative">
                  <input placeholder={name} type="checkbox" className="hidden peer" id={name} />

                  <label
                    htmlFor={name}
                    className="flex h-13 w-13 items-center justify-center rounded-xl border border-gray-200 bg-white button-shadow hover:translate-y-0.5 peer-checked:translate-y-0.5 peer-checked:shadow-none"
                  >
                    <Icon name={src} width={30} height={30} className="object-contain" />
                  </label>
                  {/* optional tooltip */}
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs opacity-0 transition duration-300 group-hover:opacity-100 bg-black text-white rounded-full px-2 py-1 peer-checked:opacity-100 delay-100">
                    {name}
                  </span>
                </div>
              </m.li>
            ))}
          </m.ul>
        </div>
      </div>

      {/*  RIGHT COLUMN  */}
      <m.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={container}
        className="[flex:1_0_0px] grid grid-cols-2 gap-12 md:grid-cols-1"
      >
        {services.map(({ name, src }) => (
          <m.li key={name} variants={element2} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black button-shadow aspect-square ">
              <Icon name={src} width={25} height={30} className="object-contain invert" />
            </span>
            <Text as="span" size="sm">
              {name}
            </Text>
          </m.li>
        ))}
      </m.ul>
    </section>
  )
}
