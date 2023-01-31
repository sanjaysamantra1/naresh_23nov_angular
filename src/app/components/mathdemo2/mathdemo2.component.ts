import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-mathdemo2',
  templateUrl: './mathdemo2.component.html',
  styleUrls: ['./mathdemo2.component.css'],
})
export class Mathdemo2Component implements OnInit {
  a = 15;
  b = 25;
  addResult: number = 0;

  constructor(public mathObj: MathService) {
    // Dependency Injection
  }

  ngOnInit(): void {
    this.addResult = this.mathObj.add(this.a, this.b);
    console.log(`Addition of ${this.a} & ${this.b} is: ${this.addResult}`);
  }
}
