import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatBookingFormComponent } from './components/seat-booking-form/seat-booking-form.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SeatBookingFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SeatBookingFormComponent]
})
export class UserModule { }
