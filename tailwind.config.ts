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
        darkPurple: "#290742",
        lightPurple: "#9E6DC2",
        light: "#FBF6FF",
        green: "#4FFF4B",
      },
    },
  },
  plugins: [],
};
export default config;
