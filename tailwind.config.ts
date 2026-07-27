import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "var(--brand-main)",
          light: "var(--brand-light)",
          dark: "var(--brand-dark)",
        },
        primary: {
          dark: "var(--primary-dark)",
          darker: "var(--primary-darker)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
