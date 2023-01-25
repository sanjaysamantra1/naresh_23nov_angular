import { Injectable } from '@angular/core';
import { ImdbService } from './imdb.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private allMovies = [
    { id: 101, name: '3 idiots', producer: 'Rajkumar', category: 'horror' },
    { id: 102, name: 'RRR', producer: 'Rajmouli', category: 'comedy' },
    { id: 103, name: 'KGF', producer: 'Prashant', category: 'thriller' },
  ];

  constructor(private imdbService: ImdbService) {
    this.combinedata();
  }
  private combinedata() {
    const allRatings = this.imdbService.getAllRatings();
    this.allMovies = this.allMovies.map((movie: any) => {
      const ratingObj = allRatings.find((rating) => movie.id === rating.id);
      movie.rating = ratingObj?.rating;
      return movie;
    });
  }

  getAllMovies() {
    return this.allMovies;
  }
  getFilteredMovies(category:string) {
    // write the logic here
    return this.allMovies.filter((movie) => movie.category === category);
  }
}
