import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css'],
})
export class EmployeeCrudComponent implements OnInit {
  // employees = [
  //   { eid: 101, name: 'sanjay', sal: 5000 },
  //   { eid: 104, name: 'deepak', sal: 8000 },
  //   { eid: 103, name: 'ranjan', sal: 7000 },
  //   { eid: 102, name: 'manoj', sal: 9000 },
  // ];
  employees:Employee[]= [];
  subscription1:any;
  subscription2:any;


  receiveNewEmployee(empObj: any) {
    // this.employees.push(empObj);
    this.subscription1 = this.employeeService.addEmployee(empObj).subscribe(response=>{
      alert('employee added successfully');
      this.getEmployees();
    })
  }
  getEmployees(){
    this.subscription2 = this.employeeService.getAllEmployees().subscribe((response:Employee[]) => {
      this.employees = response;
      console.log(this.employees)
    });
  }

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees()
  }
  ngOnDestroy(){
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    // this.subscriptionsArr.forEach(ele=>ele.unsubscribe())
  }
}
