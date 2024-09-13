import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

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
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities(newTypographyUtilities);
    },
  ],
};

const newTypographyUtilities = {
  ".heading-grotesque-lg": {
    "@apply font-headingGrotesque text-[40px] leading-[100%] font-black xl:text-[56px]":
      {},
  },
  ".heading-grotesque-md": {
    "@apply font-headingGrotesque text-[32px] leading-[100%] font-black xl:text-[40px]":
      {},
  },
  ".heading-grotesque-sm": {
    "@apply font-headingGrotesque text-[24px] leading-[110%] font-black xl:text-[32px]":
      {},
  },
  ".heading-grotesque-xs": {
    "@apply font-headingGrotesque text-[20px] leading-[110%] font-bold xl:text-[24px]":
      {},
  },
  ".heading-red-hat": {
    "@apply font-headingRedHat text-[24px] leading-[100%] font-bold xl:text-[40px]":
      {},
  },
  ".subtitle-sm": {
    "@apply font-primary text-[16px] leading-[140%] font-normal xl:text-[20px]":
      {},
  },
  ".subtitle-xs": {
    "@apply font-primary text-[14px] leading-[120%] font-normal": {},
  },
  ".body-lg": {
    "@apply font-primary text-[20px] leading-[150%] font-normal": {},
  },
  ".body-md": {
    "@apply font-primary text-[16px] leading-[150%] font-normal": {},
  },
  ".body-sm": {
    "@apply font-primary text-[14px] leading-[150%] font-normal": {},
  },
};
export default config;
