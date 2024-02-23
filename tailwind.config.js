// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        "samsung-sharp-sans": ["SamsungSharpSans", "sans-serif"],
      },
      colors: {
        buttonGreen: "#66DC90",
        gray: "#A6BBD1",
        darkBlue: "#0B3558",
        blue: "#006BFF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
