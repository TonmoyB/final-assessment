import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusUiComponent } from './bus-ui.component';

describe('BusUiComponent', () => {
  let component: BusUiComponent;
  let fixture: ComponentFixture<BusUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
