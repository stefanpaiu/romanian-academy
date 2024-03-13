/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    listStyleImage: {
      sandglass: 'url("/sand_glass.svg")',
    },
    extend: {
      colors: {
        "dark-grey": "#1D1D1D",
        "ro-blue": "#6895D2",
        "ro-red": "#D04848",
        "ro-orange": "#F3B95F",
        "ro-yellow": "#FDE767",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
