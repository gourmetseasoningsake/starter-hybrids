// const plugin = require('tailwindcss/plugin');


module.exports = {

  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './src/index.html',
      './src/index.js',
      './src/settings.js',
      './src/elements/**/*.js',
      './src/pages/**/*.js'
    ],
  },

  darkMode: false, // or 'media' or 'class'

  theme: {
    screens: {
      'sm': '640px',
      // 'md': '768px',
      'lg': '1024px',
      // 'xl': '1280px',
      // '2xl': '1536px',
    },
    colors: {
      'black': '#191919',
      'white': '#fefefe'
    }
  },

  variants: {},
  plugins: [
    // plugin(function({ addUtilities, addComponents, e, prefix, config }) {
    //   const somn = {
    //     'somn-1': { ...css }
    //   };
    //
    //   addUtilities(somn);
    // })
  ],

  corePlugins: {
    float: false
  }
};
