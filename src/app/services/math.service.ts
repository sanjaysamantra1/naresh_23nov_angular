import { Injectable } from '@angular/core';

@Injectable()
export class MathService {
  constructor() {}
  PI = 3.141;
  x = 10;

  add(a: any, b: any) {
    return a + b;
  }
  sub(a: any, b: any) {
    return a - b;
  }
}
