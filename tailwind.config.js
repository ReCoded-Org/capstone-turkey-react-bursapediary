module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6A2C70',
        secondary: '#FEEEEE',
        gray: '#878787',
        bgmain: '#FCFCFC',
        primaryHover: '#803886',
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh',
      },
    },
  },
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
  // eslint-disable-next-line global-require
  plugins: [require('tw-elements/dist/plugin')],
};
