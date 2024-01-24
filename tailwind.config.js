/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {},
    colors: {
      white: '#FFF',
      dark: '#131318',
      dark60pct: '#13131899',
      lightDark: '#424247',
      tomato: '#FF4240',
      lightGreen: '#49D293',
      yellowGold: '#FFB546',
      royalBlue: '#4C8DF1',
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

