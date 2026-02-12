// ═══════════════════════════════════════════
// OB Boat Rentals — All Site Content
// Edit copy, media paths, and links here.
// ═══════════════════════════════════════════

export const SITE = {
  name: "OB Boat Rentals",
  tagline: "Premium Boat Rentals · Ocean Beach, San Diego",
  shortTagline: "Where the ocean meets adventure.",
  description:
    "Experience San Diego's coastline aboard our premium, fully equipped boats. Half-day, full-day, and sunset cruises available.",
  url: "https://obboatrentals.com",
  ogImage: "/images/og-image.jpg",
} as const;

export const NAV_LINKS = [
  { label: "Rentals", href: "/rentals" },
  { label: "Sunset Cruise", href: "/sunset-cruise" },
  { label: "Our Boats", href: "/our-boats" },
  { label: "Know Before You Go", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const HERO = {
  headline: "Your Day on\nthe Water Starts Here",
  subhead:
    "Premium boat rentals off the San Diego coast — fully equipped, captain-ready, and unforgettable.",
  // Using a still image as hero background (replace with video in production)
  bgImage:
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80",
  ctaPrimary: { label: "Explore Rentals", href: "#experiences" },
  ctaSecondary: { label: "Book Now" },
} as const;

export type Experience = {
  id: string;
  title: string;
  duration: string;
  tagline: string;
  image: string;
  minAge: string;
  maxPax: number;
  badges: string[];
  href: string;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "half-day",
    title: "Half Day",
    duration: "4 Hours",
    tagline: "The perfect afternoon on the water.",
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
    minAge: "25+",
    maxPax: 8,
    badges: ["Restroom", "Bluetooth", "Seats 8"],
    href: "/rentals/half-day",
  },
  {
    id: "full-day",
    title: "Full Day",
    duration: "8 Hours",
    tagline: "Sun up to sun down — the full experience.",
    image:
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80",
    minAge: "21+",
    maxPax: 8,
    badges: ["Restroom", "Bluetooth", "Seats 8"],
    href: "/rentals/full-day",
  },
  {
    id: "sunset-cruise",
    title: "Sunset Cruise",
    duration: "2.5 Hours",
    tagline: "Golden hour, open water, pure magic.",
    image:
      "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&q=80",
    minAge: "21+",
    maxPax: 8,
    badges: ["Restroom", "Bluetooth", "Seats 8"],
    href: "/sunset-cruise",
  },
];

export const WHY_US = [
  { icon: "🚻", label: "Restroom Onboard" },
  { icon: "⚓", label: "Stable Catamaran Feel" },
  { icon: "🛋️", label: "Premium Leather Seating" },
  { icon: "🔊", label: "6-Speaker Bluetooth Stereo" },
  { icon: "🦺", label: "Coast Guard Safety-Ready" },
  { icon: "🍽️", label: "Easy Dock Dining Access" },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=960&q=80",
    alt: "Boat on open water at golden hour",
  },
  {
    src: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=960&q=80",
    alt: "Guests enjoying the deck",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=960&q=80",
    alt: "Aerial view of the coastline",
  },
  {
    src: "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=960&q=80",
    alt: "Sunset from the stern",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=960&q=80",
    alt: "Premium boat seating detail",
  },
  {
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=960&q=80",
    alt: "Cruising along the San Diego skyline",
  },
] as const;

export type Review = {
  name: string;
  text: string;
  rating: number;
};

export const REVIEWS: Review[] = [
  {
    name: "Sarah M.",
    text: "Absolutely incredible experience. The boat was spotless and the sound system made it a party. Will be back!",
    rating: 5,
  },
  {
    name: "Jake & Tina R.",
    text: "Best day of our San Diego trip. Having a real restroom onboard is a game-changer.",
    rating: 5,
  },
  {
    name: "Carlos D.",
    text: "Premium is the right word. This felt like a private yacht experience at a fraction of the price.",
    rating: 5,
  },
];

export const LOCATION = {
  name: "Ocean Beach, San Diego",
  tagline: "Departing from America's Finest City",
  description:
    "We launch from the heart of Ocean Beach — minutes from downtown San Diego, steps from great restaurants and bars.",
  image:
    "https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=1200&q=80",
} as const;

export const CONTACT = {
  phone: "(619) 555-0123",
  email: "hello@obboatrentals.com",
  address: "Ocean Beach, San Diego, CA",
} as const;

export const SOCIAL = [
  { platform: "Instagram", href: "#", icon: "instagram" as const },
  { platform: "Facebook", href: "#", icon: "facebook" as const },
  { platform: "TikTok", href: "#", icon: "tiktok" as const },
];