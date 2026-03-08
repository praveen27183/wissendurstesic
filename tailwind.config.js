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
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite',
        'lightning': 'lightning 2s ease-out infinite',
        'sparkle': 'sparkle var(--duration, 1.5s) ease-out forwards'
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        lightning: {
          '0%, 100%': { opacity: '0' },
          '10%, 12%': { opacity: '0.8' },
          '14%': { opacity: '0' },
          '60%, 62%': { opacity: '0.6' },
          '64%': { opacity: '0' },
        },
        sparkle: {
          '0%': { transform: 'translate(0, 0) scale(0)', opacity: '0' },
          '20%': { transform: 'translate(calc(var(--tx) * 0.2), calc(var(--ty) * 0.2)) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(var(--tx), var(--ty)) scale(0)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
};
