"use client"
import { useIsMobile } from "../hooks/useIsMobile"
import { ReviewCard } from "./ReviewCard"
import profilePhoto from "@/public/assets/founder.jpg"
import { useRef } from "react"
import * as motion from "motion/react-client"

/* data ------------------------------------------------------------------ */

const CARDS: ReviewCard[] = [
  {
    img: profilePhoto,
    name: "John Doe",
    title: "Review 1",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    img: profilePhoto,
    name: "Jane Doe",
    title: "Review 2",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    img: profilePhoto,
    name: "John Doe",
    title: "Review 3",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    img: profilePhoto,
    name: "Jane Doe",
    title: "Review 4",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    img: profilePhoto,
    name: "John Doe",
    title: "Review 5",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    img: profilePhoto,
    name: "Jane Doe",
    title: "Review 6",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
] as const
const STRIP_W = 1800 // 6 × 288 + 5 × 12

export function ReviewGridV2() {
  const isMobile = useIsMobile(768)

  /* constraint element --------------------------------------------------- */
  const viewportRef = useRef<HTMLDivElement>(null)

  return (
    <section id="review-grid" className="relative">
      {/* viewport - visible window, acts as drag constraint */}
      <div ref={viewportRef} className="overflow-hidden pb-2">
        <motion.ul
          drag={isMobile ? "x" : false}
          dragConstraints={viewportRef} /* 👈 automatic limit */
          dragMomentum
          whileDrag={{ cursor: "grabbing" }}
          style={{ touchAction: "pan-y", cursor: isMobile ? "grab" : "auto", width: isMobile ? STRIP_W : "100%" }}
          className={isMobile ? `flex gap-3` : "grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3"}
        >
          {CARDS.map((card, i) => (
            <ReviewCard {...card} key={i} className="w-72 flex-shrink-0 md:w-auto" />
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
