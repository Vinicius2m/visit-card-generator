import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      headingGrotesque: "var(--font-darker-grotesque)",
      headingRedHat: "var(--font-red-hat-display)",
      primary: "var(--font-nunito)",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        purple: {
          400: "#6C5AE0",
          500: "#4839A3",
          700: "#100C27",
        },
        yellow: {
          400: "#F4CA6D",
          500: "#F2BF4E",
        },
        black: "#212429",
        white: "#FFFFFF",
        gray: {
          200: "#F1F3F5",
          300: "#CFD3D8",
          400: "#97A1AC",
          500: "#7E8A98",
        },
      },
    },
  },
  plugins: [],
};
export default config;
