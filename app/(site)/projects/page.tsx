import React from "react"
import { WorkHero } from "./WorkHero"
import { ProjectsStatic } from "./ProjectsStatic"
import { LikeWhatYouSeeCard } from "@/app/components/ProjectSection/LikeWhatYouSeeCard"
const page = () => {
  return (
    <div>
      <WorkHero />
      <ProjectsStatic />
      <LikeWhatYouSeeCard />
    </div>
  )
}

export default page
