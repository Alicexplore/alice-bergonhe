/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        '5xl': '3.3rem',
        '10xl': '9rem',
        '11xl': '11rem',
        '12xl': '13rem',
        '13xl': '15rem',
        '14xl': '17rem',
        '15xl': '20rem',
        '16xl': '30rem',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      rotate: {
        '360': '360deg',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}
