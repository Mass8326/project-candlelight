import { Injectable } from '@angular/core';
import * as YAML from 'yamljs';

import { Store, Sheet, Section, Spell } from './store';
import * as sample from 'raw-loader!./sample.candle.yaml';

@Injectable()
export class StoreService {
  // Instance variables
  private store:Store;
  private storeDict = new Map<string, any>();
  // Initialization
  public constructor () {
    this.setData(sample as any as string, 'yaml');
  }
  // Getters and setters
  public getSheet () : Sheet {
    return this.store.sheet;
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
    let parsed:Store;
    // Parse according to file extension
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
  // Utilities
  private genHash (length:number) : string {
    let temp = '';
    for (let i = 0; i <= length / 8; i++) {
      temp += Math.random().toString(36).padEnd(8,'0').substr(-8);
    }
    return temp.substr(-length);
  }
  public getById (id:string) : any {
    return this.storeDict.get(id);
  }
}
