// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration


const { mergeWithRules } = require('webpack-merge');
const PnpWebpackPlugin = require('pnp-webpack-plugin');



const loaderElse =
  (rules, extPat, name, df) =>
  rules
  .reduce(
    (a, b) =>
    String(b.test) === String(extPat) ?
    [b.use].flat().filter(x => x) : a,
    []
  )
  .reduce(
    (a, b) =>
    b.loader.includes(name) ?
    b.loader : a,
    df
  );



/** @type {import("snowpack").SnowpackUserConfig} */
module.exports = {
  mount: {
    src: '/'
  },
  alias: {
    '~': './src'
  },
  routes: [
    { match: 'routes',
      src: '.*',
      dest: 'index.html'
    }
  ],
  plugins: [
    [ '@ampire/snowpack-plugin-postcss-extra' ],
    [ '@snowpack/plugin-webpack',
      { manifest: true,
        extendConfig: config => {

          //console.dir(config, { depth: 6});

          const extPatJs = /\.js$/;


          const loaderBabelElse =
            loaderElse(
              config.module.rules,
              extPatJs,
              'babel-loader',
              false
            );


          const config_ = {
            resolve: {
              plugins: [
                PnpWebpackPlugin
              ],
            },
            resolveLoader: {
              plugins: [
                PnpWebpackPlugin.moduleLoader(module),
              ],
            },
            module: {
              rules: [
                { test: extPatJs, use: [
                  { loader: loaderBabelElse,
                    options: {
                    plugins: [
                      '@babel/plugin-syntax-dynamic-import'
                    ]
                  }}
                ]}
              ]
            }
          };


          return mergeWithRules({
            resolve: {
              plugins: 'merge'
            },
            resolveLoader: {
              plugins: 'merge'
            },
            module: {
              rules: {
                test: 'match',
                use: {
                  loader: 'match',
                  options: {
                    plugins: 'merge'
                  },
                },
              },
            }
          })(config, config_);
        }
      }
    ]
  ],
  packageOptions: {

  },
  devOptions: {

  },
  buildOptions: {

  },
  // optimize: {
  //   bundle: true,
  //   minify: true,
  //   target: 'es2018'
  // }
};
