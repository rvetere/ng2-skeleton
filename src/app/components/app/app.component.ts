import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterActive} from '../../directives/router-active.directive';

import {
   CommonsUtil
} from '../../commons/index';

import {Home} from '../home/home.component';
import {Steakhouse} from '../steakhouse/steakhouse.component';
import {Bayer} from '../bayer/bayer.component';
import {About} from '../about/about.component';
import {Elefant} from '../elefant/elefant.component';
import {Work} from '../work/work.component';
import {Service} from '../service/service.component';
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

   providers: [

   ],

   template: require('./app.html')
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
   {path: '/', component: Home, name: 'Home'},
   {path: '/steakhouse', component: Steakhouse, name: 'Steakhouse'},
   {path: '/bayer', component: Bayer, name: 'Bayer'},
   {path: '/service', component: Service, name: 'Service'},
   {path: '/about', component: About, name: 'About'},
   {path: '/elefant', component: Elefant, name: 'Elefant'},
   {path: '/work', component: Work, name: 'Work'},
   {path: '/**', redirectTo: ['Home']}
])
export class App {
   public name: string = 'ng2-skeleton';

   /**
    * Don't worry that the constructor of the root component will be called twice on page load in dev mode. This is
    * caused by the hot-module-replace initialization which can't be turned off, but will be turned off in production
    * mode.
    */
   constructor(public appState: AppState,
               public router: Router) {

   }

   get state() {
      return this.appState.get();
   }

   ngOnInit() {

   }

   public onNavToggleClick(event: any): void {
      event.preventDefault();
      jQuery('#nav-toggle').toggleClass('active');
      jQuery('body').toggleClass('nav-open');
   }

   public getStateCls(): string {
      return this.router.currentInstruction ? this.router.currentInstruction.urlPath.replace('/', '') : '';
   }

}
