const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        green: "#dbefe1",
        blue: "#d5e5f5",
        purple: "#dcbdf8",
        yellow: "#fef4ca",
        red: "#fabec0",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
    animation: {
      fadeIn: "fadeIn 0.5s ease-in-out",
    },
  },
  safelist: ["bg-green", "bg-blue", "bg-purple", "bg-yellow", "bg-red"],
  plugins: [require("@tailwindcss/typography")],
};
