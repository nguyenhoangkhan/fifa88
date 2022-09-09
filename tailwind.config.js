/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: { DEFAULT: "#151515", text: "#082C3E" },
      white: { DEFAULT: "white" },
      blue: { DEFAULT: "#00B5FF" },
      darkBlue: { DEFAULT: "#141C31" },
      lightBlue: "#E8F6FC",
    },
    backgroundImage: {
      "gradient-blue":
        "linear-gradient(90.06deg, #00B5FF 19.6%, #007CAE 102.52%)",
      "balls-pattern":
        "url('https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2Fballs.png?alt=media&token=35ab159d-70cf-4a10-b049-84edb9b25c98')",
      "vector-pattern":
        "url('https://firebasestorage.googleapis.com/v0/b/fifa88-94963.appspot.com/o/images%2FVector.png?alt=media&token=c22eea11-070f-420e-9fc1-d0097d9c285a')",
    },
    fontFamily: {
      body: ["Roboto Condensed", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
