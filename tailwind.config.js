/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    extend: {},
    fontFamily:{
      jost:["Jost", "serif"],
      Lobster:["Lobster", "serif"]
    },
    container:{
      center: true,
      padding:{
        default: "12px",
        md:"32px"
      }
    }
  },
  plugins: [],
}