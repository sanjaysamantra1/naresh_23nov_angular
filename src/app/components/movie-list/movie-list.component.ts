import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any;

  constructor(private movieService: MovieService) {
    // console.log(this.movieService.allMovies);
  }
  ngOnInit(): void {
    this.movies = this.movieService.getAllMovies();
  }
  getMovies(category:string){
    // filter in the component
    this.movies = this.movieService.getFilteredMovies(category);
  }
  getAllMovies(){
    this.movies = this.movieService.getAllMovies();
  }
}
