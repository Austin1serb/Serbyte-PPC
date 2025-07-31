import Link from "next/link"
import { TextSlider } from "./TextSlider"
import { Socials } from "../Socials"
import { SITE_NAP } from "@/config/siteConfig"
import { H2 } from "@/app/ui/Elements"

const words: [string, string, string, string] = ["build", "create", "design", "make"]

export const socialLinks = [
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
    <footer className="relative z-4 overflow-hidden bg-black">
      <div className="bg-noise pointer-events-none absolute inset-0 z-0 bg-repeat opacity-10" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5.5 pt-12 pb-32 text-white sm:pb-40 md:gap-16 md:px-11 md:pt-16 lg:pb-54">
        <div className="flex flex-col gap-8 md:gap-12">
          <H2 className="text-5xl leading-12 text-white md:text-6xl md:leading-14">
            Lets&nbsp;
            <TextSlider words={words} height={50} mobileHeight={41} />
            <br />
            <span className="text-gray-500">incredible work together.</span>
          </H2>
          <ul className="flex flex-col justify-between gap-5.5 border-b border-gray-500 pb-6 text-sm md:flex-row md:items-center md:gap-8">
            <li className="flex flex-col gap-1 md:gap-2">
              <span className="text-gray-500">Email</span>
              <Link href="mailto:owner@serbyte.net" className="w-fit text-sm transition-colors duration-200 hover:text-gray-500">
                owner@serbyte.net
              </Link>
            </li>
            <li className="flex flex-col gap-1 md:gap-2">
              <span className="text-gray-500">Call or Text</span>
              <Link href={`tel:${SITE_NAP.phone}`} className="w-fit text-sm transition-colors duration-200 hover:text-gray-500">
                {SITE_NAP.formattedPhone}
              </Link>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-gray-500">Socials</span>
              <Socials socialLinks={socialLinks} />
            </li>
          </ul>
        </div>
        <div className="flex flex-col-reverse justify-between gap-2 text-xs text-nowrap md:flex-row">
          <div className="flex items-center gap-5.5 max-sm:flex-wrap">
            <h3>
              <span className="text-[#b8b8b8]">Based in </span> Seattle, Washington, USA
            </h3>
            <div className="flex gap-4">
              <Link href="/terms-of-service" className="text-sm transition-colors duration-200 hover:text-gray-500">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="text-sm transition-colors duration-200 hover:text-gray-500">
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
