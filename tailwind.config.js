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
        switchLanguageAnimator: 'onSwitchLanguage 1s ease-in-out',
        snowFalling: 'snowFalling 15s ease-in-out infinite',
        thunderOne: 'thunderOne 10s ease-in-out infinite',
        thunderTwo: 'thunderTwo 10s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

