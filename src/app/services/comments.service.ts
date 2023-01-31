import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private httpClient: HttpClient) {}

  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }
}
