import { Icon } from "../Icon"
import { CalIcon } from "../../icons/Cal.icon"
import { H3 } from "@/app/ui/Elements"
import clsx from "clsx"
import * as m from "motion/react-m"
import { AnimatedAvatars } from "../AnimatedAvatars"
import { AnimatedElement } from "../AnimatedElement"

export const LikeWhatYouSeeCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section className="border-t border-gray-200">
      <div className="inside-container ">
        <m.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          viewport={{ once: true, amount: 0.8 }}
          className={clsx("relative flex flex-col gap-8 rounded-2xl border border-gray-200 bg-white p-8 text-center h-full w-full items-center", className)}
        >
          <div className="flex flex-col gap-6 items-center">
            <div className="flex items-center gap-4 whitespace-nowrap">
              <AnimatedAvatars />
              <AnimatedElement element="div" fadeDirection="right" offsetPx={20} duration={0.4} delay={0.15} className="flex flex-col">
                <div className="flex items-center gap-0.5 text-base text-gray-600">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-900">99+ Happy clients</span>
              </AnimatedElement>
            </div>
            <H3 className="font-normal text-nowrap">
              <span className="text-slate-500">Like what you see?</span> <br />
              Book a free discovery call.
            </H3>
          </div>
          <div className="flex items-center gap-4 flex-col">
            <button
              type="button"
              className="bubble-hover button-shadow flex w-fit items-center gap-1 rounded-full bg-black px-4 py-3 text-sm font-medium text-nowrap text-white transition hover:cursor-pointer"
            >
              <Icon name="calendar" height={20} width={20} className="h-6 w-6 text-white" />
              Schedule Now
            </button>
            <CalIcon className="h-auto w-20 text-gray-500" />
          </div>
        </m.div>
      </div>
    </section>
  )
}
