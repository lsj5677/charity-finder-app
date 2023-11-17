/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBeige: "#eee2dc",
        pointBeige: "#edc7b7",
        mainGray: "#bab2b5",
        pointRed: "#ac3b61",
        pointNavy: "#123c69",
      },
    },
  },
  plugins: [],
};
