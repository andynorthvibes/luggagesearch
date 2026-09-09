import type { Metadata } from "next";
import { GUIDES } from "@/lib/guides";
import GuidesGrid from "@/components/GuidesGrid";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Luggage & Packing Guides",
  description: "Researched guides on choosing carry-on and checked luggage, and comparing major brands.",
  alternates: {
    canonical: "/guides",
  },
};

export default function GuidesIndex() {
  return (
    <div className="mx-auto max-w-[80rem] px-5 sm:px-6 py-16 lg:py-20">
      <PageIntro
        chip="Guides"
        title="Guides worth the scroll."
        lede="Every guide is written from published airline policies and manufacturer specifications, with sources linked at the bottom. Criteria and sources — not recycled top-10 lists."
      />
      <GuidesGrid guides={GUIDES} />
    </div>
  );
}
