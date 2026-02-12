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
  {
    src: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/ef26c19c-d1bf-466f-ba4f-14fecc7bb919/Dylan-Gandy-IMG_4769.jpg",
    alt: "Pontoon boat cruising on emerald Gulf waters",
  },
  {
    src: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/6ce9a739-4f51-498f-8576-33167f796ad5/Dylan-Gandy-IMG_5148.jpg",
    alt: "Friends relaxing together on a pontoon boat",
  },
  {
    src: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/be44dd21-edd6-4285-98be-f17a287e8ff4/Dylan-Gandy-IMG_4771.jpg",
    alt: "Group enjoying a sunny day on the water",
  },
  {
    src: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/242a0f16-de75-4417-a4d5-a84b8b18bd91/Dylan-Gandy-IMG_4238.jpg",
    alt: "Boat anchored near a sandbar with guests swimming",
  },
  {
    src: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/36424678-e70f-4c5f-a1ea-8fb377ce1c82/Dylan-Gandy-IMG_4701.jpg",
    alt: "Premium leather seating and interior boat details",
  },
  {
    src: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/32c22b77-e878-47a6-8157-11ad5898f89b/Dylan-Gandy-IMG_5147.jpg",
    alt: "Guests enjoying music and drinks on deck",
  },
  {
    src: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/cb91cb36-bfa1-453a-b056-c12e3953fb3f/Dylan-Gandy-IMG_7665.jpg",
    alt: "Pontoon boat gliding along the Orange Beach coastline",
  },
  {
    src: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/f0819bfd-c0a9-4027-aa3e-80040a2dca1f/Dylan-Gandy-IMG_4568.jpg",
    alt: "Golden hour cruise with warm sunset light",
  },
  {
    src: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/2cf206db-5b02-4140-89ff-0d48536a17a0/Dylan-Gandy-IMG_7818.jpg",
    alt: "Sunset reflections on calm bay waters",
  },
  {
    src: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/34eaeb3d-dfa3-4295-abb1-d86cd1d4abd4/Dylan-Gandy-IMG_2236.jpg",
    alt: "Group having fun near shallow crystal-clear water",
  },
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