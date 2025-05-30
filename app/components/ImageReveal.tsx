import * as m from "motion/react-m"
import Image, { ImageProps } from "next/image"
import { ReactElement } from "react"
import { Socials } from "./Socials"
import { socialLinks } from "./Footer/FooterV2"

interface ImageRevealProps extends Omit<ImageProps, "placeholder"> {
  className?: string
}

export default function ImageReveal({ className = "", ...img }: ImageRevealProps): ReactElement {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className} `}>
      <m.div
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0 }}
        style={{
          transformOrigin: "right",
        }}
        className="absolute inset-0 bg-slate-900"
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      />

      {/* IMAGE ------------------------------------------------------*/}
      <m.div
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3, type: "spring", bounce: 0 }}
        style={{ transformOrigin: "right" }}
        className="absolute inset-0"
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      >
        <Socials socialLinks={socialLinks} className="absolute right-4 bottom-4 z-5" iconClassName="md:opacity-85 hover:opacity-100" />
        <Image
          {...img}
          fill
          alt="Austin Serb Profile Photo"
          className={`rounded-2xl object-cover saturate-125`}
          sizes="(max-width: 560px) 300px, (max-width: 768px) 500px, 50vw"
        />
      </m.div>
    </div>
  )
}
