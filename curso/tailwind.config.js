/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": {transform: 'translatey(0px)'},
          "50%": {transform: 'translatey(-8px)'},
          "100%": {transform: 'translatey(0px)'},
        }
      },
      animation: {
        float: 'float 1s infinite'
      },
      colors: {
        primaria: "#cccccc"
      }
    },
  },
  plugins: [],
}

