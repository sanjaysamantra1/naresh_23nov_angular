import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathdemo3Component } from './mathdemo3.component';

describe('Mathdemo3Component', () => {
  let component: Mathdemo3Component;
  let fixture: ComponentFixture<Mathdemo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathdemo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathdemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
