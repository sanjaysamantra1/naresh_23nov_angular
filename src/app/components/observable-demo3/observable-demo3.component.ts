import { Component, OnInit } from '@angular/core';
import { of, zip, map, forkJoin, range, mergeMap, concatMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-observable-demo3',
  templateUrl: './observable-demo3.component.html',
  styleUrls: ['./observable-demo3.component.css'],
})
export class ObservableDemo3Component implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    // this.zipDemo();
    // this.fetchDataFromMultipleAPIs();
    // this.mapDemo();
    // this.withoutMergeMapDemo();
    this.mergeMapDemo();
  }
  zipDemo() {
    let publisher1 = of(32, 31, 34);
    let publisher2 = of('sanjay', 'ranjan', 'bishnu');
    let publisher3 = of('bang', 'chennai', 'hyderabad');

    let finalPublisher = zip(publisher1, publisher2, publisher3);
    finalPublisher.subscribe((data) => console.log(data));
  }
  fetchDataFromMultipleAPIs() {
    let request1 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/todos' //1
    );
    let request2 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/comments' //2
    );
    let request3 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/users' //1.5s
    );
    /* forkJoin([request1, request2, request3]).subscribe(([res1, res2, res3]) => {
      console.log(res1, res2, res3);
    }); */
    forkJoin({ request1, request2, request3 }).subscribe(
      (responses) => {
        console.log(responses);
      },
      (err) => {
        console.log('errorrrrrrrrrr');
      }
    );
  }
  mapDemo() {
    const numbers = range(1, 10);
    const squares = numbers.pipe(map((ele) => ele * ele));
    squares.subscribe((res) => console.log(res));
  }
  withoutMergeMapDemo() {
    const usersPublisher = of(1, 2, 3, 4);
    usersPublisher.subscribe((user) => {
      const url = `https://jsonplaceholder.typicode.com/users/${user}`; //1-30  2-10 3-5 4-10
      this.httpClient.get(url).subscribe((userData) => {
        console.log(userData);
      });
    });
  }
  mergeMapDemo() {
    const usersPublisher = of(1, 2, 3, 4);

    usersPublisher.pipe(mergeMap((user)=>{
      const userDetails = `https://jsonplaceholder.typicode.com/users/${user}`;
      return this.httpClient.get(userDetails);
    })).subscribe(userInfo=>{
      console.log(userInfo);
    });

  }
}
