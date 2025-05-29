import { bespoke } from "./projectData"
import { ProjectHero } from "./ProjectHero"
import { BeforeAfterSection } from "./BeforeAfterSection"
import { ResultsSection } from "./ResultsSection"
import { ApproachSection } from "./ApproachSection"
import { LargeReview } from "../LargeReview"
import { MoreProjectsSection } from "./MoreProjectsSection"
import { LikeWhatYouSeeCard } from "./LikeWhatYouSeeCard"

const ProjectDisplay: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <ProjectHero {...bespoke.hero} />
      <BeforeAfterSection />
      <ResultsSection />
      <ApproachSection />
      <LargeReview />
      <MoreProjectsSection href="/projects/bespoke" />
      <LikeWhatYouSeeCard />
    </main>
  )
}

export default ProjectDisplay
