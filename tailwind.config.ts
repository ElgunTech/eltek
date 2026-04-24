import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edf5ff",
          100: "#d6e7ff",
          500: "#2b6fff",
          600: "#205ce0",
          700: "#1c4bb5"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(15, 23, 42, 0.35)",
        glow: "0 0 0 1px rgba(255,255,255,0.2), 0 10px 40px rgba(43,111,255,0.35)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 20% 20%, rgba(43,111,255,0.25), transparent 35%), radial-gradient(circle at 85% 0%, rgba(96,165,250,0.22), transparent 40%), linear-gradient(180deg, rgba(15,23,42,0.95), rgba(15,23,42,0.7))"
      }
    }
  },
  plugins: []
};

export default config;
