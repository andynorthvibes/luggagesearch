import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbf6ec",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 88,
              height: 88,
              borderRadius: 24,
              border: "5px solid #15161a",
              background: "#f6c945",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 800,
              color: "#15161a",
              boxShadow: "8px 8px 0 #15161a",
            }}
          >
            L
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#15161a" }}>
            LuggageSearch
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              color: "#15161a",
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            Will it fit? Find out in ten seconds.
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "4px solid #15161a",
                borderRadius: 999,
                padding: "10px 28px",
                background: "#2b5ce6",
                color: "#fbf6ec",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              53 airlines
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "4px solid #15161a",
                borderRadius: 999,
                padding: "10px 28px",
                background: "#f0634a",
                color: "#15161a",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              Free · no sign-up
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
