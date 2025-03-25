/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        colorChange: {
          '0%': { color: '#FF0000' },  // Red
          '25%': { color: '#FFA500' }, // Orange
          '50%': { color: '#008000' }, // Green
          '75%': { color: '#0000FF' }, // Blue
          '100%': { color: '#800080' } // Purple
        },
        bouncePulse: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        colorChange: 'colorChange 4s linear infinite',
        bouncePulse: 'bouncePulse 0.6s infinite',
      },
      fontFamily: {
        sarpatta: ['aa'],
        sura: ['Sura', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

