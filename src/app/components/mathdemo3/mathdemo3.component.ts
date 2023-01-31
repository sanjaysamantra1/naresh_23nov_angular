import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-mathdemo3',
  templateUrl: './mathdemo3.component.html',
  styleUrls: ['./mathdemo3.component.css'],
  providers: [MathService],
})
export class Mathdemo3Component implements OnInit {
  constructor(public mathObj: MathService) {
    // Dependency Injection
  }

  ngOnInit(): void {}
}
