import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../shared/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  selectedMovie?: Movie

  movieList: Movie[]

  constructor(private moviesService: MoviesService) {
    this.movieList = moviesService.getMovies()
  }

  selectMovie(movie: Movie) {
    this.selectedMovie = movie
    alert(
      `Título: ${movie.title} Año: ${movie.year} Géneros: ${movie.genre}`)
  }

}
