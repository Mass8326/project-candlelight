import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as YAML from 'yamljs';

import { Store } from '../store';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-modal-export',
  styleUrls: ['./modal.component.css'],
  templateUrl: './modal-export.component.html',
})
export class ModalExportComponent implements OnInit {
  // Instance variables
  public formatInfo = {
    yaml: {name: 'YAML', desc: 'Readable and editable'},
    json: {name: 'JSON', desc: 'Smaller file size'},
  };
  public formatOptions = Object.keys(this.formatInfo);
  public format = new FormControl(this.formatOptions[0]);
  // Dependency injection
  public constructor ( private storeService:StoreService ) { }
  // Initialization
  public ngOnInit () : void { }
  // Event handlers
  public onExport () : void {
    // Get export information
    const dataRaw:Store = this.storeService.getData();
    // Remove internal ids
    dataRaw.sheet.sections.forEach((section) => {
      section.spells.forEach((spell) => {
        delete spell.id;
      });
      delete section.id;
    });
    let filename:string = dataRaw.sheet.title
      .replace(/[\W_]/g, '')                        // remove non alphanumerics
      .toLowerCase() + '.'                          // lowercase and separator
      + Math.round((new Date()).getTime() / 1000);  // unix time
    // Parse according to settings
    let dataStr:string;
    let dataUri:string;
    if (this.format.value === 'yaml') {
      filename += '.candle.yaml';
      dataStr = YAML.stringify(dataRaw, 10, 2);
      dataStr = dataStr.replace(/(-)(\s*)(\w+:)/g, '$1 $3');  // one line arrays
      dataStr = dataStr.replace(/\\n/g, ' ');  // remove html generated \n
      dataUri = 'data:application/json;charset=utf-8,'
        + encodeURIComponent(dataStr);
    } else {
      filename += '.candle.json';
      dataStr = JSON.stringify(dataRaw);
      dataStr = dataStr.replace(/\\n/g, ' ');  // remove html generated \n
      dataUri = 'data:application/x-yaml;charset=utf-8,'
        + encodeURIComponent(dataStr);
    }
    // Create, click, and remove temporary anchor element
    const elem = document.createElement('a');
    elem.setAttribute('href', dataUri);
    elem.setAttribute('download', filename);
    elem.style.display = 'none';
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
    elem.remove();
  }
}
