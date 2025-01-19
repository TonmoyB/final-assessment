import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatBookingFormComponent } from './seat-booking-form.component';

describe('SeatBookingFormComponent', () => {
  let component: SeatBookingFormComponent;
  let fixture: ComponentFixture<SeatBookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatBookingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
