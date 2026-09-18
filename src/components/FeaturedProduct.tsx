import Image from "next/image";
import { ArrowIcon } from "./icons";

// "Featured partner" product spotlight -- used for the Ekster TravelPack
// partnership (see lib/eksterFeature.ts). Distinct from AmazonPicks: this is
// a single, paid brand-direct placement with a photo, not a list of
// search/verified Amazon links, so it gets its own visible "Featured partner"
// tag rather than blending in as a regular pick. Relies on the site-wide
// affiliate disclosure in the footer (see Footer.tsx) rather than repeating
// its own disclosure copy inline.
export default function FeaturedProduct({
  name,
  tagline,
  bullets,
  badges,
  image,
  href,
  ctaLabel = "See it on Ekster",
  compact = false,
}: {
  name: string;
  tagline: string;
  bullets: string[];
  badges?: string[];
  image: string;
  href: string;
  ctaLabel?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`my-10 grid overflow-hidden rounded-[28px] border-3 border-ink bg-cream shadow-hard ${
        compact ? "sm:grid-cols-[220px_1fr]" : "lg:grid-cols-2"
      }`}
    >
      <div
        className={`relative border-b-3 border-ink sm:border-b-0 sm:border-r-3 ${
          compact ? "aspect-[4/3] sm:aspect-auto" : "aspect-[4/3] lg:aspect-auto lg:min-h-[320px]"
        }`}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes={compact ? "(min-width: 640px) 220px, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
          className="object-cover"
        />
        <span className="font-display absolute top-4 left-4 rounded-full border-3 border-ink bg-sun px-3 py-1 text-[12px] font-bold">
          Featured partner
        </span>
      </div>
      <div className={compact ? "p-6" : "p-8 sm:p-10"}>
        <p className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-ink/60">{tagline}</p>
        <h3
          className={`font-display mt-2 font-extrabold tracking-[-0.02em] leading-tight ${
            compact ? "text-[22px]" : "text-[28px] sm:text-[34px]"
          }`}
        >
          {name}
        </h3>
        {badges && badges.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="font-display inline-flex items-center rounded-full border-3 border-ink bg-white px-3 py-1 text-[11px] font-bold"
              >
                {b}
              </span>
            ))}
          </div>
        )}
        <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink/80">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span aria-hidden="true">&bull;</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="font-display mt-6 inline-flex items-center gap-2 rounded-full border-3 border-ink bg-ink px-6 py-3 text-[15px] font-bold text-cream transition-transform hover:-translate-y-0.5"
        >
          {ctaLabel} <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
