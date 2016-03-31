/*
 * These are globally available pipes in any template
 */
"use strict";
var core_1 = require('angular2/core');
// application_pipes: pipes that are global through out the application
exports.APPLICATION_PIPES = [];
exports.PIPES = [
    core_1.provide(core_1.PLATFORM_PIPES, { useValue: exports.APPLICATION_PIPES, multi: true })
];
//# sourceMappingURL=pipes.js.map