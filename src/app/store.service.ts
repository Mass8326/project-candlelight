import { Injectable } from '@angular/core';

import { Store } from './store';
import data from './data-example';

@Injectable()
export class StoreService {
  // Instance variables
  private store:Store;
  // Initialization
  public constructor () {
    this.store = Object.assign({}, data);
  }
  // Getters and setters
  public getSheet () : Sheet {
    return this.store.sheet;
  }
}
