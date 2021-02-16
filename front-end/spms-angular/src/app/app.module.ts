import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { TestService } from './services/test.service';
import { GenreComponent } from './components/genre/genre.component';
import { StoryPitchFormComponent } from './components/story-pitch-form/story-pitch-form.component';
import { StoryPitchListComponent } from './components/story-pitch-list/story-pitch-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    GenreComponent,
    StoryPitchFormComponent,
    StoryPitchListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
