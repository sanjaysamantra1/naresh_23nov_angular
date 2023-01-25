import { Component, OnInit } from '@angular/core';
import { add } from 'src/app/utils/math-utils';

@Component({
  selector: 'app-footer',
  // template: '<h1>This is My Footer</h1>',
  templateUrl: './footer.component.html',
  // styles: [],
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // add(2, 3);
  }
}
