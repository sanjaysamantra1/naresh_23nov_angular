import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css'],
})
export class EmployeeCrudComponent implements OnInit {
  employees = [
    { eid: 101, name: 'sanjay', sal: 5000 },
    { eid: 104, name: 'deepak', sal: 8000 },
    { eid: 103, name: 'ranjan', sal: 7000 },
    { eid: 102, name: 'manoj', sal: 9000 },
  ];

  receiveNewEmployee(empObj: any) {
    this.employees.push(empObj);
  }

  constructor() {}
  ngOnInit(): void {}
}
