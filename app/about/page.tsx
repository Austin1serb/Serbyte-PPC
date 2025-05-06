import type { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "About",
  description: "About",
  alternates: {
    canonical: SITE_SLUGS.about,
  },
}

const Page: React.FC = () => {
  return <div>About</div>
}

export default Page
