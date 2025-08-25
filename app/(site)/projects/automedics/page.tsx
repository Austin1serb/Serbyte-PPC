import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { automedicsKirkland } from "@/app/data/project-data"

const AutomedicsKirklandPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={automedicsKirkland} />
    </>
  )
}

export default AutomedicsKirklandPage
