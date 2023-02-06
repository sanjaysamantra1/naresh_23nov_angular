import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-demo1',
  templateUrl: './form-demo1.component.html',
  styleUrls: ['./form-demo1.component.css'],
})
export class FormDemo1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  name: string = '';
  age: number = 0;
}
