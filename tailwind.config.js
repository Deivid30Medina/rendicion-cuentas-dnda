/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-dnda-card' : 'rgb(242 244 245)',
        'color-dnda': '#002552',
        'color-institucional' : '#3366CC',
        'color-hover-navbar' : '#2dc8ea',
        'color-dnda-oscuro' : '#004884',
        'color-icon-jurisdiccionales' : '#00D05A',
        'color-icon-capacitacion' : '#FF9852',
        'color-icon-administrativa' : '#FF1CAB',
        'color-icon-registro' : '#FFCE00',
        'color-icon-juridica' : '#00D1D1',
        'color-icon-conciliacion' : '#FF5555',
        'color-icon-ucsti' : '#B51CFD',
        'color-icon-controlInterno' : '#8C8C8C',
        'color-icon-jurisdiccionales-degradado' : 'rgb(0 208 90 / 15%)',
        'color-icon-capacitacion-degradado' : '#f8e5d9',
        'color-icon-administrativa-degradado' : 'rgb(255 28 171 / 15%)',
        'color-icon-registro-degradado' : 'rgb(255 206 0 / 15%)',
        'color-icon-juridica-degradado' : 'rgb(0 209 209 / 15%)',
        'color-icon-conciliacion-degradado' : 'rgb(255 85 85 / 15%)',
        'color-icon-ucsti-degradado' : 'rgb(181 28 253 / 15%)',
        'color-icon-controlInterno-degradado' : 'rgb(140 140 140 / 15%)',

      },
      borderWidth: {
        'custom-2': '2px', // Define un grosor de borde personalizado
      },
      borderColor: {
        'custom-black': '#a5a5a5', // Define el color del borde personalizado
      },
      fontFamily: {
        serif: ['Montserrat', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
