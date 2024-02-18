/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '960px',
      lg: '1440px',
      slg: '1280px',
      xl: '1920px',
      '2xl': '2560px'
    }
  },
  plugins: [],
};
