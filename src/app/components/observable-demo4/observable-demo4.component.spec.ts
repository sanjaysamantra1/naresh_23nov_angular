import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableDemo4Component } from './observable-demo4.component';

describe('ObservableDemo4Component', () => {
  let component: ObservableDemo4Component;
  let fixture: ComponentFixture<ObservableDemo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableDemo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableDemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
