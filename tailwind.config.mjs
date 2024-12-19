
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        btn: "#282b4a"
      },
      backgroundImage: {
        'hero': "url('/bg.png')"
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"], // Correctly formatted as an array
      },

    },
  },
  plugins: [],
};
