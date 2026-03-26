/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#FFFDF9',   // cream/off-white
          beige: '#F5F5DC',   // cream/off-white alternative
          primary: '#8B4513', // Warm espresso brown
          accent: '#E68A00',  // caramel orange
          brown: '#8B4513',   // Warm espresso brown
          dark: '#000000',    // black accents
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '6px 6px 0px 0px rgba(67, 20, 7, 1)', // for high-energy cards
        'brutal-hover': '2px 2px 0px 0px rgba(67, 20, 7, 1)',
      }
    },
  },
  plugins: [],
};
