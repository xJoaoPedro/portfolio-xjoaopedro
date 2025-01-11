/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'], // Analise os arquivos do Angular
  darkMode: 'class', // Ativar o suporte ao modo escuro baseado em classes
  theme: {
    fontFamily: {
      'sans': ["Montserrat", "sans-serif"]
    },
    extend: {
      colors: {
        'defdark': '#231F30',
        'defdark70': '#231F3070',
        'secdark': '#444657',
        'deflight70': '#FFFFFF70'
      },
      animation: {
        'move-arrow': 'moveArrow 3s ease-in-out 1s infinite',
      },
      keyframes: {
        moveArrow: {
          '0%, 100%': {
            transform: 'rotate(90deg) translateX(0)',
          },
          '50%': {
            transform: 'rotate(90deg) translateX(-30px)',
          },
        },
      },
    },
  },
  plugins: [],
};
