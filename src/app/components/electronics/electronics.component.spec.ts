import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsComponent } from './electronics.component';

describe('ElectronicsComponent', () => {
  let component: ElectronicsComponent;
  let fixture: ComponentFixture<ElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
