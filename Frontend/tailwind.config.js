/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure all relevant files are scanned
  ],
  theme: {
    extend: {
      colors: {
        primary: "#db7bc3", // Custom color
      },
      gridTemplateColumns: {
        'auto': "repeat(auto-fill, minmax(200px, 1fr))", // Custom grid template
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};


