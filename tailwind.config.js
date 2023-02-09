/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  	"./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#232323",
        "secondary": "#f49f1c",
        "gray": "#c3c3c3"
      },
      fontFamily: {
        nunito: ['Nunito', 'sans serif'],
        open: ['Open Sans', 'sans serif']
      }
    },
  },
  plugins: [],
}
