"use strict";
/*
 * Providers provided by Angular
 */
var browser_1 = require('angular2/platform/browser');
var angular2_hmr_1 = require('angular2-hmr');
/*
 * Platform and Environment
 * our providers/directives/pipes
 */
var browser_2 = require('./platform/browser');
var environment_1 = require('./platform/environment');
require('./app/editor/components/app-editor/app-editor.scss');
// plain csseses
require('../node_modules/dragula/dist/dragula.min.css');
require('../node_modules/medium-editor/dist/css/medium-editor.min.css');
require('../node_modules/medium-editor/dist/css/themes/default.min.css');
// initialize our namespace
window.mojo = {
    DEBUG: true,
    widgetsDrake: null,
    mediumEditor: null,
    timers: {},
    driver: {}
};
// we just simulate a logged-in user like we would have it with auth0 in mojito-fireball
window.currentUser = {
    'username': 'dummy'
};
/*
 * App Component
 * our top level component that holds all of our components
 */
var app_editor_1 = require('./app/editor/components/app-editor');
/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
function main(initialState) {
    if (initialState === void 0) { initialState = {}; }
    var APP_PROVIDERS = [
        angular2_hmr_1.provideInitialState(initialState),
        app_editor_1.AppEditorState
    ];
    return browser_1.bootstrap(app_editor_1.AppEditor, environment_1.ENV_PROVIDERS.concat(browser_2.PROVIDERS, browser_2.DIRECTIVES, browser_2.PIPES, APP_PROVIDERS))
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * You can also import them in vendors to ensure that they are bundled in one file
 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
 */
/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if ('development' === ENV && HMR === true) {
    // activate hot module reload
    angular2_hmr_1.hotModuleReplacement(main, module);
}
else {
    // bootstrap when documetn is ready
    document.addEventListener('DOMContentLoaded', function () { return main(); });
}
//# sourceMappingURL=main.editor.browser.js.map