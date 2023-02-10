import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractjobsComponent } from './contractjobs.component';

describe('ContractjobsComponent', () => {
  let component: ContractjobsComponent;
  let fixture: ComponentFixture<ContractjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractjobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
