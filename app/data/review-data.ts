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
    id: "entitled",
    img: "/client-photos/yassine-rhamani-profile-photo.jpeg",
    name: "Yassine Ramani",
    title: "CEO, Entitled",
    quote:
      "Serbyte didn't just build a website-they gave our brand a true digital identity. Their attention to detail and creativity brought our vision to life in ways we hadn't imagined. If you're looking for a website design company in Seattle that understands branding and design, they're the team to trust",
  },
  {
    id: "herba-naturals",
    img: "/brands/herba-naturals-logo.png",
    name: "Sami Raheem",
    title: "Owner, Herba Naturals",
    quote:
      "At the time, Austin was working solo, yet he delivered an e-commerce website that exceeded all our expectations. It was fast, user-friendly, and packed with features like automated shipping labels and AI-powered product management. Finding a Seattle web design company that goes beyond the basics is rare-Serbyte delivered in every way.",
  },
  {
    id: "vets-choice",
    img: "/brands/vets-choice-insurance-logo.png",
    name: "Rob Dow",
    title: "Co-Founder, Vets Choice Insurance",
    quote:
      "The aftercare is unbeatable. Being an insurance company, we had to go through many rounds of revisions to comply with our legal requirements. Austin was always available to help and make sure we were happy with the final product. I highly recommend them for any web design needs.",
  },
  {
    id: "bespoke",
    img: "/client-photos/bespoke-tint-owner-kris-256.webp",
    name: "Kris Meyer",
    title: "Owner, Bespoke Tint",
    quote:
      "Serbyte took our vision and built a website that makes our business look as professional online as it is in person. We've already seen a huge increase in calls and bookings. Couldn't recommend Austin enough.",
  },
  {
    id: "iao",
    img: "/client-photos/aleksandr-butowicz-iron-oak-profile-photo.jpg",
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
