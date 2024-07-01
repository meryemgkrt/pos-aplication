/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    gridTemplateColumns:{
      "card":"repeat(auto-fill, minmax(150px, 1fr))"
    },
    
      colors: {
        limeGreen: '#32CD32', // Lime Green
        greenYellow: '#ADFF2F', // Green Yellow
        customPurple: '#6c63ff' // Custom Purple
      },
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(to bottom, #6c63ff, #32CD32, #ADFF2F)',
      }),
    
    },
  },
  plugins: [],
}

