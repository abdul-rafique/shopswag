/** @type {import('tailwindcss').Config} */
const Colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: { light: "#3232A0", DEFAULT: "#040470" },
      accent: "#ff6c02",
      gray: Colors.gray,
      black: Colors.black,
      white: Colors.white,
      transparent: Colors.transparent,
    },
    extend: {
      listStyleType: {
        square: "square",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
