export type PackageComponent = {
  label: string;
  details: string;
};

export type MonthlyPrice = {
  month: string;
  amount: string;
  currency: string;
  display: string;
};

export type SubPackage = {
  id: string;
  name: string;
  stars: string;
  duration: string;
  hotels: string;
  roomType: string;
  priceDisplay: string;
};

export type Destination = {
  slug: string;
  name: string;
  subtitle: string;
  region: string;
  regionLabel: string;
  image: string;
  heroImage: string;
  description: string;
  tagline: string;
  fromPrice: string;
  badge?: string;
  rating: string;
  ratingText: string;
  tags: string[];
  styles: string[];
  metaItems: { strong: string; rest: string }[];
  highlights?: { icon: string; title: string; text: string }[];
  components?: PackageComponent[];
  pricing?: MonthlyPrice[];
  packages?: SubPackage[];
  packagesNote?: string;
  transfersIncluded: string;
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "singapore-bali",
    name: "Singapore & Bali",
    subtitle: "Twin Capitals & Tropical Beaches",
    region: "Southeast Asia",
    regionLabel: "Singapore · Indonesia",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600&q=85",
    description:
      "Begin with four sparkling nights in Singapore — Marina Bay Sands SkyPark and Gardens by the Bay included — then unwind for seven nights in Seminyak, Bali with private snorkelling and Ubud excursions.",
    tagline: "City lights meet island stillness — 11 nights in two of Asia's finest.",
    fromPrice: "AUD $2,088",
    badge: "✦ Editor's pick",
    rating: "★★★★★",
    ratingText: "4.9 · Departing Perth",
    tags: ["City + Beach", "Snorkelling", "11 Nights"],
    styles: ["Beach", "Culture", "Adventure"],
    metaItems: [
      { strong: "11", rest: "nights" },
      { strong: "Perth", rest: "departures" },
      { strong: "Economy", rest: "class flights" },
      { strong: "May / Jun / Sep", rest: "available" },
    ],
    highlights: [
      {
        icon: "🌆",
        title: "Marina Bay SkyPark",
        text: "Step out onto Singapore's iconic 57-storey rooftop with panoramic skyline views.",
      },
      {
        icon: "🌿",
        title: "Gardens by the Bay",
        text: "Explore the futuristic Supertree Grove and Cloud Forest — one of Asia's most photographed gardens.",
      },
      {
        icon: "🤿",
        title: "Blue Lagoon snorkelling",
        text: "Full-day private tour to Bali's clearest reef waters with vibrant coral and marine life.",
      },
      {
        icon: "🛕",
        title: "Ubud cultural highlights",
        text: "Private guide, sacred temples, rice terraces, and the heart of Bali's spiritual scene.",
      },
    ],
    components: [
      {
        label: "Flight (to SIN)",
        details: "Various · Economy Class · Luggage: 1 Piece · From Perth",
      },
      {
        label: "Internal Flights",
        details: "Various · Economy Class · Luggage: 20kg PP · From SIN",
      },
      {
        label: "Singapore Hotel",
        details: "Furama Riverfront — Superior Room · Room Only · 04 Nights",
      },
      {
        label: "Singapore Excursions",
        details: "Marina Bay Sands SkyPark Deck Tickets & Gardens by the Bay",
      },
      {
        label: "Bali Hotel (Seminyak)",
        details:
          "FuramaXclusive Ocean Beach — Studio Room · Breakfast · 07 Nights",
      },
      {
        label: "Bali Excursions",
        details:
          "Snorkelling to the Blue Lagoon Full-Day Tour & Ubud Highlights Private Tour (Private guide + transfers included)",
      },
      {
        label: "Transfers",
        details: "All ground transfers included",
      },
    ],
    pricing: [
      { month: "May", amount: "2,088", currency: "AUD", display: "AUD $2,088" },
      { month: "June", amount: "2,183", currency: "AUD", display: "AUD $2,183" },
      {
        month: "September",
        amount: "2,225",
        currency: "AUD",
        display: "AUD $2,225",
      },
    ],
    transfersIncluded: "All ground transfers included",
  },
  {
    slug: "dubai-bali",
    name: "Dubai & Bali",
    subtitle: "Modern Marvel meets Indonesian Paradise",
    region: "Middle East · Southeast Asia",
    regionLabel: "UAE · Indonesia",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=85",
    description:
      "Three opulent nights in Dubai followed by a 12-day private guided journey through Bali and the Gili Islands. Daily meals on tour, classic city contrasts, and private transfers between every highlight.",
    tagline: "Skyscrapers, deserts, and secret beaches — 14 nights of grand contrasts.",
    fromPrice: "AUD $4,074",
    badge: "🔥 Trending",
    rating: "★★★★★",
    ratingText: "4.8 · Departing Perth",
    tags: ["Luxury", "Private Tour", "14 Nights"],
    styles: ["Culture", "Beach", "Adventure"],
    metaItems: [
      { strong: "14", rest: "nights" },
      { strong: "Perth", rest: "departures" },
      { strong: "Private", rest: "Bali tour" },
      { strong: "May / Jun", rest: "available" },
    ],
    highlights: [
      {
        icon: "🏙",
        title: "Dubai cityscape",
        text: "Three nights at Four Points Sheraton Bur Dubai with breakfast and easy access to the souks and Burj Khalifa.",
      },
      {
        icon: "🗺",
        title: "Bali & Gili private tour",
        text: "12 days with a private guide across Bali and the Gili Islands — your own pace, your own schedule.",
      },
      {
        icon: "🍽",
        title: "Daily meals on tour",
        text: "All meals included throughout the Bali leg — focus on the experience, not the logistics.",
      },
      {
        icon: "🏝",
        title: "Gili Islands escape",
        text: "Powder-white sand, turquoise water, and zero traffic — just bicycles and outrigger canoes.",
      },
    ],
    components: [
      {
        label: "Flight",
        details: "Various · Economy Class · Luggage: 1 Piece · From Perth",
      },
      {
        label: "Dubai Hotel",
        details:
          "Four Points Sheraton Bur Dubai — Classic Room · Breakfast · 03 Nights",
      },
      {
        label: "Bali Tour",
        details:
          "Bali & Gili Highlight Private Tour — Standard Room · Daily Meals · 12 Days / 11 Nights",
      },
      { label: "Transfers", details: "Not Included" },
    ],
    pricing: [
      { month: "May", amount: "4,497", currency: "AUD", display: "AUD $4,497" },
      { month: "June", amount: "4,074", currency: "AUD", display: "AUD $4,074" },
    ],
    transfersIncluded: "Transfers not included",
  },
  {
    slug: "bali-long-stay",
    name: "Bali Long Stay",
    subtitle: "20 Nights · Four Distinct Resorts",
    region: "Southeast Asia",
    regionLabel: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=1600&q=85",
    description:
      "Twenty unhurried nights across Ubud, Nusa Dua, Canggu, and Seminyak. A different Bali at every stop — temples and rice fields, calm beaches, surf-town energy, and golden-hour cocktails.",
    tagline: "One island, four moods — settle in and let Bali unfold properly.",
    fromPrice: "AUD $2,181",
    badge: "🌿 Best value",
    rating: "★★★★★",
    ratingText: "5.0 · Departing Perth",
    tags: ["Long stay", "Multi-resort", "20 Nights"],
    styles: ["Wellness", "Beach", "Culture"],
    metaItems: [
      { strong: "20", rest: "nights" },
      { strong: "Perth", rest: "departures" },
      { strong: "4", rest: "resort locations" },
      { strong: "May / Jun / Oct", rest: "available" },
    ],
    highlights: [
      {
        icon: "🛕",
        title: "Ubud · spiritual heart",
        text: "Five nights at Ashoka Tree Resort, walking distance to temples, rice terraces, and the Monkey Forest.",
      },
      {
        icon: "🏖",
        title: "Nusa Dua · serene beaches",
        text: "Five nights at Mercure Bali Nusa Dua — calm waters, manicured grounds, and stress-free family time.",
      },
      {
        icon: "🏄",
        title: "Canggu · surf & cafés",
        text: "Three nights at Hotel Sages in Bali's most stylish surf town — perfect for sunset rides and brunch hopping.",
      },
      {
        icon: "🍹",
        title: "Seminyak · sunset cocktails",
        text: "Seven nights at Paragon Hotel Seminyak — the social end of Bali with rooftops and beach clubs.",
      },
    ],
    components: [
      {
        label: "Flight",
        details: "Various · Economy Class · Luggage: 1 Piece · From Perth",
      },
      {
        label: "Ubud Hotel",
        details: "Ashoka Tree Resort — Superior Room · Breakfast · 05 Nights",
      },
      {
        label: "Nusa Dua Hotel",
        details:
          "Mercure Bali Nusa Dua — Superior Garden View · Breakfast · 05 Nights",
      },
      {
        label: "Canggu Hotel",
        details: "Hotel Sages — Superior Suite · Breakfast · 03 Nights",
      },
      {
        label: "Seminyak Hotel",
        details:
          "Paragon Hotel Seminyak — Deluxe Balcony Room · Breakfast · 07 Nights",
      },
      {
        label: "Transfers",
        details: "All ground return transfers included",
      },
    ],
    pricing: [
      { month: "May", amount: "2,181", currency: "AUD", display: "AUD $2,181" },
      { month: "June", amount: "2,592", currency: "AUD", display: "AUD $2,592" },
      {
        month: "October",
        amount: "2,221",
        currency: "AUD",
        display: "AUD $2,221",
      },
    ],
    transfersIncluded: "All ground return transfers included",
  },
  {
    slug: "makkah-madinah",
    name: "Makkah & Madinah",
    subtitle: "Sacred Journey · September Departures",
    region: "Middle East",
    regionLabel: "Saudi Arabia",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1600&q=85",
    description:
      "Three carefully curated Umrah packages with five-star and 5/4-star hotels close to the Haram and Masjid al-Nabawi. Choose from 7, 10, or 12 nights — all departing September.",
    tagline: "Stay steps from the Haram — choose 7, 10, or 12 nights.",
    fromPrice: "£1,475",
    badge: "✦ September departures",
    rating: "★★★★★",
    ratingText: "5.0 · Departing UK",
    tags: ["Spiritual", "Family", "September"],
    styles: ["Culture", "Spiritual", "Family"],
    metaItems: [
      { strong: "7–12", rest: "nights" },
      { strong: "September", rest: "departures" },
      { strong: "5★ / 4★", rest: "hotels" },
      { strong: "3", rest: "package options" },
    ],
    highlights: [
      {
        icon: "🕋",
        title: "Steps from the Haram",
        text: "Anjum and Swissotel Al Maqam both offer direct walking access to the Holy Mosque.",
      },
      {
        icon: "🕌",
        title: "Close to Masjid al-Nabawi",
        text: "Emaar Royal, Saja Al Madinah, and Taiba Madinah are all in walking distance of the Prophet's Mosque.",
      },
      {
        icon: "🌙",
        title: "Three package lengths",
        text: "Choose 7, 10, or 12 nights — split between Makkah and Madinah to suit your travel plans.",
      },
      {
        icon: "👨‍👩‍👧",
        title: "Quad rooms · family-friendly",
        text: "All published prices are based on Quad occupancy — ideal for families travelling together.",
      },
    ],
    packages: [
      {
        id: "p1",
        name: "Package 1",
        stars: "5 Star",
        duration: "7 Nights (4 Makkah + 3 Madinah)",
        hotels: "Anjum Hotel 5★ (Makkah) + Emaar Royal 5★ (Madinah)",
        roomType: "Quad",
        priceDisplay: "£1,475",
      },
      {
        id: "p2",
        name: "Package 2",
        stars: "5/4 Star",
        duration: "10 Nights (6 Makkah + 4 Madinah)",
        hotels:
          "Swissotel Al Maqam 5★ (Makkah) + Saja Al Madinah 4★ (Madinah)",
        roomType: "Quad",
        priceDisplay: "£1,524",
      },
      {
        id: "p3",
        name: "Package 3",
        stars: "5/4 Star",
        duration: "12 Nights (6 Makkah + 6 Madinah)",
        hotels:
          "Swissotel Al Maqam 5★ (Makkah) + Taiba Madinah 5★ (Madinah)",
        roomType: "Quad",
        priceDisplay: "£1,814",
      },
    ],
    packagesNote: "All three packages depart in September.",
    transfersIncluded: "Group transfers between Makkah and Madinah included",
  },
];

export function getDestination(slug?: string): Destination | undefined {
  if (!slug) return undefined;
  return DESTINATIONS.find((d) => d.slug === slug);
}
