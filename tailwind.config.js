/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropFilter: ['hover','focus'],
      backgroundImage:
      {
        "homeimage" :"url(../images/Home.jpg)"
      }
    },
    screens:
    {
      'md' : '1000px',
      'tablet' : '780px',
      'laptop' : '1100px'
    }
  },
  plugins: [
  ],
}
