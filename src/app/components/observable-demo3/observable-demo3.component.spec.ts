import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableDemo3Component } from './observable-demo3.component';

describe('ObservableDemo3Component', () => {
  let component: ObservableDemo3Component;
  let fixture: ComponentFixture<ObservableDemo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableDemo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
