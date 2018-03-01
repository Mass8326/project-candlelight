import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { Section } from './section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SectionComponent implements OnInit {
  // Instance variables
  @Input() section:Section;
  @Output() sectionChange = new EventEmitter<Section>();
  private expand:boolean;
  // Dependency injection
  public constructor () { }
  // Initialization
  public ngOnInit () : void {
    this.expand = true;
  }
  // Getters and setters
  public getExpand () : boolean {
    return this.expand;
  }
  public toggleExpand () : void {
    this.expand = !this.expand;
  }
}
