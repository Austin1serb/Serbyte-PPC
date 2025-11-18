import { HeaderText } from "@/app/ui/HeaderText"
import { Card } from "../ProjectCard/Card"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import { Typography } from "@/app/ui/Elements"
import { Icon } from "../Icon"
import { Link } from "@/app/utils/Link"

export const MoreProjectsSection = ({ href }: { href: string }) => {
  return (
    <section className="inside-container">
      <HeaderText title="More Projects" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="relative h-full w-full">
          <div className="card-image absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white opacity-90 transition-opacity duration-500 will-change-transform group-hover:after:opacity-0 md:rounded-3xl">
            <div className="rounded-lg bg-gray-300 p-5">
              <Icon name="plus" className="h-5 w-5 fill-white text-white" />
            </div>{" "}
            <Typography className="mt-5 max-w-xs text-center" as="p">
              Got a cool idea? This spot is waiting for your success story.
            </Typography>
          </div>
        </div>
        <Link href={href} aria-label="View Case Study" data-text="View Case Study" className="relative h-full w-full">
          <Card src={bespokePreview} alt={"Bespoke Preview"} color="#024EFC" type="Automotive Styling" reveal={false} text="View Case Study" />
        </Link>
      </div>
    </section>
  )
}
