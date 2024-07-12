/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      transitionDelay:{
        "1":"1ms",
        "2000":"2000ms",
        "50":"50ms"
      }
    },
  },
  plugins: [],
}

