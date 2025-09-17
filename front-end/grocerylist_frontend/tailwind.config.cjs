/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-grey': '#f5f5f5',
        'button-green': '#4caf50',
        'link-blue': '#38b6ff',
        'light-orange': '#ffe2b6',
        'orange-highlight': '#ffbd59',
        'light-yellow':'#fff8da',
        'light-blue': '#dbf0f8',
        'blue-add': '#4d9dcd',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        poppins: ['Poppins', 'sans-serif'],
      },

      fontSize: {
        'xxs': '0.62rem',
      },

      width: {
        '76': '310px',
      },
      height: {
        '100': '550px',
      },
    },
  },
  plugins: [],
};

