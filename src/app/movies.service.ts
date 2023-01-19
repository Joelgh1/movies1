import { Injectable, OnInit } from '@angular/core';
import { MOVIES } from './shared/MockMovies';
import { Movie } from './shared/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: Movie[]

  constructor() {
    this.movies = MOVIES
  }

  getMovies() {
    return this.movies
  }
}
