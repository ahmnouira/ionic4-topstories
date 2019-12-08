import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockService } from './mock/mock.service';
import { ItemService } from './item/item.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [MockService, ItemService]
})
export class ServicesModule { }
