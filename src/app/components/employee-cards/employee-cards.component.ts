import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-cards',
  templateUrl: './employee-cards.component.html',
  styleUrls: ['./employee-cards.component.css'],
  inputs:['employees']
})
export class EmployeeCardsComponent implements OnInit {
  employees:any;
  constructor() { }

  ngOnInit(): void {
  }

}
