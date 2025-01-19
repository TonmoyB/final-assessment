import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatUiComponent } from './seat-ui.component';

describe('SeatUiComponent', () => {
  let component: SeatUiComponent;
  let fixture: ComponentFixture<SeatUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
