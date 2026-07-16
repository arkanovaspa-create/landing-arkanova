import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101B33",
        navy: "#0D1733",
        "navy-deep": "#080D1F",
        "navy-light": "#1C2C52",
        gold: "#C6A258",
        "gold-light": "#D9C08B",
        "gold-dark": "#A9823E",
        "gold-ink": "#836429",
        soft: "#FAF9F6"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(13, 23, 51, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
