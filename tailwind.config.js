/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#F6E6D9',
        'fontColor': '#3C422E',
        'fillColor': '#FFF4EC',
        'hoverColor': '#D1E030'
      },
      fontFamily: {
        'header-font': ['EB Garamond', 'sans-serif'],
        'normal-font': ['Vesper Libre', 'sans-serif'],
        'discount-font': ['Mukta', 'sans-serif']
      }
    },
  },
  plugins: [],
}

