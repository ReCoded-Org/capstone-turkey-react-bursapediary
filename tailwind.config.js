module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        xsnav: { max: '639px' }, // Mobile (iPhone 3 - iPhone XS Max).
        smnav: { min: '640px', max: '767px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        mdnav: { min: '768px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
        lgnav: { min: '1200px' }, // Desktop smallest.
        xlnav: { min: '1159px' }, // Desktop wide.
        xxlnav: { min: '1359px' }, // Desktop widescreen.
      },
      colors: {
        main: '#FCFCFC',
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
  // eslint-disable-next-line global-require
  plugins: [require('tw-elements/dist/plugin')],
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
};
