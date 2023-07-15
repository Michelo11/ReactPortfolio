/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#225bdd",
        background: "#1c2230",
      },
      backgroundImage: {
        texture: "url('/img/background-texture.svg')",
        points: "url('/img/points.svg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        custom: {
          primary: "#225bdd",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
