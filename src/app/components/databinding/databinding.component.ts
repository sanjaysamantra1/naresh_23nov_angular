import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
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

  a:number = 20;
  b:number = 10;
  
  constructor() {}
  ngOnInit(): void {}
}
