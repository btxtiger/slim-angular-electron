import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

/**
 * Static functions for observable handling
 */
@Injectable({
   providedIn: 'root'
})
export class ObservableService {
   /**
    * Unsubscribe from all observable subscriptions in given array
    */
   public static unsubscribeFromAll(subscriptions: Array<Subscription>): void {
      for (const subscription of subscriptions) {
         subscription.unsubscribe();
      }
   }
}
