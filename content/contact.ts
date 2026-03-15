// ═══════════════════════════════════════════
// OB Boat Rentals — Contact Content
// ═══════════════════════════════════════════

import { CONTACT, SOCIAL } from "./site-config";

export const CONTACT_HERO = {
  headline: "Get in Touch",
  subhead: "Questions? Ready to plan your day? We'd love to hear from you.",
} as const;

export const CONTACT_INFO = {
  ...CONTACT,
  facebook: SOCIAL[0].href,
  googleMapsEmbed:
    "https://www.google.com/maps?q=4673+Wharf+Pkwy+W,+Orange+Beach,+AL+36561&output=embed",
  googleMapsLink:
    "https://maps.app.goo.gl/ah1oYZj7amWhuMYD7",
} as const;

export const DOCK_INFO = {
  headline: "Parking & Directions",
  items: [
    {
      title: "Where to Park",
      description:
        "Free parking is available at The Wharf. Park in the main lot closest to the marina and walk toward the water. Look for our OB Boat Rentals signage.",
    },
    {
      title: "Getting There",
      description:
        "We're located at The Wharf in Orange Beach, right off Canal Road (Hwy 180). From Gulf Shores, head west on 180. From I-65, take the Foley Beach Express south.",
    },
    {
      title: "What to Bring",
      description:
        "Bring your valid ID, a cooler with drinks and snacks, towels, sunscreen, and a camera. We provide everything else — including the fun.",
    },
    {
      title: "Arrive Early",
      description:
        "We recommend arriving 15 minutes before your scheduled departure for check-in and a quick safety briefing. Late arrivals cannot extend rental time.",
    },
  ],
} as const;

export const QUICK_ACTIONS = [
  { label: "Call Us", href: CONTACT.phoneHref, icon: "phone" },
  { label: "Email Us", href: CONTACT.emailHref, icon: "email" },
  { label: "Get Directions", href: "https://maps.app.goo.gl/ah1oYZj7amWhuMYD7", icon: "map" },
  { label: "Facebook", href: SOCIAL[0].href, icon: "facebook" },
] as const;
