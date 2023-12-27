/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'flower':['Carattere', 'cursive'],
      'prime': ['Cormorant SC', 'serif'],
      'second':['Raleway', 'sans-serif']
    },
    colors:{
      'primary':'#7895b2',
      'primaryT':'#7895b1',
      'secondary': '#f5efe6',
      'third':'#e8dfca',
    },
    extend: {},
  },
  plugins: [],
}

