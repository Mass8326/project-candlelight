import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Section } from '../store';

@Component({
  selector: 'app-section',
  styleUrls: ['./section.component.css'],
  templateUrl: './section.component.html',
})
export class SectionComponent implements OnInit {
  // Instance variables
  @Input() section:Section;
  @Input() secFirst:boolean;
  @Output() sectionChange = new EventEmitter<Section>();
  public expanded = true;
  // Dependency injection
  public constructor () { }
  // Initialization
  public ngOnInit () : void { }
}
