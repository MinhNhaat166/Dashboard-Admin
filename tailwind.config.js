/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-dracula')('dracula', true),
    require("daisyui"),
  ],

}

