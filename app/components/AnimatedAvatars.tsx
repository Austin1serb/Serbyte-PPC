import * as m from "motion/react-m"
import Image from "next/image"
import profilePhoto from "@/public/assets/founder.jpg"

const MEDALS = [profilePhoto, profilePhoto, profilePhoto, profilePhoto, profilePhoto]

const container = {
  hidden: {
    x: -12,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      duration: 0.2,
    },
  },
}

const avatar = {
  hidden: {
    opacity: 0,
    x: -12,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function AnimatedAvatars() {
  return (
    <m.div className="flex items-center gap-4 whitespace-nowrap" initial="hidden" animate="visible" variants={container}>
      <div className="flex flex-row-reverse -space-x-3 space-x-reverse">
        {MEDALS.map((src, i) => (
          <m.div key={i} className="relative inline-block h-8 w-8 overflow-hidden rounded-full ring-3 ring-white" animate={{ zIndex: -i }} variants={avatar}>
            <Image src={src} alt="Reviewer avatar" width={40} height={40} className="h-full w-full object-cover" sizes="40px" />
          </m.div>
        ))}
      </div>
    </m.div>
  )
}
