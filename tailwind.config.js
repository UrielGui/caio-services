const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        defaultBlue: '#0C7CE3',
        defaultPurple: '#790FAB',
        defaultPink: '#DF0B7D',
        defaultBlack: '#232627',
        defaultBlack2: '#242327',
        defaultLightgreen: '#0CDFD2',
        defaultCyan: '#10A4C4',
      },
      backgroundImage: {
        'hero-section-background': "url('/img/hero-section-background.png')",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const main = {
        ':root': {
          backgroundColor: '#232627;',
        },
        '*:focus': {
          outline: 'none',
        },
        '::-webkit-scrollbar': {
          width: '8px',
        },
        '::-webkit-scrollbar-track': {
          background: '#0c0719',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundImage: 'linear-gradient(#c824ac, #1961f9, #00d1d2)',
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundImage: 'linear-gradient(#ad1895, #134ecc, #0cb3b3)',
        },
        '.default-container': {
          paddingRight: '3rem',
          paddingLeft: '3rem',
        },
      };
      addComponents(main);
    }),
  ],
};
