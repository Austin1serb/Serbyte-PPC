import Link from "next/link"
import { ExactlyFourWords, TextSlider } from "./TextSlider"

const words: ExactlyFourWords = ["build", "create", "design", "convert"]

export const FooterV2: React.FC = () => {
  return (
    <footer className="relative bg-black">
      <div className="z-20 mx-auto flex w-full max-w-6xl flex-col gap-12 px-5.5 pt-8 pb-18 text-white md:gap-16 md:px-11 md:pt-12 md:pb-54">
        <div className="flex flex-col gap-12">
          <h2 className="h2-display leading-16 text-white">
            Let&apos;s&nbsp;
            <TextSlider words={words} height={55} />
            <br />
            <span className="text-[#828282]">incredible work together.</span>
          </h2>
          <ul className="flex items-center justify-between border-b border-[#828282] pb-6">
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
              <div className="flex flex-col gap-2 md:flex-row">
                <Link href="https://www.instagram.com/serbyte.net">Instagram</Link>
                <Link href="https://www.facebook.com/serbyte.net">Facebook</Link>
                <Link href="https://www.twitter.com/serbyte.net">Twitter</Link>
                <Link href="https://www.linkedin.com/company/serbyte.net">LinkedIn</Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-between text-xs">
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
        <h2 className="absolute -bottom-16 left-0 flex w-full items-center justify-center text-[240px] font-medium text-white">SERBYTE</h2>
      </div>
    </footer>
  )
}
