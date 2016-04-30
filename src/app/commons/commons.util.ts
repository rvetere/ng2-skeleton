import {ReflectiveInjector, provide, NgZone} from 'angular2/core';

export class CommonsUtil {
   private static _tmplUrlPrefix: string = '';

   /**
    * Deep cloning a javascript object/array/date
    *
    * @param obj
    * @returns {any}
    */
   public static clone(obj: Object): Object {
      var copy;

      // Handle the 3 simple types, and null or undefined
      if (null === obj || 'object' !== typeof obj) return obj;

      // Handle Date
      if (obj instanceof Date) {
         copy = new Date();
         copy.setTime(obj.getTime());
         return copy;
      }

      // Handle Array
      if (obj instanceof Array) {
         copy = [];
         for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = CommonsUtil.clone(obj[i]);
         }
         return copy;
      }

      // Handle Object
      if (obj instanceof Object) {
         copy = {};
         for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = CommonsUtil.clone(obj[attr]);
         }
         return copy;
      }

      throw new Error('Unable to copy obj! Its type isn\'t supported.');
   }

   /**
    * Injecting NgZone instance to the given "this" as a private var _zone.
    * This is nice to inject NgZone without expanding the constructor
    */
   public static injectZone(): void {
      let injector = ReflectiveInjector.resolveAndCreate([
         provide(NgZone, {
            useFactory: () => {
               return function () {
                  return new NgZone({enableLongStackTrace: false});
               };
            }
         })
      ]);
      this['_zone'] = injector.get(NgZone)();
   }

   public static setTmplUrlPrefix(prefix: string): void {
      CommonsUtil._tmplUrlPrefix = prefix;
   }

   public static getTmplUrlPrefix(): string {
      if (typeof module.id === 'string') {
         return 'client/impact/' + CommonsUtil._tmplUrlPrefix;
      } else {
         return 'app/' + CommonsUtil._tmplUrlPrefix;
      }
   }
}
