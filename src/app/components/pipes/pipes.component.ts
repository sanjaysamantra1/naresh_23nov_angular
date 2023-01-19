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
  msg: string = '';
  cardinal: number = 21;

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'ranjan', sal: 7000, gender: 'female' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'male' },
  ];
  searchText: string = '';
  longStr: string =
    'this is a long string, this is truncate pipe example, hello hiiii good morning';

  constructor() {}
  ngOnInit(): void {}
}
