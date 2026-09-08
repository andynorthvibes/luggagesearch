import type { Metadata } from "next";
import PackingListClient from "@/components/PackingListClient";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Packing List Generator — Free & Customizable",
  description:
    "Answer three questions about your trip — length, climate, and type — and get a complete, checkable packing list.",
};

export default function PackingListPage() {
  return (
    <div className="mx-auto max-w-[80rem] px-5 sm:px-6 py-16 lg:py-20">
      <PageIntro
        chip="Free tool"
        chipColor="coral"
        title="Pack smarter. Packing list generator."
        lede="Tell us how long the trip is, the climate and what kind of trip it is — you get a checklist scaled to match, so you neither over- nor under-pack."
      />
      <div className="mt-12">
        <PackingListClient />
      </div>
    </div>
  );
}
