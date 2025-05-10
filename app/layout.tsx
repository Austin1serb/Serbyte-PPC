import { AnimateSwitch } from "./components/AnimateSwitch"
import { BottomBlurOverlay } from "./ui/BlurBottomOverlay"
import { FooterV2 } from "./components/Footer/FooterV2"
import localFont from "next/font/local"
import "./globalsV2.css"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"
import { TopBarV2 } from "./components/TopBarV2"
import { LazyMotion, domAnimation } from "motion/react"
import SplashCursor from "./components/SplashCursor"
import ComponentRouter from "./components/DesktopCursor"
import { DotCursor } from "./components/DotCursor"
import DesktopCursor from "./components/DesktopCursor"
const switzer = localFont({
  src: "./fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
  display: "swap",
  style: "normal",
  weight: "300 400 500 600 700",
})

export const metadata: Metadata = {
  title: "Serbyte",
  description: "Serbyte",
  alternates: {
    canonical: SITE_SLUGS.home,
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="relative bg-white">
        <LazyMotion strict features={domAnimation}>
          <DesktopCursor />
          <SplashCursor />
          <div className="bg-noise absolute inset-0 opacity-4 z-0 max-w-6xl mx-3.5 md:mx-5 lg:mx-8 pointer-events-none bg-repeat custom:mx-auto" />

          <div className={`${switzer.variable} font-switzer overflow-hidden subpixel-antialiased`}>
            <div className="pointer-events-none absolute inset-0 z-3 max-w-6xl border-x border-gray-200 mx-3.5 md:mx-5 lg:mx-8 custom:mx-auto" />
            <BottomBlurOverlay />
            <TopBarV2 />
            {children}
            <FooterV2 />
          </div>
        </LazyMotion>
      </body>
    </html>
  )
}
export default RootLayout
