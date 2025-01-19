import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatUiComponent } from './components/seat-ui/seat-ui.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BusUiComponent } from './components/bus-ui/bus-ui.component';

@NgModule({
  declarations: [
    SeatUiComponent,
    ConfirmationDialogComponent,
    NavbarComponent,
    BusUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    SeatUiComponent,
    ConfirmationDialogComponent,
    NavbarComponent
  ],
})
export class SharedModule { }
