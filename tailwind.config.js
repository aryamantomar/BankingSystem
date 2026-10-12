/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Axis Bank signature burgundy/maroon palette
        axis: {
          50: '#fdf3f6',
          100: '#fbe8ee',
          200: '#f8d2df',
          300: '#f2aec7',
          400: '#ea7ea6',
          500: '#dc4e83',
          600: '#c52e69',
          700: '#97144d', // Canonical Axis Bank Maroon
          800: '#801342',
          900: '#6d143b',
          950: '#40051e',
        },
        burgundy: {
          800: '#4d0b28',
          900: '#34061a',
          950: '#1e030e',
        },
        plum: {
          900: '#1b0914',
          950: '#0e030a',
        },
        gold: {
          300: '#fde68a',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(1deg)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'pulse-slow': 'glowPulse 4s ease-in-out infinite',
        shine: 'shine 4s linear infinite',
      }
    },
  },
  plugins: [],
}
