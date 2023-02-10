import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  constructor(private title: Title, private router: Router) {}

  ngOnInit(): void {}

  changeMyTitle() {
    this.title.setTitle('Angular - Home Page');
  }
  doSomethingAndGoToAboutus() {
    console.log('Doing something.....');
    this.router.navigate(['/aboutus']);
  }
}
