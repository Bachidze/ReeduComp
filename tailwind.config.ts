import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'custom-polygon': 'polygon(0% 99%, 73% 85%, 100% 52%, 99% 99%)',
      },
    },
  },
  plugins: [],
};
export default config;
