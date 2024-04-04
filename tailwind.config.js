/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryBlue: "#473BF0",
      textDark: "#161C2D",
      plainWhite: "#ffffff"
    },
    gridTemplateColumns: {
      basic12: "",
      desk: "140px repeat(10,1fr) 140px",
      basic12: "repeat(12, 1fr)",
    },
    fontFamily: {
      roboto: ["var(--font-roboto)"],
      rubik: ["--font-rubik"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        maxSectionWidth: "1110px",
      },
    },
  },
  plugins: [],
};
