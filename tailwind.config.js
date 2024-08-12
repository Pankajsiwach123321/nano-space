/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        md: '18px',
        'custom-5xl':'66px',
        'custom-4xl':'45px'
      },
      fontFamily: {
        'saira': ['Saira', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
        },
      },
      colors: {
        'gray-light': '#D9D9D9',
        'gray-lose': '#CCCCCC',
        'light-blue': '#2253F5',
        'low-black': '#111111',
        'less-blue': '#5893FF',
      },
      dropShadow: {
        sm: '0px 7px 10.9px 0px #0000002E',
        md: '1px 1px 2px 0px #00000040',
        text: '0.5px 0.5px 2px 0px #00000040',
      },
      backgroundImage: {
        'hero': 'url(./assets/images/webp/bg-hero.webp)'
      },
      backgroundSize: {
        full: '100% 100%'
      },
      
    },
  },
  plugins: [],
}

