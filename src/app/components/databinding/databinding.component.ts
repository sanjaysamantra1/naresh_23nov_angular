import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DatabindingComponent implements OnInit {
  name: string = 'Sachin Tendulkar';
  img_url: string =
    'https://m.cricbuzz.com/a/img/v1/192x192/i1/c171004/sachin-tendulkar.jpg';

  flag: boolean = false;
  f1() {
    alert('I am f1...');
  }
  /*  toggleFlag() {
    this.flag = !this.flag;
  } */

  a: number = 20;
  b: number = 10;
  msg: string = '';
  maxChars: number = 100;

  addMsg: string = '';
  addition(num1: number, num2: number) {
    this.addMsg = `Addition of ${num1} & ${num2} is ${num1 + num2}`;
  }
  f2(num1: HTMLInputElement) {
    console.log(num1.value, num1.id, num1.placeholder, num1.name, num1.type);
  }

  constructor() {}
  ngOnInit(): void {}
}
