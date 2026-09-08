import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Who runs LuggageSearch.com and how the site is funded.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16 prose-content">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">About {SITE.name}</h1>
      <p>
        {SITE.name} is an independent site about luggage, packing, and travel gear. We publish guides based on
        published airline policies and manufacturer specifications, and build free tools — like our carry-on size
        checker and packing list generator — instead of relying only on articles.
      </p>
      <p>
        The site is run alongside a small set of other independent travel and comparison sites, including{" "}
        <a href="https://bynavn.no" target="_blank" rel="noopener noreferrer">bynavn.no</a> (city guides) and{" "}
        <a href="https://hotellpris.no" target="_blank" rel="noopener noreferrer">hotellpris.no</a> (Norwegian hotel
        price comparison).
      </p>
      <h2>How we make money</h2>
      <p>
        {SITE.name} is supported by advertising (Google AdSense) and affiliate commissions on some product links —
        see our <a href="/affiliate-disclosure">affiliate disclosure</a> for details. Advertising and affiliate
        relationships do not influence which products we recommend or how we describe airline policies.
      </p>
      <h2>Corrections</h2>
      <p>
        Airline policies and product specifications change. If you spot something outdated, we want to fix it —
        contact details will be added here shortly.
      </p>
    </article>
  );
}
