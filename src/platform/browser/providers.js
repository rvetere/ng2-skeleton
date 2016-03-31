/*
 * These are globally available services in any component or any other service
 */
"use strict";
var core_1 = require('angular2/core');
// Angular 2
var common_1 = require('angular2/common');
// Angular 2 Http
var http_1 = require('angular2/http');
// Angular 2 Router
var router_1 = require('angular2/router');
// Angular 2 Material
// import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
// const MATERIAL_PROVIDERS = [
//   MdRadioDispatcher
// ];
/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
exports.APPLICATION_PROVIDERS = common_1.FORM_PROVIDERS.concat(http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, [
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
]);
exports.PROVIDERS = exports.APPLICATION_PROVIDERS.slice();
//# sourceMappingURL=providers.js.map