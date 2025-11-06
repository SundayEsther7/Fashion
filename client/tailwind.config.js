/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B263B",      // Main deep navy
        secondary: "#415A77",    // Softer steel blue
        accent: "#70E000",       // Lime highlight //Careful with this one, it can be too bright
        neutralDark: "#2D2D2D",  // Body text / dark UI
        neutralLight: "#D9DDE1", // Light backgrounds / dividers
      },
    },
  },
  plugins: [],
}
