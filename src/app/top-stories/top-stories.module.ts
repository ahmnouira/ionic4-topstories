import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopStoriesRoutingModule } from './top-stories-routing.module';
import { ComponentsModule } from '../components/components.module';
import { TopStoriesComponent } from './top-stories/top-stories.component';


@NgModule({
  declarations: [TopStoriesComponent],
  imports: [
    CommonModule,
    TopStoriesRoutingModule,
    ComponentsModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopStoriesModule { }
