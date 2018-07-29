import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as YAML from 'yamljs';

import { Store } from '../store';
import { EventService } from '../event.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-modal',
  styleUrls: ['./modal.component.css'],
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  // Instance variables
  private mode = 'welcome';
  public formatInfo = {
    yaml: {name: 'YAML', desc: 'Readable and editable'},
    json: {name: 'JSON', desc: 'Smaller file size'},
  };
  public formatOptions = Object.keys(this.formatInfo);
  public format = new FormControl(this.formatOptions[0]);
  // Dependency injection
  public constructor (
    private eventService:EventService,
    private storeService:StoreService,
  ) {
    eventService.modeChange.subscribe(newMode => this.setMode(newMode));
  }
  // Initialization
  public ngOnInit () : void { }
  // Getters and setters
  public isMode (compare:string) : boolean {
    return this.mode === compare;
  }
  public setMode (newMode:string) : void {
    this.mode = newMode;
  }
}
