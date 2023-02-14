import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grocery1Component } from './grocery1.component';

describe('Grocery1Component', () => {
  let component: Grocery1Component;
  let fixture: ComponentFixture<Grocery1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grocery1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grocery1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
