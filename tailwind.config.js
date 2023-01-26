/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontFamily: {
      poppins: ["'Poppins', 'sans-serif'"],
    },
    extend: {
      colors: {
        red: "hsl(0,100%,74%)",
        green: "hsl(154,59%,51%)",
        blue: "hsl(248,32% ,49%)",
        darkBlue: "hsl(249,10%,26%)",
        grayishBlue: "hsl(246,25%,77%)",
      },
    },
  },
  plugins: [],
};
