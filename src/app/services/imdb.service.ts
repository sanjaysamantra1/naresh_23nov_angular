import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImdbService {
  ratings = [
    { id: 101, rating: 7.8 },
    { id: 102, rating: 8.8 },
    { id: 103, rating: 6.9 },
  ];

  constructor() {}

  getAllRatings() {
    return this.ratings;
  }
}
