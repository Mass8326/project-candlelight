import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Store } from "../store";
import { Sheet } from "./sheet";
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
    let fileName:string = this.sheet.title
      .replace(/[\W_]/g, '')                        // remove non alphanumerics
      .toLowerCase() + '.'                          // lowercase and separator
      + Math.round((new Date()).getTime() / 1000)   // unix time
      + '.candle.json';                             // extension
    let dataRaw:Store = this.storeService.getData();
    let dataStr:string = JSON.stringify(dataRaw);
    let dataUri:string = 'data:application/json;charset=utf-8,'
      + encodeURIComponent(dataStr);
    // Create, click, and remove temporary anchor element
    let elem:HTMLAnchorElement = document.createElement('a');
    elem.setAttribute('href', dataUri);
    elem.setAttribute('download', fileName);
    elem.click();
    elem.remove();
  }
  public triggerImport () : void {
    // Create temporary input element
    let elem:HTMLInputElement;
    // Remove any hanging temporary elements
    elem = document.getElementById("import-proxy") as HTMLInputElement;
    if (elem) { elem.remove(); }
    // Create and click temporary file
    elem = document.createElement('input');
    elem.setAttribute('type', 'file');
    elem.setAttribute('accept', '.candle.json');
    elem.click();
    // When files are input
    elem.onchange = (() => {
      if (elem.files.length > 0) {
        // New file reader
        let reader = new FileReader();
        // What do do when a file is read
        reader.onload = ((e) => {
          let target = e.target as FileReader;
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
