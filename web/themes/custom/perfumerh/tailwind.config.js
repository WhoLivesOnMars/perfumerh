/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./templates/**/*.twig",
    "./assets/**/*.{js,css}",
  ],
  theme: {
    extend: {
      colors: {
        phbg: "#f5efe6",
        phbglight: "#f9f6f1",
        phtext: "#3b2f2a",
        phtextlight: "#7f6f63",
        phaccent: "#b8945a",
        phborder: "#e2d6c7",
      },
      fontFamily: {
        main: ["Georgia", "Times New Roman", "serif"],
        alt: ["Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
