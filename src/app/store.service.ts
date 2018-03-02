import { Injectable } from '@angular/core';

import { Store } from './store';
import { Sheet } from './sheet/sheet';
import * as Sample from './sample.candle.json';

@Injectable()
export class StoreService {
  // Instance variables
  private store:Store;
  // Initialization
  public constructor () {
    this.setData(Sample as any as Store);
  }
  // Getters and setters
  public getSheet () : Sheet {
    return this.store.sheet;
  }
  public getData () : Store {
    return this.store;
  }
  public setData (data:Store|string) : void {
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
    this.store = data as any as Store;
  }
}
