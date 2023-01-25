import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  constructor() {}
  PI = 3.141;

  add(a: any, b: any) {
    return a + b;
  }
  sub(a: any, b: any) {
    return a - b;
  }
}
