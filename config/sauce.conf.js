// @AngularClass
require('ts-node/register');
var helpers = require('./helpers');

var browsers = require('./browsers'),
  creds = require('./creds');

var config = {
   specs: [
      helpers.root('src/**/**.e2e.ts'),
      helpers.root('src/**/*.e2e.ts')
   ],

  baseUrl: 'http://localhost:2300',
  allScriptsTimeout: 30000,
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 300000
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
};

config.baseUrl = 'http://rvetere.github.io'; // the relative /mojtio-impact will be appended in the tests
config.sauceUser = process.env.SAUCE_USERNAME || creds.sauceUser;
config.sauceKey = process.env.SAUCE_ACCESS_KEY || creds.sauceKey;

config.multiCapabilities = [
  browsers.chrome,
  //browsers.firefox, // not working with current zone.js event handlers injection
  browsers.ie9,
  browsers.ie10,
  //browsers.ie11, // old windows 7, working but not active by default
  browsers.ie11Win10,
  browsers.edge,
  //,
  browsers.safari
  //,
  //browsers.opera // not working with ng2 obviously
  //,
  //browsers.ios, // iPhone6
  //browsers.android // Nexus 7 HD
];

exports.config = config;
