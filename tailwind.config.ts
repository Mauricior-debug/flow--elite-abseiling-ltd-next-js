import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-secondary": "var(--color-bg-secondary)",
        "bg-elevated": "var(--color-bg-elevated)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        cta: "var(--color-cta)",
        "cta-hover": "var(--color-cta-hover)",
        line: "var(--color-line)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "42rem",
        measure: "65ch",
        site: "72rem",
        wide: "90rem",
      },
      spacing: {
        section: "clamp(4.5rem, 10vw, 8.5rem)",
        gutter: "clamp(1.25rem, 4vw, 2.5rem)",
      },
      fontSize: {
        body: ["1.0625rem", { lineHeight: "1.7" }],
        lead: ["1.1875rem", { lineHeight: "1.65" }],
        display: [
          "clamp(2.75rem, 8vw, 5.75rem)",
          { lineHeight: "0.95", letterSpacing: "-0.03em" },
        ],
        "display-sm": [
          "clamp(2.1rem, 5vw, 3.75rem)",
          { lineHeight: "1.02", letterSpacing: "-0.025em" },
        ],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(1.25rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slow-zoom": {
          from: { transform: "scale(1.06)" },
          to: { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-up-delay": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both",
        "fade-up-late": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both",
        "fade-in": "fade-in 1.1s ease both",
        "slow-zoom": "slow-zoom 8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
