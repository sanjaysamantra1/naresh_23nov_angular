import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  constructor(private ele: ElementRef) {
    console.log(ele);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.transform = 'rotateY(180deg)';
    this.ele.nativeElement.style.transition = '3s';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.transform = 'rotateY(180deg)';
    this.ele.nativeElement.style.transition = '5s';
  }
  private highlight(bgColor: string, color: string) {
    this.ele.nativeElement.style.backgroundColor = bgColor;
    this.ele.nativeElement.style.color = color;
  }
}
