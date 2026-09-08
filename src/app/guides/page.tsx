import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luggage & Packing Guides",
  description: "Researched guides on choosing carry-on and checked luggage, and comparing major brands.",
};

const guides = [
  {
    href: "/guides/best-carry-on-luggage",
    title: "Best Carry-On Luggage",
    description: "How to actually choose a carry-on — by size, weight, material, and wheel type.",
  },
  {
    href: "/guides/best-checked-luggage",
    title: "Best Checked Luggage",
    description: "What matters in a checked bag: durability, expandability, and airline weight limits.",
  },
  {
    href: "/guides/samsonite-vs-delsey",
    title: "Samsonite vs Delsey",
    description: "Two of the biggest luggage brands compared on materials, warranty, and durability.",
  },
];

export default function GuidesIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Guides</h1>
      <p className="text-slate-600 mb-10 max-w-2xl">
        Every guide here is written from published airline policies and manufacturer specifications, with sources
        linked at the bottom of the page. More guides are added regularly.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group rounded-xl border border-slate-200 p-6 hover:border-brand-400 hover:shadow-md transition-all"
          >
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand-700">{guide.title}</h2>
            <p className="mt-2 text-slate-600 text-sm">{guide.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
