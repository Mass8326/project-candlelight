import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Spell } from '../store';
import { EventService } from '../event.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-modal-rename',
  styleUrls: ['./modal.component.css'],
  templateUrl: './modal-rename.component.html',
})
export class ModalRenameComponent implements OnInit {
  // Instance variables
  public nameForm = new FormControl('', Validators.required);
  @ViewChild("focus") focusField; // set default focus in ngOnInit
  // Dependency injection
  public constructor (
    private eventService:EventService,
    private storeService:StoreService,
  ) { }
  // Initialization
  public ngOnInit () : void {
    this.nameForm.setValue(this.storeService.getSheetName());
    // Set default focus
    // setTimeout is needed to override default browser behavior
    setTimeout(() => { this.focusField.nativeElement.select(); }, 1);
  }
  // Event handlers
  public onSubmit () : void {
    this.eventService.renameSheet(this.nameForm.value);
    this.eventService.changeMode('none');
  }
}
