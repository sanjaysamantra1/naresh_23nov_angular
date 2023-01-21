import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  outputs:['nameEvent']
})
export class Child2Component implements OnInit {
  @Input() b: any;
  name: string = 'Sachin Tendulkar';

  nameEvent = new EventEmitter();
  sendDataToParent() {
    this.nameEvent.emit(this.name);
  }

  constructor() {}
  ngOnInit(): void {}
}
