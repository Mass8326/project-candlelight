import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as YAML from 'yamljs';

import { Spell } from '../store';
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
  public editProps:{spell:Spell,spellId:string};
  // Dependency injection
  public constructor (
    private eventService:EventService,
    private storeService:StoreService,
  ) {
    eventService.modeChange.subscribe(newMode => this.setMode(newMode));
    eventService.spellEdit.subscribe((data) => this.editSpell(data));
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
  public editSpell (data:{spell:Spell,spellId:string}) : void {
    this.editProps = data;
    this.mode = 'edit';
  }
}
