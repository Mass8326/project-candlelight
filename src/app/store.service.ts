import { Injectable } from '@angular/core';

import { Store } from './store';
import { Sheet } from './sheet/sheet';
import dataExample from './data-example';

@Injectable()
export class StoreService {
  // Instance variables
  private store:Store;
  // Initialization
  public constructor () {
    this.setData(dataExample);
  }
  // Getters and setters
  public getSheet () : Sheet {
    return this.store.sheet;
  }
  public getData () : Store {
    return this.store;
  }
  public setData (data:Store) : void {
    this.store = data;
  }
}
