import { REVIEWS } from "../data/review-data"
import { ReviewCard } from "./ReviewCard"
import { MotionUl } from "../utils/lazy-ui"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}
const element = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
}

export function ReviewGridV2() {
  return (
    <section id="review-grid" className="relative z-5">
      <MotionUl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
        variants={container}
        className={
          "flex grid-cols-1 gap-3 px-5.5 pb-2 [scrollbar-width:none] max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto max-md:scroll-smooth sm:gap-6 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3"
        }
      >
        {REVIEWS.map((card, i) => (
          <ReviewCard {...card} key={i} className="w-72 flex-shrink-0 max-md:snap-center md:w-auto" variants={element} />
        ))}
      </MotionUl>
    </section>
  )
}
