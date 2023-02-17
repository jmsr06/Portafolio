/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./estilos.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#06223F",
        bg_light_primary: "#FFF8F5",
        gray: "#B7C5D3",
        uismarket: "#68B83E"
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #FBE9E3 0.48%, #f9f0ed 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [],
};
