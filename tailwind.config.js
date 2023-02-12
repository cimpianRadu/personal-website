/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: "Playfair Display SC",
    },
    extend: {
      colors: {
        bgLinkedIn: "#0077b5",
        background: "#16161a",
        headline: "#fffffe",
        paragraph: "#94a1b2",
        button: "#7f5af0",
        buttonText: "#fffffe",
        blackStroke: "#010101",
        mainWhite: "#fffffe",
        highlight: "#7f5af0",
        secondaryGray: "#72757e",
        green: "#2cb67d",
      },
    },
  },
  plugins: [],
};
