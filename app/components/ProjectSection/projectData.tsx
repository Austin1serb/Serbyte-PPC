import { TintSimulator } from "../BespokeTint/TintSimulator"
import { Phase } from "./ApproachSection"
import { ProjectHeroProps } from "./ProjectHero"

export const bespoke: { hero: ProjectHeroProps } = {
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
}
export const phases: Phase[] = [
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
    feature: "",
  },
  {
    id: 2,
    title: "High-Fidelity Assets",
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
    feature: "",
  },
  {
    id: 3,
    title: "SEO & Competitor Analysis",
    subtitle: "Traffic Generation Strategy",
    description: "Reverse-engineered competitor content and identified high-traffic keywords to build a content strategy that dominates local search results.",
    details: [
      "Analyzed top 5 competitors in the Bellevue area",
      "Used advanced SEO tools to identify high-traffic keywords",
      "Reverse-engineered successful competitor content strategies",
      "Built site copy around proven keyword opportunities",
      "Implemented technical SEO best practices",
    ],
    icon: "/assets/search-black.webp",
    feature: "",
  },
  {
    id: 4,
    title: "Content Marketing & Blog",
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
    feature: "",
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
]
