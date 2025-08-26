export const SITE_CONFIG = {
  title: "Serbyte Development",
  description: "A fully optimized Next.js 15 starter template.",
  url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
  siteName: "My Next.js Starter",
  keywords: ["Next.js", "Tailwind CSS", "SEO", "TypeScript"],
  ogImage: "/og-image.png",
  logo: "/logo.png",
} as const

export const SITE_NAP = {
  name: "Serbyte Development",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Austin Serb",
  contactTitle: "CEO",
  email: "owner@serbyte.net",
  phone: "+12066596727",
  formattedPhone: "+1 (206) 659-6727",
  addressLink: "https://www.google.com/maps/search/?api=1&query=serbyte+development",
  street: "12601 NE 124th ST",
  city: "Kirkland",
  state: "WA",
  zipCode: "98034",
  openingHours: [{ days: "Mon - Sat", hours: "8am - 6pm" }] as const,
  googleReviewLink: "https://g.page/r/CXHVs1ony_76EAI/review",
  profiles: {
    facebook: "https://www.facebook.com/serbytedevelopment/",
    linkedIn: "https://www.linkedin.com/company/serbyte-development/",
    yelp: "https://www.yelp.com/biz/serbyte-development-kirkland-3",
    pinterest: "https://www.pinterest.com/serbytedevelopment",
    gbp: "https://g.co/kgs/ay2r1wp",
  } as const,
  logo: "/serbyte-logo.png",
  favicon: "/favicon.ico",
  images: ["https://www.serbyte.net/serbyte-logo.png", "https://www.serbyte.net/assets/bg-home-poster-optimized.webp"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/contact",
  projectsEntitled: "/projects/entitled",
  projectsIao: "/projects/iron-and-oak",
  projectsAutomedics: "/projects/automedics",
  projectsBespoke: "/projects/bespoke",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
