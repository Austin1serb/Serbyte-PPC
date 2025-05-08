import { HeroV2 } from "./components/HeroV2"
import { LogoMarquee } from "./components/LogoMarquee"
import { Projects } from "./components/Projects"

// Dynamic import These
import dynamic from "next/dynamic"

const LargeReview = dynamic(() => import("./components/LargeReview").then((mod) => mod.LargeReview), {
  ssr: true,
})

const ServicesSectionV2 = dynamic(() => import("./components/ServicesSectionV2").then((mod) => mod.ServicesSectionV2), {
  ssr: true,
})

const AboutSectionV2 = dynamic(() => import("./components/AboutSectionV2").then((mod) => mod.AboutSectionV2), {
  ssr: true,
})

const PricingSection = dynamic(() => import("./components/PricingSection").then((mod) => mod.PricingSection), {
  ssr: true,
})

const ReviewSectionV2 = dynamic(() => import("./components/ReviewSectionV2").then((mod) => mod.ReviewSectionV2), {
  ssr: true,
})

const FAQSection = dynamic(() => import("./components/FAQ/FAQSection").then((mod) => mod.FAQSection), {
  ssr: true,
})

const WebDesignPage: React.FC = () => {
  return (
    <main>
      <HeroV2 />
      <LogoMarquee />
      <Projects />
      <LargeReview />
      <ServicesSectionV2 />
      <AboutSectionV2 />
      <PricingSection />
      <LogoMarquee avatars={false} />
      <ReviewSectionV2 />
      <FAQSection />
    </main>
  )
}

export default WebDesignPage
