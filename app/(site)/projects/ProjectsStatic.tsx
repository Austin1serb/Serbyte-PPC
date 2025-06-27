import { Card } from "@/app/components/Card"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import entitledPreview from "@/app/images/entitled-preview-v2.webp"
import { Link } from "@/app/utils/Link"

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          <Link href="/projects/entitled">
            <Card src={entitledPreview} alt={"Entitled Preview"} color="#000000" type="Event Management" reveal={false} />
          </Link>
          <Link href="/projects/iao">
            <Card src={iaoPreview} alt={"IAO Preview"} color="#13739C" type="Private Security" reveal={false} />
          </Link>
          <Link href="/projects/automedics">
            <Card src={automedicsPreview} alt={"Automedics Preview"} color="#DA961A" type="Automotive Repair" reveal={false} />
          </Link>
          <Link href="/projects/bespoke">
            <Card src={bespokePreview} alt={"Bespoke Preview"} color="#024EFC" type="Automotive Styling" reveal={false} />
          </Link>
        </div>
      </div>
    </section>
  )
}
