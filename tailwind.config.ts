import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#363636",
        graphite: "#363636",
        navy: "#26CFCD",
        steel: "#36B8C4",
        gold: "#FD871C",
        sand: "#F7FAFA",
        turquoise: "#26CFCD",
        aqua: "#36B8C4",
        orange: "#FD871C",
        soft: "#F7FAFA"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(54, 54, 54, 0.12)"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
