import { Injectable } from '@angular/core';
import * as YAML from 'yamljs';

import { Store } from './store';
import { Sheet } from './sheet/sheet';
import * as sample from 'raw-loader!./sample.candle.yaml';

@Injectable()
export class StoreService {
  // Instance variables
  private store:Store;
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
    if (results && results[1])
      { ext = results[1]; }
    else
      { ext = filename; }
    let parsed:Store;
    // Parse according to file extension
    if (ext === 'json')
      { parsed = JSON.parse(data); }
    else if (ext === 'yaml' || ext === 'yml')
      { parsed = YAML.parse(data); }
    else
      { parsed = data as any as Store; }
    try { this.store = parsed; }
    catch (e) {
      console.log(e);
      alert('An error has occured when updating data.'
        + 'Is the proper file extension being used?');
    }
  }
}
