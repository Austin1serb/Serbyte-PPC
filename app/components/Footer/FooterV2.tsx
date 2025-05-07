import Link from "next/link"
import { ExactlyFourWords, TextSlider } from "./TextSlider"

const words: ExactlyFourWords = ["build", "create", "design", "convert"]

export const FooterV2: React.FC = () => {
  return (
    <footer className="relative bg-black z-4">
      <div className="bg-noise opacity-10!" />

      <div className=" mx-auto flex w-full max-w-6xl flex-col gap-12 px-5.5 pt-8 pb-40 text-white md:gap-16 md:px-11 md:pt-12 lg:pb-54">
        <div className="flex flex-col gap-12">
          <h2 className="h2-display text-5xl leading-16 text-white lg:text-6xl">
            Let&apos;s&nbsp;
            <TextSlider words={words} height={54} mobileHeight={50} />
            <br />
            <span className="text-[#828282]">incredible work together.</span>
          </h2>
          <ul className="flex flex-col justify-between border-b border-white/30 pb-6 md:flex-row md:items-center">
            <li className="flex flex-col gap-2">
              <span className="text-[#828282]">Email</span>
              <Link href="mailto:owner@serbyte.net">owner@serbyte.net</Link>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-[#828282]">Call or Text</span>
              <Link href="tel:+12086164308">+1 (208) 616-4308</Link>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-[#828282]">Socials</span>
              <div className="flex gap-2 md:flex-col">
                <Link href="https://www.instagram.com/serbyte.net">Instagram</Link>
                <Link href="https://www.facebook.com/serbyte.net">Facebook</Link>
                <Link href="https://www.twitter.com/serbyte.net">Twitter</Link>
                <Link href="https://www.linkedin.com/company/serbyte.net">LinkedIn</Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-2 text-xs md:flex-row">
          <div className="flex gap-6">
            <h3>
              <span className="text-[#828282]">Based in</span> Seattle, Washington, USA
            </h3>
            <div className="flex gap-4">
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
          <span className="text-[#828282]">© 2025 Serbyte Development</span>
        </div>
        <h2 className="large-brand-text absolute -bottom-16 left-0 flex w-full items-center justify-center font-medium text-white md:text-[180px] lg:text-[240px]">
          SERBYTE
        </h2>
      </div>
    </footer>
  )
}
