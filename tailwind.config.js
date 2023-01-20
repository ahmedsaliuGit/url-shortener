/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "v-dark-violet": "hsl(260, 8%, 14%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "c-cyan": "hsl(180, 66%, 49%)",
      },
    },
  },
  plugins: [],
};
