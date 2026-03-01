/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['"DM Serif Display"', '"Grenze Gotisch"', 'serif'],
        accent: ['"Cinzel Decorative"', 'cursive'],
        body: ['"DM Serif Display"', '"Libre Baskerville"', 'serif'],
        milanesa: ['"DM Serif Display"', 'serif'],
      },
      colors: {
        renaissance: {
          burgundy: '#4A0404',
          gold: '#D4AF37',
          cream: '#F5E6D3',
          dark: '#1A0D0D',
          lightGold: '#E5C158',
        }
      }
    },
  },
  plugins: [],
};
