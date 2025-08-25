import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { bespoke } from "@/app/data/project-data"

const BespokePage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={bespoke} />
    </>
  )
}

export default BespokePage
