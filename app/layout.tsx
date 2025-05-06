import { AnimateSwitch } from "./components/AnimateSwitch"
import { DotCursor } from "./components/DotCursor"
import SplashCursor from "./components/SplashCursor"
import { BottomBlurOverlay } from "./ui/BlurBottomOverlay"
import { FooterV2 } from "./components/Footer/FooterV2"
import localFont from "next/font/local"

import "./globalsV2.css"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

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
      <body>
        <main className={`${switzer.variable} font-switzer relative overflow-hidden bg-white subpixel-antialiased`}>
          <AnimateSwitch
            animate={
              <>
                <DotCursor />
                <SplashCursor />
              </>
            }
            static={null}
          />
          {children}

          <div className="border-box">
            <BottomBlurOverlay />
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: 128,
                backgroundRepeat: "repeat",
                backgroundImage: 'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")',
                opacity: "0.06",
                borderRadius: 0,
                position: "relative",
              }}
            />
          </div>
          <FooterV2 />
        </main>
      </body>
    </html>
  )
}
export default RootLayout
