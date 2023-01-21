import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  a: number = 10;
  b: number = 20;
  pName: any;

  f1() {
    alert('I am f1 from parent...');
  }
  receiveName(name: string) {
    this.pName = name;
  }

  constructor() {}

  ngOnInit(): void {}
}
