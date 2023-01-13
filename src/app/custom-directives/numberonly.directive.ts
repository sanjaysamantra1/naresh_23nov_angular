import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[numberonly]',
})
export class NumberonlyDirective {
  @HostBinding('style.background-color') myBgColor: string = '';

  @HostListener('keyup', ['$event'])
  handleKeyPress(e: any) {
    let inputBoxVal = e.target.value
    let regex = new RegExp(/^[0-9]*$/);
    if (!regex.test(inputBoxVal)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'cyan';
    }
  }
}
