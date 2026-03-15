// ═══════════════════════════════════════════
// OB Boat Rentals — Rentals Content
// ═══════════════════════════════════════════

import { BOOKING } from "./site-config";

export type RentalProduct = {
  id: "half-day" | "full-day";
  slug: string;
  title: string;
  shortTitle: string;
  duration: string;
  hours: number;
  minAge: string;
  maxPax: number;
  tagline: string;
  description: string;
  bookingUrl: string;
  image: string;
  badge: string;
  whoItsFor: string[];
  perfectDay: { time: string; activity: string }[];
  itinerary: { step: number; title: string; description: string }[];
};

export const RENTAL_PRODUCTS: RentalProduct[] = [
  {
    id: "half-day",
    slug: "half-day",
    title: "Half Day Rental",
    shortTitle: "Half Day",
    duration: "4 Hours",
    hours: 4,
    minAge: "25+",
    maxPax: 8,
    tagline: "The perfect afternoon on the water.",
    description:
      "Four hours is all you need for an unforgettable day. Cruise the back bays, anchor at a sandbar, or explore the Orange Beach coastline — all aboard a fully equipped Leisure Cat catamaran.",
    bookingUrl: BOOKING.halfDay.url,
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80",
    badge: "Most Popular",
    whoItsFor: [
      "Families looking for a fun afternoon",
      "Friends visiting Orange Beach for the weekend",
      "Couples who want a unique date on the water",
      "Anyone with prior saltwater boating experience",
    ],
    perfectDay: [
      { time: "12:00 PM", activity: "Arrive at The Wharf, check in, and board your boat" },
      { time: "12:15 PM", activity: "Safety briefing and departure from the dock" },
      { time: "12:30 PM", activity: "Cruise through the back bays and explore the coastline" },
      { time: "1:30 PM", activity: "Anchor at a sandbar — swim, float, and hang out" },
      { time: "3:00 PM", activity: "Cruise back with music playing on the 6-speaker stereo" },
      { time: "4:00 PM", activity: "Return to The Wharf — grab dinner steps from the dock" },
    ],
    itinerary: [
      { step: 1, title: "Check In", description: "Meet at our dock at The Wharf. Quick orientation and safety briefing." },
      { step: 2, title: "Hit the Water", description: "Head out into the back bays or toward the Gulf. You're the captain." },
      { step: 3, title: "Find Your Spot", description: "Anchor at a sandbar, cruise the coastline, or island-hop." },
      { step: 4, title: "Return & Dock", description: "Bring her back to the dock. Dinner at The Wharf is steps away." },
    ],
  },
  {
    id: "full-day",
    slug: "full-day",
    title: "Full Day Rental",
    shortTitle: "Full Day",
    duration: "8 Hours",
    hours: 8,
    minAge: "21+",
    maxPax: 8,
    tagline: "Sun up to sun down — the full experience.",
    description:
      "Eight hours gives you the freedom to truly explore. Hit multiple sandbars, cruise to Robinson Island, fish, swim, and soak in every minute of the Alabama Gulf Coast.",
    bookingUrl: BOOKING.fullDay.url,
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&q=80",
    badge: "Best Value",
    whoItsFor: [
      "Groups wanting the ultimate full-day adventure",
      "Bachelor/bachelorette parties",
      "Experienced boaters who want to explore further",
      "Families celebrating a special occasion",
    ],
    perfectDay: [
      { time: "8:00 AM", activity: "Arrive at The Wharf, load up your cooler and gear" },
      { time: "8:15 AM", activity: "Safety briefing and departure" },
      { time: "9:00 AM", activity: "Cruise to Robinson Island or your first sandbar" },
      { time: "11:00 AM", activity: "Swim, float, and explore shallow sandbars" },
      { time: "1:00 PM", activity: "Lunch on the boat — bring your own or order ahead" },
      { time: "2:30 PM", activity: "Cruise the coastline, find new spots, fish if you want" },
      { time: "3:30 PM", activity: "Final sandbar stop — soak up the afternoon sun" },
      { time: "4:00 PM", activity: "Return to The Wharf with the sunset behind you" },
    ],
    itinerary: [
      { step: 1, title: "Check In", description: "Meet at our dock at The Wharf. Quick orientation and safety briefing." },
      { step: 2, title: "Morning Cruise", description: "Head out early — beat the crowds to the best sandbars and islands." },
      { step: 3, title: "Explore All Day", description: "Hit multiple spots. Robinson Island, sandbars, the Gulf coastline." },
      { step: 4, title: "Lunch on the Water", description: "Break for lunch on the boat. Bring a cooler or order ahead." },
      { step: 5, title: "Afternoon Adventure", description: "Fish, swim, cruise, or just float. The day is yours." },
      { step: 6, title: "Sunset Return", description: "Cruise back as the sun dips. Dinner at The Wharf awaits." },
    ],
  },
];

export const RENTAL_INCLUSIONS = [
  { label: "Coast Guard Safety Equipment", icon: "shield" },
  { label: "Life Jackets for All Passengers", icon: "shield" },
  { label: "Full Restroom Onboard", icon: "restroom" },
  { label: "Anchors, Fenders & Lines", icon: "anchor" },
  { label: "Premium Leather Seating", icon: "seating" },
  { label: "6-Speaker Bluetooth Stereo", icon: "stereo" },
  { label: "XM Radio / AUX Input", icon: "stereo" },
  { label: "Trash Can & Cleanup Supplies", icon: "stable" },
  { label: "Pet Friendly", icon: "pet" },
  { label: "Coolers Welcome", icon: "cooler" },
] as const;

export const RENTAL_BRING = [
  "Cooler with drinks and snacks",
  "Towels and sunscreen",
  "Camera or waterproof phone case",
  "Valid driver's license or government ID",
  "Positive attitude and a sense of adventure",
] as const;

export const RENTAL_REQUIREMENTS = {
  headline: "Important Requirements",
  subhead: "We want every trip to be safe and enjoyable. Please review before booking.",
  items: [
    {
      title: "Saltwater Experience Required",
      description:
        "All renters must have prior saltwater boating experience. This is not a guided tour — you are the captain. We do not rent to novice boaters.",
      icon: "anchor",
    },
    {
      title: "Age Requirements",
      description:
        "Half Day rentals: Captain must be 25 or older. Full Day rentals: Captain must be 21 or older. Valid government-issued ID required at check-in.",
      icon: "shield",
    },
    {
      title: "Passenger Limit",
      description:
        "Maximum 8 passengers per boat. This is a Coast Guard regulation and cannot be exceeded for any reason.",
      icon: "seating",
    },
    {
      title: "No Novice Boaters",
      description:
        "For everyone's safety, we require real saltwater experience. If you've only driven a boat on a lake, this rental may not be for you.",
      icon: "stable",
    },
  ],
} as const;

export const RENTAL_FAQS = [
  {
    question: "Do I need a boating license?",
    answer:
      "No license is required in Alabama. However, you must have prior saltwater boating experience. This is not a guided tour.",
  },
  {
    question: "What if the weather is bad?",
    answer:
      "Safety comes first. If conditions are unsafe, we'll work with you to reschedule. We monitor weather closely and will contact you in advance if there's a concern.",
  },
  {
    question: "Can I bring my own food and drinks?",
    answer:
      "Absolutely! Bring a cooler with whatever you'd like. We recommend packing drinks, snacks, and lunch for full-day rentals. No glass bottles, please.",
  },
  {
    question: "Is there a restroom on the boat?",
    answer:
      "Yes — every one of our boats has a full, private restroom onboard. It's one of the biggest things our guests appreciate.",
  },
  {
    question: "Where do we meet?",
    answer:
      "We're located at The Wharf in Orange Beach (4673 Wharf Pkwy W). Free parking is available. We'll send detailed directions after booking.",
  },
  {
    question: "Can I cancel or reschedule?",
    answer:
      "Yes. Please review our cancellation policy on the booking page. Weather-related cancellations are always accommodated.",
  },
  {
    question: "What happens if I'm late?",
    answer:
      "Your rental time starts at the scheduled departure. We recommend arriving 15 minutes early. Late arrivals cannot extend the rental period.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "Small, well-behaved dogs are welcome on a case-by-case basis. Please let us know when booking so we can prepare.",
  },
] as const;

export function getRentalBySlug(slug: string): RentalProduct | undefined {
  return RENTAL_PRODUCTS.find((r) => r.slug === slug);
}