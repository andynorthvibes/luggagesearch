// Small hand-drawn icon set (no external icon package — keeps the dependency tree light).
// Each icon is a plain inline SVG sized by its wrapper's font-size / explicit width+height.

// The site's mark: a suitcase with its own handle, plus a magnifying-glass
// badge overlapping the corner — "luggage" + "search" as two distinct,
// still-legible shapes rather than one fused (and easily misread) shape.
export function LuggageIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="10" width="14" height="11" rx="2" />
      <path d="M6.5 10V8.2a1.8 1.8 0 0 1 1.8-1.8h1.4a1.8 1.8 0 0 1 1.8 1.8V10" />
      <line x1="2" y1="15" x2="16" y2="15" />
      <circle cx="18" cy="7" r="4" />
      <line x1="20.8" y1="9.8" x2="22.5" y2="11.5" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

export function ListIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 6h.01M3 12h.01M3 18h.01" />
      <path d="M8 6h13M8 12h13M8 18h13" />
    </svg>
  );
}

export function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}
