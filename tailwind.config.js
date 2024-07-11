/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: "var(--font-futura)",
        univers55: "var(--font-univers55)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        deathloop_orange: "#cf5d20",
        deathloop_green: "rgb(15, 124, 15)",
        deathloop_orange_hover: "rgb(186, 83, 28)",
        youtube_red: "rgb(229, 0, 0)",
      },
      textColor: {
        deathloop_orange: "#cf5d20",
      },
      height: {
        "28vh": "28vh",
        "70vh": "70vh",
        "100vh": "100vh",
        "1000px": "1000px",
      },
      minHeight: {
        "120vh": "120vh",
        "40vh": "40vh",
      },
      boxShadow: {
        round: "0px 25px 17px -6px rgba(0, 0, 0, .2)",
      },
    },
  },
  plugins: [],
};
