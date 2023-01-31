import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) {}

  getAllEmployees() {
    return this.httpClient.get(this.url);
  }
  getEmployee(id: number) {
    return this.httpClient.get(`this.url/${id}`);
  }
  addEmployee(empObj: any) {
    return this.httpClient.post(this.url, empObj); //payload/body
  }
  deleteEmployee(id: number) {
    return this.httpClient.delete(`this.url/${id}`);
  }
}
