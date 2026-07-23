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
          primary: '#0F172A',
          secondary: '#2563EB',
          accent: '#14B8A6',
          bg: '#F8FAFC',
          dark: '#0B0F19',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(15, 23, 42, 0.06), 0 1px 3px 0 rgba(15, 23, 42, 0.03)',
        'premium-hover': '0 20px 40px -15px rgba(15, 23, 42, 0.12), 0 1px 5px 0 rgba(15, 23, 42, 0.05)',
        'accent-shadow': '0 10px 20px -5px rgba(20, 184, 166, 0.15)',
        'secondary-shadow': '0 10px 20px -5px rgba(37, 99, 233, 0.15)',
      }
    },
  },
  plugins: [],
}
