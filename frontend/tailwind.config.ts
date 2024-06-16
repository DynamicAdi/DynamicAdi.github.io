import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light': 'rgb(214, 219, 220)',
        'upper-light': 'rgb(255, 255, 255)',
        'foreground-light': 'rgb(0, 0, 0)',
        'dark': 'rgb(8, 8, 8)',
        'upper-dark': 'rgb(20, 20, 20)',
        'foreground-dark': 'rgb(33, 33, 33)',
        'fore-upper': 'rgb(43, 43, 43)',
        // 'foreground-dark': 'rgb(255, 255, 255)',
      },
      fontFamily: {
        source: ['var(--source-sans)'],
        inter: ['var(--inter)'],
        local: ['var(--dm-sans)'],
      },
      transitionTimingFunction: {
        "bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
