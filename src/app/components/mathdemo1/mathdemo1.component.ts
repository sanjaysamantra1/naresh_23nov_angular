import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-mathdemo1',
  templateUrl: './mathdemo1.component.html',
  styleUrls: ['./mathdemo1.component.css'],
})
export class Mathdemo1Component implements OnInit {
  a = 20;
  b = 10;
  addResult: number = 0;

  constructor(public mathObj: MathService) {
    // Dependency Injection
  }

  ngOnInit(): void {
    this.addResult = this.mathObj.add(this.a, this.b);
    console.log(`Addition of ${this.a} & ${this.b} is: ${this.addResult}`);
  }
}
