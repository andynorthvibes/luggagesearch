import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #2dd4bf 0%, #0d9488 55%, #f97316 100%)",
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="10" width="14" height="11" rx="2" />
          <path d="M6.5 10V8.2a1.8 1.8 0 0 1 1.8-1.8h1.4a1.8 1.8 0 0 1 1.8 1.8V10" />
          <line x1="2" y1="15" x2="16" y2="15" />
          <circle cx="18" cy="7" r="4" />
          <line x1="20.8" y1="9.8" x2="22.5" y2="11.5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
