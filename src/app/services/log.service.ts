/**
 * Basic log manager
 */
import { environmentBase } from '../../environments/environment-base';

// @ts-ignore
// import urlJoin from 'proper-url-join';
import { environment } from '../../environments/environment';

export class LogManager {
   protected isLoggingEnabled = true;
   private readonly logDomain: string;

   constructor(logDomain: string) {
      this.logDomain = logDomain;
   }

   /**
    * Wrap log string in color
    */
   private wrapInColor(color: string, str: string): string[] {
      if (!str) {
         str = '-';
      }
      const prefix = '%c';
      const suffix = 'color:' + color + ';font-weight:bold;';
      return [prefix + str, suffix];
   }

   private prepFnName(functionName: string): string {
      return '- ' + functionName + '():';
   }

   /**
    * Submit to console log
    */
   public log(functionName: string, ...args: any[]): void {
      if (this.isLoggingEnabled) {
         const color = 'blue';
         console.log(...this.wrapInColor(color, this.logDomain), this.prepFnName(functionName), ...args);
      }
      // this.logToServer(functionName, this.argsToMessageStr(...args), 'log');
   }

   /**
    * Submit to console warn
    */
   public warn(functionName: string, ...args: any[]): void {
      if (this.isLoggingEnabled) {
         const color = 'corn';
         console.warn(...this.wrapInColor(color, this.logDomain), this.prepFnName(functionName), ...args);
      }
      // this.logToServer(functionName, this.argsToMessageStr(...args), 'warn');
   }

   /**
    * Submit to console error
    */
   public error(functionName: string, ...args: any[]): void {
      if (this.isLoggingEnabled) {
         const color = 'firebrick';
         console.error(...this.wrapInColor(color, this.logDomain), this.prepFnName(functionName), ...args);
      }
      // this.logToServer(functionName, this.argsToMessageStr(...args), 'error');
   }

   /**
    * Concat args to string
    */
   private argsToMessageStr(...args: any[]): string {
      return []
         .concat(...args)
         .filter(a => a)
         .map(a => (typeof a === 'string' || typeof a === 'number' ? a : JSON.stringify(a)))
         .join(', ');
   }

   /**
    * Log to server
    */
   // private logToServer(functionName: string, message: string, level: string): void {
   //    const body = {
   //       source: 'apc-frontend',
   //       level: level,
   //       class: this.logDomain,
   //       method: functionName,
   //       text: message
   //    };
   //
   //    (async () => {
   //       const rawResponse = await fetch(urlJoin(environment.apiBaseUrl, environmentBase.apiEndpoints.logs), {
   //          method: 'POST',
   //          headers: {
   //             Accept: 'application/json',
   //             'Content-Type': 'application/json'
   //          },
   //          body: JSON.stringify(body)
   //       });
   //       const content = await rawResponse.json();
   //       // console.log('Serverlog resp:', content);
   //    })();
   // }
}
