import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveMessageComponent } from './receive-message.component';

describe('ReceiveMessageComponent', () => {
  let component: ReceiveMessageComponent;
  let fixture: ComponentFixture<ReceiveMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
