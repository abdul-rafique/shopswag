/** @type {import('tailwindcss').Config} */
const Colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#040470",
        accent: "#ff6c02",
        gray: Colors.gray,
        black: Colors.black,
      },
    },
  },
  plugins: [],
};
