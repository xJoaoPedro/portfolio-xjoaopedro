/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'], // Analise os arquivos do Angular
  darkMode: 'class', // Ativar o suporte ao modo escuro baseado em classes
  theme: {
    fontFamily: {
      'sans': ["Montserrat", "sans-serif"]
    },
    extend: {
      boxShadow: {
        'unic': '2px 2px 15px #FFFFFF40'
      },
      colors: {
        'defdark': '#231F30',
        'defdark70': '#231F3070',
        'secdark': '#444657',
        'deflight70': '#FFFFFF70',
        'seclight': '#80808025',
        'night': '#09080C',
        'linkedin': '#0077B5',
        'github': '#171515',
        'whatsapp': '#25D366',
      },
      animation: {
        'move-arrow': 'moveArrow 3s ease-in-out 1s infinite',
      },
      keyframes: {
        moveArrow: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-30px)',
          },
        },
      },
    },
  },
  plugins: [],
};
