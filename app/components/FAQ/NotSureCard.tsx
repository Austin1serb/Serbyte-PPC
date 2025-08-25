import Image from "next/image"
import profilePhoto from "../../images/profile.webp"
import { Icon } from "../Icon"
import { CalIcon } from "../../icons/Cal.icon"
import { H3 } from "@/app/ui/Elements"
import clsx from "clsx"
import { AnimatedAvatars } from "../ui/AnimatedAvatars"
import { AnimatedElement } from "../ui/AnimatedElement"
import { BlackButton } from "../ui/BlackButton"
import { MotionDiv } from "@/app/utils/lazy-ui"

export const NotSureCard: React.FC<{ className?: string; projectsPage?: boolean }> = ({ className, projectsPage = false }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      viewport={{ once: true, amount: 0.8 }}
      className={clsx(
        "relative flex flex-col gap-8 rounded-2xl border border-gray-300 bg-white p-8 max-lg:text-center",
        className,
        projectsPage ? "h-full w-full items-center justify-center" : "lg:h-fit lg:w-fit"
      )}
    >
      <div className="flex flex-col gap-6 max-lg:items-center">
        {projectsPage ? (
          <div className="flex items-center gap-4 whitespace-nowrap">
            <AnimatedAvatars />
            <AnimatedElement element="div" fadeDirection="right" offsetPx={20} duration={0.4} delay={0.15} className="flex flex-col">
              <div className="flex items-center gap-0.5 text-base text-gray-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-sm font-medium text-slate-900">Many Happy clients</span>
            </AnimatedElement>
          </div>
        ) : (
          <Image src={profilePhoto} height={64} width={64} alt="Austin Serb" className="aspect-square rounded-full object-cover" sizes="200px" />
        )}
        <H3 className={clsx("font-normal text-nowrap", projectsPage && "text-center")}>
          <span className="text-slate-500">{projectsPage ? "Like what you see?" : "Still not sure?"}</span> <br />
          Book a free discovery call.
        </H3>
        {!projectsPage && <p className="max-w-xs text-sm">Learn more about how I work and how I can help you and your business take the next step.</p>}
      </div>
      <div className="flex items-center gap-4 max-lg:flex-col">
        <BlackButton>
          <Icon name="calendar" height={20} width={20} className="h-5 w-5 text-white" />
          Schedule Now
        </BlackButton>

        <CalIcon className="h-auto w-20 text-gray-500" />
      </div>
    </MotionDiv>
  )
}
