import { AboutSectionV2 } from "../components/AboutSectionV2"
import { FAQSection } from "../components/FAQ/FAQSection"
import { HeroV2 } from "../components/HeroV2"
import { LargeReview } from "../components/LargeReview"
import { LogoMarquee } from "../components/LogoMarquee"
import { PricingSection } from "../components/PricingSection"
import { Projects } from "../components/Projects"
import { ReviewSectionV2 } from "../components/ReviewSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"

import { REVIEWS } from "../data/review-data"

const WebDesignPage: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <HeroV2 data-snap />
      <LogoMarquee data-snap />
      <Projects data-snap />
      <LargeReview {...REVIEWS[3]} data-snap />
      <ServicesSectionV2 data-snap />
      <AboutSectionV2 data-snap />
      <PricingSection data-snap />
      <ReviewSectionV2 data-snap />
      <FAQSection data-snap />
    </main>
  )
}

export default WebDesignPage
