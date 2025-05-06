import React from "react"
import { ProjectsGrid } from "./ProjectsGrid"
import { AnimatedText } from "./AnimatedText"
import Link from "next/link"

export const Projects: React.FC = () => {
  return (
    <section className="inside-container relative z-10 bg-white">
      {/* overlay heading */}
      <div className="pointer-events-none relative z-10 mix-blend-exclusion">
        <AnimatedText element="h2" text="Latest Projects" offsetPx={200} className="h2-display inline-block whitespace-nowrap text-white" />
      </div>

      <ProjectsGrid />

      <Link href="/ " className="group flex items-center justify-center gap-2">
        <span className="body-display-xl underline-hover">View Featured Projects</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 16 16"
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:animate-wiggle-right"
        >
          <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
        </svg>
      </Link>
    </section>
  )
}
