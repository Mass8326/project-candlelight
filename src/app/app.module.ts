import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SheetComponent } from './sheet/sheet.component';
import { ModalComponent } from './modal/modal.component';
import { ModalEditComponent } from './modal/modal-edit.component';
import { ModalExportComponent } from './modal/modal-export.component';
import { SearchComponent } from './search/search.component';
import { SectionComponent } from './section/section.component';
import { SpellComponent } from './spell/spell.component';
import { EventService } from './event.service';
import { StoreService } from './store.service';

// This decorator defines the following class as an Angular module
// The object passed into the decorator serves as the module metadata
@NgModule({
  // Define children such as modules, components, directives, and pipes
  declarations: [
    SheetComponent,
    ModalComponent,
    ModalEditComponent,
    ModalExportComponent,
    SearchComponent,
    SectionComponent,
    SpellComponent,
  ],
  // Angular modules
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  // Service provider
  // Registers them in the dependency injector
  // Maintains a single instance for all child components
  providers: [
    EventService,
    StoreService,
  ],
  // Root component
  bootstrap: [ SheetComponent ]
})
export class AppModule { }
