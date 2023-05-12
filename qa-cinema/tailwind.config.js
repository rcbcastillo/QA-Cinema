const withMT = require("@material-tailwind/react/utils/withMT")

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"], 
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // Dark green
      'pearl-aqua': '#84eab5',
      // Lighter green
      'japanese-indigo': '#234453',
      'white': '#ffffff',
      'metallic-steel': '#b5c0c9',
      'black': '#000000'
    },
    extend: {},
  },
  plugins: [],
})