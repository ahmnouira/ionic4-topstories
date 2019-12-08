import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopStoriesComponent } from './top-stories/top-stories.component';


const routes: Routes = [ {
  path: '', component: TopStoriesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopStoriesRoutingModule { }
