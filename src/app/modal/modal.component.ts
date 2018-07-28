import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as YAML from 'yamljs';

import { Store } from '../store';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-modal',
  styleUrls: ['./modal.component.css'],
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  // Instance variables
  @Input() mode:string;
  @Output() modeChange = new EventEmitter<string>();
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
  // Getters and setters
  public isMode (compare:string) : boolean {
    return this.mode === compare;
  }
  public setMode (newMode:string) : void {
    this.mode = newMode;
    this.modeChange.emit(this.mode);
  }
}
