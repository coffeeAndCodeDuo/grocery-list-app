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
        'link-blue': '#38b6ff'
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        poppins: ['Poppins', 'sans-serif'],
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

