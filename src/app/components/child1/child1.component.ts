import {
  Component,
  OnInit,
  SimpleChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['child1a', 'f1', 'child2', 'pName', 'arr'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child1Component implements OnInit {
  child1a: any;
  f1: any;
  child2: any;
  pName: any;
  arr: any;
  cars: string[] = ['tata', 'honda'];

  refresh() {
    // this.changeDetectorRef.markForCheck();
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    console.log('child Constructor');
  }

  ngOnChanges(myChanges: SimpleChanges) {
    console.log('child ngOnChanges');
    console.log(myChanges);
  }

  ngOnInit(): void {
    console.log('child ngOnInit');
  }
  ngDoCheck() {
    // this.changeDetectorRef.markForCheck();
  }
}
