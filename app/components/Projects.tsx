import React from "react"
import { ProjectsGrid } from "./ProjectsGrid"
import { AnimatedText } from "./AnimatedText"
import Link from "next/link"
import { Icon } from "./Icon"

export const Projects: React.FC = () => {
  return (
    <section className="inside-container bg-white">
      {/* overlay heading */}
      <div className="pointer-events-none relative z-5 mix-blend-exclusion ">
        <AnimatedText
          element="h2"
          text="Latest Projects"
          offsetPx={200}
          className="text-4xl leading-9 tracking-tighter md:text-5xl md:leading-12 lg:text-6xl inline-block whitespace-nowrap text-white"
        />
      </div>

      <ProjectsGrid />

      <Link href="/" className="group flex items-center justify-center gap-2">
        <span className="text-xl leading-6 tracking-tight text-slate-700 md:text-2xl underline-hover">View Featured Projects</span>
        <Icon name="arrow-right" height={18} width={18} className="group-hover:animate-wiggle-right" strokeWidth={0.5} />
      </Link>
    </section>
  )
}
