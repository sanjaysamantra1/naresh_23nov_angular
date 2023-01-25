import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathdemo2Component } from './mathdemo2.component';

describe('Mathdemo2Component', () => {
  let component: Mathdemo2Component;
  let fixture: ComponentFixture<Mathdemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathdemo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathdemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
