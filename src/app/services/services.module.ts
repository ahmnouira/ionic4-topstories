import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockService } from './mock/mock.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [MockService]
})
export class ServicesModule { }
