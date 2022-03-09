module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'input-border': '#2B3444',
        'pink': '#D05663'
      }
    },    
  },
  plugins: [],
}
