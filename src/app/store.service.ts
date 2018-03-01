import { Injectable } from '@angular/core';

import { Store } from './store';
import { Sheet } from './sheet/sheet';
import { Section } from './section/section';
import { Spell } from './spell/spell';
import data from './data-example';

@Injectable()
export class StoreService {
  // Instance variables
  private store:Store;
  // Initialization
  public constructor () {
    this.store = new Store(data);
  }
  // Getters and setters
  public getSheet () : Sheet {
    return this.store.sheet;
  }
  public getSection ( id:string ) : Section {
    return this.store.sectionDict.get(id);
  }
  public getSpell ( id:string ) : Spell {
    return this.store.spellDict.get(id);
  }
}
