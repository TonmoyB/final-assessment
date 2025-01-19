import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/shared/services/boooking/booking.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  bookings: any[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.bookings = this.bookingService.getAllBookings();
  }

  viewBusDetails(busId: string): void {
    console.log('View details for busId:', busId);
  }

}
