/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
      {
        "homeimage" :"url(../images/Home.jpg)"
      }
    },
    screens: 
    {
      'md' : '1000px'
    }
  },
  plugins: [],
}