// Angular 2 browser
import {
  ELEMENT_PROBE_PROVIDERS,
  ELEMENT_PROBE_PROVIDERS_PROD_MODE
} from 'angular2/platform/browser';

// Angular 2
import {enableProdMode} from 'angular2/core';

// Environment Providers
var PROVIDERS = [];

if ('production' === getENV()) {
  // Production
  enableProdMode();

  PROVIDERS = [
    ...PROVIDERS,
    ELEMENT_PROBE_PROVIDERS_PROD_MODE
  ];

} else {
  // Development
  PROVIDERS = [
    ...PROVIDERS,
    ELEMENT_PROBE_PROVIDERS
  ];

}

function getENV() {
   try {
      return ENV;
   } catch (e) {
      try {
         return process.env['NODE_ENV'];
      } catch (e) {
         return 'production';
      }
   }
}

export const ENV_PROVIDERS = [
  ...PROVIDERS
];
