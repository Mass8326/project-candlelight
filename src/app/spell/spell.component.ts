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
    alert('Placeholder - ' + this.spell.name);
  }
}
