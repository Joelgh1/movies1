import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../shared/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  @Output() movie = new EventEmitter<Movie>()
  selectedMovie?: Movie

  movieList: Movie[]

  constructor(private moviesService: MoviesService) {
    this.movieList = moviesService.getMovies()
  }

  selectMovie(movie: Movie) {
    this.selectedMovie = movie
    this.movie.emit(movie)
  }

}
