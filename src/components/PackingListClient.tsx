"use client";

import { useState } from "react";
import { generatePackingList, type Climate, type PackingSection, type TripType } from "@/lib/packing-rules";
import { ArrowIcon } from "./icons";

const climates: { value: Climate; label: string }[] = [
  { value: "cold", label: "Cold" },
  { value: "mild", label: "Mild" },
  { value: "hot", label: "Hot" },
];

const tripTypes: { value: TripType; label: string }[] = [
  { value: "leisure", label: "Leisure" },
  { value: "business", label: "Business" },
  { value: "beach", label: "Beach" },
  { value: "city-break", label: "City break" },
  { value: "adventure", label: "Adventure / outdoors" },
];

const sectionColors = ["bg-sun", "bg-sky text-cream", "bg-coral", "bg-white", "bg-cream"];

export default function PackingListClient() {
  const [days, setDays] = useState(7);
  const [climate, setClimate] = useState<Climate>("mild");
  const [tripType, setTripType] = useState<TripType>("leisure");
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [list, setList] = useState<PackingSection[] | null>(null);

  function handleGenerate() {
    setList(generatePackingList({ days, climate, tripType }));
    setChecked({});
  }

  function toggle(key: string) {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const totalItems = list?.reduce((n, s) => n + s.items.length, 0) ?? 0;
  const doneItems = Object.values(checked).filter(Boolean).length;

  return (
    <div className="grid min-w-0 lg:grid-cols-[360px_1fr] gap-8 lg:gap-10">
      {/* Inputs */}
      <div className="min-w-0 h-fit lg:sticky lg:top-28 rounded-[28px] border-3 border-ink bg-white p-6 sm:p-7 shadow-hard">
        <h2 className="font-display text-[24px] font-extrabold tracking-[-0.02em]">Your trip</h2>

        <label className="font-display mt-5 block text-[13px] font-bold uppercase tracking-[0.08em] text-ink/70">
          Trip length (days)
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={60}
            value={days}
            onChange={(e) => setDays(Math.max(1, Math.min(60, Number(e.target.value) || 1)))}
            className="mt-1.5 w-full min-w-0 rounded-xl border-3 border-ink bg-cream px-3 py-2.5 text-[17px] font-bold tabular-nums outline-none focus:bg-sun/40"
          />
        </label>

        <div className="mt-5">
          <span className="font-display block text-[13px] font-bold uppercase tracking-[0.08em] text-ink/70">Climate</span>
          <div role="group" aria-label="Climate" className="mt-1.5 inline-flex w-full rounded-full border-3 border-ink bg-cream p-1">
            {climates.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => setClimate(c.value)}
                aria-pressed={climate === c.value}
                className={`font-display flex-1 rounded-full py-2 text-[14px] font-bold transition-colors ${
                  climate === c.value ? "bg-ink text-cream" : "hover:bg-sun"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <span className="font-display block text-[13px] font-bold uppercase tracking-[0.08em] text-ink/70">Trip type</span>
          <div className="mt-1.5 flex flex-wrap gap-2">
            {tripTypes.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => setTripType(t.value)}
                aria-pressed={tripType === t.value}
                className={`font-display rounded-full border-3 border-ink px-4 py-1.5 text-[14px] font-bold transition-colors ${
                  tripType === t.value ? "bg-ink text-cream" : "bg-cream hover:bg-sun"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleGenerate}
          className="font-display mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border-3 border-ink bg-ink px-6 py-3.5 text-[17px] font-bold text-cream shadow-hard-coral transition-transform hover:-translate-y-0.5"
        >
          Build my list <ArrowIcon className="h-5 w-5" />
        </button>
      </div>

      {/* List */}
      <div className="min-w-0">
        {!list ? (
          <div className="rounded-[24px] border-3 border-dashed border-ink/30 p-10 text-center">
            <p className="font-display text-[22px] font-extrabold tracking-[-0.02em]">Your list will appear here.</p>
            <p className="mt-2 text-[15px] font-medium text-ink/65">Set the trip length, climate and type, then hit &ldquo;Build my list&rdquo;.</p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="font-display inline-flex items-center rounded-full border-3 border-ink bg-sun px-4 py-1.5 text-[14px] font-bold">
                {days} {days === 1 ? "day" : "days"} · {climates.find((c) => c.value === climate)?.label} · {tripTypes.find((t) => t.value === tripType)?.label}
              </span>
              <span className="font-display inline-flex items-center rounded-full border-3 border-ink bg-cream px-4 py-1.5 text-[14px] font-bold tabular-nums">
                {doneItems} / {totalItems} packed
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {list.map((section, i) => (
                <div key={section.title} className={`rounded-[24px] border-3 border-ink p-6 shadow-hard-sm ${sectionColors[i % sectionColors.length]}`}>
                  <h3 className="font-display text-[22px] font-extrabold tracking-[-0.02em]">{section.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {section.items.map((item) => {
                      const key = `${section.title}-${item}`;
                      const done = !!checked[key];
                      return (
                        <li key={key}>
                          <label className="flex items-start gap-3 text-[16px] font-medium cursor-pointer">
                            <input type="checkbox" checked={done} onChange={() => toggle(key)} className="mt-1 h-5 w-5 shrink-0 accent-ink" />
                            <span className={done ? "line-through opacity-50" : ""}>{item}</span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
