/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-washed-red': '#d60000',
        'mini-banner': '#111010'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      screens: {
        'hi': '900px',
        'si': '1070px',
      },
    },
  },
  plugins: [],
}

