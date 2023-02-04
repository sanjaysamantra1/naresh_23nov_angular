import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDemo1Component } from './subject-demo1.component';

describe('SubjectDemo1Component', () => {
  let component: SubjectDemo1Component;
  let fixture: ComponentFixture<SubjectDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectDemo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
