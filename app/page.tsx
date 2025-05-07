import { HeroV2 } from "./components/HeroV2"
import { LogoMarquee } from "./components/LogoMarquee"
import { Projects } from "./components/Projects"
import { LargeReview } from "./components/LargeReview"
import { ServicesSectionV2 } from "./components/ServicesSectionV2"
import { AboutSectionV2 } from "./components/AboutSectionV2"
import { PricingSection } from "./components/PricingSection"
import { ReviewSectionV2 } from "./components/ReviewSectionV2"
import { FAQSection } from "./components/FAQ/FAQSection"
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
