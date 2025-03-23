import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Custom blue
        secondary: '#16A34A', // Custom green
        background: '#1A202C', // Custom dark background
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        '4xl': '2.25rem',
      },
      spacing: {
        '128': '32rem', // Custom spacing
      },
    },
  },
  plugins: [],
} satisfies Config;
