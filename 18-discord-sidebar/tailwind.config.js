/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#202225',
        secondary:'#5865f2',
        gray:colors.trueGray,
        gray:{
          900:'#202225',
          800:'#2f3136',
          700:'#36393f',
          600:'#4f545c',
          500:'#d4d7dc',
          400:'#e3e5e8',
          300:'#e3e5e8',
          200:'#ebedef',
          100:'#f2f3f5',
        }
      }
    },
  },
  plugins: [],
}
