import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { MoviePlotComponent } from './movie-plot/movie-plot.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MoviePosterComponent,
    MoviePlotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
