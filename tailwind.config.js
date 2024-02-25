import FluidTypePlugin from "tailwindcss-fluid-type";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // https://hihayk.github.io/scale/#4/5/75/75/34/9/57/16/FE745E/254/116/94/d-0
      colors: {
        red: {
          50: '#FFCBCC',
          100: '#FFB2B0',
          200: '#FF9D97',
          300: '#FF8C82',
          400: '#FF7F6E',
          500: '#FE745E',
          600: '#CF4A4A',
          700: '#9F3747',
          800: '#70253C',
          900: '#401428',
        },
      },
    },
  },
  plugins: [FluidTypePlugin],
}

