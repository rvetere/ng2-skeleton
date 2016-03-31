exports.chrome = {
  name: 'Chrome',
  browserName: 'chrome'
};

exports.firefox = {
  name: 'Firefox',
  browserName: 'firefox',
  version: '44.0'
};

exports.safari = {
  name: 'Safari',
  browserName: 'safari',
  platform: 'OS X 10.11',
  version: '9.0'
};

exports.ie8 = {
  name: 'IE 8',
  browserName: 'internet explorer',
  platform: 'Windows XP',
  version: '8.0',
  tags: ['ie']
};

exports.ie9 = {
  name: 'IE 9',
  browserName: 'internet explorer',
  version: '9.0',
  tags: ['ie']
};

exports.ie10 = {
  name: 'IE 10',
  browserName: 'internet explorer',
  version: '10.0',
  tags: ['ie']
};

exports.ie11 = {
  name: 'IE 11',
  browserName: 'internet explorer',
  platform: 'Windows 7',
  version: '11.0',
  tags: ['ie']
};

exports.ie11Win10 = {
  name: 'IE 11',
  browserName: 'internet explorer',
  platform: 'Windows 10',
  version: '11.0',
  tags: ['ie']
};

exports.edge = {
  name: 'Edge',
  browserName: 'MicrosoftEdge',
  platform: 'Windows 10',
  version: '20.10240',
  tags: ['edge']
};

exports.opera = {
  name: 'Opera12',
  browserName: 'opera',
  platform: 'Windows 7',
  version: '12.12',
  tags: ['opera']
};

// iOS for local or Sauce Labs (via Appium)
exports.ios = {
  name: 'iOS 9 - iPhone6 Plus',
  browserName: 'Safari',
  appiumVersion: '1.5.0',
  deviceName: 'iPhone 6 Plus',
  deviceOrientation: 'portrait',
  platformVersion: '9.2',
  platformName: 'iOS',
  tags: ['ios']
};
exports.android = {
  name: 'Android 4.4 - Nexus 7 HD',
  browserName: 'Browser',
  appiumVersion: '1.5.0',
  deviceName: 'Google Nexus 7 HD Emulator',
  deviceOrientation: 'portrait',
  platformVersion: '4.4',
  platformName: 'Android',
  tags: ['android']
};
