/*

https://github.com/postcss/postcss-cli#context
ctx = { env, file, options }

*/

module.exports = ctx => {

  const common = {
    tailwindcss: {},
    'postcss-preset-env': { /* NB: includes autoprefixer */
      stage: 3,
      features: {
        'nesting-rules': true,
      },
      // importFrom: [{
      //   customMedia: { /* NB: currently in stage 1 */

      //   },
      //   customProperties: {

      //   },
      // }],
      // exportTo: './predist/--vars--.css',
    },
  };

  return {
    noMap: true,
    plugins: { ...common }
  };
};
