import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryPitchFormComponent } from './components/story-pitch-form/story-pitch-form.component';
import { StoryPitchListComponent } from './components/story-pitch-list/story-pitch-list.component';
import { TestComponent } from './components/test/test.component';


const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'form', component: StoryPitchFormComponent },
  { path: 'form/:id', component: StoryPitchFormComponent },
  { path: 'list', component: StoryPitchListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
