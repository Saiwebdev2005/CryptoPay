/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        strongCyan:'rgb(244, 89, 5)',
        lightBlue:'rgb(251, 146, 36)',
        darkGrayishBlue:'rgb(251, 229, 85)',
        grayishBlue:'rgb(255, 225, 148)',
      },
      fontFamily:{
        sans:['Bai Jamjuree','sans-serif'],
      }
    },
  },
  plugins: [],
}

