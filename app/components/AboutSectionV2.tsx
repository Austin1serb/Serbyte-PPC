import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "../images/profile.jpg"
import signature from "../images/signature.png"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container">
        {/* HEADLINE */}
        <h2 className="h2-display">
          <span className="text-slate-500">Designing experiences</span>
          <br />
          that solve real problems.
        </h2>
        <div className="flex flex-row gap-12 md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex-full flex flex-col gap-6">
            {/* portrait + overlay icons */}

            <Image src={profilePhoto} alt="Austin Serb" className="custom-shadow aspect-[4/4.5] rounded-2xl object-cover" />

            {/* name + role */}
            <div>
              <p className="body-display-lg font-medium">Austin Serb</p>
              <p className="text-sm text-gray-500">Owner Serbyte Development</p>
            </div>
          </div>
          {/* ---------------- right column ---------------- */}
          <article className="body-display-lg flex-1-5 space-y-8">
            <p>
              <strong>I love turning ideas into something real through design.</strong> What started as a hobby turned into a career when I discovered how
              design can make things both look great and work better.
            </p>
            <p>
              <strong>I focus on creating user interfaces that serve a real purpose</strong> - making sure they&apos;re not just pretty, but actually solve
              problems. Whether I&apos;m working on a mobile app or a website, my goal is to make something that feels natural and easy to use.
            </p>
            <p>
              <strong>I&apos;m a bit of a perfectionist when it comes to the small stuff,</strong> but I think that&apos;s what makes good design great. This
              attention to detail helps me build strong relationships with clients, as they know I&apos;ll put the same care into their project that they would.
            </p>

            {/* optional signature */}
            <Image src={signature} alt="" width={90} height={45} className="mt-6 -ml-3 -rotate-6" />
          </article>
        </div>
      </div>
    </section>
  )
}
