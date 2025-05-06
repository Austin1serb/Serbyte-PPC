import type { LocalBusiness, WithContext } from "schema-dts"
import { SITE_CONFIG, SITE_NAP } from "./siteConfig"

export const localBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": SITE_NAP.googleBusinessType,
  image: SITE_NAP.images,
  name: SITE_NAP.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_NAP.address,
    addressLocality: SITE_NAP.city,
    addressRegion: SITE_NAP.state,
    postalCode: SITE_NAP.zipCode,
    addressCountry: "US",
  },

  // review: {
  //   "@type": "Review",
  //   reviewRating: { "@type": "Rating", ratingValue: 4.9, bestRating: 5 },
  //   author: { "@type": "Person", name: "Garrett Harris" },
  // },
  // geo: { "@type": "GeoCoordinates", latitude: 47.709356, longitude: -122.177239 },\

  url: SITE_CONFIG.url,
  telephone: SITE_NAP.phone,
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "08:00", closes: "14:00" },
  ],
  sameAs: Object.values(SITE_NAP.profiles),
}
