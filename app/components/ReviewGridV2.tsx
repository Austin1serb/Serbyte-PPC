import { ReviewCard } from "./ReviewCard"
import profilePhoto from "@/public/assets/founder.jpg"

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

export function ReviewGridV2() {
  return (
    <section id="review-grid" className="relative z-5">
      {/* viewport - visible window, acts as drag constraint */}{" "}
      <ul
        className={"flex grid-cols-1 gap-3 px-5.5 pb-2 [scrollbar-width:none] max-md:overflow-x-auto sm:gap-6 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3"}
      >
        {CARDS.map((card, i) => (
          <ReviewCard {...card} key={i} className="w-72 flex-shrink-0 md:w-auto" />
        ))}
      </ul>
    </section>
  )
}
