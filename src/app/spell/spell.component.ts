import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { Spell } from './spell';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SpellComponent implements OnInit {
  // Instance variables
  @Input() id:string;
  private expand:boolean;
  public spell:Spell;
  // Dependency injection
  public constructor ( private storeService:StoreService ) { }
  // Initialization
  public ngOnInit () : void {
    this.spell = this.storeService.getSpell(this.id);
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
