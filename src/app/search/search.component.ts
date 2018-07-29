import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as YAML from 'yamljs';
import * as JsSearch from 'js-search';

import { Spell } from '../store';
import { EventService } from '../event.service';
import { StoreService } from '../store.service';
import * as spellRaw from 'raw-loader!../spells.yaml';

@Component({
  selector: 'app-search',
  styleUrls: ['./search.component.css'],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  // Instance variables
  @Input() sectionId;
  public searchForm = new FormGroup({
    input: new FormControl(),
    select: new FormControl('', Validators.required),
  });
  private searchResults:Array<any>;
  private search:JsSearch;
  public spellDictMap = new Map<string, any>();
  public spellDictArr = new Array<[string, any]>() as any;
  // Dependencies
  public constructor (
    private storeService:StoreService,
    private eventService:EventService,
  ) { }
  // Initialization
  public ngOnInit () : void {
    // Populate spellDictMap
    YAML.parse(spellRaw).forEach((data) => {
      this.spellDictMap.set(this.genHash(8), data);
    });
    // Populate spellDictArr from spellDictMap, JsSearch needs an array
    this.spellDictArr = Array.from(this.spellDictMap).map(
      // Add aliases using getters for better readability
      spell => Object.assign({
        get id ()   { return this[0]; },
        get data () { return this[1]; },
      }, spell)
    );
    // Create search Object
    this.search = new JsSearch.Search('id');
    this.search.addIndex(['data', 'name']);
    this.search.addDocuments(this.spellDictArr);
  }
  public getSearchResults () : Array<any> {
    if (!this.searchForm.value.input)
      { return this.spellDictArr; }
    else if (this.searchResults.length > 0)
      { return this.searchResults; }
  }
  // Event handlers
  public onSearch ( e ) : void {
    this.searchResults = this.search.search(e.target.value);
  }
  public onAdd () : void {
    // Make new reference, so that any changes are separate from spell dict
    const spell = {} as Spell;
    Object.assign(spell, this.spellDictMap.get(this.searchForm.value.select));
    // Remove any spell id that have been copied from dictionary
    delete spell.id;
    // Emit event
    this.eventService.addSpell({
      spell: spell,
      sectionId: this.sectionId,
    });
  }
  // Utilities
  private genHash (length) : string {
    let temp = '';
    for (let i = 0; i <= length / 8; i++) {
      temp += Math.random().toString(36).padEnd(8,'0').substr(-8);
    }
    return temp.substr(-length);
  }
}
