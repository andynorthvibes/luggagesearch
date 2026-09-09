import type { Metadata } from "next";
import Link from "next/link";
import CarryOnCheckerClient from "@/components/CarryOnCheckerClient";
import PageIntro from "@/components/PageIntro";
import { AIRLINES } from "@/lib/airlines";

export const metadata: Metadata = {
  title: `Carry-On Size Checker — Will Your Bag Fit? (${AIRLINES.length} Airlines)`,
  description: `Enter your bag's dimensions and weight to instantly check it against ${AIRLINES.length} major airlines' carry-on size and weight limits.`,
  alternates: {
    canonical: "/tools/carry-on-checker",
  },
};

export default function CarryOnCheckerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to check if your bag qualifies as carry-on luggage",
    step: [
      { "@type": "HowToStep", text: "Measure your bag's length, width, and height in cm or inches." },
      { "@type": "HowToStep", text: "Weigh your packed bag in kg or lb." },
      { "@type": "HowToStep", text: "Enter the measurements into the checker to see which airlines will accept it." },
    ],
  };

  return (
    <div className="mx-auto max-w-[80rem] px-5 sm:px-6 py-16 lg:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        chip="Free tool"
        chipColor="sky"
        title="Will it fit? Carry-on size checker."
        lede={`Enter your bag's dimensions and weight once — see instantly whether it fits the cabin rules of ${AIRLINES.length} airlines across North America, Europe, the Middle East and Asia-Pacific.`}
      />
      <div className="mt-12">
        <CarryOnCheckerClient />
      </div>
      <p className="mt-10 text-[15px] font-medium text-ink/60">
        Choosing between specific airlines instead of checking one bag?{" "}
        <Link href="/tools/compare-airlines" className="font-bold underline underline-offset-2 hover:text-ink">
          Compare their carry-on rules side by side
        </Link>
        .
      </p>
    </div>
  );
}
