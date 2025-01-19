import { NgModule } from '@angular/core';
import { SeatBookingFormComponent } from '../user/components/seat-booking-form/seat-booking-form.component';
import { RouterModule, Routes } from '@angular/router';
import { SeatUiComponent } from './components/seat-ui/seat-ui.component';
import { BusUiComponent } from './components/bus-ui/bus-ui.component';
const routes: Routes = [
  {
    path: 'seat-booking/:seatId/:busId',
    component: SeatBookingFormComponent
  },
  {
    path: 'seat-ui/:busId',
    component: SeatUiComponent
  },
  {
    path: 'bus-ui',
    component: BusUiComponent
  },
  {
    path: '',
    redirectTo: '/bus-ui',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
