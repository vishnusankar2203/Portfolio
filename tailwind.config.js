/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { 950: "#0d0f11", 900: "#121518", 800: "#181c20", 700: "#232a30", 600: "#323b43" },
        accent: { DEFAULT: "#3ea6ff", dim: "#2b7dc0" },
        paper: "#e9edf0",
        mute: "#98a3ad"
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"IBM Plex Sans"', "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
