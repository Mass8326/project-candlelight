import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Spell } from '../store';
import { EventService } from '../event.service';

@Component({
  selector: 'app-modal-rename',
  styleUrls: ['./modal.component.css'],
  templateUrl: './modal-rename.component.html',
})
export class ModalRenameComponent implements OnInit {
  // Instance variables
  public nameForm = new FormControl('', Validators.required);
  // Dependency injection
  public constructor ( private eventService:EventService ) { }
  // Initialization
  public ngOnInit () : void { }
  // Event handlers
  public onSubmit () : void {
    this.eventService.renameSheet(this.nameForm.value);
    this.eventService.changeMode('none');
  }
}
