"use client";

import { useMemo, useState } from "react";
import { checkBag, type CheckResult } from "@/lib/airlines";

type Unit = "cm" | "in";
type WeightUnit = "kg" | "lb";

const IN_TO_CM = 2.54;
const LB_TO_KG = 0.453592;

function StatusBadge({ ok }: { ok: boolean | null }) {
  if (ok === null) {
    return <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-500 text-xs font-medium px-2.5 py-1">N/A</span>;
  }
  if (ok) {
    return <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1">Fits</span>;
  }
  return <span className="inline-flex items-center rounded-full bg-red-100 text-red-700 text-xs font-medium px-2.5 py-1">Too big</span>;
}

export default function CarryOnCheckerClient() {
  const [unit, setUnit] = useState<Unit>("cm");
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [length, setLength] = useState("55");
  const [width, setWidth] = useState("35");
  const [height, setHeight] = useState("23");
  const [weight, setWeight] = useState("7");
  const [includeWeight, setIncludeWeight] = useState(true);

  const results: CheckResult[] | null = useMemo(() => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const wt = includeWeight ? parseFloat(weight) : null;

    if (Number.isNaN(l) || Number.isNaN(w) || Number.isNaN(h)) return null;
    if (includeWeight && Number.isNaN(wt as number)) return null;

    const factor = unit === "in" ? IN_TO_CM : 1;
    const weightFactor = weightUnit === "lb" ? LB_TO_KG : 1;

    return checkBag(l * factor, w * factor, h * factor, wt !== null ? wt * weightFactor : null);
  }, [length, width, height, weight, unit, weightUnit, includeWeight]);

  const passCount = results?.filter((r) => r.dimensionsOk && r.weightOk !== false).length ?? 0;

  return (
    <div className="grid lg:grid-cols-[320px_1fr] gap-8">
      <div className="rounded-xl border border-slate-200 p-6 h-fit lg:sticky lg:top-24">
        <h2 className="font-bold text-slate-900 mb-4">Your bag</h2>

        <div className="flex gap-2 mb-4 text-sm">
          <button
            onClick={() => setUnit("cm")}
            className={`flex-1 rounded-md py-1.5 font-medium ${unit === "cm" ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"}`}
          >
            cm
          </button>
          <button
            onClick={() => setUnit("in")}
            className={`flex-1 rounded-md py-1.5 font-medium ${unit === "in" ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"}`}
          >
            inches
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <label className="text-xs text-slate-500">
            Length
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
            />
          </label>
          <label className="text-xs text-slate-500">
            Width
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
            />
          </label>
          <label className="text-xs text-slate-500">
            Height
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
            />
          </label>
        </div>

        <label className="flex items-center gap-2 text-sm text-slate-700 mb-3">
          <input type="checkbox" checked={includeWeight} onChange={(e) => setIncludeWeight(e.target.checked)} />
          Include weight
        </label>

        {includeWeight && (
          <>
            <div className="flex gap-2 mb-2 text-sm">
              <button
                onClick={() => setWeightUnit("kg")}
                className={`flex-1 rounded-md py-1.5 font-medium ${weightUnit === "kg" ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"}`}
              >
                kg
              </button>
              <button
                onClick={() => setWeightUnit("lb")}
                className={`flex-1 rounded-md py-1.5 font-medium ${weightUnit === "lb" ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"}`}
              >
                lb
              </button>
            </div>
            <label className="text-xs text-slate-500 block mb-4">
              Weight
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
              />
            </label>
          </>
        )}

        {results && (
          <div className="rounded-lg bg-brand-50 border border-brand-100 p-3 text-sm text-brand-800">
            Fits <strong>{passCount}</strong> of {results.length} airlines checked.
          </div>
        )}
      </div>

      <div>
        {!results ? (
          <p className="text-slate-500">Enter valid dimensions to see results.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left p-3 font-semibold text-slate-700">Airline</th>
                  <th className="text-left p-3 font-semibold text-slate-700">Max size</th>
                  <th className="text-left p-3 font-semibold text-slate-700">Max weight</th>
                  <th className="text-left p-3 font-semibold text-slate-700">Size</th>
                  <th className="text-left p-3 font-semibold text-slate-700">Weight</th>
                </tr>
              </thead>
              <tbody>
                {results.map(({ airline, dimensionsOk, weightOk }) => (
                  <tr key={airline.slug} className="border-b border-slate-100 last:border-0">
                    <td className="p-3 font-medium text-slate-900">{airline.name}</td>
                    <td className="p-3 text-slate-600">
                      {airline.measurement === "linear"
                        ? `${airline.maxLinearCm} cm total (L+W+H)`
                        : `${airline.maxCm?.join(" × ")} cm`}
                    </td>
                    <td className="p-3 text-slate-600">
                      {airline.maxWeightKg === null ? "No published limit" : `${airline.maxWeightKg} kg`}
                    </td>
                    <td className="p-3">
                      <StatusBadge ok={dimensionsOk} />
                    </td>
                    <td className="p-3">
                      <StatusBadge ok={weightOk} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="text-xs text-slate-400 mt-4">
          Limits are based on published airline cabin-baggage policies and may vary by fare class, route, or change
          without notice. Always confirm on the airline&apos;s own site before flying.
        </p>
      </div>
    </div>
  );
}
