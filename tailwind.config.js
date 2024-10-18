/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "390px", // Custom breakpoint for very small devices
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1600px",
      'lg-xl': { 'min': '1024px', 'max': '1280px' },
      "1024x1366": { raw: "(min-width: 1024px) and (min-height: 1366px)" },
      "1024x600": { raw: "(min-width: 1024px) and (max-height: 600px)" },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      boxShadow: {
        "light-mode": "0 4px 14px rgba(0, 0, 0, 0.25)", // Dark grey/black for light mode
        "dark-mode": "0 4px 14px rgba(255, 255, 255, 0.25)", // Grey/white for dark mode
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
        120: "30rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
