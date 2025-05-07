import { AnimateSwitch } from "./components/AnimateSwitch"
import { DotCursor } from "./components/DotCursor"
import SplashCursor from "./components/SplashCursor"
import { BottomBlurOverlay } from "./ui/BlurBottomOverlay"
import { FooterV2 } from "./components/Footer/FooterV2"
import localFont from "next/font/local"

import "./globalsV2.css"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"
import { TopBarV2 } from "./components/TopBarV2"

const switzer = localFont({
  src: "./fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
  display: "swap",
  style: "normal",
  weight: "100 200 300 400 500 600 700 800 900",
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
        <AnimateSwitch animate={<DotCursor />} static={null} />
        <SplashCursor />
        <div className="bg-noise" />

        <div className={`${switzer.variable} font-switzer overflow-hidden subpixel-antialiased`}>
          <div className="border-box" />
          <BottomBlurOverlay />
          <TopBarV2 />
          {children}

          <FooterV2 />
        </div>
      </body>
    </html>
  )
}
export default RootLayout
