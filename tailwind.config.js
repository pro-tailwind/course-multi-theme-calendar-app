const defaultTheme = require('tailwindcss/defaultTheme')

// ------------------------------
// Plugins
// ------------------------------
const bgStripesPlugin = require('./plugins/bg-stripes')
const squareDiagonalPlugin = require('./plugins/square-diagonal')
const multiThemePlugin = require('./plugins/multi-theme')

/*
  ------------------------------
  TODO:
  1. Require the multi-theme plugin from `./plugins/multi-theme`, 
  so you can register it in the config's plugins array.
  ------------------------------
*/

// ------------------------------
// Tailwind config
// ------------------------------
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      width: {
        100: '25rem',
      },
    },
  },

  /*
  ------------------------------
  TODO:
  2. Register the new plugin below
  ------------------------------
*/
  plugins: [bgStripesPlugin, squareDiagonalPlugin, multiThemePlugin],
}
