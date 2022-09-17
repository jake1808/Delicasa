/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],

  content: [
    {transform: (content) => content.replace(/taos:/g, '')},
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        hero: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography"), require('taos/plugin')],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#111827",
          secondary: "#ffffff",
          accent: "#FF0000",
          neutral: "#191D24",
          "base-100": "#ffffff",
          info: "#FF0000",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "mytheme",
  },
};
