import type { Metadata } from "next";
import CarryOnCheckerClient from "@/components/CarryOnCheckerClient";

export const metadata: Metadata = {
  title: "Carry-On Size Checker — Will Your Bag Fit? (16 Airlines)",
  description:
    "Enter your bag's dimensions and weight to instantly check it against 16 major airlines' carry-on size and weight limits.",
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
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-sm text-brand-700 font-semibold mb-2">Tools</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Carry-On Size Checker</h1>
      <p className="text-slate-600 max-w-2xl mb-10">
        Enter your bag&apos;s dimensions and weight once — see instantly whether it fits carry-on rules for 16 major
        airlines across North America, Europe, the Middle East, and Asia-Pacific.
      </p>
      <CarryOnCheckerClient />
    </div>
  );
}
