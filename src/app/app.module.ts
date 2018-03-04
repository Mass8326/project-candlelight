import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SheetComponent } from './sheet/sheet.component';
import { ModalComponent } from './modal/modal.component';
import { SectionComponent } from './section/section.component';
import { SpellComponent } from './spell/spell.component';
import { StoreService } from './store.service';

// This decorator defines the following class as an Angular module
// The object passed into the decorator serves as the module metadata
@NgModule({
  // Define children such as modules, components, directives, and pipes
  declarations: [
    SheetComponent,
    ModalComponent,
    SectionComponent,
    SpellComponent,
  ],
  // Angular modules
  imports: [
    BrowserModule,
    FormsModule,
  ],
  // Service provider
  // Registers them in the dependency injector
  // Maintains a single instance for all child components
  providers: [
    StoreService,
  ],
  // Root component
  bootstrap: [ SheetComponent ]
})
export class AppModule { }
