import Image, { StaticImageData } from "next/image"
import { TintSimulator } from "../BespokeTint/TintSimulator"
import { Phase } from "./ApproachSection"
import { ProjectHeroProps } from "./ProjectHero"
import heroBefore from "@/public/assets/bespoke-hero-before.png"
import heroBeforeMobile from "@/public/assets/bespoke-hero-mobile.png"
import heroBeforeAutomedics from "@/public/assets/automedics-before.png"
import heroBeforeMobileAutomedics from "@/public/assets/automedics-mobile.png"
import { AnalyticCardProps } from "./ResultsSection"
import { TrafficBarChart } from "./TrafficBarChart"
import { RadialProgressRing } from "./RadialProgressRing"
import { LineChart } from "./LineChart"
import { reviewPlaceholder, ReviewProps } from "../LargeReview"

export type ProjectData = {
  hero: ProjectHeroProps
  beforeAfter: { heroBefore: StaticImageData; heroBeforeMobile: StaticImageData; iframe?: string; heroAfter?: StaticImageData }
  results: AnalyticCardProps[]
  phases: Phase[]
  review: ReviewProps
}

export const bespoke: ProjectData = {
  hero: {
    title: "Growing Bespoke Tint & PPF to $1m+ in Revenue",
    client: "Bespoke Tint & PPF",
    year: "2025",
    description: (
      <>
        Bespoke Tint & PPF&apos;s site was rebuilt from the ground up into a lightning fast, conversion first engine-every page reverse-engineered around the
        highest-value competitor keywords in the Bellevue auto-styling market. In under 90 days, organic{" "}
        <span className="font-semibold">traffic increased nearly 1000%</span>, the shop is booking an average of{" "}
        <span className="font-semibold">3 new paying clients per day</span>, and it&apos;s now on a clear trajectory to break $1 million in 2025 revenue.
      </>
    ),
    categories: ["SEO", "Web Design", "Web Development", "Photography"],
    link: "https://www.bespokeauto.org/",
  },
  beforeAfter: {
    heroBefore: heroBefore,
    heroBeforeMobile: heroBeforeMobile,
    iframe: "/bespoke-hero.html",
  },
  results: [
    {
      title: "Traffic Growth",
      description: "Increase post-launch from all channels",
      percentageIncrease: 966,
      chart: <TrafficBarChart />,
      dataSource: "Based on 30 day traffic average",
    },
    {
      title: "Conversion Rate",
      description: "Online visitor conversion improvement",
      percentageIncrease: 45,
      chart: <RadialProgressRing />,
      dataSource: "Measured over a 60 day period",
    },
    {
      title: "Revenue Growth",
      description: "Increase post-launch",
      percentageIncrease: 35,
      chart: <LineChart />,
      dataSource: "Measured over a 90 day period",
    },
  ],

  phases: [
    {
      id: 1,
      title: "Design System",
      subtitle: "Beautiful High-Converting Design",
      description:
        "Created a stunning design system that showcases amazing reviews while maintaining a slightly rebellious edge through strategic use of clip paths and angular elements.",
      details: [
        "Implemented clip-path CSS for edgy, non-traditional section borders",
        "Designed around extensive customer reviews and testimonials",
        "Created a cohesive design system with rebel aesthetic touches",
        "Focused on conversion-first design principles",
        "Incorporated angular elements instead of traditional straight lines",
      ],
      icon: "/assets/design-black.webp",
      feature: (
        <div className="absolute inset-0 h-full w-full bg-white">
          <Image src="/assets/brand-images.jpg" alt="Competitor Analysis" fill className="object-contain py-5" />
        </div>
      ),
    },
    {
      id: 2,
      title: "Quality Assets",
      subtitle: "Premium Visual Content",
      description:
        "Developed stunning HD videos and high-quality images with crystal-clear call-to-actions strategically placed throughout the entire user journey.",
      details: [
        "Professional HD video content showcasing services",
        "High-resolution photography of completed work",
        "Strategic placement of clear call-to-action buttons",
        "Optimized media for fast loading times",
        "Created visual hierarchy to guide user attention",
      ],
      icon: "/assets/assets-black.webp",
      feature: (
        <video className="hero-section absolute inset-0 h-full w-full object-cover saturate-200" muted loop preload="metadata" autoPlay playsInline>
          <source src="/videos/clip-450.mp4" type="video/mp4" media="(max-width: 450px)" />
          <source src="/videos/clip-600.mp4" type="video/mp4" media="(max-width: 600px) and (min-width: 451px)" />
          <source src="/videos/clip-1200.mp4" type="video/mp4" media="(min-width: 601px) and (max-width: 1023px)" />
          <source src="/videos/clip.mp4" type="video/mp4" media="(min-width: 1024px)" />
          Your browser does not support the video tag.
        </video>
      ),
    },
    {
      id: 3,
      title: "Competitor Analysis",
      subtitle: "Traffic Generation Strategy",
      description:
        "Reverse-engineered competitor content and identified high-traffic keywords to build a content strategy that dominates local search results.",
      details: [
        "Analyzed top 5 competitors in the Bellevue area",
        "Used advanced SEO tools to identify high-traffic keywords",
        "Reverse-engineered successful competitor content strategies",
        "Built site copy around proven keyword opportunities",
        "Implemented technical SEO best practices",
      ],
      icon: "/assets/search-black.webp",
      feature: <Image src="/assets/competitor-analysis.png" alt="Competitor Analysis" fill className="object-contain" />,
    },
    {
      id: 4,
      title: "Content & Blog",
      subtitle: "Authority Building Through Education",
      description:
        "Created comprehensive blog content focusing on Washington State tint laws - the #1 traffic driver - with legal citations and expert insights.",
      details: [
        "Researched and wrote detailed tint law articles",
        "Answered every possible question about WA state regulations",
        "Used high-quality citations from legal websites",
        "Created evergreen content that drives consistent traffic",
        "Established the business as the local authority on tinting",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <Image src="/assets/washington-vehicle-tint-law-illustration.webp" alt="Tint Law Article" fill className="object-contain" />,
    },
    {
      id: 5,
      title: "Interactive Tools",
      subtitle: "Window Tint Simulator",
      description: "Developed a custom window tint simulator allowing users to visualize different tint percentages in real-time - a unique engagement tool.",
      details: [
        "Built custom slider-based tint percentage simulator",
        "Real-time visual feedback for different tint levels",
        "Interactive tool increases user engagement and time on site",
        "Helps customers make informed decisions before visiting",
        "Unique differentiator from competitors",
      ],
      icon: "/assets/tool-black.webp",
      feature: <TintSimulator className="w-full h-full" />,
    },
  ],
  review: reviewPlaceholder,
}

export const automedicsKirkland: ProjectData = {
  hero: {
    title: "Turning AutoMedics Kirkland's 20-Year Reputation into Booked Bays",
    client: "AutoMedics Kirkland",
    year: "2025",
    description:
      "Serbyte replaced AutoMedics' dated brochure site with a conversion-focused, SEO-engineered platform that now channels local search traffic into booked service slots while showcasing 1,000-plus ★★★★★ reviews.",
    categories: ["Brand Refresh", "Web Design", "Next.js 15 Development", "Local SEO", "Copywriting", "Google Business Profile Optimization"],
    link: "https://www.automedicskirkland.com",
  },
  beforeAfter: {
    heroBefore: heroBeforeAutomedics,
    heroBeforeMobile: heroBeforeMobileAutomedics,
    iframe: "https://www.automedicskirkland.com",
  },
  results: [],

  // metrics: [
  //   { label: "Years in Service", value: "20+", note: "established 2003" },
  //   { label: "Happy Clients", value: "10 k+", note: "cumulative serviced vehicles" },
  //   { label: "Customer Satisfaction", value: "99.9%", note: "avg. rating across Google/Yelp/Carfax" },
  // ],
  phases: [
    {
      id: 1,
      title: "Discovery",
      subtitle: "Market & competitor audit to surface conversion gaps",
      description: "Stakeholder interviews with owners Jeff & Keith",
      details: ["Google Business Profile deep-dive & citation audit", "Baseline analytics & funnel mapping"],
      icon: "/assets/design-black.webp",
      feature: <Image src="/assets/discovery.png" alt="Discovery" fill className="object-contain" />,
    },
    {
      id: 2,
      title: "Brand & Copy Refresh",
      subtitle: "Modernized the visual identity and voice to convey trust & expertise",
      description: "Updated logo lock-up & color palette",
      details: ["Trust-badge copy highlighting ASE certification & 2-yr warranty", "Tone-of-voice guidelines for friendly authority"],
      icon: "/assets/assets-black.webp",
      feature: <Image src="/assets/brand.png" alt="Brand & Copy Refresh" fill className="object-contain" />,
    },
    {
      id: 3,
      title: "Design & Build",
      subtitle: "High-converting UI built on Next.js 15 + motion/react",
      description: "Figma wireframes & Tailwind component library",
      details: ["Schema-ready markup for every service type", "Animations that draw attention to CTAs without hurting LCP (< 1 s)"],
      icon: "/assets/design-black.webp",
      feature: <Image src="/assets/design.png" alt="Design & Build" fill className="object-contain" />,
    },
    {
      id: 4,
      title: "SEO & Launch",
      subtitle: "Captured 'auto repair kirkland' & allied keywords within 60 days",
      description: "On-page optimization for 35 high-intent queries",
      details: ["GBP sync, review aggregation widgets, FAQ rich snippets", "Performance hardening and live tracking dashboards"],
      icon: "/assets/notepad-black.webp",
      feature: <Image src="/assets/seo.png" alt="SEO & Launch" fill className="object-contain" />,
    },
    {
      id: 5,
      title: "Upkeep & Maintenance",
      subtitle: "Regular updates and optimizations to keep the site performing at its best",
      description: "Regular updates and optimizations to keep the site performing at its best",
      details: [
        "Regular content updates to keep the site fresh",
        "Performance monitoring and optimization",
        "Technical SEO improvements",
        "User feedback and engagement tracking",
        "Regular performance monitoring and optimization",
      ],
      icon: "/assets/tool-black.webp",
      feature: <TintSimulator className="w-full h-full" />,
    },
  ],
  review: reviewPlaceholder,
}
