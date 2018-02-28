import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { Section } from './section';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SectionComponent implements OnInit {
  // Declarations
  @Input()
  private id:string;
  private expand:boolean;
  public section:Section;
  // Dependency injection
  public constructor( private storeService:StoreService ) { }
  // Initialization
  public ngOnInit() : void {
    this.section = this.storeService.getSection(this.id);
    this.expand = true;
  }
  // Getters and setters
  public getExpand () : boolean {
    return this.expand;
  }
  public toggleExpand() : void {
    this.expand = !this.expand;
  }
}
