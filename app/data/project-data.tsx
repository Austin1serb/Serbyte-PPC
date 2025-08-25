import { StaticImageData } from "next/image"
import { TintSimulator } from "../components/BespokeTint/TintSimulator"
import { Phase } from "../components/ProjectSection/ApproachSection"
import heroBefore from "@/public/assets/bespoke-hero-before.png"
import heroBeforeMobile from "@/public/assets/bespoke-hero-mobile.png"
import heroBeforeAutomedics from "@/public/assets/automedics-before.png"
import heroBeforeMobileAutomedics from "@/public/assets/automedics-mobile.png"
import { AnalyticCardProps } from "../components/ProjectSection/ResultsSection"
import { TrafficBarChart } from "../components/ProjectSection/TrafficBarChart"
import { RadialProgressRing } from "../components/ProjectSection/RadialProgressRing"
import { LineChart } from "../components/ProjectSection/LineChart"
import { REVIEW_MAP, type ReviewProps } from "./review-data"
import heroBeforeIao from "@/public/assets/iron-and-oak-before-website-design.jpg"
import heroBeforeMobileIao from "@/public/assets/iron-and-oak-before-website-design-mobile.jpg"
import { ApproachTabsImage } from "../components/ProjectSection/ApproachTabsImage"

//   interface ProjectData {
//   hero: {
//     title: string
//     client: string
//     year: string
//     description: string | React.ReactNode
//     categories: string[]
//     link: string
//   }
//   beforeAfter: { heroBefore: StaticImageData; heroBeforeMobile: StaticImageData; iframe?: string; heroAfter?: StaticImageData }
//   results: {
//     title: string
//     description: string
//     percentageIncrease: number
//     chart: React.ReactNode
//     dataSource: string[]
//     phases: { id: number; title: string; subtitle: string; description: string; details: string[]; icon: string; feature: React.ReactNode }[]
//     review: {
//       quote: React.ReactNode
//       name: string
//       title: string
//       img: StaticImageData
//     }
//   }
// }
export interface ProjectHeroProps {
  title: string | React.ReactNode
  client: string
  year: string
  description: string | React.ReactNode
  categories: string[]
  link: string
}

export type ProjectData = {
  hero: ProjectHeroProps
  beforeAfter: {
    heroBefore: StaticImageData
    heroBeforeMobile: StaticImageData
    iframe?: string
    heroAfter?: StaticImageData
    beforeAltText: string
    beforeMobileAltText: string
    afterAltText: string
  }
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
    beforeAltText: "Bespoke Tint & PPF Before",
    beforeMobileAltText: "Bespoke Tint & PPF Before Mobile",
    heroBeforeMobile: heroBeforeMobile,
    iframe: "/bespoke-hero.html",
    afterAltText: "Bespoke Tint & PPF After Website Design",
  },
  results: [
    {
      title: "Traffic Growth",
      description: "Increase post-launch from all channels",
      percentageIncrease: 966,
      chart: <TrafficBarChart startValue={150} endValue={1450} />,
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
        "Incorporated angular elements instead of traditional straight lines",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/brand-images.jpg" alt="Competitor Analysis" />,
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
      icon: "/assets/assets-black-camera.webp",
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
      feature: <ApproachTabsImage src="/assets/competitor-analysis.png" alt="Competitor Analysis" />,
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
      feature: <ApproachTabsImage src="/assets/washington-vehicle-tint-law-illustration.webp" alt="Tint Law Article" />,
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
        "Unique differentiator from competitors + SEO benefit",
      ],
      icon: "/assets/tool-black.webp",
      feature: <TintSimulator className="h-full w-full" />,
    },
  ],
  review: REVIEW_MAP.bespoke,
}

export const automedicsKirkland: ProjectData = {
  hero: {
    title: "Transforming Automedics Kirkland's Online Presence",
    client: "Automedics Kirkland",
    year: "2025",
    description:
      "Serbyte replaced AutoMedics' dated brochure site with a conversion-focused, SEO-engineered platform that now channels local search traffic into booked service slots while showcasing 1,000-plus ★★★★★ reviews.",
    categories: ["Branding", "Web Design", "Local SEO", "Copywriting"],
    link: "https://www.automedicskirkland.com",
  },
  beforeAfter: {
    heroBefore: heroBeforeAutomedics,
    beforeAltText: "Automedics Kirkland Before",
    beforeMobileAltText: "Automedics Kirkland Before Mobile",
    heroBeforeMobile: heroBeforeMobileAutomedics,
    iframe: "https://www.automedicskirkland.com",
    afterAltText: "Automedics Kirkland After Website Design",
  },
  results: [
    {
      title: "Traffic Growth",
      description: "Increase post-launch from all channels",
      percentageIncrease: 960,
      chart: <TrafficBarChart startValue={25} endValue={240} />,
      dataSource: "Based on 30 day traffic average",
    },
    {
      title: "Conversion Rate",
      description: "Online visitor conversion improvement",
      percentageIncrease: 85,
      chart: <RadialProgressRing percentage={85} />,
      dataSource: "Measured over a 60 day period",
    },
    {
      title: "Revenue Growth",
      description: "Increase post-launch",
      percentageIncrease: 15,
      chart: <LineChart />,
      dataSource: "Measured over a 90 day period",
    },
  ],

  phases: [
    {
      id: 1,
      title: "Brand Creation",
      subtitle: "From Zero to Hero",
      description: "Started from scratch to re-brand AutoMedics Kirkland, establishing them as the trusted automotive expert in their market.",
      details: [
        "Designed custom logo reflecting mechanical precision",
        "Selected color palette balancing trust and energy",
        "Created comprehensive brand guidelines document",
        "Developed consistent visual language across all touchpoints",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/automedics-brand-guide-example.webp" alt="AutoMedics Brand Identity" />,
    },
    {
      id: 2,
      title: "Performance",
      subtitle: "Speed That Converts",
      description:
        "Leveraged Next.js to create an incredibly fast website that loads instantly, keeping potential customers engaged instead of bouncing to competitors.",
      details: [
        "Server-side rendering for instant page loads",
        "Automatic code splitting for optimal performance",
        "Progressive web app features for mobile users",
      ],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/performance-metrics-automedics-web-development.webp" alt="Performance Metrics" />,
    },
    {
      id: 3,
      title: "Visuals",
      subtitle: "Trust Through Imagery",
      description:
        "Curated and optimized visuals that tell AutoMedics' story of expertise and reliability, turning skeptical visitors into confident customers.",
      details: [
        "Sourced authentic shop and service imagery",
        "Implemented smart lazy loading for faster browsing",
        "Optimized every asset for web without quality loss",
      ],
      icon: "/assets/assets-black-camera.webp",
      feature: <ApproachTabsImage src="/assets/trust-badges-automedics-web-design.webp" alt="AutoMedics Visual Assets" />,
    },
    {
      id: 4,
      title: "Social Proof",
      subtitle: "Design That Drives Business",
      description: "Engineered elements to showcase AutoMedics' 1,000-plus 5 star reviews.",
      details: [
        "Displayed 1,000+ reviews on the homepage",
        "Showcased 100+ Google reviews on the services page",
        "Added a Google Business Profile badge to the homepage",
        "Added a Google Business Profile badge to the services page",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/review-showcase-automedics-website-design.webp" alt="Review Showcase" />,
    },
  ],
  review: REVIEW_MAP.automedics,
}

export const iao: ProjectData = {
  hero: {
    title: (
      <>
        Telling the Story <br /> of Iron & Oak
      </>
    ),
    client: "Iron & Oak Seattle",
    year: "2024",
    description:
      "We dug deep into the story of Iron & Oak Seattle, a Seattle-based private security company that was born in the craziness that was Covid-19. We created a brand new website that tells the story of the company and its history and scrapped the internet for media coverage articles and mentions, the goal was to increase online applicants, and it worked.",
    categories: ["Branding", "Web Design", "Web Development", "Storytelling"],
    link: "https://iao-seattle.vercel.app/?src=serbyte",
  },
  beforeAfter: {
    heroBefore: heroBeforeIao,
    heroBeforeMobile: heroBeforeMobileIao,
    iframe: "https://iao-seattle.vercel.app/?src=serbyte",
    beforeAltText: "Iron & Oak Seattle Before",
    beforeMobileAltText: "Iron & Oak Seattle Before Mobile",
    afterAltText: "Iron & Oak Seattle After Website Design",
  },
  results: [
    {
      title: "Traffic Increase",
      description: "Increase in traffic from all channels",
      percentageIncrease: 4100,
      chart: <TrafficBarChart startValue={10} endValue={410} />,
      dataSource: "Based on 30 day traffic average",
    },
    {
      title: "Online Applicants",
      description: "Increase in online job applicants",
      percentageIncrease: 290,
      chart: <RadialProgressRing percentage={290} />,
      dataSource: "Measured over a 60 day period",
    },
    {
      title: "Hires",
      description: "Increase in new hires",
      percentageIncrease: 65,
      chart: <LineChart />,
      dataSource: "Measured over a 30 day period",
    },
  ],

  phases: [
    {
      id: 1,
      title: "Brand Identity",
      subtitle: "Creating a brand that tells the story of Iron & Oak",
      description: "Started from scratch to re-brand Iron & Oak Seattle, establishing them as the trusted private security company in their market.",
      details: [
        "Designed custom logo reflecting the brand name and the company's history",
        "Created a brand story that tells the story of Iron & Oak",
        "Created a brand guidelines document",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-brand-guide-web-design.png" alt="Iron & Oak Brand Identity" />,
    },
    {
      id: 2,
      title: "Live Incident Data",
      subtitle: "Showing the world what Iron & Oak is all about",
      description: "We created a live incident data dashboard that displays incidents in real-time, connected to a live incident data API.",
      details: ["Airtable API integration for incident data", "Displays incidents in real-time"],
      icon: "/assets/tool-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-website-tool.png" alt="Iron & Oak Website Tool" className="bg-slate-800 px-2.5" />,
    },
    {
      id: 3,
      title: "Press Hub",
      subtitle: "Verified press & community coverage.",
      description: "Curated, verified media mentions centralizing third-party authority to boost trust & conversion.",
      details: [
        "Aggregated all credible third-party mentions",
        "Verified sources; removed low-value noise",
        "Structured data boosts authority signals",
        "Trust hub: social proof near conversion.",
      ],
      icon: "/assets/assets-black-camera.webp",
      feature: (
        <ApproachTabsImage src="/assets/iron-and-oak-media-coverage-website-research.png" alt="Iron & Oak Media Coverage" className="bg-slate-200 px-2.5" />
      ),
    },
    {
      id: 4,
      title: "Talent SEO",
      subtitle: "A topical authority engine for security job seekers",
      description: "Designed a content cluster targeting Washington security guard career keywords and established Iron & Oak as the regional authority.",
      details: [
        "37 intent-mapped articles building authority",
        "Targeted WA security job & license keywords",
        "Internal links (pillar/support) speed indexation",
      ],
      icon: "/assets/notepad-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-content-cluster-seo.png" alt="Iron & Oak Content Cluster SEO" />,
    },
    {
      id: 5,
      title: "Applicant Portal",
      subtitle: "Multi-step validated, resume auto-fill, and applicant tracking",
      description: "Built a multi-step, validated application with autosave + resume, cutting friction and preserving in-progress candidates.",
      details: [
        "Stepper UI with clear stage + progress",
        "Client + server validation prevents bad submits",
        "Autosave each step (no data loss)",
        "Resume later via stored progress state",
      ],
      icon: "/assets/search-black.webp",
      feature: <ApproachTabsImage src="/assets/iron-and-oak-job-application-portal-web-design.png" alt="Iron & Oak Applicant Portal" />,
    },
  ],
  review: REVIEW_MAP.iao,
}

export const reactZeroUIProject: Omit<ProjectData, "heroAfter"> = {
  hero: {
    title: "React Zero UI - The Fastest UI State Management Library",
    client: "Open Source Project",
    year: "2024",
    description:
      "A revolutionary React library that achieves 10x faster UI updates by eliminating re-renders entirely. Pre-renders all UI states at build time and uses simple data-* attribute flips for instantaneous Css driven UI updates.",
    categories: ["React", "TypeScript", "Performance", "Open Source", "State Management"],
    link: "https://github.com/react-zero-ui/core",
  },
  beforeAfter: {
    heroBefore,
    heroBeforeMobile,

    // Optional live demo (leave out if you don't want an embed)
    iframe: "https://zero-ui.dev",
    beforeAltText: "Traditional React state/Context vs React Zero UI",
    beforeMobileAltText: "Traditional React state/Context vs React Zero UI",
    afterAltText: "React Zero UI data-* flips; instant theme/toggle updates with no React re-render cost.",
  },

  results: [
    {
      title: "Faster UI Updates",
      description: "Compared to traditional React state management",
      percentageIncrease: 10,
      chart: <TrafficBarChart startValue={10} endValue={100} />,
      dataSource: "Based on 30 day traffic average",
    },
    {
      title: "GitHub Stars",
      description: "Growing developer community adoption",
      percentageIncrease: 271,
      chart: <RadialProgressRing percentage={271} />,
      dataSource: "Measured over a 60 day period",
    },
    {
      title: "Runtime Overhead",
      description: "Tiny footprint, zero runtime for CSS states",
      percentageIncrease: -350,
      chart: <LineChart />,
      dataSource: "Measured over a 90 day period",
    },
    {
      title: "Pure CSS-driven UI state changes",
      description: "Pure CSS-driven UI state changes",
      percentageIncrease: 0,
      chart: <LineChart />,
      dataSource: "Measured over a 90 day period",
    },
    {
      title: "Build-Time Optimization",
      description: "All UI states pre-rendered at build",
      percentageIncrease: 100,
      chart: <LineChart />,
      dataSource: "Measured over a 90 day period",
    },
    {
      title: "Production Apps",
      description: "Developers using in real-world applications",
      percentageIncrease: 15,
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
        "Incorporated angular elements instead of traditional straight lines",
      ],
      icon: "/assets/design-black.webp",
      feature: <ApproachTabsImage src="/assets/brand-images.jpg" alt="Competitor Analysis" />,
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
      icon: "/assets/assets-black-camera.webp",
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
      feature: <ApproachTabsImage src="/assets/competitor-analysis.png" alt="Competitor Analysis" />,
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
      feature: <ApproachTabsImage src="/assets/washington-vehicle-tint-law-illustration.webp" alt="Tint Law Article" />,
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
        "Unique differentiator from competitors + SEO benefit",
      ],
      icon: "/assets/tool-black.webp",
      feature: <TintSimulator className="h-full w-full" />,
    },
  ],
  review: REVIEW_MAP.iao,
}
