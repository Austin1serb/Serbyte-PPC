import { StaticImageData } from "next/image"
import profilePhoto from "@/public/assets/founder.jpg"

export interface ReviewProps {
  quote: React.ReactNode
  name: string
  title: string
  img: StaticImageData | string
  id?: string
}

export const REVIEWS = [
  {
    id: "john-1",
    img: profilePhoto,
    name: "John Doe",
    title: "Review 1",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: "jane-1",
    img: profilePhoto,
    name: "Jane Doe",
    title: "Review 2",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: "john-2",
    img: profilePhoto,
    name: "John Doe",
    title: "Review 3",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: "jane-2",
    img: profilePhoto,
    name: "Jane Doe",
    title: "Review 4",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: "iao",
    img: "/assets/iao-logo-optimized.png",
    name: "Aleks Butokowitz",
    title: "CEO, Iron & Oak",
    quote:
      "Working with Serbyte felt like working with an in-house team. They took the time to understand our mission and goals, delivering a site that perfectly blended branding and design with seamless functionality. Their expertise as a web design agency was evident in every detail, from performance to aesthetics.",
  },

  {
    id: "automedics",
    name: "Jeff Egbert",
    title: "Owner, Automedics Kirkland",
    quote: "Austin built our website fast and it works flawlessly. He is always available to answer questions or solve problems. Great experience.",
    img: "/assets/automedics-logo-optimized.png",
  },
] as const satisfies readonly ReviewProps[]

// O(1) lookup
export const REVIEW_MAP: Record<string, ReviewProps> = Object.fromEntries(REVIEWS.map((r) => [r.id, r]))

export function getReview(id: string) {
  return REVIEW_MAP[id]
}
