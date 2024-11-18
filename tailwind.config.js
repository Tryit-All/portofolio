/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "background": "#353543",
      "primary-text": "#1D1E30",
      "accent-yellow": "#FFA733",
      "secondary-text": "#3F3F50",
      "social-accent": "#282833",
      "white": "#ffffff"

    },
    extend: {},
  },
  plugins: [],
}

