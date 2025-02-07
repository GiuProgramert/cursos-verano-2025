/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-secondary": "rgba(0,0,0,0.39)"
      }
    },
    fontFamily: {
      "poppins": ["Poppins"],
      "volkhov": ["Volkhov"] 
    }
  },
  plugins: [],
}

