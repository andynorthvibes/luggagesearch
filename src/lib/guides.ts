// Guide index — shared by the homepage, the guides listing and the footer.
// Photos: Unsplash (free licence), a matching three-part series by one photographer.

export type GuideChip = "sun" | "sky" | "coral";

export type GuideMeta = {
  href: string;
  title: string;
  blurb: string;
  chip: string;
  chipColor: GuideChip;
  img: string;
  updated: string;
};

export const GUIDES: GuideMeta[] = [
  {
    href: "/guides/best-carry-on-luggage",
    title: "Best carry-on luggage",
    blurb: "Size, weight, shell, wheels — the four decisions that matter, in order.",
    chip: "Carry-on",
    chipColor: "sun",
    img: "https://images.unsplash.com/photo-1670888616036-ed6e723c07e6?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
  {
    href: "/guides/best-checked-luggage",
    title: "Best checked luggage",
    blurb: "Durability, expansion and how airline weight limits really work.",
    chip: "Checked",
    chipColor: "sky",
    img: "https://images.unsplash.com/photo-1670888664952-efff442ec0d2?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
  {
    href: "/guides/samsonite-vs-delsey",
    title: "Samsonite vs Delsey",
    blurb: "Two giants compared on materials, warranty and real-world wear.",
    chip: "Brand duel",
    chipColor: "coral",
    img: "https://images.unsplash.com/photo-1670888616427-764112453941?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
  {
    href: "/guides/ryanair-baggage-rules",
    title: "Ryanair baggage rules, explained",
    blurb: "Free personal item, paid Priority bag, and where the 10 kg limit gets enforced.",
    chip: "Airline guide",
    chipColor: "sky",
    img: "https://images.unsplash.com/photo-1673505379276-fd25416b6e55?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
  {
    href: "/guides/southwest-baggage-policy",
    title: "Southwest's baggage policy has changed",
    blurb: "The two-free-bags era is over for most flyers — here's who still gets them free.",
    chip: "Airline guide",
    chipColor: "coral",
    img: "https://images.unsplash.com/photo-1702411739431-0b6874405792?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
  {
    href: "/guides/best-lightweight-carry-on-luggage",
    title: "Best lightweight carry-on luggage",
    blurb: "The lightest bags we could verify, ranked by actual empty weight — not marketing copy.",
    chip: "Buying guide",
    chipColor: "sun",
    img: "https://images.unsplash.com/photo-1673505705824-e6abaa279c97?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
  {
    href: "/guides/avoid-checked-baggage-fees",
    title: "How to avoid checked baggage fees",
    blurb: "Credit cards, elite status and packing choices, ranked by how much they actually save.",
    chip: "Money-saving",
    chipColor: "sky",
    img: "https://images.unsplash.com/photo-1762965119363-af950b523dca?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
  {
    href: "/guides/lufthansa-baggage-rules",
    title: "Lufthansa baggage rules, by fare class",
    blurb: "The cabin bag is fixed at 8 kg — the checked bag depends entirely on your fare.",
    chip: "Airline guide",
    chipColor: "coral",
    img: "https://images.unsplash.com/photo-1706967930742-9d6c5238e7e4?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
  {
    href: "/guides/emirates-baggage-rules",
    title: "Emirates baggage rules, explained",
    blurb: "Piece-based or weight-based checked baggage — it depends entirely on your route.",
    chip: "Airline guide",
    chipColor: "sky",
    img: "https://images.unsplash.com/photo-1591632175697-f07e2d75dacb?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
  {
    href: "/guides/carry-on-vs-personal-item",
    title: "Carry-on vs personal item, what's the difference",
    blurb: "We compared the free personal-item size across our own dataset — it varies by over 50%.",
    chip: "Explainer",
    chipColor: "sun",
    img: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
  {
    href: "/guides/best-luggage-for-business-travel",
    title: "Best luggage for business travel",
    blurb: "Laptop access, garment protection and a weight budget that survives Lufthansa or Emirates.",
    chip: "Buying guide",
    chipColor: "coral",
    img: "https://images.unsplash.com/photo-1574202141112-c3a90e1a3ce2?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
  {
    href: "/guides/british-airways-baggage-allowance",
    title: "British Airways baggage allowance, by fare",
    blurb: "Checked bags scale from zero to three depending on cabin and fare — here's the full breakdown.",
    chip: "Airline guide",
    chipColor: "sky",
    img: "https://images.unsplash.com/photo-1698584109673-12d97bc70d08?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
  {
    href: "/guides/what-not-to-pack-in-carry-on",
    title: "What not to pack in your carry-on",
    blurb: "Liquids, sharp objects, sporting goods, and the one item that must go in the cabin, not checked.",
    chip: "Explainer",
    chipColor: "coral",
    img: "https://images.unsplash.com/photo-1673505705715-8deb093d39e8?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
  {
    href: "/guides/best-luggage-for-family-travel",
    title: "Best luggage for family travel",
    blurb: "Hard-shell durability, wheel quality, and why a 3-piece set beats one bag per traveler.",
    chip: "Buying guide",
    chipColor: "sun",
    img: "https://images.unsplash.com/photo-1673505705677-93516a00ca06?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
  {
    href: "/guides/wizz-air-baggage-rules",
    title: "Wizz Air baggage rules, explained",
    blurb: "One free personal item, a paid Priority cabin bag, and four checked-bag weight tiers.",
    chip: "Airline guide",
    chipColor: "sky",
    img: "https://images.unsplash.com/photo-1602191595949-1b1e5fb5634a?q=80&w=1000&auto=format&fit=crop",
    updated: "September 2026",
  },
];

export const CHIP_BG: Record<GuideChip, string> = {
  sun: "bg-sun text-ink",
  sky: "bg-sky text-cream",
  coral: "bg-coral text-ink",
};
