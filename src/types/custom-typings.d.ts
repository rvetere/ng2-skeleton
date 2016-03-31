/*
 * Custom Type Definitions
 * When including 3rd party modules you also need to include the type definition for the module
 * if they don't provide one within the module. You can try to install it with typings

typings install node --save

 * If you can't find the type definition in the registry we can make an ambient definition in
 * this file for now. For example

declare module "my-module" {
  export function doesSomething(value: string): string;
}

 *
 * If you're prototying and you will fix the types later you can also declare it as type any
 *

declare var assert: any;

 *
 * If you're importing a module that uses Node.js modules which are CommonJS you need to import as
 *

import * as _ from 'lodash'

 * You can include your type definitions in this file until you create one for the typings registry
 * see https://github.com/typings/registry
 *
 */

declare var jQuery:JQueryStatic;

declare var MediumEditor: any;

interface Mojo {
   DEBUG: boolean;
   widgetsDrake: any;
   mediumEditor: any;
   timers: any;
   driver: any;
}

interface Window {
   currentUser: any; // just for local dev mode
   lock: any;
   mojo: Mojo;
   Tether: any;
}

// custom app interfaces, better don't put them into their own f
interface IFooter {
   rows: Array<IRow>;
}

interface IHeader {
   rows: Array<IRow>;
}

interface IPage {
   id: string;
   navigate: string;
   rows: Array<IRow>;
}

interface IRow {
   columns: Array<IColumn>;
}

interface IColumn {
   width: string;
   widgets: Array<any>;
}

interface IWidget {
   id: string;
   type: string;
}

interface INavigationWidget extends IWidget {
   projectName: string;
   navigation: Array<INavigationEntry>;
}

interface INavigationEntry {
   id: string;
   navigate: string;
   name: string;
}

interface ITextWidget extends IWidget {
   content: string;
}

interface IJumbotronWidget extends IWidget {
   heading: string;
   lead: string;
   button: string;
   buttonLink: string;
}

interface IAppService {
   getBackend(): any;
}

interface IBackendService {
   getData(): Object;
   getHeader(): IHeader;
   getPage(navigate: string): IPage;
   getFooter(): IFooter;

   updateWidgetPosition(
      sourceDocArea: string, sourceRowIdx: number, sourceColIdx: number, sourceWgtIdx: number, sourcePageId: string,
      targetDocArea: string, targetRowIdx: number, targetColIdx: number, targetWgtIdx: number, targetPageId: string
   ): void;
   updateTextWidget(posObj: Object, content: string): void;
}

// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var ENV: string;
declare var HMR: boolean;
interface GlobalEnvironment {
  ENV;
  HMR;
}

interface WebpackModule {
  hot: {
    data?: any,
    idle: any,
    accept(dependencies?: string | string[], callback?: (updatedDependencies?: any) => void): void;
    decline(dependencies?: string | string[]): void;
    dispose(callback?: (data?: any) => void): void;
    addDisposeHandler(callback?: (data?: any) => void): void;
    removeDisposeHandler(callback?: (data?: any) => void): void;
    check(autoApply?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    apply(options?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    status(callback?: (status?: string) => void): void | string;
    removeStatusHandler(callback?: (status?: string) => void): void;
  };
}

interface WebpackRequire {
  context(file: string, flag?: boolean, exp?: RegExp): any;
}


interface ErrorStackTraceLimit {
  stackTraceLimit: number;
}


// Extend typings
interface NodeRequire extends WebpackRequire {}
interface ErrorConstructor extends ErrorStackTraceLimit {}
interface NodeModule extends WebpackModule {}
interface Global extends GlobalEnvironment  {}


interface Thenable<T> {
  then<U>(
    onFulfilled?: (value: T) => U | Thenable<U>,
    onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
  then<U>(
    onFulfilled?: (value: T) => U | Thenable<U>,
    onRejected?: (error: any) => void): Thenable<U>;
  catch<U>(onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
}
