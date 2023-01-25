import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  ViewChild,ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  outputs: ['nameEvent'],
})
export class Child2Component implements OnInit {
  @Input() b: any;
  name: string = 'Sachin Tendulkar';

  // @ViewChild('nameBox') nameBox: any; 
  @ViewChildren('input') allinputBoxes:any;

  nameEvent = new EventEmitter();
  sendDataToParent() {
    this.nameEvent.emit(this.name);
  }

  constructor() {
    // console.log(this.nameBox);
  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    /* console.log(this.nameBox);
    this.nameBox.nativeElement.style.color = 'red';
    this.nameBox.nativeElement.focus();
    this.nameBox.nativeElement.value = 'some value'; */
    console.log(this.allinputBoxes)

    this.allinputBoxes._results?.forEach((ele: any) => {
      ele.nativeElement.style.backgroundColor = 'green';
      console.log(ele.nativeElement.classList)
    });
  }
}
