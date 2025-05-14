import Image from "next/image"
import profilePhoto from "../../images/profile.webp"
import { Icon } from "../Icon"
import { CalIcon } from "../../icons/Cal.icon"
import { H3 } from "@/app/ui/Elements"
import clsx from "clsx"
import * as m from "motion/react-m"

export const NotSureCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <m.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      viewport={{ once: true, amount: 0.8 }}
      className={clsx(
        "bottom-shadow relative flex flex-col gap-8 rounded-2xl border border-gray-300 bg-white p-8 max-lg:text-center lg:h-fit lg:w-fit",
        className
      )}
    >
      <div className="flex flex-col gap-6 max-lg:items-center">
        <Image src={profilePhoto} height={64} width={64} alt="Austin Serb" className="aspect-square rounded-full object-cover" sizes="200px" />
        <H3 className="font-normal text-nowrap">
          <span className="text-slate-500">Still not sure?</span> <br />
          Book a free discovery call.
        </H3>
        <p className="max-w-xs text-sm">Learn more about how I work and how I can help you and your business take the next step.</p>
      </div>
      <div className="flex items-center gap-4 max-lg:flex-col">
        <button
          type="button"
          className="bubble-hover button-shadow flex w-fit items-center gap-1 rounded-full bg-black px-4 py-3 text-sm font-medium text-nowrap text-white transition hover:cursor-pointer"
        >
          <Icon name="calendar" height={20} width={20} className="h-5 w-5 text-white" />
          Schedule Now
        </button>

        <CalIcon className="h-auto w-20 text-gray-500" />
      </div>
    </m.div>
  )
}
