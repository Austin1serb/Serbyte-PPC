import Link from "next/link"
import { ExactlyFourWords, TextSlider } from "./TextSlider"
import { Socials } from "../Socials"
import { SITE_NAP } from "@/config/siteConfig"

const words: ExactlyFourWords = ["build", "create", "design", "convert"]

const socialLinks = [
  {
    href: SITE_NAP.profiles.linkedIn,
    icon: "linkedin",
  },
  {
    href: SITE_NAP.profiles.facebook,
    icon: "facebook",
  },
  {
    href: SITE_NAP.profiles.pinterest,
    icon: "pinterest",
  },
  {
    href: SITE_NAP.profiles.gbp,
    icon: "google",
  },
  {
    href: SITE_NAP.profiles.yelp,
    icon: "yelp",
  },
]

export const FooterV2: React.FC = () => {
  return (
    <footer className="relative bg-black z-4">
      <div className="bg-noise opacity-10!" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5.5 sm:pb-40 pb-32 text-white md:gap-16 md:px-11 pt-12 md:pt-16 lg:pb-54">
        <div className="flex flex-col gap-8 md:gap-12">
          <h2 className="h2-display text-5xl leading-12 md:leading-14 text-white md:text-6xl">
            Lets&nbsp;
            <TextSlider words={words} height={50} mobileHeight={41} />
            <br />
            <span className="text-gray-500">incredible work together.</span>
          </h2>
          <ul className="flex flex-col justify-between border-b border-gray-500 pb-6 md:flex-row md:items-center md:gap-8 gap-5.5 text-sm">
            <li className="flex flex-col gap-1 md:gap-2">
              <span className="text-gray-500">Email</span>
              <Link href="mailto:owner@serbyte.net" className="link-display">
                owner@serbyte.net
              </Link>
            </li>
            <li className="flex flex-col gap-1 md:gap-2">
              <span className="text-gray-500">Call or Text</span>
              <Link href="tel:+12086164308" className="link-display">
                +1 (208) 616-4308
              </Link>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-gray-500">Socials</span>
              <Socials socialLinks={socialLinks} />
            </li>
          </ul>
        </div>
        <div className="flex flex-col-reverse justify-between gap-2 text-xs md:flex-row text-nowrap">
          <div className="flex gap-5.5 items-center max-sm:flex-wrap">
            <h3>
              <span className="text-[#b8b8b8]">Based in </span> Seattle, Washington, USA
            </h3>
            <div className="flex gap-4">
              <Link href="/terms-of-service" className="link-display">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="link-display">
                Privacy Policy
              </Link>
            </div>
          </div>
          <span className="text-[#b8b8b8]">© 2025 Serbyte Development</span>
        </div>
        <h2 className="large-brand-text absolute -bottom-16 left-0 flex w-full items-center justify-center font-medium text-white md:text-[180px] lg:text-[240px]">
          SERBYTE
        </h2>
      </div>
    </footer>
  )
}
