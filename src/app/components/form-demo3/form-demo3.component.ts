import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyEmailValidator } from 'src/app/utils/my-email-validator';

@Component({
  selector: 'app-form-demo3',
  templateUrl: './form-demo3.component.html',
  styleUrls: ['./form-demo3.component.css'],
})
export class FormDemo3Component implements OnInit {
  registerForm: any;

  constructor(private formBuilder: FormBuilder) {
    // this.initializeMyForm();
    this.initializeMyFormUsingFormBuilder()
  }

  ngOnInit(): void {
  }

  initializeMyForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('sachin',[Validators.required,Validators.minLength(5)]),
      lastName: new FormControl(),
      address: new FormGroup({
        city: new FormControl(),
        state: new FormControl(),
        pin: new FormControl(),
      }),
    });
  }
  initializeMyFormUsingFormBuilder(){
      this.registerForm = this.formBuilder.group({
        firstName: new FormControl('sachin',[Validators.required,Validators.minLength(5)],[]),
        lastName: new FormControl(),
        email:new FormControl('abc@gmail.com',[Validators.email,Validators.required,MyEmailValidator.isValidEmail]),
        address: new FormGroup({
          city: new FormControl(),
          state: new FormControl(),
          pin: new FormControl(),
        }),
      })
  } 

  submitMyForm(formdata:any){
    console.log(formdata)
  }
}
