import type { Metadata } from "next";
import PackingListClient from "@/components/PackingListClient";

export const metadata: Metadata = {
  title: "Packing List Generator — Free & Customizable",
  description:
    "Answer three questions about your trip — length, climate, and type — and get a complete, checkable packing list.",
};

export default function PackingListPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <p className="text-sm text-brand-700 font-semibold mb-2">Tools</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Packing List Generator</h1>
      <p className="text-slate-600 max-w-2xl mb-10">
        Tell us how long your trip is, the climate, and the type of trip — we&apos;ll build a checklist scaled to
        match, so you don&apos;t over- or under-pack.
      </p>
      <PackingListClient />
    </div>
  );
}
