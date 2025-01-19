import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
