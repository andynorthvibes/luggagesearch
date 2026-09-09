// Hero illustration: a carry-on standing inside an airport cabin-bag sizer,
// stamped "Fits". Hand-drawn inline SVG in the Boarding palette so it stays
// crisp at any size and inherits the display font from the page.

const INK = "#15161a";
const CREAM = "#fbf6ec";
const SUN = "#f6c945";
const SKY = "#2b5ce6";
const CORAL = "#f0634a";

const FRAME_PATH = "M120 150 V622 Q120 652 150 652 H450 Q480 652 480 622 V150";

export default function HeroSizer({ className = "block h-full w-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 800"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A carry-on suitcase standing inside an airport cabin-bag sizer frame, stamped Fits"
      className={className}
    >
      <rect width="600" height="800" fill={SKY} />
      <rect x="0" y="652" width="600" height="148" fill={INK} opacity="0.12" />

      {/* height dimension */}
      <g stroke={CREAM} strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M78 165 V636" />
        <path d="M64 180 L78 165 L92 180" />
        <path d="M64 621 L78 636 L92 621" />
      </g>
      <g transform="translate(78 400) rotate(-90)">
        <rect x="-46" y="-19" width="92" height="38" rx="19" fill={CREAM} stroke={INK} strokeWidth="5" />
        <text className="font-display" x="0" y="8" textAnchor="middle" fontSize="22" fontWeight="800" fill={INK}>
          55 cm
        </text>
      </g>

      {/* width dimension */}
      <g stroke={CREAM} strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M140 118 H460" />
        <path d="M155 104 L140 118 L155 132" />
        <path d="M445 104 L460 118 L445 132" />
      </g>
      <rect x="254" y="99" width="92" height="38" rx="19" fill={CREAM} stroke={INK} strokeWidth="5" />
      <text className="font-display" x="300" y="126" textAnchor="middle" fontSize="22" fontWeight="800" fill={INK}>
        40 cm
      </text>

      {/* sizer frame: tubular U */}
      <path d={FRAME_PATH} fill="none" stroke={INK} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
      <path d={FRAME_PATH} fill="none" stroke={CREAM} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />

      {/* suitcase */}
      <g>
        <circle cx="206" cy="616" r="19" fill={INK} />
        <circle cx="394" cy="616" r="19" fill={INK} />
        <circle cx="206" cy="616" r="6" fill={CREAM} />
        <circle cx="394" cy="616" r="6" fill={CREAM} />
        <rect x="240" y="222" width="16" height="70" rx="6" fill={CREAM} stroke={INK} strokeWidth="6" />
        <rect x="344" y="222" width="16" height="70" rx="6" fill={CREAM} stroke={INK} strokeWidth="6" />
        <rect x="222" y="200" width="156" height="36" rx="18" fill={CREAM} stroke={INK} strokeWidth="8" />
        <rect x="158" y="282" width="284" height="326" rx="30" fill={CORAL} stroke={INK} strokeWidth="8" />
        <path d="M222 302 V588 M300 302 V588 M378 302 V588" stroke={INK} strokeWidth="5" strokeLinecap="round" opacity="0.35" />
        <rect x="158" y="432" width="284" height="30" fill={CREAM} stroke={INK} strokeWidth="7" />
        <rect x="272" y="426" width="56" height="42" rx="8" fill={INK} />
        <path d="M362 236 Q392 262 372 292" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <g transform="translate(372 292) rotate(14)">
          <rect x="-18" y="0" width="36" height="52" rx="8" fill={SUN} stroke={INK} strokeWidth="6" />
          <circle cx="0" cy="12" r="4" fill={INK} />
          <path d="M-9 28 H9 M-9 38 H9" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        </g>
      </g>

      {/* sign plate */}
      <rect x="150" y="686" width="300" height="82" rx="18" fill={INK} />
      <rect x="142" y="678" width="300" height="82" rx="18" fill={SUN} stroke={INK} strokeWidth="7" />
      <text className="font-display" x="292" y="708" textAnchor="middle" fontSize="16" fontWeight="800" letterSpacing="2.4" fill={INK}>
        MAX 1 × CABIN BAG
      </text>
      <text className="font-display" x="292" y="744" textAnchor="middle" fontSize="30" fontWeight="800" letterSpacing="-0.5" fill={INK}>
        55 × 40 × 20 cm
      </text>

      {/* FITS sticker */}
      <g transform="translate(468 78) rotate(9)">
        <rect x="-84" y="-30" width="176" height="64" rx="32" fill={INK} />
        <rect x="-90" y="-36" width="176" height="64" rx="32" fill={SUN} stroke={INK} strokeWidth="7" />
        <path d="M-66 -4 L-52 10 L-30 -16" fill="none" stroke={INK} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <text className="font-display" x="22" y="7" textAnchor="middle" fontSize="30" fontWeight="800" letterSpacing="1" fill={INK}>
          FITS
        </text>
      </g>
    </svg>
  );
}
