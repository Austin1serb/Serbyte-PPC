import { H1, Typography } from "@/app/ui/Elements"
import Link from "next/link"
import { Icon } from "../Icon"

export interface ProjectHeroProps {
  title: string
  client: string
  year: string
  description: string | React.ReactNode
  categories: string[]
  link: string
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ title, client, year, description, categories, link }) => {
  return (
    <section className="inside-container-large flex flex-col gap-8 max-w-2xl">
      <H1 variant="medium" className="wrap-break-word">
        {title}
      </H1>
      <Typography as="div" size="xs" className="flex gap-4 text-sm ">
        <div className="flex gap-2">
          <span>Client</span>
          <span className="font-medium text-black!">{client}</span>
        </div>
        <div className="flex gap-2">
          <span>Year</span>
          <span className="font-medium text-black">{year}</span>
        </div>
      </Typography>
      <Typography as="p" size="sm" className="text-black! leading-normal!">
        {description}
      </Typography>
      <Typography as="div" size="xs" className="text-black! leading-normal! flex flex-col gap-2">
        <p className="font-medium">Scope of Work</p>
        <ul className="flex flex-wrap gap-2 text-xs font-medium text-slate-800">
          {categories.map((item) => (
            <li key={item} className="border border-gray-200 w-fit rounded-full bg-white px-4 py-1.5 z-0">
              {item}
            </li>
          ))}
        </ul>
      </Typography>
      <Link
        href={link}
        title={`View ${client} live site`}
        target="_blank"
        className="flex text-nowrap gap-1 items-center underline-hover w-fit text-lg text-black"
      >
        View Live Site
        <Icon name="arrow-right" className="h-3 w-3" />
      </Link>
    </section>
  )
}
