import type { LocalBusiness, WithContext } from "schema-dts"
import { SITE_CONFIG, SITE_NAP } from "./siteConfig"

export const localBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": SITE_NAP.googleBusinessType,
  name: SITE_NAP.name,
  image: SITE_NAP.images,
  url: SITE_CONFIG.url,
  telephone: SITE_NAP.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_NAP.street,
    addressLocality: SITE_NAP.city,
    addressRegion: SITE_NAP.state,
    postalCode: SITE_NAP.zipCode,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.717,
    longitude: -122.205,
  },

  review: {
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    author: { "@type": "Person", name: "Garrett Harris" },
  },

  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE_NAP.phone,
      contactType: "customer service",
    },
  ],
  sameAs: Object.values(SITE_NAP.profiles),
}
