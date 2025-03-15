/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "275px", // mobile => @media (min-width: 375px)
      sm: "768px", //  tablet portrait => @media (min-width: 720px)
      md: "1024px", // tablet paysage => @media (min-width: 1020px)
      lg: "1440px", // laptop => @media (min-width: 1435px)
      xl: "1920px", // desktop => @media (min-width: 1915px)
    },
    extend: {
      /* TODO METTRE LES COULEURS DE ONLYFLAN QUAND ON LES AURA */
      colors: {
        white: "#FFF",
        black: "#000",
        bgDark: "#1E1E1E",
        main: {
          DEFAULT: "#FFD161",
          hover: "#FFBA45",
          active: "#E6C053",
          altLight: "#FFF4E1",
          altDark: "#D9B44A",
        },
        secondary: {
          DEFAULT: "#FA9023",
          hover: "#E97818",
          active: "#D16F15",
          altLight: "#FA9023",
          altDark: "#FA9023",
        },
        border: {
          light: "#F1CEA1",
          dark: "#B85C0E",
        },
        text: { DEFAULT: "#46320F", light: "#F5F5F5" },
      },
    },
  },
  plugins: [],
};
