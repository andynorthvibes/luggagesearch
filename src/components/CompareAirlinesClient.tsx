"use client";

import { useMemo, useState } from "react";
import { AIRLINES, type AirlineLimit } from "@/lib/airlines";
import { CheckIcon } from "./icons";

function linearCm(a: AirlineLimit): number {
  if (a.measurement === "linear" && a.maxLinearCm) return a.maxLinearCm;
  if (a.maxCm) return a.maxCm[0] + a.maxCm[1] + a.maxCm[2];
  return 0;
}

export default function CompareAirlinesClient() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>(["ryanair", "easyjet", "wizz-air"].filter((slug) =>
    AIRLINES.some((a) => a.slug === slug)
  ));

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return AIRLINES;
    return AIRLINES.filter((a) => a.name.toLowerCase().includes(q) || a.region.toLowerCase().includes(q));
  }, [query]);

  function toggle(slug: string) {
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }

  const selectedAirlines = AIRLINES.filter((a) => selected.includes(a.slug));
  const largestSlug = useMemo(() => {
    if (selectedAirlines.length < 2) return null;
    return selectedAirlines.reduce((best, a) => (linearCm(a) > linearCm(best) ? a : best)).slug;
  }, [selectedAirlines]);

  return (
    <div className="grid min-w-0 lg:grid-cols-[340px_1fr] gap-8 lg:gap-10">
      {/* Picker */}
      <div className="min-w-0 h-fit lg:sticky lg:top-28 rounded-[28px] border-3 border-ink bg-white p-6 sm:p-7 shadow-hard">
        <h2 className="font-display text-[24px] font-extrabold tracking-[-0.02em]">Pick airlines</h2>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search airlines or region…"
          className="mt-4 w-full rounded-full border-3 border-ink bg-cream px-4 py-2.5 text-[15px] font-medium placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-sky"
        />
        <div className="mt-4 max-h-[360px] overflow-y-auto pr-1 -mr-1 space-y-1.5">
          {filtered.map((a) => {
            const isSelected = selected.includes(a.slug);
            return (
              <button
                key={a.slug}
                type="button"
                onClick={() => toggle(a.slug)}
                aria-pressed={isSelected}
                className={`font-display flex w-full items-center justify-between gap-3 rounded-xl border-3 px-3.5 py-2.5 text-left text-[14px] font-bold transition-colors ${
                  isSelected ? "border-ink bg-ink text-cream" : "border-ink/15 bg-cream hover:border-ink"
                }`}
              >
                <span className="min-w-0 truncate">{a.name}</span>
                {isSelected && <CheckIcon className="h-3.5 w-3.5 shrink-0" />}
              </button>
            );
          })}
          {filtered.length === 0 && <p className="py-4 text-[14px] text-ink/55">No airlines match &quot;{query}&quot;.</p>}
        </div>
        <p className="mt-4 text-[12px] leading-relaxed text-ink/50">
          Tap an airline to add or remove it. Pick two or more to compare their carry-on limits side by side.
        </p>
      </div>

      {/* Comparison */}
      <div className="min-w-0">
        {selectedAirlines.length < 2 ? (
          <div className="flex h-full min-h-[220px] flex-col items-center justify-center rounded-[24px] border-3 border-dashed border-ink/25 p-10 text-center">
            <p className="text-[17px] font-semibold text-ink/60">
              Pick at least two airlines from the list to see a side-by-side comparison.
            </p>
          </div>
        ) : (
          <>
            {/* Phone: cards */}
            <ul className="lg:hidden space-y-3">
              {selectedAirlines.map((a) => (
                <li key={a.slug} className={`rounded-[20px] border-3 border-ink p-4 ${a.slug === largestSlug ? "bg-sun/25" : "bg-white"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="font-display text-[17px] font-extrabold leading-tight">{a.name}</div>
                      <div className="mt-1 text-[13px] text-ink/60">{a.region}</div>
                    </div>
                    {a.slug === largestSlug && (
                      <span className="font-display shrink-0 rounded-full border-3 border-ink bg-sun px-2.5 py-1 text-[11px] font-bold">
                        Largest bag allowed
                      </span>
                    )}
                  </div>
                  <div className="mt-3 text-[14px] font-medium text-ink/80">
                    {a.measurement === "linear" ? `${a.maxLinearCm} cm total (L+W+H)` : `${a.maxCm?.join(" × ")} cm`}
                    {" · "}
                    {a.maxWeightKg === null ? "no published weight limit" : `${a.maxWeightKg} kg`}
                  </div>
                  {a.weightNote && <p className="mt-2 text-[12px] leading-snug text-ink/55">{a.weightNote}</p>}
                  <a
                    href={`https://${a.source}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-2 inline-block text-[12px] font-bold underline underline-offset-2 text-ink/55 hover:text-ink"
                  >
                    {a.source}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop: table */}
            <div className="hidden lg:block overflow-x-auto rounded-[24px] border-3 border-ink bg-white">
              <table className="w-full text-[15px]">
                <thead>
                  <tr className="font-display bg-ink text-cream text-[12px] uppercase tracking-[0.1em]">
                    <th className="text-left px-4 py-3.5 font-bold">Airline</th>
                    <th className="text-left px-4 py-3.5 font-bold">Max carry-on size</th>
                    <th className="text-left px-4 py-3.5 font-bold">Max weight</th>
                    <th className="text-left px-4 py-3.5 font-bold">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedAirlines.map((a) => (
                    <tr key={a.slug} className={`border-b-3 border-ink/10 last:border-0 ${a.slug === largestSlug ? "bg-sun/20" : ""}`}>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{a.name}</span>
                          {a.slug === largestSlug && (
                            <span className="font-display shrink-0 rounded-full border-3 border-ink bg-sun px-2.5 py-0.5 text-[10px] font-bold">
                              Largest bag allowed
                            </span>
                          )}
                        </div>
                        <div className="text-[12px] text-ink/55">{a.region}</div>
                      </td>
                      <td className="px-4 py-3.5 font-medium tabular-nums text-ink/80">
                        {a.measurement === "linear" ? `${a.maxLinearCm} cm total (L+W+H)` : `${a.maxCm?.join(" × ")} cm`}
                      </td>
                      <td className="px-4 py-3.5 font-medium text-ink/80">
                        {a.maxWeightKg === null ? "No published limit" : `${a.maxWeightKg} kg`}
                        {a.weightNote && <div className="mt-1 text-[12px] leading-snug text-ink/55 max-w-[22rem]">{a.weightNote}</div>}
                      </td>
                      <td className="px-4 py-3.5">
                        <a
                          href={`https://${a.source}`}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="font-bold underline underline-offset-2 text-ink/70 hover:text-ink"
                        >
                          {a.source}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        <p className="mt-5 text-[13px] leading-relaxed text-ink/55 max-w-[46rem]">
          &quot;Largest bag allowed&quot; compares the combined length + width + height of each airline&apos;s published
          limit — a useful signal, not a guarantee, since a bag can still fail on one dimension even with a larger
          total. Limits may vary by fare class or route, or change without notice. Always confirm on the
          airline&apos;s own site before flying.
        </p>
      </div>
    </div>
  );
}
