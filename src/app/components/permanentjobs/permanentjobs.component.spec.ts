import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentjobsComponent } from './permanentjobs.component';

describe('PermanentjobsComponent', () => {
  let component: PermanentjobsComponent;
  let fixture: ComponentFixture<PermanentjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentjobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermanentjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
