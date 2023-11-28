/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat"
      },    
      animation:{
        divisor: 'divisor 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

