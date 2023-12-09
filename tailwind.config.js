/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors : {
        custom : {
          black : "#000000",
          grey : "#2F2F2F",
          "off-white" : "#E0E0E0",
          orange : "#F19305"
        }
      },
      fontFamily : {
        ss : ["seven-segment"]
      }
    },
  },
  plugins: [],
}

