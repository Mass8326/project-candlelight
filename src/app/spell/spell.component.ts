import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Spell } from '../store';

@Component({
  selector: 'app-spell',
  styleUrls: ['./spell.component.css'],
  templateUrl: './spell.component.html',
  animations: [
    trigger('expanded', [
      state('0', style({height: 0})),
      state('1', style({height: '*'})),
      transition('0 => 1', animate('300ms ease-out')),
      transition('1 => 0', animate('300ms ease-out')),
    ])
  ],
})
export class SpellComponent implements OnInit {
  // Instance variables
  @Input() spell:Spell;
  @Output() spellChange = new EventEmitter<Spell>();
  public expanded = '0';
  // Dependency injection
  public constructor () { }
  // Initialization
  public ngOnInit () : void { }
  // Event handlers
  public onExpand () : void {
    if (this.expanded === '1') { this.expanded = '0'; }
    else { this.expanded = '1'; }
  }
  public onEdit () : void {
    alert('In-app editing is not yet implemented.\n\n'
    + 'Please export, edit, then import your data using the buttons at '
    + 'the top right of the sheet.');
  }
}
