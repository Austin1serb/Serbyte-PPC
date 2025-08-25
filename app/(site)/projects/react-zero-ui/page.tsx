import { LargeReview } from "@/app/components/LargeReview"
import { ApproachSection } from "@/app/components/ProjectSection/ApproachSection"
import { BeforeAfterSection } from "@/app/components/ProjectSection/BeforeAfterSection"
import { LikeWhatYouSeeCard } from "@/app/components/ProjectSection/LikeWhatYouSeeCard"
import { MoreProjectsSection } from "@/app/components/ProjectSection/MoreProjectsSection"
import { ProjectHero } from "@/app/components/ProjectSection/ProjectHero"
import { ResultsSection } from "@/app/components/ProjectSection/ResultsSection"
import { reactZeroUIProject } from "@/app/data/project-data"

const ReactZeroUIPage: React.FC = () => {
  const projectData = reactZeroUIProject
  return (
    <>
      <ProjectHero {...projectData.hero} />
      {projectData.beforeAfter && (
        <BeforeAfterSection
          heroBefore={projectData.beforeAfter.heroBefore}
          heroBeforeMobile={projectData.beforeAfter.heroBeforeMobile}
          iframe={projectData.beforeAfter.iframe}
          beforeAltText={projectData.beforeAfter.beforeAltText}
          beforeMobileAltText={projectData.beforeAfter.beforeMobileAltText}
        />
      )}
      <ResultsSection analyticCards={projectData.results} />
      <ApproachSection phases={projectData.phases} />
      <LargeReview {...projectData.review} />
      <MoreProjectsSection href="/projects/bespoke" />
      <LikeWhatYouSeeCard />
    </>
  )
}

export default ReactZeroUIPage
