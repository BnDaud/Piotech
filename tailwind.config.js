/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url(./staticimages/39.jpg)",
      },
      colors: {
        general_blue: "#18203D",
        amber_gold: "#FBC507",
      },
    },
  },
  plugins: [],
};
