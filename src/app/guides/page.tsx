import type { Metadata } from "next";
import { GUIDES } from "@/lib/guides";
import GuideCard from "@/components/GuideCard";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Luggage & Packing Guides",
  description: "Researched guides on choosing carry-on and checked luggage, and comparing major brands.",
};

export default function GuidesIndex() {
  return (
    <div className="mx-auto max-w-[80rem] px-5 sm:px-6 py-16 lg:py-20">
      <PageIntro
        chip="Guides"
        title="Guides worth the scroll."
        lede="Every guide is written from published airline policies and manufacturer specifications, with sources linked at the bottom. Criteria and sources — not recycled top-10 lists."
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {GUIDES.map((g, i) => (
          <GuideCard key={g.href} guide={g} priority={i === 0} />
        ))}
      </div>
    </div>
  );
}
