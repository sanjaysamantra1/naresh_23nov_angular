import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo2',
  templateUrl: './form-demo2.component.html',
  styleUrls: ['./form-demo2.component.css'],
})
export class FormDemo2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  user = {
    firstName: '',
    lastName: 'tendulkar',
    email: '',
    address: {
      street: '',
      city: '',
      pin: '',
    },
  };

  submitMyForm(myForm: NgForm) {
    console.log(myForm);
  }
}
