import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './time-ago/time-ago.pipe';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TimeAgoPipe, ItemComponent, ItemsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],        // to make angular recongnize custom elements
  exports: [ItemsComponent, TimeAgoPipe]
})
export class ComponentsModule { }
