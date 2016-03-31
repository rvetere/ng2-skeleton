var helpers = require('./helpers');
var prodConf = require('./webpack.prod.config');

/*
 * Config for a publishable website
 * with default values at webpack.prod.config
 */
module.exports = helpers.extendsConf({
   entry: {

      'polyfills': './src/polyfills.ts',
      'vendor': './src/vendor.ts',
      'main': './src/main.app.browser.ts'

   }
}, prodConf);
