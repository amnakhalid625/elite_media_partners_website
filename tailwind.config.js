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
      primary: "#A71F25",
      secondary: "#133557",
      accent: "#FF5722",
      background: "#F5F5F5",
      text: "#333333",
      muted: "#888888",
      border: "#DDDDDD",
      },
      boxShadow: {
        "box-shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "box-shadow-md": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "box-shadow-lg": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }
      
    },
  },
  plugins: [],
}

