import type { Metadata } from "next";

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
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Luggage & Travel Glossary</h1>
      <p className="text-slate-600 mb-10">Plain-language definitions of terms used across our guides and tools.</p>
      <dl className="space-y-6">
        {terms.map((t) => (
          <div key={t.term} className="border-b border-slate-100 pb-6">
            <dt className="font-bold text-slate-900">{t.term}</dt>
            <dd className="text-slate-600 mt-1">{t.def}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
