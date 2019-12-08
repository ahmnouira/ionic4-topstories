import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // to-stories is the index page 
  { path: '', redirectTo: 'top-stories', pathMatch: 'full' }, 
  { path: 'top-stories', loadChildren: './top-stories/top-stories.module#TopStoriesModule'},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
