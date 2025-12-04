/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#CDA434',  // Warm gold for ethnic luxury
        secondary: '#A52A2A',  // Deep maroon accent
        accent: '#F5F5DC',  // Beige for subtle elegance
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],  // Elegant titles
        body: ['Inter', 'sans-serif'],  // Clean body text
      },
    },
  },
  plugins: [],
};