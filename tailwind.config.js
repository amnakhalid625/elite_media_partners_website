/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        small: "450px",
        tablet: "768px",
        desktop: "1024px",
        large: "1280px",
        xlarge: "1536px",
      },
      colors: {
      primary: "#00555A",
      secondary: "#BBA04E",
      background: "#F9FAFB",
      text: "#ffffff",
      secondaryText:'#000000',
      border: "#DDDDDD",
      },
      
      
    },
  },
  plugins: [],
}

