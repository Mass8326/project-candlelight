import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Spell } from './spell';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
})
export class SpellComponent implements OnInit {
  // Instance variables
  @Input() spell:Spell;
  @Output() spellChange = new EventEmitter<Spell>();
  public expanded = false;
  // Dependency injection
  public constructor () { }
  // Initialization
  public ngOnInit () : void { }
  // Event handlers
  public onEdit () : void {
    alert('In-app editing is not yet implemented.\n\n'
    + 'Please export, edit, then import your data using the buttons at '
    + 'the top right of the sheet.');
  }
}
