import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-observable-demo1',
  templateUrl: './observable-demo1.component.html',
  styleUrls: ['./observable-demo1.component.css'],
})
export class ObservableDemo1Component implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.promiseDemo();
    this.observableDemo();
  }
  promiseDemo() {
    const userPromise = fetch('http://jsonplaceholder.typicode.com/users');
    console.log(userPromise);
    userPromise.then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  observableDemo() {
    const todosObs = this.httpClient.get(
      'http://jsonplaceholder.typicode.com/todos'
    );
    console.log(todosObs);
    /* todosObs.subscribe(
      (partialRespone) => {
        console.log(partialRespone);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('All data received');
      }
    ); */
    todosObs.subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('completed'),
    });
  }
}
