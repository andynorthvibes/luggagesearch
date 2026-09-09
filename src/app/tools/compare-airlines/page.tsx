import type { Metadata } from "next";
import CompareAirlinesClient from "@/components/CompareAirlinesClient";
import PageIntro from "@/components/PageIntro";
import { AIRLINES } from "@/lib/airlines";

export const metadata: Metadata = {
  title: `Compare Airline Carry-On Rules Side by Side`,
  description: `Pick two or more of ${AIRLINES.length} airlines and compare their carry-on size and weight limits in one table, with sources and which allows the biggest bag.`,
  alternates: {
    canonical: "/tools/compare-airlines",
  },
};

export default function CompareAirlinesPage() {
  return (
    <div className="mx-auto max-w-[80rem] px-5 sm:px-6 py-16 lg:py-20">
      <PageIntro
        chip="Free tool"
        chipColor="coral"
        title="Compare airlines side by side."
        lede={`Choosing between two or three airlines for the same trip? Pick them from ${AIRLINES.length} carriers and see their carry-on size and weight limits lined up in one table — including which one lets you bring the biggest bag.`}
      />
      <div className="mt-12">
        <CompareAirlinesClient />
      </div>
    </div>
  );
}
