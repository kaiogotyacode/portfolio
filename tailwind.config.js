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
        thunderOne: 'thunderOne 6s ease-in-out infinite',
        thunderTwo: 'thunderTwo 9s ease-in-out infinite',
        neonPulse: 'neonPulse 3s ease-in-out infinite',
        neonTitlePulse: 'neonTitlePulse 4s ease-in-out infinite',
        neonBorderFlow: 'neonBorderFlow 4s ease-in-out infinite',
        neonFlicker: 'neonFlicker 8s linear infinite'
      }
    },
  },
  plugins: [],
}

