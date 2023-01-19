import { Component, Input } from '@angular/core';
import { Movie } from '../shared/Movie';

@Component({
  selector: 'app-movie-plot',
  templateUrl: './movie-plot.component.html',
  styleUrls: ['./movie-plot.component.css']
})
export class MoviePlotComponent {
  @Input() movie?: Movie
}
