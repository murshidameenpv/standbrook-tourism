/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merienda: ["Merienda", "sans-serif"],
        vollkorn: ["Vollkorn", "sans-serif"],
      },
      colors: {
        darkGreen: "#004D47",
        lightGreen: "#AEC905",
        cyan: "#00AA9E",
        orange: "#EE7C00",
        lightOrange: "#FF9A22",
        gray_text: "#6B6B6B",
      },
      backgroundImage: {
        "gradient-cyan-green":
          "linear-gradient(237deg, #00AA9E 0%, #004D47 100%)",
        gradient_blue_darkblue:
          "linear-gradient(245deg, #1374C4 0%, #000F0E 100%)",
      },
    },
  },
  plugins: [],
};
