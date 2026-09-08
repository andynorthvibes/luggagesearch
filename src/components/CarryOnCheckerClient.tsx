"use client";

import { useMemo, useState } from "react";
import { checkBag, type CheckResult } from "@/lib/airlines";
import { CheckIcon, CrossIcon } from "./icons";

type Unit = "cm" | "in";
type WeightUnit = "kg" | "lb";

const IN_TO_CM = 2.54;
const LB_TO_KG = 0.453592;

const inputClass =
  "mt-1.5 w-full min-w-0 rounded-xl border-3 border-ink bg-cream px-3 py-2.5 text-[17px] font-bold tabular-nums outline-none focus:bg-sun/40";

function Segmented<T extends string>({
  value,
  options,
  onChange,
  label,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="inline-flex w-full rounded-full border-3 border-ink bg-cream p-1">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          aria-pressed={value === o.value}
          className={`font-display flex-1 rounded-full py-2 text-[14px] font-bold transition-colors ${
            value === o.value ? "bg-ink text-cream" : "hover:bg-sun"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Status({ ok }: { ok: boolean | null }) {
  if (ok === null) {
    return (
      <span className="font-display inline-flex items-center whitespace-nowrap rounded-full border-3 border-ink/20 px-3 py-1 text-[12px] font-bold text-ink/50">
        No limit
      </span>
    );
  }
  return ok ? (
    <span className="font-display inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border-3 border-ink bg-sun px-3 py-1 text-[12px] font-bold">
      <CheckIcon className="h-3.5 w-3.5" /> Fits
    </span>
  ) : (
    <span className="font-display inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border-3 border-ink bg-coral px-3 py-1 text-[12px] font-bold">
      <CrossIcon className="h-3.5 w-3.5" /> Too big
    </span>
  );
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
  const total = results?.length ?? 0;

  return (
    <div className="grid min-w-0 lg:grid-cols-[360px_1fr] gap-8 lg:gap-10">
      {/* Inputs */}
      <div className="min-w-0 h-fit lg:sticky lg:top-28 rounded-[28px] border-3 border-ink bg-white p-6 sm:p-7 shadow-hard">
        <h2 className="font-display text-[24px] font-extrabold tracking-[-0.02em]">Your bag</h2>

        <div className="mt-5">
          <Segmented
            label="Length unit"
            value={unit}
            onChange={setUnit}
            options={[
              { value: "cm", label: "Centimetres" },
              { value: "in", label: "Inches" },
            ]}
          />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "Length", value: length, set: setLength },
            { label: "Width", value: width, set: setWidth },
            { label: "Height", value: height, set: setHeight },
          ].map((f) => (
            <label key={f.label} className="min-w-0 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-ink/70">
              {f.label}
              <input type="number" inputMode="decimal" value={f.value} onChange={(e) => f.set(e.target.value)} className={inputClass} />
            </label>
          ))}
        </div>

        <label className="mt-5 flex items-center gap-3 text-[15px] font-semibold cursor-pointer">
          <input
            type="checkbox"
            checked={includeWeight}
            onChange={(e) => setIncludeWeight(e.target.checked)}
            className="h-5 w-5 accent-sky"
          />
          Check weight too
        </label>

        {includeWeight && (
          <div className="mt-4 grid grid-cols-[1fr_1fr] gap-3 items-end">
            <label className="min-w-0 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-ink/70">
              Weight
              <input type="number" inputMode="decimal" value={weight} onChange={(e) => setWeight(e.target.value)} className={inputClass} />
            </label>
            <Segmented
              label="Weight unit"
              value={weightUnit}
              onChange={setWeightUnit}
              options={[
                { value: "kg", label: "kg" },
                { value: "lb", label: "lb" },
              ]}
            />
          </div>
        )}

        <div className={`mt-6 rounded-[20px] border-3 border-ink p-5 ${results ? (passCount === total ? "bg-sun" : passCount === 0 ? "bg-coral" : "bg-sun") : "bg-cream"}`}>
          {results ? (
            <>
              <div className="font-display text-[44px] font-extrabold leading-none tracking-[-0.03em]">
                {passCount}
                <span className="text-[22px] text-ink/60"> / {total}</span>
              </div>
              <p className="font-display mt-1.5 text-[13px] font-bold uppercase tracking-[0.1em]">airlines accept this bag</p>
            </>
          ) : (
            <p className="text-[15px] font-semibold">Enter valid dimensions to see results.</p>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="min-w-0">
        {/* Phone: one card per airline, verdict first */}
        {results && (
          <ul className="lg:hidden space-y-3">
            {results.map(({ airline, dimensionsOk, weightOk }) => {
              const fails = !dimensionsOk || weightOk === false;
              return (
                <li key={airline.slug} className={`rounded-[20px] border-3 border-ink p-4 ${fails ? "bg-coral/15" : "bg-white"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="font-display text-[17px] font-extrabold leading-tight">{airline.name}</div>
                      <div className="mt-1 text-[13px] text-ink/60">
                        {airline.measurement === "linear"
                          ? `${airline.maxLinearCm} cm total (L+W+H)`
                          : `${airline.maxCm?.join(" × ")} cm`}
                        {" · "}
                        {airline.maxWeightKg === null ? "no weight limit" : `${airline.maxWeightKg} kg`}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="font-display text-[11px] font-bold uppercase tracking-[0.1em] text-ink/55">Size</span>
                    <Status ok={dimensionsOk} />
                    <span className="font-display ml-2 text-[11px] font-bold uppercase tracking-[0.1em] text-ink/55">Weight</span>
                    <Status ok={weightOk} />
                  </div>
                  {airline.weightNote && <p className="mt-2 text-[12px] leading-snug text-ink/55">{airline.weightNote}</p>}
                </li>
              );
            })}
          </ul>
        )}

        {/* Desktop: the full table */}
        {results && (
          <div className="hidden lg:block overflow-x-auto rounded-[24px] border-3 border-ink bg-white">
            <table className="w-full text-[15px]">
              <thead>
                <tr className="font-display bg-ink text-cream text-[12px] uppercase tracking-[0.1em]">
                  <th className="text-left px-4 py-3.5 font-bold">Airline</th>
                  <th className="text-left px-4 py-3.5 font-bold">Max size</th>
                  <th className="text-left px-4 py-3.5 font-bold">Max weight</th>
                  <th className="text-left px-4 py-3.5 font-bold">Size</th>
                  <th className="text-left px-4 py-3.5 font-bold">Weight</th>
                </tr>
              </thead>
              <tbody>
                {results.map(({ airline, dimensionsOk, weightOk }) => {
                  const fails = !dimensionsOk || weightOk === false;
                  return (
                    <tr key={airline.slug} className={`border-b-3 border-ink/10 last:border-0 ${fails ? "bg-coral/10" : ""}`}>
                      <td className="px-4 py-3.5">
                        <div className="font-bold">{airline.name}</div>
                        <div className="text-[12px] text-ink/55">{airline.region}</div>
                      </td>
                      <td className="px-4 py-3.5 font-medium tabular-nums text-ink/80">
                        {airline.measurement === "linear"
                          ? `${airline.maxLinearCm} cm total (L+W+H)`
                          : `${airline.maxCm?.join(" × ")} cm`}
                      </td>
                      <td className="px-4 py-3.5 font-medium text-ink/80">
                        {airline.maxWeightKg === null ? "No published limit" : `${airline.maxWeightKg} kg`}
                        {airline.weightNote && <div className="mt-1 text-[12px] leading-snug text-ink/55 max-w-[22rem]">{airline.weightNote}</div>}
                      </td>
                      <td className="px-4 py-3.5"><Status ok={dimensionsOk} /></td>
                      <td className="px-4 py-3.5"><Status ok={weightOk} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <p className="mt-5 text-[13px] leading-relaxed text-ink/55 max-w-[46rem]">
          Limits are based on published airline cabin-baggage policies and may vary by fare class or route, or change
          without notice. Always confirm on the airline&apos;s own site before flying.
        </p>
      </div>
    </div>
  );
}
