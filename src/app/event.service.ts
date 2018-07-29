import { EventEmitter, Injectable } from '@angular/core';

import { Store, Sheet, Section, Spell } from './store';

@Injectable()
export class EventService {
  // Instance variables
  public modeChange = new EventEmitter<string>();
  public spellAdd = new EventEmitter<Spell, string>();
  // Initialization
  public constructor () { }
  // Event emitters
  public changeMode (mode:string) {
    this.modeChange.emit(mode);
  }
  public addSpell (data:{spell:Spell,sectionId:string}) {
    this.spellAdd.emit(data);
  }
}
