import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Section } from './section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent implements OnInit {
  // Instance variables
  @Input() section:Section;
  @Output() sectionChange = new EventEmitter<Section>();
  public expanded = true;
  // Dependency injection
  public constructor () { }
  // Initialization
  public ngOnInit () : void { }
}
