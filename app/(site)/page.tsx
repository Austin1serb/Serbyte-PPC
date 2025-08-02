"use client"
import { HeroV2 } from "../components/HeroV2"
import { Projects } from "../components/Projects"
import { reviewPlaceholder } from "../components/LargeReview"

// Dynamic import These
import dynamic from "next/dynamic"
import { useLenisSnap } from "../hooks/useLenisSnap"

const LogoMarquee = dynamic(() => import("../components/LogoMarquee").then((mod) => mod.LogoMarquee), {
  ssr: true,
})

const LargeReview = dynamic(() => import("../components/LargeReview").then((mod) => mod.LargeReview), {
  ssr: true,
})

const ServicesSectionV2 = dynamic(() => import("../components/ServicesSectionV2").then((mod) => mod.ServicesSectionV2), {
  ssr: true,
})

const AboutSectionV2 = dynamic(() => import("../components/AboutSectionV2").then((mod) => mod.AboutSectionV2), {
  ssr: true,
})

const PricingSection = dynamic(() => import("../components/PricingSection").then((mod) => mod.PricingSection), {
  ssr: true,
})

const ReviewSectionV2 = dynamic(() => import("../components/ReviewSectionV2").then((mod) => mod.ReviewSectionV2), {
  ssr: true,
})

const FAQSection = dynamic(() => import("../components/FAQ/FAQSection").then((mod) => mod.FAQSection), {
  ssr: true,
})

const WebDesignPage: React.FC = () => {
  useLenisSnap()

  return (
    <main className="overflow-hidden">
      <HeroV2 data-snap />
      <LogoMarquee data-snap />
      <Projects data-snap />
      <LargeReview {...reviewPlaceholder} data-snap />
      <ServicesSectionV2 data-snap />
      <AboutSectionV2 data-snap />
      <PricingSection data-snap />
      <ReviewSectionV2 data-snap />
      <FAQSection data-snap />
    </main>
  )
}

export default WebDesignPage
