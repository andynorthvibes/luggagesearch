"use client";

import { useEffect, useMemo, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { AIRLINES } from "@/lib/airlines";

// True-to-scale gate-sizer models live in public/ar/sizers/<slug>.glb (generated
// from AIRLINES by scripts/make-sizer-glb.py). Airlines that only publish a
// linear (L+W+H) limit have no box shape, so they are left out here.
const SIZER_AIRLINES = AIRLINES.filter((a) => a.measurement === "dimensions" && a.maxCm).sort((a, b) =>
  a.name.localeCompare(b.name),
);

const MODEL_VIEWER_SRC = "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";

export default function ArSizerClient() {
  const [slug, setSlug] = useState("ryanair");

  // Deep links like /tools/ar-bag-sizer?airline=klm (read once on the client).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("airline");
    if (q && SIZER_AIRLINES.some((a) => a.slug === q)) setSlug(q);
  }, []);

  const airline = useMemo(() => SIZER_AIRLINES.find((a) => a.slug === slug) ?? SIZER_AIRLINES[0], [slug]);
  const [h, w, d] = airline.maxCm as [number, number, number];

  function choose(next: string) {
    setSlug(next);
    const url = new URL(window.location.href);
    url.searchParams.set("airline", next);
    window.history.replaceState(null, "", url.toString());
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
      <Script src={MODEL_VIEWER_SRC} type="module" strategy="afterInteractive" />

      <div className="space-y-6">
        <label className="block">
          <span className="font-display text-[14px] font-bold uppercase tracking-[0.1em] text-ink/60">Airline</span>
          <select
            value={airline.slug}
            onChange={(e) => choose(e.target.value)}
            className="mt-1.5 w-full rounded-xl border-3 border-ink bg-cream px-3 py-3 text-[17px] font-bold outline-none focus:bg-sun/40"
          >
            {SIZER_AIRLINES.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.name}
              </option>
            ))}
          </select>
        </label>

        <div className="rounded-2xl border-3 border-ink bg-sun p-5">
          <p className="font-display text-[13px] font-bold uppercase tracking-[0.12em]">Max cabin bag</p>
          <p className="font-display mt-1 text-[34px] font-extrabold tracking-tight tabular-nums">
            {h} × {w} × {d} cm
          </p>
          <p className="mt-1 text-[15px] font-semibold">
            {airline.maxWeightKg ? `Max weight ${airline.maxWeightKg} kg` : "No weight limit listed"}
          </p>
          {airline.weightNote && <p className="mt-2 text-[14px] font-medium text-ink/75">{airline.weightNote}</p>}
        </div>

        <ol className="space-y-3 text-[16px] font-medium leading-[1.5]">
          <li>
            <b>1.</b> Open this page on your phone and tap <b>View in your room</b>.
          </li>
          <li>
            <b>2.</b> Point the camera at the floor until the sizer appears at true size.
          </li>
          <li>
            <b>3.</b> Stand your real bag inside the frame (wheels and handles included). If it pokes out, it is too big.
          </li>
        </ol>

        <p className="text-[14px] font-medium text-ink/60">
          Prefer numbers?{" "}
          <Link href="/tools/carry-on-checker" className="font-bold underline underline-offset-2 hover:text-ink">
            Check your bag against all {AIRLINES.length} airlines
          </Link>
          .
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border-3 border-ink bg-cream">
        <model-viewer
          key={airline.slug}
          src={`/ar/sizers/${airline.slug}.glb`}
          alt={`True-to-scale 3D model of a ${airline.name} carry-on sizer, ${h} x ${w} x ${d} cm`}
          ar=""
          ar-modes="webxr scene-viewer quick-look"
          ar-scale="fixed"
          ar-placement="floor"
          camera-controls=""
          auto-rotate=""
          camera-orbit="-30deg 75deg auto"
          shadow-intensity="1"
          exposure="1.1"
          loading="eager"
          style={{ width: "100%", height: "min(70vh, 560px)", backgroundColor: "transparent" }}
        >
          <button
            slot="ar-button"
            className="font-display absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border-3 border-ink bg-sun px-6 py-3 text-[17px] font-extrabold shadow-[4px_4px_0_#15161a]"
          >
            View in your room
          </button>
        </model-viewer>
        <p className="font-display pointer-events-none absolute left-4 top-4 rounded-full border-3 border-ink bg-cream px-3 py-1 text-[12px] font-bold">
          Drag to rotate · AR on phones
        </p>
      </div>
    </div>
  );
}
