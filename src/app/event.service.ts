import { EventEmitter, Injectable } from '@angular/core';

import { Store, Sheet, Section, Spell } from './store';

@Injectable()
export class EventService {
  // Events
  public modeChange = new EventEmitter<string>();
  public sheetRename = new EventEmitter();
  public spellAdd = new EventEmitter<{spell:Spell,sectionId:string}>();
  public spellEdit = new EventEmitter<{spell:Spell,spellId:string}>();

  // Dependency injection + initialization
  public constructor () { }

  // Event triggers
  // This event is used to trigger the modal window
  // @param mode:String - describes the new mode
  public changeMode (mode:string) {
    this.modeChange.emit(mode);
  }
  // This event is used to rename the sheet
  public renameSheet (name:string) {
    this.sheetRename.emit(name);
  }
  // This event is used to add a spell to a section
  // @param data.spell:Spell - contains the new spell
  // @param data.sectionId:string - id of the section that recieve the new spell
  public addSpell (data:{spell:Spell,sectionId:string}) {
    this.spellAdd.emit(data);
  }
  // This event is used to edit/overwrite a spell
  // @param data.spell:Spell - contains the new spell
  // @param data.spellId:string - id of the spell that will be overwritten
  public editSpell (data:{spell:Spell,spellId:string}) {
    this.spellEdit.emit(data);
  }
}
