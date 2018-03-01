import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
}
