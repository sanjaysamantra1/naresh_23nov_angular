import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathdemo1Component } from './mathdemo1.component';

describe('Mathdemo1Component', () => {
  let component: Mathdemo1Component;
  let fixture: ComponentFixture<Mathdemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathdemo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathdemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
