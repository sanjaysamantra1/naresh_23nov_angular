import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  templateUrl: './subject-demo1.component.html',
  styleUrls: ['./subject-demo1.component.css'],
})
export class SubjectDemo1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.subjectDemo();
    // this.behaviourSubjectDemo();
    // this.replaySubjectDemo();
    this.asyncSubjectDemo()
  }
  subjectDemo() {
    let carsPublisher = new Subject();
    carsPublisher.next('Tata');
    carsPublisher.next('Honda');
    const carsSubscriber1 = carsPublisher.subscribe((car) => console.log('Subscriber-1 ',car));
    carsPublisher.next('Maruti');
    const carsSubscriber2 = carsPublisher.subscribe((car) => console.log('Subscriber-2 ',car));
    carsPublisher.next('Toyota');
  }
  behaviourSubjectDemo() {
    let carsPublisher = new BehaviorSubject('Default Car'); 
    carsPublisher.next('Tata');
    carsPublisher.next('Honda');
    const carsSubscriber1 = carsPublisher.subscribe((car) => console.log('Subscriber-1 ',car));
    carsPublisher.next('Maruti');
    const carsSubscriber2 = carsPublisher.subscribe((car) => console.log('Subscriber-2 ',car));
    carsPublisher.next('Toyota');
  }
  replaySubjectDemo() {
    let carsPublisher = new ReplaySubject(); 
    carsPublisher.next('Tata');
    carsPublisher.next('Honda');
    const carsSubscriber1 = carsPublisher.subscribe((car) => console.log('Subscriber-1 ',car));
    carsPublisher.next('Maruti');
    const carsSubscriber2 = carsPublisher.subscribe((car) => console.log('Subscriber-2 ',car));
    carsPublisher.next('Toyota');
  }
  asyncSubjectDemo() {
    let carsPublisher = new AsyncSubject(); 
    carsPublisher.next('Tata');
    carsPublisher.next('Honda');
    const carsSubscriber1 = carsPublisher.subscribe((car) => console.log('Subscriber-1 ',car));
    carsPublisher.next('Maruti');
    const carsSubscriber2 = carsPublisher.subscribe((car) => console.log('Subscriber-2 ',car));
    carsPublisher.next('Toyota');
    carsPublisher.complete();
  }

}
