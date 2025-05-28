import { bespoke } from "./projectData"
import { ProjectHero } from "./ProjectHero"
import { BeforeAfterSection } from "./BeforeAfterSection"
import { ResultsSection } from "./ResultsSection"
import { ApproachSection } from "./ApproachSection"

const ProjectDisplay: React.FC = () => {
  return (
    <main>
      <ProjectHero {...bespoke.hero} />
      <BeforeAfterSection />
      <ResultsSection />
      <ApproachSection />
      <div className="h-90"></div>
    </main>
  )
}

export default ProjectDisplay
