import { Injectable } from '@angular/core';
import * as YAML from 'yamljs';

import { Store, Sheet, Section, Spell } from './store';
import { EventService } from './event.service';
import * as sampleData from 'raw-loader!./sample.candle.yaml';

@Injectable()
export class StoreService {
  // Instance variables
  private store:Store;
  private storeDict = new Map<string, any>(); // references to store (not value)
  // Dependency injection + initialization
  public constructor (private eventService:EventService) {
    eventService.spellAdd.subscribe(data => this.addSpell(data));
    eventService.spellEdit.subscribe(data => this.editSpell(data));
    eventService.sheetRename.subscribe(name => this.renameSheet(name));
    this.setData(sampleData as any as string, 'yaml');
  }
  // Getters and setters
  public getSheet () : Sheet {
    return this.store.sheet;
  }
  public renameSheet (name:string) : void {
    this.store.sheet.title = name;
  }
  public getData () : Store {
    return this.store;
  }
  public setData (data:string, filename:string) : void {
    // Detect file extension
    let ext:string;
    const results = (/\.(\w+)$/gi).exec(filename);
    if (results && results[1])      // if filename ends with ".[ext]"
      { ext = results[1]; }         // set ext to [ext]
    else
      { ext = filename; }           // else use entire filename
    // Parse according to file extension
    let parsed:Store;
    if (ext === 'json')
      { parsed = JSON.parse(data); }
    else if (ext === 'yaml' || ext === 'yml')
      { parsed = YAML.parse(data); }
    else
      { parsed = data as any as Store; }
    // Give identifiers and set store
    try {
      this.storeDict.clear();
      for (const section of parsed.sheet.sections) {
        for (const spell of section.spells) {
          spell.id = this.genHash(8);
          this.storeDict.set(spell.id, spell);
        }
        section.id = this.genHash(8);
        this.storeDict.set(section.id, section);
      }
      this.store = parsed;
    }
    catch (e) {
      console.log(e);
      alert('An error has occured when updating data.'
        + 'Is the proper file extension being used?');
    }
  }
  public addSpell (data:{spell:Spell,sectionId:string}) : void {
    // Add unique spell id
    data.spell.id = this.genHash(8);
    // Insert spell into section
    this.storeDict.get(data.sectionId).spells.push(data.spell);
    // Register spell into dictionary
    this.storeDict.set(data.spell.id, data.spell);
    console.log('After additon');
    console.log(data.spell);
    console.log(data.spell.id);
  }
  public editSpell (data:{spell:Spell,spellId:string}) : void {
    const spell = this.storeDict.get(data.spellId);
    // Edit current reference rather than replacing it with a new reference
    // This ensures the dictionary always refers to the store
    Object.assign(spell, data.spell);
  }
  // Utilities
  private genHash (length:number) : string {
    let temp = '';
    for (let i = 0; i < Math.ceil(length / 8); i++) {
      // Generate random number, convert to base-36, pad end with zeros, take
      // last eight characters, and add to end of temp string
      temp += Math.random().toString(36).padEnd(8,'0').substr(-8);
    }
    return temp.substr(-length);
  }
  public getById (id:string) : any {
    return this.storeDict.get(id);
  }
}
