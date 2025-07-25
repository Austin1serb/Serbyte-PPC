import profilePhoto from "@/public/assets/founder.jpg"
import { AnimatedInView } from "./AnimatedInView"
import { ClientInfoCard } from "./ClientInfoCard"
import { type ReviewProps } from "../data/review-data"

export const reviewPlaceholder: ReviewProps = {
  quote: (
    <>
      {" "}
      Working with Austin felt like having a seasoned design partner{" "}
      <strong className="font-semibold text-slate-900">who truly understood our vision for Zazzle</strong> and brought it to life in ways we hadn&apos;t even
      imagined.
    </>
  ),
  name: "Thomas Weber",
  title: "Co-founder of Zazzle",
  img: profilePhoto,
}

export function LargeReview({ quote, name, title, img }: ReviewProps) {
  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="inside mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <AnimatedInView element="div" fadeDirection="bottom" className="flex flex-col items-center gap-6 text-center">
          {/* Quote */}
          <blockquote className="relative mt-12 max-w-3xl p-6 text-xl leading-6 tracking-tight text-balance text-slate-700 md:text-2xl">
            <p>{quote}</p>
          </blockquote>

          {/* Client Info Card */}
          <ClientInfoCard img={img} name={name} title={title} />
        </AnimatedInView>
      </div>
    </section>
  )
}
