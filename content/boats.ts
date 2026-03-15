// ═══════════════════════════════════════════
// OB Boat Rentals — Boats Content
// ═══════════════════════════════════════════

export const BOATS_HERO = {
  headline: "Our Boats",
  subhead:
    "Leisure Cat 26' World Class Catamarans — the area's ONLY boats with bathrooms. Built for comfort, equipped for safety, and designed to make your day unforgettable.",
  image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1920&q=80",
} as const;

export const BOAT_SPECS = {
  type: "Leisure Cat 26' Catamaran",
  capacity: "Up to 8 Passengers",
  engine: "Outboard Motor",
  length: "26 ft",
} as const;

export const BOAT_COMFORT_FEATURES = [
  {
    id: "restroom",
    title: "Full Private Restroom",
    description:
      "No more awkward dashes to shore. Every boat has a full, private restroom onboard — a luxury most rentals don't offer.",
    icon: "restroom",
  },
  {
    id: "seating",
    title: "Premium Leather Seating",
    description:
      "Soft, UV-resistant leather cushions throughout. Plenty of room for up to 8 passengers to spread out and relax.",
    icon: "seating",
  },
  {
    id: "stereo",
    title: "6-Speaker Bluetooth Stereo",
    description:
      "Connect your phone via Bluetooth, AUX, or tune into XM Satellite Radio. Crystal-clear sound across 6 marine-grade speakers.",
    icon: "stereo",
  },
  {
    id: "shade",
    title: "Bimini Top Shade",
    description:
      "Full bimini top provides shade when you need it. Stay cool and protected from the Alabama sun.",
    icon: "stable",
  },
  {
    id: "storage",
    title: "Ample Storage",
    description:
      "Plenty of room for coolers, bags, towels, and gear. Under-seat storage keeps everything organized and out of the way.",
    icon: "stable",
  },
  {
    id: "swim",
    title: "Easy Water Access",
    description:
      "Step-down swim platform and boarding ladder make it easy to get in and out of the water all day long.",
    icon: "anchor",
  },
] as const;

export const BOAT_SAFETY_FEATURES = [
  {
    id: "coastguard",
    title: "Coast Guard Certified",
    description:
      "Every boat meets all U.S. Coast Guard safety requirements. Inspected and maintained to the highest standards.",
    icon: "shield",
  },
  {
    id: "lifejackets",
    title: "Life Jackets for All",
    description:
      "Full set of adult and child life jackets onboard. Safety equipment for every passenger, every trip.",
    icon: "shield",
  },
  {
    id: "equipment",
    title: "Full Safety Kit",
    description:
      "Fire extinguisher, flares, first aid kit, horn, navigation lights, and all required safety equipment included.",
    icon: "shield",
  },
  {
    id: "anchoring",
    title: "Anchors & Docking Gear",
    description:
      "Two anchors with chains, two fenders (rubber bumpers), mooring ropes, and all the gear you need for secure anchoring at any sandbar or dock.",
    icon: "anchor",
  },
] as const;

export const BOAT_GALLERY = [
  {
    src: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/ef26c19c-d1bf-466f-ba4f-14fecc7bb919/Dylan-Gandy-IMG_4769.jpg",
    alt: "Pontoon boat cruising on emerald Gulf waters",
  },
  {
    src: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/36424678-e70f-4c5f-a1ea-8fb377ce1c82/Dylan-Gandy-IMG_4701.jpg",
    alt: "Premium leather seating and interior boat details",
  },
  {
    src: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/be44dd21-edd6-4285-98be-f17a287e8ff4/Dylan-Gandy-IMG_4771.jpg",
    alt: "Group enjoying a sunny day on the water",
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
    src: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/242a0f16-de75-4417-a4d5-a84b8b18bd91/Dylan-Gandy-IMG_4238.jpg",
    alt: "Boat anchored near a sandbar with guests swimming",
  },
] as const;