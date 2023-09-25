import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "app.{js,ts,vue}",
  ],
  theme: {
    screens: {
      sm: "640px", // => @media (min-width: 640px) { ... }

      md: "768px", // => @media (min-width: 768px) { ... }

      lg: "1024px", // => @media (min-width: 1024px) { ... }

      xl: "1280px", // => @media (min-width: 1280px) { ... }

      "2xl": "1536px", // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        "3xl": "1920px", // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {},
} satisfies Config;
