import { Component, OnInit } from '@angular/core';

import { Store, Sheet } from '../store';
import { EventService } from '../event.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-sheet',
  styleUrls: ['./sheet.component.css'],
  templateUrl: './sheet.component.html',
})
export class SheetComponent implements OnInit {
  // Instance variables
  public sheet:Sheet;
  // Dependency injection
  public constructor (
    private eventService:EventService,
    private storeService:StoreService,
  ) { }
  // Initialization
  public ngOnInit () : void {
    this.sheet = this.storeService.getSheet();
  }
  // Event handlers
  public onExport () {
    this.eventService.changeMode('export');
  }
  public onRename () {
    this.eventService.changeMode('rename');
  }
  public onImport () : void {
    // Remove any hanging temporary elements
    const old = document.getElementById('import-proxy');
    if (old) { old.remove(); }
    // Create and click temporary file
    const elem = document.createElement('input');
    elem.setAttribute('type', 'file');
    elem.setAttribute('accept', '.candle.json,.candle.yaml');
    elem.click();
    // When files are input
    elem.onchange = (() => {
      if (elem.files.length > 0) {
        // New file reader
        const reader = new FileReader();
        const filename = elem.files[0].name;
        // What do do when a file is read
        reader.onload = ((e) => {
          const target = e.target as FileReader;
          const data = target.result;
          this.storeService.setData(data, filename);
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
