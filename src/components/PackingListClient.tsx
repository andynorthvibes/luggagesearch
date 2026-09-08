"use client";

import { useState } from "react";
import { generatePackingList, type Climate, type PackingSection, type TripType } from "@/lib/packing-rules";

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

  return (
    <div className="grid lg:grid-cols-[320px_1fr] gap-8">
      <div className="rounded-xl border border-slate-200 p-6 h-fit lg:sticky lg:top-24">
        <h2 className="font-bold text-slate-900 mb-4">Your trip</h2>

        <label className="text-xs text-slate-500 block mb-4">
          Trip length (days)
          <input
            type="number"
            min={1}
            max={60}
            value={days}
            onChange={(e) => setDays(Math.max(1, Math.min(60, Number(e.target.value) || 1)))}
            className="mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
          />
        </label>

        <div className="mb-4">
          <span className="text-xs text-slate-500 block mb-1">Climate</span>
          <div className="flex gap-2">
            {climates.map((c) => (
              <button
                key={c.value}
                onClick={() => setClimate(c.value)}
                className={`flex-1 rounded-md py-1.5 text-sm font-medium ${climate === c.value ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <span className="text-xs text-slate-500 block mb-1">Trip type</span>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value as TripType)}
            className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
          >
            {tripTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleGenerate}
          className="w-full rounded-lg bg-brand-600 px-4 py-2.5 text-white font-semibold text-sm hover:bg-brand-700"
        >
          Generate packing list
        </button>
      </div>

      <div>
        {!list ? (
          <p className="text-slate-500">Fill in your trip details and generate a list.</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6">
            {list.map((section) => (
              <div key={section.title} className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => {
                    const key = `${section.title}-${item}`;
                    return (
                      <li key={key}>
                        <label className="flex items-start gap-2 text-sm text-slate-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={!!checked[key]}
                            onChange={() => toggle(key)}
                            className="mt-0.5"
                          />
                          <span className={checked[key] ? "line-through text-slate-400" : ""}>{item}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
