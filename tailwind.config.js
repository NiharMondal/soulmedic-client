/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "8rem",
          // xl: "8rem",
          // "2xl": "8rem",
        },
      },
    },
  },
  plugins: [],
};
