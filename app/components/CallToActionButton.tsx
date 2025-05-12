import * as m from "motion/react-m"
import Image from "next/image"
import profilePhoto from "@/public/assets/founder.jpg"
import clsx from "clsx"

export const CallToActionButton = () => {
  const buttonVariants = {
    initial: {
      opacity: 0,
      filter: `blur(8px)`,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: 1,
      },
    },
    hover: {
      boxShadow: "none",
      y: 4,
      transition: {
        duration: 0.2,
      },
    },
  }

  const youVariants = {
    initial: {
      opacity: 0,
      x: -10,

      width: 0,
    },
    animate: {
      opacity: 0,
      x: -10,

      width: 0,
    },
    hover: {
      opacity: 1,
      x: 0,
      width: 45,

      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        opacity: {
          delay: 0.1,
        },
      },
    },
  }

  return (
    <m.button
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={buttonVariants}
      className="group bubble-hover active inline-flex w-max items-center gap-2 rounded-full bg-black px-3 py-2.5 text-base font-medium tracking-tight text-white shadow-xl shadow-black/20"
    >
      <div className="relative flex items-center gap-1">
        {/* Avatar */}
        <div className="relative h-7 w-7 rounded-full">
          <Image src={profilePhoto} alt="Profile photo of the founder" fill sizes="50px" className="rounded-full object-cover ring-2 ring-white/75" />
        </div>

        {/* + You entrance */}
        <m.div variants={youVariants} className={clsx("hidden items-center gap-1 md:flex")}>
          <span className="text-xl">+</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-semibold text-black ring-1 ring-black/50">You</span>
        </m.div>
      </div>
      Book a call with me
    </m.button>
  )
}

// === VARIANTS ===
