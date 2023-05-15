const withMT = require("@material-tailwind/react/utils/withMT")

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ['node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'], 
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
  plugins: [
    require('flowbite/plugin')
  ],
})