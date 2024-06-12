/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        primery: "#4E66EC",
      },
      fontFamily: {
        myFont: "Roboto, sans-serif",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
