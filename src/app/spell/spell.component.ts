import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { Spell } from './spell';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SpellComponent implements OnInit {
  // Instance variables
  @Input() spell:Spell;
  @Output() spellChange = new EventEmitter<Spell>();
  private expand:boolean;
  // Dependency injection
  public constructor () { }
  // Initialization
  public ngOnInit () : void {
    this.expand = false;
  }
  // Getters and setters
  public getExpand () : boolean {
    return this.expand;
  }
  public toggleExpand () : void {
    this.expand = !this.expand;
  }
  // Event handlers
  public triggerEdit () : void {
    alert('Placeholder - ' + this.spell.name);
  }
}
