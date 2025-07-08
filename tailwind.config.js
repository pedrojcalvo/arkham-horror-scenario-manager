/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "arkham-dark": "#1a1a2e",
        "arkham-purple": "#16213e",
        "arkham-blue": "#0f3460",
        "arkham-gold": "#e94560",
        "arkham-light": "#f5f7fa",
      },
      fontFamily: {
        horror: ["Creepster", "cursive"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
