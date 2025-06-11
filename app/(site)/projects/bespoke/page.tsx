import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { bespoke } from "@/app/components/ProjectSection/projectData"

const BespokePage: React.FC = () => {
  return <ProjectDisplay projectData={bespoke} />
}

export default BespokePage
