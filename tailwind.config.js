/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      gray: "#6D6D6D",
      black: { DEFAULT: "#151515", text: "#082C3E", border: "#232C44" },
      white: { DEFAULT: "white" },
      blue: { DEFAULT: "#00B5FF" },
      primaryBlue: "#38ADDD",
      darkBlue: { DEFAULT: "#141C31" },
      lightBlue: "#E8F6FC",
      gradientPurpleBlue:
        "linear-gradient(135deg, #1C25E8 0%, #38ADDD 50.21%, #E715AF 100%)",
      "search-input": "rgba(204, 240, 255, 0.05)",
      transparent: "rgba(0, 0, 0, 0)",
      lightTransparent: "rgba(0, 0, 0, 0.3)",
      "box-shadow": { DEFAULT: "0px 6px 16px rgba(0, 0, 0, 0.3)" },
    },
    backgroundImage: {
      "gradient-blue":
        "linear-gradient(90.06deg, #00B5FF 19.6%, #007CAE 102.52%)",
      "gradient-purple":
        "background: linear-gradient(135deg, #1C25E8 0%, #38ADDD 50.21%, #E715AF 100%)",
      "gradient-blue2":
        "linear-gradient(134.36deg, #02B5FF -1.17%, #C31BFE 100%)",
      "balls-pattern":
        "url('https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fballs.png?alt=media&token=35ab159d-70cf-4a10-b049-84edb9b25c98')",
      "vector-pattern":
        "url('https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2FVector.png?alt=media&token=c22eea11-070f-420e-9fc1-d0097d9c285a')",
      "search-input": "black",
    },
    fontFamily: {
      body: ["Roboto Condensed", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
