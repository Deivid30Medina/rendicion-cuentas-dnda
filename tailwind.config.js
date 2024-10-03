/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-dnda': '#002552',
        'color-institucional' : '#3366CC',
        'color-hover-navbar' : '#2dc8ea'
      },
    },
  },
  plugins: [],
}