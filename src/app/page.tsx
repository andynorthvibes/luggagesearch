import Link from "next/link";
import { SITE } from "@/lib/site";

const tools = [
  {
    href: "/tools/carry-on-checker",
    title: "Carry-On Size Checker",
    description: "Enter your bag's dimensions and weight — instantly see which airlines will accept it as cabin baggage.",
    cta: "Check your bag",
  },
  {
    href: "/tools/packing-list",
    title: "Packing List Generator",
    description: "Answer three questions about your trip and get a complete, editable packing checklist.",
    cta: "Build my list",
  },
];

const guides = [
  {
    href: "/guides/best-carry-on-luggage",
    title: "Best Carry-On Luggage",
    description: "How to actually choose a carry-on — by size, weight, material, and wheel type — not just a top-10 list.",
  },
  {
    href: "/guides/best-checked-luggage",
    title: "Best Checked Luggage",
    description: "What matters in a checked bag: durability, expandability, and how airline weight limits actually work.",
  },
  {
    href: "/guides/samsonite-vs-delsey",
    title: "Samsonite vs Delsey",
    description: "Two of the biggest luggage brands compared on materials, warranty, and real-world durability.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Find the right luggage —<br className="hidden sm:block" /> without the guesswork.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">{SITE.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/tools/carry-on-checker"
              className="rounded-lg bg-brand-600 px-6 py-3 text-white font-semibold hover:bg-brand-700 transition-colors"
            >
              Check your carry-on
            </Link>
            <Link
              href="/tools/packing-list"
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:border-brand-400 hover:text-brand-700 transition-colors"
            >
              Build a packing list
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Free tools</h2>
        <p className="text-slate-600 mb-8">No sign-up, no app download — just answers.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group rounded-xl border border-slate-200 p-6 hover:border-brand-400 hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700">{tool.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{tool.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-600">{tool.cta} →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Guides</h2>
        <p className="text-slate-600 mb-8">Researched comparisons, not recycled top-10 lists.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-xl border border-slate-200 p-6 hover:border-brand-400 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-brand-700">{guide.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
