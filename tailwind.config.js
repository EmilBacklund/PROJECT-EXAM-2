/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/styles/*.css'],
  theme: {
    extend: {
      colors: {
        primaryRed: '#EB737A',
        secondaryOrange: '#FD7E40',
        textBlack: '#282828',
        holidazeGrey: '#9A9A9A',
        background: '#F8F4F2',
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
