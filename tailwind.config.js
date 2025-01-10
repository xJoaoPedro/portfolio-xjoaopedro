/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'], // Analise os arquivos do Angular
  darkMode: 'class', // Ativar o suporte ao modo escuro baseado em classes
  theme: {
    extend: {
      colors: {
        'defdark': '#231F30',
        'secdark': '#444657'
      }
    },
  },
  plugins: [],
};
