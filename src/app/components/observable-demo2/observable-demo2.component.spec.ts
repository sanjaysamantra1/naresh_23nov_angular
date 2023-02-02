import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableDemo2Component } from './observable-demo2.component';

describe('ObservableDemo2Component', () => {
  let component: ObservableDemo2Component;
  let fixture: ComponentFixture<ObservableDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableDemo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
