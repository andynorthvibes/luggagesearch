"use client";

import { useMemo, useState } from "react";
import GuideCard from "./GuideCard";
import type { GuideMeta } from "@/lib/guides";

type Filter = "all" | "airline" | "other";

export default function GuidesGrid({ guides }: { guides: GuideMeta[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const airlineCount = useMemo(() => guides.filter((g) => g.chip === "Airline guide").length, [guides]);
  const otherCount = guides.length - airlineCount;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return guides.filter((g) => {
      if (filter === "airline" && g.chip !== "Airline guide") return false;
      if (filter === "other" && g.chip === "Airline guide") return false;
      if (q && !g.title.toLowerCase().includes(q) && !g.blurb.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [guides, query, filter]);

  const pills: { key: Filter; label: string }[] = [
    { key: "all", label: `All (${guides.length})` },
    { key: "airline", label: `Airlines (${airlineCount})` },
    { key: "other", label: `Buying & packing (${otherCount})` },
  ];

  return (
    <div>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {pills.map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => setFilter(p.key)}
              className={`font-display rounded-full border-3 border-ink px-4 py-2 text-[14px] font-bold transition-colors ${
                filter === p.key ? "bg-ink text-cream" : "bg-cream text-ink hover:bg-sun/40"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guides or airlines…"
          className="w-full sm:w-72 rounded-full border-3 border-ink bg-cream px-5 py-2.5 text-[15px] font-medium placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-sky"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-14 text-[17px] text-ink/60">No guides match &quot;{query}&quot;.</p>
      ) : (
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((g, i) => (
            <GuideCard key={g.href} guide={g} priority={i === 0} />
          ))}
        </div>
      )}
    </div>
  );
}
