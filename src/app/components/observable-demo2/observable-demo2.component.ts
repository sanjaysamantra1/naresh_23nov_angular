import { Component, OnInit } from '@angular/core';
import { FormRecord } from '@angular/forms';
import { from, interval, Observable, of, skip, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  templateUrl: './observable-demo2.component.html',
  styleUrls: ['./observable-demo2.component.css'],
})
export class ObservableDemo2Component implements OnInit {
  constructor() {}
  naturalNumbers:any;
  naturalNumbers_upto5:any;

  ngOnInit(): void {
    /* const publisher1 = new Observable((publisher) => {
      publisher.next([10, 20]);
      publisher.next([30, 40]);
      publisher.next([50, 60]);
      publisher.complete();
    });
    
    let finalArr:any = [];
    const subscriber1 = publisher1.subscribe({
      next:(partialRes)=>{
        console.log('partial response' ,partialRes); 
        finalArr = finalArr.concat(partialRes)
      },
      error:(err)=>{console.log(err)},
      complete:()=>{
        console.log('done...');
        console.log(finalArr);
      },
    }); */

    this.demo();
  }
  demo() {
    let cars = ['tata', 'honda', 'maruti'];
    let carsPublisher = from(cars);
    carsPublisher.subscribe(val=>{console.log(val)});

    let numberPublisher = of(10,20,30,40);
    numberPublisher.subscribe(val=>{console.log(val)});

    this.naturalNumbers = interval(1000);
    this.naturalNumbers_upto5 = this.naturalNumbers.pipe(skip(5));
    this.naturalNumbers.subscribe((val: any)=>{console.log(val)});
  }
}
