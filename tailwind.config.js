const { babelIncludeRegexes } = require("next/dist/build/webpack-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundGreen: "#1B3431",
        backgroundYellow: "#FFD682",
        backgroundAmber: "#FFEBC1",
        backgroundLightAqua: "#3CAB900D",
        backgroundAqua: "#3CAB90",
        textDark: "#101828",
        textYellow: "#FFC727",
        textLightPrimary: "#475467",
        textLightSecondary: "#92989F",
        textGray: "#9e9e9e",
        textBlackPrimary: "#030303",
      },
      gridTemplateRows: {
        // Simple 16 row grid
        20: "repeat(20, minmax(0, 1fr))",
      },
    },
    gridTemplateColumns: {
      // Simple 16 row grid
      20: "repeat(20, minmax(0, 1fr))",
    },
  },
  plugins: [],
};
