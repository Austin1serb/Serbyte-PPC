export const SITE_CONFIG = {
  title: "My Next.js Starter",
  description: "A fully optimized Next.js 15 starter template.",
  url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
  siteName: "My Next.js Starter",
  keywords: ["Next.js", "Tailwind CSS", "SEO", "TypeScript"],
  ogImage: "/og-image.png",
  logo: "/logo.png",
} as const

export const SITE_NAP = {
  name: "Your Company Name",
  googleBusinessType: "ProfessionalService" as const,
  contact: "John Does",
  contactTitle: "CEO",
  email: "example@gmail.com",
  phone: "+1123456789",
  formattedPhone: "+1 (123) 456-789",
  address: "123 Street",
  addressLink: "https://goo.gl/maps/",
  city: "City",
  state: "State",
  zipCode: "12345",
  openingHours: [
    { days: "Mon - Thurs", hours: "8am - 5pm" },
    { days: "Friday", hours: "8am - 2pm" },
    { days: "Sat - Sun", hours: "Closed" },
  ] as const,
  googleReviewLink: "https://g.page/yourbusiness/review",
  profiles: {
    facebook: "",
    twitter: "",
    instagram: "",
    linkedIn: "",
    youtube: "",
    yelp: "https://www.yelp.com/biz/your-business",
    bbb: "",
    gbp: "https://g.co/yourbusiness",
  } as const,
  logo: "/logo.png",
  favicon: "/favicon.ico",
  images: ["business-image.png"],
} as const

export const SITE_SLUGS = {
  home: "/",
  about: "/about",
  contact: "/contact",
  services: "/services",
  // gallery: "/gallery",
  terms: "/terms-of-service",
  privacy: "/privacy-policy",
  // quote: "/quote",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
