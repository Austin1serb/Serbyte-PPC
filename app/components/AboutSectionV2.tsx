import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "../images/profile.webp"
import signature from "../images/signature.webp"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./AnimatedH2"
import ImageReveal from "./ImageReveal"
import * as m from "motion/react-m"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">Designing experiences</span>
          <br />
          that solve real problems.
        </AnimatedH2>
        <div className="flex md:flex-row flex-col-reverse gap-12 md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="[flex:1_0_0px] flex flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Austin Serb" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <m.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text size="lg" className="font-medium">
                Austin Serb
              </Text>
              <p className="text-sm text-gray-500">Owner Serbyte Development</p>
            </m.div>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">I love turning ideas into something real through design.</strong> What started as a hobby turned
              into a career when I discovered how design can make things both look great and work better.
            </p>
            <p>
              <strong className="font-semibold text-slate-900">I focus on creating user interfaces that serve a real purpose</strong> - making sure they&apos;re
              not just pretty, but actually solve problems. Whether I&apos;m working on a mobile app or a website, my goal is to make something that feels
              natural and easy to use.
            </p>
            <p>
              <strong className="font-semibold text-slate-900">I&apos;m a bit of a perfectionist when it comes to the small stuff,</strong> but I think
              that&apos;s what makes good design great. This attention to detail helps me build strong relationships with clients, as they know I&apos;ll put
              the same care into their project that they would.
            </p>

            {/* signature */}
            <Image src={signature} alt="Austin Serb Signature" width={90} height={45} className="mt-6 -ml-3 -rotate-6" />
          </Typography>
        </div>
      </div>
    </section>
  )
}
