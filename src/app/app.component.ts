import { Component, Output } from '@angular/core';
import { Movie } from './shared/Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedMovie?: Movie

  onSelect(movie: Movie) {
    this.selectedMovie = movie
  }
}
