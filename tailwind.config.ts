import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   "#0a0a0f",
          secondary: "#0f1117",
          tertiary:  "#161b27",
        },
        accent: {
          DEFAULT: "#00d4c8",
          dim:     "#00a89e",
          glow:    "#00d4c820",
        },
        indigo: {
          soft: "#7c8cff",
          dim:  "#5a6bdb",
        },
        text: {
          primary:   "#f0f2f5",
          secondary: "#8b9ab5",
          muted:     "#4a566e",
        },
        border: {
          DEFAULT: "#1e2740",
          light:   "#2a3555",
        },
      },
      fontFamily: {
        sans:    ["var(--font-geist-sans)", "sans-serif"],
        mono:    ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,212,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,200,0.03) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,212,200,0.12), transparent)",
      },
      backgroundSize: {
        "grid-pattern": "40px 40px",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.4" },
          "50%":     { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;