// ═══════════════════════════════════════════
// OB Boat Rentals — Centralized Site Content
// ALL copy, links, images, and data live here.
// ═══════════════════════════════════════════

export const SITE = {
  name: "OB Boat Rentals",
  tagline: "Premium Boat Rentals · Orange Beach, Alabama",
  shortTagline: "Where the Gulf meets adventure.",
  description:
    "Experience the Alabama Gulf Coast aboard our premium, fully equipped boats. Half-day, full-day, and sunset cruises available in Orange Beach.",
  url: "https://obboatrentals.com",
  ogImage: "/images/og-image.jpg",
} as const;

export const NAV_LINKS = [
  { label: "Rentals", href: "/rentals" },
  { label: "Sunset Cruise", href: "/sunset-cruise" },
  { label: "Our Boats", href: "/boats" },
  { label: "Know Before You Go", href: "/know-before-you-go" },
  { label: "Contact", href: "/contact" },
] as const;

export const HERO = {
  headline: "Your Day on\nthe Water Starts Here",
  subhead:
    "Premium boat rentals on the Alabama Gulf Coast — fully equipped, captain-ready, and unforgettable.",
  videoSrc: "https://obboatrentals.com/photos/ob-boat-rentals.webm",
  ctaPrimary: { label: "Explore Rentals", href: "#experiences" },
  ctaSecondary: { label: "Book Now" },
} as const;

export const BOOKING = {
  halfDay: {
    label: "Half Day Rental",
    subtitle: "4 hours on the water",
    url: "https://book.peek.com/s/5d06d0de-e669-4b84-bd8d-c2e2513743a2/EMprO",
  },
  fullDay: {
    label: "Full Day Rental",
    subtitle: "8 hours on the water",
    url: "https://book.peek.com/s/5d06d0de-e669-4b84-bd8d-c2e2513743a2/wq9vP",
  },
} as const;

export type Experience = {
  id: string;
  title: string;
  duration: string;
  hours: string;
  tagline: string;
  image: string;
  minAge: string;
  maxPax: number;
  stats: string[];
  href: string;
  bookingUrl: string | null;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "half-day",
    title: "Half Day",
    duration: "4 Hours",
    hours: "4h",
    tagline: "The perfect afternoon on the water.",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
    minAge: "25+",
    maxPax: 8,
    stats: ["4 Hours", "Seats 8", "Restroom", "Bluetooth"],
    href: "/rentals",
    bookingUrl: "https://book.peek.com/s/5d06d0de-e669-4b84-bd8d-c2e2513743a2/EMprO",
  },
  {
    id: "full-day",
    title: "Full Day",
    duration: "8 Hours",
    hours: "8h",
    tagline: "Sun up to sun down — the full experience.",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80",
    minAge: "21+",
    maxPax: 8,
    stats: ["8 Hours", "Seats 8", "Restroom", "Bluetooth"],
    href: "/rentals",
    bookingUrl: "https://book.peek.com/s/5d06d0de-e669-4b84-bd8d-c2e2513743a2/wq9vP",
  },
  {
    id: "sunset-cruise",
    title: "Sunset Cruise",
    duration: "2.5 Hours",
    hours: "2.5h",
    tagline: "Golden hour, open water, pure magic.",
    image: "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&q=80",
    minAge: "21+",
    maxPax: 8,
    stats: ["2.5 Hours", "Seats 8", "Restroom", "Bluetooth"],
    href: "/sunset-cruise",
    bookingUrl: null,
  },
];

export const WHY_US = [
  { id: "restroom", label: "Restroom Onboard" },
  { id: "stable", label: "Stable Catamaran Feel" },
  { id: "seating", label: "Premium Leather Seating" },
  { id: "stereo", label: "6-Speaker Bluetooth Stereo" },
  { id: "safety", label: "Coast Guard Safety-Ready" },
  { id: "dining", label: "Easy Dock Dining Access" },
] as const;

export const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=960&q=80", alt: "Boat on open water at golden hour" },
  { src: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=960&q=80", alt: "Guests enjoying the deck" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=960&q=80", alt: "Aerial view of the coastline" },
  { src: "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=960&q=80", alt: "Sunset over the Gulf" },
  { src: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=960&q=80", alt: "Premium boat detail" },
  { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=960&q=80", alt: "Gulf Coast skyline" },
] as const;

export type Review = { name: string; text: string; rating: number };

export const REVIEWS: Review[] = [
  { name: "Sarah M.", text: "Absolutely incredible experience. The boat was spotless and the sound system made it a party. Will be back!", rating: 5 },
  { name: "Jake & Tina R.", text: "Best day of our Orange Beach trip. Having a real restroom onboard is a game-changer.", rating: 5 },
  { name: "Carlos D.", text: "Premium is the right word. This felt like a private yacht experience at a fraction of the price.", rating: 5 },
];

export const LOCATION = {
  name: "Orange Beach, Alabama",
  address: "4673 Wharf Pkwy W, Orange Beach, AL 36561",
  tagline: "Departing from The Wharf",
  description: "We launch from The Wharf in Orange Beach — steps from world-class dining, shopping, and entertainment on the Alabama Gulf Coast.",
  image: "https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=1200&q=80",
} as const;

export const CONTACT = {
  phone: "251-979-3644",
  email: "orangebeachboatrentals@gmail.com",
  address: "4673 Wharf Pkwy W\nOrange Beach, AL 36561",
} as const;

export const SOCIAL = [
  { platform: "Facebook", href: "https://www.facebook.com/OrangeBeachBoatRentals/", icon: "facebook" as const },
] as const;

// Background images for Coming Soon stub pages
export const PAGE_BACKGROUNDS: Record<string, string> = {
  rentals: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80",
  boats: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1920&q=80",
  "know-before-you-go": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  contact: "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=1920&q=80",
  "sunset-cruise": "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=1920&q=80",
};