import profilePhoto from "@/public/assets/founder.jpg"
import { AnimatedInView } from "./AnimatedInView"
import { ClientInfoCard } from "./ClientInfoCard"

export function LargeReview() {
  return (
    <section className="border-y border-gray-200">
      <div className="inside mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <AnimatedInView element="div" fadeDirection="bottom" className="flex flex-col items-center gap-6 text-center">
          {/* Quote */}
          <blockquote className="body-display-xl relative mt-12 max-w-3xl p-6 text-balance">
            <p>
              Working with Austin felt like having a seasoned design partner <strong>who truly understood our vision for Zazzle</strong> and brought it to life
              in ways we hadn&apos;t even imagined.
            </p>
          </blockquote>

          {/* Client Info Card */}
          <ClientInfoCard img={profilePhoto} name="Thomas Weber" title="Co-founder of Zazzle" />
        </AnimatedInView>
      </div>
    </section>
  )
}
