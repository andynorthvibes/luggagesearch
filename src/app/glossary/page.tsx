import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Luggage & Travel Glossary",
  description: "Plain-language definitions of common luggage and airline baggage terms.",
};

const terms = [
  {
    term: "Personal item",
    def: "The smallest bag allowance most airlines permit free of charge — a purse, small backpack, or laptop bag that fits under the seat in front of you.",
  },
  {
    term: "Linear dimensions",
    def: "The sum of a bag's length, width, and height (L+W+H). Some airlines — Singapore Airlines among them — size cabin or checked bags by this total rather than by each side separately.",
  },
  {
    term: "Spinner wheels",
    def: "Four wheels, each able to rotate 360°, letting the bag roll in any direction while upright. The current standard on most carry-on and checked luggage.",
  },
  {
    term: "Inline (rollerblade) wheels",
    def: "Two fixed wheels at the base of the bag, requiring you to tilt and drag it. Fewer moving parts than spinners, often more durable on rough terrain.",
  },
  {
    term: "Polycarbonate",
    def: "A durable, somewhat flexible hardside luggage material that resists cracking better than ABS plastic, at a typically higher price.",
  },
  {
    term: "Expandable zipper",
    def: "A secondary zipper that unzips to add extra depth (usually 2–8 cm) to a suitcase. Expanding a bag can push it over an airline's size limit — measure it expanded if you plan to travel that way.",
  },
];

export default function GlossaryPage() {
  return (
    <article className="mx-auto max-w-[80rem] px-5 sm:px-6 py-16 lg:py-20">
      <PageIntro chip="Glossary" title="Luggage words, in plain language." lede="Definitions of the terms used across our guides and tools — no jargon left unexplained." />
      <dl className="mt-14 grid sm:grid-cols-2 gap-6 max-w-[64rem]">
        {terms.map((t, i) => (
          <div key={t.term} className={`rounded-[24px] border-3 border-ink p-6 shadow-hard-sm ${["bg-white", "bg-sun", "bg-white", "bg-coral", "bg-white", "bg-sky text-cream"][i % 6]}`}>
            <dt className="font-display text-[22px] font-extrabold tracking-[-0.02em]">{t.term}</dt>
            <dd className="mt-2 text-[16px] leading-relaxed font-medium opacity-90">{t.def}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
