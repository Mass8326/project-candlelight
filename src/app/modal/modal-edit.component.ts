import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Spell } from '../store';
import { EventService } from '../event.service';

@Component({
  selector: 'app-modal-edit',
  styleUrls: ['./modal.component.css'],
  templateUrl: './modal-edit.component.html',
})
export class ModalEditComponent implements OnInit {
  // Instance variables
  @Input() editProps:{spell:Spell,spellId:string};
  public spellForm = new FormGroup({
    name: new FormControl(''),
    memo: new FormControl(''),
    info: new FormControl(''),
    desc: new FormControl(''),
  });
  // Dependency injection
  public constructor ( private eventService:EventService ) { }
  // Initialization
  public ngOnInit () : void {
    this.spellForm.controls.name.setValue(this.editProps.spell.name);
    this.spellForm.controls.memo.setValue(this.editProps.spell.memo);
    let temp;
    temp = this.editProps.spell.info[0];
    for (let i = 1; i < this.editProps.spell.info.length; i++) {
      temp += '\n' + this.editProps.spell.info[i];
    }
    this.spellForm.controls.info.setValue(temp);
    temp = this.editProps.spell.desc[0];
    for (let i = 1; i < this.editProps.spell.desc.length; i++) {
      temp += '\n' + this.editProps.spell.desc[i];
    }
    this.spellForm.controls.desc.setValue(temp);
  }
  // Event handlers
  public onSave () : void {
    const data = {
      spell: this.spellForm.value,
      spellId: this.editProps.spellId
    };
    data.spell.info = String(data.spell.info).split('\n');
    data.spell.desc = String(data.spell.desc).split('\n');
    this.eventService.editSpell(data);
  }
  public onExit () : void {
    this.onSave();
    this.eventService.changeMode('none');
  }
}
