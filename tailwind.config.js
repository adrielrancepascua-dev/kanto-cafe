/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          beige: '#EFE6DD',
          brown: '#5D4037',
          cream: '#F9F7F2',
          light: '#F9F7F2', // Alias for backward compatibility
          accent: '#A1887F',
          dark: '#3E2723',
          muted: '#D7CCC8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
