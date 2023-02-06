import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemo2Component } from './form-demo2.component';

describe('FormDemo2Component', () => {
  let component: FormDemo2Component;
  let fixture: ComponentFixture<FormDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDemo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
