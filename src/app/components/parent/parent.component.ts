import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  // let obj = new parentComponent();
  @ViewChild(Child1Component) child1Obj:any;

  a: number;
  b: number;
  pName: any;
  arr: any = [10, 20, 30, 40];

  f1() {
    alert('I am f1 from parent...');
  }
  receiveName(name: string) {
    this.pName = name;
  }

  // constructor(private http:HttpClient,math:MathService) {
  constructor() {
    // let obj = new MathService();
    this.a = 10;
    this.b = 20;
    console.log('Parent constructor');
    console.log(this.child1Obj)
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked');
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.child1Obj)
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}
