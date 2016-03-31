/*
 * These are globally available directives in any template
 */
"use strict";
var core_1 = require('angular2/core');
// Angular 2 Router
var router_1 = require('angular2/router');
// Angular 2 Material 2
// TODO(gdi2290): uncomment when materal is fixed
// import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
// import {MdToolbar} from '@angular2-material/toolbar';
// import {MdButton} from '@angular2-material/button';
// import {MdCheckbox} from '@angular2-material/checkbox';
// import {MdRadioButton} from '@angular2-material/radio';
// import {MdSpinner} from '@angular2-material/progress-circle';
// import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
// const MATERIAL_DIRECTIVES = [
//   ...MD_SIDENAV_DIRECTIVES,
//   ...[ MdToolbar, MdButton, MdCheckbox, MdRadioButton, MdSpinner ],
//   ...MD_CARD_DIRECTIVES
// ];
// application_directives: directives that are global through out the application
exports.APPLICATION_DIRECTIVES = router_1.ROUTER_DIRECTIVES.slice();
exports.DIRECTIVES = [
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: exports.APPLICATION_DIRECTIVES, multi: true })
];
//# sourceMappingURL=directives.js.map