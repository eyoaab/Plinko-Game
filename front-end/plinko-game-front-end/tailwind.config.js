/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        saira: ["Saira Stencil One", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        darkGray: "#323232",
        darkYellow: "#DDCA24",
        cardColor: "#323232",
        classBg: "#212121",
        footerColor: "#303030",
        blogText: "#E0E0E0",
      },
    },
  },
  plugins: [],
};
