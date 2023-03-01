/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
        //secondary
        macaw: "#1CB0F6",
        cardinal: "#FF4B4B",
        bee: "#FFC800",
        fox: "#FF9600",
        beetle: "#CE82FF",
        humpack: "#2B70C9",
        // neutrals colors
        eel: "#4B4B4B",
        wolf: "#777777",
        hare: "#AFAFAF",
        swan: "#E5E5E5",
        polar: "#F7F7F7",
        snow: "#FFFFFF",
      },
      backgroundImage: {
        "react-native": "url('/reactnative.gif')",
      },
    },
  },
  plugins: [],
};
