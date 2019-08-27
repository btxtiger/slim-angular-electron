/**
 * Helper service functions
 */
import { ElementRef, Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class HelperService {
   /**
    * Focus input element
    * NOTE: Needs to be called with delay of 300ms for the elementRef to be defined!
    */
   public static focusInputElement(elementRef: ElementRef): void {
      elementRef.nativeElement.focus();
      elementRef.nativeElement.select();
   }

   /**
    * Focus input native element
    * NOTE: Needs to be called with delay of 300ms for the elementRef to be defined!
    */
   public static focusInputNativeElement(element: HTMLInputElement): void {
      element.focus();
      element.select();
   }

   /**
    * Select text in input element
    */
   public static selectTextInInputElement(elementRef: ElementRef): void {
      elementRef.nativeElement.select();
   }

   /**
    * Select text in native input element
    */
   public static selectTextInNativeElement(element: HTMLInputElement): void {
      element.select();
   }

   /**
    * Get last item of array
    */
   public static getLastItemInArray(arr: any[]): any {
      if (arr && arr.length > 0) {
         return arr[arr.length - 1];
      }
   }

   /**
    * Generate random id string
    */
   public static getRandomId(length: number): string {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }
}
