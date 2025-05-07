import React from "react"
import { ProjectsGrid } from "./ProjectsGrid"
import { AnimatedText } from "./AnimatedText"
import Link from "next/link"
import { Icon } from "./Icon"

export const Projects: React.FC = () => {
  return (
    <section className="inside-container bg-white">
      {/* overlay heading */}
      <div className="pointer-events-none relative z-5 mix-blend-exclusion">
        <AnimatedText element="h2" text="Latest Projects" offsetPx={200} className="h2-display inline-block whitespace-nowrap text-white" />
      </div>

      <ProjectsGrid />

      <Link href="/ " className="group flex items-center justify-center gap-2">
        <span className="body-display-xl underline-hover">View Featured Projects</span>
        <Icon name="arrow-right" height={18} width={18} className="group-hover:animate-wiggle-right" strokeWidth={0.5} />
      </Link>
    </section>
  )
}
