import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  name: string = 'SaChIn TeNdUlKaR';
  mySal: number = 5000;
  today = new Date();
  emp = { id: 101, name: 'sachin', sal: 5000 };
  empEntry = Object.entries(this.emp);
  cars: string[] = ['Tata', 'Honda', 'maruti', 'Hundai', 'Toyota', 'Mahindra'];
  msg:string = '';

  constructor() {}
  ngOnInit(): void {}
}
