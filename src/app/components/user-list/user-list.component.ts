import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users:any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchUserDataJS();
    this.fetchUserDataAngular();
  }

  async fetchUserDataJS() { // Not Recomended
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const finalData = await users.json();
    console.log(finalData);
  }
  fetchUserDataAngular(){
    let usersObs = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    usersObs.subscribe(response=>{
        console.log(response);
        this.users = response;
    },
    err=>{
      alert('something went wrong')
    }
    )
  }
}
