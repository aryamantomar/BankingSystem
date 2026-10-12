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
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bcddfe',
          300: '#8ec7fd',
          400: '#58a7fa',
          500: '#3185f4',
          600: '#1b67e8',
          700: '#1552d5',
          800: '#1742ac',
          900: '#183a88',
          950: '#0c1b40',
        },
        navy: {
          800: '#0f172a',
          900: '#0b1120',
          950: '#050814',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
