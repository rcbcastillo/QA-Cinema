/** @type {import('tailwindcss').Config} */
module.exports = {
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
      'black': '#000000',
      'tesla-red': '#e31937',
      'gray' : {
        200: '#e5e7eb',
        500: '#6b7280',
      },
      'red': {
        500: '#ef4444',
      }
    },
    extend: {},
  },
  plugins: [],   
}
