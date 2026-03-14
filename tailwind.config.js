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
        },
        st: {
          dark: '#0b0b0f',
          red: '#e50914',
          blue: '#1f51ff',
          purple: '#1a0b2e',
        }
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite',
        'lightning': 'lightning 2s ease-out infinite',
        'sparkle': 'sparkle var(--duration, 1.5s) ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'star-movement-bottom': 'star-movement-bottom linear infinite',
        'star-movement-top': 'star-movement-top linear infinite',
        'glitch-after': 'glitch-clip var(--after-duration) infinite linear alternate-reverse',
        'glitch-before': 'glitch-clip var(--before-duration) infinite linear alternate-reverse',
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
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
        'glitch-clip': {
          "0%": { "clip-path": "inset(20% 0 50% 0)" },
          "5%": { "clip-path": "inset(10% 0 60% 0)" },
          "10%": { "clip-path": "inset(15% 0 55% 0)" },
          "15%": { "clip-path": "inset(25% 0 35% 0)" },
          "20%": { "clip-path": "inset(30% 0 40% 0)" },
          "25%": { "clip-path": "inset(40% 0 20% 0)" },
          "30%": { "clip-path": "inset(10% 0 60% 0)" },
          "35%": { "clip-path": "inset(15% 0 55% 0)" },
          "40%": { "clip-path": "inset(25% 0 35% 0)" },
          "45%": { "clip-path": "inset(30% 0 40% 0)" },
          "50%": { "clip-path": "inset(20% 0 50% 0)" },
          "55%": { "clip-path": "inset(10% 0 60% 0)" },
          "60%": { "clip-path": "inset(15% 0 55% 0)" },
          "65%": { "clip-path": "inset(25% 0 35% 0)" },
          "70%": { "clip-path": "inset(30% 0 40% 0)" },
          "75%": { "clip-path": "inset(40% 0 20% 0)" },
          "80%": { "clip-path": "inset(20% 0 50% 0)" },
          "85%": { "clip-path": "inset(10% 0 60% 0)" },
          "90%": { "clip-path": "inset(15% 0 55% 0)" },
          "95%": { "clip-path": "inset(25% 0 35% 0)" },
          "100%": { "clip-path": "inset(30% 0 40% 0)" },
        },
      }
    },
  },
  plugins: [],
};
