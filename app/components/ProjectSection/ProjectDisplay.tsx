import { ProjectHero } from "./ProjectHero"
import { BeforeAfterSection } from "./BeforeAfterSection"
import { ResultsSection } from "./ResultsSection"
import { ApproachSection } from "./ApproachSection"
import { LargeReview } from "../LargeReview"
import { MoreProjectsSection } from "./MoreProjectsSection"
import { LikeWhatYouSeeCard } from "./LikeWhatYouSeeCard"
import { ProjectData } from "../../data/project-data"

const ProjectDisplay: React.FC<{ projectData: ProjectData }> = ({ projectData }) => {
  return (
    <main className="overflow-hidden">
      <ProjectHero {...projectData.hero} />
      <BeforeAfterSection
        heroBefore={projectData.beforeAfter.heroBefore}
        heroBeforeMobile={projectData.beforeAfter.heroBeforeMobile}
        iframe={projectData.beforeAfter.iframe}
        heroAfter={projectData.beforeAfter.heroAfter}
      />
      <ResultsSection analyticCards={projectData.results} />
      <ApproachSection phases={projectData.phases} />
      <LargeReview {...projectData.review} />
      <MoreProjectsSection href="/projects/bespoke" />
      <LikeWhatYouSeeCard />
    </main>
  )
}

export default ProjectDisplay
