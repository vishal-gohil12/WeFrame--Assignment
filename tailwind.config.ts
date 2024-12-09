import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-pink': '#EE4197'
      },
      fontFamily: {
        geist: ['Geist', 'sans-serif'], 
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
