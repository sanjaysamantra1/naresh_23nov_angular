import { Component, OnInit } from '@angular/core';
import { OrdinalPipe } from 'src/app/custom-pipes/ordinal.pipe';

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
  ordinalRes: string = '21st';

  convertToOrdinal() {
    const ordinalPipeObj = new OrdinalPipe();
    this.ordinalRes = ordinalPipeObj.transform(this.cardinal);
  }

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'ranjan', sal: 7000, gender: 'female' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'male' },
  ];
  searchText: string = '';
  longStr: string =
    'this is a long string, this is truncate pipe example, hello hiiii good morning';

  arr: number[] = [10, 50, 20, 40, 30];

  constructor() {}
  ngOnInit(): void {}
}
