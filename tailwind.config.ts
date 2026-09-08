import type { Config } from "tailwindcss";

// LuggageSearch design system — "Boarding": bold flat colour blocks, thick ink
// outlines, hard offset shadows, characterful grotesque type.
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fbf6ec",
        ink: "#15161a",
        sun: "#f6c945",
        sky: "#2b5ce6",
        coral: "#f0634a",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        "hard-sm": "4px 4px 0 #15161a",
        hard: "8px 8px 0 #15161a",
        "hard-lg": "12px 12px 0 #15161a",
        "hard-coral": "6px 6px 0 #f0634a",
      },
    },
  },
  plugins: [],
};

export default config;
