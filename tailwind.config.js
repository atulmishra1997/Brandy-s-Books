/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
    backgroundImage:{
      bookbg:"url(./src/assets/FavBookImg.png)"
    }
  },
  plugins: [require('flowbite/plugin')],
}