import { Card } from "@/app/components/ProjectCard/Card"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import entitledPreview from "@/app/images/entitled-preview-v2.webp"
import zeroPreview from "@/app/images/react-zero-ui-preview.jpg"
import { Link } from "@/app/utils/Link"
import { SITE_SLUGS } from "@/config/siteConfig"

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          <a target="_blank" href={"https://github.com/orgs/react-zero-ui/repositories"}>
            <Card src={zeroPreview} alt={"React-Zero-UI - Preview"} color="#3B06D1" type="Zero Re-Render State Library" reveal={false} text="View on GitHub" />
          </a>
          <Link href={SITE_SLUGS.projectsIao}>
            <Card src={iaoPreview} alt={"IAO Preview"} color="#13739C" type="Private Security" reveal={false} text="See Case Study" />
          </Link>
          <a target="_blank" href={"https://be-entitled.com/"}>
            <Card src={entitledPreview} alt={"Entitled Preview"} color="#000000" type="Event Management" reveal={false} text="View Website" />
          </a>
          <Link href={SITE_SLUGS.projectsAutomedics}>
            <Card src={automedicsPreview} alt={"Automedics Preview"} color="#DA961A" type="Automotive Repair" reveal={false} text="See Case Study" />
          </Link>
          <Link href={SITE_SLUGS.projectsBespoke}>
            <Card src={bespokePreview} alt={"Bespoke Preview"} color="#024EFC" type="Automotive Styling" reveal={false} text="See Case Study" />
          </Link>
        </div>
      </div>
    </section>
  )
}
