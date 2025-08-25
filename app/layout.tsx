import { BottomBlurOverlay } from "./ui/BlurBottomOverlay"
import { FooterV2 } from "./components/Footer/FooterV2"
import localFont from "next/font/local"
import "./globalsV2.css"
import { Metadata } from "next"
import { SITE_CONFIG, SITE_SLUGS } from "@/config/siteConfig"
import { TopBarV2 } from "./components/TopBar/TopBarV2"
import SplashCursor from "./components/SplashCursor"
import { DesktopCursor, MotionWrapper } from "./utils/lazy-ui"
import { Analytics } from "@vercel/analytics/react"
import { bodyAttributes } from "@zero-ui/attributes"
import ReactLenis from "lenis/react"
import ViewTransitions from "./utils/ViewTransition"

const switzer = localFont({
  src: "./fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
  display: "swap",
  style: "normal",
  weight: "300 400 500 600 700",
  fallback: ["helvetica", "sans-serif"],
  preload: true,
})
export const metadata: Metadata = {
  title: "Serbyte",
  description: "Serbyte",
  alternates: {
    canonical: SITE_CONFIG.url + SITE_SLUGS.home,
  },
}
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body {...bodyAttributes} className="relative bg-white" data-mobile-menu="closed" data-scrolled="up">
        <MotionWrapper>
          {/* <ReactLenis root options={{ lerp: 0.07 }} /> */}
          <DesktopCursor />
          <ViewTransitions />
          {/* <SplashCursor /> */}
          <div className="bg-noise custom:mx-auto pointer-events-none absolute inset-0 z-0 mx-3.5 max-w-6xl bg-repeat opacity-4 md:mx-5 lg:mx-8" />
          <div className={`${switzer.variable} font-switzer subpixel-antialiased`}>
            <div className="custom:mx-auto pointer-events-none absolute inset-0 z-0 mx-3.5 max-w-6xl border-x border-gray-200 md:mx-5 lg:mx-8" />
            {/* <BottomBlurOverlay /> */}
            <TopBarV2 />
            {children}
            <FooterV2 />
          </div>
        </MotionWrapper>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
export default RootLayout
