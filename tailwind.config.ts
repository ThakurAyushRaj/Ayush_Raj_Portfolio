import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1918",
        "ink-soft": "#3E3B36",
        "ink-muted": "#5E5A52",
        "ink-border": "#D2CFC7",
        paper: "#F5F2EB",
        "paper-dim": "#EFECE6",
        "paper-bright": "#FAF8F3",
        "paper-warm": "#E8E4DA",
        "paper-deep": "#DED9CC",
        accent: "#A8382A",
        stamp: "#A8382A",
        "stamp-bright": "#C94534",
      },
      fontFamily: {
        serif: ["Libre Caslon Display", "Playfair Display", "Georgia", "serif"],
        display: ["Libre Caslon Display", "Playfair Display", "Georgia", "serif"],
        caslon: ["Libre Caslon Display", "Playfair Display", "Georgia", "serif"],
        grotesk: ["Space Grotesk", "Inter", "sans-serif"],
        sans: ["Inter", "Space Grotesk", "system-ui", "sans-serif"],
        gothic: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "JetBrains Mono", "monospace"],
      },
      animation: {
        grain: "grain 8s steps(10) infinite",
      },
      keyframes: {
        grain: {
          "0%,100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-10%)" },
          "20%": { transform: "translate(-15%,5%)" },
          "30%": { transform: "translate(7%,-25%)" },
          "40%": { transform: "translate(-5%,25%)" },
          "50%": { transform: "translate(-15%,10%)" },
          "60%": { transform: "translate(15%,0)" },
          "70%": { transform: "translate(0,15%)" },
          "80%": { transform: "translate(3%,35%)" },
          "90%": { transform: "translate(-10%,10%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
