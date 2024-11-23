import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Inter", ...defaultTheme.fontFamily.serif],
        body: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: "#fff",
        darkGray: "#4d4d4d",
        green: "#00C165",
      },
      backgroundImage: {
        bannerImg: "url('/background2.jpg')",
        blackOverlay: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
      }
    },
  },
  plugins: [],
} satisfies Config;
