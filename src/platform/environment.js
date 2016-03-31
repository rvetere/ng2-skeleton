"use strict";
// Angular 2 browser
var browser_1 = require('angular2/platform/browser');
// Angular 2
var core_1 = require('angular2/core');
// Environment Providers
var PROVIDERS = [];
if ('production' === process.env.ENV) {
    // Production
    core_1.enableProdMode();
    PROVIDERS = PROVIDERS.concat([
        browser_1.ELEMENT_PROBE_PROVIDERS_PROD_MODE
    ]);
}
else {
    // Development
    PROVIDERS = PROVIDERS.concat([
        browser_1.ELEMENT_PROBE_PROVIDERS
    ]);
}
exports.ENV_PROVIDERS = PROVIDERS.slice();
//# sourceMappingURL=environment.js.map