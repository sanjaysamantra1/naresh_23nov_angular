import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    // [{},{}]
    return this.httpClient.get<Employee[]>(this.url).pipe(map((response:Employee[])=>{
      return response.map((emp:Employee)=>{
        return new Employee(emp.id,emp.firstName,emp.lastName,emp.sal);
      })
    }))
    // return [Employee,Employee]
  }
  getEmployee(id: number) {
    return this.httpClient.get(`this.url/${id}`);
  }
  addEmployee(empObj: Employee) {
    return this.httpClient.post(this.url, empObj); //payload/body
  }
  deleteEmployee(id: number) {
    return this.httpClient.delete(`this.url/${id}`);
  }
}
