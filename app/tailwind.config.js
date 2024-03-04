/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg-color": "#E7F6F2",
        "columnBgColorLight": "#D2E9E9" ,
        "columnBgColorDark": "#9DB2BF" , 
        "columnBgColorDrag": "#778892" ,
      }
    },
  },
  plugins: [],
}

