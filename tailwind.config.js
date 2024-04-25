/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/src/assets/images/header.jpeg')"
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

