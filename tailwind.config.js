/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        clinic: {
          50: '#eff9fb',
          100: '#d9f0f4',
          200: '#b6e0e8',
          300: '#85c9d5',
          400: '#55adc0',
          500: '#2e8da1',
          600: '#256f80',
          700: '#1f5a68',
          800: '#194754',
          900: '#123541'
        }
      },
      boxShadow: {
        soft: '0 20px 55px rgba(15, 23, 42, 0.16)'
      }
    }
  },
  plugins: []
};
