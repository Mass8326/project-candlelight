import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Store } from '../store';
import { Sheet } from './sheet';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SheetComponent implements OnInit {
  // Instance variables
  public sheet:Sheet;
  // Dependency injection
  public constructor ( private storeService:StoreService ) { }
  // Initialization
  public ngOnInit () : void {
    this.sheet = this.storeService.getSheet();
  }
  // Event handlers
  public triggerExport () : void {
    // Parse store into embedded json
    const fileName:string = this.sheet.title
      .replace(/[\W_]/g, '')                        // remove non alphanumerics
      .toLowerCase() + '.'                          // lowercase and separator
      + Math.round((new Date()).getTime() / 1000)   // unix time
      + '.candle.json';                             // extension
    const dataRaw:Store = this.storeService.getData();
    const dataStr:string = JSON.stringify(dataRaw);
    const dataUri:string = 'data:application/json;charset=utf-8,'
      + encodeURIComponent(dataStr);
    // Create, click, and remove temporary anchor element
    const elem:HTMLAnchorElement = document.createElement('a');
    elem.setAttribute('href', dataUri);
    elem.setAttribute('download', fileName);
    elem.click();
    elem.remove();
  }
  public triggerImport () : void {
    // Remove any hanging temporary elements
    const old = document.getElementById('import-proxy') as HTMLInputElement;
    if (old) { old.remove(); }
    // Create and click temporary file
    const elem = document.createElement('input');
    elem.setAttribute('type', 'file');
    elem.setAttribute('accept', '.candle.json');
    elem.click();
    // When files are input
    elem.onchange = (() => {
      if (elem.files.length > 0) {
        // New file reader
        const reader = new FileReader();
        // What do do when a file is read
        reader.onload = ((e) => {
          const target = e.target as FileReader;
          this.storeService.setData(target.result);
          this.sheet = this.storeService.getSheet();
        });
        // Read file
        reader.readAsText(elem.files[0]);
        // Remove temporary element
        elem.remove();
      }
    });
  }
}
