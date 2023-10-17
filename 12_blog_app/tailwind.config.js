/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  safelist: [
    {
      pattern:
        /bg-(slate|gray|zinc|neutral|stone|orange|amber|yellow|lime|green|emerald|teal|cyan|blue|violet|purple|fuchsia|pink|rose)-(50|100|500|600|700|800|900|950|500\/10|500\/20)/,
    },
    {
      pattern:
        /text-(slate|gray|zinc|neutral|stone|orange|amber|yellow|lime|green|emerald|teal|cyan|blue|violet|purple|fuchsia|pink|rose)-(500|600)/,
    },
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
