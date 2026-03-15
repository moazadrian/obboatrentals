// ═══════════════════════════════════════════
// OB Boat Rentals — SEO Content
// ═══════════════════════════════════════════

import type { Metadata } from "next";
import { SITE } from "./site-config";

const BASE_URL = SITE.url;
const OG_IMAGE = SITE.ogImage;

function meta(
  title: string,
  description: string,
  path: string,
  extra?: Partial<Metadata>
): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [OG_IMAGE],
    },
    ...extra,
  };
}

export const SEO = {
  home: meta(
    "Premium Catamaran Rentals in Orange Beach, AL",
    "Experience the Alabama Gulf Coast aboard our pristine Leisure Cat catamarans — the area's only boats with bathrooms. Half-day, full-day, and sunset cruises in Orange Beach.",
    "/"
  ),

  rentals: meta(
    "Boat Rentals — Half Day & Full Day",
    "Choose your perfect day on the water. Half-day (4hr) and full-day (8hr) Leisure Cat catamaran rentals in Orange Beach, Alabama. The area's only boats with bathrooms.",
    "/rentals"
  ),

  halfDay: meta(
    "Half Day Boat Rental — 4 Hours",
    "4-hour Leisure Cat catamaran rental in Orange Beach, AL. Up to 8 passengers, restroom onboard, Bluetooth stereo. Saltwater experience required.",
    "/rentals/half-day"
  ),

  fullDay: meta(
    "Full Day Boat Rental — 8 Hours",
    "8-hour full day Leisure Cat catamaran rental in Orange Beach, AL. Explore sandbars, islands, and the Gulf Coast. Up to 8 passengers.",
    "/rentals/full-day"
  ),

  boats: meta(
    "Our Boats — Leisure Cat 26' Catamarans",
    "Leisure Cat 26' World Class Catamarans with full restroom, leather seating, 6-speaker Bluetooth stereo, and all Coast Guard safety equipment. The area's only boats with bathrooms.",
    "/boats"
  ),

  knowBeforeYouGo: meta(
    "Know Before You Go",
    "Requirements, what to bring, FAQs, and everything you need to know before your OB Boat Rentals trip in Orange Beach, Alabama.",
    "/know-before-you-go"
  ),

  contact: meta(
    "Contact Us",
    "Get in touch with OB Boat Rentals. Located at The Wharf in Orange Beach, AL. Call 251-979-3644 or email us to plan your day on the water.",
    "/contact"
  ),

  sunsetCruise: meta(
    "Private Dolphin Sunset Cruise — Starting at $250",
    "Private dolphin sunset cruise in Orange Beach, AL. 1.5 hours, up to 6 passengers, guaranteed up-close dolphin encounters. Starting at $250.",
    "/sunset-cruise"
  ),
} as const;

/** JSON-LD LocalBusiness schema */
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: SITE.description,
  url: BASE_URL,
  telephone: "+1-251-979-3644",
  email: "orangebeachboatrentals@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4673 Wharf Pkwy W",
    addressLocality: "Orange Beach",
    addressRegion: "AL",
    postalCode: "36561",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.2785,
    longitude: -87.6273,
  },
  image: `${BASE_URL}${OG_IMAGE}`,
  sameAs: ["https://www.facebook.com/OrangeBeachBoatRentals/"],
  priceRange: "$$",
  openingHours: "Mo-Su 07:00-19:00",
  areaServed: {
    "@type": "City",
    name: "Orange Beach",
    containedInPlace: {
      "@type": "State",
      name: "Alabama",
    },
  },
} as const;

/** Sitemap routes */
export const SITEMAP_ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/rentals", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/rentals/half-day", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/rentals/full-day", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/boats", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/know-before-you-go", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/sunset-cruise", priority: 0.4, changeFrequency: "monthly" as const },
] as const;