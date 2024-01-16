/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        primery: "#ff0000",
      },
      fontFamily: {
        myFont: "Roboto, sans-serif",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
