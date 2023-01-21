import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  inputs: ['employees'],
})
export class EmployeeListComponent implements OnInit {
  employees: any;

  constructor() {}
  ngOnInit(): void {}
}
