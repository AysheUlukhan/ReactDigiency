/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens:{
    sm: '640px',

    md: '768px',

    lg: '1024px',

    xl: '1280px',

    '2xl': '1536px'
    },
    colors:{
      mysticRed: '#FF5300',
      onyx: '#373737',
      white :'#FFFFFF',
      floralWhite: '#FFF7F4',
      gray: '#7B7B7B',
      "vivid-cerise": '#E11A7D',
      BlackOlive : '#3C3B3A',
      raisinBlack : '#262524',
      black : '#1B1B18'
    },
    fontFamily:{
      Poppins : ['Poppins'],
      workSans : ['Work Sans'],
      sans: ["Source Sans Pro", "sans-serif"]
    },
    extend: {
      dropShadow: {
        '3xl': '0px 1px 10px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}
