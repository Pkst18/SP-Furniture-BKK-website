/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': {
          DEFAULT: '#C5A35E',
          dark: '#8C703F',
          light: '#D4B87A',
        }
      }
    },
  },
  plugins: [],
}