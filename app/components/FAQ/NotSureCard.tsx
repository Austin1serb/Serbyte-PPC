import Image from "next/image"
import profilePhoto from "../../images/profile.jpg"
import { Icon } from "../Icon"
import { CalIcon } from "../../icons/Cal.icon"

export const NotSureCard: React.FC = () => {
  return (
    <div className="bottom-shadow flex flex-col gap-8 rounded-2xl border border-gray-300 p-8 relative bg-white">
      <div className="flex flex-col gap-6">
        <Image src={profilePhoto} height={64} width={64} alt="Austin Serb" className="custom-shadow aspect-square rounded-full object-cover" />
        <h3 className="h3-display font-normal text-nowrap">
          <span className="text-slate-500">Still not sure?</span> <br />
          Book a free discovery call.
        </h3>
        <p className="text-sm">Learn more about how I work and how I can help you and your business take the next step.</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="bubble-hover button-shadow flex w-fit items-center gap-1 rounded-full bg-black px-4 py-3 text-sm font-medium text-nowrap text-white transition"
        >
          <Icon name="calendar" className="h-4 w-4 text-white!" />
          Schedule Now
        </button>

        <CalIcon className="h-auto w-20 text-gray-500" />
      </div>
    </div>
  )
}
