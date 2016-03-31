import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterActive} from '../../directives/router-active.directive';

import {
   CommonsUtil
} from '../../commons/index';

import {Home} from '../home/home.component';
import {AppState} from './app.service';

let Tether = require('tether');
window.Tether = Tether;

// import all bootstrap javascript plugins
require('bootstrap');

// cherry-pick specific bootstrap javascript plugins
//require('../../../../node_modules/bootstrap/dist/js/umd/tooltip');

export const AppDecorator = {
   selector: 'app',
   directives: [
      ...ROUTER_DIRECTIVES,
      RouterActive
   ],

   viewProviders: [],

   providers: [],

   templateUrl: CommonsUtil.getTmplUrlPrefix() + '/components/app/app.html'
};

/*
 * App Component
 * Top Level Component
 */
@Component(AppDecorator)
/*
 * Defining a generic Router config that always routes to the same Component 'Page'
 * -> this way we can define a total dynamic navigation which is editable
 */
@RouteConfig([
   {path: '/', component: Home, name: 'Index'},
   {path: '/:home', component: Home, name: 'Home'},
   {path: '/**', redirectTo: ['Index']}
])
export class App {
   public currentUser: Object;
   public mode: string = 'display';
   public name: string = 'mojito-impact root component';

   /**
    * Don't worry that the constructor of the root component will be called twice on page load in dev mode. This is
    * caused by the hot-module-replace initialization which can't be turned off, but will be turned off in production
    * mode.
    */
   constructor(public appState: AppState) {

   }

   get state() {
      return this.appState.get();
   }

   ngOnInit() {
      // in local dev mode (basically just in mojito-impact) we can define a dummy user in window.currentUser where we bootstrap
      this.currentUser = window.currentUser;
   }

}
