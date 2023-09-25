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
  daisyui: {
    themes: [
      "night",
      {
        synthwave: {
          primary: "#e679c0",
          "primary-focus": "#e04dac",
          "primary-content": "#201047",

          secondary: "#54c5f2",
          "secondary-focus": "#88d7f7",
          "secondary-content": "#201047",

          accent: "#f3cc30",
          "accent-focus": "#f6d860",
          "accent-content": "#201047",

          neutral: "#20134e",
          "neutral-focus": "#140a2e",
          "neutral-content": "#f9f7fd",

          "base-100": "#2c1a65",
          "base-200": "#20134e",
          "base-300": "#140a2e",
          "base-content": "#f9f7fd",

          info: "#4fbff3",
          success: "#71ead2",
          warning: "#f3cc30",
          error: "#e13d53",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
} satisfies Config;
