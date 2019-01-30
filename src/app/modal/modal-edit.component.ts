import { Component, EventEmitter, Input, OnInit, Output, ViewChild, HostListener } from '@angular/core';
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
  // Focus and keyboard traps
  @ViewChild("first") firstFocus;
  @ViewChild("last") lastFocus;

  // Dependency injection
  public constructor ( private eventService:EventService ) { }

  // Initialization
  public ngOnInit () : void {
    // Initialize form values
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
    // Set default focus
    // setTimeout is needed to override default browser behavior
    setTimeout(() => { this.firstFocus.nativeElement.select(); }, 1);
  }
  // Keyboard traps
  @HostListener('window:keydown', ['$event'])
  private keyboardTrap(event:KeyboardEvent) {
    // Forward tab trap
    if(event.keyCode === 9 && !event.shiftKey &&
      document.activeElement === this.lastFocus.nativeElement) {
      // setTimeout is needed to override default browser behavior
      this.firstFocus.nativeElement.scrollTop = 100;
      setTimeout(() => { this.firstFocus.nativeElement.select(); }, 1);
    }
    // Backward tab trap
    if(event.keyCode === 9 && event.shiftKey &&
      document.activeElement === this.firstFocus.nativeElement) {
      // setTimeout is needed to override default browser behavior
      setTimeout(() => { this.lastFocus.nativeElement.focus(); }, 1);
    }
    // Escape
    if(event.keyCode === 27) {
      this.onExit();
      console.log("boop");
    }
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
