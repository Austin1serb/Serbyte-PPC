import { HeaderText } from "@/app/ui/HeaderText"
import { Card } from "../Card"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import { Typography } from "@/app/ui/Elements"
import { Icon } from "../Icon"

export const MoreProjectsSection: React.FC = () => {
  return (
    <section className="inside-container">
      <HeaderText title="More Projects" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="relative h-full w-full">
          <div className="card-image absolute inset-0 overflow-hidden md:rounded-3xl rounded-2xl opacity-90 transition-opacity duration-500 will-change-transform group-hover:after:opacity-0 bg-white border border-gray-200 flex items-center justify-center flex-col">
            <div className="p-5 bg-gray-500 rounded">
              <Icon name="plus" className="h-5 w-5  fill-white" />
            </div>{" "}
            <Typography className="max-w-xs text-center mt-5" as="p">
              Got a cool idea? This spot is waiting for your success story.
            </Typography>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Card src={bespokePreview} alt={"Bespoke Preview"} color="#024EFC" type="Automotive Styling" />
        </div>
      </div>
    </section>
  )
}
