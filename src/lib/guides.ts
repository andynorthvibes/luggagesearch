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
];

export const CHIP_BG: Record<GuideChip, string> = {
  sun: "bg-sun text-ink",
  sky: "bg-sky text-cream",
  coral: "bg-coral text-ink",
};
