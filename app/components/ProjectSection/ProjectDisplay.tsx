import { bespoke } from "./projectData"
import { ProjectHero } from "./ProjectHero"
import { BeforeAfterSection } from "./BeforeAfterSection"
import { ResultsSection } from "./ResultsSection"

const ProjectDisplay: React.FC = () => {
  return (
    <main>
      <ProjectHero {...bespoke.hero} />
      <BeforeAfterSection />
      <ResultsSection />
    </main>
  )
}

export default ProjectDisplay
