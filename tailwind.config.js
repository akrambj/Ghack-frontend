// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        "samsung-sharp-sans": ["SamsungSharpSans", "sans-serif"],
      },
      colors: {
        Green100: "#66DC90",
        Gray66: "#A6BBD1",
        Gray100: "#476788",
        Typo: "#0B3558",
        Blue100: "#006BFF",
        Gray10: "#F8F9FB",
        Blue10: "#F3FAFF",
        cardBg: "#FCFCFD",
      },
      dropShadow: {
        card: [
          "0 26px 93px rgba(0, 0, 0, 0.0)",
          "0 24px 60px rgba(0, 0, 0, 0.0)",
          "0 20px 34px rgba(0, 0, 0, 0.01)",
          "0 15px 15px rgba(0, 0, 0, 0.02)",
          "0 8px 4px rgba(0, 0, 0, 0.02)",
        ],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
