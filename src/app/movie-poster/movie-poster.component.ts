import { Component, Input } from '@angular/core';
import { Movie } from '../shared/Movie';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.css']
})
export class MoviePosterComponent {
  @Input() movie?: Movie
}
