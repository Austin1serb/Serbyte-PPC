import { StaticImageData } from "next/image"
import { ClientInfoCard } from "./ClientInfoCard"
import clsx from "clsx"
import { Text } from "../ui/Elements"

export type ReviewCard = {
  img: StaticImageData
  name: string
  title: string
  review: string
  className?: string
}
export const ReviewCard: React.FC<ReviewCard> = ({ img, name, title, review, className }) => {
  return (
    <li
      className={clsx(
        "relative flex aspect-[4/3] flex-shrink-0 snap-center flex-col items-start justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-md shadow-gray-200",
        className
      )}
    >
      <div className="relative flex flex-col gap-5 md:gap-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-0.5 text-xs">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <span className="relative after:absolute after:-top-2 after:right-0 after:text-7xl after:text-slate-500 after:content-['”']" />
        </div>
        <Text size="sm">&ldquo;{review}&rdquo;</Text>
      </div>

      <ClientInfoCard img={img} name={name} title={title} />
    </li>
  )
}
